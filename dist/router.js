!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Router=e()}(this,function(){"use strict";function i(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.routes={},this.currentUrl="",this.history=[],this.currentIndex=0,this.isBack=!1,this.back=this.back.bind(this),this.refresh=this.refresh.bind(this),window.addEventListener("load",this.refresh,!1),window.addEventListener("hashchange",this.refresh,!1)}return function(t,e,r){e&&i(t.prototype,e),r&&i(t,r)}(t,[{key:"route",value:function(t,e){this.routes[t]=e||function(){}}},{key:"refresh",value:function(){this.isBack?(this.currentUrl=this.history[this.currentIndex],this.history.pop()):(this.currentIndex++,this.currentUrl=location.hash.slice(1)||"/",this.history.push(this.currentUrl)),this.route(this.currentUrl)(),this.isBack=!1}},{key:"back",value:function(){this.isBack=!0,this.currentIndex--,this.currentIndex=this.currentIndex<0?this.currentIndex=0:this.currentIndex,this.currentUrl=this.history[this.currentIndex],location.hash="#".concat(this.currentUrl),this.routes[this.currentUrl]()}}]),t}()});
//# sourceMappingURL=router.js.map
