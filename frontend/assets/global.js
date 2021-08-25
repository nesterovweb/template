/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/js/global.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sources/components/accordion/accordion.js":
/*!***************************************************!*\
  !*** ./sources/components/accordion/accordion.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  App.Accordion = {\n    init: function init() {\n      var accordionClass = '.js--accordion',\n          bodyClass = '.js--accordion-body';\n      $(accordionClass + ':not(._accordion-init)').each(function () {\n        var $component = $(this),\n            $list = $component.closest('.js--accordion-list'),\n            $toggler = $('.js--accordion-toggler', $component),\n            $body = $('.js--accordion-body', $component);\n        $toggler.on('click', function (e) {\n          e.preventDefault();\n\n          if (!$component.hasClass('_active')) {\n            if ($list.length) {\n              $(accordionClass, $list).removeClass('_active');\n              $(bodyClass, $list).slideUp();\n            }\n\n            $component.addClass('_active');\n            $body.slideDown();\n          } else {\n            $component.removeClass('_active');\n            $body.slideUp();\n          }\n        });\n\n        if ($component.hasClass('_active')) {\n          $body.show();\n        }\n\n        $component.addClass('_accordion-init');\n      });\n    }\n  };\n  App.Accordion.init();\n});\n\n//# sourceURL=webpack:///./sources/components/accordion/accordion.js?");

/***/ }),

/***/ "./sources/components/animations/animations.js":
/*!*****************************************************!*\
  !*** ./sources/components/animations/animations.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  App.Animations = {\n    controller: new ScrollMagic.Controller(),\n    scenes: [],\n    init: function init() {}\n  };\n  App.Animations.init();\n});\n\n//# sourceURL=webpack:///./sources/components/animations/animations.js?");

/***/ }),

/***/ "./sources/components/cookie-popup/cookie-popup.js":
/*!*********************************************************!*\
  !*** ./sources/components/cookie-popup/cookie-popup.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  var $popup = $('.js--cookie-popup');\n  if (!$popup.length) return;\n  var cookie = getCookie('cookie_success'),\n      $btn = $('.js--cookie-success');\n  if (cookie !== 'yes') $popup.addClass('_active');\n  $btn.on('click', function (e) {\n    e.preventDefault();\n    setCookie('cookie_success', 'yes');\n    $popup.removeClass('_active');\n  });\n});\n\n//# sourceURL=webpack:///./sources/components/cookie-popup/cookie-popup.js?");

/***/ }),

/***/ "./sources/components/header/header.js":
/*!*********************************************!*\
  !*** ./sources/components/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  App.Header = {\n    burgerMenuIsOpen: false,\n    init: function init() {\n      this.fixOnScroll();\n      this.burgerMenu();\n    },\n    headerSelector: '.js--header',\n    fixOnScroll: function fixOnScroll() {\n      var y = $(window).scrollTop(),\n          $header = $(this.headerSelector),\n          triggerY = $header.innerHeight();\n\n      function updateHead() {\n        var newY = $(window).scrollTop(),\n            isUp = newY <= y,\n            isDown = newY > y;\n\n        if (newY > triggerY && !$header.hasClass('_fix')) {\n          $header.addClass('_fix');\n        } else if (newY <= triggerY && $header.hasClass('_fix')) {\n          $header.removeClass('_fix');\n        }\n\n        if (isUp) {\n          $header.addClass('_fix-show');\n        } else if (isDown && $header.hasClass('_fix')) {\n          $header.removeClass('_fix-show');\n        }\n\n        y = newY;\n      }\n\n      updateHead();\n      $(window).on('scroll', function (e) {\n        updateHead();\n      });\n    },\n    burgerSelector: '.js--header-burger',\n    burgerMenu: function burgerMenu() {\n      var $header = $(this.headerSelector);\n      $(this.burgerSelector).on('click', function () {\n        if (!$header.hasClass('_burger-open')) {\n          $header.addClass('_burger-open');\n          App.Header.burgerMenuIsOpen = true;\n        } else {\n          $header.removeClass('_burger-open');\n          App.Header.burgerMenuIsOpen = false;\n        }\n      });\n      $(document).on('click', function (e) {\n        if (!$header.is(e.target) && !$header.has(e.target).length) {\n          $header.removeClass('_burger-open');\n          App.Header.burgerMenuIsOpen = false;\n        }\n      });\n    }\n  };\n  App.Header.init();\n});\n\n//# sourceURL=webpack:///./sources/components/header/header.js?");

/***/ }),

/***/ "./sources/components/lazy/lazy.js":
/*!*****************************************!*\
  !*** ./sources/components/lazy/lazy.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  App.Lazy = {\n    init: function init() {\n      var observer = lozad('.lazy:not(.loaded)', {\n        loaded: function loaded(el) {\n          el.classList.add('loaded');\n          $(el).trigger('loaded');\n        }\n      });\n      observer.observe();\n    }\n  };\n  App.Lazy.init();\n});\n\n//# sourceURL=webpack:///./sources/components/lazy/lazy.js?");

/***/ }),

/***/ "./sources/components/pagen/pagen.js":
/*!*******************************************!*\
  !*** ./sources/components/pagen/pagen.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  App.AjaxPagen = {\n    containerSelector: '.js--ajax-pagen-container',\n    itemSelector: '.js--ajax-pagen-item',\n    showMoreSelector: '.js--ajax-pagen-show-more',\n    listSelector: '.js--ajax-pagen-list',\n    init: function init() {\n      $(document).on('click', this.itemSelector, function (e) {\n        e.preventDefault();\n        var $container = $(this).closest(App.AjaxPagen.containerSelector),\n            url = $(this).attr('href');\n        App.ajaxPreloader.start();\n        $.ajax({\n          url: url,\n          type: 'GET',\n          data: {},\n          success: function success(data) {\n            App.ajaxPreloader.stop();\n\n            try {\n              $container.html($(App.AjaxPagen.containerSelector, data).html());\n              history.replaceState({}, '', url);\n              $('html, body').animate({\n                'scrollTop': $container.offset().top - 150\n              }, 300);\n              App.Events.onAjaxUpdate();\n            } catch (err) {\n              console.log(err);\n            }\n          }\n        });\n      });\n      $(document).on('click', this.showMoreSelector, function (e) {\n        e.preventDefault();\n        var $list = $(this).closest(App.AjaxPagen.listSelector),\n            url = $(this).attr('href');\n        App.ajaxPreloader.start();\n        $.ajax({\n          url: url,\n          type: 'GET',\n          data: {},\n          success: function success(data) {\n            App.ajaxPreloader.stop();\n\n            try {\n              $('.pagen', $list).remove();\n              $list.append($(App.AjaxPagen.listSelector, data).html());\n              history.replaceState({}, '', url);\n              App.Events.onAjaxUpdate();\n            } catch (err) {\n              console.log(err);\n            }\n          }\n        });\n      });\n    }\n  };\n  App.AjaxPagen.init();\n});\n\n//# sourceURL=webpack:///./sources/components/pagen/pagen.js?");

/***/ }),

/***/ "./sources/components/popup/popup.js":
/*!*******************************************!*\
  !*** ./sources/components/popup/popup.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  App.Popup = {\n    popupOptions: {\n      closeExisting: true,\n      baseClass: 'popup',\n      btnTpl: {\n        smallBtn: '<a href=\"javascript:void(0);\" class=\"popup__close\" data-fancybox-close></a>'\n      },\n      autoFocus: false,\n      backFocus: false,\n      trapFocus: false,\n      touch: false,\n      hash: false,\n      loop: true,\n      idleTime: 999,\n      infobar: false,\n      keyboard: false,\n      animationDuration: 0,\n      video: {\n        autoStart: false\n      },\n      image: {\n        preload: true\n      },\n      afterShow: function afterShow(instance, current) {\n        App.Events.onAjaxUpdate();\n      }\n    },\n    init: function init() {\n      var popupOptions = this.popupOptions;\n      $('.js--popup').each(function () {\n        var options = $.extend({}, popupOptions);\n        var closeExisting = $(this).attr('data-close-existing');\n\n        if (closeExisting == 'false') {\n          options.closeExisting = false;\n        }\n\n        if ($(this).attr('data-type') == 'iframe') {\n          options.width = '100%';\n        }\n\n        $(this).fancybox(options);\n      });\n      var arPhotogalleryID = [];\n      $('[data-photogallery]').each(function () {\n        var thisID = $(this).attr('data-photogallery');\n\n        if (!arPhotogalleryID.includes(thisID)) {\n          arPhotogalleryID.push(thisID);\n        }\n      });\n      arPhotogalleryID.map(function (item) {\n        $().fancybox({\n          buttons: [\"thumbs\", \"close\"],\n          thumbs: {\n            autoStart: true\n          },\n          selector: '[data-photogallery=' + item + ']'\n        });\n      });\n    },\n    openPopupSuccess: function openPopupSuccess(opt) {\n      var html = '<div class=\"_min\"><div>';\n      if (opt.title != undefined) html += '<div class=\"h2 mb-2-rem\">' + opt.title + '</div>';\n      if (opt.text != undefined) html += '<div class=\"p\">' + opt.text + '</div>';\n      html += '</div></div>';\n      $.fancybox.open({\n        src: html,\n        type: 'html',\n        opts: this.popupOptions\n      });\n    },\n    openPopup: function openPopup(hash) {\n      $.fancybox.open({\n        src: hash,\n        opts: this.popupOptions\n      });\n    },\n    openPopupHtml: function openPopupHtml(html) {\n      $.fancybox.open({\n        src: '<div>' + html + '</div>',\n        type: 'html',\n        opts: this.popupOptions\n      });\n    }\n  };\n  App.Popup.init();\n});\n\n//# sourceURL=webpack:///./sources/components/popup/popup.js?");

/***/ }),

/***/ "./sources/components/tabs/tabs.js":
/*!*****************************************!*\
  !*** ./sources/components/tabs/tabs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  App.Tabs = {\n    init: function init() {\n      $('.js--tabs').each(function () {\n        var $component = $(this),\n            $slider = $('.js--tabs-menu', $component),\n            $links = $('.js--tabs-link', $slider),\n            $scrollbar = $('.js--tabs-menu-scrollbar', $slider),\n            $bodies = $('.js--tabs-body', $component),\n            $activeLink = $links.filter('._active'),\n            $hashActiveLink = $links.filter('[href=\"' + location.hash + '\"]');\n        var initialSlide = 0;\n        if ($activeLink.length) initialSlide = $links.index($activeLink);else if ($hashActiveLink.length) initialSlide = $links.index($hashActiveLink);\n        var slider = new Swiper($slider[0], {\n          slidesPerView: \"auto\",\n          wrapperClass: 'tabs__menu__items',\n          slideClass: 'tabs__menu__item',\n          scrollbar: {\n            el: $scrollbar[0],\n            hide: false,\n            draggable: true,\n            dragClass: 'tabs__menu__scrollbar__drag'\n          }\n        });\n\n        function setActive(ID) {\n          $links.removeClass('_active');\n          $links.filter('[href=\"#' + ID + '\"]').addClass('_active');\n          $bodies.removeClass('_active');\n          var $activeBody = $bodies.filter('#' + ID);\n          if (!$activeBody.length) $activeBody = $bodies.filter('[data-id=\"' + ID + '\"]');\n          $activeBody.addClass('_active');\n        }\n\n        setActive($links.eq(initialSlide).attr('href').substr(1));\n        $links.on('click', function (e) {\n          e.preventDefault();\n          if ($(this).hasClass('_active')) return;\n          var index = $links.index($(this));\n          slider.slideTo(index);\n          var ID = $(this).attr('href').substr(1);\n          setActive(ID);\n          App.Events.onAjaxUpdate();\n        });\n      });\n    }\n  };\n  App.Tabs.init();\n});\n\n//# sourceURL=webpack:///./sources/components/tabs/tabs.js?");

/***/ }),

/***/ "./sources/js/global.js":
/*!******************************!*\
  !*** ./sources/js/global.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_lazy_lazy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/lazy/lazy */ \"./sources/components/lazy/lazy.js\");\n/* harmony import */ var _components_lazy_lazy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_lazy_lazy__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header */ \"./sources/components/header/header.js\");\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_header_header__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_cookie_popup_cookie_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cookie-popup/cookie-popup */ \"./sources/components/cookie-popup/cookie-popup.js\");\n/* harmony import */ var _components_cookie_popup_cookie_popup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_cookie_popup_cookie_popup__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_animations_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/animations/animations */ \"./sources/components/animations/animations.js\");\n/* harmony import */ var _components_animations_animations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_animations_animations__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_tabs_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tabs/tabs */ \"./sources/components/tabs/tabs.js\");\n/* harmony import */ var _components_tabs_tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_tabs_tabs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_pagen_pagen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pagen/pagen */ \"./sources/components/pagen/pagen.js\");\n/* harmony import */ var _components_pagen_pagen__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_pagen_pagen__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/accordion/accordion */ \"./sources/components/accordion/accordion.js\");\n/* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_accordion_accordion__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_popup_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/popup/popup */ \"./sources/components/popup/popup.js\");\n/* harmony import */ var _components_popup_popup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_popup_popup__WEBPACK_IMPORTED_MODULE_7__);\nApp.userAgent = detect.parse(navigator.userAgent);\n\nApp.isBrowser = function (name) {\n  return name == App.userAgent.browser.family;\n};\n\n$('html').addClass('browser-' + App.userAgent.browser.family);\n$('html').addClass('os-' + App.userAgent.os.family.split(' ')[0]); //components\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./sources/js/global.js?");

/***/ })

/******/ });