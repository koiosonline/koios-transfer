(this["webpackJsonpkoios-transfertokens"]=this["webpackJsonpkoios-transfertokens"]||[]).push([[0],{204:function(n){n.exports=JSON.parse('[{"inputs":[{"internalType":"address[]","name":"recipients","type":"address[]"}],"name":"mintBulk","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},228:function(n,t){},237:function(n,t){},255:function(n,t){},257:function(n,t){},274:function(n,t){},275:function(n,t){},339:function(n,t){},341:function(n,t){},350:function(n,t){},352:function(n,t){},377:function(n,t){},379:function(n,t){},380:function(n,t){},385:function(n,t){},387:function(n,t){},400:function(n,t){},412:function(n,t){},415:function(n,t){},420:function(n,t){},431:function(n,t){},434:function(n,t){},490:function(n,t,e){},491:function(n,t,e){"use strict";e.r(t);var r=e(0),c=e.n(r),a=e(16),s=e.n(a),o=e(12),i=e.n(o),u=e(25),f=e(72),l=e(71),d=e.n(l),p=e(204),h=new d.a(d.a.givenProvider||"http://localhost:8545"),b=function(){var n=Object(u.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.ethereum){n.next=11;break}return window.web3=new d.a(window.ethereum),n.next=4,window.web3.eth.getChainId();case 4:if(n.t0=n.sent,4===n.t0){n.next=7;break}window.alert("Wrong chain");case 7:return n.next=9,j();case 9:n.next=12;break;case 11:window.alert("Metamask not detected!");case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),j=function(){var n=Object(u.a)(i.a.mark((function n(){var t;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new h.eth.Contract(p,"0x14AfcB62AC5b2BcB7329968e51c0F9571eB4c84C");case 3:t=n.sent,window.mintBulkAbi=t,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),x=e(15),m=function(){return Object(x.jsx)("header",{className:"app-header",children:Object(x.jsx)("h1",{children:"Transfer Titans"})})},w=e(522),v=[],k=[],O=function(){var n=Object(u.a)(i.a.mark((function n(t,e){var r,c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(v=[],k=[],k=e.split(","),console.log(k),r=0;r<k.length;r++)k[r]=k[r].trim(),console.log(k[r]),42!==k[r].length?(console.log("Removing item",k[r],"from index ",r),k.splice(r,1),r--):(c={address:k[r]},v.push(c));case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),g=function(){var n=Object(u.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",v);case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=function(){var n=Object(u.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",k);case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),_=function(){var n=Object(u.a)(i.a.mark((function n(){var t,e;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return t=n.sent,n.next=5,y();case 5:return e=n.sent,console.log(e),n.prev=7,n.next=10,window.mintBulkAbi.methods.mintBulk(e).send({from:t[0]});case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(7),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[7,12]])})));return function(){return n.apply(this,arguments)}}(),B=function(){b();var n=c.a.useState(""),t=Object(f.a)(n,2),e=t[0],r=(t[1],c.a.useState("")),a=Object(f.a)(r,2),s=a[0],o=a[1],l=c.a.useState([]),d=Object(f.a)(l,2),p=d[0],h=d[1],j=function(){var n=Object(u.a)(i.a.mark((function n(){var t;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g();case 2:t=n.sent,h(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();c.a.useEffect((function(){}));var v=function(){var n=Object(u.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O(e,s);case 2:j();case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(x.jsx)("section",{className:"home",children:Object(x.jsxs)("section",{className:"token-section",children:[Object(x.jsx)(m,{}),Object(x.jsxs)("div",{className:"token-section__inputs",children:[Object(x.jsx)(w.a,{className:"token-section__addresses",label:"Addresses",value:s,onChange:function(n){o(n.target.value)},variant:"outlined",fullWidth:!0}),Object(x.jsx)("button",{className:"token-section__submit-button",onClick:function(){return v()},children:"Submit"}),Object(x.jsx)("button",{className:"token-section__mint-button",onClick:function(){return _()},children:"Mint Tokens"})]}),Object(x.jsx)("div",{className:"token-section__transferlist",children:Object(x.jsxs)("table",{className:"token-section__transferlisttable",children:[Object(x.jsx)("thead",{children:Object(x.jsx)("tr",{children:Object(x.jsx)("th",{children:"Address"})})}),Object(x.jsx)("tbody",{children:p.map((function(n,t){return Object(x.jsx)("tr",{children:Object(x.jsx)("td",{children:n.address})},t)}))})]})})]})})},C=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,523)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;e(n),r(n),c(n),a(n),s(n)}))};e(490);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root")),C()}},[[491,1,2]]]);
//# sourceMappingURL=main.b63708b2.chunk.js.map