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


(lib.dggs = function() {
	this.initialize(img.dggs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,391,110);


(lib.s_btn = function() {
	this.initialize(img.s_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,318);// helper functions:

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


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,164);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAKQgEgEAAgGQAAgFAEgFQAFgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape.setTransform(1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3,3);


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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhhBiIAAjDIDDAAIAADDg");
	this.shape.setTransform(9.8,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.5,19.5);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 7
	this.instance = new lib.Symbol7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.8,2.1,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(1));

	// Symbol 7
	this.instance_1 = new lib.Symbol7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.4,3.5,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(2));

	// Symbol 7
	this.instance_2 = new lib.Symbol7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.3,6.5,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(3));

	// Symbol 7
	this.instance_3 = new lib.Symbol7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(14.9,10.4,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(4));

	// Symbol 7
	this.instance_4 = new lib.Symbol7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(10.2,15.1,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(5));

	// Symbol 7
	this.instance_5 = new lib.Symbol7("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(6.4,20.5,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(6));

	// Symbol 7
	this.instance_6 = new lib.Symbol7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.7,26.5,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(33).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(7));

	// Symbol 7
	this.instance_7 = new lib.Symbol7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(2,32.9,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(8));

	// Symbol 7
	this.instance_8 = new lib.Symbol7("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1.5,39.6,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(31).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(9));

	// Symbol 7
	this.instance_9 = new lib.Symbol7("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(2.1,46.1,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(10));

	// Symbol 7
	this.instance_10 = new lib.Symbol7("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(3.8,52.5,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(11));

	// Symbol 7
	this.instance_11 = new lib.Symbol7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(6.7,58.4,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(28).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(12));

	// Symbol 7
	this.instance_12 = new lib.Symbol7("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(10.5,63.6,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(27).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(13));

	// Symbol 7
	this.instance_13 = new lib.Symbol7("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(15.2,68.3,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(26).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(14));

	// Symbol 7
	this.instance_14 = new lib.Symbol7("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(20.5,72,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(25).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(15));

	// Symbol 7
	this.instance_15 = new lib.Symbol7("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(26.4,74.7,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(24).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(16));

	// Symbol 7
	this.instance_16 = new lib.Symbol7("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(32.8,76.4,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(23).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(17));

	// Symbol 7
	this.instance_17 = new lib.Symbol7("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(39.3,76.9,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(22).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(18));

	// Symbol 7
	this.instance_18 = new lib.Symbol7("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(45.9,76.4,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(21).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(19));

	// Symbol 7
	this.instance_19 = new lib.Symbol7("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(52.3,74.7,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(20).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(20));

	// Symbol 7
	this.instance_20 = new lib.Symbol7("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(58.3,72,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(19).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(21));

	// Symbol 7
	this.instance_21 = new lib.Symbol7("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(63.5,68.3,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(18).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(22));

	// Symbol 7
	this.instance_22 = new lib.Symbol7("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(68.2,63.6,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(17).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(23));

	// Symbol 7
	this.instance_23 = new lib.Symbol7("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(71.9,58.3,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(16).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(24));

	// Symbol 7
	this.instance_24 = new lib.Symbol7("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(74.9,52.3,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(15).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(25));

	// Symbol 7
	this.instance_25 = new lib.Symbol7("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(76.5,46,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(14).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(26));

	// Symbol 7
	this.instance_26 = new lib.Symbol7("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(76.9,39.6,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(13).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(27));

	// Symbol 7
	this.instance_27 = new lib.Symbol7("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(76.5,32.9,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(12).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(28));

	// Symbol 7
	this.instance_28 = new lib.Symbol7("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(74.9,26.7,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(11).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(29));

	// Symbol 7
	this.instance_29 = new lib.Symbol7("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(72.3,20.5,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(10).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(30));

	// Symbol 7
	this.instance_30 = new lib.Symbol7("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(68.4,15.1,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(9).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(31));

	// Symbol 7
	this.instance_31 = new lib.Symbol7("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(63.7,10.4,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(8).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(32));

	// Symbol 7
	this.instance_32 = new lib.Symbol7("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(58.3,6.5,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(7).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(33));

	// Symbol 7
	this.instance_33 = new lib.Symbol7("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(52.3,3.7,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(6).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(34));

	// Symbol 7
	this.instance_34 = new lib.Symbol7("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(45.9,2.1,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(5).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(35));

	// Symbol 7
	this.instance_35 = new lib.Symbol7("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(39.3,1.5,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(4).to({startPosition:0},0).to({alpha:0},3).to({alpha:1},12).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.4,78.4);


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

	// Symbol 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(366.5,12.8,1,1,0,0,0,9.8,9.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(67).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(459,75.3,1,1,0,0,0,9.8,9.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({alpha:1},14).wait(65).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(2));

	// Symbol 1
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(559,136.4,1,1,0,0,0,9.8,9.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({alpha:1},14).wait(66).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(572,264.4,1,1,0,0,0,9.8,9.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({alpha:1},14).wait(60).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(4));

	// Symbol 1
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(443.5,499.4,1,1,0,0,0,9.8,9.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({alpha:1},14).wait(61).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(564,449.4,1,1,0,0,0,9.8,9.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({alpha:1},14).wait(61).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(1));

	// Symbol 1
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(572,511.5,1,1,0,0,0,9.8,9.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({_off:false},0).to({alpha:1},14).wait(57).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(496,674,1,1,0,0,0,9.8,9.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({alpha:1},14).wait(49).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1
	this.instance_8 = new lib.Symbol1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(466,816.6,1,1,0,0,0,9.8,9.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({alpha:1},14).wait(52).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1
	this.instance_9 = new lib.Symbol1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(78.9,816.6,1,1,0,0,0,9.8,9.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({alpha:1},14).wait(52).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(8));

	// Symbol 1
	this.instance_10 = new lib.Symbol1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(30.9,654.5,1,1,0,0,0,9.8,9.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({_off:false},0).to({alpha:1},14).wait(49).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(13));

	// Symbol 1
	this.instance_11 = new lib.Symbol1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(149.4,632,1,1,0,0,0,9.8,9.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(8).to({_off:false},0).to({alpha:1},14).wait(48).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(14));

	// Symbol 1
	this.instance_12 = new lib.Symbol1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(153.4,490,1,1,0,0,0,9.8,9.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(6).to({_off:false},0).to({alpha:1},14).wait(55).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(9));

	// Symbol 1
	this.instance_13 = new lib.Symbol1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(50.4,531,1,1,0,0,0,9.8,9.8);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(6).to({_off:false},0).to({alpha:1},14).wait(58).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(6));

	// Symbol 1
	this.instance_14 = new lib.Symbol1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(9.8,283.9,1,1,0,0,0,9.8,9.8);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).to({alpha:1},14).wait(65).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(2));

	// Symbol 1
	this.instance_15 = new lib.Symbol1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(72.9,94.8,1,1,0,0,0,9.8,9.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({_off:false},0).to({alpha:1},14).wait(64).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(3));

	// Symbol 1
	this.instance_16 = new lib.Symbol1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(72.9,9.8,1,1,0,0,0,9.8,9.8);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({alpha:1},14).wait(65).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.1,0,313.1,22.5);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(52,46,1,1,0,0,0,39.2,39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An1JiIAAn0IPrAAIAAH0gAjMhHQhchdAAiCQAAiCBchdQBchcCCAAQCCAABcBcQBdBdAACCQAACChdBdQhcBbiCAAQiCAAhchbg");
	mask.setTransform(50.2,75);

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.s_btn, null, new cjs.Matrix2D(0.853,0,0,0.853,-112.1,-210.1)).s().p("AnzJkIAAzHIPnAAIAATHg");
	this.shape.setTransform(50,61.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(0,6.8,100,115.7), null);


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
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(299.7,434.6,1,1,0,0,0,290.9,413.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.8,21.5,313.1,22.5);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var S=this;
		
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
	this.frame_13 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1));

	// items
	this.btn = new lib.btn();
	this.btn.parent = this;
	this.btn.setTransform(323,898.2,1,1,0,0,0,55,61.2);

	this.na = new cjs.Text("", "26px 'Arial'", "#602F08");
	this.na.name = "na";
	this.na.textAlign = "center";
	this.na.lineHeight = 28;
	this.na.lineWidth = 534;
	this.na.parent = this;
	this.na.setTransform(319,489.8);

	this.info2 = new cjs.Text("", "26px 'Arial'", "#602F08");
	this.info2.name = "info2";
	this.info2.textAlign = "center";
	this.info2.lineHeight = 28;
	this.info2.lineWidth = 534;
	this.info2.parent = this;
	this.info2.setTransform(324,362.2);

	this.info1 = new cjs.Text("", "26px 'Arial'", "#602F08");
	this.info1.name = "info1";
	this.info1.textAlign = "center";
	this.info1.lineHeight = 28;
	this.info1.lineWidth = 534;
	this.info1.parent = this;
	this.info1.setTransform(324,323.9);

	this.info0 = new cjs.Text("", "26px 'Arial'", "#602F08");
	this.info0.name = "info0";
	this.info0.textAlign = "center";
	this.info0.lineHeight = 28;
	this.info0.lineWidth = 534;
	this.info0.parent = this;
	this.info0.setTransform(324,285.6);

	this.instance = new lib.dggs();
	this.instance.parent = this;
	this.instance.setTransform(122,537.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.info0},{t:this.info1},{t:this.info2},{t:this.na},{t:this.btn}]}).wait(14));

	// logTip
	this.err = new cjs.Text("", "22px 'Arial'", "#602F08");
	this.err.name = "err";
	this.err.textAlign = "center";
	this.err.lineHeight = 24;
	this.err.lineWidth = 567;
	this.err.parent = this;
	this.err.setTransform(324.4,422);

	this.timeline.addTween(cjs.Tween.get(this.err).wait(14));

	// Layer 21    subBtn
	this.btn_1 = new lib.Symbol15();
	this.btn_1.parent = this;
	this.btn_1.setTransform(318.1,588.2,1,1,0,0,0,82,82);
	this.btn_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btn_1).to({alpha:1},13).wait(1));

	// blockEff
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(320.5,494.9,1,1,0,0,0,295.2,444.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));

	// Layer 1
	this.instance_2 = new lib.c1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-110.8,640,1154.9);


// stage content:
(lib.s1 = function(mode,startPosition,loop) {
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
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"i/c1.jpg", id:"c1"},
		{src:"i/dggs.png", id:"dggs"},
		{src:"i/s_btn.png", id:"s_btn"}
	],
	preloads: []
};




})(lib1 = lib1||{}, img1 = img1||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib1, img1, createjs, ss, AdobeAn;