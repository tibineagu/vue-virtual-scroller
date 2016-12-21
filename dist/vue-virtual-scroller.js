!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.VueVirtualScroller=factory():root.VueVirtualScroller=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=4)}([function(module,exports,__webpack_require__){var __vue_exports__,__vue_options__;__webpack_require__(2),__vue_exports__=__webpack_require__(1);var __vue_template__=__webpack_require__(3);__vue_options__=__vue_exports__=__vue_exports__||{},"object"!=typeof __vue_exports__.default&&"function"!=typeof __vue_exports__.default||(__vue_options__=__vue_exports__=__vue_exports__.default),"function"==typeof __vue_options__&&(__vue_options__=__vue_options__.options),__vue_options__.render=__vue_template__.render,__vue_options__.staticRenderFns=__vue_template__.staticRenderFns,__vue_options__._scopeId="data-v-5594e8c4",module.exports=__vue_exports__},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"virtual-scroller",props:{items:{type:Array,required:!0},renderers:{required:!0},itemHeight:{type:[Number,String],required:!0},typeField:{type:String,default:"type"},keyField:{type:String,default:"id"}},data:function(){return{visibleItems:[],itemContainerStyle:null}},watch:{items:function(){this.updateVisibleItems()}},methods:{updateVisibleItems:function(){var l=this.items.length,el=this.$el,scroll={top:el.scrollTop,bottom:el.scrollTop+el.clientHeight};this._startIndex=Math.floor(scroll.top/this.itemHeight),this._endIndex=Math.ceil(scroll.bottom/this.itemHeight);var startIndex=this._startIndex-1;startIndex<0&&(startIndex=0);var endIndex=this._endIndex+2;endIndex>l&&(endIndex=l),this.visibleItems=this.items.slice(startIndex,endIndex),this.itemContainerStyle={height:l*this.itemHeight+"px",paddingTop:startIndex*this.itemHeight+"px"},this.$forceUpdate()},scrollToItem:function(index){this.$el.scrollTop=index*this.itemHeight},addResizeHandlers:function(){var iframe=this.$refs.resizeObserver,w=iframe.contentWindow;iframe.addEventListener("load",this.refreshResizeHandlers),w&&(w.addEventListener("resize",this.updateVisibleItems),w.addEventListener("close",this.removeResizeHandlers))},removeResizeHandlers:function(){console.log("removeResizeHandlers");var iframe=this.$refs.resizeObserver,w=iframe.contentWindow;iframe.removeEventListener("load",this.refreshResizeHandlers),w&&(w.removeEventListener("resize",this.updateVisibleItems),w.removeEventListener("close",this.removeResizeHandlers))},refreshResizeHandlers:function(){console.log("refreshResizeHandlers"),this.removeResizeHandlers(),this.addResizeHandlers(),this.updateVisibleItems()}},mounted:function(){this.updateVisibleItems(),this.addResizeHandlers()}}},function(module,exports){},function(module,exports){module.exports={render:function(){var _vm=this,_c=(_vm.$createElement,_vm._c);return _c("div",{staticClass:"virtual-scroller",on:{scroll:_vm.updateVisibleItems}},[_c("div",{staticClass:"item-container",style:_vm.itemContainerStyle},[_c("div",{staticClass:"items"},_vm._l(_vm.visibleItems,function(item){return _c(_vm.renderers[item[_vm.typeField]],{key:item[_vm.keyField],tag:"component",staticClass:"item",attrs:{item:item}})}))]),_vm._v(" "),_c("iframe",{ref:"resizeObserver",staticClass:"resize-observer",attrs:{tabindex:"-1"}})])},staticRenderFns:[]}},function(module,exports,__webpack_require__){"use strict";function install(Vue){Vue.component("test",__WEBPACK_IMPORTED_MODULE_0__components_VirtualScroller_vue___default.a)}var __WEBPACK_IMPORTED_MODULE_0__components_VirtualScroller_vue__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0__components_VirtualScroller_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VirtualScroller_vue__);Object.defineProperty(exports,"__esModule",{value:!0}),exports.install=install,__webpack_require__.d(exports,"VirtualScroller",function(){return VirtualScroller});var VirtualScroller=__WEBPACK_IMPORTED_MODULE_0__components_VirtualScroller_vue___default.a;exports.default={version:"0.0.4",install:install}}])});