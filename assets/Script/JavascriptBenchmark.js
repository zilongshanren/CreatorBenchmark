

cc.Class({
    extends: cc.Component,

    properties: {
       cryptoButton: cc.Button
    },

    // use this for initialization
    onLoad: function() {
       this.cryptoButton.node.on('click', this.startCryptoTest, this);
    },

    startCryptoTest: function () {
        cc.testScene = "crypto";
        cc.director.loadScene("pureJsTest");
    },

    startNavierStokes: function () {
        cc.testScene = "navierStokes";
        cc.director.loadScene("pureJsTest");
    },

    startRichards: function () {
        cc.testScene = "richards";
        cc.director.loadScene("pureJsTest");
    },

    startSplay: function () {
        cc.testScene = "splay";
        cc.director.loadScene("pureJsTest");
    },

    startBunnyTest: function () {
        cc.testScene = "bunny";
        cc.director.loadScene("BunnyTest");
    },

    startNodeTest: function () {
        cc.testScene = "createNodeTest";
        cc.director.loadScene("SpriteTest");
    },

    startPrefabTest: function () {
        cc.testScene = "createPrefabTest";
        cc.director.loadScene("SpriteTest");
    },

     startComponent: function () {
        cc.testScene = "createComponentTest";
        cc.director.loadScene("SpriteTest");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});