"use strict";(self.webpackChunkwknd_nation=self.webpackChunkwknd_nation||[]).push([[2369],{72369:function(o,n,t){t.r(n);t(21249);var e=t(2934),s=t.n(e),a=t(67891),u=t(1943),r=t(80024),i=t.n(r),d=t(61417),l=t.n(d),c=t(49910);n.default=function(o){return new(s())({el:o,data:function(){return{showModal:!1,previouslyFocusedElement:"",query:null,error:!1}},watch:{showModal:function(){var o=this,n=i().all("a, button, input",this.$refs.modal),t=i()(".text-input__el",this.$refs.modal);t&&n&&(this.showModal?this.$nextTick((function(){(0,u.St)(o.$refs.modal,{elementToFocus:t})})):((0,u.zx)(this.$refs.modal),this.$refs.openButton.focus())),n.map((function(n){l()(n,"keydown",(function(n){27===n.keyCode&&o.closeModal()}))}))}},methods:{openModal:function(){this.showModal=!0,(0,a.disableBodyScroll)(document.body)},closeModal:function(){this.showModal=!1,(0,a.enableBodyScroll)(document.body)},onInputChange:function(o){var n=o.value;this.query=n},submit:function(){var o=this;c.ajax({method:"POST",url:"/password?password=".concat(this.query),cors:!0},(function(n,t){t.indexOf("data-password")>-1?o.error=!0:o.$refs.storefront_password.submit()}))}}})}}}]);