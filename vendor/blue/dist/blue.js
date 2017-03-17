"use strict";function _classCallCheck(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}$(function(){window.subvisual=window.subvisual||{},window.subvisual.nav=function(){function n(n,s){var i=new ScrollState(n,s);o.update(i,a),e.updateWithScroll(i,a)}var a=$(".Nav"),e=window.subvisual.nav.logo,o=window.subvisual.nav.visibility;return e.update(a),o.updateAfterAnimation(a),{update:n}}()}),$(function(){window.subvisual=window.subvisual||{},window.subvisual.nav=window.subvisual.nav||{},window.subvisual.nav.logo=function(){function n(n){n.find(".NavLogo").addClass("NavLogo--mono")}function a(n){n.find(".NavLogo").removeClass("NavLogo--mono")}function e(e){e.hasClass("Nav--light")||e.hasClass("Nav--transparent")?e.hasClass("Nav--fixed")?a(e):n(e):a(e)}function o(n,o){n.hasPassedTheElement(o.outerHeight())?a(o):e(o)}return{update:e,updateWithScroll:o}}()}),$(function(){function n(){r=!1,o.css("overflow","auto"),l.removeClass("is-open"),s.removeClass("is-open"),i.removeClass("is-open")}function a(){r=!0,o.css("overflow","hidden"),l.addClass("is-open"),s.addClass("is-open"),i.css("display","block"),i.addClass("is-open")}function e(){u.on("keydown",function(n){9==n.which&&n.shiftKey&&(t.focus(),n.preventDefault())}),t.on("keydown",function(n){r&&9==n.which&&!n.shiftKey&&(u.focus(),n.preventDefault())}),$("body").on("keydown",function(a){r&&27==a.which&&n()})}var o=$("body"),s=$(".Nav"),i=$(".NavOverlay"),t=$(".Nav-menu"),l=s.find(".Burger"),u=$(".NavOverlay .NavOverlay-item:first .NavOverlay-link");n(),e();var r=!1;s.on("click",".Nav-menu",function(){r?n():a()}),i.on("transitionend",function(){r||i.css("display","none")})}),$(function(){window.subvisual=window.subvisual||{},window.subvisual.nav=window.subvisual.nav||{},window.subvisual.nav.visibility=function(){function n(n){n[0]&&n[0].addEventListener("animationend",function(a){"slideup"==a.animationName&&(n.addClass("Nav--hint"),n.removeClass("Nav--fixed"),n.removeClass("Nav--animateUp"),n.find(".Burger").removeClass("Burger--fixed"))},!1)}function a(n,a){n&&(a.removeClass("Nav--fixed"),a.removeClass("Nav--hint"),a.find(".Burger").removeClass("Burger--fixed"))}function e(n,a){a.hasClass("Nav--fixed")?a.addClass("Nav--animateUp"):n&&a.addClass("Nav--hint")}function o(n,a){!n&&a.hasClass("Nav--fixed")||n?(a.addClass("Nav--fixed"),a.removeClass("Nav--hint"),a.find(".Burger").addClass("Burger--fixed")):n||a.removeClass("Nav--hint")}function s(n,s){if(a(n.isAtTheTop(),s),!n.hasntScrolledEnough()){var i=n.hasPassedTheElement(s.outerHeight());n.hasScrolledDown()?e(i,s):o(i,s)}}return{update:s,updateAfterAnimation:n}}()}),$(function(){function n(){a=!0}var a=void 0,e=0,o=void 0;setInterval(function(){a&&(o=$(document).scrollTop(),window.subvisual.nav.update(o,e),e=o,a=!1)},250),window.onscroll=n,setTimeout(n,50)});var _createClass=function(){function n(n,a){for(var e=0;e<a.length;e++){var o=a[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(a,e,o){return e&&n(a.prototype,e),o&&n(a,o),a}}(),ScrollState=function(){function n(a,e){_classCallCheck(this,n),this.currentScrollTop=a,this.lastScrollTop=e,this.delta=50}return _createClass(n,[{key:"hasScrolledDown",value:function(){return this.currentScrollTop>this.lastScrollTop}},{key:"hasPassedTheElement",value:function(n){return this.currentScrollTop>n}},{key:"isAtTheTop",value:function(){return 0==this.currentScrollTop}},{key:"hasntScrolledEnough",value:function(){return Math.abs(this.lastScrollTop-this.currentScrollTop)<=this.delta}}]),n}();
//# sourceMappingURL=blue.js.map