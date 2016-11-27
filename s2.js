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



(lib.b10 = function() {
	this.initialize(img.b10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,530);


(lib.b11 = function() {
	this.initialize(img.b11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,530);


(lib.b15 = function() {
	this.initialize(img.b15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,544);


(lib.b16 = function() {
	this.initialize(img.b16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,544);


(lib.b2 = function() {
	this.initialize(img.b2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,525);


(lib.b22 = function() {
	this.initialize(img.b22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,609);


(lib.b23 = function() {
	this.initialize(img.b23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,609);


(lib.b3 = function() {
	this.initialize(img.b3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,525);


(lib.b4 = function() {
	this.initialize(img.b4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,530);


(lib.b5 = function() {
	this.initialize(img.b5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,530);


(lib.ng10 = function() {
	this.initialize(img.ng10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,122);


(lib.ng11 = function() {
	this.initialize(img.ng11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,58);


(lib.ng12 = function() {
	this.initialize(img.ng12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,552);


(lib.ng13 = function() {
	this.initialize(img.ng13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,552);


(lib.ng14 = function() {
	this.initialize(img.ng14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,122);


(lib.ng15 = function() {
	this.initialize(img.ng15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,192);


(lib.ng16 = function() {
	this.initialize(img.ng16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,58);


(lib.ng17 = function() {
	this.initialize(img.ng17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,364,193);


(lib.ng18 = function() {
	this.initialize(img.ng18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,671,523);


(lib.ng19 = function() {
	this.initialize(img.ng19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,671,523);


(lib.ng20_2 = function() {
	this.initialize(img.ng20_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,347,156);


(lib.ng21 = function() {
	this.initialize(img.ng21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,57);


(lib.ng22 = function() {
	this.initialize(img.ng22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,137);


(lib.ng23 = function() {
	this.initialize(img.ng23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,137);


(lib.ng24 = function() {
	this.initialize(img.ng24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,712,530);


(lib.ng25 = function() {
	this.initialize(img.ng25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,712,530);


(lib.ng8 = function() {
	this.initialize(img.ng8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,122);


(lib.ng9 = function() {
	this.initialize(img.ng9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,156);// helper functions:

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


(lib.touchArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.008)").s().p("Egx/BRQMAAAiifMBj/AAAMAAACifg");
	this.shape.setTransform(320,520);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.touchArea, new cjs.Rectangle(0,0,640,1040), null);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng23();
	this.instance.parent = this;
	this.instance.setTransform(-6,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,24,336,137);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng22();
	this.instance.parent = this;
	this.instance.setTransform(14,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,-8,294,137);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.ng21();
	this.instance.parent = this;
	this.instance.setTransform(10,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,78,243,57);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,712,530);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ng24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,712,530);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,609);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,609);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ng20_2();
	this.instance.parent = this;
	this.instance.setTransform(-26.5,31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,31,347,156);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng17();
	this.instance.parent = this;
	this.instance.setTransform(-33,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,45,364,193);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.ng16();
	this.instance.parent = this;
	this.instance.setTransform(9,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,78,243,58);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng19();
	this.instance.parent = this;
	this.instance.setTransform(27,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27,0,671,523);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng18();
	this.instance.parent = this;
	this.instance.setTransform(27,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27,0,671,523);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,544);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,544);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng15();
	this.instance.parent = this;
	this.instance.setTransform(4,87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,87,308,192);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng14();
	this.instance.parent = this;
	this.instance.setTransform(-17,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,8,330,122);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.ng11();
	this.instance.parent = this;
	this.instance.setTransform(4,76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,76,300,58);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b10();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,530);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,530);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng13();
	this.instance.parent = this;
	this.instance.setTransform(0,77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,77,740,552);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng12();
	this.instance.parent = this;
	this.instance.setTransform(0,77);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,77,740,552);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng10();
	this.instance.parent = this;
	this.instance.setTransform(-13,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,37,330,122);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,530);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,525);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng9();
	this.instance.parent = this;
	this.instance.setTransform(-15,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,4,333,156);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,530);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,525);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwAGGIAAsLMAgBAAAIAAMLg");
	mask.setTransform(152.6,148.4);

	// Layer 5
	this.instance = new lib.ng8();
	this.instance.parent = this;
	this.instance.setTransform(1,46);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.1,109.4,205.1,58.6);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/3GBIAAsBMA/vAAAIAAMBg");
	mask.setTransform(169.1,67.9);

	// Layer 5
	this.instance = new lib.ng8();
	this.instance.parent = this;
	this.instance.setTransform(1,46);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,46,301,60.4);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/BRQMAAAiifMBj/AAAMAAACifg");
	this.shape.setTransform(320,520);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("AhjAyIBjhjIBkBj");
	this.shape.setTransform(10,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,22.8,12.9);


(lib.blackMask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/BRQMAAAiifMBj/AAAMAAACifg");
	this.shape.setTransform(320,520);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.autoPlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_64 = function() {
		/*
		if (currentTemp <= 12){
			currentTemp += 1;
			this.parent.mainLine.play();
			motionTemp = 1;
		}
		
		this.gotoAndStop(0);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(64).call(this.frame_64).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.008)").s().p("AgxAyIAAhjIBjAAIAABjg");
	this.shape.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Layer 2
	this.instance = new lib.Symbol57();
	this.instance.parent = this;
	this.instance.setTransform(130.5,97,1,1,0,0,0,130.5,77);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:81.2,alpha:0.789},7).to({y:77,alpha:1},17,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol53("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(356,265,1,1,0,0,0,356,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:405.1},99).to({x:356},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,712,530);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol51("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(356,265,1,1,0,0,0,356,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:405.1},99).to({x:356},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,712,530);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol49("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(370,304.5,1,1,0,0,0,370,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:321},99).to({x:370},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,609);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol47("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(370,304.5,1,1,0,0,0,370,304.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:321},99).to({x:370},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,609);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Layer 3
	this.instance = new lib.Symbol43();
	this.instance.parent = this;
	this.instance.setTransform(126.5,99.5,1,1,0,0,0,126.5,79.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:83.7,alpha:0.789},7).to({y:79.5,alpha:1},17,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol39("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(378.2,265,1,1,0,0,0,370,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:362},99).to({x:378.2},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.2,0,671,523);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol37("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(378.2,265,1,1,0,0,0,370,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:362},99).to({x:378.2},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.2,0,671,523);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol35("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(370,272,1,1,0,0,0,370,272);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:419.2},99).to({x:370},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,544);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol33("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(370,272,1,1,0,0,0,370,272);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:419.2},99).to({x:370},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,544);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// Layer 3
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(155.5,97.5,1,1,0,0,0,155.5,78);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:82.1,alpha:0.789},7).to({y:78,alpha:1},17,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol25("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(370,265,1,1,0,0,0,370,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:400},99).to({x:370},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,530);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol23("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(370,265,1,1,0,0,0,370,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:400},99).to({x:370},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,530);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg9PAooMAAAhRPMB6fAAAMAAABRPg");
	mask.setTransform(366.8,370);

	// Layer 1
	this.instance = new lib.Symbol21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(370,314.5,1,1,0,0,0,370,314.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:329.5},99).to({x:370},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,110,740,519);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg9PAooMAAAhRPMB6fAAAMAAABRPg");
	mask.setTransform(366.8,370);

	// Layer 1
	this.instance = new lib.Symbol19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(370,314.5,1,1,0,0,0,370,314.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:329.5},99).to({x:370},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,110,740,519);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(370,265,1,1,0,0,0,370,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:410.5},99).to({x:370},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,530);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(370,265,1,1,0,0,0,370,265);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:410.5},99).to({x:370},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,530);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(370,262.5,1,1,0,0,0,370,262.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:330},99).to({x:370},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,525);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer 1
	this.instance = new lib.Symbol9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(370,262.5,1,1,0,0,0,370,262.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:330},99).to({x:370},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,740,525);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// Layer 3
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(155.5,133,1,1,0,0,0,155.5,113);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:117.2,alpha:0.699},7).to({y:113,alpha:1},17,cjs.Ease.get(1)).wait(5));

	// Layer 4
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(155.5,133,1,1,0,0,0,155.5,113);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:117.2,alpha:0.699},7).to({y:113,alpha:1},17,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(10,5,1,1,0,0,0,10,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({startPosition:0},0).to({y:-5},5,cjs.Ease.get(-1)).to({y:5},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,22.8,12.9);


(lib.mainLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
		
<<<<<<< HEAD
		_hmt.push(['_trackPageview', /neiyeP1_0]);
=======
		_hmt.push(['_trackPageview', '/neiyeP1_0']);
>>>>>>> a741dd44c5a9cdceb12e99054f96bb8f9ee81ae8
		
		this.parent.autoPlay.gotoAndPlay(1);
		this.mc1_1.stop();
		this.mc1_2.stop();
		
		this.parent.arrUp.visible = false;
		
		motionTemp = 0;
	}
	this.frame_79 = function() {
		this.stop();
		
<<<<<<< HEAD
		_hmt.push(['_trackPageview', /neiyeP1_1]);
=======
		_hmt.push(['_trackPageview', '/neiyeP1_1']);
>>>>>>> a741dd44c5a9cdceb12e99054f96bb8f9ee81ae8
		
		this.parent.autoPlay.gotoAndPlay(1);
		this.mc1_1.play();
		this.mc1_2.play();
		
		this.parent.arrUp.visible = true;
		
		motionTemp = 0;
	}
	this.frame_80 = function() {
		this.mc1_1.stop();
		this.mc1_2.stop();
	}
	this.frame_104 = function() {
		this.stop();
		
<<<<<<< HEAD
		_hmt.push(['_trackPageview', /neiyeP1_2]);
=======
		_hmt.push(['_trackPageview', '/neiyeP1_2']);
>>>>>>> a741dd44c5a9cdceb12e99054f96bb8f9ee81ae8
		
		this.parent.autoPlay.gotoAndPlay(1);
		this.mc2_1.play();
		this.mc2_2.play();
		
		
		motionTemp = 0;
	}
	this.frame_105 = function() {
		this.mc2_1.stop();
		this.mc2_2.stop();
	}
	this.frame_154 = function() {
		this.stop();
		
<<<<<<< HEAD
		_hmt.push(['_trackPageview', /neiyeP2_0]);
=======
		_hmt.push(['_trackPageview', '/neiyeP2_0']);
>>>>>>> a741dd44c5a9cdceb12e99054f96bb8f9ee81ae8
		
		this.parent.autoPlay.gotoAndPlay(1);
		this.mc3_1.stop();
		this.mc3_2.stop();
		
		
		motionTemp = 0;
	}
	this.frame_179 = function() {
		this.stop();
		
<<<<<<< HEAD
		_hmt.push(['_trackPageview', /neiyeP2_1]);
=======
		_hmt.push(['_trackPageview', '/neiyeP2_1']);
>>>>>>> a741dd44c5a9cdceb12e99054f96bb8f9ee81ae8
		
		this.parent.autoPlay.gotoAndPlay(1);
		this.mc3_1.play();
		this.mc3_2.play();
		
		
		motionTemp = 0;
	}
	this.frame_180 = function() {
		this.mc3_1.stop();
		this.mc3_2.stop();
	}
	this.frame_204 = function() {
		this.stop();
		
<<<<<<< HEAD
		_hmt.push(['_trackPageview', /neiyeP2_2]);
=======
		_hmt.push(['_trackPageview', '/neiyeP2_2']);
>>>>>>> a741dd44c5a9cdceb12e99054f96bb8f9ee81ae8
		
		this.parent.autoPlay.gotoAndPlay(1);
		this.mc4_1.play();
		this.mc4_2.play();
		
		
		motionTemp = 0;
	}
	this.frame_205 = function() {
		this.mc4_1.stop();
		this.mc4_2.stop();
	}
	this.frame_254 = function() {
		this.stop();
		
<<<<<<< HEAD
		_hmt.push(['_trackPageview', /neiyeP3_0]);
=======
		_hmt.push(['_trackPageview', '/neiyeP3_0']);
>>>>>>> a741dd44c5a9cdceb12e99054f96bb8f9ee81ae8
		
		this.parent.autoPlay.gotoAndPlay(1);
		this.mc5_1.stop();
		this.mc5_2.stop();
		
		
		motionTemp = 0;
	}
	this.frame_279 = function() {
		this.stop();
		
<<<<<<< HEAD
		_hmt.push(['_trackPageview', /neiyeP3_1]);
=======
		_hmt.push(['_trackPageview', '/neiyeP3_1']);
>>>>>>> a741dd44c5a9cdceb12e99054f96bb8f9ee81ae8
		
		this.parent.autoPlay.gotoAndPlay(1);
		this.mc5_1.play();
		this.mc5_2.play();
		
		
		motionTemp = 0;
	}
	this.frame_280 = function() {
		this.mc5_1.stop();
		this.mc5_2.stop();
	}
	this.frame_304 = function() {
		this.stop();
		
<<<<<<< HEAD
		_hmt.push(['_trackPageview', /neiyeP3_2]);
=======
		_hmt.push(['_trackPageview', '/neiyeP3_2']);
>>>>>>> a741dd44c5a9cdceb12e99054f96bb8f9ee81ae8
		
		this.parent.autoPlay.gotoAndPlay(1);
		this.mc6_1.play();
		this.mc6_2.play();
		
		
		motionTemp = 0;
	}
	this.frame_305 = function() {
		this.mc6_1.stop();
		this.mc6_2.stop();
	}
	this.frame_354 = function() {
		this.stop();
		
<<<<<<< HEAD
		_hmt.push(['_trackPageview', /neiyeP4_0]);
=======
		_hmt.push(['_trackPageview', '/neiyeP4_0']);
>>>>>>> a741dd44c5a9cdceb12e99054f96bb8f9ee81ae8
		
		this.parent.autoPlay.gotoAndPlay(1);
		this.mc7_1.stop();
		this.mc7_2.stop();
		
		
		motionTemp = 0;
	}
	this.frame_379 = function() {
		this.stop();
		
<<<<<<< HEAD
		_hmt.push(['_trackPageview', /neiyeP4_1]);
=======
		_hmt.push(['_trackPageview', '/neiyeP4_1']);
>>>>>>> a741dd44c5a9cdceb12e99054f96bb8f9ee81ae8
		
		this.parent.autoPlay.gotoAndPlay(1);
		this.mc7_1.play();
		this.mc7_2.play();
		
		
		motionTemp = 0;
	}
	this.frame_380 = function() {
		this.mc7_1.stop();
		this.mc7_2.stop();
	}
	this.frame_404 = function() {
		this.stop();
		
<<<<<<< HEAD
		_hmt.push(['_trackPageview', /neiyeP4_2]);
=======
		_hmt.push(['_trackPageview', '/neiyeP4_2']);
>>>>>>> a741dd44c5a9cdceb12e99054f96bb8f9ee81ae8
		
		this.parent.autoPlay.gotoAndPlay(1);
		this.mc8_1.play();
		this.mc8_2.play();
		
		
		motionTemp = 0;
	}
	this.frame_405 = function() {
		this.mc8_1.stop();
		this.mc8_2.stop();
		
		this.parent.arrUp.visible = false;
		this.parent.arrDown.visible = false;
	}
	this.frame_434 = function() {
		this.stop();
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(25).call(this.frame_79).wait(1).call(this.frame_80).wait(24).call(this.frame_104).wait(1).call(this.frame_105).wait(49).call(this.frame_154).wait(25).call(this.frame_179).wait(1).call(this.frame_180).wait(24).call(this.frame_204).wait(1).call(this.frame_205).wait(49).call(this.frame_254).wait(25).call(this.frame_279).wait(1).call(this.frame_280).wait(24).call(this.frame_304).wait(1).call(this.frame_305).wait(49).call(this.frame_354).wait(25).call(this.frame_379).wait(1).call(this.frame_380).wait(24).call(this.frame_404).wait(1).call(this.frame_405).wait(29).call(this.frame_434).wait(1));

	// Layer 14
	this.instance = new lib.Symbol55();
	this.instance.parent = this;
	this.instance.setTransform(320.1,489.7,1,1,0,0,0,130.5,77);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(339).to({_off:false},0).to({alpha:1},15).wait(1).to({alpha:0},14).to({_off:true},1).wait(65));

	// Layer 9
	this.instance_1 = new lib.Symbol41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(317.8,490,1,1,0,0,0,126.5,79.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(239).to({_off:false},0).to({alpha:1},15).wait(1).to({alpha:0},14).to({_off:true},1).wait(165));

	// Layer 7
	this.instance_2 = new lib.Symbol27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(322,490.2,1,1,0,0,0,155.5,78);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(139).to({_off:false},0).to({alpha:1},15).wait(1).to({alpha:0},14).to({_off:true},1).wait(265));

	// b1.png
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(323.5,528.7,1,1,0,0,0,155.5,113);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol45("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(322.9,763.1,1.1,1.1,0,0,0,151,126);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({alpha:1},15).wait(1).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(364));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(265).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},14).wait(1).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1,alpha:0},14).to({_off:true},1).wait(140));

	// txtDown
	this.instance_5 = new lib.Symbol11("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(323.3,765.2,1.1,1.1,0,0,0,154,123);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol31("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(323.3,791.3,1.1,1.1,0,0,0,151,108.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol46("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(323.4,259.4,1.1,1.1,0,0,0,155,108.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Symbol59("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(322.7,768.8,1.1,1.1,0,0,0,161,92.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1,alpha:0},15).to({_off:true},1).wait(339));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(165).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1,alpha:0},14).to({_off:true},1).wait(240));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(289).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15).wait(1).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1,alpha:0},14).to({_off:true},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(364).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15).wait(1).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1,y:768.7,alpha:0},14).to({_off:true},1).wait(40));

	// txtUp
	this.instance_9 = new lib.Symbol18("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(322,259.6,1.1,1.1,0,0,0,152.5,129.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Symbol32("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(320.6,262.6,1.1,1.1,0,0,0,158,145);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.Symbol60("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(320.8,258.2,1.1,1.1,0,0,0,158,107.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1,alpha:0},14).to({_off:true},1).wait(315));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(189).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1,alpha:0},14).to({_off:true},1).wait(215));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(390).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},14).wait(1).to({startPosition:0},0).to({regX:158.2,regY:107.8,scaleX:1.1,scaleY:1.1,y:258.3,alpha:0},14).to({_off:true},1).wait(15));

	// blackMaskUp
	this.instance_12 = new lib.Symbol3("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(320,258.5,1,0.501,0,0,0,320,520);
	this.instance_12.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(65).to({startPosition:0},0).to({alpha:0},14).wait(1).to({startPosition:0},0).to({alpha:0.801},15).wait(10).to({startPosition:0},0).to({alpha:0.5},14).wait(36).to({alpha:0.488},0).to({alpha:0},14).wait(11).to({startPosition:0},0).to({alpha:0.801},14).wait(11).to({startPosition:0},0).to({alpha:0.5},14).wait(36).to({startPosition:0},0).to({alpha:0},14).wait(11).to({startPosition:0},0).to({alpha:0.801},14).wait(11).to({startPosition:0},0).to({alpha:0.5},14).wait(36).to({startPosition:0},0).to({alpha:0},14).wait(11).to({startPosition:0},0).to({alpha:0.801},14).wait(11).to({startPosition:0},0).to({alpha:0.5},14).wait(1).to({startPosition:0},0).to({alpha:1},13).wait(2));

	// blackMaskDown
	this.instance_13 = new lib.Symbol3("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(320,779.5,1,0.501,0,0,0,320,520);
	this.instance_13.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(65).to({startPosition:0},0).to({alpha:0.801},14).to({startPosition:0},11).to({alpha:0},14).wait(1).to({startPosition:0},0).to({alpha:0.5},14).wait(46).to({startPosition:0},0).to({regY:520.1,y:779.6,alpha:0.801},14).wait(1).to({regY:520,y:779.5},0).to({alpha:0},14).wait(11).to({startPosition:0},0).to({alpha:0.5},14).wait(46).to({startPosition:0},0).to({alpha:0.801},14).wait(1).to({startPosition:0},0).to({alpha:0},14).wait(11).to({startPosition:0},0).to({alpha:0.5},14).wait(45).to({startPosition:0},0).to({alpha:0.801},15).wait(1).to({startPosition:0},0).to({alpha:0},14).wait(11).to({startPosition:0},0).to({alpha:0.5},14).wait(1).to({startPosition:0},0).to({alpha:1},13).wait(2));

	// b23.jpg
	this.mc7_1 = new lib.Symbol48();
	this.mc7_1.parent = this;
	this.mc7_1.setTransform(320.6,1296.3,1,1,0,0,0,370,304.5);
	this.mc7_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc7_1).wait(320).to({_off:false},0).to({x:320.5,y:783.9},9,cjs.Ease.get(-1)).to({x:320.4,y:214.5},10,cjs.Ease.get(1)).wait(25).to({alpha:0},15).wait(1).to({alpha:1},14).wait(41));

	// b22.jpg
	this.mc7_2 = new lib.Symbol50();
	this.mc7_2.parent = this;
	this.mc7_2.setTransform(320.6,1296.3,1,1,0,0,0,370,304.5);
	this.mc7_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc7_2).wait(320).to({_off:false},0).to({x:320.5,y:783.9},9,cjs.Ease.get(-1)).to({x:320.4,y:214.5},10,cjs.Ease.get(1)).wait(96));

	// b25.jpg
	this.mc8_1 = new lib.Symbol52();
	this.mc8_1.parent = this;
	this.mc8_1.setTransform(306.6,1865.8,1,1,0,0,0,356,265);
	this.mc8_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc8_1).wait(320).to({_off:false},0).to({x:306.5,y:1353.4},9,cjs.Ease.get(-1)).to({x:306.4,y:784},10,cjs.Ease.get(1)).wait(51).to({alpha:0},14).wait(1).to({alpha:1},14).wait(16));

	// b24.jpg
	this.mc8_2 = new lib.Symbol54();
	this.mc8_2.parent = this;
	this.mc8_2.setTransform(306.6,1865.8,1,1,0,0,0,356,265);
	this.mc8_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc8_2).wait(320).to({_off:false},0).to({x:306.5,y:1353.4},9,cjs.Ease.get(-1)).to({x:306.4,y:784},10,cjs.Ease.get(1)).wait(96));

	// b16.jpg
	this.mc5_1 = new lib.Symbol34();
	this.mc5_1.parent = this;
	this.mc5_1.setTransform(320.6,1312,1,1,0,0,0,370,272);
	this.mc5_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc5_1).wait(220).to({_off:false},0).to({y:751.5},10,cjs.Ease.get(-1)).to({y:247},9,cjs.Ease.get(1)).wait(26).to({alpha:0},14).wait(1).to({alpha:1},14).wait(26).to({y:-227.6},9,cjs.Ease.get(-1)).to({y:-755},10,cjs.Ease.get(1)).to({_off:true},1).wait(95));

	// b15.jpg
	this.mc5_2 = new lib.Symbol36();
	this.mc5_2.parent = this;
	this.mc5_2.setTransform(320.6,1312,1,1,0,0,0,370,272);
	this.mc5_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc5_2).wait(220).to({_off:false},0).to({y:751.5},10,cjs.Ease.get(-1)).to({y:247},9,cjs.Ease.get(1)).wait(81).to({y:-227.6},9,cjs.Ease.get(-1)).to({y:-755},10,cjs.Ease.get(1)).to({_off:true},1).wait(95));

	// b18.jpg
	this.mc6_1 = new lib.Symbol38();
	this.mc6_1.parent = this;
	this.mc6_1.setTransform(320.6,1849,1,1,0,0,0,370,265);
	this.mc6_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc6_1).wait(220).to({_off:false},0).to({y:1288.5},10,cjs.Ease.get(-1)).to({y:784},9,cjs.Ease.get(1)).wait(50).to({alpha:0},15).wait(1).to({alpha:1},14).wait(1).to({y:309.4},9,cjs.Ease.get(-1)).to({y:-218},10,cjs.Ease.get(1)).to({_off:true},1).wait(95));

	// b17.jpg
	this.mc6_2 = new lib.Symbol40();
	this.mc6_2.parent = this;
	this.mc6_2.setTransform(320.6,1849,1,1,0,0,0,370,265);
	this.mc6_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc6_2).wait(220).to({_off:false},0).to({y:1288.5},10,cjs.Ease.get(-1)).to({y:784},9,cjs.Ease.get(1)).wait(81).to({y:309.4},9,cjs.Ease.get(-1)).to({y:-218},10,cjs.Ease.get(1)).to({_off:true},1).wait(95));

	// b9.jpg
	this.mc3_1 = new lib.Symbol20();
	this.mc3_1.parent = this;
	this.mc3_1.setTransform(320.6,1245.4,1,1,0,0,0,370,314.5);
	this.mc3_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc3_1).wait(120).to({_off:false},0).to({y:752.3},9,cjs.Ease.get(-1)).to({y:204.5},10,cjs.Ease.get(1)).wait(26).to({alpha:0},14).wait(1).to({alpha:1},14).wait(26).to({y:-349.1},10,cjs.Ease.get(-1)).to({y:-847.4},9,cjs.Ease.get(1)).to({_off:true},1).wait(195));

	// b8.jpg
	this.mc3_2 = new lib.Symbol22();
	this.mc3_2.parent = this;
	this.mc3_2.setTransform(320.6,1245.4,1,1,0,0,0,370,314.5);
	this.mc3_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc3_2).wait(120).to({_off:false},0).to({y:752.3},9,cjs.Ease.get(-1)).to({y:204.5},10,cjs.Ease.get(1)).wait(81).to({y:-349.1},10,cjs.Ease.get(-1)).to({y:-847.4},9,cjs.Ease.get(1)).to({_off:true},1).wait(195));

	// b11.jpg
	this.mc4_1 = new lib.Symbol24();
	this.mc4_1.parent = this;
	this.mc4_1.setTransform(320.6,1824.9,1,1,0,0,0,370,265);
	this.mc4_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc4_1).wait(120).to({_off:false},0).to({y:1331.8},9,cjs.Ease.get(-1)).to({y:784},10,cjs.Ease.get(1)).wait(50).to({alpha:0},15).wait(1).to({alpha:1},14).wait(1).to({y:230.4},10,cjs.Ease.get(-1)).to({y:-267.9},9,cjs.Ease.get(1)).to({_off:true},1).wait(195));

	// b10.jpg
	this.mc4_2 = new lib.Symbol26();
	this.mc4_2.parent = this;
	this.mc4_2.setTransform(320.6,1824.9,1,1,0,0,0,370,265);
	this.mc4_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc4_2).wait(120).to({_off:false},0).to({y:1331.8},9,cjs.Ease.get(-1)).to({y:784},10,cjs.Ease.get(1)).wait(81).to({y:230.4},10,cjs.Ease.get(-1)).to({y:-267.9},9,cjs.Ease.get(1)).to({_off:true},1).wait(195));

	// b3.jpg
	this.mc1_1 = new lib.Symbol12();
	this.mc1_1.parent = this;
	this.mc1_1.setTransform(320.6,256.5,1,1,0,0,0,370,262.5);

	this.timeline.addTween(cjs.Tween.get(this.mc1_1).wait(65).to({alpha:0},14).wait(1).to({alpha:1},15).wait(25).to({y:-241},9,cjs.Ease.get(-1)).to({y:-793.8},10,cjs.Ease.get(1)).to({_off:true},1).wait(295));

	// b2.jpg
	this.mc1_2 = new lib.Symbol14();
	this.mc1_2.parent = this;
	this.mc1_2.setTransform(320.6,256.5,1,1,0,0,0,370,262.5);

	this.timeline.addTween(cjs.Tween.get(this.mc1_2).wait(120).to({y:-241},9,cjs.Ease.get(-1)).to({y:-793.8},10,cjs.Ease.get(1)).to({_off:true},1).wait(295));

	// b5.jpg
	this.mc2_1 = new lib.Symbol15();
	this.mc2_1.parent = this;
	this.mc2_1.setTransform(320.6,784,1,1,0,0,0,370,265);

	this.timeline.addTween(cjs.Tween.get(this.mc2_1).wait(90).to({alpha:0},14).wait(1).to({alpha:1},14).wait(1).to({y:286.5},9,cjs.Ease.get(-1)).to({y:-266.3},10,cjs.Ease.get(1)).to({_off:true},1).wait(295));

	// b4.jpg
	this.mc2_2 = new lib.Symbol17();
	this.mc2_2.parent = this;
	this.mc2_2.setTransform(320.6,784,1,1,0,0,0,370,265);

	this.timeline.addTween(cjs.Tween.get(this.mc2_2).wait(120).to({y:286.5},9,cjs.Ease.get(-1)).to({y:-266.3},10,cjs.Ease.get(1)).to({_off:true},1).wait(295));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.4,-6,740,1055);


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


(lib.arrDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(30,39.2,1,1,180,0,0,10,5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABuBPQA4gFAogQQApgRAZgcIAMAKQgcAcgqASQgpASg4AIgAjaBbIAAibIhNAAIAAgPIC7AAIAAAPIheAAIAAAuIAGgKIBNAoIgKAPQg1gegUgLIAABpgAByAvIAagVIAUgWIANAJQggAfgRAPgADHA0IAAg3IAOAAIAAA3gAhdACIAAgQIC8AAIAAAQgABvgIIAAgPIAgAAIAAg1IAQAAIAAA1IAqAAIAAhHIAQAAIAAAcIBBAAIAAAOIhBAAIAAAdIBPAAIAAAPg");
	this.shape.setTransform(29.6,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrDown, new cjs.Rectangle(0,0,59.2,45.5), null);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		currentTemp = 0;
		motionTemp = 0;
	}
	this.frame_40 = function() {
		this.stop();
		
		var S = this;
		var i = 0;
		var yStart = 0;
		var yEnd = 0;
		var t1;
		var t2;
		var t3;
		var t4;
		var t5;
		var t6;
		var t7;
		var t8;
		var t9;
		var t10;
		var t11;
		var t12;
		
		
		motionTemp = 0;
		
		this.touchArea.addEventListener("mousedown", f1.bind(this));
		this.touchArea.addEventListener("pressup", f2.bind(this))
		
		function f1()
		{
			yStart= event.touches[0].pageY;
		}
		function f2()
		{
			yEnd= event.changedTouches[0].pageY;
			changeSC();
			//console.log(yEnd);
		}
		
		function changeSC()
		{
			if (motionTemp == 0){
				S.autoPlay.gotoAndStop(0);
				if (yStart>=yEnd){
					outUp();
					motionTemp = 1;
				}else {
					outDown();
					motionTemp = 1;
				}
			}
		}
		
		function outUp(){
			if (currentTemp <= 12){
				currentTemp += 1;
				S.mainLine.play();
			}
			console.log(currentTemp);
		}
		function outDown(){
			if (currentTemp >= 0){
				if (currentTemp == 0){
					motionTemp = 0;
					S.autoPlay.gotoAndPlay(30);
				}else if (currentTemp == 1){
					i = 79;
					t1=setInterval(prevFrame1,45);
					currentTemp -= 1;
				}else if (currentTemp == 2){
					i = 104;
					t2=setInterval(prevFrame2,45);
					currentTemp -= 1;
				}else if (currentTemp == 3){
					i = 154;
					t3=setInterval(prevFrame3,45);
					currentTemp -= 1;
				}else if (currentTemp == 4){
					i = 179;
					t4=setInterval(prevFrame4,45);
					currentTemp -= 1;
				}else if (currentTemp == 5){
					i = 204;
					t5=setInterval(prevFrame5,45);
					currentTemp -= 1;
				}else if (currentTemp == 6){
					i = 254;
					t6=setInterval(prevFrame6,45);
					currentTemp -= 1;
				}else if (currentTemp == 7){
					i = 279;
					t7=setInterval(prevFrame7,45);
					currentTemp -= 1;
				}else if (currentTemp == 8){
					i = 304;
					t8=setInterval(prevFrame8,45);
					currentTemp -= 1;
				}else if (currentTemp == 9){
					i = 354;
					t9=setInterval(prevFrame9,45);
					currentTemp -= 1;
				}else if (currentTemp == 10){
					i = 379;
					t10=setInterval(prevFrame10,45);
					currentTemp -= 1;
				}else if (currentTemp == 11){
					i = 404;
					t11=setInterval(prevFrame11,45);
					currentTemp -= 1;
				}else if (currentTemp == 12){
					i = 434;
					t12=setInterval(prevFrame12,45);
					currentTemp -= 1;
				}
			}
			console.log(currentTemp);
		}
		function prevFrame1(){
			if (i > 54){
				S.mainLine.mc1_1.stop();
				S.mainLine.mc1_2.stop();
				i=i-1;
				S.mainLine.gotoAndStop(i);
			}else {
				
				motionTemp = 0;
				S.autoPlay.gotoAndPlay(1);
				clearInterval(t1);
			}
		}
		function prevFrame2(){
			if (i > 79){
				S.mainLine.mc2_1.stop();
				S.mainLine.mc2_2.stop();
				i=i-1;
				S.mainLine.gotoAndStop(i);
			}else {
				
				motionTemp = 0;
				S.autoPlay.gotoAndPlay(1);
				clearInterval(t2);
			}
		}
		function prevFrame3(){
			if (i > 104){
				S.mainLine.mc3_1.stop();
				S.mainLine.mc3_2.stop();
				i=i-1;
				S.mainLine.gotoAndStop(i);
			}else {
				
				motionTemp = 0;
				S.autoPlay.gotoAndPlay(1);
				clearInterval(t3);
			}
		}function prevFrame4(){
			if (i > 154){
				S.mainLine.mc3_1.stop();
				S.mainLine.mc3_2.stop();
				i=i-1;
				S.mainLine.gotoAndStop(i);
			}else {
				
				motionTemp = 0;
				S.autoPlay.gotoAndPlay(1);
				clearInterval(t4);
			}
		}
		function prevFrame5(){
			if (i > 179){
				S.mainLine.mc4_1.stop();
				S.mainLine.mc4_2.stop();
				i=i-1;
				S.mainLine.gotoAndStop(i);
			}else {
				
				motionTemp = 0;
				S.autoPlay.gotoAndPlay(1);
				clearInterval(t5);
			}
		}
		function prevFrame6(){
			if (i > 204){
				S.mainLine.mc5_1.stop();
				S.mainLine.mc5_2.stop();
				i=i-1;
				S.mainLine.gotoAndStop(i);
			}else {
				
				motionTemp = 0;
				S.autoPlay.gotoAndPlay(1);
				clearInterval(t6);
			}
		}
		function prevFrame7(){
			if (i > 254){
				S.mainLine.mc5_1.stop();
				S.mainLine.mc5_2.stop();
				i=i-1;
				S.mainLine.gotoAndStop(i);
			}else {
				
				motionTemp = 0;
				S.autoPlay.gotoAndPlay(1);
				clearInterval(t7);
			}
		}
		function prevFrame8(){
			if (i > 279){
				S.mainLine.mc6_1.stop();
				S.mainLine.mc6_2.stop();
				i=i-1;
				S.mainLine.gotoAndStop(i);
			}else {
				
				motionTemp = 0;
				S.autoPlay.gotoAndPlay(1);
				clearInterval(t8);
			}
		}
		function prevFrame9(){
			if (i > 304){
				S.mainLine.mc7_1.stop();
				S.mainLine.mc7_2.stop();
				i=i-1;
				S.mainLine.gotoAndStop(i);
			}else {
				
				motionTemp = 0;
				S.autoPlay.gotoAndPlay(1);
				clearInterval(t9);
			}
		}
		function prevFrame10(){
			if (i > 354){
				S.mainLine.mc7_1.stop();
				S.mainLine.mc7_2.stop();
				i=i-1;
				S.mainLine.gotoAndStop(i);
			}else {
				
				motionTemp = 0;
				S.autoPlay.gotoAndPlay(1);
				clearInterval(t10);
			}
		}
		function prevFrame11(){
			if (i > 379){
				S.mainLine.mc8_1.stop();
				S.mainLine.mc8_2.stop();
				i=i-1;
				S.mainLine.gotoAndStop(i);
			}else {
				
				motionTemp = 0;
				S.autoPlay.gotoAndPlay(1);
				clearInterval(t11);
			}
		}
		function prevFrame12(){
			if (i > 404){
				S.mainLine.mc8_1.stop();
				S.mainLine.mc8_2.stop();
				i=i-1;
				S.mainLine.gotoAndStop(i);
			}else {
				
				motionTemp = 0;
				S.autoPlay.gotoAndPlay(1);
				clearInterval(t12);
			}
		}
	}
	this.frame_42 = function() {
		this.stop();
		
		this.parent.gotoAndStop(0);
		nextScene();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(2).call(this.frame_42).wait(58));

	// blackMask
	this.instance = new lib.blackMask("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},29).to({_off:true},1).wait(70));

	// touchArea
	this.touchArea = new lib.touchArea();
	this.touchArea.parent = this;
	this.touchArea.setTransform(320,520,1,1,0,0,0,320,520);
	this.touchArea._off = true;

	this.timeline.addTween(cjs.Tween.get(this.touchArea).wait(39).to({_off:false},0).wait(61));

	// autoPlay
	this.autoPlay = new lib.autoPlay();
	this.autoPlay.parent = this;
	this.autoPlay.setTransform(5,5,1,1,0,0,0,5,5);
	this.autoPlay._off = true;

	this.timeline.addTween(cjs.Tween.get(this.autoPlay).wait(39).to({_off:false},0).wait(61));

	// upDownArrow
	this.arrDown = new lib.arrDown();
	this.arrDown.parent = this;
	this.arrDown.setTransform(319.4,974.7,1,1,0,0,0,29.6,22.8);

	this.arrUp = new lib.arrUp();
	this.arrUp.parent = this;
	this.arrUp.setTransform(319.5,49.2,1,1,0,0,0,19.2,22.4);
	this.arrUp.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.arrUp},{t:this.arrDown}]},1).wait(99));

	// mainLine
	this.mainLine = new lib.mainLine();
	this.mainLine.parent = this;
	this.mainLine.setTransform(320.6,519,1.1,1.1,0,0,0,320.6,519);
	this.mainLine._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mainLine).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1},38,cjs.Ease.get(1)).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


// stage content:
(lib.s2 = function(mode,startPosition,loop) {
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

	// Layer 2
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
		{src:"images/b10.jpg", id:"b10"},
		{src:"images/b11.jpg", id:"b11"},
		{src:"images/b15.jpg", id:"b15"},
		{src:"images/b16.jpg", id:"b16"},
		{src:"images/b2.jpg", id:"b2"},
		{src:"images/b22.jpg", id:"b22"},
		{src:"images/b23.jpg", id:"b23"},
		{src:"images/b3.jpg", id:"b3"},
		{src:"images/b4.jpg", id:"b4"},
		{src:"images/b5.jpg", id:"b5"},
		{src:"images/ng10.png", id:"ng10"},
		{src:"images/ng11.png", id:"ng11"},
		{src:"images/ng12.jpg", id:"ng12"},
		{src:"images/ng13.jpg", id:"ng13"},
		{src:"images/ng14.png", id:"ng14"},
		{src:"images/ng15.png", id:"ng15"},
		{src:"images/ng16.png", id:"ng16"},
		{src:"images/ng17.png", id:"ng17"},
		{src:"images/ng18.jpg", id:"ng18"},
		{src:"images/ng19.jpg", id:"ng19"},
		{src:"images/ng20_2.png", id:"ng20_2"},
		{src:"images/ng21.png", id:"ng21"},
		{src:"images/ng22.png", id:"ng22"},
		{src:"images/ng23.png", id:"ng23"},
		{src:"images/ng24.jpg", id:"ng24"},
		{src:"images/ng25.jpg", id:"ng25"},
		{src:"images/ng8.png", id:"ng8"},
		{src:"images/ng9.png", id:"ng9"}
	],
	preloads: []
};




})(lib2 = lib2||{}, img2 = img2||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib2, img2, createjs, ss, AdobeAn;