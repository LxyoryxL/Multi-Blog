webpackJsonp([8],{OpX7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),s=n.n(r),o=n("NYxO"),a={data:function(){return{username:"",password:""}},methods:s()({},Object(o.b)(["login"]),{onSubmit:function(){var e=this;this.login({username:this.username,password:this.password}).then(function(){e.$router.push({path:e.$route.query.redirect||"/"})})},onReset:function(){this.username="",this.password=""}})},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("h4",[e._v("账号")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"请输入账号"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),n("h4",[e._v("密码")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onSubmit}},[e._v("登录")]),e._v(" "),n("el-button",{attrs:{type:"primary",plain:""},on:{click:e.onReset}},[e._v("重置")])],1)},staticRenderFns:[]};var u=n("VU/8")(a,i,!1,function(e){n("Sj0X")},null,null);t.default=u.exports},Sj0X:function(e,t){}});
//# sourceMappingURL=8.01dffd5e934b159a7f6b.js.map