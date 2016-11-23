(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAUQgIgIAAgMQAAgLAIgJQAJgIALAAQAMAAAIAIQAJAJAAALQAAAMgJAIQgIAJgMAAQgLAAgJgJg");
	this.shape.setTransform(2.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.8,5.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// dot
	this.instance = new lib.dot("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(60,3.9,1,1,0,0,0,2.9,2.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// dot
	this.instance_1 = new lib.dot("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.2,6.9,1,1,0,0,0,2.9,2.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(2));

	// dot
	this.instance_2 = new lib.dot("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(37.7,11.9,1,1,0,0,0,2.9,2.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// dot
	this.instance_3 = new lib.dot("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(27.6,18.9,1,1,0,0,0,2.9,2.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(4));

	// dot
	this.instance_4 = new lib.dot("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(18.9,27.6,1,1,0,0,0,2.9,2.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(5));

	// dot
	this.instance_5 = new lib.dot("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(11.8,37.6,1,1,0,0,0,2.9,2.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// dot
	this.instance_6 = new lib.dot("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(6.7,48.7,1,1,0,0,0,2.9,2.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(7));

	// dot
	this.instance_7 = new lib.dot("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(3.8,60.4,1,1,0,0,0,2.9,2.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(8));

	// dot
	this.instance_8 = new lib.dot("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(2.9,72.5,1,1,0,0,0,2.9,2.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(9));

	// dot
	this.instance_9 = new lib.dot("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(3.9,84.6,1,1,0,0,0,2.9,2.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(26).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(10));

	// dot
	this.instance_10 = new lib.dot("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(7,96.3,1,1,0,0,0,2.9,2.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(25).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(11));

	// dot
	this.instance_11 = new lib.dot("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(12.1,107.2,1,1,0,0,0,2.9,2.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(12));

	// dot
	this.instance_12 = new lib.dot("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(19.4,116.9,1,1,0,0,0,2.9,2.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(23).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(13));

	// dot
	this.instance_13 = new lib.dot("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(27.9,125.4,1,1,0,0,0,2.9,2.9);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(22).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(14));

	// dot
	this.instance_14 = new lib.dot("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(37.8,132.3,1,1,0,0,0,2.9,2.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(21).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(15));

	// dot
	this.instance_15 = new lib.dot("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(48.8,137.4,1,1,0,0,0,2.9,2.9);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(20).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(16));

	// dot
	this.instance_16 = new lib.dot("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(60.4,140.2,1,1,0,0,0,2.9,2.9);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(17));

	// dot
	this.instance_17 = new lib.dot("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(72.5,141.2,1,1,0,0,0,2.9,2.9);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(18).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(18));

	// dot
	this.instance_18 = new lib.dot("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(84.2,140.1,1,1,0,0,0,2.9,2.9);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(17).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(19));

	// dot
	this.instance_19 = new lib.dot("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(95.9,137.2,1,1,0,0,0,2.9,2.9);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(16).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(20));

	// dot
	this.instance_20 = new lib.dot("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(106.7,132,1,1,0,0,0,2.9,2.9);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(15).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(21));

	// dot
	this.instance_21 = new lib.dot("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(116.6,125.1,1,1,0,0,0,2.9,2.9);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(14).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(22));

	// dot
	this.instance_22 = new lib.dot("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(124.9,116.6,1,1,0,0,0,2.9,2.9);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(13).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(23));

	// dot
	this.instance_23 = new lib.dot("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(131.8,106.9,1,1,0,0,0,2.9,2.9);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(12).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(24));

	// dot
	this.instance_24 = new lib.dot("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(137,96,1,1,0,0,0,2.9,2.9);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(11).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(25));

	// dot
	this.instance_25 = new lib.dot("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(140.1,84.4,1,1,0,0,0,2.9,2.9);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(10).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(26));

	// dot
	this.instance_26 = new lib.dot("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(141.2,72.5,1,1,0,0,0,2.9,2.9);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(9).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(27));

	// dot
	this.instance_27 = new lib.dot("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(140.2,60.5,1,1,0,0,0,2.9,2.9);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(8).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(28));

	// dot
	this.instance_28 = new lib.dot("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(137.4,48.8,1,1,0,0,0,2.9,2.9);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(7).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(29));

	// dot
	this.instance_29 = new lib.dot("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(132.4,37.9,1,1,0,0,0,2.9,2.9);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(6).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(30));

	// dot
	this.instance_30 = new lib.dot("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(125.3,28.1,1,1,0,0,0,2.9,2.9);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(5).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(31));

	// dot
	this.instance_31 = new lib.dot("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(116.8,19.7,1,1,0,0,0,2.9,2.9);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(4).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(32));

	// dot
	this.instance_32 = new lib.dot("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(107.1,12.3,1,1,0,0,0,2.9,2.9);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(3).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(33));

	// dot
	this.instance_33 = new lib.dot("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(96.3,7,1,1,0,0,0,2.9,2.9);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(2).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(34));

	// dot
	this.instance_34 = new lib.dot("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(84.5,3.9,1,1,0,0,0,2.9,2.9);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({_off:false},0).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(35));

	// dot
	this.instance_35 = new lib.dot("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(72.4,2.9,1,1,0,0,0,2.9,2.9);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({alpha:1},4).wait(78).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.5,0,5.8,5.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(2.6,72,1,1,0,0,0,72,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},599).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.8,5.8);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.txt = new cjs.Text("23%", "28px 'Cresci LP'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 35;
	this.txt.lineWidth = 57;
	this.txt.parent = this;
	this.txt.setTransform(323,460.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// Layer 10
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(320.4,439.9,1,1,0,0,0,2.9,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("ANSAAQAAFgj5D5Qj5D5lgAAQlfAAj5j5Qj5j5AAlgQAAlfD5j5QD5j5FfAAQFgAAD5D5QD5D5AAFfg");
	this.shape.setTransform(320,475.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AMLAAQAAFDjkDjQjkDllCAAQlDAAjkjlQjkjjAAlDQAAlBDkjlQDkjkFDAAQFCAADkDkQDkDlAAFBg");
	this.shape_1.setTransform(320,475.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.8)").s().p("Ap/KAQkJkJAAl3QAAl2EJkJQEJkJF2AAQF3AAEJEJQEJEJAAF2QAAF3kJEJQkJEJl3AAQl2AAkJkJg");
	this.shape_2.setTransform(320,476);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.main, new cjs.Rectangle(229.5,385.5,181,181), null);


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
	this.ldMc.parent = this;
	this.ldMc.setTransform(319.9,479,1,1,0,0,0,319.9,479);
	this.ldMc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ldMc).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 640,
	height: 1040,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib0 = lib0||{}, img0 = img0||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib0, img0, createjs, ss, AdobeAn;