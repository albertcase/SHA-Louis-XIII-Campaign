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



(lib.c1 = function() {
	this.initialize(img.c1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1044);


(lib.c10 = function() {
	this.initialize(img.c10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.c2 = function() {
	this.initialize(img.c2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1044);


(lib.c6 = function() {
	this.initialize(img.c6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.cmgf = function() {
	this.initialize(img.cmgf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,90);


(lib.Comp3_00000 = function() {
	this.initialize(img.Comp3_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00001 = function() {
	this.initialize(img.Comp3_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00002 = function() {
	this.initialize(img.Comp3_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00003 = function() {
	this.initialize(img.Comp3_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00004 = function() {
	this.initialize(img.Comp3_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00005 = function() {
	this.initialize(img.Comp3_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00006 = function() {
	this.initialize(img.Comp3_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00007 = function() {
	this.initialize(img.Comp3_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00008 = function() {
	this.initialize(img.Comp3_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00009 = function() {
	this.initialize(img.Comp3_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00010 = function() {
	this.initialize(img.Comp3_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00011 = function() {
	this.initialize(img.Comp3_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00012 = function() {
	this.initialize(img.Comp3_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00013 = function() {
	this.initialize(img.Comp3_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00014 = function() {
	this.initialize(img.Comp3_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00015 = function() {
	this.initialize(img.Comp3_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00016 = function() {
	this.initialize(img.Comp3_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00017 = function() {
	this.initialize(img.Comp3_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00018 = function() {
	this.initialize(img.Comp3_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00019 = function() {
	this.initialize(img.Comp3_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00020 = function() {
	this.initialize(img.Comp3_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00021 = function() {
	this.initialize(img.Comp3_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00022 = function() {
	this.initialize(img.Comp3_00022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00023 = function() {
	this.initialize(img.Comp3_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00024 = function() {
	this.initialize(img.Comp3_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00025 = function() {
	this.initialize(img.Comp3_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00026 = function() {
	this.initialize(img.Comp3_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00027 = function() {
	this.initialize(img.Comp3_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00028 = function() {
	this.initialize(img.Comp3_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00029 = function() {
	this.initialize(img.Comp3_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00030 = function() {
	this.initialize(img.Comp3_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00031 = function() {
	this.initialize(img.Comp3_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00032 = function() {
	this.initialize(img.Comp3_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00033 = function() {
	this.initialize(img.Comp3_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00034 = function() {
	this.initialize(img.Comp3_00034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Comp3_00035 = function() {
	this.initialize(img.Comp3_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.ed_bc = function() {
	this.initialize(img.ed_bc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,611,107);


(lib.ed_mskG2 = function() {
	this.initialize(img.ed_mskG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,729);


(lib.fxff = function() {
	this.initialize(img.fxff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,536);


(lib.line = function() {
	this.initialize(img.line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,459,224);


(lib.ng26 = function() {
	this.initialize(img.ng26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,368);


(lib.ng27 = function() {
	this.initialize(img.ng27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,143);


(lib.ng28 = function() {
	this.initialize(img.ng28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,21);


(lib.ng29 = function() {
	this.initialize(img.ng29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,43);


(lib.rule = function() {
	this.initialize(img.rule);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,29);


(lib.VectorSmartObject = function() {
	this.initialize(img.VectorSmartObject);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,657,906);// helper functions:

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


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.fxff();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.847)").s().p("Egx/BRQMAAAiifMBj/AAAMAAACifg");
	this.shape.setTransform(320,520);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,640,1040.1), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ed_bc();
	this.instance.parent = this;
	this.instance.setTransform(45.9,8.1,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(45.9,8.1,519.4,91), null);


(lib.touchArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.008)").s().p("Egx/BRQMAAAiifMBj/AAAMAAACifg");
	this.shape.setTransform(320,520);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.touchArea, new cjs.Rectangle(0,0,640,1040), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/BRQMAAAiifMBj/AAAMAAACifg");
	this.shape.setTransform(320,520);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F4D2BA","rgba(247,228,170,0)"],[0,1],0,0,0,0,0,57.9).s().p("AmWGXQioipAAjuQAAjtCoipQCpioDtAAQDuAACpCoQCoCpAADtQAADuioCpQipCojuAAQjtAAipiog");
	this.shape.setTransform(57.5,57.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,115);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(247,228,170,0)","#F7E4AA","rgba(247,228,170,0)"],[0,0.459,1],-38,0,38,0).s().p("Al7MtIAA5ZIL3AAIAAZZg");
	this.shape.setTransform(38,81.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,162.6);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng29();
	this.instance.parent = this;
	this.instance.setTransform(22,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22,0,105,43);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,57.3).s().p("AmOGQQimimAAjqQAAjpCmilQClimDpAAQDqAACmCmQClClAADpQAADqilCmQimCljqAAQjpAAililg");
	this.shape.setTransform(56.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,113);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng28();
	this.instance.parent = this;
	this.instance.setTransform(21,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21,0,185,21);


(lib.Symbol8copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoeADSIAAmjMBQ9AAAIAAGjg");
	mask.setTransform(247.5,88.5);

	// Layer 3
	this.instance = new lib.ng27();
	this.instance.parent = this;
	this.instance.setTransform(0,-24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,67.5,504,42);


(lib.Symbol8copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoeADSIAAmjMBQ9AAAIAAGjg");
	mask.setTransform(247.5,48.5);

	// Layer 3
	this.instance = new lib.ng27();
	this.instance.parent = this;
	this.instance.setTransform(0,-24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,27.5,504,42);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoeADSIAAmjMBQ9AAAIAAGjg");
	mask.setTransform(247.5,8.5);

	// Layer 3
	this.instance = new lib.ng27();
	this.instance.parent = this;
	this.instance.setTransform(-4,-25);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-12.5,504,42);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,368);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("AhjAyIBjhjIBkBj");
	this.shape.setTransform(10,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,22.8,12.9);


(lib.Symbol1copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#977255").s().p("AhhBiIAAjDIDDAAIAADDg");
	this.shape.setTransform(9.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,19.5);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEAE98").s().p("AhhBiIAAjDIDDAAIAADDg");
	this.shape.setTransform(9.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,19.5);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8CACD").s().p("AhhBiIAAjDIDDAAIAADDg");
	this.shape.setTransform(9.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,19.5);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhhBiIAAjDIDDAAIAADDg");
	this.shape.setTransform(9.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,19.5);


(lib.ruleBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var S=this;
		S.visible=false
		S.on("mousedown",function(e)
		{
			S.visible=false
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.instance = new lib.VectorSmartObject();
	this.instance.parent = this;
	this.instance.setTransform(39.3,124,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("Egx/BRQMAAAiifMBj/AAAMAAACifg");
	this.shape.setTransform(320,520);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ruleBox, new cjs.Rectangle(0,0,640,1040), null);


(lib.rule_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var S=this;
		S.on("mousedown",function(e)
		{
			S.parent.ruleBox.visible=true
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.instance = new lib.rule();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.rule_1, new cjs.Rectangle(0,0,98,29), null);


(lib.msk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ed_mskG2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.853,0.853);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.msk, new cjs.Rectangle(0,0,640,622.1), null);


(lib.lineBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.line();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lineBg, new cjs.Rectangle(0,0,459,224), null);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1044);


(lib.anIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Comp3_00000();
	this.instance.parent = this;
	this.instance.setTransform(0.5,0);

	this.instance_1 = new lib.Comp3_00001();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.instance_2 = new lib.Comp3_00002();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,0);

	this.instance_3 = new lib.Comp3_00003();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.5,0);

	this.instance_4 = new lib.Comp3_00004();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.5,0);

	this.instance_5 = new lib.Comp3_00005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.5,0);

	this.instance_6 = new lib.Comp3_00006();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.5,0);

	this.instance_7 = new lib.Comp3_00007();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.5,0);

	this.instance_8 = new lib.Comp3_00008();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0.5,0);

	this.instance_9 = new lib.Comp3_00009();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0.5,0);

	this.instance_10 = new lib.Comp3_00010();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0.5,0);

	this.instance_11 = new lib.Comp3_00011();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0.5,0);

	this.instance_12 = new lib.Comp3_00012();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0.5,0);

	this.instance_13 = new lib.Comp3_00013();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0.5,0);

	this.instance_14 = new lib.Comp3_00014();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0.5,0);

	this.instance_15 = new lib.Comp3_00015();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0.5,0);

	this.instance_16 = new lib.Comp3_00016();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0.5,0);

	this.instance_17 = new lib.Comp3_00017();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0.5,0);

	this.instance_18 = new lib.Comp3_00018();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0.5,0);

	this.instance_19 = new lib.Comp3_00019();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0.5,0);

	this.instance_20 = new lib.Comp3_00020();
	this.instance_20.parent = this;
	this.instance_20.setTransform(0.5,0);

	this.instance_21 = new lib.Comp3_00021();
	this.instance_21.parent = this;
	this.instance_21.setTransform(0.5,0);

	this.instance_22 = new lib.Comp3_00022();
	this.instance_22.parent = this;
	this.instance_22.setTransform(0.5,0);

	this.instance_23 = new lib.Comp3_00023();
	this.instance_23.parent = this;
	this.instance_23.setTransform(0.5,0);

	this.instance_24 = new lib.Comp3_00024();
	this.instance_24.parent = this;
	this.instance_24.setTransform(0.5,0);

	this.instance_25 = new lib.Comp3_00025();
	this.instance_25.parent = this;
	this.instance_25.setTransform(0.5,0);

	this.instance_26 = new lib.Comp3_00026();
	this.instance_26.parent = this;
	this.instance_26.setTransform(0.5,0);

	this.instance_27 = new lib.Comp3_00027();
	this.instance_27.parent = this;
	this.instance_27.setTransform(0.5,0);

	this.instance_28 = new lib.Comp3_00028();
	this.instance_28.parent = this;
	this.instance_28.setTransform(0.5,0);

	this.instance_29 = new lib.Comp3_00029();
	this.instance_29.parent = this;
	this.instance_29.setTransform(0.5,0);

	this.instance_30 = new lib.Comp3_00030();
	this.instance_30.parent = this;
	this.instance_30.setTransform(0.5,0);

	this.instance_31 = new lib.Comp3_00031();
	this.instance_31.parent = this;
	this.instance_31.setTransform(0.5,0);

	this.instance_32 = new lib.Comp3_00032();
	this.instance_32.parent = this;
	this.instance_32.setTransform(0.5,0);

	this.instance_33 = new lib.Comp3_00033();
	this.instance_33.parent = this;
	this.instance_33.setTransform(0.5,0);

	this.instance_34 = new lib.Comp3_00034();
	this.instance_34.parent = this;
	this.instance_34.setTransform(0.5,0);

	this.instance_35 = new lib.Comp3_00035();
	this.instance_35.parent = this;
	this.instance_35.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0,640,1040);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.c6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Layer 6
	this.instance_1 = new lib.Symbol14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(82,82,1,1,0,0,0,56.5,56.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},29).to({alpha:0},30).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("AjMDQIAAmfIGZAAIAAGfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:83.1,y:82.8}).wait(39).to({graphics:null,x:0,y:0}).wait(6));

	// Layer 3
	this.instance_2 = new lib.Symbol17("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(126.1,30.6,1,1,-50.7,0,0,38.1,81.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({x:34.6,y:133.7},38).to({_off:true},1).wait(6));

	// Layer 1
	this.instance_3 = new lib.c10();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// Layer 4
	this.instance_4 = new lib.Symbol18("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(82,82,1,1,0,0,0,57.5,57.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.43,scaleY:1.43,alpha:1},29).to({scaleX:1,scaleY:1,alpha:0},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Layer 2
	this.instance_1 = new lib.Symbol14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(82,82,1,1,0,0,0,56.5,56.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},24).to({alpha:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 1 copy 3
	this.instance = new lib.Symbol1copy3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(427,9.8,1,1,0,0,0,9.8,9.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},15).wait(52).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(16));

	// Symbol 1 copy 3
	this.instance_1 = new lib.Symbol1copy3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(525,95.1,1,1,0,0,0,9.8,9.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({alpha:1},15).wait(51).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(13));

	// Symbol 1 copy 3
	this.instance_2 = new lib.Symbol1copy3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(544.5,386.2,1,1,0,0,0,9.8,9.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({alpha:1},15).wait(58).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1 copy 3
	this.instance_3 = new lib.Symbol1copy3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(449.5,630.2,1,1,0,0,0,9.8,9.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({alpha:0.5},15).wait(47).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(7));

	// Symbol 1 copy 3
	this.instance_4 = new lib.Symbol1copy3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(389.4,750.3,1,1,0,0,0,9.8,9.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({alpha:1},15).wait(54).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1 copy 3
	this.instance_5 = new lib.Symbol1copy3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(87.4,777.3,1,1,0,0,0,9.8,9.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({alpha:1},15).wait(50).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(13));

	// Symbol 1 copy 3
	this.instance_6 = new lib.Symbol1copy3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(134.9,384.2,1,1,0,0,0,9.8,9.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({alpha:0.5},15).wait(57).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(8));

	// Symbol 1 copy 3
	this.instance_7 = new lib.Symbol1copy3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(9.8,568.2,1,1,0,0,0,9.8,9.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({alpha:1},15).wait(50).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(16));

	// Symbol 1 copy 3
	this.instance_8 = new lib.Symbol1copy3("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(67.9,170.1,1,1,0,0,0,9.8,9.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({alpha:1},15).wait(57).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(11));

	// Symbol 1 copy 3
	this.instance_9 = new lib.Symbol1copy3("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(9.8,28.1,1,1,0,0,0,9.8,9.8);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},15).wait(49).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,18.3,19.5,19.5);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 1 copy 2
	this.instance = new lib.Symbol1copy2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(457.2,9.8,1,1,0,0,0,9.8,9.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},14).wait(69).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1 copy 2
	this.instance_1 = new lib.Symbol1copy2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(403,48.8,1,1,0,0,0,9.8,9.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:0.5},14).wait(67).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(2));

	// Symbol 1 copy 2
	this.instance_2 = new lib.Symbol1copy2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(568,194.4,1,1,0,0,0,9.8,9.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({alpha:0.5},14).wait(60).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy 2
	this.instance_3 = new lib.Symbol1copy2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(457.2,389.4,1,1,0,0,0,9.8,9.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({alpha:0.5},14).wait(58).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy 2
	this.instance_4 = new lib.Symbol1copy2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(512.2,507.4,1,1,0,0,0,9.8,9.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({alpha:0.5},14).wait(53).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(4));

	// Symbol 1 copy 2
	this.instance_5 = new lib.Symbol1copy2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(471.2,527.9,1,1,0,0,0,9.8,9.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({alpha:0.5},14).wait(49).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1 copy 2
	this.instance_6 = new lib.Symbol1copy2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(551.2,609.2,1,1,0,0,0,9.8,9.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({alpha:0.5},14).wait(41).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(11));

	// Symbol 1 copy 2
	this.instance_7 = new lib.Symbol1copy2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(551.2,709.2,1,1,0,0,0,9.8,9.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({alpha:0.5},14).wait(49).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(8));

	// Symbol 1 copy 2
	this.instance_8 = new lib.Symbol1copy2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(536.2,791.3,1,1,0,0,0,9.8,9.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({alpha:1},14).wait(55).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1 copy 2
	this.instance_9 = new lib.Symbol1copy2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(416.1,709.2,1,1,0,0,0,9.8,9.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({alpha:1},14).wait(55).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1 copy 2
	this.instance_10 = new lib.Symbol1copy2("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(271.1,832.2,1,1,0,0,0,9.8,9.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).to({alpha:1},14).wait(59).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(4));

	// Symbol 1 copy 2
	this.instance_11 = new lib.Symbol1copy2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(107.9,527.9,1,1,0,0,0,9.8,9.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({alpha:0.5},14).wait(64).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy 2
	this.instance_12 = new lib.Symbol1copy2("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(9.8,213.9,1,1,0,0,0,9.8,9.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({alpha:1},14).wait(67).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(2));

	// Symbol 1 copy 2
	this.instance_13 = new lib.Symbol1copy2("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(118.1,48.8,1,1,0,0,0,9.8,9.8);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({alpha:1},14).wait(69).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108.3,0,358.6,58.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 1 copy
	this.instance = new lib.Symbol1copy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(525,180.6,1,1,0,0,0,9.8,9.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({alpha:0.5},14).wait(54).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(5));

	// Symbol 1 copy
	this.instance_1 = new lib.Symbol1copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(564,54.6,1,1,0,0,0,9.8,9.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({alpha:1},14).wait(56).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(4));

	// Symbol 1 copy
	this.instance_2 = new lib.Symbol1copy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(502,9.8,1,1,0,0,0,9.8,9.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({alpha:1},14).wait(60).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy
	this.instance_3 = new lib.Symbol1copy("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(549.5,263.6,1,1,0,0,0,9.8,9.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({alpha:1},14).wait(62).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1 copy
	this.instance_4 = new lib.Symbol1copy("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(470,391.6,1,1,0,0,0,9.8,9.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({alpha:0.5},14).wait(63).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1 copy
	this.instance_5 = new lib.Symbol1copy("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(530,491.7,1,1,0,0,0,9.8,9.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({alpha:0.5},14).wait(53).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(13));

	// Symbol 1 copy
	this.instance_6 = new lib.Symbol1copy("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(527,777.7,1,1,0,0,0,9.8,9.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({alpha:1},14).wait(61).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(5));

	// Symbol 1 copy
	this.instance_7 = new lib.Symbol1copy("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(282.9,878.3,1,1,0,0,0,9.8,9.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({alpha:0.5},14).wait(58).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(9));

	// Symbol 1 copy
	this.instance_8 = new lib.Symbol1copy("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(136.9,758.2,1,1,0,0,0,9.8,9.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({alpha:1},14).wait(54).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(13));

	// Symbol 1 copy
	this.instance_9 = new lib.Symbol1copy("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(136.9,697.2,1,1,0,0,0,9.8,9.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({alpha:1},14).wait(67).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1 copy
	this.instance_10 = new lib.Symbol1copy("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(109.9,533.2,1,1,0,0,0,9.8,9.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(2).to({_off:false},0).to({alpha:0.5},14).wait(65).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy
	this.instance_11 = new lib.Symbol1copy("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(9.8,426.1,1,1,0,0,0,9.8,9.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({alpha:1},14).wait(64).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy
	this.instance_12 = new lib.Symbol1copy("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(37.8,158.1,1,1,0,0,0,9.8,9.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).to({alpha:1},14).wait(61).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1 copy
	this.instance_13 = new lib.Symbol1copy("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(208.9,74.1,1,1,0,0,0,9.8,9.8);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({alpha:1},14).wait(52).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(4));

	// Symbol 1 copy
	this.instance_14 = new lib.Symbol1copy("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(105.9,54.6,1,1,0,0,0,9.8,9.8);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:1},14).wait(65).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96.1,44.8,19.5,19.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(10,5,1,1,0,0,0,10,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({startPosition:0},0).to({y:-5},5,cjs.Ease.get(-1)).to({y:5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,22.8,12.9);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 1
	this.instance = new lib.Symbol1_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(366.5,12.8,1,1,0,0,0,9.8,9.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(67).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1
	this.instance_1 = new lib.Symbol1_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(459,75.3,1,1,0,0,0,9.8,9.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({alpha:1},14).wait(65).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(2));

	// Symbol 1
	this.instance_2 = new lib.Symbol1_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(559,136.4,1,1,0,0,0,9.8,9.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({alpha:1},14).wait(66).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1
	this.instance_3 = new lib.Symbol1_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(572,264.4,1,1,0,0,0,9.8,9.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({alpha:1},14).wait(60).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(4));

	// Symbol 1
	this.instance_4 = new lib.Symbol1_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(443.5,499.4,1,1,0,0,0,9.8,9.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({alpha:1},14).wait(61).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1
	this.instance_5 = new lib.Symbol1_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(564,449.4,1,1,0,0,0,9.8,9.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({alpha:1},14).wait(61).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1
	this.instance_6 = new lib.Symbol1_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(572,511.5,1,1,0,0,0,9.8,9.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({alpha:1},14).wait(57).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1
	this.instance_7 = new lib.Symbol1_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(496,674,1,1,0,0,0,9.8,9.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({alpha:1},14).wait(49).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1
	this.instance_8 = new lib.Symbol1_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(466,816.6,1,1,0,0,0,9.8,9.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({alpha:1},14).wait(52).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1
	this.instance_9 = new lib.Symbol1_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(78.9,816.6,1,1,0,0,0,9.8,9.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({alpha:1},14).wait(52).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(8));

	// Symbol 1
	this.instance_10 = new lib.Symbol1_1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(30.9,654.5,1,1,0,0,0,9.8,9.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({alpha:1},14).wait(49).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(13));

	// Symbol 1
	this.instance_11 = new lib.Symbol1_1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(149.4,632,1,1,0,0,0,9.8,9.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(8).to({_off:false},0).to({alpha:1},14).wait(48).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(14));

	// Symbol 1
	this.instance_12 = new lib.Symbol1_1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(153.4,490,1,1,0,0,0,9.8,9.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).to({alpha:1},14).wait(55).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(9));

	// Symbol 1
	this.instance_13 = new lib.Symbol1_1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(50.4,531,1,1,0,0,0,9.8,9.8);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({alpha:1},14).wait(58).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1
	this.instance_14 = new lib.Symbol1_1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(9.8,283.9,1,1,0,0,0,9.8,9.8);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).to({alpha:1},14).wait(65).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(2));

	// Symbol 1
	this.instance_15 = new lib.Symbol1_1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(72.9,94.8,1,1,0,0,0,9.8,9.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({_off:false},0).to({alpha:1},14).wait(64).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1
	this.instance_16 = new lib.Symbol1_1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(72.9,9.8,1,1,0,0,0,9.8,9.8);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({alpha:1},14).wait(65).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.1,0,313.1,22.5);


(lib._img = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var S=this;
		var img = new createjs.Bitmap(S.parent.imgUrl);
		var inter=setInterval(function()
		{
			if(img.getBounds())
			{
				clearInterval(inter)
				img.scaleX=510/img.getBounds().width
				img.scaleY=510/img.getBounds().height
				S.addChildAt(img,0)
				S.msk.alpha=1;
				img.x=-7.5
				img.y=-24;
			}
		},1000/60)
		
		$("#ce").css("display","block")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 2
	this.msk = new lib.msk();
	this.msk.parent = this;
	this.msk.setTransform(249.1,256.5,1,1,0,0,0,320,325.5);

	this.timeline.addTween(cjs.Tween.get(this.msk).wait(1));

}).prototype = getMCSymbolPrototype(lib._img, new cjs.Rectangle(-70.9,-69,640,622.1), null);


(lib.blackOut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
		this.parent.parent.gotoAndStop(0);
		
		gotoScene(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(2));

	// Layer 1
	this.instance = new lib.Symbol19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(320,520,1,1,0,0,0,320,520);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},19).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.arrUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(19.5,5,1,1,0,0,0,10,5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACxBbIAAgNIiJAAIAAANIgPAAIAAiuICnAAIAACugAAoBCICJAAIAAiHIiJAAgAi/BKIAagXIAAg/IgYAAIAAgOIAmAAIAABRQAGAIAJAFQAJAFAPAAQASABAogBQAuAAAIgBIgEAPIgwAAIg9gBQgQAAgMgEQgMgGgGgLQgOANgJANgAh3A2QARgHANgIQAOgIAKgJIglgdIAKgJIAlAcQAJgJAGgIQAGgLAFgKIhNAAQAAAZgHAVQgGAWgOAQIgMgLQAOgNAGgWQAFgTAAgcIAAgtQAbAAAcgDQAbgCAcgDIAFANIg1AGIgwACIAAAbIBdAAIAAAOQgGAOgHAMQgGALgKAKIAmAeIgNAOIgkghQgLAJgOAJQgOAJgRAHgABDAhIAAhIIBRAAIAABIgABRAUIA0AAIAAguIg0AAgAivhTIAMgHQALANAQAYIgNAIQgSgcgIgKg");
	this.shape.setTransform(19.2,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrUp, new cjs.Rectangle(0,-1.3,38.3,47.6), null);


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
	this.instance.parent = this;
	this.instance.setTransform(284.9,417.9,1,1,0,0,0,277.1,393.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).wait(2));

	// Symbol 4
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(301.7,467.7,1,1,0,0,0,288.9,420.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(22));

	// Symbol 3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(286.8,443.9,1,1,0,0,0,286.8,443.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(42));

	// Symbol 2
	this.instance_3 = new lib.Symbol2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(299.7,434.6,1,1,0,0,0,290.9,413.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.8,21.5,313.1,22.5);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ed:140});

	// timeline functions:
	this.frame_110 = function() {
		var s = this;
		this.arrow = 0
		
		this.NGbtnNext.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			console.log("---")
			s.arrow="next"
		}
		
		
		
		this.f1=function(e)
		{
			yStart = e.touches[0].pageY;
		}
		this.f2=function(e)
		{
			yEnd = e.changedTouches[0].pageY;
			changeSC();
			//console.log(yEnd);
		}
		
		window.addEventListener("touchstart", s.f1);
		window.addEventListener("touchend", s.f2)
		
		function changeSC()
		{
			var _f = s.currentFrame
		
			if (yEnd-yStart>20)
			{
				if (_f <= 112)
				{
					s.blackOut.visible = true;
					s.blackOut.gotoAndPlay(1);
		
					window.removeEventListener("touchstart", s.f1);
					window.removeEventListener("touchend", s.f2)
				}
				else
				{
					s.arrow="prev"
				}
			}
		}
		
		
		
		s.on("tick", function (e)
		{
			var _f = s.currentFrame
			if (s.arrow == "next" && _f < 139)
			{
				_f++;
				s.gotoAndStop(_f)
			}
			else if (s.arrow == "prev" && _f > 111)
			{
				_f--;
				s.gotoAndStop(_f)
			}
		})
	}
	this.frame_111 = function() {
		this.stop();
		this.NGbtnNext.visible=true;
		console.log(999)
	}
	this.frame_112 = function() {
		this.NGbtnNext.visible=false;
	}
	this.frame_125 = function() {
		if(this.arrow=="next")
		{
			$("#iptBox").css("display","block")
			TweenMax.to("#iptBox",.3,{opacity:1});
		}
	}
	this.frame_138 = function() {
		if(this.arrow=="prev")
		{
			
			TweenMax.to("#iptBox",.3,{opacity:0,onComplete:function()
				{
					$("#iptBox").css("display","none")
				}
			});
		}
	}
	this.frame_139 = function() {
		var S=this
		S.stop();
		
		S.imgUrl="img/test.jpg"
		S.imgId
		
		enSubBtn();
		function enSubBtn()
		{
			S.btn.addEventListener("mousedown",subF)
		}
		function dsSubBtn()
		{
			S.btn.removeEventListener("mousedown",subF)
		}
		
		
		function subF()
		{
			var _info=""
			console.log(INFO.message)
			
			for(var i=0;i<INFO.message.length;i++)
			{
				_info+=INFO.message[i]+(i<INFO.message.length-1?",|,":"");
			}
			console.log(_info)
			_info=encodeURIComponent(_info);
			var _na=encodeURIComponent($("#na").val());
			if(_info.length<1){log("请填写您的感想");return;}
			if(_na.length<1){log("请签下您的名字");return;}
			
			log("保存中...")
			dsSubBtn()
			
			
			//====admin
			//$("#ipt,#na").css("display","none")
			//			//$("#ce").attr("src",_d.url)
			//			$("#ce").attr("src",S.imgUrl)
			//			//设置分享
			//			S.gotoAndStop("ed")
			//console.log("name:"+_na,"info:"+_info)
			//return;
		
		
			$.ajax(
			{
				type		: "post",
				url			: domain+"ajax/api/message?r="+Math.random(),
				dataType	: "json",
				data:
				{
					name  	: _na,
					txt		: _info
				},
				success		: function (_d)
				{
					console.log(_d)
					if(_d.status=="1")
					{
						log("保存成功!")
						S.imgUrl=_d.url;
						S.imgId=_d.id;
						
						$("#ipt,#na").css("display","none")
						$("#ce").attr("src",S.imgUrl)
						//设置分享
						S.gotoAndStop("ed")
						
						SHARE_DATA.link=domain+"share/?id="+S.imgId
						setShareInfo();
					}
					else
					{
						log(_d.msg)
						enSubBtn()
					}
				},
				error		: function (XMLHttpRequest, textStatus, errorThrown) 
				{ 
					log("网络错误，请重试")
					enSubBtn()
				}
			});	
		}
		
		
		
		var ct
		function log(_str)
		{
			S.err.text=_str;
			if(ct){ clearTimeout(ct) };
			ct=setTimeout(function()
			{
				S.err.text="";
			},3000);
		}
	}
	this.frame_140 = function() {
		window.removeEventListener("touchstart", this.f1);
		window.removeEventListener("touchend",  this.f2)
		
		this.stop();
		var S=this
		S.fxBox.visible=false;
		
		S.fx.on("mousedown",function(e)
		{
			S.fxBox.visible=true;
		})
		
		S.fxBox.on("mousedown",function(e)
		{
			S.fxBox.visible=false;
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(110).call(this.frame_110).wait(1).call(this.frame_111).wait(1).call(this.frame_112).wait(13).call(this.frame_125).wait(13).call(this.frame_138).wait(1).call(this.frame_139).wait(1).call(this.frame_140).wait(11));

	// blackOut
	this.blackOut = new lib.blackOut();
	this.blackOut.parent = this;
	this.blackOut.setTransform(320,520,1,1,0,0,0,320,520);
	this.blackOut._off = true;
	this.blackOut.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.blackOut).wait(110).to({_off:false},0).to({_off:true},30).wait(11));

	// NGbtnNext
	this.NGbtnNext = new lib.touchArea();
	this.NGbtnNext.parent = this;
	this.NGbtnNext.setTransform(320.1,632,0.462,0.156,0,0,0,320,520);
	this.NGbtnNext._off = true;

	this.timeline.addTween(cjs.Tween.get(this.NGbtnNext).wait(110).to({_off:false},0).to({_off:true},30).wait(11));

	// Layer 2
	this.arrUp = new lib.arrUp();
	this.arrUp.parent = this;
	this.arrUp.setTransform(320.1,76.2,1,1,0,0,0,19.2,22.4);
	this.arrUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arrUp).wait(110).to({_off:false},0).to({_off:true},30).wait(11));

	// FX
	this.fxBox = new lib.元件2();
	this.fxBox.parent = this;
	this.fxBox.setTransform(320,268,1,1,0,0,0,320,268);
	this.fxBox._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fxBox).wait(140).to({_off:false},0).wait(11));

	// ruleBox
	this.ruleBox = new lib.ruleBox();
	this.ruleBox.parent = this;
	this.ruleBox.setTransform(279.5,357.5,1,1,0,0,0,279.5,357.5);
	this.ruleBox._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ruleBox).wait(140).to({_off:false},0).wait(11));

	// logTip
	this.err = new cjs.Text("", "22px 'Arial'", "#FFFFFF");
	this.err.name = "err";
	this.err.textAlign = "center";
	this.err.lineHeight = 24;
	this.err.lineWidth = 348;
	this.err.parent = this;
	this.err.setTransform(327,661);
	this.err._off = true;

	this.timeline.addTween(cjs.Tween.get(this.err).wait(139).to({_off:false},0).to({_off:true},1).wait(11));

	// line
	this.instance = new lib.lineBg();
	this.instance.parent = this;
	this.instance.setTransform(321.5,414,1,1,0,0,0,229.5,112);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(126).to({_off:false},0).to({alpha:1},13).to({_off:true},1).wait(11));

	// success
	this.fx = new lib.元件1();
	this.fx.parent = this;
	this.fx.setTransform(331.6,866.9,1,1,0,0,0,305.5,53.5);

	this.instance_1 = new lib.cmgf();
	this.instance_1.parent = this;
	this.instance_1.setTransform(174,114);

	this.instance_2 = new lib.rule_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(320,969.9,1,1,0,0,0,49,14.5);

	this.instance_3 = new lib._img();
	this.instance_3.parent = this;
	this.instance_3.setTransform(71,259.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.fx}]},140).wait(11));

	//  subBtn
	this.btn = new lib.Symbol15();
	this.btn.parent = this;
	this.btn.setTransform(318.1,748.2,1,1,0,0,0,82,82);
	this.btn.alpha = 0;
	this.btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(126).to({_off:false},0).to({alpha:1},13).to({_off:true},1).wait(11));

	// touchArea
	this.touchArea = new lib.touchArea();
	this.touchArea.parent = this;
	this.touchArea.setTransform(320,520,1,1,0,0,0,320,520);
	this.touchArea._off = true;

	this.timeline.addTween(cjs.Tween.get(this.touchArea).wait(110).to({_off:false},0).to({_off:true},30).wait(11));

	// anIn
	this.instance_4 = new lib.anIn("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(29.2,29.2,1,1,0,0,0,29.2,29.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(36).to({startPosition:35},0).to({alpha:0},10).to({_off:true},1).wait(100));

	// Layer 22
	this.instance_5 = new lib.Symbol16("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(314.6,827.7,1,1,0,0,0,74.5,22);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(126).to({_off:false},0).to({y:813.8,alpha:0.691},4).to({y:807.7,alpha:1},9,cjs.Ease.get(1)).to({_off:true},1).wait(11));

	// c4.png
	this.instance_6 = new lib.Symbol10("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(327.1,697.2,1,1,0,0,0,113.5,10.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(94).to({_off:false},0).to({y:683.4,alpha:0.691},5).to({y:677.2,alpha:1},11,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({alpha:0},13).to({_off:true},1).wait(25));

	// c6.png
	this.instance_7 = new lib.Symbol9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(320,609.7,1,1,0,0,0,82,82);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({_off:false},0).to({alpha:1},10).wait(13).to({alpha:0},13).to({_off:true},1).wait(25));

	// Symbol 8 copy 2
	this.instance_8 = new lib.Symbol8copy2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(319.1,454.6,1,1,0,0,0,247.5,47);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(67).to({_off:false},0).to({y:440.9,alpha:0.691},5).to({y:434.6,alpha:1},11,cjs.Ease.get(1)).wait(29).to({startPosition:0},0).to({alpha:0},13).to({_off:true},1).wait(25));

	// Symbol 8 copy
	this.instance_9 = new lib.Symbol8copy("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(319.1,454.6,1,1,0,0,0,247.5,47);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(63).to({_off:false},0).to({y:440.9,alpha:0.691},5).to({y:434.6,alpha:1},11,cjs.Ease.get(1)).wait(33).to({startPosition:0},0).to({alpha:0},13).to({_off:true},1).wait(25));

	// Symbol 8
	this.instance_10 = new lib.Symbol8("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(319.1,454.6,1,1,0,0,0,247.5,47);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(59).to({_off:false},0).to({y:440.9,alpha:0.691},5).to({y:434.6,alpha:1},11,cjs.Ease.get(1)).wait(37).to({startPosition:0},0).to({alpha:0},13).to({_off:true},1).wait(25));

	// c5.png
	this.instance_11 = new lib.Symbol7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(320.6,192.6,1,1,0,0,0,320,184);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(51).to({_off:false},0).to({y:206.3,alpha:0.68},5).to({y:212.6,alpha:1},14,cjs.Ease.get(1)).wait(42).to({startPosition:0},0).to({alpha:0},13).to({_off:true},1).wait(25));

	// blockEff
	this.instance_12 = new lib.Symbol6();
	this.instance_12.parent = this;
	this.instance_12.setTransform(320.5,494.9,1,1,0,0,0,295.2,444.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(54).to({_off:false},0).wait(97));

	// Layer 6
	this.instance_13 = new lib.bg1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(320,522,1,1,0,0,0,320,522);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).to({alpha:1},10).wait(62).to({startPosition:0},0).to({alpha:0},13).to({_off:true},1).wait(25));

	// Layer 1
	this.instance_14 = new lib.c1();
	this.instance_14.parent = this;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(112).to({_off:false},0).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
	this.instance.parent = this;
	this.instance.setTransform(320,520,1,1,0,0,0,320,520);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 640,
	height: 1040,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/c1.jpg", id:"c1"},
		{src:"images/c10.png", id:"c10"},
		{src:"images/c2.jpg", id:"c2"},
		{src:"images/c6.png", id:"c6"},
		{src:"images/cmgf.png", id:"cmgf"},
		{src:"images/Comp3_00000.png", id:"Comp3_00000"},
		{src:"images/Comp3_00001.png", id:"Comp3_00001"},
		{src:"images/Comp3_00002.png", id:"Comp3_00002"},
		{src:"images/Comp3_00003.png", id:"Comp3_00003"},
		{src:"images/Comp3_00004.png", id:"Comp3_00004"},
		{src:"images/Comp3_00005.png", id:"Comp3_00005"},
		{src:"images/Comp3_00006.png", id:"Comp3_00006"},
		{src:"images/Comp3_00007.png", id:"Comp3_00007"},
		{src:"images/Comp3_00008.png", id:"Comp3_00008"},
		{src:"images/Comp3_00009.png", id:"Comp3_00009"},
		{src:"images/Comp3_00010.png", id:"Comp3_00010"},
		{src:"images/Comp3_00011.png", id:"Comp3_00011"},
		{src:"images/Comp3_00012.png", id:"Comp3_00012"},
		{src:"images/Comp3_00013.png", id:"Comp3_00013"},
		{src:"images/Comp3_00014.png", id:"Comp3_00014"},
		{src:"images/Comp3_00015.png", id:"Comp3_00015"},
		{src:"images/Comp3_00016.png", id:"Comp3_00016"},
		{src:"images/Comp3_00017.png", id:"Comp3_00017"},
		{src:"images/Comp3_00018.png", id:"Comp3_00018"},
		{src:"images/Comp3_00019.png", id:"Comp3_00019"},
		{src:"images/Comp3_00020.png", id:"Comp3_00020"},
		{src:"images/Comp3_00021.png", id:"Comp3_00021"},
		{src:"images/Comp3_00022.png", id:"Comp3_00022"},
		{src:"images/Comp3_00023.png", id:"Comp3_00023"},
		{src:"images/Comp3_00024.png", id:"Comp3_00024"},
		{src:"images/Comp3_00025.png", id:"Comp3_00025"},
		{src:"images/Comp3_00026.png", id:"Comp3_00026"},
		{src:"images/Comp3_00027.png", id:"Comp3_00027"},
		{src:"images/Comp3_00028.png", id:"Comp3_00028"},
		{src:"images/Comp3_00029.png", id:"Comp3_00029"},
		{src:"images/Comp3_00030.png", id:"Comp3_00030"},
		{src:"images/Comp3_00031.png", id:"Comp3_00031"},
		{src:"images/Comp3_00032.png", id:"Comp3_00032"},
		{src:"images/Comp3_00033.png", id:"Comp3_00033"},
		{src:"images/Comp3_00034.png", id:"Comp3_00034"},
		{src:"images/Comp3_00035.png", id:"Comp3_00035"},
		{src:"images/ed_bc.png", id:"ed_bc"},
		{src:"images/ed_mskG2.png", id:"ed_mskG2"},
		{src:"images/fxff.png", id:"fxff"},
		{src:"images/line.png", id:"line"},
		{src:"images/ng26.png", id:"ng26"},
		{src:"images/ng27.png", id:"ng27"},
		{src:"images/ng28.png", id:"ng28"},
		{src:"images/ng29.png", id:"ng29"},
		{src:"images/rule.png", id:"rule"},
		{src:"images/VectorSmartObject.png", id:"VectorSmartObject"}
	],
	preloads: []
};




})(lib3 = lib3||{}, img3 = img3||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib3, img3, createjs, ss, AdobeAn;