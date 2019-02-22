(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6604f659"],{2956:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DialogBase",{attrs:{dialog:e.dialog,title:e.title},scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-spacer"),n("v-btn",{attrs:{flat:""},on:{click:e.close}},[e._v("Close")]),n("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("\n            "+e._s(e.submitLabel)+"\n        ")])]},proxy:!0}])},[n("v-form",{ref:"form",staticClass:"p-4",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[e._t("default",null,{submit:e.submit})],2)],1)},a=[],o=n("2b0e"),i=n("53d6"),u=o["default"].extend({components:{DialogBase:i["a"]},props:{title:{type:String,default:null},dialog:{type:Object,required:!0},cancelLabel:{type:String,default:"Cancel"},submitLabel:{type:String,default:"Submit"}},methods:{close:function(){this.$ui.closeDialog(this.dialog.id)},submit:function(){this.$refs.form.validate()&&this.$emit("completed")}}}),s=u,l=n("2877"),c=Object(l["a"])(s,r,a,!1,null,null,null);c.options.__file="DialogForm.vue";t["a"]=c.exports},"80fb":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var i=function(){function e(){r(this,e)}return o(e,[{key:"minLength",value:function(e){return function(t){return t&&t.length>=e||"This field must be more than ".concat(e," characters long")}}},{key:"maxLength",value:function(e){return function(t){return t&&t.length<=e||"This field must be less than ".concat(e," characters long")}}},{key:"required",get:function(){return function(e){return!!e||"This field is required"}}}]),e}();t["a"]=new i},fcb4:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DialogForm",{attrs:{dialog:e.dialog,title:"Create Workspace","submit-label":"Create"},on:{completed:e.createWorkspace},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.submit;return[e.$auth.mode===e.Mode.Solid?n("v-select",{attrs:{items:e.$auth.user.storages,rules:e.rules.storage,label:"Storage"},model:{value:e.storage,callback:function(t){e.storage=t},expression:"storage"}}):e._e(),n("v-text-field",{ref:"name",attrs:{rules:e.rules.name,label:"Name","validate-on-blur":"",autofocus:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:r(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})]}}])})},a=[],o=n("4795"),i=n.n(o),u=n("2b0e"),s=n("2956"),l=n("80fb"),c=n("213b");function f(e){return p(e)||m(e)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function p(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function h(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e,t){try{var n=o[e](t),i=n.value}catch(e){return void a(e)}n.done?r(i):Promise.resolve(i).then(u,s)}function u(e){i("next",e)}function s(e){i("throw",e)}u()})}}var b=u["default"].extend({components:{DialogForm:s["a"]},props:{dialog:{type:Object,required:!0}},data:function(){return{storage:"",name:""}},computed:{rules:function(){return{storage:[l["a"].required],name:[l["a"].required,l["a"].maxLength(255)]}},Mode:function(){return c["a"]}},created:function(){var e=this;this.$auth.mode===c["a"].Solid&&this.$auth.withUser(function(t){e.storage=t.storages[0]})},mounted:function(){this.$nextTick(this.$refs.name.focus)},methods:{createWorkspace:function(){var e=h(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=[],e.t0=this.$auth.mode,e.next=e.t0===c["a"].Offline?4:e.t0===c["a"].Solid?6:8;break;case 4:return n=[this.name],e.abrupt("break",8);case 6:return n=[this.storage,this.name],e.abrupt("break",8);case 8:this.$ui.completeDialog(this.dialog.id),this.$ui.wrapAsyncOperation((t=this.$workspaces).createWorkspace.apply(t,f(n)),"Creating ".concat(this.name," workspace..."));case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}),g=b,v=n("2877"),y=Object(v["a"])(g,r,a,!1,null,null,null);y.options.__file="CreateWorkspace.vue";t["default"]=y.exports}}]);
//# sourceMappingURL=chunk-6604f659.83a8660b.js.map