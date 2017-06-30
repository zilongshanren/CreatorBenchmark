cc.Class({
    extends: cc.Component,

    properties: {
        statusLabel: cc.Label,
        titleLabel: cc.Label
    },

    // use this for initialization
    onLoad: function() {
        var testFunc;
        switch (cc.testScene) {
            case 'createNodeTest':
                testFunc = this.createNodeTest.bind(this);
                this.titleLabel.string = "createNode Test";
                break;
        }

        this.statusLabel.string = "Tests will started in 1s...";
        this.scheduleOnce(() => {
            this.statusLabel.string = "";
            testFunc();
        }, 1.0);


    },

    createNodeTest: function() {
        var suite = new Benchmark.Suite;
        var that = this;

        suite.add('Create Node Test', function() {
                new cc.Node();
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