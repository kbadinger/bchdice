(this.webpackJsonpdroplist=this.webpackJsonpdroplist||[]).push([[0],{117:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),i=a.n(o),s=(a(78),a(8)),c=a.n(s),l=a(34),u=a(13),p=a(60),d=a(61),m=a(20),h=a(69),b=a(68),g=a(62),f=a(32),v=a(143),y=a(36),w=a(140),x=a(144),j=a(141),E=a(142),O=a(35),_=(a(116),a(117),{activeUser:null,accountName:"",dropItems:"",drops:[],statusDisplay:"",loading:!1}),D=[{protocol:"https",host:"chain.wax.io",port:""}],k={height:"250px",width:"150px"},C={border:10,borderColor:"green",borderStyle:"solid"},S={border:10,borderColor:"red",borderStyle:"solid"},B=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).renderLogoutBtn=function(){},n.handleDropUpdate=function(e){var t=e.target.value;n.setState((function(e){return Object(u.a)(Object(u.a)({},n.state),{},{dropItems:t})}))},n.searchDrop=function(){var e=Object(l.a)(c.a.mark((function e(t){var a,r,o,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a="0",r="1",o={},n.setState((function(e){return Object(u.a)(Object(u.a)({},n.state),{},{loading:!0})})),i=c.a.mark((function e(){var t,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a,e.next=3,n.searchAssets(a);case 3:for(l in t=e.sent,i=function(e){a=t.rows[e].asset_id,s=t.rows[e].template_id;var r=n.state.drops.findIndex((function(a){return a.template_id===t.rows[e].template_id}));if(r>=0){var i=n.state.drops[r];i.numberHad++,o[s]=1,n.state.drops[r]=i,n.setState((function(e){return Object(u.a)(Object(u.a)({},n.state),{},{have:Object.keys(o).length,drops:n.state.drops.sort((function(e,t){return e.numberHad-t.numberHad}))})}))}},t.rows)i(l);case 6:case"end":return e.stop()}}),e)}));case 5:if(a===r){e.next=9;break}return e.delegateYield(i(),"t0",7);case 7:e.next=5;break;case 9:n.setState((function(e){return Object(u.a)(Object(u.a)({},n.state),{},{loading:!1})}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.renderDropForm=function(){var e=n.state.dropItems;return r.a.createElement("div",null,n.state.loading?r.a.createElement("div",{style:{position:"absolute",backgroundPosition:"center",zIndex:"100",top:"50px",width:"100%",height:"400px",backgroundRepeat:"no-repeat",backgroundImage:"url(Square-1s-200px.gif)"}}):"",r.a.createElement("div",{style:{position:"relative",marginLeft:"auto",marginRight:"auto",width:"100%",marginTop:"40px",display:"table",marginBottom:"10px"}},r.a.createElement("div",{style:{position:"relative",verticalAlign:"middle",width:"100%",display:"table-cell"}},r.a.createElement("h2",{style:{marginBottom:"40px",textAlign:"center"}},"Draco Dice BCH Physical Collection Tools"),r.a.createElement("div",{style:{width:"550px",margin:"auto",verticalAlign:"middle"}},r.a.createElement(O.a,null,r.a.createElement(O.a.Group,{controlId:"dropItems"},r.a.createElement("div",{style:{width:"150%"}},r.a.createElement("div",{style:{width:"300px",float:"left"}},r.a.createElement(O.a.Control,{type:"text",name:"dropItems",placeholder:"Wallet",value:e,onChange:n.handleDropUpdate})),r.a.createElement("div",{style:{marginLeft:"305px"}},r.a.createElement(v.a,{onClick:n.searchDrop,variant:"contained"},"Search")))),r.a.createElement(y.a,{variant:"subtitle2",component:"h2"},n.state.statusDisplay))),r.a.createElement("div",{style:{margin:"auto",textAlign:"center",verticalAlign:"middle",paddingBottom:"50px",paddingTop:"25px",width:"900px"}},r.a.createElement("h3",null,"BCH Collection Draco Dice (Have ",n.state.have," of"," ",n.state.ctr,")"),r.a.createElement(w.a,{container:!0,spacing:4},n.state.drops.map((function(e,t){var a,n,o=e.name,i=e.numberHad,s="";return null!=e.imgTag&&e.imgTag.length>0&&(s=r.a.createElement("img",{style:k,src:e.imgTag,alt:"bch dice"})),r.a.createElement(w.a,{item:!0,xs:12,sm:6,md:4,key:e.drop_id},r.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return window.open("https://wax.atomichub.io/market?collection_name=dracodice&order=asc&schema_name=bcheroes1&sort=price&symbol=WAX&template_id="+e.template_id,"_blank")}},r.a.createElement(x.a,{style:i>0?C:S},r.a.createElement(j.a,{title:null!==(a=e.collection_name)&&void 0!==a?a:"",subheader:null!==(n=e.drop_id)&&void 0!==n?n:""}),r.a.createElement(E.a,null,s,r.a.createElement(y.a,{variant:"body2",color:"textSecondary",component:"p"},o,r.a.createElement("br",null),"Number of Assets: ",i)))))}))))))," ")},n.state=Object(u.a)(Object(u.a)({},_),{},{rows:[],drops:[],ctr:0,have:0,rpc:new g.JsonRpc("".concat(D[0].protocol,"://").concat(D[0].host))}),n.renderModalButton=n.renderModalButton.bind(Object(m.a)(n)),n.handleDropUpdate=n.handleDropUpdate.bind(Object(m.a)(n)),n.searchDrop=n.searchDrop.bind(Object(m.a)(n)),n.renderDropForm=n.renderDropForm.bind(Object(m.a)(n)),n.buyDrop=n.buyDrop.bind(Object(m.a)(n)),n.partition=function(e,t){var a,n,r=[];for(a=0,n=e.length;a<n;a+=t)r.push(e.substr(a,t));return r},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("run"),this._asyncRequest=this.state.rpc.get_table_rows({json:!0,code:"atomicassets",scope:"dracodice",table:"templates",lower_bound:"356879",limit:1e3,reverse:!1,show_payer:!1}).then((function(t){e._asyncRequest=null;var a=0;for(var n in t.rows){var r=t.rows[n];if("bcheroes1"===r.schema_name){a++;var o=Object(f.ObjectSchema)([{name:"name",type:"string"},{name:"img",type:"image"},{name:"series",type:"string"},{name:"rarity",type:"string"},{name:"material",type:"string"},{name:"style",type:"string"},{name:"face values",type:"string"},{name:"gameimg",type:"image"},{name:"video",type:"string"},{name:"shape",type:"string"}]),i=Object(f.deserialize)(r.immutable_serialized_data,o);r.name=i.name,r.numberHad=0,r.imgTag="https://ipfs.io/ipfs/"+i.img,e.state.drops.push(r)}}e.setState((function(t){return Object(u.a)(Object(u.a)({},e.state),{},{ctr:a,drops:e.state.drops})}))}))}},{key:"componentWillUnmount",value:function(){this._asyncRequest&&this._asyncRequest.cancel()}},{key:"buyDrop",value:function(){var e=Object(l.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.buyClaimContract(t,a);case 1:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){}},{key:"renderModalButton",value:function(){return r.a.createElement("p",{className:"ual-btn-wrapper"})}},{key:"searchAssets",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.state.rpc.get_table_rows({json:!0,code:"atomicassets",scope:this.state.dropItems,table:"assets",lower_bound:t,limit:1e3,reverse:!1,show_payer:!1});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.renderDropForm()}}]),a}(r.a.Component);B.displayName="BCH Draco collection";var I=B;var A=function(){return r.a.createElement(I,null)},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,145)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),H()},73:function(e,t,a){e.exports=a(123)},78:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.e32b13ed.chunk.js.map