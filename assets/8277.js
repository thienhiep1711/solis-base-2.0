"use strict";(self.webpackChunkwknd_nation=self.webpackChunkwknd_nation||[]).push([[8277],{8277:function(e,t,o){o.r(t);o(92222);var i=o(2934),n=o.n(i);o(19270);n().component("hero-small",{props:["type","invertedMode","enableOverlay","overlayOpacity","heroStyle","title","description","breakpoints","imageSources","backgroundColor","video","videoSmall","videoLarge","contentAlignment","textAlignment","fallback","fallbackSmall","fallbackLarge"],computed:{heroClass:function(){var e="hero-small hero-small--".concat(this.heroStyle,"  hero-small--text-").concat(this.textAlignment," hero-small--content-").concat(this.contentAlignment," bg-secondary-background");return this.heroStyle&&this.heroStyle.indexOf("fullwidth")>-1&&(e+=" hero-small--fullwidth"),this.invertedMode&&(e+=" hero-small--inverted"),e},heroStyles:function(){return{background:this.backgroundColor&&"rgba(0,0,0,0)"!==this.backgroundColor&&"transparent"!==this.backgroundColor?this.backgroundColor:""}},heroVideos:function(){var e=[];return this.video&&e.push({src:this.video,type:"video/mp4",media:"(max-width: 767px)"}),this.videoSmall&&e.push({src:this.videoSmall,type:"video/mp4",media:"(min-width: 767px) and (max-width: 999px)"}),this.videoLarge&&e.push({src:this.videoLarge,type:"video/mp4",media:"(min-width: 1000px)"}),e}}})}}]);