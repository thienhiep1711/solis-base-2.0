"use strict";(self.webpackChunkshopify_base_2_0=self.webpackChunkshopify_base_2_0||[]).push([[24],{9505:function(e,t,r){var a=r(8551),n=r(4812);var c={class:"card__inner"},l={ref:"image",class:"card__image-wrapper"},o=["href"],s={class:"card__content"},i={class:"card__content-inner"},d=["href"];var u={props:{title:{type:String,default:""},titleClass:{type:String,default:""},className:{type:String,default:""},ctaPrimaryUrl:{type:String,default:""},featuredImage:{type:String,default:""},secondImage:{type:String,default:""},isSrcSet:{type:Boolean,default:!0}}},m=r(3744);var p={name:"ProductCard",components:{Card:(0,m.Z)(u,[["render",function(e,t,r,a,u,m){var p=(0,n.resolveComponent)("image-lazy");return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:(0,n.normalizeClass)(["card",r.className])},[(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("div",l,[r.ctaPrimaryUrl?((0,n.openBlock)(),(0,n.createElementBlock)("a",{key:0,class:"card__image-link",href:r.ctaPrimaryUrl,title:"ctaPrimaryUrl"},[!e.isMobile&&r.secondImage?((0,n.openBlock)(),(0,n.createBlock)(p,{key:0,cover:!0,class:"card__image card__image--second image-lazy--absolute","image-url":r.secondImage,"is-src-set":r.isSrcSet},null,8,["image-url","is-src-set"])):(0,n.createCommentVNode)("v-if",!0),(0,n.createVNode)(p,{cover:!0,class:"card__image image-lazy--absolute","image-url":r.featuredImage,"is-src-set":r.isSrcSet},null,8,["image-url","is-src-set"])],8,o)):((0,n.openBlock)(),(0,n.createBlock)(p,{key:1,cover:!0,class:"card__image image-lazy--absolute","image-url":r.featuredImage,"is-src-set":r.isSrcSet},null,8,["image-url","is-src-set"]))],512),(0,n.renderSlot)(e.$slots,"before-content"),(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",i,[(0,n.renderSlot)(e.$slots,"label"),r.title?((0,n.openBlock)(),(0,n.createElementBlock)("h3",{key:0,class:(0,n.normalizeClass)(["card__title",r.titleClass])},[r.ctaPrimaryUrl?((0,n.openBlock)(),(0,n.createElementBlock)("a",{key:0,class:"card__title-link",href:r.ctaPrimaryUrl},(0,n.toDisplayString)(r.title),9,d)):((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,{key:1},[(0,n.createTextVNode)((0,n.toDisplayString)(r.title),1)],2112))],2)):(0,n.createCommentVNode)("v-if",!0),(0,n.renderSlot)(e.$slots,"description")]),(0,n.renderSlot)(e.$slots,"ctas")]),(0,n.renderSlot)(e.$slots,"after-content")])],2)}]])},props:{title:{type:String,default:"test"}},data:function(){return{isActive:!1}}};var f=(0,m.Z)(p,[["render",function(e,t,r,a,c,l){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,(0,n.toDisplayString)(r.title),1)}]]);(0,a.X5)(f,f,"product-card")},9871:function(e,t,r){r.d(t,{Z:function(){return i}});r(7941),r(2526),r(7327),r(1539),r(277),r(4747),r(9337);var a=r(4250),n={state:{miniCartOpened:!1,headerMenuOpened:!1},getters:{},mutations:{},actions:{}},c={namespaced:!0,state:{cart:window.SLS_STATE&&window.SLS_STATE.cart||{}},getters:{},mutations:{},actions:{}};function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=(0,a.MT)(o(o({},n),{},{modules:{cart:c}}))}},function(e){e.O(0,[351],(function(){return t=9505,e(e.s=t);var t}));e.O()}]);