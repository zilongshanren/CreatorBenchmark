cc.Class({
    extends: cc.Component,

    properties: {
        statusLabel: cc.Label,
        titleLabel: cc.Label,
        testPrefab: cc.Prefab,
        _nodes: []
    },

    onDestroy: function () {
        this._nodes.length = 0;
    },

    // use this for initialization
    onLoad: function() {
        this._nodes.length = 0;

        var testFunc;
        switch (cc.testScene) {
            case 'createNodeTest':
                testFunc = this.createNodeTest.bind(this);
                this.titleLabel.string = "createNode Test";
                break;
            case 'createPrefabTest':
                testFunc = this.createPrefabTest.bind(this);
                this.titleLabel.string = "createPrefab Test";
                break;
            case 'createComponentTest':
                testFunc = this.createComponentTest.bind(this);
                this.titleLabel.string = "createComponent Test";
                break;
        }

        this.statusLabel.string = "Tests will started in 1s...";
        this.scheduleOnce(() => {
            this.statusLabel.string = "";
            testFunc();
        }, 1.0);


    },

    return: function () {
        this._nodes.length = 0;
        if (CC_JSB) {
            cc.sys.garbageCollect();
        }
        cc.director.loadScene("Benchmark");
    },

    createPrefabTest: function () {
        var suite = new Benchmark.Suite;
        var that = this;
        suite.add('Create Node Test', function () {
            var prefab = cc.instantiate(that.testPrefab);
            that._nodes.push(prefab);
        })
            .on('cycle', function (event) {
                that.statusLabel.string += String(event.target);
                that.statusLabel.string += "\n";
                that.statusLabel.string += "\n";
            })
            .on('start', function () {
            })
            .on('complete', function () { })
            // run async
            .run({
                'async': true
            });
    },

    createComponentTest: function () {
        var suite = new Benchmark.Suite;
        var that = this;
        suite.add('Create Node Test', function () {
            var node = new cc.Node();
            node.addComponent(cc.Sprite);
            that._nodes.push(node);
        })
            .on('cycle', function (event) {
                that.statusLabel.string += String(event.target);
                that.statusLabel.string += "\n";
                that.statusLabel.string += "\n";
            })
            .on('start', function () {
            })
            .on('complete', function () { })
            // run async
            .run({
                'async': true
            });
    },

    createNodeTest: function() {
        var suite = new Benchmark.Suite;
        var that = this;
        suite.add('Create Node Test', function() {
            var node = new cc.Node();
            that._nodes.push(node);
            })
            // add listeners
            .on('cycle', function(event) {
                that.statusLabel.string += String(event.target);
                that.statusLabel.string += "\n";
                that.statusLabel.string += "\n";
            })
            .on('start', function() {
            })
            .on('complete', function() {})
            // run async
            .run({
                'async': true
            });
    }
});
