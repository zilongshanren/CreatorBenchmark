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
            case 'crypto':
                testFunc = this.cryptoTest.bind(this);
                this.titleLabel.string = "Crypto Test";
                break;
            case "navierStokes":
                testFunc = this.navierStokesTest.bind(this);
                this.titleLabel.string = "NavierStokes Test";
                break;
            case "richards":
                testFunc = this.richardsTest.bind(this);
                this.titleLabel.string = "Richards Test";
                break;
            case "splay":
                testFunc = this.splayTest.bind(this);
                this.titleLabel.string = "Splay Test";
                break;
        }
        this.statusLabel.string = "Tests will started in 1s...";
        this.scheduleOnce(() => {
            this.statusLabel.string = "";
            testFunc();
        }, 1.0);
    },


    cryptoTest: function() {
        var suite = new Benchmark.Suite;
        var that = this;

        suite.add('Crypto#Encrypt', function() {
                encrypt();
            })
            .add('Crypto#Decrypt', function() {
                decrypt();
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
    },

    navierStokesTest() {
        var suite = new Benchmark.Suite;
        var that = this;
        // add tests
        suite.add('NavierStokes#test', function() {
                runNavierStokes();
            })
            // add listeners
            .on('cycle', function(event) {
                that.statusLabel.string += String(event.target);
                that.statusLabel.string += "\n";
                that.statusLabel.string += "\n";
            })
            .on('start', function() {
                setupNavierStokes();
            })
            .on('complete', function() {
                tearDownNavierStokes();
            })
            // run async
            .run({
                'async': true
            });
    },

    splayTest() {
        var suite = new Benchmark.Suite;
        var that = this;
        // add tests
        suite.add('Splay#test', function() {
                SplayRun();
            })
            // add listeners
            .on('cycle', function(event) {
                that.statusLabel.string += String(event.target);
                that.statusLabel.string += "\n";
                that.statusLabel.string += "\n";
            })
            .on('start', function() {
                SplaySetup();
            })
            .on('complete', function() {
                SplayTearDown();
            })
            // run async
            .run({
                'async': true
            });
    },

    richardsTest() {

        var suite = new Benchmark.Suite;
        var that = this;
        // add tests
        suite.add('Richards#test', function() {
                runRichards();
            })
            // add listeners
            .on('cycle', function(event) {
                that.statusLabel.string += String(event.target);
                that.statusLabel.string += "\n";
                that.statusLabel.string += "\n";
            })
            .on('complete', function() {})
            // run async
            .run({
                'async': true
            });
    },

    return () {
        cc.director.loadScene("Benchmark");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});