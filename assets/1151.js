"use strict";(self.webpackChunkwknd_nation=self.webpackChunkwknd_nation||[]).push([[1151],{91151:function(t,e,n){n.r(e);n(74916),n(15306),n(92222),n(57327),n(41539);var i=n(2934),a=n.n(i),r=n(70975),o=n(11235),c=n(78627),s=n.n(c);a().use(s(),{swipeTolerance:60}),e.default=function(t){return new(a())({el:t,data:function(){return{key:"color",activeIndex:0,state:r.Z,product:window.BARREL.product,isDesktop:window.innerWidth>1e3}},watch:{"state.activeVariant":function(){this.activeIndex=0}},methods:{resizeImage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return t.replace(/[.](jpe?g|png|gif)/i,"_".concat(e,"x.$1"))},nextImage:function(){this.activeIndex>=this.images.length-1||(this.activeIndex+=1)},prevImage:function(){this.activeIndex>0&&(this.activeIndex-=1)}},computed:{imageHandle:function(){for(var t=0;t<this.product.options.length;t++){var e=this.product.options,n=void 0===e?[]:e,i=this.state.activeVariant;if((0,o.v8)(n[t])===this.key){var a=i["option".concat(t+1)];return!!a&&"".concat(this.key,"-").concat((0,o.v8)(a)).toLowerCase()}}return!1},images:function(){var t=this,e=this.product.images,n=void 0===e?[]:e,i=n.filter((function(e){var n=e.src;return~(void 0===n?"":n).indexOf(t.imageHandle)}));return i.length?i:[]},featuredImage:function(){return this.resizeImage((this.images[this.activeIndex]||{}).src||"",800)},zoomableImage:function(){return(this.images[this.activeIndex]||{}).src||""}}})}}}]);