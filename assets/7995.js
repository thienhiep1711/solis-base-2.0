"use strict";(self.webpackChunkwknd_nation=self.webpackChunkwknd_nation||[]).push([[7995],{47995:function(e,t,n){n.r(t);var i=n(2934),s=n.n(i),l=n(27360),o=n.n(l),a=n(61417),u=n.n(a),c=n(11235),d="newsletter_modal",r=604800;t.default=function(e){return new(s())({el:e,data:function(){return{isActive:!1,delay:null,focusEl:null}},methods:{initNewsletterModal:function(){var e=this;Boolean(o().get(d))||(setTimeout((function(){e.isActive=!0}),this.delay),setTimeout((function(){var t=e.$refs.newsletterModalWrapper;t&&(e.focusEl=document.activeElement,t.focus(),(0,c.St)(t))}),this.delay+300))},closeNewsletterModal:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;o().set(d,"1",{expires:r}),t>0?setTimeout((function(){e.isActive=!1}),t):this.isActive=!1,this.focusEl&&this.focusEl.focus()},handleSuccessSignUp:function(e){e&&this.closeNewsletterModal(this.delay)},keyDownHandler:function(e){this.isActive&&"Escape"===e.key&&this.closeNewsletterModal()}},mounted:function(){this.delay=1e3*e.getAttribute("data-modal-delay"),this.initNewsletterModal(),u()(window,"keydown",this.keyDownHandler)}})}}}]);