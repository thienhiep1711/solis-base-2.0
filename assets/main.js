"use strict";(self.webpackChunkshopify_base_2_0=self.webpackChunkshopify_base_2_0||[]).push([[179],{2810:function(e,t,r){r(1539),r(4747);var n=r(8952),o=r(6797),a=r.n(o),c=r(1024);r(6337);var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.setAttribute("src",e.getAttribute("data-src")),t||e.removeAttribute("data-src")},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.forEach((function(e){e.setAttribute("srcset",e.getAttribute("data-srcset")),t||e.removeAttribute("data-srcset")}))},u=function(){window.imageObserver=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){e.target.hasAttribute("data-src")&&i(e.target,!0);var r=(0,n.td)("[data-srcset]",e.target.parentNode);r&&s(r,!0),t.unobserve(e.target)}}))}),{threshold:0})},d=function(e){window.imageObserver.observe(e)};t.ZP=function(e){var t=(0,n.Ys)("[data-src]",e),r=(0,n.td)("[data-srcset]",e);t&&function(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"loading"in HTMLImageElement.prototype?(i(t,o),r&&s(r,o)):(window.imageObserver||u(),d(t)),(0,n.on)("load",(function(){o?e.isLoaded=!0:(0,c.t8)(e,"is-loaded"),a()(t)}),t)}(e,t,r,!1)}},7444:function(e,t,r){var n={};r.r(n);var o=r(1024),a=r(8551),c=r(2810),i=r(4812);var s={name:"Carousel"};var u=(0,r(3744).Z)(s,[["render",function(e,t,r,n,o,a){return(0,i.openBlock)(),(0,i.createElementBlock)("div",null,[(0,i.renderSlot)(e.$slots,"default")])}]]);console.log(u),(0,a.rQ)(n.default,"hero"),(0,a.rQ)(c.ZP,"picture"),(0,a.X5)(u,"carousel","carousel"),document.addEventListener("DOMContentLoaded",(function(){(0,o.DY)()&&(0,o.t8)(document.body,"ie"),(0,o.T)()&&document.body.classList.remove("no-touch")}))},9871:function(e,t,r){r.d(t,{Z:function(){return u}});r(7941),r(2526),r(7327),r(1539),r(277),r(4747),r(9337);var n=r(4250),o={state:{miniCartOpened:!1,headerMenuOpened:!1},getters:{},mutations:{},actions:{}},a={namespaced:!0,state:{cart:window.SLS_STATE&&window.SLS_STATE.cart||{}},getters:{},mutations:{},actions:{}};function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=(0,n.MT)(i(i({},o),{},{modules:{cart:a}}))}},function(e){e.O(0,[351],(function(){return t=7444,e(e.s=t);var t}));e.O()}]);