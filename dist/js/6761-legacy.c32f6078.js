"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[6761],{87608:function(e,t,a){a.d(t,{Z:function(){return d}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"toastification"},[a("div",{staticClass:"d-flex align-items-start"},[a("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:e.variant,size:"1.8rem"}},[a("feather-icon",{attrs:{icon:e.icon,size:"15"}})],1),a("div",{staticClass:"d-flex flex-grow-1"},[a("div",[e.title?a("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+e.variant,domProps:{textContent:e._s(e.title)}}):e._e(),e.text?a("small",{staticClass:"d-inline-block text-body",domProps:{textContent:e._s(e.text)}}):e._e()]),a("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(t){return e.$emit("close-toast")}}},[e.hideClose?e._e():a("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},n=[],s=a(47389),i={components:{BAvatar:s.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=i,c=a(1001),l=(0,c.Z)(o,r,n,!1,null,"55dd3057",null),d=l.exports},36761:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-alert",{attrs:{variant:"danger",show:!0,dismissible:""}},[a("h4",{staticClass:"alert-heading"},[e._v(" DISCLAIMER: ")]),a("div",{staticClass:"alert-body"},[a("span",[e._v("Ping.pub is maintained by the community, Everyone could add a chain to ping.pub. Some of those blockchains are not fully tested, Use at your own risk.")])])]),a("form-wizard",{ref:"wizard",staticClass:"steps-transparent mb-3 md",attrs:{color:"#7367F0",title:null,subtitle:null,shape:"square","finish-button-text":"Save","back-button-text":"Previous"},on:{"on-complete":e.formSubmitted}},[a("tab-content",{attrs:{title:"Device","before-change":e.validationFormDevice}},[a("validation-observer",{ref:"deviceRules",attrs:{tag:"form"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Select a device to connect","label-for":"device"}},[a("validation-provider",{attrs:{name:"device",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-radio-group",{attrs:{stacked:""},model:{value:e.device,callback:function(t){e.device=t},expression:"device"}},[a("b-form-radio",{staticClass:"mb-1 mt-1",attrs:{name:"device",value:"keplr",checked:""},model:{value:e.device,callback:function(t){e.device=t},expression:"device"}},[e._v(" Keplr ")]),a("b-form-radio",{staticClass:"mb-1",attrs:{name:"device",value:"ledger"},model:{value:e.device,callback:function(t){e.device=t},expression:"device"}},[e._v(" Ledger via WebUSB ")]),a("b-form-radio",{staticClass:"mb-1",attrs:{name:"device",value:"ledger2"},model:{value:e.device,callback:function(t){e.device=t},expression:"device"}},[e._v(" Ledger via Bluetooth ")]),a("b-form-radio",{staticClass:"mb-1 d-none",attrs:{name:"device",value:"metamask"},model:{value:e.device,callback:function(t){e.device=t},expression:"device"}},[e._v(" Metamask ")]),a("b-form-radio",{attrs:{name:"device",value:"address"},model:{value:e.device,callback:function(t){e.device=t},expression:"device"}},[e._v(" Address (Observe Only) ")])],1),"address"===e.device?a("b-form-input",{staticClass:"mt-1",attrs:{name:"address",placeholder:"cosmos1ev0vtddkl7jlwfawlk06yzncapw2x9quyxx75u"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}):e._e(),a("small",{staticClass:"text-danger"},[e._v(e._s(e.debug)+e._s(r[0]))])]}}])})],1)],1),e.device.startsWith("ledger")?a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"HD Path","label-for":"hdpath"}},[a("validation-provider",{attrs:{name:"HD Path",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{staticClass:"mt-1",attrs:{name:"hdpath",placeholder:"m/44'/118/0'/0/0"},model:{value:e.hdpath,callback:function(t){e.hdpath=t},expression:"hdpath"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}],null,!1,2397192972)})],1)],1):e._e()],1)],1)],1),a("tab-content",{attrs:{title:"Accounts","before-change":e.validationFormAddress}},[a("validation-observer",{ref:"accountRules",attrs:{tag:"form"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Account Name","label-for":"account_name"}},[a("validation-provider",{attrs:{name:"Account Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"account_name",state:!(r.length>0)&&null,placeholder:"Ping Nano X",readonly:e.edit},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),e.hdpath?a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"HD Path","label-for":"ir"}},[a("b-form-input",{attrs:{id:"ir",value:e.hdpath,readonly:""}})],1)],1):e._e(),e.accounts?a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Public Key","label-for":"ir"}},[a("validation-provider",{attrs:{name:"Public Key",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"ir",value:e.formatPubkey(e.accounts.pubkey),readonly:"",state:!(r.length>0)&&null}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}],null,!1,2851721389)})],1)],1):e._e(),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:"Derivate Address For Chains:"}},[a("validation-provider",{attrs:{name:"addrs",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("div",{staticClass:"demo-inline-spacing text-uppercase"},[a("b-row",e._l(e.chains,(function(t,r){return a("b-col",{key:r,staticClass:"mb-25",attrs:{xs:"12",md:"4",lg:"3"}},[a("b-form-checkbox",{attrs:{name:"addrs",value:r},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[a("b-avatar",{attrs:{src:t.logo,size:"18",variant:"light-primary",rounded:""}}),a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-primary",modifiers:{hover:!0,"v-primary":!0}}],class:e.hdpath.startsWith("m/44'/"+t.coin_type)?"text-success":"text-danger",attrs:{title:"Coin Type: "+t.coin_type}},[e._v(" "+e._s(t.chain_name))])],1)],1)})),1)],1),a("small",{staticClass:"text-success"},[e._v(e._s(r[0]))])]}}])})],1),a("b-alert",{attrs:{show:"",variant:"info"}},[a("div",{staticClass:"alert-heading"},[e._v(" IMPORTANT ")]),a("div",{staticClass:"alert-body"},[a("div",[e._v(" If you don't have Ledger, Do not import those addresses in "),a("b",{staticClass:"text-danger"},[e._v("RED")]),e._v(". Because these addresses are derived from different coin_type which is not as same as the official one ")])])])],1)],1)],1)],1),a("tab-content",{attrs:{title:"Confirmation"}},[a("div",{staticClass:"d-flex border-bottom mb-2"},[a("feather-icon",{staticClass:"mb-50",attrs:{icon:"UserIcon",size:"19"}}),a("h4",{staticClass:"mb-0 ml-50"},[e._v(" "+e._s(e.name)+" "),a("small",[e._v(" "+e._s(e.hdpath))])])],1),a("b-row",{staticClass:"mb-2"},e._l(e.addresses,(function(e){return a("b-col",{key:e.addr,attrs:{cols:"12"}},[a("b-input-group",{staticClass:"mb-25"},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-avatar",{attrs:{src:e.logo,size:"18",variant:"light-primary",rounded:""}})],1),a("b-form-input",{attrs:{value:e.addr}})],1)],1)})),1)],1)],1),a("b-alert",{attrs:{variant:"secondary",show:!e.accounts&&"keplr"===e.device}},[a("h4",{staticClass:"alert-heading"},[e._v(" Enable Keplr For "+e._s(e.chainId)+" ")]),a("div",{staticClass:"alert-body p-1"},[a("span",[e._v("If Keplr has not added "),a("code",[e._v(e._s(e.chainId))]),e._v(", We can enable it here.")]),a("b-form-textarea",{staticClass:"mt-1 mb-1",attrs:{value:e.keplr,rows:"10"}}),e.error?a("div",{staticClass:"text-danger"},[e._v(" "+e._s(e.error)+" ")]):e._e(),a("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.suggest()}}},[e._v(" Enable Keplr ")])],1)])],1)},n=[],s=a(16198),i=(a(35666),a(41539),a(54747),a(57327),a(21249),a(26699),a(32023),a(78783),a(33948),a(41637),a(74916),a(64765),a(68309),a(38862),a(9653),a(85498)),o=a(12954),c=a(87608),l=a(76133),d=a(92751),u=(a(15306),a(79562)),m=a(28972),p=a(88384),h=function(){function e(){(0,l.Z)(this,e)}return(0,d.Z)(e,[{key:"getAccounts",value:function(){var e=(0,s.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.ethereum.request({method:"eth_accounts"}).then((function(e){return e.map((function(e){return{pubkey:(0,m.fromHex)(e.substring(2)),address:(0,p.ethToEvmos)(e),algo:"ethsecp256k1"}}))})));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"sign",value:function(){var e=(0,s.Z)(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this.ethereum.request({method:"eth_signTypedData_v4",params:[t,JSON.stringify(a)]}));case 1:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()}],[{key:"create",value:function(t){var a=new e;return a.hdpath=(0,u.pathToString)(t).replace("m/","").replace("/60/","/60'/"),a.ethereum=window.ethereum,a}}]),e}(),f=a(73106),v=a(15193),b=a(47389),g=a(26253),_=a(50725),k=a(90224),x=a(22183),w=a(76398),y=a(65098),C=a(333),P=a(4060),S=a(27754),A=a(87167),D=a(5870),I=a(50742),R=a(54333),B={components:{BAlert:f.F,BButton:v.T,ValidationProvider:o.d_,ValidationObserver:o._j,FormWizard:i.FormWizard,TabContent:i.TabContent,BAvatar:b.SH,BRow:g.T,BCol:_.l,BFormGroup:k.x,BFormInput:x.e,BFormRadio:w.g,BFormCheckbox:y.l,BFormTextarea:C.y,BInputGroup:P.w,BInputGroupPrepend:S.P,BFormRadioGroup:A.Q,ToastificationContent:c.Z},directives:{"b-tooltip":D.o},data:function(){return{debug:"",device:"keplr",address:"",hdpath:"m/44'/118/0'/0/0",name:"",options:{},required:I.C1,selected:[],accounts:null,exludes:[],edit:!1,keplr:"",chainId:"",error:null}},computed:{chains:function(){var e=JSON.parse(localStorage.getItem("chains"));return this.exludes.forEach((function(t){delete e[t]})),e},addresses:function(){var e=this;if(this.accounts&&this.accounts.address){var t=(0,R.addressDecode)(this.accounts.address),a=t.data;return this.selected.map((function(t){if(e.chains[t]){var r=e.chains[t],n=r.logo,s=r.addr_prefix,i=r.coin_type,o=(0,R.addressEnCode)(s,a,i);return{chain:t,addr:o,logo:n,hdpath:e.hdpath}}return null})).filter((function(e){return null!=e}))}return[]}},mounted:function(){var e=this,t=this.$store.state.chains.selected;this.$http.getLatestBlock().then((function(a){e.chainId=a.block.header.chain_id,e.keplr=e.initParamsForKeplr(e.chainId,t)})),t&&t.chain_name&&!this.exludes.includes(t.chain_name)&&this.selected.push(t.chain_name);var a=new URLSearchParams(window.location.search).get("name"),r=(0,R.getLocalAccounts)();if(a&&r&&r[a]){var n=r[a];this.device=n.device,this.name=n.name,this.edit=!0,n.address&&(n.address.forEach((function(t){e.selected.includes(t.chain)||e.selected.push(t.chain)})),this.address=n.address[0].addr,this.hdpath=n.address[0].hdpath,this.localAddress()&&this.$refs.wizard.nextTab())}else this.hdpath="m/44'/".concat(t.coin_type,"/0'/0/0")},methods:{suggest:function(){var e=this;window.keplr&&window.keplr.experimentalSuggestChain(JSON.parse(this.keplr)).catch((function(t){e.error=t}))},initParamsForKeplr:function(e,t){var a=t.keplr_price_step||{low:.01,average:.025,high:.03};return JSON.stringify({chainId:e,chainName:t.chain_name,rpc:Array.isArray(t.rpc)?t.rpc[0]:t.rpc,rest:Array.isArray(t.api)?t.api[0]:t.api,bip44:{coinType:Number(t.coin_type)},coinType:Number(t.coin_type),bech32Config:{bech32PrefixAccAddr:t.addr_prefix,bech32PrefixAccPub:"".concat(t.addr_prefix,"pub"),bech32PrefixValAddr:"".concat(t.addr_prefix,"valoper"),bech32PrefixValPub:"".concat(t.addr_prefix,"valoperpub"),bech32PrefixConsAddr:"".concat(t.addr_prefix,"valcons"),bech32PrefixConsPub:"".concat(t.addr_prefix,"valconspub")},currencies:[{coinDenom:t.assets[0].symbol,coinMinimalDenom:t.assets[0].base,coinDecimals:Number(t.assets[0].exponent),coinGeckoId:t.assets[0].coingecko_id||"unknown"}],feeCurrencies:[{coinDenom:t.assets[0].symbol,coinMinimalDenom:t.assets[0].base,coinDecimals:Number(t.assets[0].exponent),coinGeckoId:t.assets[0].coingecko_id||"unknown",gasPriceStep:a}],gasPriceStep:a,stakeCurrency:{coinDenom:t.assets[0].symbol,coinMinimalDenom:t.assets[0].base,coinDecimals:Number(t.assets[0].exponent),coinGeckoId:t.assets[0].coingecko_id||"unknown"},features:t.keplr_features||[]},null,"\t")},formatPubkey:function(e){return"string"===typeof e?e:e?(0,m.toHex)(e):""},connect:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="ledger"===e.device?"usb":"bluetooth",t.abrupt("return",(0,R.getLedgerAddress)(a,e.hdpath));case 2:case"end":return t.stop()}}),t)})))()},cennectKeplr:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(window.getOfflineSigner&&window.keplr){t.next=3;break}return e.debug="Please install keplr extension",t.abrupt("return",null);case 3:return t.next=5,e.$http.getLatestBlock().then((function(e){return e.block.header.chain_id}));case 5:return a=t.sent,t.next=8,window.keplr.enable(a);case 8:return r=window.getOfflineSigner(a),t.abrupt("return",r.getAccounts());case 10:case"end":return t.stop()}}),t)})))()},connectMetamask:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(window.ethereum){t.next=3;break}return e.debug="Please install Metamask extension",t.abrupt("return",null);case 3:return a=h.create((0,u.stringToPath)(e.hdpath)),t.abrupt("return",a.getAccounts());case 5:case"end":return t.stop()}}),t)})))()},localAddress:function(){if(!this.address)return!1;try{var e=(0,R.addressDecode)(this.address),t=e.data;if(t)return this.accounts={address:this.address,pubkey:t},!0}catch(a){this.debug=a}return!1},formSubmitted:function(){var e=localStorage.getItem("accounts"),t=e?JSON.parse(e):{};t[this.name]={name:this.name,device:this.device,address:this.addresses},localStorage.setItem("accounts",JSON.stringify(t)),this.$store.state.chains.defaultWallet||this.$store.commit("setDefaultWallet",this.name),this.$toast({component:c.Z,props:{title:"Address Saved!",icon:"EditIcon",variant:"success"}}),this.$router.push("./accounts")},validationFormDevice:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=String(e.name).length>0,a){t.next=15;break}t.t0=e.device,t.next="keplr"===t.t0?5:"metamask"===t.t0?8:"ledger"===t.t0||"ledger2"===t.t0?11:14;break;case 5:return t.next=7,e.cennectKeplr().then((function(t){t&&(e.accounts=t[0],a=!0)}));case 7:return t.abrupt("break",15);case 8:return t.next=10,e.connectMetamask().then((function(t){t&&(e.accounts=t[0],a=!0)})).catch((function(t){e.debug=t}));case 10:return t.abrupt("break",15);case 11:return t.next=13,e.connect().then((function(t){t&&(e.accounts=t[0],a=!0)})).catch((function(t){e.debug=t}));case 13:return t.abrupt("break",15);case 14:a=e.localAddress();case 15:return t.abrupt("return",new Promise((function(t,r){e.$refs.deviceRules.validate().then((function(e){a&&e&&t(!0),r()}))})));case 16:case"end":return t.stop()}}),t)})))()},validationFormAddress:function(){var e=this;return new Promise((function(t,a){e.$refs.accountRules.validate().then((function(e){e?t(!0):a()}))}))}}},F=B,N=a(1001),z=(0,N.Z)(F,r,n,!1,null,null,null),E=z.exports},50742:function(e,t,a){a.d(t,{Fq:function(){return f},F8:function(){return g},vX:function(){return h},nz:function(){return b},Do:function(){return m},_L:function(){return v},kE:function(){return _},VV:function(){return p},Bj:function(){return k},C1:function(){return u},HQ:function(){return x}});var r=a(12954),n=a(34479),s=a(41709),i=a(25505),o=(a(74916),a(77601),function(e){return e>=0}),c=function(e){var t=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/,a=t.test(e);return a},l=function(e){var t=/^(?:3[47][0-9]{13})$/,a=t.test(e);return a},d=function(e){if(void 0===e||null===e||0===e.length)return!0;var t=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return t.test(e)},u=(0,r.l7)("required",n.C1),m=(0,r.l7)("email",n.Do),p=(0,r.l7)("min",n.VV),h=((0,r.l7)("confirmed",n.GU),(0,r.l7)("regex",n.Sz),(0,r.l7)("between",n.vX)),f=(0,r.l7)("alpha",n.Fq),v=(0,r.l7)("integer",n._L),b=(0,r.l7)("digits",n.nz),g=(0,r.l7)("alpha-dash",n.E1),_=((0,r.l7)("alpha-num",n.oK),(0,r.l7)("length",n.kE)),k=((0,r.l7)("positive",{validate:o,message:"Please enter positive number!"}),(0,r.l7)("credit-card",{validate:l,message:"It is not valid credit card!"}),(0,r.l7)("password",{validate:c,message:"Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit"})),x=(0,r.l7)("url",{validate:d,message:"URL is invalid"});(0,r.NC)({en:{messages:i.s,names:{email:"Email",password:"Password"},fields:{password:{min:"{_field_} is too short, you want to get hacked?"}}},ar:{messages:s.s,names:{email:"البريد الإلكتروني",password:"كلمة السر"},fields:{password:{min:"كلمة السر قصيرة جداً سيتم اختراقك"}}}})}}]);