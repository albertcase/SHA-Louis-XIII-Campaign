(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1040,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"i/c1.jpg", id:"c1"},
		{src:"i/c10.png", id:"c10"},
		{src:"i/s_btn.png", id:"s_btn"},
		{src:"i/s_fh.png", id:"s_fh"}
	]
};



// symbols:



(lib.c1 = function() {
	this.initialize(img.c1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1044);


(lib.c10 = function() {
	this.initialize(img.c10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.s_btn = function() {
	this.initialize(img.s_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,318);


(lib.s_fh = function() {
	this.initialize(img.s_fh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,14);


(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F4D2BA","rgba(247,228,170,0)"],[0,1],0,0,0,0,0,57.9).s().p("AmVGWQioiogBjuQABjsCoipQCpioDsgBQDuABCoCoQCoCpABDsQgBDuioCoQioCojuABQjsgBipiog");
	this.shape.setTransform(57.5,57.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,115,115);


(lib.Symbol17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(247,228,170,0)","#F7E4AA","rgba(247,228,170,0)"],[0,0.459,1],-38,0,38,0).s().p("Al7MsIAA5XIL2AAIAAZXg");
	this.shape.setTransform(38,81.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,162.6);


(lib.Symbol1copy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#977255").s().p("AhgBhIAAjBIDBAAIAADBg");
	this.shape.setTransform(9.8,9.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,19.5);


(lib.Symbol1copy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEAE98").s().p("AhgBhIAAjBIDBAAIAADBg");
	this.shape.setTransform(9.8,9.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,19.5);


(lib.Symbol1copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8CACD").s().p("AhgBhIAAjBIDBAAIAADBg");
	this.shape.setTransform(9.8,9.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,19.5);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgBhIAAjBIDBAAIAADBg");
	this.shape.setTransform(9.8,9.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,19.5);


(lib.btn = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.s_btn, null, new cjs.Matrix2D(0.853,0,0,0.853,-112.1,-210.1)).s().p("AnyJkIAAzHIPlAAIAATHg");
	this.shape.setTransform(50,61.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,122.5);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("AjMDPIAAmdIGZAAIAAGdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:83.1,y:82.8}).wait(39).to({graphics:null,x:0,y:0}).wait(6));

	// Layer 3
	this.instance = new lib.Symbol17("synched",0);
	this.instance.setTransform(126.1,30.6,1,1,-50.7,0,0,38.1,81.2);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({x:34.6,y:133.7},38).to({_off:true},1).wait(6));

	// Layer 1
	this.instance_1 = new lib.c10();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// Layer 4
	this.instance_2 = new lib.Symbol18("synched",0);
	this.instance_2.setTransform(82,82,1,1,0,0,0,57.5,57.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.43,scaleY:1.43,alpha:1},29).to({scaleX:1,scaleY:1,alpha:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 1 copy 3
	this.instance = new lib.Symbol1copy3("synched",0);
	this.instance.setTransform(427,9.8,1,1,0,0,0,9.8,9.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},15).wait(52).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(16));

	// Symbol 1 copy 3
	this.instance_1 = new lib.Symbol1copy3("synched",0);
	this.instance_1.setTransform(525,95.1,1,1,0,0,0,9.8,9.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({alpha:1},15).wait(51).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(13));

	// Symbol 1 copy 3
	this.instance_2 = new lib.Symbol1copy3("synched",0);
	this.instance_2.setTransform(544.5,386.2,1,1,0,0,0,9.8,9.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({alpha:1},15).wait(58).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1 copy 3
	this.instance_3 = new lib.Symbol1copy3("synched",0);
	this.instance_3.setTransform(449.5,630.2,1,1,0,0,0,9.8,9.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({alpha:0.5},15).wait(47).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(7));

	// Symbol 1 copy 3
	this.instance_4 = new lib.Symbol1copy3("synched",0);
	this.instance_4.setTransform(389.4,750.3,1,1,0,0,0,9.8,9.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({alpha:1},15).wait(54).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1 copy 3
	this.instance_5 = new lib.Symbol1copy3("synched",0);
	this.instance_5.setTransform(87.4,777.3,1,1,0,0,0,9.8,9.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({alpha:1},15).wait(50).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(13));

	// Symbol 1 copy 3
	this.instance_6 = new lib.Symbol1copy3("synched",0);
	this.instance_6.setTransform(134.9,384.2,1,1,0,0,0,9.8,9.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({alpha:0.5},15).wait(57).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(8));

	// Symbol 1 copy 3
	this.instance_7 = new lib.Symbol1copy3("synched",0);
	this.instance_7.setTransform(9.8,568.2,1,1,0,0,0,9.8,9.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({alpha:1},15).wait(50).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(16));

	// Symbol 1 copy 3
	this.instance_8 = new lib.Symbol1copy3("synched",0);
	this.instance_8.setTransform(67.9,170.1,1,1,0,0,0,9.8,9.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({alpha:1},15).wait(57).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(11));

	// Symbol 1 copy 3
	this.instance_9 = new lib.Symbol1copy3("synched",0);
	this.instance_9.setTransform(9.8,28.1,1,1,0,0,0,9.8,9.8);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},15).wait(49).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,18.3,19.5,19.5);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 1 copy 2
	this.instance = new lib.Symbol1copy2("synched",0);
	this.instance.setTransform(457.2,9.8,1,1,0,0,0,9.8,9.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},14).wait(69).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1 copy 2
	this.instance_1 = new lib.Symbol1copy2("synched",0);
	this.instance_1.setTransform(403,48.8,1,1,0,0,0,9.8,9.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:0.5},14).wait(67).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(2));

	// Symbol 1 copy 2
	this.instance_2 = new lib.Symbol1copy2("synched",0);
	this.instance_2.setTransform(568,194.4,1,1,0,0,0,9.8,9.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({alpha:0.5},14).wait(60).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy 2
	this.instance_3 = new lib.Symbol1copy2("synched",0);
	this.instance_3.setTransform(457.2,389.4,1,1,0,0,0,9.8,9.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({alpha:0.5},14).wait(58).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy 2
	this.instance_4 = new lib.Symbol1copy2("synched",0);
	this.instance_4.setTransform(512.2,507.4,1,1,0,0,0,9.8,9.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({alpha:0.5},14).wait(53).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(4));

	// Symbol 1 copy 2
	this.instance_5 = new lib.Symbol1copy2("synched",0);
	this.instance_5.setTransform(471.2,527.9,1,1,0,0,0,9.8,9.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({alpha:0.5},14).wait(49).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1 copy 2
	this.instance_6 = new lib.Symbol1copy2("synched",0);
	this.instance_6.setTransform(551.2,609.2,1,1,0,0,0,9.8,9.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({alpha:0.5},14).wait(41).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(11));

	// Symbol 1 copy 2
	this.instance_7 = new lib.Symbol1copy2("synched",0);
	this.instance_7.setTransform(551.2,709.2,1,1,0,0,0,9.8,9.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({alpha:0.5},14).wait(49).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(8));

	// Symbol 1 copy 2
	this.instance_8 = new lib.Symbol1copy2("synched",0);
	this.instance_8.setTransform(536.2,791.3,1,1,0,0,0,9.8,9.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({alpha:1},14).wait(55).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1 copy 2
	this.instance_9 = new lib.Symbol1copy2("synched",0);
	this.instance_9.setTransform(416.1,709.2,1,1,0,0,0,9.8,9.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({alpha:1},14).wait(55).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1 copy 2
	this.instance_10 = new lib.Symbol1copy2("synched",0);
	this.instance_10.setTransform(271.1,832.2,1,1,0,0,0,9.8,9.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).to({alpha:1},14).wait(59).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(4));

	// Symbol 1 copy 2
	this.instance_11 = new lib.Symbol1copy2("synched",0);
	this.instance_11.setTransform(107.9,527.9,1,1,0,0,0,9.8,9.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({alpha:0.5},14).wait(64).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy 2
	this.instance_12 = new lib.Symbol1copy2("synched",0);
	this.instance_12.setTransform(9.8,213.9,1,1,0,0,0,9.8,9.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({alpha:1},14).wait(67).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(2));

	// Symbol 1 copy 2
	this.instance_13 = new lib.Symbol1copy2("synched",0);
	this.instance_13.setTransform(118.1,48.8,1,1,0,0,0,9.8,9.8);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},14).wait(69).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108.3,0,358.6,58.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 1 copy
	this.instance = new lib.Symbol1copy("synched",0);
	this.instance.setTransform(525,180.6,1,1,0,0,0,9.8,9.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({alpha:0.5},14).wait(54).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(5));

	// Symbol 1 copy
	this.instance_1 = new lib.Symbol1copy("synched",0);
	this.instance_1.setTransform(564,54.6,1,1,0,0,0,9.8,9.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({alpha:1},14).wait(56).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(4));

	// Symbol 1 copy
	this.instance_2 = new lib.Symbol1copy("synched",0);
	this.instance_2.setTransform(502,9.8,1,1,0,0,0,9.8,9.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({alpha:1},14).wait(60).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy
	this.instance_3 = new lib.Symbol1copy("synched",0);
	this.instance_3.setTransform(549.5,263.6,1,1,0,0,0,9.8,9.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({alpha:1},14).wait(62).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1 copy
	this.instance_4 = new lib.Symbol1copy("synched",0);
	this.instance_4.setTransform(470,391.6,1,1,0,0,0,9.8,9.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({alpha:0.5},14).wait(63).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1 copy
	this.instance_5 = new lib.Symbol1copy("synched",0);
	this.instance_5.setTransform(530,491.7,1,1,0,0,0,9.8,9.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({alpha:0.5},14).wait(53).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(13));

	// Symbol 1 copy
	this.instance_6 = new lib.Symbol1copy("synched",0);
	this.instance_6.setTransform(527,777.7,1,1,0,0,0,9.8,9.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({alpha:1},14).wait(61).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(5));

	// Symbol 1 copy
	this.instance_7 = new lib.Symbol1copy("synched",0);
	this.instance_7.setTransform(282.9,878.3,1,1,0,0,0,9.8,9.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({alpha:0.5},14).wait(58).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(9));

	// Symbol 1 copy
	this.instance_8 = new lib.Symbol1copy("synched",0);
	this.instance_8.setTransform(136.9,758.2,1,1,0,0,0,9.8,9.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({alpha:1},14).wait(54).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(13));

	// Symbol 1 copy
	this.instance_9 = new lib.Symbol1copy("synched",0);
	this.instance_9.setTransform(136.9,697.2,1,1,0,0,0,9.8,9.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({alpha:1},14).wait(67).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1 copy
	this.instance_10 = new lib.Symbol1copy("synched",0);
	this.instance_10.setTransform(109.9,533.2,1,1,0,0,0,9.8,9.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).to({alpha:0.5},14).wait(65).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy
	this.instance_11 = new lib.Symbol1copy("synched",0);
	this.instance_11.setTransform(9.8,426.1,1,1,0,0,0,9.8,9.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({alpha:1},14).wait(64).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy
	this.instance_12 = new lib.Symbol1copy("synched",0);
	this.instance_12.setTransform(37.8,158.1,1,1,0,0,0,9.8,9.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).to({alpha:1},14).wait(61).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy
	this.instance_13 = new lib.Symbol1copy("synched",0);
	this.instance_13.setTransform(208.9,74.1,1,1,0,0,0,9.8,9.8);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({alpha:1},14).wait(52).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(4));

	// Symbol 1 copy
	this.instance_14 = new lib.Symbol1copy("synched",0);
	this.instance_14.setTransform(105.9,54.6,1,1,0,0,0,9.8,9.8);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:1},14).wait(65).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96.1,44.8,19.5,19.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(366.5,12.8,1,1,0,0,0,9.8,9.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(67).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(459,75.3,1,1,0,0,0,9.8,9.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({alpha:1},14).wait(65).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(2));

	// Symbol 1
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(559,136.4,1,1,0,0,0,9.8,9.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({alpha:1},14).wait(66).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(572,264.4,1,1,0,0,0,9.8,9.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({alpha:1},14).wait(60).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(4));

	// Symbol 1
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(443.5,499.4,1,1,0,0,0,9.8,9.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({alpha:1},14).wait(61).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.setTransform(564,449.4,1,1,0,0,0,9.8,9.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({alpha:1},14).wait(61).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.setTransform(572,511.5,1,1,0,0,0,9.8,9.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({alpha:1},14).wait(57).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.setTransform(496,674,1,1,0,0,0,9.8,9.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({alpha:1},14).wait(49).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1
	this.instance_8 = new lib.Symbol1("synched",0);
	this.instance_8.setTransform(466,816.6,1,1,0,0,0,9.8,9.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({alpha:1},14).wait(52).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1
	this.instance_9 = new lib.Symbol1("synched",0);
	this.instance_9.setTransform(78.9,816.6,1,1,0,0,0,9.8,9.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({alpha:1},14).wait(52).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(8));

	// Symbol 1
	this.instance_10 = new lib.Symbol1("synched",0);
	this.instance_10.setTransform(30.9,654.5,1,1,0,0,0,9.8,9.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({alpha:1},14).wait(49).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(13));

	// Symbol 1
	this.instance_11 = new lib.Symbol1("synched",0);
	this.instance_11.setTransform(149.4,632,1,1,0,0,0,9.8,9.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(8).to({_off:false},0).to({alpha:1},14).wait(48).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(14));

	// Symbol 1
	this.instance_12 = new lib.Symbol1("synched",0);
	this.instance_12.setTransform(153.4,490,1,1,0,0,0,9.8,9.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).to({alpha:1},14).wait(55).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(9));

	// Symbol 1
	this.instance_13 = new lib.Symbol1("synched",0);
	this.instance_13.setTransform(50.4,531,1,1,0,0,0,9.8,9.8);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({alpha:1},14).wait(58).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1
	this.instance_14 = new lib.Symbol1("synched",0);
	this.instance_14.setTransform(9.8,283.9,1,1,0,0,0,9.8,9.8);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).to({alpha:1},14).wait(65).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(2));

	// Symbol 1
	this.instance_15 = new lib.Symbol1("synched",0);
	this.instance_15.setTransform(72.9,94.8,1,1,0,0,0,9.8,9.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({_off:false},0).to({alpha:1},14).wait(64).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1
	this.instance_16 = new lib.Symbol1("synched",0);
	this.instance_16.setTransform(72.9,9.8,1,1,0,0,0,9.8,9.8);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({alpha:1},14).wait(65).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.1,0,313.1,22.5);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// Symbol 5
	this.instance = new lib.Symbol5();
	this.instance.setTransform(284.9,417.9,1,1,0,0,0,277.1,393.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).wait(2));

	// Symbol 4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(301.7,467.7,1,1,0,0,0,288.9,420.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(22));

	// Symbol 3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(286.8,443.9,1,1,0,0,0,286.8,443.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(42));

	// Symbol 2
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(299.7,434.6,1,1,0,0,0,290.9,413.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.8,21.5,313.1,22.5);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var S=this;
		S.stop();
		
		var _id=getArgument("id"),uInfo,uName,imgUrl
		if(_id=="")
		{
			console.log("无数据，跳转主页");
			window.location.href=domain;
		}
		else{ getInfo(); }
		
		
		S.btn.on("mousedown",function(e)
		{
			e.remove();
			window.location.href=domain;
		})
		
		function getInfo()
		{
			/*var _d= eval('(' + '{"code": 1,"msg": "成功","url": "a.jpg","name": "哈哈和黑哦哦","txt": "%E8%89%BA%E6%9C%AF%E7%9A%84%E5%88%9B%E4%BD%9C%EF%BC%8C%E9%9C%80%E8%A6%81%E5%85%88%E7%94%A8%E5%BF%83%E5%8E%BB%E6%8D%95%E6%8D%89%EF%BC%8C%E5%86%8D%E4%BB%8E%E4%B8%87%2C%7C%2C%E7%89%A9%E8%87%AA%E7%84%B6%E4%B8%AD%E6%94%AB%E5%8F%96%E7%81%B5%E6%84%9F%EF%BC%8C%E5%B0%86%E5%90%84%E7%B1%BB%E5%85%83%E7%B4%A0%E8%BF%9B%E8%A1%8C%E5%87%9D%2C%7C%2C%E7%BB%83%E3%80%81%E9%87%8D%E7%BB%84%EF%BC%8C%E6%96%B9%E8%83%BD%E4%BD%BF%E5%85%B6%E5%9C%A8%E5%B2%81%E6%9C%88%E4%B8%AD%E5%8E%86%E4%B9%85%E5%BC%A5%E9%A6%99%E3%80%82"}' + ')');
			
			uInfo=decodeURIComponent(_d.txt).split(",|,");
			uName=decodeURIComponent(_d.name);
			imgUrl=_d.url;
			console.log(uInfo,uName)
			createIt()
			S.removeChild(S.err)
			return;*/
			
			
		
			$.ajax(
			{
				type		: "get",
				url			: domain+"ajax/api/getmessage?r="+Math.random(),
				dataType	: "json",
				data:
				{
					id  	: _id
				},
				success		: function (_d)
				{
					console.log(_d)
					if(_d.status=="1")
					{
						uInfo=decodeURIComponent(_d.txt).split(",|,");
						uName=decodeURIComponent(_d.name);
						imgUrl=_d.url;
						
						createIt()
						S.removeChild(S.err)
					}
					else
					{
						log(_d.msg+" 5秒后自动返回首页")
					}
				},
				error		: function (XMLHttpRequest, textStatus, errorThrown) 
				{ 
					log("网络错误"+" 5秒后自动返回首页")
				}
			});	
		}
		
		
		function createIt()
		{
			for(var i=0;i<uInfo.length;i++)
			{
				S["info"+i].text=uInfo[i]
			}
			S.na.text=uName
		}
		
		
		
		
		
		
		
		
		function getArgument(_arg)
		{
		    var _t=window.location.href.split("?");
		    if(_t.length>1) {var reg = new RegExp("(^|&)"+ _arg +"=([^&]*)(&|$)");var r = _t[1].match(reg); if(r!=null){return  r[2]}; return ""; }
		    return "";
		}
		
		
		var ct
		function log(_str)
		{
			S.err.text=_str;
			if(ct){ clearTimeout(ct) };
			ct=setTimeout(function()
			{
				S.err.text="";
				window.location.href=domain;
			},5000);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// items
	this.btn = new lib.btn();
	this.btn.setTransform(323,898.2,1,1,0,0,0,55,61.2);

	this.na = new cjs.Text("", "26px 'Microsoft YaHei'", "#602F08");
	this.na.name = "na";
	this.na.textAlign = "center";
	this.na.lineHeight = 28;
	this.na.lineWidth = 534;
	this.na.setTransform(315,629.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.s_fh, null, new cjs.Matrix2D(1,0,0,1,-8.5,-7)).s().p("AhUBFIAAiJICpAAIAACJg");
	this.shape.setTransform(319.3,248.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.s_fh, null, new cjs.Matrix2D(1,0,0,1,-29.5,-7)).s().p("Ah7BFIAAiJID3AAIAACJg");
	this.shape_1.setTransform(311.4,443.9);

	this.info2 = new cjs.Text("", "26px 'Microsoft YaHei'", "#602F08");
	this.info2.name = "info2";
	this.info2.textAlign = "center";
	this.info2.lineHeight = 28;
	this.info2.lineWidth = 534;
	this.info2.setTransform(322,360.2);

	this.info1 = new cjs.Text("", "26px 'Microsoft YaHei'", "#602F08");
	this.info1.name = "info1";
	this.info1.textAlign = "center";
	this.info1.lineHeight = 28;
	this.info1.lineWidth = 534;
	this.info1.setTransform(322,321.9);

	this.info0 = new cjs.Text("", "26px 'Microsoft YaHei'", "#602F08");
	this.info0.name = "info0";
	this.info0.textAlign = "center";
	this.info0.lineHeight = 28;
	this.info0.lineWidth = 534;
	this.info0.setTransform(322,283.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.s_btn, null, new cjs.Matrix2D(0.853,0,0,0.853,-116,-57.9)).s().p("AyHJDIAAyFMAkPAAAIAASFg");
	this.shape_2.setTransform(321.9,746);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.info0},{t:this.info1},{t:this.info2},{t:this.shape_1},{t:this.shape},{t:this.na},{t:this.btn}]}).wait(14));

	// logTip
	this.err = new cjs.Text("", "22px 'Microsoft YaHei'", "#602F08");
	this.err.name = "err";
	this.err.textAlign = "center";
	this.err.lineHeight = 24;
	this.err.lineWidth = 567;
	this.err.setTransform(322.4,460);

	this.timeline.addTween(cjs.Tween.get(this.err).wait(14));

	// Layer 21    subBtn
	this.btn_1 = new lib.Symbol15();
	this.btn_1.setTransform(318.1,748.2,1,1,0,0,0,82,82);
	this.btn_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btn_1).to({alpha:1},13).wait(1));

	// blockEff
	this.instance = new lib.Symbol6();
	this.instance.setTransform(320.5,494.9,1,1,0,0,0,295.2,444.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

	// Layer 1
	this.instance_1 = new lib.c1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-110.8,640,1154.9);


// stage content:
(lib.s1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// mc
	this.instance = new lib.main();
	this.instance.setTransform(320,520,1,1,0,0,0,320,520);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib1 = lib1||{}, img1 = img1||{}, createjs = createjs||{}, ss = ss||{});
var lib1, img1, createjs, ss;