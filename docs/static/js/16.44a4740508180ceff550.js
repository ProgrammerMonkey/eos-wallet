webpackJsonp([16],{"0sQo":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t("Dd8w"),n=t.n(o),a=t("woOf"),s=t.n(a),i=t("NYxO"),l=t("VSB1"),c={name:"buyram",data:function(){var e=function(e,r,t){""===r?t(new Error("请输入账户名")):/^[1-5a-z]+$/g.test(r)?t():t(new Error("名字只能包含 1-5 a-z ！"))};return{EOSForm:{payer:"",receiver:"",quant:"1.0000 EOS"},EOSRules:{payer:{required:!0,message:"请输入合约账户名",trigger:"change"},receiver:{required:!0,validator:e,trigger:"blur"},quant:{required:!0,message:"请输入",trigger:"blur"}},bytesForm:{payer:"",receiver:"",bytes:1024},bytesRules:{payer:{required:!0,message:"请输入合约账户名",trigger:"change"},receiver:{required:!0,validator:e,trigger:"blur"},bytes:{required:!0,message:"请输入",trigger:"blur"}},eosmonitorTransaction:"https://eosmonitor.io/txn",eosmonitorAccounts:"https://eosmonitor.io/accounts",eosmonitorAccount:"https://eosmonitor.io/account"}},methods:{handleSubmit:function(e){var r=this;this.$refs[e].validate(function(t){if(!t)return r.$message.warning("填写有误"),console.log("error submit!!"),!1;r.openFullScreenLoading(),"EOSForm"===e?r.buyram():r.buyrambytes()})},network:function(){var e=s()({keyProvider:this.privateKey},this.eosConfig);return this.$eosjs(e)},buyram:function(){var e=this;this.network().buyram(this.EOSForm).then(function(r){var t=r.transaction_id;e.loading.close(),e.$notify({title:"购买成功",message:'\n            <p>接下来可以</p>\n            <a href="'+e.eosmonitorTransaction+"/"+t+'" target="_blank">前往查看浏览器操作详情<a>\n            ',duration:4e3,type:"success",dangerouslyUseHTMLString:!0})}).catch(function(r){e.loading.close(),e.$message.error(Object(l.a)(r)),e.$notify({title:"购买失败",message:'\n            <p>可能的原因</p>\n            <ol>\n              <li>收款账户不存在</li>\n              <li>账户余额不足</li>\n            </ol>\n            <br>\n            前往查看账户余额： <a href="'+e.eosmonitorAccount+"/"+e.EOSForm.payer+'" target="_blank">'+e.EOSForm.payer+'<a>\n            <br>\n            前往查看账户是否存在：<a href="'+e.eosmonitorAccounts+'" target="_blank">'+e.EOSForm.receiver+"<a>\n            <br>\n            ",duration:4e3,type:"error",dangerouslyUseHTMLString:!0})})},buyrambytes:function(){var e=this;this.network().buyrambytes(this.bytesForm).then(function(r){var t=r.transaction_id;e.loading.close(),e.$notify({title:"购买成功",message:'\n            <p>接下来可以</p>\n            <a href="'+e.eosmonitorTransaction+"/"+t+'" target="_blank">前往查看浏览器操作详情<a>\n            ',duration:4e3,type:"success",dangerouslyUseHTMLString:!0})}).catch(function(r){e.loading.close(),e.$message.error(Object(l.a)(r)),e.$notify({title:"购买失败",message:'\n            <p>可能的原因</p>\n            <ol>\n              <li>接收账户不存在</li>\n              <li>账户余额不足</li>\n            </ol>\n            <br>\n            前往查看账户余额： <a href="'+e.eosmonitorAccount+"/"+e.EOSForm.payer+'" target="_blank">'+e.EOSForm.payer+'<a>\n            <br>\n            前往查看账户是否存在：<a href="'+e.eosmonitorAccounts+'" target="_blank">'+e.EOSForm.receiver+"<a>\n            <br>\n            ",duration:4e3,type:"error",dangerouslyUseHTMLString:!0})})},openFullScreenLoading:function(){this.loading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})}},computed:n()({},Object(i.c)({privateKey:function(e){return e.key.priKeys},accountNames:function(e){return e.accountNames},eosConfig:function(e){return e.eosConfig}}))},u={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-row",{staticClass:"container"},[t("el-col",{attrs:{xs:24,sm:22,lg:14}},[t("el-card",[t("h3",[e._v("购买ram，单位(EOS)")]),e._v(" "),t("el-form",{ref:"EOSForm",attrs:{model:e.EOSForm,rules:e.EOSRules}},[t("el-form-item",{attrs:{label:"付款账户",prop:"payer"}},[t("el-select",{attrs:{filterable:"",placeholder:"请选择账户"},model:{value:e.EOSForm.payer,callback:function(r){e.$set(e.EOSForm,"payer",r)},expression:"EOSForm.payer"}},e._l(e.accountNames,function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"接收账户",prop:"receiver"}},[t("el-input",{attrs:{maxlength:"12",placeholder:"字符范围 1-5 a-z"},model:{value:e.EOSForm.receiver,callback:function(r){e.$set(e.EOSForm,"receiver",r)},expression:"EOSForm.receiver"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"购买数量 例:2.0000 EOS",prop:"quant"}},[t("el-input",{attrs:{placeholder:"购买数量，单位为：EOS"},model:{value:e.EOSForm.quant,callback:function(r){e.$set(e.EOSForm,"quant",r)},expression:"EOSForm.quant"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.handleSubmit("EOSForm")}}},[e._v("确定购买")])],1)],1)],1),e._v(" "),t("el-card",[t("h3",[e._v("购买ram，单位为字节(Bytes)")]),e._v(" "),t("el-form",{ref:"bytesForm",attrs:{model:e.bytesForm,rules:e.bytesRules}},[t("el-form-item",{attrs:{label:"付款账户",prop:"payer"}},[t("el-select",{attrs:{filterable:"",placeholder:"请选择账户"},model:{value:e.bytesForm.payer,callback:function(r){e.$set(e.bytesForm,"payer",r)},expression:"bytesForm.payer"}},e._l(e.accountNames,function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"接收账户",prop:"receiver"}},[t("el-input",{attrs:{maxlength:"12",placeholder:"字符范围 1-5 a-z"},model:{value:e.bytesForm.receiver,callback:function(r){e.$set(e.bytesForm,"receiver",r)},expression:"bytesForm.receiver"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"购买大小 例:1024",prop:"bytes"}},[t("el-input",{attrs:{type:"number",placeholder:"购买ram，单位为：bytes且必须为整数"},model:{value:e.bytesForm.bytes,callback:function(r){e.$set(e.bytesForm,"bytes",e._n(r))},expression:"bytesForm.bytes"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.handleSubmit("bytesForm")}}},[e._v("确定购买")])],1)],1)],1)],1),e._v(" "),t("el-col",{staticClass:"aside-spaceing",attrs:{xs:24,sm:22,lg:8}},[t("el-card",{staticStyle:{color:"#909399"}},[t("h3",{staticStyle:{color:"#2c3e50"}},[e._v("提示：")]),e._v(" "),t("ol",[t("li",[e._v("账号格式 1-5 a-z")]),e._v(" "),t("li",[e._v("代币数量格式 数量+空格+符号")]),e._v(" "),t("li",[e._v("按EOS来购买时需保留四位小数 例：0.0001 EOS")]),e._v(" "),t("li",[e._v("按bytes来购买时 单位为 bytes")])])])],1)],1)},staticRenderFns:[]};var m=t("VU/8")(c,u,!1,function(e){t("aYJ1")},"data-v-754fd5b6",null);r.default=m.exports},aYJ1:function(e,r){}});
//# sourceMappingURL=16.44a4740508180ceff550.js.map