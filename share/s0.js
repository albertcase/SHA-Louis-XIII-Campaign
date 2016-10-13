(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1040,
	fps: 24,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.dot = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAUQgIgJgBgLQABgLAIgIQAIgIALgBQALABAJAIQAJAIgBALQABALgJAJQgJAJgLgBQgLABgIgJg");
	this.shape.setTransform(2.9,2.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.8,5.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dot
	this.instance = new lib.dot("synched",0);
	this.instance.setTransform(60,3.9,1,1,0,0,0,2.9,2.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// dot
	this.instance_1 = new lib.dot("synched",0);
	this.instance_1.setTransform(48.2,6.9,1,1,0,0,0,2.9,2.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(2));

	// dot
	this.instance_2 = new lib.dot("synched",0);
	this.instance_2.setTransform(37.7,11.9,1,1,0,0,0,2.9,2.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// dot
	this.instance_3 = new lib.dot("synched",0);
	this.instance_3.setTransform(27.6,18.9,1,1,0,0,0,2.9,2.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(4));

	// dot
	this.instance_4 = new lib.dot("synched",0);
	this.instance_4.setTransform(18.9,27.6,1,1,0,0,0,2.9,2.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(5));

	// dot
	this.instance_5 = new lib.dot("synched",0);
	this.instance_5.setTransform(11.8,37.6,1,1,0,0,0,2.9,2.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// dot
	this.instance_6 = new lib.dot("synched",0);
	this.instance_6.setTransform(6.7,48.7,1,1,0,0,0,2.9,2.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(7));

	// dot
	this.instance_7 = new lib.dot("synched",0);
	this.instance_7.setTransform(3.8,60.4,1,1,0,0,0,2.9,2.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(8));

	// dot
	this.instance_8 = new lib.dot("synched",0);
	this.instance_8.setTransform(2.9,72.5,1,1,0,0,0,2.9,2.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(9));

	// dot
	this.instance_9 = new lib.dot("synched",0);
	this.instance_9.setTransform(3.9,84.6,1,1,0,0,0,2.9,2.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(26).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(10));

	// dot
	this.instance_10 = new lib.dot("synched",0);
	this.instance_10.setTransform(7,96.3,1,1,0,0,0,2.9,2.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(11));

	// dot
	this.instance_11 = new lib.dot("synched",0);
	this.instance_11.setTransform(12.1,107.2,1,1,0,0,0,2.9,2.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(12));

	// dot
	this.instance_12 = new lib.dot("synched",0);
	this.instance_12.setTransform(19.4,116.9,1,1,0,0,0,2.9,2.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(23).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(13));

	// dot
	this.instance_13 = new lib.dot("synched",0);
	this.instance_13.setTransform(27.9,125.4,1,1,0,0,0,2.9,2.9);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(22).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(14));

	// dot
	this.instance_14 = new lib.dot("synched",0);
	this.instance_14.setTransform(37.8,132.3,1,1,0,0,0,2.9,2.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(21).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(15));

	// dot
	this.instance_15 = new lib.dot("synched",0);
	this.instance_15.setTransform(48.8,137.4,1,1,0,0,0,2.9,2.9);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(20).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(16));

	// dot
	this.instance_16 = new lib.dot("synched",0);
	this.instance_16.setTransform(60.4,140.2,1,1,0,0,0,2.9,2.9);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(17));

	// dot
	this.instance_17 = new lib.dot("synched",0);
	this.instance_17.setTransform(72.5,141.2,1,1,0,0,0,2.9,2.9);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(18).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(18));

	// dot
	this.instance_18 = new lib.dot("synched",0);
	this.instance_18.setTransform(84.2,140.1,1,1,0,0,0,2.9,2.9);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(17).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(19));

	// dot
	this.instance_19 = new lib.dot("synched",0);
	this.instance_19.setTransform(95.9,137.2,1,1,0,0,0,2.9,2.9);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(16).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(20));

	// dot
	this.instance_20 = new lib.dot("synched",0);
	this.instance_20.setTransform(106.7,132,1,1,0,0,0,2.9,2.9);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(15).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(21));

	// dot
	this.instance_21 = new lib.dot("synched",0);
	this.instance_21.setTransform(116.6,125.1,1,1,0,0,0,2.9,2.9);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(14).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(22));

	// dot
	this.instance_22 = new lib.dot("synched",0);
	this.instance_22.setTransform(124.9,116.6,1,1,0,0,0,2.9,2.9);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(13).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(23));

	// dot
	this.instance_23 = new lib.dot("synched",0);
	this.instance_23.setTransform(131.8,106.9,1,1,0,0,0,2.9,2.9);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(12).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(24));

	// dot
	this.instance_24 = new lib.dot("synched",0);
	this.instance_24.setTransform(137,96,1,1,0,0,0,2.9,2.9);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(11).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(25));

	// dot
	this.instance_25 = new lib.dot("synched",0);
	this.instance_25.setTransform(140.1,84.4,1,1,0,0,0,2.9,2.9);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(10).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(26));

	// dot
	this.instance_26 = new lib.dot("synched",0);
	this.instance_26.setTransform(141.2,72.5,1,1,0,0,0,2.9,2.9);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(9).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(27));

	// dot
	this.instance_27 = new lib.dot("synched",0);
	this.instance_27.setTransform(140.2,60.5,1,1,0,0,0,2.9,2.9);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(8).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(28));

	// dot
	this.instance_28 = new lib.dot("synched",0);
	this.instance_28.setTransform(137.4,48.8,1,1,0,0,0,2.9,2.9);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(7).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(29));

	// dot
	this.instance_29 = new lib.dot("synched",0);
	this.instance_29.setTransform(132.4,37.9,1,1,0,0,0,2.9,2.9);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(6).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(30));

	// dot
	this.instance_30 = new lib.dot("synched",0);
	this.instance_30.setTransform(125.3,28.1,1,1,0,0,0,2.9,2.9);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(5).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(31));

	// dot
	this.instance_31 = new lib.dot("synched",0);
	this.instance_31.setTransform(116.8,19.7,1,1,0,0,0,2.9,2.9);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(4).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(32));

	// dot
	this.instance_32 = new lib.dot("synched",0);
	this.instance_32.setTransform(107.1,12.3,1,1,0,0,0,2.9,2.9);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(3).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(33));

	// dot
	this.instance_33 = new lib.dot("synched",0);
	this.instance_33.setTransform(96.3,7,1,1,0,0,0,2.9,2.9);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(2).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(34));

	// dot
	this.instance_34 = new lib.dot("synched",0);
	this.instance_34.setTransform(84.5,3.9,1,1,0,0,0,2.9,2.9);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(35));

	// dot
	this.instance_35 = new lib.dot("synched",0);
	this.instance_35.setTransform(72.4,2.9,1,1,0,0,0,2.9,2.9);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(36));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape.setTransform(98.7,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_1.setTransform(98.7,26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_2.setTransform(98.7,26.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_3.setTransform(98.7,26.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_4.setTransform(98.7,26.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_5.setTransform(98.7,26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_6.setTransform(98.7,26.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_7.setTransform(98.7,26.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_8.setTransform(98.7,26.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_9.setTransform(98.7,26.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_10.setTransform(98.7,26.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_11.setTransform(98.7,26.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_12.setTransform(98.7,26.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_13.setTransform(98.7,26.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_14.setTransform(98.7,26.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_15.setTransform(98.7,26.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_16.setTransform(98.7,26.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AmBjfIMEG/");
	this.shape_17.setTransform(98.7,26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},44).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},24).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).wait(46));

	// Layer 4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_18.setTransform(90.3,22.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_19.setTransform(90.3,22.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_20.setTransform(90.3,22.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_21.setTransform(90.3,22.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_22.setTransform(90.3,22.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_23.setTransform(90.3,22.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_24.setTransform(90.3,22.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_25.setTransform(90.3,22.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_26.setTransform(90.3,22.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_27.setTransform(90.3,22.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_28.setTransform(90.3,22.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_29.setTransform(90.3,22.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_30.setTransform(90.3,22.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_31.setTransform(90.3,22.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_32.setTransform(90.3,22.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_33.setTransform(90.3,22.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_34.setTransform(90.3,22.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AmjiZINHE0");
	this.shape_35.setTransform(90.3,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},43).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},25).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_18}]},1).to({state:[]},1).to({state:[]},2).wait(45));

	// Layer 5
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_36.setTransform(81.5,20);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_37.setTransform(81.5,20);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_38.setTransform(81.5,20);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_39.setTransform(81.5,20);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_40.setTransform(81.5,20);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_41.setTransform(81.5,20);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_42.setTransform(81.5,20);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_43.setTransform(81.5,20);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_44.setTransform(81.5,20);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_45.setTransform(81.5,20);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_46.setTransform(81.5,20);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_47.setTransform(81.5,20);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_48.setTransform(81.5,20);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_49.setTransform(81.5,20);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_50.setTransform(81.5,20);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_51.setTransform(81.5,20);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_52.setTransform(81.5,20);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("Am1hQINrCh");
	this.shape_53.setTransform(81.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36}]},42).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},26).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).to({state:[]},3).wait(44));

	// Layer 6
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_54.setTransform(72.2,19.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_55.setTransform(72.2,19.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_56.setTransform(72.2,19.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_57.setTransform(72.2,19.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_58.setTransform(72.2,19.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_59.setTransform(72.2,19.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_60.setTransform(72.2,19.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_61.setTransform(72.2,19.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_62.setTransform(72.2,19.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_63.setTransform(72.2,19.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_64.setTransform(72.2,19.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_65.setTransform(72.2,19.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_66.setTransform(72.2,19.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_67.setTransform(72.2,19.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_68.setTransform(72.2,19.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_69.setTransform(72.2,19.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_70.setTransform(72.2,19.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("Am9gCIN6AF");
	this.shape_71.setTransform(72.2,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54}]},41).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},27).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_54}]},1).to({state:[]},1).to({state:[]},4).wait(43));

	// Layer 7
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_72.setTransform(63,19.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_73.setTransform(63,19.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_74.setTransform(63,19.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_75.setTransform(63,19.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_76.setTransform(63,19.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_77.setTransform(63,19.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_78.setTransform(63,19.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_79.setTransform(63,19.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_80.setTransform(63,19.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_81.setTransform(63,19.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_82.setTransform(63,19.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_83.setTransform(63,19.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_84.setTransform(63,19.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_85.setTransform(63,19.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_86.setTransform(63,19.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_87.setTransform(63,19.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_88.setTransform(63,19.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("Am4BMINxiX");
	this.shape_89.setTransform(63,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_72}]},40).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},28).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_72}]},1).to({state:[]},1).to({state:[]},5).wait(42));

	// Layer 8
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_90.setTransform(54.1,22.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_91.setTransform(54.1,22.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_92.setTransform(54.1,22.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_93.setTransform(54.1,22.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_94.setTransform(54.1,22.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_95.setTransform(54.1,22.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_96.setTransform(54.1,22.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_97.setTransform(54.1,22.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_98.setTransform(54.1,22.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_99.setTransform(54.1,22.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_100.setTransform(54.1,22.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_101.setTransform(54.1,22.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_102.setTransform(54.1,22.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_103.setTransform(54.1,22.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_104.setTransform(54.1,22.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_105.setTransform(54.1,22.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_106.setTransform(54.1,22.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AmlCZINLkx");
	this.shape_107.setTransform(54.1,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_90}]},39).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},29).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_90}]},1).to({state:[]},1).to({state:[]},6).wait(41));

	// Layer 9
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_108.setTransform(45.6,26.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_109.setTransform(45.6,26.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_110.setTransform(45.6,26.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_111.setTransform(45.6,26.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_112.setTransform(45.6,26.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_113.setTransform(45.6,26.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_114.setTransform(45.6,26.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_115.setTransform(45.6,26.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_116.setTransform(45.6,26.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_117.setTransform(45.6,26.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_118.setTransform(45.6,26.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_119.setTransform(45.6,26.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_120.setTransform(45.6,26.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_121.setTransform(45.6,26.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_122.setTransform(45.6,26.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_123.setTransform(45.6,26.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_124.setTransform(45.6,26.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AmEDgIMJm/");
	this.shape_125.setTransform(45.6,26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_108}]},38).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_115}]},30).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_108}]},1).to({state:[]},1).to({state:[]},7).wait(40));

	// Layer 10
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_126.setTransform(38.1,31.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_127.setTransform(38.1,31.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_128.setTransform(38.1,31.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_129.setTransform(38.1,31.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_130.setTransform(38.1,31.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_131.setTransform(38.1,31.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_132.setTransform(38.1,31.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_133.setTransform(38.1,31.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_134.setTransform(38.1,31.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_135.setTransform(38.1,31.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_136.setTransform(38.1,31.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_137.setTransform(38.1,31.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_138.setTransform(38.1,31.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_139.setTransform(38.1,31.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_140.setTransform(38.1,31.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_141.setTransform(38.1,31.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_142.setTransform(38.1,31.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AlVEfIKro9");
	this.shape_143.setTransform(38.1,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_126}]},37).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},31).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_126}]},1).to({state:[]},1).to({state:[]},8).wait(39));

	// Layer 11
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_144.setTransform(31.3,38);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_145.setTransform(31.3,38);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_146.setTransform(31.3,38);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_147.setTransform(31.3,38);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_148.setTransform(31.3,38);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_149.setTransform(31.3,38);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_150.setTransform(31.3,38);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_151.setTransform(31.3,38);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_152.setTransform(31.3,38);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_153.setTransform(31.3,38);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_154.setTransform(31.3,38);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_155.setTransform(31.3,38);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_156.setTransform(31.3,38);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_157.setTransform(31.3,38);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_158.setTransform(31.3,38);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_159.setTransform(31.3,38);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_160.setTransform(31.3,38);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AkeFVII9qo");
	this.shape_161.setTransform(31.3,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_144}]},36).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_151}]},32).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_144}]},1).to({state:[]},1).to({state:[]},9).wait(38));

	// Layer 12
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_162.setTransform(26.1,45.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_163.setTransform(26.1,45.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_164.setTransform(26.1,45.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_165.setTransform(26.1,45.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_166.setTransform(26.1,45.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_167.setTransform(26.1,45.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_168.setTransform(26.1,45.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_169.setTransform(26.1,45.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_170.setTransform(26.1,45.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_171.setTransform(26.1,45.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_172.setTransform(26.1,45.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_173.setTransform(26.1,45.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_174.setTransform(26.1,45.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_175.setTransform(26.1,45.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_176.setTransform(26.1,45.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_177.setTransform(26.1,45.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_178.setTransform(26.1,45.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AjcGEIG5sH");
	this.shape_179.setTransform(26.1,45.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_162}]},35).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_169}]},33).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_162}]},1).to({state:[]},1).to({state:[]},10).wait(37));

	// Layer 13
	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_180.setTransform(22.3,54.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_181.setTransform(22.3,54.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_182.setTransform(22.3,54.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_183.setTransform(22.3,54.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_184.setTransform(22.3,54.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_185.setTransform(22.3,54.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_186.setTransform(22.3,54.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_187.setTransform(22.3,54.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_188.setTransform(22.3,54.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_189.setTransform(22.3,54.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_190.setTransform(22.3,54.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_191.setTransform(22.3,54.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_192.setTransform(22.3,54.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_193.setTransform(22.3,54.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_194.setTransform(22.3,54.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_195.setTransform(22.3,54.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_196.setTransform(22.3,54.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AiYGmIExtL");
	this.shape_197.setTransform(22.3,54.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_180}]},34).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_187}]},34).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_180}]},1).to({state:[]},1).to({state:[]},11).wait(36));

	// Layer 14
	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_198.setTransform(19.8,63);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_199.setTransform(19.8,63);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_200.setTransform(19.8,63);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_201.setTransform(19.8,63);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_202.setTransform(19.8,63);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_203.setTransform(19.8,63);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_204.setTransform(19.8,63);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_205.setTransform(19.8,63);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_206.setTransform(19.8,63);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_207.setTransform(19.8,63);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_208.setTransform(19.8,63);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_209.setTransform(19.8,63);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_210.setTransform(19.8,63);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_211.setTransform(19.8,63);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_212.setTransform(19.8,63);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_213.setTransform(19.8,63);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_214.setTransform(19.8,63);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AhMG5ICZtx");
	this.shape_215.setTransform(19.8,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_198}]},33).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_205}]},35).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_198}]},1).to({state:[]},1).to({state:[]},12).wait(35));

	// Layer 15
	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AACG+IgDt7");
	this.shape_216.setTransform(19.1,72.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_217.setTransform(19.1,72.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_218.setTransform(19.1,72.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_219.setTransform(19.1,72.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_220.setTransform(19.1,72.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_221.setTransform(19.1,72.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_222.setTransform(19.1,72.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AACG+IgDt7");
	this.shape_223.setTransform(19.1,72.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_224.setTransform(19.1,72.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_225.setTransform(19.1,72.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_226.setTransform(19.1,72.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_227.setTransform(19.1,72.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_228.setTransform(19.1,72.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_229.setTransform(19.1,72.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_230.setTransform(19.1,72.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_231.setTransform(19.1,72.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_232.setTransform(19.1,72.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AgBm9IADN7");
	this.shape_233.setTransform(19.1,72.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_216}]},32).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_223}]},36).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_216}]},1).to({state:[]},1).to({state:[]},13).wait(34));

	// Layer 16
	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("ABQG2Iiftr");
	this.shape_234.setTransform(19.8,81.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_235.setTransform(19.8,81.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_236.setTransform(19.8,81.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_237.setTransform(19.8,81.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_238.setTransform(19.8,81.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_239.setTransform(19.8,81.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_240.setTransform(19.8,81.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("ABQG2Iiftr");
	this.shape_241.setTransform(19.8,81.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_242.setTransform(19.8,81.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_243.setTransform(19.8,81.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_244.setTransform(19.8,81.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_245.setTransform(19.8,81.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_246.setTransform(19.8,81.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_247.setTransform(19.8,81.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_248.setTransform(19.8,81.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_249.setTransform(19.8,81.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_250.setTransform(19.8,81.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AhPm1ICfNr");
	this.shape_251.setTransform(19.8,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_234}]},31).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_241}]},37).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_234}]},1).to({state:[]},1).to({state:[]},14).wait(33));

	// Layer 17
	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("ACbGiIk1tC");
	this.shape_252.setTransform(22.2,90.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_253.setTransform(22.2,90.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_254.setTransform(22.2,90.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_255.setTransform(22.2,90.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_256.setTransform(22.2,90.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_257.setTransform(22.2,90.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_258.setTransform(22.2,90.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("ACbGiIk1tC");
	this.shape_259.setTransform(22.2,90.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_260.setTransform(22.2,90.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_261.setTransform(22.2,90.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_262.setTransform(22.2,90.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_263.setTransform(22.2,90.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_264.setTransform(22.2,90.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_265.setTransform(22.2,90.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_266.setTransform(22.2,90.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_267.setTransform(22.2,90.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_268.setTransform(22.2,90.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AiamgIE1NC");
	this.shape_269.setTransform(22.2,90.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_252}]},30).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_259}]},38).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_252}]},1).to({state:[]},1).to({state:[]},15).wait(32));

	// Layer 18
	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("ADgGAIm/r/");
	this.shape_270.setTransform(26.3,98.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_271.setTransform(26.3,98.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_272.setTransform(26.3,98.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_273.setTransform(26.3,98.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_274.setTransform(26.3,98.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_275.setTransform(26.3,98.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_276.setTransform(26.3,98.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("ADgGAIm/r/");
	this.shape_277.setTransform(26.3,98.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_278.setTransform(26.3,98.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_279.setTransform(26.3,98.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_280.setTransform(26.3,98.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_281.setTransform(26.3,98.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_282.setTransform(26.3,98.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_283.setTransform(26.3,98.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_284.setTransform(26.3,98.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_285.setTransform(26.3,98.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_286.setTransform(26.3,98.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("Ajfl/IG/L/");
	this.shape_287.setTransform(26.3,98.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_270}]},29).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_277}]},39).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_270}]},1).to({state:[]},1).to({state:[]},16).wait(31));

	// Layer 19
	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AEeFUIo7qn");
	this.shape_288.setTransform(31.7,106.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_289.setTransform(31.7,106.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_290.setTransform(31.7,106.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_291.setTransform(31.7,106.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_292.setTransform(31.7,106.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_293.setTransform(31.7,106.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_294.setTransform(31.7,106.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AEeFUIo7qn");
	this.shape_295.setTransform(31.7,106.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_296.setTransform(31.7,106.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_297.setTransform(31.7,106.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_298.setTransform(31.7,106.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_299.setTransform(31.7,106.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_300.setTransform(31.7,106.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_301.setTransform(31.7,106.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_302.setTransform(31.7,106.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_303.setTransform(31.7,106.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_304.setTransform(31.7,106.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AkdlTII7Kn");
	this.shape_305.setTransform(31.7,106.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_288}]},28).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_295}]},40).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_288}]},1).to({state:[]},1).to({state:[]},17).wait(30));

	// Layer 20
	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AFWEbIqro1");
	this.shape_306.setTransform(38.2,112.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_307.setTransform(38.2,112.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_308.setTransform(38.2,112.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_309.setTransform(38.2,112.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_310.setTransform(38.2,112.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_311.setTransform(38.2,112.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_312.setTransform(38.2,112.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AFWEbIqro1");
	this.shape_313.setTransform(38.2,112.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_314.setTransform(38.2,112.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_315.setTransform(38.2,112.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_316.setTransform(38.2,112.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_317.setTransform(38.2,112.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_318.setTransform(38.2,112.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_319.setTransform(38.2,112.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_320.setTransform(38.2,112.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_321.setTransform(38.2,112.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_322.setTransform(38.2,112.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AlVkaIKrI1");
	this.shape_323.setTransform(38.2,112.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_306}]},27).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_313}]},41).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_306}]},1).to({state:[]},1).to({state:[]},18).wait(29));

	// Layer 21
	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AGCDaIsDm0");
	this.shape_324.setTransform(45.6,118.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_325.setTransform(45.6,118.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_326.setTransform(45.6,118.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_327.setTransform(45.6,118.2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_328.setTransform(45.6,118.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_329.setTransform(45.6,118.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_330.setTransform(45.6,118.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AGCDaIsDm0");
	this.shape_331.setTransform(45.6,118.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_332.setTransform(45.6,118.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_333.setTransform(45.6,118.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_334.setTransform(45.6,118.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_335.setTransform(45.6,118.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_336.setTransform(45.6,118.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_337.setTransform(45.6,118.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_338.setTransform(45.6,118.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_339.setTransform(45.6,118.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_340.setTransform(45.6,118.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AmBjaIMDG0");
	this.shape_341.setTransform(45.6,118.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_324}]},26).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_331}]},42).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_324}]},1).to({state:[]},1).to({state:[]},19).wait(28));

	// Layer 22
	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AGjCWItFkr");
	this.shape_342.setTransform(54,122.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_343.setTransform(54,122.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_344.setTransform(54,122.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_345.setTransform(54,122.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_346.setTransform(54,122.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_347.setTransform(54,122.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_348.setTransform(54,122.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AGjCWItFkr");
	this.shape_349.setTransform(54,122.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_350.setTransform(54,122.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_351.setTransform(54,122.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_352.setTransform(54,122.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_353.setTransform(54,122.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_354.setTransform(54,122.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_355.setTransform(54,122.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_356.setTransform(54,122.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_357.setTransform(54,122.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_358.setTransform(54,122.2);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AmiiVINFEr");
	this.shape_359.setTransform(54,122.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_342}]},25).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_349}]},43).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_342}]},1).to({state:[]},1).to({state:[]},20).wait(27));

	// Layer 23
	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AG0BLItniV");
	this.shape_360.setTransform(63,124.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_361.setTransform(63,124.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_362.setTransform(63,124.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_363.setTransform(63,124.4);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_364.setTransform(63,124.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_365.setTransform(63,124.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_366.setTransform(63,124.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AG0BLItniV");
	this.shape_367.setTransform(63,124.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_368.setTransform(63,124.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_369.setTransform(63,124.4);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_370.setTransform(63,124.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_371.setTransform(63,124.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_372.setTransform(63,124.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_373.setTransform(63,124.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_374.setTransform(63,124.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_375.setTransform(63,124.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_376.setTransform(63,124.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AmzhKINnCV");
	this.shape_377.setTransform(63,124.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_360}]},24).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_367}]},44).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_360}]},1).to({state:[]},1).to({state:[]},21).wait(26));

	// Layer 24
	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AG7AAIt1AB");
	this.shape_378.setTransform(72.2,125.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_379.setTransform(72.2,125.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_380.setTransform(72.2,125.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_381.setTransform(72.2,125.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_382.setTransform(72.2,125.2);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_383.setTransform(72.2,125.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_384.setTransform(72.2,125.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AG7AAIt1AB");
	this.shape_385.setTransform(72.2,125.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_386.setTransform(72.2,125.2);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_387.setTransform(72.2,125.2);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_388.setTransform(72.2,125.2);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_389.setTransform(72.2,125.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_390.setTransform(72.2,125.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_391.setTransform(72.2,125.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_392.setTransform(72.2,125.2);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_393.setTransform(72.2,125.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_394.setTransform(72.2,125.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("Am6ABIN1gB");
	this.shape_395.setTransform(72.2,125.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_378}]},23).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_385}]},45).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_378}]},1).to({state:[]},1).to({state:[]},22).wait(25));

	// Layer 25
	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AGzhNItlCb");
	this.shape_396.setTransform(81.3,124.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_397.setTransform(81.3,124.4);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_398.setTransform(81.3,124.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_399.setTransform(81.3,124.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_400.setTransform(81.3,124.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_401.setTransform(81.3,124.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_402.setTransform(81.3,124.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AGzhNItlCb");
	this.shape_403.setTransform(81.3,124.4);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_404.setTransform(81.3,124.4);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_405.setTransform(81.3,124.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_406.setTransform(81.3,124.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_407.setTransform(81.3,124.4);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_408.setTransform(81.3,124.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_409.setTransform(81.3,124.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_410.setTransform(81.3,124.4);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_411.setTransform(81.3,124.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_412.setTransform(81.3,124.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AmyBOINlib");
	this.shape_413.setTransform(81.3,124.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_396}]},22).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_403}]},46).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_396}]},1).to({state:[]},1).to({state:[]},23).wait(24));

	// Layer 26
	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AGfiXIs9Ev");
	this.shape_414.setTransform(90.3,122.1);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_415.setTransform(90.3,122.1);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_416.setTransform(90.3,122.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_417.setTransform(90.3,122.1);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_418.setTransform(90.3,122.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_419.setTransform(90.3,122.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_420.setTransform(90.3,122.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AGfiXIs9Ev");
	this.shape_421.setTransform(90.3,122.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_422.setTransform(90.3,122.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_423.setTransform(90.3,122.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_424.setTransform(90.3,122.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_425.setTransform(90.3,122.1);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_426.setTransform(90.3,122.1);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_427.setTransform(90.3,122.1);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_428.setTransform(90.3,122.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_429.setTransform(90.3,122.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_430.setTransform(90.3,122.1);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AmeCYIM9kv");
	this.shape_431.setTransform(90.3,122.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_414}]},21).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_421}]},47).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_414}]},1).to({state:[]},1).to({state:[]},24).wait(23));

	// Layer 27
	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AF/jbIr9G3");
	this.shape_432.setTransform(98.7,118.1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_433.setTransform(98.7,118.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_434.setTransform(98.7,118.1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_435.setTransform(98.7,118.1);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_436.setTransform(98.7,118.1);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_437.setTransform(98.7,118.1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_438.setTransform(98.7,118.1);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AF/jbIr9G3");
	this.shape_439.setTransform(98.7,118.1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_440.setTransform(98.7,118.1);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_441.setTransform(98.7,118.1);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_442.setTransform(98.7,118.1);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_443.setTransform(98.7,118.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_444.setTransform(98.7,118.1);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_445.setTransform(98.7,118.1);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_446.setTransform(98.7,118.1);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_447.setTransform(98.7,118.1);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_448.setTransform(98.7,118.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("Al+DcIL9m3");
	this.shape_449.setTransform(98.7,118.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_432}]},20).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_439}]},48).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_432}]},1).to({state:[]},1).to({state:[]},25).wait(22));

	// Layer 28
	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AFSkbIqjI3");
	this.shape_450.setTransform(106.3,112.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_451.setTransform(106.3,112.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_452.setTransform(106.3,112.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_453.setTransform(106.3,112.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_454.setTransform(106.3,112.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_455.setTransform(106.3,112.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_456.setTransform(106.3,112.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AFSkbIqjI3");
	this.shape_457.setTransform(106.3,112.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_458.setTransform(106.3,112.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_459.setTransform(106.3,112.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_460.setTransform(106.3,112.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_461.setTransform(106.3,112.8);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_462.setTransform(106.3,112.8);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_463.setTransform(106.3,112.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_464.setTransform(106.3,112.8);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_465.setTransform(106.3,112.8);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_466.setTransform(106.3,112.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AlREcIKjo3");
	this.shape_467.setTransform(106.3,112.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_450}]},19).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_457}]},49).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_450}]},1).to({state:[]},1).to({state:[]},26).wait(21));

	// Layer 29
	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AEclTIo3Kn");
	this.shape_468.setTransform(112.7,106.1);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_469.setTransform(112.7,106.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_470.setTransform(112.7,106.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_471.setTransform(112.7,106.1);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_472.setTransform(112.7,106.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_473.setTransform(112.7,106.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_474.setTransform(112.7,106.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AEclTIo3Kn");
	this.shape_475.setTransform(112.7,106.1);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_476.setTransform(112.7,106.1);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_477.setTransform(112.7,106.1);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_478.setTransform(112.7,106.1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_479.setTransform(112.7,106.1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_480.setTransform(112.7,106.1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_481.setTransform(112.7,106.1);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_482.setTransform(112.7,106.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_483.setTransform(112.7,106.1);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_484.setTransform(112.7,106.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AkbFUII3qn");
	this.shape_485.setTransform(112.7,106.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_468}]},18).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_475}]},50).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_468}]},1).to({state:[]},1).to({state:[]},27).wait(20));

	// Layer 30
	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("ADdl+Im5L9");
	this.shape_486.setTransform(118.1,98.8);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_487.setTransform(118.1,98.8);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_488.setTransform(118.1,98.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_489.setTransform(118.1,98.8);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_490.setTransform(118.1,98.8);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_491.setTransform(118.1,98.8);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_492.setTransform(118.1,98.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("ADdl+Im5L9");
	this.shape_493.setTransform(118.1,98.8);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_494.setTransform(118.1,98.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_495.setTransform(118.1,98.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_496.setTransform(118.1,98.8);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_497.setTransform(118.1,98.8);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_498.setTransform(118.1,98.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_499.setTransform(118.1,98.8);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_500.setTransform(118.1,98.8);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_501.setTransform(118.1,98.8);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_502.setTransform(118.1,98.8);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AjcF/IG5r9");
	this.shape_503.setTransform(118.1,98.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_486}]},17).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_493}]},51).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_486}]},1).to({state:[]},1).to({state:[]},28).wait(19));

	// Layer 31
	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("ACZmeIkxM9");
	this.shape_504.setTransform(122,90.4);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_505.setTransform(122,90.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_506.setTransform(122,90.4);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_507.setTransform(122,90.4);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_508.setTransform(122,90.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_509.setTransform(122,90.4);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_510.setTransform(122,90.4);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("ACZmeIkxM9");
	this.shape_511.setTransform(122,90.4);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_512.setTransform(122,90.4);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_513.setTransform(122,90.4);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_514.setTransform(122,90.4);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_515.setTransform(122,90.4);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_516.setTransform(122,90.4);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_517.setTransform(122,90.4);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_518.setTransform(122,90.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_519.setTransform(122,90.4);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_520.setTransform(122,90.4);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AiYGfIExs9");
	this.shape_521.setTransform(122,90.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_504}]},16).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_511}]},52).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_504}]},1).to({state:[]},1).to({state:[]},29).wait(18));

	// Layer 32
	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("ABPmyIicNl");
	this.shape_522.setTransform(124.5,81.5);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_523.setTransform(124.5,81.5);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_524.setTransform(124.5,81.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_525.setTransform(124.5,81.5);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_526.setTransform(124.5,81.5);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_527.setTransform(124.5,81.5);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_528.setTransform(124.5,81.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("ABPmyIicNl");
	this.shape_529.setTransform(124.5,81.5);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_530.setTransform(124.5,81.5);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_531.setTransform(124.5,81.5);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_532.setTransform(124.5,81.5);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_533.setTransform(124.5,81.5);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_534.setTransform(124.5,81.5);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_535.setTransform(124.5,81.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_536.setTransform(124.5,81.5);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_537.setTransform(124.5,81.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_538.setTransform(124.5,81.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AhNGzICctl");
	this.shape_539.setTransform(124.5,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_522}]},15).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_529}]},53).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_522}]},1).to({state:[]},1).to({state:[]},30).wait(17));

	// Layer 33
	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AACm5IgCNz");
	this.shape_540.setTransform(125.1,72.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_541.setTransform(125.1,72.3);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_542.setTransform(125.1,72.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_543.setTransform(125.1,72.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_544.setTransform(125.1,72.3);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_545.setTransform(125.1,72.3);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_546.setTransform(125.1,72.3);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AACm5IgCNz");
	this.shape_547.setTransform(125.1,72.3);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_548.setTransform(125.1,72.3);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_549.setTransform(125.1,72.3);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_550.setTransform(125.1,72.3);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_551.setTransform(125.1,72.3);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_552.setTransform(125.1,72.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_553.setTransform(125.1,72.3);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_554.setTransform(125.1,72.3);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_555.setTransform(125.1,72.3);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_556.setTransform(125.1,72.3);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AAAG6IACtz");
	this.shape_557.setTransform(125.1,72.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_540}]},14).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_547}]},54).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_540}]},1).to({state:[]},1).to({state:[]},31).wait(16));

	// Layer 34
	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_558.setTransform(124.3,63.3);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_559.setTransform(124.3,63.3);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_560.setTransform(124.3,63.3);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_561.setTransform(124.3,63.3);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_562.setTransform(124.3,63.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_563.setTransform(124.3,63.3);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_564.setTransform(124.3,63.3);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_565.setTransform(124.3,63.3);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_566.setTransform(124.3,63.3);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_567.setTransform(124.3,63.3);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_568.setTransform(124.3,63.3);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_569.setTransform(124.3,63.3);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_570.setTransform(124.3,63.3);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_571.setTransform(124.3,63.3);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_572.setTransform(124.3,63.3);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_573.setTransform(124.3,63.3);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_574.setTransform(124.3,63.3);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AhKmzICVNm");
	this.shape_575.setTransform(124.3,63.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_558}]},13).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_565}]},55).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_558}]},1).to({state:[]},1).to({state:[]},32).wait(15));

	// Layer 35
	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_576.setTransform(122.1,54.1);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_577.setTransform(122.1,54.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_578.setTransform(122.1,54.1);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_579.setTransform(122.1,54.1);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_580.setTransform(122.1,54.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_581.setTransform(122.1,54.1);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_582.setTransform(122.1,54.1);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_583.setTransform(122.1,54.1);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_584.setTransform(122.1,54.1);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_585.setTransform(122.1,54.1);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_586.setTransform(122.1,54.1);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_587.setTransform(122.1,54.1);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_588.setTransform(122.1,54.1);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_589.setTransform(122.1,54.1);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_590.setTransform(122.1,54.1);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_591.setTransform(122.1,54.1);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_592.setTransform(122.1,54.1);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AiUmhIEpND");
	this.shape_593.setTransform(122.1,54.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_576}]},12).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_583}]},56).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_576}]},1).to({state:[]},1).to({state:[]},33).wait(14));

	// Layer 36
	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_594.setTransform(118.2,45.7);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_595.setTransform(118.2,45.7);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_596.setTransform(118.2,45.7);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_597.setTransform(118.2,45.7);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_598.setTransform(118.2,45.7);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_599.setTransform(118.2,45.7);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_600.setTransform(118.2,45.7);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_601.setTransform(118.2,45.7);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_602.setTransform(118.2,45.7);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_603.setTransform(118.2,45.7);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_604.setTransform(118.2,45.7);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_605.setTransform(118.2,45.7);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_606.setTransform(118.2,45.7);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_607.setTransform(118.2,45.7);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_608.setTransform(118.2,45.7);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_609.setTransform(118.2,45.7);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_610.setTransform(118.2,45.7);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AjZmBIG0MD");
	this.shape_611.setTransform(118.2,45.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_594}]},11).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_601}]},57).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_594}]},1).to({state:[]},1).to({state:[]},34).wait(13));

	// Layer 37
	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_612.setTransform(112.8,38);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_613.setTransform(112.8,38);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_614.setTransform(112.8,38);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_615.setTransform(112.8,38);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_616.setTransform(112.8,38);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_617.setTransform(112.8,38);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_618.setTransform(112.8,38);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_619.setTransform(112.8,38);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_620.setTransform(112.8,38);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_621.setTransform(112.8,38);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_622.setTransform(112.8,38);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_623.setTransform(112.8,38);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_624.setTransform(112.8,38);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_625.setTransform(112.8,38);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_626.setTransform(112.8,38);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_627.setTransform(112.8,38);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_628.setTransform(112.8,38);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AkalTII0Ko");
	this.shape_629.setTransform(112.8,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_612}]},10).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_619}]},58).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_612}]},1).to({state:[]},1).to({state:[]},35).wait(12));

	// Layer 2
	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("rgba(204,204,204,0)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_630.setTransform(106.3,31.7);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("rgba(204,204,204,0.141)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_631.setTransform(106.3,31.7);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("rgba(204,204,204,0.286)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_632.setTransform(106.3,31.7);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("rgba(204,204,204,0.427)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_633.setTransform(106.3,31.7);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("rgba(204,204,204,0.573)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_634.setTransform(106.3,31.7);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("rgba(204,204,204,0.714)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_635.setTransform(106.3,31.7);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("rgba(204,204,204,0.859)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_636.setTransform(106.3,31.7);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_637.setTransform(106.3,31.7);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("rgba(204,204,204,0.91)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_638.setTransform(106.3,31.7);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("rgba(204,204,204,0.82)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_639.setTransform(106.3,31.7);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("rgba(204,204,204,0.725)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_640.setTransform(106.3,31.7);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("rgba(204,204,204,0.635)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_641.setTransform(106.3,31.7);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("rgba(204,204,204,0.545)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_642.setTransform(106.3,31.7);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("rgba(204,204,204,0.455)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_643.setTransform(106.3,31.7);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("rgba(204,204,204,0.365)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_644.setTransform(106.3,31.7);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("rgba(204,204,204,0.275)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_645.setTransform(106.3,31.7);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("rgba(204,204,204,0.18)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_646.setTransform(106.3,31.7);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("rgba(204,204,204,0.09)").ss(1,0,0,3).p("AlSkfIKlI/");
	this.shape_647.setTransform(106.3,31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_630}]},9).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_637}]},59).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_630}]},1).to({state:[]},1).to({state:[]},36).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.5,0,5.8,5.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(2.6,72,1,1,0,0,0,72,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.8,5.8);


(lib.main = function() {
	this.initialize();

	// txt
	this.txt = new cjs.Text("23%", "28px 'Cresci LP'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 30;
	this.txt.lineWidth = 57;
	this.txt.setTransform(321,458.5);

	// Layer 10
	this.instance = new lib.Symbol2();
	this.instance.setTransform(320.4,439.9,1,1,0,0,0,2.9,36);

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("ANSAAQAAFfj5D5Qj6D5lfAAQleAAj6j5Qj5j5AAlfQAAlfD5j5QD6j4FeAAQFfAAD6D4QD5D5AAFfg");
	this.shape.setTransform(320,475.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AMKAAQAAFCjkDkQjjDklDAAQlCAAjjjkQjkjkAAlCQAAlADkjmQDjjjFCAAQFDAADjDjQDkDmAAFAg");
	this.shape_1.setTransform(320,475.9);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.8)").s().p("Ap+J/QkKkIAAl3QAAl1EKkKQEJkIF1AAQF2AAEJEIQEKEKAAF1QAAF3kKEIQkJEKl2AAQl1AAkJkKg");
	this.shape_2.setTransform(320,476);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance,this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(229.5,385.5,181,181);


// stage content:
(lib.s0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.ldMc = new lib.main();
	this.ldMc.setTransform(319.9,479,1,1,0,0,0,319.9,479);
	this.ldMc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ldMc).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib0 = lib0||{}, img0 = img0||{}, createjs = createjs||{}, ss = ss||{});
var lib0, img0, createjs, ss;