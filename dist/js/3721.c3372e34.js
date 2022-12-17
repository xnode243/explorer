"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[3721],{87608:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toastification"},[a("div",{staticClass:"d-flex align-items-start"},[a("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[a("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),a("div",{staticClass:"d-flex flex-grow-1"},[a("div",[t.title?a("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?a("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),a("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():a("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},n=[],o=a(47389),r={components:{BAvatar:o.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=r,l=a(1001),c=(0,l.Z)(i,s,n,!1,null,"55dd3057",null),d=c.exports},33721:function(t,e,a){a.r(e),a.d(e,{default:function(){return rt}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{className:"container-md"}},[a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{md:"8",sm:"12"}},[a("b-card",[a("b-row",{staticClass:"mb-1"},[a("b-col",{staticClass:"d-flex justify-content-begin align-items-center",attrs:{lg:"4",md:"6",sm:"12"}},[a("b-button",{attrs:{id:"popover-trading-pairs",variant:"gradient-primary"}},[a("feather-icon",{attrs:{icon:"ListIcon"}})],1),a("h4",{staticClass:"text-primary font-weight-bolder text-nowrap ml-1"},[t._v(" "+t._s(t.base)+" / "+t._s(t.target)+" ")]),a("b-popover",{staticClass:"px-0",attrs:{target:"popover-trading-pairs",placement:"rightbottom",triggers:"hover",boundary:"scrollParent","boundary-padding":"0"}},[a("b-table",{staticClass:"ml-0 pl-0",attrs:{striped:"",hover:"",fields:t.fields,small:!0,items:t.pairs},scopedSlots:t._u([{key:"cell(pair)",fn:function(e){return[a("router-link",{attrs:{to:"/osmosis/osmosis/trade/"+e.item.id}},[t._v(" "+t._s(e.item.pair[0])+"/"+t._s(e.item.pair[1])+" ")])]}},{key:"cell(price)",fn:function(e){return[a("div",{staticClass:"text-right"},[a("small",{},[t._v(t._s(e.item.price))])])]}},{key:"cell(change)",fn:function(e){return[a("div",{staticClass:"text-right"},[a("small",{class:e.item.change>0?"text-success":"text-danger"},[t._v(t._s(e.item.change)+"%")])])]}}])})],1)],1),a("b-col",{staticClass:"d-flex justify-content-begin align-items-center"},[a("div",{staticClass:"mr-3 text-success font-weight-bolder"},[t._v(" "+t._s(t.latestPrice)+" ")]),a("div",{staticClass:"mr-3"},[a("small",[t._v("24h Change")]),a("div",{class:t.changesIn24H>0?"text-success":"text-danger"},[t._v(" "+t._s(t.changesIn24H)+"% ")])]),a("div",{staticClass:"mr-3"},[a("small",[t._v("24h High")]),a("div",[t._v(t._s(t.high24))])]),a("div",[a("small",[t._v("24h Low")]),a("div",[t._v(t._s(t.low24))])])])],1),t.loading?a("div",{staticClass:"d-flex justify-content-center mt-3"},[a("b-spinner",{attrs:{label:"Loading..."}}),t._v(" "+t._s(t.error)+" ")],1):a("summary-price-chart",{attrs:{"chart-data":t.marketChartData,"min-height":150}})],1)],1),a("b-col",{attrs:{md:"4",sm:"12"}},[a("b-card",[a("Place",{attrs:{pool:t.current,"denom-trace":t.denomTrace},on:{"update:pool":function(e){t.current=e}}})],1)],1)],1)],1)},n=[],o=a(26253),r=a(50725),i=a(15193),l=a(19113),c=a(67566),d=a(1759),u=a(8775),m=a(79643),h=a(54333),p=a(22742),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-tabs",{staticClass:"nav-fill",attrs:{small:"",pills:"","nav-class":0===t.tabIndex?"nav-pill-success":"nav-pill-danger"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[a("b-tab",{attrs:{title:"BUY","no-body":""}}),a("b-tab",{attrs:{title:"SELL","no-body":""}})],1),a("PlaceForm",{attrs:{type:t.tabIndex,pool:t.pool,"denom-trace":t.denomTrace}})],1)},v=[],f=a(51015),g=a(58887),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{attrs:{"bg-variant":"light-secondary","text-variant":"black"}},[a("div",{staticClass:"d-flex justify-content-between"},[a("span",{staticClass:"font-weight-bolder"},[t._v("Balance ")]),a("span",[t.currentDenom.startsWith("ibc/")?a("feather-icon",{directives:[{name:"b-modal",rawName:"v-b-modal.trading-deposte-window",modifiers:{"trading-deposte-window":!0}}],staticClass:"text-primary",attrs:{icon:"PlusSquareIcon"}}):t._e(),a("small",[t._v(" "+t._s(t.available)+" "+t._s(0===t.type?t.target:t.base)+" ")])],1)]),a("div",{staticClass:"d-flex justify-content-between mt-1"},[a("span",{staticClass:"font-weight-bolder"},[t._v("Price")]),a("span",[t._v(t._s(t.price)+" "),a("small",{staticClass:"text-muted mx-10"},[t._v(t._s(t.target)+" ≈")]),t._v(" 1 "),a("small",{staticClass:"text-muted mx-10"},[t._v(" "+t._s(t.base))]),t._v(" ")])]),a("div",{staticClass:"d-flex justify-content-between mt-1"},[a("span",{staticClass:"font-weight-bolder"},[t._v("Swap Fee")]),a("span",[t._v(t._s(t.fee)+"%")])])]),a("b-form-group",[a("div",[a("span",[t._v("Quantity")])]),a("b-input-group",{staticClass:"input-group-merge"},[a("b-form-input",{attrs:{id:"amount",type:"number",placeholder:"Quantity"},on:{change:function(e){return t.changeAmount()}},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),a("b-input-group-append",{attrs:{"is-text":""}},[t._v(" "+t._s(t.base)+" ")])],1),a("b-alert",{attrs:{variant:"danger",show:1===t.type&&t.amount>t.available}},[a("div",{staticClass:"alert-body"},[t._v(" Insufficient available amount ")])])],1),a("b-form-group",[a("div",{staticClass:"d-flex justify-content-between"},[a("span",[t._v("Volume")]),a("span",[t.localPrice>0?a("small",{staticClass:"text-muted mr-1"},[t._v("≈$"+t._s(t.localPrice))]):t._e(),a("feather-icon",{staticClass:"text-primary",attrs:{id:"popover-trading-setting",icon:"SettingsIcon"}})],1)]),a("b-input-group",{staticClass:"input-group-merge"},[a("b-form-input",{attrs:{id:"total",type:"number",placeholder:"Volume"},on:{change:function(e){return t.changeTotal()}},model:{value:t.total,callback:function(e){t.total=e},expression:"total"}}),a("b-input-group-append",{attrs:{"is-text":""}},[t._v(" "+t._s(t.target)+" ")])],1),a("b-alert",{attrs:{variant:"danger",show:0===t.type&&t.total>t.available}},[a("div",{staticClass:"alert-body"},[t._v(" Insufficient available amount ")])])],1),a("b-popover",{staticClass:"px-0",attrs:{target:"popover-trading-setting",placement:"left",triggers:"hover",boundary:"scrollParent","boundary-padding":"0"}},[a("b-form-group",[a("label",{attrs:{for:"slip"}},[t._v(" Slippage Tolerance ")]),a("div",{attrs:{id:"slip"}},[a("b-form-radio",{attrs:{value:"0.01",button:"","button-variant":"outline-secondary"},model:{value:t.slippage,callback:function(e){t.slippage=e},expression:"slippage"}},[t._v(" 1% ")]),a("b-form-radio",{staticClass:"px-1",attrs:{value:"0.025",button:"",block:"","button-variant":"outline-secondary"},model:{value:t.slippage,callback:function(e){t.slippage=e},expression:"slippage"}},[t._v(" 2.5% ")]),a("b-form-radio",{attrs:{value:"0.05",button:"","button-variant":"outline-secondary"},model:{value:t.slippage,callback:function(e){t.slippage=e},expression:"slippage"}},[t._v(" 5% ")])],1)])],1),a("b-form-group",{attrs:{label:"Signer","label-for":"wallet"}},[a("b-form-radio-group",{attrs:{inline:""},model:{value:t.wallet,callback:function(e){t.wallet=e},expression:"wallet"}},[a("b-form-radio",{attrs:{name:"wallet",value:"keplr"},model:{value:t.wallet,callback:function(e){t.wallet=e},expression:"wallet"}},[a("small",[t._v("Keplr")])]),a("b-form-radio",{attrs:{name:"wallet",value:"ledgerUSB"},model:{value:t.wallet,callback:function(e){t.wallet=e},expression:"wallet"}},[a("small",[t._v("Ledger(USB)")])]),a("b-form-radio",{staticClass:"mr-0",attrs:{name:"wallet",value:"ledgerBle"},model:{value:t.wallet,callback:function(e){t.wallet=e},expression:"wallet"}},[a("small",[t._v("Ledger(BLE)")])])],1)],1),a("b-form-group",[t.address?a("b-button",{attrs:{block:"",disabled:0===t.type?t.total>t.available:t.amount>t.available,variant:0===t.type?"success":"danger"},on:{click:function(e){return t.sendTx()}}},[t._v(" "+t._s(0===t.type?"Buy "+t.base:"Sell "+t.base)+" ")]):a("b-button",{attrs:{to:"/wallet/import",block:"",variant:"primary"}},[t._v(" Connect Wallet ")])],1),a("b-alert",{attrs:{variant:"danger",show:t.dismissCountDown,dismissible:""},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[a("div",{staticClass:"alert-body"},[t._v(" "+t._s(t.error)+" ")])]),a("b-alert",{staticClass:"mt-2",attrs:{variant:"danger",show:""}},[a("div",{staticClass:"alert-heading"},[t._v(" Note ")]),a("div",{staticClass:"alert-body"},[t._v(" Trading is not available. will open soon. "),a("div",{staticClass:"d-none"},[t._v(" If the execution price exceeds the "+t._s(100*t.slippage)+"% slippage protection, your order will be automatically cancelled ")])])]),a("deposite-window",{attrs:{symbol:0===t.type?t.target:t.base,"denom-trace":t.denomTrace[t.currentDenom]}})],1)},w=[],x=a(73106),C=a(22183),y=a(76398),k=a(87167),B=a(90224),T=a(4060),D=a(22418),I=a(87608),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{id:"trading-deposte-window",centered:"",size:"md",title:"Cross Chain Deposit Tokens","ok-title":"Send","hide-header-close":"",scrollable:"","ok-disabled":!t.address},on:{hidden:t.resetModal,ok:t.handleOk,show:t.init},scopedSlots:t._u([{key:"modal-header",fn:function(){},proxy:!0}])},[a("validation-observer",{ref:"simpleRules"},[a("b-form",[a("b-row",[a("b-col",[a("b-form-group",{attrs:{label:"Sender Address","label-for":"from"}},[a("validation-provider",{attrs:{rules:"required",name:"from"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("b-input-group",[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-avatar",{attrs:{src:t.selectedChain.logo,size:"18",variant:"light-primary",rounded:""}})],1),a("b-form-select",{attrs:{id:"from",options:t.addressOptions,state:!(s.length>0)&&null},on:{change:function(e){return t.loadBalance()}},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),a("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}])})],1)],1)],1),a("b-row",{staticClass:"d-none"},[a("b-col",[a("b-form-group",{attrs:{label:"Recipient Address","label-for":"Recipient"}},[a("validation-provider",{attrs:{rules:"required",name:"recipient"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("b-input-group",{staticClass:"mb-25"},[a("b-form-input",{attrs:{id:"Recipient",state:!(s.length>0)&&null},model:{value:t.recipient,callback:function(e){t.recipient=e},expression:"recipient"}})],1),a("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}])})],1)],1)],1),a("b-row",[a("b-col",[a("div",{staticClass:"d-flex justify-content-between"},[a("span",[t._v("Amount")]),a("span",[t.balance.amount>0?a("small",{staticClass:"mr-1"},[t._v("Available: "),a("b",{staticClass:"font-weight-bolder text-success"},[t._v(t._s(t.format(t.balance)))]),t._v(" "+t._s(t.symbol))]):t._e()])]),a("b-form-group",[a("validation-provider",{attrs:{rules:"required|regex:^([0-9\\.]+)$",name:"amount"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("b-input-group",{staticClass:"mb-25"},[a("b-form-input",{attrs:{id:"Amount",state:!(s.length>0)&&null,placeholder:"Input a number",type:"number"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}}),a("b-input-group-append",{attrs:{"is-text":""}},[t._v(" "+t._s(t.symbol)+" ")])],1),a("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}])})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{label:"Fee","label-for":"Fee"}},[a("validation-provider",{attrs:{rules:"required|integer",name:"fee"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("b-input-group",[a("b-form-input",{model:{value:t.fee,callback:function(e){t.fee=e},expression:"fee"}}),a("b-input-group-append",{attrs:{"is-text":""}},[t._v(" "+t._s(t.feeDenom)+" ")])],1),a("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}])})],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-form-group",[a("b-form-checkbox",{attrs:{name:"advance",value:"true"},model:{value:t.advance,callback:function(e){t.advance=e},expression:"advance"}},[a("small",[t._v("Advanced")])])],1)],1)],1),t.advance?a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{label:"Gas","label-for":"gas"}},[a("validation-provider",{attrs:{name:"gas"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("b-form-input",{attrs:{id:"gas",type:"number"},model:{value:t.gas,callback:function(e){t.gas=e},expression:"gas"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!1,230813745)})],1)],1),a("b-col",{attrs:{cols:"12"}},[a("b-form-group",{attrs:{label:"Memo","label-for":"Memo"}},[a("validation-provider",{attrs:{name:"memo"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("b-form-input",{attrs:{id:"Memo",max:"2"},model:{value:t.memo,callback:function(e){t.memo=e},expression:"memo"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}],null,!1,3795330796)})],1)],1)],1):t._e(),a("b-row",[a("b-col",[a("b-form-group",{attrs:{label:"Siger","label-for":"wallet"}},[a("validation-provider",{attrs:{rules:"required",name:"wallet"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("b-form-radio-group",{staticClass:"demo-inline-spacing",attrs:{stacked:""},model:{value:t.wallet,callback:function(e){t.wallet=e},expression:"wallet"}},[a("b-form-radio",{staticClass:"d-none d-md-block",attrs:{name:"wallet",value:"keplr"},model:{value:t.wallet,callback:function(e){t.wallet=e},expression:"wallet"}},[t._v(" Keplr ")]),a("b-form-radio",{attrs:{name:"wallet",value:"ledgerUSB"},model:{value:t.wallet,callback:function(e){t.wallet=e},expression:"wallet"}},[a("small",[t._v("Ledger(USB)")])]),a("b-form-radio",{staticClass:"mr-0",attrs:{name:"wallet",value:"ledgerBle"},model:{value:t.wallet,callback:function(e){t.wallet=e},expression:"wallet"}},[a("small",[t._v("Ledger(Bluetooth)")])])],1),a("small",{staticClass:"text-danger"},[t._v(t._s(s[0]))])]}}])})],1)],1)],1)],1)],1),t._v(" "+t._s(t.error)+" ")],1)],1)},S=[],q=a(12954),$=a(47389),F=a(54391),P=a(54909),N=a(90895),L=a(65098),j=a(27754),E=a(50742),O=a(33359),Z=a(27484),M=a.n(Z),z={name:"TransforDialogue",components:{BAvatar:$.SH,BModal:F.N,BRow:o.T,BCol:r.l,BForm:P.e,BInputGroup:T.w,BInputGroupAppend:D.B,BFormInput:C.e,BFormGroup:B.x,BFormSelect:N.K,BFormRadioGroup:k.Q,BFormRadio:y.g,BFormCheckbox:L.l,BInputGroupPrepend:j.P,ValidationProvider:q.d_,ValidationObserver:q._j,ToastificationContent:I.Z},props:{symbol:{type:String,default:()=>""},denomTrace:{type:Object,default:()=>{}}},data(){return{address:"",addressOptions:[],chainId:"",selectedChain:"",balance:{},token:"",amount:null,memo:"",recipient:null,fee:"800",feeDenom:"",wallet:"ledgerUSB",error:null,sequence:1,accountNumber:0,account:[],IBCDenom:{},gas:"200000",advance:!1,paths:{},destination:{},channels:[],timeoutHeight:{},required:E.C1,password:E.Bj,email:E.Do,min:E.VV,integer:E._L,url:E.HQ,alpha:E.Fq,between:E.vX,digits:E.nz,length:E.kE,alphaDash:E.F8}},methods:{recipientAddress(){const{chain:t}=this.$route.params,e=(0,h.getLocalAccounts)(),a=this.$store.state.chains.defaultWallet;if(e&&e[a]){const s=e[a].address.find((e=>e.chain===t));s&&(this.recipient=s.addr)}this.selectedChain=(0,m.bs)(this.symbol)},computeAccount(){this.recipientAddress();const t=(0,h.getLocalAccounts)();if(this.addressOptions=[],t){const e=Object.values(t);for(let t=0;t<e.length;t+=1){const a=e[t].address.find((t=>t.chain===this.selectedChain.chain_name));a&&(0===this.addressOptions.length&&(this.address=a.addr),this.addressOptions.push({value:a.addr,text:a.addr}))}}return[]},init(){if(this.destination=null,this.token="",this.computeAccount(),this.loadBalance(),this.denomTrace){const t=this.denomTrace.path.split("/");this.$http.getIBCChannel(t[1],t[0]).then((t=>{this.destination=t.channel.counterparty,this.timeoutHeight=t.proof_height}))}},loadBalance(){this.address&&(this.$http.getBankBalances(this.address,this.selectedChain).then((t=>{t&&t.length>0&&(this.balance=t.find((t=>(0,h.formatTokenDenom)(t.denom)===this.symbol)),this.denom=this.balance.denom,this.feeDenom=this.balance.denom)})),this.$http.getLatestBlock(this.selectedChain).then((t=>{this.chainId=t.block.header.chain_id;const e=(0,h.timeIn)(t.block.header.time,10,"m");this.error=e?"Client is not synced or blockchain is halted":null})),this.$http.getAuthAccount(this.address,this.selectedChain).then((t=>{t.value.base_vesting_account?(this.accountNumber=t.value.base_vesting_account.base_account.account_number,this.sequence=t.value.base_vesting_account.base_account.sequence,this.sequence||(this.sequence=0)):(this.accountNumber=t.value.account_number,this.sequence=t.value.sequence?t.value.sequence:0)})))},handleOk(t){t.preventDefault(),this.send().then((t=>{this.error=t}))},resetModal(){this.feeDenom="",this.error=null},format(t){return(0,h.formatToken)(t,{},6,!1)},async send(){if(!this.destination)return void(this.error="You have to select a destination");const t=M()().add(4,"hour"),e=[{typeUrl:"/ibc.applications.transfer.v1.MsgTransfer",value:{sourcePort:this.destination.port_id,sourceChannel:this.destination.channel_id,token:(0,O.coin)(Number((0,h.getUnitAmount)(this.amount,this.denomTrace.base_denom)),this.denomTrace.base_denom),sender:this.address,receiver:this.recipient,timeoutTimestamp:String(1e6*t.utc().valueOf())}}],a={amount:[{amount:this.fee,denom:this.feeDenom}],gas:this.gas},s={accountNumber:this.accountNumber,sequence:this.sequence,chainId:this.chainId};(0,h.sign)(this.wallet,this.chainId,this.address,e,a,this.memo,s).then((t=>{this.$http.broadcastTx(t,this.selectedChain).then((t=>{(0,h.setLocalTxHistory)({op:"ibc_sender",hash:t.txhash,time:new Date}),this.$bvModal.hide("trading-deposte-window"),this.$toast({component:I.Z,props:{title:"Transaction sent!",icon:"EditIcon",variant:"success"}})})).catch((t=>{this.error=t}))})).catch((t=>{this.error=t}))}}},H=z,R=a(1001),U=(0,R.Z)(H,A,S,!1,null,null,null),G=U.exports,V=function(t){return t&&t.__esModule?t:{default:t}};const X=V(a(41583));var W={components:{BAlert:x.F,BButton:i.T,BCard:u._,BFormInput:C.e,BFormRadio:y.g,BFormRadioGroup:k.Q,BFormGroup:B.x,BPopover:l.x,BInputGroup:T.w,BInputGroupAppend:D.B,FeatherIcon:p.Z,DepositeWindow:G,ToastificationContent:I.Z},props:{type:{type:Number,required:!0},pool:{type:Object,default:()=>{}},denomTrace:{type:[Array,Object],default:()=>[]}},data(){return{address:"",amount:"",total:"",slippage:.05,marks:[0,.01,.025,.05],balance:{},error:null,chainId:"osmosis-1",wallet:"keplr",dismissSecs:15,dismissCountDown:0}},computed:{base(){return(0,m.XC)(this.pool,this.denomTrace,"base")},target(){return(0,m.XC)(this.pool,this.denomTrace,"target")},price(){const t=this.$store.state.chains.quotes[this.base],e=this.$store.state.chains.quotes[this.target];return t&&e?(t.usd/e.usd).toFixed(4):"-"},localPrice(){const t=this.$store.state.chains.quotes[this.target];return t&&this.total>0?(t.usd*this.total).toFixed(2):"-"},currentDenom(){if(this.pool&&this.pool.poolAssets){const t=1===this.type?0:1,{denom:e}=this.pool.poolAssets[t].token;return e}return""},available(){if(this.pool&&this.pool.poolAssets){let t=0;return Array.isArray(this.balance)&&this.balance.forEach((e=>{e.denom===this.currentDenom&&(t=e.amount)})),(0,h.formatTokenAmount)(t,6,this.currentDenom)}return 0},fee(){return(0,h.percent)(this.pool?.poolParams?.swapFee||"")}},created(){this.initialAddress(),this.$http.getBankBalances(this.address).then((t=>{t&&t.length>0&&(this.balance=t)})),this.$http.getAuthAccount(this.address,this.selectedChain).then((t=>{t.value.base_vesting_account?(this.accountNumber=t.value.base_vesting_account.base_account.account_number,this.sequence=t.value.base_vesting_account.base_account.sequence,this.sequence||(this.sequence=0)):(this.accountNumber=t.value.account_number,this.sequence=t.value.sequence?t.value.sequence:0)}))},methods:{initialAddress(){const{chain:t}=this.$route.params,e=(0,h.getLocalAccounts)(),a=this.$store.state.chains.defaultWallet;if(e&&e[a]){const s=e[a].address.find((e=>e.chain===t));s&&(this.address=s.addr)}},formatAvailable(){},changeAmount(){this.total=parseFloat((this.amount*this.price).toFixed(6))},changeTotal(){this.amount=parseFloat((this.total/this.price).toFixed(6))},async sendTx(){const t=this.pool.poolAssets[0===this.type?0:1].token.denom,{denom:e}=this.pool.poolAssets[0===this.type?1:0].token,a=[{typeUrl:"/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",value:{sender:this.address,routes:[{poolId:X.default.fromString(this.pool.id),tokenOutDenom:t}],tokenIn:{denom:e,amount:X.default.fromNumber(parseInt(1e6*this.amount,10))},tokenOutMinAmount:X.default.fromNumber(parseInt(1e6*this.total,10))}}];if(0===a.length)return this.error="No delegation found",this.dismissCountDown=this.dismissSecs,"";if(!this.accountNumber)return this.error="Account number should not be empty!",this.dismissCountDown=this.dismissSecs,"";const s={amount:[{amount:"800",denom:"uomos"}],gas:"200000"},n={accountNumber:this.accountNumber,sequence:this.sequence,chainId:this.chainId};return(0,h.sign)(this.wallet,this.chainId,this.address,a,s,"Sent Via https://explorer.xnode243.xyz",n).then((t=>{this.$http.broadcastTx(t).then((t=>{(0,h.setLocalTxHistory)({op:"swap",hash:t.tx_response.txhash,time:new Date}),this.$toast({component:I.Z,props:{title:"Transaction sent!",icon:"EditIcon",variant:"success"}})})).catch((t=>{this.error=t}))})).catch((t=>{this.error=t,this.dismissCountDown=this.dismissSecs})),""},countDownChanged(t){this.dismissCountDown=t}}},Q=W,K=(0,R.Z)(Q,_,w,!1,null,"cb349ce4",null),Y=K.exports,J={components:{BTab:f.L,BTabs:g.M,PlaceForm:Y},props:{pool:{type:Object,default:()=>{}},denomTrace:{type:[Array,Object],default:()=>[]}},data:()=>({tabIndex:0})},tt=J,et=(0,R.Z)(tt,b,v,!1,null,"03961732",null),at=et.exports,st={components:{BRow:o.T,BCol:r.l,BButton:i.T,BPopover:l.x,BTable:c.h,BSpinner:d.X,Place:at,BCard:u._,FeatherIcon:p.Z},beforeRouteUpdate(t,e,a){const{poolid:s}=t.params;this.init(s),a()},data(){return{loading:!0,error:"",base:"",target:"",fields:["pair","price","change"],show:!1,pools:[],current:{},denomTrace:[],klineData:[],marketData:{},high24:0,low24:0}},computed:{pairs(){const t=this.pools.map((t=>{const e=t.poolAssets.map((t=>t.token.denom.startsWith("ibc/")?(0,h.formatTokenDenom)(this.denomTrace[t.token.denom]?this.denomTrace[t.token.denom].base_denom:" "):(0,h.formatTokenDenom)(t.token.denom)));return{id:t.id,pair:e,price:this.getPrice(e),change:this.getChanges(e)}}));return t},latestPrice(){return this.getPrice([this.base,this.target])},changesIn24H(){return this.getChanges([this.base,this.target])},marketChartData(){if(this.marketData&&this.marketData.prices){const t=this.marketData.prices.map((t=>t[0])),e=this.marketData.prices.map((t=>t[1]));return{labels:t,datasets:[{label:"Price",data:e,backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1,pointStyle:"dash",barThickness:15}]}}return{labels:[],datasets:[]}}},created(){const{poolid:t}=this.$route.params;this.$http.osmosis.getDenomTraces().then((e=>{this.denomTrace=e,this.$http.osmosis.getPools().then((e=>{this.pools=e,this.init(t)}))}))},methods:{getPrice(t){const e=this.$store.state.chains.quotes[t[0]],a=this.$store.state.chains.quotes[t[1]];return e&&a?(e.usd/a.usd).toFixed(4):"-"},getChanges(t){const e=this.$store.state.chains.quotes[t[0]],a=this.$store.state.chains.quotes[t[1]];return e&&a?(e.usd_24h_change/a.usd_24h_change).toFixed(2):"-"},init(t){this.high24=0,this.low24=0,this.current=this.pools.find((e=>e.id===t))||this.pools[0],this.base=(0,m.XC)(this.current,this.denomTrace,"base"),this.target=(0,m.XC)(this.current,this.denomTrace,"target"),this.$http.osmosis.getMarketData(m.N8[this.base],m.N8[this.target]).then((t=>{this.marketData=t,this.loading=!1;const e=Date.now()-864e5;t.prices.forEach((t=>{t[0]>e&&(t[1]>this.high24&&(this.high24=t[1]),(t[1]<this.low24||0===this.low24)&&(this.low24=t[1]))}))})).catch((t=>{this.error=`This feature is not avalable in your country. \n这个功能尚未对你的国家开放。${t}`}))}}},nt=st,ot=(0,R.Z)(nt,s,n,!1,null,"66d55951",null),rt=ot.exports},50742:function(t,e,a){a.d(e,{Fq:function(){return b},F8:function(){return g},vX:function(){return p},nz:function(){return f},Do:function(){return m},_L:function(){return v},kE:function(){return _},VV:function(){return h},Bj:function(){return w},C1:function(){return u},HQ:function(){return x}});var s=a(12954),n=a(34479),o=a(41709),r=a(25505);const i=t=>t>=0,l=t=>{const e=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/,a=e.test(t);return a},c=t=>{const e=/^(?:3[47][0-9]{13})$/,a=e.test(t);return a},d=t=>{if(void 0===t||null===t||0===t.length)return!0;const e=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return e.test(t)},u=(0,s.l7)("required",n.C1),m=(0,s.l7)("email",n.Do),h=(0,s.l7)("min",n.VV),p=((0,s.l7)("confirmed",n.GU),(0,s.l7)("regex",n.Sz),(0,s.l7)("between",n.vX)),b=(0,s.l7)("alpha",n.Fq),v=(0,s.l7)("integer",n._L),f=(0,s.l7)("digits",n.nz),g=(0,s.l7)("alpha-dash",n.E1),_=((0,s.l7)("alpha-num",n.oK),(0,s.l7)("length",n.kE)),w=((0,s.l7)("positive",{validate:i,message:"Please enter positive number!"}),(0,s.l7)("credit-card",{validate:c,message:"It is not valid credit card!"}),(0,s.l7)("password",{validate:l,message:"Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit"})),x=(0,s.l7)("url",{validate:d,message:"URL is invalid"});(0,s.NC)({en:{messages:r.s,names:{email:"Email",password:"Password"},fields:{password:{min:"{_field_} is too short, you want to get hacked?"}}},ar:{messages:o.s,names:{email:"البريد الإلكتروني",password:"كلمة السر"},fields:{password:{min:"كلمة السر قصيرة جداً سيتم اختراقك"}}}})}}]);