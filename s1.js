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



(lib.a1 = function() {
	this.initialize(img.a1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,20);


(lib.a10 = function() {
	this.initialize(img.a10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,47);


(lib.a2 = function() {
	this.initialize(img.a2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.a3 = function() {
	this.initialize(img.a3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.a4 = function() {
	this.initialize(img.a4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.a9 = function() {
	this.initialize(img.a9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,178,53);


(lib.cirLight_00001 = function() {
	this.initialize(img.cirLight_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00002 = function() {
	this.initialize(img.cirLight_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00003 = function() {
	this.initialize(img.cirLight_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00004 = function() {
	this.initialize(img.cirLight_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00005 = function() {
	this.initialize(img.cirLight_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00006 = function() {
	this.initialize(img.cirLight_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00007 = function() {
	this.initialize(img.cirLight_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00008 = function() {
	this.initialize(img.cirLight_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00009 = function() {
	this.initialize(img.cirLight_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00010 = function() {
	this.initialize(img.cirLight_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00011 = function() {
	this.initialize(img.cirLight_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00012 = function() {
	this.initialize(img.cirLight_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00013 = function() {
	this.initialize(img.cirLight_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00014 = function() {
	this.initialize(img.cirLight_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00015 = function() {
	this.initialize(img.cirLight_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00016 = function() {
	this.initialize(img.cirLight_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00017 = function() {
	this.initialize(img.cirLight_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00018 = function() {
	this.initialize(img.cirLight_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00019 = function() {
	this.initialize(img.cirLight_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00020 = function() {
	this.initialize(img.cirLight_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00021 = function() {
	this.initialize(img.cirLight_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00022 = function() {
	this.initialize(img.cirLight_00022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00023 = function() {
	this.initialize(img.cirLight_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00024 = function() {
	this.initialize(img.cirLight_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00025 = function() {
	this.initialize(img.cirLight_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00026 = function() {
	this.initialize(img.cirLight_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00027 = function() {
	this.initialize(img.cirLight_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00028 = function() {
	this.initialize(img.cirLight_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00029 = function() {
	this.initialize(img.cirLight_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00030 = function() {
	this.initialize(img.cirLight_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00031 = function() {
	this.initialize(img.cirLight_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00032 = function() {
	this.initialize(img.cirLight_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00033 = function() {
	this.initialize(img.cirLight_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00034 = function() {
	this.initialize(img.cirLight_00034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00035 = function() {
	this.initialize(img.cirLight_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00036 = function() {
	this.initialize(img.cirLight_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00037 = function() {
	this.initialize(img.cirLight_00037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00038 = function() {
	this.initialize(img.cirLight_00038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00039 = function() {
	this.initialize(img.cirLight_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00040 = function() {
	this.initialize(img.cirLight_00040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00041 = function() {
	this.initialize(img.cirLight_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00042 = function() {
	this.initialize(img.cirLight_00042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00043 = function() {
	this.initialize(img.cirLight_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00044 = function() {
	this.initialize(img.cirLight_00044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00045 = function() {
	this.initialize(img.cirLight_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00046 = function() {
	this.initialize(img.cirLight_00046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00047 = function() {
	this.initialize(img.cirLight_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00048 = function() {
	this.initialize(img.cirLight_00048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.cirLight_00049 = function() {
	this.initialize(img.cirLight_00049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,640);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,162);


(lib.ng1 = function() {
	this.initialize(img.ng1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,33);


(lib.ng2 = function() {
	this.initialize(img.ng2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,386,33);


(lib.ng3 = function() {
	this.initialize(img.ng3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,33);


(lib.ng4 = function() {
	this.initialize(img.ng4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,32);


(lib.ng5 = function() {
	this.initialize(img.ng5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,33);// helper functions:

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


(lib.Symbol11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.ng5();
	this.instance.parent = this;
	this.instance.setTransform(70,49,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70,49,222.9,37);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.ng4();
	this.instance.parent = this;
	this.instance.setTransform(108,-1,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108,-1,146.7,35.9);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng3();
	this.instance.parent = this;
	this.instance.setTransform(28,-7,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28,-7,115.4,37);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng2();
	this.instance.parent = this;
	this.instance.setTransform(-21,-15,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-15,424.6,36.3);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.ng1();
	this.instance.parent = this;
	this.instance.setTransform(-17,-12,1.12,1.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-12,312.5,37);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(152,108,46,0)","#FFDDAC","rgba(252,218,168,0.8)","rgba(152,119,46,0)"],[0,0.357,0.494,1],-193.5,0,193.6,0).s().p("A+PXXMAAAguuMA8eAAAMAAAAuug");
	this.shape.setTransform(193.6,149.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387.1,299.1);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.78,1],0,0,0,0,0,296).s().p("EggaAgbQtbtcAAy/QAAy+NbtcQNctbS+AAQS/AANcNbQNbNcAAS+QAAS/tbNcQtcNby/AAQy+AAtctbg");
	this.shape.setTransform(293.4,293.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,586.8,586.8);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.mcTxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0946A").s().p("AqdBmQATgIAMgIQAMgIAFgJQAHgIADgOQAEgOAAgVIAAglIARAAIAAAlQgBAWgDAPIA+AwIgNAQIg2gvQgEANgPAMQgPANgYAMgAJPBpIgFgDQARgLAJgNQAJgMACgOIguAAIAAgQIAvAAIABgiIglAAIAAgOIAuAAIgTgYIAKgHIgyAAIAAAgQAAAzgGAYQgCALgHANQgGAMgKANIgPgLQAJgMAGgMQAGgLACgLQAGgXAAgrIAAhbIDCAAIAAA6IgsAAIALAHIgTAYIAyAAIAAAOIgnAAIAAAiIA1AAIAAAQIg1AAIAAA9IgSAAIAAg9Ig1AAQgBASgKAPQgKARgTANgAKCAkIAzAAIAAgiIgzAAgAKMgUIgLAIIAoAAIAVgfIhHAAgAI/g7ICfAAIAAgaIifAAgAFqBkQAYgUANghQAMggABgrIAAgVIgkAAIAAgQIAlAAIAAgxIAUAAIgBAbIAAAWIA+AAIAAAJIgEB7QgBAVgJAJQgJAKgRAAIgbAAIgEgUIAdACQAJAAAFgGQAFgFAAgLQADgtABhHIgsAAIAAAVQgBAtgNAkQgOAkgbAaQgFgIgJgHgAOGByIAAg1IgvAAIAAAnIgQAAIAAgwIgkAUIgKgOIAfgPQAOgIAMgIIgxAAIAAgOIBDAAIAEgEQAHgFADgEIg3AAIAAhEICnAAIAABEIhdAAQgEAFgJAIICEAAIAAAOIg3AAQANAIAPAHQAQAHAUAGIgLAQIgigRIAAAYQAAAKgFAFQgGAFgKAAIgbAAIgBgKIgBgDIAYABQAGAAACgDQADgCAAgGIAAgOIg0AAIAAA1gAPNAvQgPgJgNgLIgcAAIAAAUIA4AAIAAAAgANPAvIA3AAIAAgUIgcAAQgNALgOAJgANMgNICGAAIAAgPIiGAAgANMgoICGAAIAAgQIiGAAgAhiByIAAiBIg3AAIAAgSIA3AAIAAhRIAUAAIAABRIA4AAIAAASIg4AAIAACBgAjgBhQAFgFACgFQACgFAAgFIAAgzIgoAAIAAgRIAoAAIAAgdIgSAAIAAgMIgLASIgGgJIgHgHQAMgSAKgVQAJgVAIgXIAUADIgMAeIA7AAIAAASIhDAAIgMAYIBCAAIAAASIggAAIAAAdIArAAIAAARIgrAAIAAA3IAogYQABAMADAHIguAaQgLAIgCADgAsBBmQAGgMAEgNIAFgaQACgNAAgWIABh8IAQAAIgBCCQgBAYgCANQgBAOgFANQgDAOgGANgAuyBwIAAh0ICBAAIAABYQABAbgegBIggAAIgDgSIAgACQAIAAADgDQAEgCAAgGIAAgMIheAAIAAApgAugA5IBeAAIAAgRIheAAgAugAaIBeAAIAAgRIheAAgABvBtQgGgCgGgFQgJgHgHgJQgGgJgFgLQgfAXgRAJIgOgNQAggSAXgUQgFgOgCgUQgEgSgBgYIgkAGIgDgRIAmgHIgDhCIATAAQAAAhACAfIBMgOIACAQIhOAOQABAVADAQQACARAEAMQAMgMALgOQAMgOAKgQIAQAJQgKAPgOARQgNARgRASQAGAPAHAJQAHAJAIAEQAHAEAEgCQAEgBABgGIAFgkIATAGIgIAlQgDAKgGAFQgFAEgJAAQgGAAgHgCgACnBuIgEgTIAfABQAJAAAEgEQAEgEAAgIIAAi9IASAAIAADAQAAAQgHAHQgHAIgQAAgAmABZQAIABAeAAQAKABAFgEQAEgEAAgKIAAh3IhUAAIAAgRIBUAAIAAg0IASAAIAAA0IAhAAIAAARIghAAIAAB7QABARgIAIQgIAHgSAAIglABgAvwBaQAFgEACgFQACgEAAgGIAAhYIgdAAIAAgQIAtAAIAABrIAcgSQAAANACAHIgYAOQgMAKgFAHgAquBnIAAjTIAQAAIAADTgAn0BiIAAi+IBSAAIAAC9IgTAAIAAgTIgrAAIAAAUgAngA9IArAAIAAg9IgrAAgAnggQIArAAIAAg7IgrAAgArPBcIAAjBIAQAAIAADBgAEOBCQAFgDAEgFQAFgFACgHQAJgSAQgnIgpAAIAAgRIBxAAIAAARIg1AAQgJAXgJATIgRAjIA6gFIgQgoIAPgHIAbA5QgDgCAEAIIgSAIIgDgJIhQAKgAoyA9IAAhlIhIAAIAABlIgRAAIAAh1IAkAAIAIgdIg0AAIAAgQIB8AAIAAAQIg2AAIgIAdIA0AAIAAB1gAChA0IAAiOIATAAIAACOgAmRgPIARgIIAcA2QgJACgKAHgAvHgSIAAgPIBNAAIAAgQIg+AAIAAgPIA+AAIAAgQIhFAAIAAgOIBFAAIAAgVIARAAIAAAVIBIAAIAAAOIhIAAIAAAQIBCAAIAAAPIhCAAIAAAQIBMAAIAAAPgAv3hgIAMgLQAVAUANAPIgOANQgNgRgTgUgABThfIALgMQATAOALALIgLAOgAOphIIAAgLIg0AAIAAALIgRAAIAAgLIhFAAIAAgOIBFAAIAAgQIARAAIAAAQIA0AAIAAgQIAQAAIAAAQIBFAAIAAAOIhFAAIAAALgAEZhNIAAgRIBdAAIAAARg");
	this.shape.setTransform(102.9,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0946A").s().p("An9BjQAigDAPgMQAPgLgCgUIAAgQIBkAAIAAAtQgBAHAEADQAEADAHAAIASAAQAHAAAFgDQAEgCAAgGQADgIABgTIASAGIgFAZQgBANgIAGQgHAGgOgBIgYAAQgeACACgfIAAgfIhBAAQACAagSARQgSAQgmAFgAJJB0IAAgwIgyAFIgBgRIAzgFIAAgiIguAAIAAgPQAJgUANgrIgZAAIAAgQIAdAAIACgGQAFgOADgRIASAFIgJAgIAzAAIAAAQIg5AAIgVA+IAcAAIAAgxIAQAAIAAAxIAfAAIAAAQIgfAAIAAAgIAhgEIAAARIghADIAAAzgAj/BjQAmgLASgYQASgYgBgmIhFAAIAAgQIBpAAIAAhjIASAAIAABjIBqAAIAAAQIhNAAIAABLQAAAIAEAEQAEAEAIAAIAZAAQAPABACgMIABgLIABgWIAUAHQgDAdgCAFQgDAKgIAFQgIAFgPAAIgcAAQgQgBgIgHQgIgHAAgPIAAhOIguAAQACAsgUAcQgTAcgqAOgAsABoQAUgfAKgUIASAJIghA0gACbBuIgxAAQgQABgIgIQgJgHABgQIAAggIATAAIAAAfQgCAHAFAEQAFAEAKgBIAnAAQAJABAFgDQAFgDABgGIAFgZIASAGIgHAaQgCALgIAFQgIAFgLAAIgCAAgApKA+IARgJIARAcIANATIgRAKgAq8A9IAQgHIASAyIgSAGgALLBsIggAAQgRAAgIgHQgJgIABgQIAAhiIARAAIAAAxQAQgIAPgLQAPgKAPgOIAMANQgRAOgSANQgSANgUAKIAAAaQAAAJAFAFQAFAFALgCIAZAAQAJACAFgFQAGgDABgJQADgLABgXIATAEIgFAlQgDANgIAGQgJAGgPAAIgCAAgAGLBrQgxgCgggeQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBABAAAAIgGAFQgPANgIAMIgMgRQAFgEAKgKIAQgOQAHgGAIACQAsgbAigbQAjgaAagbIilAAIAAgRIC/AAIAAARQgfAhglAcQglAegsAaQALALAQAGQAQAFAXABQAVABAbAAIA8gBIgFATgAqDA8IAQgGIAUAuIgRAIgAARBgIAPgZIAKgYIAQAHQgHARgGAMQgGANgHAJgADKA+IANgKIAfAmIgQALQgNgTgPgUgABwAtIAMgKIAcAhIgPALQgMgTgNgPgAAZAwIgKgKQAZgbAAg4IAAgmIB0AAIgBgcIAPAAIADAcIAhAAIgQgYIANgJIASAYIgLAJIAgAAIAAAOIhEAAQACAUADAQQADAPAFAKQAHgIAHgMIALgaIAQAHQgIASgIANQgJAOgIAJQAEAGAFAGQAHAGAEAAQAFAAADgHIAIgcIARAGQgFAQgGARQgIAOgLACQgKABgOgLIgKgOIgcAYQgDgFgKgIQATgOANgLQgHgMgDgUQgFgSgCgaIhmAAIAAAYQABAegHAYQgHAYgPAUgAkxAqIAAgWIiyAAIAAAWIgSAAIAAglIDVAAIAAAlgArjAqIAAhQIBLAAIAAhMIATAAIAAAgIBoAAIAAAQIhoAAIAAAcIBTAAIAABQgArQAZICLAAIAAgtIiLAAgABIAdIAAgyIBHAAIAAAygABXAPIAoAAIAAgXIgoAAgAnVgKIAAgwICUAAIAAAwgAnFgaIBzAAIAAgSIhzAAgAJpgdQAYgRATgUQARgUALgbIATAEIgGAKQAMAWASAQQARARAVAMQgGAFgGAKQgVgNgRgRQgQgRgLgTQgJARgQASQgQAQgUARgAhngoIAagbQAMgOAJgNIASANIgyA1gAjqhSIAOgMQAfAjAPARIgRANQgOgUgdghgABBgmIAAgOIBUAAIAAAOgAFvhpIASgJIAWAiIgTAKgAn4hKIAAgQIBmAAIgHgUIASgFQAFAMADANIBjAAIAAAQg");
	this.shape_1.setTransform(102.6,46);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.8,57.6);


(lib.mcNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a9();
	this.instance.parent = this;
	this.instance.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,50,178,53);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,202,162);


(lib.dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLALQgEgEgBgHQABgGAEgFQAFgEAGgBQAHABAEAEQAFAFABAGQgBAHgFAEQgEAFgHABQgGgBgFgFg");
	this.shape.setTransform(1.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.3,3.3);


(lib.btn18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AhfBYIAAiuIC/AAIAACug");
	var mask_graphics_2 = new cjs.Graphics().p("AhfBYIAAiuIC/AAIAACug");
	var mask_graphics_3 = new cjs.Graphics().p("AhfBYIAAiuIC/AAIAACug");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:-41.1,y:8.4}).wait(1).to({graphics:mask_graphics_2,x:-32.6,y:8.4}).wait(1).to({graphics:mask_graphics_3,x:-24.1,y:8.4}).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPAPIAOgMIAoAnQAshMAsgeIARANQhBA2gnA+QgagdgdgVg");
	this.shape.setTransform(-23.1,8.4);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,0,0,3).p("AhFhFICLAAIAACLIiLAAg");
	this.shape_1.setTransform(-25.4,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.098)").s().p("AhFBGIAAiLICLAAIAACLg");
	this.shape_2.setTransform(-25.4,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(4));

	// Layer 1
	this.instance = new lib.a1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.008)").s().p("A6ZDXIAAmtMA0zAAAIAAGtg");
	this.shape_3.setTransform(125.1,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-11,338,43);


(lib.blackMask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/BRQMAAAiifMBj/AAAMAAACifg");
	this.shape.setTransform(320,520);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah2hAIA5AAIA/BEIBAhEIAzAAIACACIh2B/g");
	this.shape.setTransform(11.9,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,13.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.arrow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(28.9,1.7,0.581,0.581,-90,0,0,11.8,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-73.5,x:36.3,y:3.1},0).wait(1).to({regX:11.9,regY:9.1,rotation:-58.2,x:42.5,y:6.6},0).wait(1).to({regX:11.7,regY:9,scaleX:0.58,scaleY:0.58,rotation:-44.1,x:47.2,y:11.1},0).wait(1).to({regX:11.8,regY:8.8,scaleX:0.58,scaleY:0.58,rotation:-31.1,x:50.2,y:16.1},0).wait(1).to({regY:8.9,rotation:-19.5,x:52.1,y:21.2},0).wait(1).to({regY:9,rotation:-9,x:52.6,y:26.1},0).wait(1).to({rotation:0,x:52.4,y:30.4},0).wait(1).to({rotation:7.8,x:51.8,y:34},0).wait(1).to({regY:9.1,rotation:14.6,x:50.7,y:36.9},0).wait(1).to({regY:8.8,rotation:20.1,x:49.6,y:39.2},0).wait(1).to({rotation:24.3,x:48.6,y:40.9},0).wait(1).to({regY:9,rotation:27.6,x:47.7,y:42.1},0).wait(1).to({regY:8.9,rotation:29.3,x:47.3,y:42.8},0).wait(1).to({regY:9,rotation:30,x:47.1,y:43},0).wait(1).to({regX:11.9,regY:9.1,rotation:26.1,x:48.2,y:41.5},0).wait(1).to({regX:11.8,regY:9,rotation:22.5,x:49.2,y:40},0).wait(1).to({rotation:19.1,x:50,y:38.6},0).wait(1).to({rotation:16,x:50.6,y:37.2},0).wait(1).to({regX:11.9,regY:8.8,rotation:13.3,x:51.2,y:35.9},0).wait(1).to({regX:11.8,regY:9,rotation:10.8,x:51.5,y:34.8},0).wait(1).to({rotation:8.5,x:51.8,y:33.7},0).wait(1).to({rotation:6.5,x:51.9,y:32.8},0).wait(1).to({regX:11.9,rotation:4.8,x:52.2,y:31.9},0).wait(1).to({regX:11.8,rotation:3.3,x:52.3,y:31.2},0).wait(1).to({regY:9.1,rotation:2,x:52.4,y:30.7},0).wait(1).to({rotation:1.1,y:30.2},0).wait(1).to({regY:9,rotation:0.5,y:29.8},0).wait(1).to({rotation:0,x:52.5,y:29.6},0).wait(1).to({regY:8.8,x:52.4,y:29.5},0).wait(35).to({startPosition:0},0).wait(1).to({regX:11.9,regY:8.9,rotation:-0.3,x:52.5,y:29.3},0).wait(1).to({regY:8.8,rotation:-1.5,x:52.6,y:28.8},0).wait(1).to({regX:11.8,regY:8.9,rotation:-3.5,y:27.9},0).wait(1).to({regX:11.9,regY:8.8,rotation:-6.3,y:26.6},0).wait(1).to({regX:12,rotation:-9.8,y:25},0).wait(1).to({rotation:-14.3,x:52.3,y:23},0).wait(1).to({regX:11.8,rotation:-19.5,x:51.8,y:20.7},0).wait(1).to({rotation:-25.6,x:51.1,y:18.1},0).wait(1).to({rotation:-32.3,x:49.8,y:15.3},0).wait(1).to({regY:8.9,scaleX:0.58,scaleY:0.58,rotation:-39.9,x:48,y:12.3},0).wait(1).to({regY:8.8,rotation:-48.4,x:45.5,y:9.4},0).wait(1).to({regY:8.9,scaleX:0.58,scaleY:0.58,rotation:-57.7,x:42.4,y:6.6},0).wait(1).to({regY:8.8,rotation:-67.7,x:38.6,y:4.1},0).wait(1).to({rotation:-78.5,x:34,y:2.3},0).wait(1).to({regY:9,rotation:-90,x:28.9,y:1.7},0).wait(1));

	// dot
	this.instance_1 = new lib.dot("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(51.6,34.3,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({_off:true},8).wait(62));

	// dot
	this.instance_2 = new lib.dot("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.6,28.5,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({_off:true},15).wait(57));

	// dot
	this.instance_3 = new lib.dot("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(52.2,22.5,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({_off:true},63).wait(11));

	// dot
	this.instance_4 = new lib.dot("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(50.5,16.8,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({_off:true},67).wait(8));

	// dot
	this.instance_5 = new lib.dot("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(47.4,11.7,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({_off:true},70).wait(6));

	// dot
	this.instance_6 = new lib.dot("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(43.4,7.5,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({_off:true},72).wait(5));

	// dot
	this.instance_7 = new lib.dot("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(38.6,4.3,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({_off:true},75).wait(3));

	// dot
	this.instance_8 = new lib.dot("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(33,2.3,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({_off:true},76).wait(2));

	// dot
	this.instance_9 = new lib.dot("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(27.2,1.6,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({_off:true},78).wait(1));

	// Layer 1
	this.instance_10 = new lib.dot("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(35.4,51.2,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_10.alpha = 0.102;

	this.instance_11 = new lib.dot("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(29.6,52.5,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_11.alpha = 0.199;

	this.instance_12 = new lib.dot("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(23.8,52.5,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_12.alpha = 0.301;

	this.instance_13 = new lib.dot("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(18,51.1,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_13.alpha = 0.398;

	this.instance_14 = new lib.dot("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(12.7,48.3,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_14.alpha = 0.5;

	this.instance_15 = new lib.dot("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(8.4,44.5,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_15.alpha = 0.602;

	this.instance_16 = new lib.dot("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(4.9,39.7,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_16.alpha = 0.699;

	this.instance_17 = new lib.dot("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(2.5,34.3,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_17.alpha = 0.801;

	this.instance_18 = new lib.dot("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(1.6,28.5,0.909,0.909,0,0,0,1.7,1.7);
	this.instance_18.alpha = 0.898;

	this.instance_19 = new lib.dot("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(1.9,22.4,0.909,0.909,0,0,0,1.7,1.7);

	this.instance_20 = new lib.dot("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(3.5,16.8,0.909,0.909,0,0,0,1.7,1.7);

	this.instance_21 = new lib.dot("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(6.6,11.6,0.909,0.909,0,0,0,1.7,1.7);

	this.instance_22 = new lib.dot("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(10.7,7.4,0.909,0.909,0,0,0,1.7,1.7);

	this.instance_23 = new lib.dot("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(15.7,4.1,0.909,0.909,0,0,0,1.7,1.7);

	this.instance_24 = new lib.dot("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(21.2,2.1,0.909,0.909,0,0,0,1.7,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.3,36.8,59.3);


(lib.popWin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.a10();
	this.instance.parent = this;
	this.instance.setTransform(139.5,506.3,0.858,0.858);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.dot("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(484.8,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_2 = new lib.dot("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(475,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_3 = new lib.dot("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(445.8,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_4 = new lib.dot("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(436,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_5 = new lib.dot("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(416.5,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_6 = new lib.dot("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(465.3,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_7 = new lib.dot("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(455.5,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_8 = new lib.dot("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(426.3,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_9 = new lib.dot("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(406.8,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_10 = new lib.dot("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(397,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_11 = new lib.dot("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(387.3,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_12 = new lib.dot("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(377.5,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_13 = new lib.dot("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(367.8,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_14 = new lib.dot("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(358,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_15 = new lib.dot("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(348.3,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_16 = new lib.dot("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(338.5,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_17 = new lib.dot("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(328.8,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_18 = new lib.dot("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(319,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_19 = new lib.dot("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(309.3,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_20 = new lib.dot("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(299.5,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_21 = new lib.dot("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(289.8,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_22 = new lib.dot("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(280,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_23 = new lib.dot("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(270.3,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_24 = new lib.dot("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(260.5,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_25 = new lib.dot("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(250.8,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_26 = new lib.dot("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(241,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_27 = new lib.dot("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(231.3,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_28 = new lib.dot("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(221.5,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_29 = new lib.dot("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(211.8,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_30 = new lib.dot("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(202,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_31 = new lib.dot("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(192.3,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_32 = new lib.dot("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(182.5,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_33 = new lib.dot("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(172.8,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_34 = new lib.dot("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(163,544.5,1,1,0,0,0,1.7,1.7);

	this.instance_35 = new lib.dot("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(153.3,544.5,1,1,0,0,0,1.7,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("Egx/BRQMAAAiifMBj/AAAMAAACifg");
	this.shape.setTransform(320,520);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.popWin, new cjs.Rectangle(0,0,640,1040), null);


(lib.mcCir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_100 = function() {
		this.stop();
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100).call(this.frame_100).wait(1));

	// Layer 5
	this.instance = new lib.Symbol5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(319.6,540.6,1,1,0,0,0,293.4,293.4);
	this.instance.alpha = 0.289;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(100));

	// t4
	this.instance_1 = new lib.Symbol11copy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(320.6,549.7,1,1,0,0,0,182,60.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({_off:false},0).to({y:539.7,alpha:1},13,cjs.Ease.get(1)).wait(11));

	// t4
	this.instance_2 = new lib.Symbol11("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(320.6,549.7,1,1,0,0,0,182,60.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(74).to({_off:false},0).to({y:539.7,alpha:1},10,cjs.Ease.get(1)).wait(17));

	// t3
	this.instance_3 = new lib.Symbol10("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(320.6,549.7,1,1,0,0,0,86,25);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50).to({_off:false},0).to({y:539.7,alpha:1},4,cjs.Ease.get(1)).to({_off:true},20).wait(27));

	// t2
	this.instance_4 = new lib.Symbol9("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(320.6,549.7,1,1,0,0,0,193,16.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({y:539.7,alpha:1},4,cjs.Ease.get(1)).to({_off:true},21).wait(51));

	// t1
	this.instance_5 = new lib.Symbol8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(320.6,546.7,1,1,0,0,0,139.5,16.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({y:536.7,alpha:1},4,cjs.Ease.get(1)).to({_off:true},20).wait(76));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_53 = new cjs.Graphics().p("EAUwA/gIAAqIIGIAAIAAKIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_graphics_53,x:172,y:406.4}).wait(46).to({graphics:null,x:0,y:0}).wait(2));

	// Layer 2
	this.instance_6 = new lib.Symbol4("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(320,520,1,1,0,0,0,320,520);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(53).to({_off:false},0).wait(48));

	// Layer 3
	this.instance_7 = new lib.cirLight_00001();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,218);

	this.instance_8 = new lib.cirLight_00002();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,218);

	this.instance_9 = new lib.cirLight_00003();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,218);

	this.instance_10 = new lib.cirLight_00004();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,218);

	this.instance_11 = new lib.cirLight_00005();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,218);

	this.instance_12 = new lib.cirLight_00006();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,218);

	this.instance_13 = new lib.cirLight_00007();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,218);

	this.instance_14 = new lib.cirLight_00008();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,218);

	this.instance_15 = new lib.cirLight_00009();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,218);

	this.instance_16 = new lib.cirLight_00010();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,218);

	this.instance_17 = new lib.cirLight_00011();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,218);

	this.instance_18 = new lib.cirLight_00012();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0,218);

	this.instance_19 = new lib.cirLight_00013();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0,218);

	this.instance_20 = new lib.cirLight_00014();
	this.instance_20.parent = this;
	this.instance_20.setTransform(0,218);

	this.instance_21 = new lib.cirLight_00015();
	this.instance_21.parent = this;
	this.instance_21.setTransform(0,218);

	this.instance_22 = new lib.cirLight_00016();
	this.instance_22.parent = this;
	this.instance_22.setTransform(0,218);

	this.instance_23 = new lib.cirLight_00017();
	this.instance_23.parent = this;
	this.instance_23.setTransform(0,218);

	this.instance_24 = new lib.cirLight_00018();
	this.instance_24.parent = this;
	this.instance_24.setTransform(0,218);

	this.instance_25 = new lib.cirLight_00019();
	this.instance_25.parent = this;
	this.instance_25.setTransform(0,218);

	this.instance_26 = new lib.cirLight_00020();
	this.instance_26.parent = this;
	this.instance_26.setTransform(0,218);

	this.instance_27 = new lib.cirLight_00021();
	this.instance_27.parent = this;
	this.instance_27.setTransform(0,218);

	this.instance_28 = new lib.cirLight_00022();
	this.instance_28.parent = this;
	this.instance_28.setTransform(0,218);

	this.instance_29 = new lib.cirLight_00023();
	this.instance_29.parent = this;
	this.instance_29.setTransform(0,218);

	this.instance_30 = new lib.cirLight_00024();
	this.instance_30.parent = this;
	this.instance_30.setTransform(0,218);

	this.instance_31 = new lib.cirLight_00025();
	this.instance_31.parent = this;
	this.instance_31.setTransform(0,218);

	this.instance_32 = new lib.cirLight_00026();
	this.instance_32.parent = this;
	this.instance_32.setTransform(0,218);

	this.instance_33 = new lib.cirLight_00027();
	this.instance_33.parent = this;
	this.instance_33.setTransform(0,218);

	this.instance_34 = new lib.cirLight_00028();
	this.instance_34.parent = this;
	this.instance_34.setTransform(0,218);

	this.instance_35 = new lib.cirLight_00029();
	this.instance_35.parent = this;
	this.instance_35.setTransform(0,218);

	this.instance_36 = new lib.cirLight_00030();
	this.instance_36.parent = this;
	this.instance_36.setTransform(0,218);

	this.instance_37 = new lib.cirLight_00031();
	this.instance_37.parent = this;
	this.instance_37.setTransform(0,218);

	this.instance_38 = new lib.cirLight_00032();
	this.instance_38.parent = this;
	this.instance_38.setTransform(0,218);

	this.instance_39 = new lib.cirLight_00033();
	this.instance_39.parent = this;
	this.instance_39.setTransform(0,218);

	this.instance_40 = new lib.cirLight_00034();
	this.instance_40.parent = this;
	this.instance_40.setTransform(0,218);

	this.instance_41 = new lib.cirLight_00035();
	this.instance_41.parent = this;
	this.instance_41.setTransform(0,218);

	this.instance_42 = new lib.cirLight_00036();
	this.instance_42.parent = this;
	this.instance_42.setTransform(0,218);

	this.instance_43 = new lib.cirLight_00037();
	this.instance_43.parent = this;
	this.instance_43.setTransform(0,218);

	this.instance_44 = new lib.cirLight_00038();
	this.instance_44.parent = this;
	this.instance_44.setTransform(0,218);

	this.instance_45 = new lib.cirLight_00039();
	this.instance_45.parent = this;
	this.instance_45.setTransform(0,218);

	this.instance_46 = new lib.cirLight_00040();
	this.instance_46.parent = this;
	this.instance_46.setTransform(0,218);

	this.instance_47 = new lib.cirLight_00041();
	this.instance_47.parent = this;
	this.instance_47.setTransform(0,218);

	this.instance_48 = new lib.cirLight_00042();
	this.instance_48.parent = this;
	this.instance_48.setTransform(0,218);

	this.instance_49 = new lib.cirLight_00043();
	this.instance_49.parent = this;
	this.instance_49.setTransform(0,218);

	this.instance_50 = new lib.cirLight_00044();
	this.instance_50.parent = this;
	this.instance_50.setTransform(0,218);

	this.instance_51 = new lib.cirLight_00045();
	this.instance_51.parent = this;
	this.instance_51.setTransform(0,218);

	this.instance_52 = new lib.cirLight_00046();
	this.instance_52.parent = this;
	this.instance_52.setTransform(0,218);

	this.instance_53 = new lib.cirLight_00047();
	this.instance_53.parent = this;
	this.instance_53.setTransform(0,218);

	this.instance_54 = new lib.cirLight_00048();
	this.instance_54.parent = this;
	this.instance_54.setTransform(0,218);

	this.instance_55 = new lib.cirLight_00049();
	this.instance_55.parent = this;
	this.instance_55.setTransform(0,218);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},2).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_35}]},2).to({state:[{t:this.instance_36}]},2).to({state:[{t:this.instance_37}]},2).to({state:[{t:this.instance_38}]},2).to({state:[{t:this.instance_39}]},2).to({state:[{t:this.instance_40}]},2).to({state:[{t:this.instance_41}]},2).to({state:[{t:this.instance_42}]},2).to({state:[{t:this.instance_43}]},2).to({state:[{t:this.instance_44}]},2).to({state:[{t:this.instance_45}]},2).to({state:[{t:this.instance_46}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_48}]},2).to({state:[{t:this.instance_49}]},2).to({state:[{t:this.instance_50}]},2).to({state:[{t:this.instance_51}]},2).to({state:[{t:this.instance_52}]},2).to({state:[{t:this.instance_53}]},2).to({state:[{t:this.instance_54}]},2).to({state:[{t:this.instance_55}]},2).to({state:[]},2).wait(2));

	// Layer 1
	this.instance_56 = new lib.a3();
	this.instance_56.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


(lib.intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EATzAy3QgIhFgmhLQhKiUiOghQtBi5pgpiQtXtXAAy9QAAjaAbjPQB/usK9q+QJqpqMjirIAAAAQCngdBNiYQAnhNAEhHIAUmvIAAGwIAAABQgFBKgoBRQhRChixAeQseCrplJlQqxKziCOaQgfDXAADhQAAS0NSNSQJcJdM7C5QCYAiBOCdQAoBPAIBHIAAABIgUEpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:156.9,y:534.4}).wait(50).to({graphics:null,x:0,y:0}).wait(5));

	// Layer 5
	this.instance = new lib.Symbol7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(111.4,293.6,1,1.568,62.7,0,0,193.6,149.6);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1.57,x:187.4,y:456.5,alpha:1},14).to({scaleX:1,scaleY:1.57,x:377.5,y:863.8,alpha:0},35).to({_off:true},1).wait(5));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("A9nY/QsQsQAAxWQAAiEAskEIAGghQgfDOAADbQAAROMMMKQMLMMRNAAQROAAMMsMQMLsKgBxOQABxOsLsMQhwhvh2hgQCUBiBfBfQMRMSAARWQAARWsRMQQioCpi4CFQhFAxhGAsQptGHsPAAQxWAAsRsSg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:320.1,y:570.7}).wait(50).to({graphics:null,x:0,y:0}).wait(5));

	// Layer 1
	this.instance_1 = new lib.Symbol7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(273,420,1.202,1.885,62.7,0,0,193.6,149.5);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:149.6,scaleX:1.2,scaleY:1.88,x:364.3,y:615.9,alpha:1},14).to({scaleX:1.2,scaleY:1.89,x:454.7,y:739.3,alpha:0},35).to({_off:true},1).wait(5));

	// Layer 4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AT9dIQAAyztTtSQoyozrqjEQg3gPg5gMQidgkhYidQgcgxgRg4IAAAAIgMgtIAAgCIAUtfIAANdIALAsIAAgBQAQA2AbAvQBUCVCVAiQBBAPBBARQLkDHIvIxQNZNYAAS7QAACLgjC1QAPidAAijg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:482.8,y:354.7}).wait(50).to({graphics:null,x:0,y:0}).wait(5));

	// Layer 6
	this.instance_2 = new lib.Symbol7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(357.4,384.8,1.202,1.885,62.7,0,0,193.6,149.5);
	this.instance_2.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:149.6,scaleX:1.2,scaleY:1.88,x:384.3,y:440.6,alpha:1},14).to({scaleX:1.2,scaleY:1.89,x:489.1,y:574,alpha:0},35).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.6,136.3,584.9,619.8);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.btn18.gotoAndPlay(1);
	}
	this.frame_69 = function() {
		this.stop();
		
		this.stop();
		
		var S = this;
		
		var yStart = 0;
		var yEnd = 0;
		var yOver = 0;
		var frameTemp = 0;
		var max = 550;
		var min = 320;
		var ageTemp = 0;
		
		this.touchArea.addEventListener("mousedown", f1.bind(this));
		//this.touchArea.addEventListener("pressmove", f3.bind(this));
		//this.touchArea.addEventListener("mouseup", f2.bind(this))
		this.btn18.addEventListener("click", age18.bind(this));
		this.popWin.addEventListener("click", popF.bind(this));
		
		function popF(){
			S.popWin.visible =false;
		}
		function age18(){
			S.btn18.play();
			if (ageTemp == 0){
				ageTemp = 1;
			}else {
				ageTemp = 0;
			}
			
		}
		
		function f1()
		{
			if (ageTemp == 0){
				S.mcArr.visible = false;
				S.mcTxt.visible = false;
				S.mcCir.play();
				S.btn18.visible = false;
				/*
				S.mcArr.visible = false;
				S.mcTxt.visible = false;
				yStart= event.touches[0].pageY;
				*/
				//console.log(yStart);
			}else {
				S.popWin.visible =true;
			}
			
		}
		
		function f2()
		{
			/*
			yEnd= event.changedTouches[0].pageY;
			
			if (yEnd >= max){
				S.mcCir.play();
			}else {
				
			}
			*/
			//changeSC();
			//console.log(yEnd);
		}
		
		function f3(){
			yStart= event.touches[0].pageY;
			frameTemp = Math.round((yStart-min)/((max-min)/25));
			console.log(frameTemp);
			if (frameTemp >= 25){
				S.mcCir.play();
			}else {
				S.mcCir.gotoAndStop(frameTemp);
			}
		}
		
		
		function changeSC()
		{
			if (motionStop == 0){
				if (yStart>=yEnd){
					outUp()
				}else {
					outDown()
				}
			}
		}
		
		function outUp(){
			
		}
		function outDown(){
			
		}
	}
	this.frame_119 = function() {
		this.stop();
		nextScene();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(9).call(this.frame_69).wait(50).call(this.frame_119).wait(1));

	// popWin
	this.popWin = new lib.popWin();
	this.popWin.parent = this;
	this.popWin.setTransform(320,520,1,1,0,0,0,320,520);
	this.popWin._off = true;
	this.popWin.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.popWin).wait(68).to({_off:false},0).to({_off:true},2).wait(50));

	// btn18
	this.btn18 = new lib.btn18();
	this.btn18.parent = this;
	this.btn18.setTransform(337,995,1,1,0,0,0,143,10);
	this.btn18.alpha = 0;
	this.btn18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn18).wait(59).to({_off:false},0).to({y:985,alpha:1},9,cjs.Ease.get(1)).to({_off:true},2).wait(50));

	// touchArea
	this.touchArea = new lib.touchArea();
	this.touchArea.parent = this;
	this.touchArea.setTransform(320,520,1,1,0,0,0,320,520);
	this.touchArea._off = true;

	this.timeline.addTween(cjs.Tween.get(this.touchArea).wait(68).to({_off:false},0).to({_off:true},2).wait(50));

	// blackMaskAll
	this.instance = new lib.blackMask("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(320,520,1,1,0,0,0,320,520);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},24).to({_off:true},1).wait(75).to({_off:false},0).to({alpha:1},19).wait(1));

	// logo
	this.instance_1 = new lib.logo_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(319.5,140.5,0.856,0.856,0,0,0,101,81);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:120.5},34,cjs.Ease.get(1)).wait(85));

	// intro
	this.instance_2 = new lib.intro();
	this.instance_2.parent = this;
	this.instance_2.setTransform(306.2,491.9,1,1,0,0,0,306.2,491.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},54).wait(65));

	// arrowNext
	this.instance_3 = new lib.mcNext();
	this.instance_3.parent = this;
	this.instance_3.setTransform(321,878.8,1,1,0,0,0,89,26.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).to({y:893.1,alpha:0.711},4).to({y:898.8,alpha:1},10,cjs.Ease.get(1)).wait(36));

	// blackMaskCor
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.243,1],1,-92.9,1,135.1).s().p("Egx/AUsMAAAgpXMBj/AAAMAAAApXg");
	this.shape.setTransform(320,132.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","rgba(0,0,0,0)"],[0.239,1],-0.9,72.7,-0.9,-105.4).s().p("Egx/AQKMAAAggTMBj/AAAMAAAAgTg");
	this.shape_1.setTransform(320,936.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(120));

	// mcArr
	this.mcArr = new lib.Symbol2();
	this.mcArr.parent = this;
	this.mcArr.setTransform(319.9,500.1,1.1,1.1,0,0,0,27.8,26.9);
	this.mcArr.alpha = 0;
	this.mcArr._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcArr).wait(30).to({_off:false},0).to({scaleX:1,scaleY:1,x:319.8,alpha:1},24,cjs.Ease.get(1)).wait(66));

	// mcTxt
	this.mcTxt = new lib.mcTxt();
	this.mcTxt.parent = this;
	this.mcTxt.setTransform(319.3,600.7,1,1,0,0,0,102.9,28.8);
	this.mcTxt.alpha = 0;
	this.mcTxt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTxt).wait(30).to({_off:false},0).to({y:580.7,alpha:1},24,cjs.Ease.get(1)).wait(66));

	// mcCir
	this.mcCir = new lib.mcCir();
	this.mcCir.parent = this;
	this.mcCir.setTransform(320,520,0.897,0.897,0,0,0,320,520);
	this.mcCir.alpha = 0;
	this.mcCir._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCir).wait(15).to({_off:false},0).to({alpha:1},35).wait(50).to({scaleX:1.5,scaleY:1.5},19,cjs.Ease.get(-1)).wait(1));

	// bg
	this.instance_4 = new lib.bg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(320,520,1,1,0,0,0,320,520);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).to({alpha:1},29).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1040);


// stage content:
(lib.s1 = function(mode,startPosition,loop) {
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
		{src:"images/a1.png", id:"a1"},
		{src:"images/a10.png", id:"a10"},
		{src:"images/a2.jpg", id:"a2"},
		{src:"images/a3.png", id:"a3"},
		{src:"images/a4.png", id:"a4"},
		{src:"images/a9.png", id:"a9"},
		{src:"images/cirLight_00001.png", id:"cirLight_00001"},
		{src:"images/cirLight_00002.png", id:"cirLight_00002"},
		{src:"images/cirLight_00003.png", id:"cirLight_00003"},
		{src:"images/cirLight_00004.png", id:"cirLight_00004"},
		{src:"images/cirLight_00005.png", id:"cirLight_00005"},
		{src:"images/cirLight_00006.png", id:"cirLight_00006"},
		{src:"images/cirLight_00007.png", id:"cirLight_00007"},
		{src:"images/cirLight_00008.png", id:"cirLight_00008"},
		{src:"images/cirLight_00009.png", id:"cirLight_00009"},
		{src:"images/cirLight_00010.png", id:"cirLight_00010"},
		{src:"images/cirLight_00011.png", id:"cirLight_00011"},
		{src:"images/cirLight_00012.png", id:"cirLight_00012"},
		{src:"images/cirLight_00013.png", id:"cirLight_00013"},
		{src:"images/cirLight_00014.png", id:"cirLight_00014"},
		{src:"images/cirLight_00015.png", id:"cirLight_00015"},
		{src:"images/cirLight_00016.png", id:"cirLight_00016"},
		{src:"images/cirLight_00017.png", id:"cirLight_00017"},
		{src:"images/cirLight_00018.png", id:"cirLight_00018"},
		{src:"images/cirLight_00019.png", id:"cirLight_00019"},
		{src:"images/cirLight_00020.png", id:"cirLight_00020"},
		{src:"images/cirLight_00021.png", id:"cirLight_00021"},
		{src:"images/cirLight_00022.png", id:"cirLight_00022"},
		{src:"images/cirLight_00023.png", id:"cirLight_00023"},
		{src:"images/cirLight_00024.png", id:"cirLight_00024"},
		{src:"images/cirLight_00025.png", id:"cirLight_00025"},
		{src:"images/cirLight_00026.png", id:"cirLight_00026"},
		{src:"images/cirLight_00027.png", id:"cirLight_00027"},
		{src:"images/cirLight_00028.png", id:"cirLight_00028"},
		{src:"images/cirLight_00029.png", id:"cirLight_00029"},
		{src:"images/cirLight_00030.png", id:"cirLight_00030"},
		{src:"images/cirLight_00031.png", id:"cirLight_00031"},
		{src:"images/cirLight_00032.png", id:"cirLight_00032"},
		{src:"images/cirLight_00033.png", id:"cirLight_00033"},
		{src:"images/cirLight_00034.png", id:"cirLight_00034"},
		{src:"images/cirLight_00035.png", id:"cirLight_00035"},
		{src:"images/cirLight_00036.png", id:"cirLight_00036"},
		{src:"images/cirLight_00037.png", id:"cirLight_00037"},
		{src:"images/cirLight_00038.png", id:"cirLight_00038"},
		{src:"images/cirLight_00039.png", id:"cirLight_00039"},
		{src:"images/cirLight_00040.png", id:"cirLight_00040"},
		{src:"images/cirLight_00041.png", id:"cirLight_00041"},
		{src:"images/cirLight_00042.png", id:"cirLight_00042"},
		{src:"images/cirLight_00043.png", id:"cirLight_00043"},
		{src:"images/cirLight_00044.png", id:"cirLight_00044"},
		{src:"images/cirLight_00045.png", id:"cirLight_00045"},
		{src:"images/cirLight_00046.png", id:"cirLight_00046"},
		{src:"images/cirLight_00047.png", id:"cirLight_00047"},
		{src:"images/cirLight_00048.png", id:"cirLight_00048"},
		{src:"images/cirLight_00049.png", id:"cirLight_00049"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/ng1.png", id:"ng1"},
		{src:"images/ng2.png", id:"ng2"},
		{src:"images/ng3.png", id:"ng3"},
		{src:"images/ng4.png", id:"ng4"},
		{src:"images/ng5.png", id:"ng5"}
	],
	preloads: []
};




})(lib1 = lib1||{}, img1 = img1||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib1, img1, createjs, ss, AdobeAn;