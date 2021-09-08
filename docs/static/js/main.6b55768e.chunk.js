(this["webpackJsonpkoios-transfertokens"]=this["webpackJsonpkoios-transfertokens"]||[]).push([[0],{146:function(e){e.exports=JSON.parse('{"paramRinkeby":[{"chainId":"0x4","chainName":"Rinkeby","rpcUrls":["https://rinkeby.infura.io/v32d82f4a0940f44b781b714a309d7d199","wss://rinkeby.infura.io/ws/v3/2d82f4a0940f44b781b714a309d7d199"],"nativeCurrency":{"name":"Rinkeby Ether","symbol":"RIN","decimals":18}}],"paramxDai":[{"chainId":"0x64","chainName":"xDAI Chain","rpcUrls":["https://dai.poa.network"],"iconUrls":["https://gblobscdn.gitbook.com/spaces%2F-Lpi9AHj62wscNlQjI-l%2Favatar.png?alt=media"],"nativeCurrency":{"name":"xDAI","symbol":"xDAI","decimals":18}}],"paramFantom":[{"chainId":"0xFA","chainName":"Fantom Opera","rpcUrls":["https://rpcapi.fantom.network/1"],"iconUrls":["https://fantom.foundation/wp-content/themes/fantom-web/images/fantom_logo_white_new.svg"],"nativeCurrency":{"name":"ftm","symbol":"FTM","decimals":18},"blockExplorerUrls":["https://ftmscan.com/"]}]}')},245:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address[]","name":"recipients","type":"address[]"}],"name":"mintBulk","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},246:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address[]","name":"recipients","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"transferBulk","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},282:function(e,n){},291:function(e,n){},310:function(e,n){},312:function(e,n){},329:function(e,n){},330:function(e,n){},394:function(e,n){},396:function(e,n){},406:function(e,n){},408:function(e,n){},433:function(e,n){},435:function(e,n){},436:function(e,n){},441:function(e,n){},443:function(e,n){},456:function(e,n){},468:function(e,n){},471:function(e,n){},476:function(e,n){},487:function(e,n){},490:function(e,n){},53:function(e){e.exports=JSON.parse('{"koiosTestNFTAttendance":{"name":"Attendance Test NFT","chainId":4,"Type":"NFT","chainName":"Rinkeby","address":"0x14AfcB62AC5b2BcB7329968e51c0F9571eB4c84C"},"koiosTestNFTPresenter":{"name":"Presenter Test NFT","chainId":4,"Type":"NFT","chainName":"Rinkeby","address":"0x58062f890867d0d5bb263b55705339be4d043ee0"},"koiosAttendeeNFT":{"name":"Koios attendeeNFT Blockchain week 2021","chainId":100,"Type":"NFT","chainName":"xDai","address":"0x7F380c4af54eCD3350F159090e7855a0cDEB85Af"},"koiosPresenterNFT":{"name":"Koios presenterNFT Blockchain week 2021","chainId":100,"Type":"NFT","chainName":"xDai","address":"0x4Ee9b0Ad41067623BD86c634b29e387E8E66651D"},"TitanToken":{"name":"Koios Titan Token","chainId":4,"Type":"FT","chainName":"Rinkeby","address":"0xc571A04F4332093364ce38559f313bA2a766FbB9"},"T1tanToken":{"name":"Koios T1tan Token","chainId":4,"Type":"FT","chainName":"Rinkeby","address":"0x7f5BBa771806f18C32F3F51F403d0b7294A8E5Ec"}}')},543:function(e,n,t){},544:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(19),s=t.n(c),o=t(90),i=t(23),u=t(3),l=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Koios"}),Object(u.jsx)(o.b,{to:"/mintnonfungible",children:"Mint non fungible token"}),Object(u.jsx)("p",{}),Object(u.jsx)(o.b,{to:"/transferfungible",children:"Transfer ERC20 tokens"})]})},d=t(9),h=t.n(d),f=t(21),b=t(38),p=t(107),j=t.n(p),m=t(245),x=t(246),k=new j.a(j.a.givenProvider||"http://localhost:8545"),w=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=13;break}return window.web3=new j.a(window.ethereum),e.next=4,g();case 4:return e.next=6,T();case 6:window.ethereum.on("accountsChanged",T),window.ethereum.on("chainChanged",g),window.ethereum.on("networkChanged",g),window.ethereum.on("chainIdChanged",g),window.ethereum.autoRefreshOnNetworkChange=!1,e.next=14;break;case 13:window.alert("Metamask not detected!");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(f.a)(h.a.mark((function e(n){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=n.chainId,e.next=4,window.web3.eth.getChainId();case 4:if(e.t1=e.sent,e.t0!==e.t1){e.next=12;break}return e.next=8,new k.eth.Contract(m,n.address);case 8:t=e.sent,window.mintBulkAbi=t,e.next=14;break;case 12:window.alert("change your metamask wallet to ".concat(n.chainName)),console.log("You are on the wrong chain, change to ".concat(n.chainName));case 14:e.next=19;break;case 16:e.prev=16,e.t2=e.catch(0),console.log(e.t2);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=Object(f.a)(h.a.mark((function e(n){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=n.chainId,e.next=4,window.web3.eth.getChainId();case 4:if(e.t1=e.sent,e.t0!==e.t1){e.next=12;break}return e.next=8,new k.eth.Contract(x,n.address);case 8:t=e.sent,window.transferBulkAbi=t,e.next=14;break;case 12:window.alert("change your metamask wallet to ".concat(n.chainName)),console.log("You are on the wrong chain, change to ".concat(n.chainName));case 14:e.next=19;break;case 16:e.prev=16,e.t2=e.catch(0),console.log(e.t2);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=Object(f.a)(h.a.mark((function e(){var n,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.web3.eth.getChainId();case 2:return n=e.sent,e.next=5,window.web3.eth.net.getId();case 5:t=e.sent,console.log("We are on chain: ".concat(n," and network ").concat(t));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.eth.getAccounts();case 2:n=e.sent,console.log("We have accounts: ".concat(JSON.stringify(n)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){window.ethereum.request({method:"wallet_addEthereumChain",params:e})},y=function(){return Object(u.jsx)("header",{className:"app-header",children:Object(u.jsx)("h1",{children:"Transfer Titans"})})},_=t(583),C=t(582),F=t(581),A=t(574),I=t(580),B=[],S=[],D=function(){var e=Object(f.a)(h.a.mark((function e(n){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(B=[],S=[],S=n.split(","),t=0;t<S.length;t++)S[t]=S[t].trim(),console.log(S[t]),42!==S[t].length?(console.log("Removing item",S[t],"from index ",t),S.splice(t,1),t--):(a={address:S[t]},B.push(a));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),R=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",B);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",S);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(f.a)(h.a.mark((function e(){var n,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return n=e.sent,e.next=5,P();case 5:return t=e.sent,console.log(t),e.prev=7,e.next=10,window.mintBulkAbi.methods.mintBulk(t).send({from:n[0]});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(){return e.apply(this,arguments)}}(),M=t(146),J=t(53),U=function(){w();var e=r.a.useState(""),n=Object(b.a)(e,2),t=n[0],a=n[1],c=r.a.useState([]),s=Object(b.a)(c,2),o=s[0],i=s[1],l=r.a.useState(""),d=Object(b.a)(l,2),p=d[0],j=d[1],m=r.a.useState(""),x=Object(b.a)(m,2),k=x[0],O=x[1],g=function(){var e=Object(f.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:n=e.sent,i(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r.a.useEffect((function(){}));var T=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:g();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("section",{className:"mintnonfungible",children:[Object(u.jsx)("section",{className:"chain-contract-selection",children:Object(u.jsxs)("div",{className:"chain-contract-selection__select",children:[Object(u.jsxs)(A.a,{variant:"outlined",className:"chain-contract-selection__select-chain-dropdown",children:[Object(u.jsx)(C.a,{children:"Chain"}),Object(u.jsxs)(I.a,{value:p,onChange:function(e){switch(j(e.target.value),e.target.value){case"xDai":N(M.paramxDai);break;case"Fantom":N(M.paramFantom);break;default:console.log("Chain not found")}},label:"Chain",children:[Object(u.jsx)(F.a,{value:"Rinkeby",children:"Rinkeby"}),Object(u.jsx)(F.a,{value:"xDai",children:"xDai"}),Object(u.jsx)(F.a,{value:"Fantom",children:"Fantom"})]})]}),Object(u.jsxs)(A.a,{variant:"outlined",className:"chain-contract-selection__select-contract-dropdown",children:[Object(u.jsx)(C.a,{children:"Contract"}),Object(u.jsxs)(I.a,{value:k,onChange:function(e){switch(O(e.target.value),e.target.value){case"AttTestToken":v(J.koiosTestNFTAttendance);break;case"PresTestToken":v(J.koiosTestNFTPresenter);break;case"AttendeeToken":v(J.koiosAttendeeNFT);break;case"PresenterToken":v(J.koiosPresenterNFT);break;default:console.log("Contract not available")}},label:"Contract",children:[Object(u.jsx)(F.a,{value:"AttTestToken",children:"Attendance Test Token"}),Object(u.jsx)(F.a,{value:"PresTestToken",children:"Presenter Test Token"}),Object(u.jsx)(F.a,{value:"AttendeeToken",children:"Attendance Token xDai"}),Object(u.jsx)(F.a,{value:"PresenterToken",children:"Presenter Token xDai"})]})]})]})}),Object(u.jsxs)("section",{className:"token-section",children:[Object(u.jsx)(y,{}),Object(u.jsxs)("div",{className:"token-section__inputs",children:[Object(u.jsx)(_.a,{className:"token-section__addresses",label:"Addresses",value:t,onChange:function(e){a(e.target.value)},variant:"outlined",fullWidth:!0}),Object(u.jsx)("button",{className:"token-section__submit-button",onClick:function(){return T()},children:"Submit"}),Object(u.jsx)("button",{className:"token-section__mint-button",onClick:function(){return E()},children:"Mint Tokens"})]}),Object(u.jsx)("div",{className:"token-section__transferlist",children:Object(u.jsxs)("table",{className:"token-section__transferlisttable",children:[Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{children:Object(u.jsx)("th",{children:"Address"})})}),Object(u.jsx)("tbody",{children:o.map((function(e,n){return Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:e.address})},n)}))})]})})]})]})},W=[],q=[],K=[],L=function(){var e=Object(f.a)(h.a.mark((function e(n,t,a){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(W=[],q=[],[],q=t.split(","),K=a.split(","),console.log(q),r=0;r<q.length;r++)q[r]=q[r].trim(),K[r]=K[r].trim(),42!==q[r].length||"0"===K[r]?(console.log("Removing item",q[r],"from index ",r),q.splice(r,1),console.log("Removing item",K[r],"from index ",r),K.splice(r,1),r--):(c={address:q[r],amount:K[r]},W.push(c));case 7:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}(),Y=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(f.a)(h.a.mark((function e(){var n,t,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return n=e.sent,e.next=5,H();case 5:return t=e.sent,e.next=8,Q();case 8:for(a=e.sent,r=0;r<a.length;r++)a[r]=BigInt(parseInt(a[r])*Math.pow(10,18));return console.log(t),e.prev=11,e.next=14,window.transferBulkAbi.methods.transferBulk(t,a).send({from:n[0]});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(11),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[11,16]])})));return function(){return e.apply(this,arguments)}}(),G=function(){w();var e=r.a.useState(""),n=Object(b.a)(e,2),t=n[0],a=n[1],c=r.a.useState(""),s=Object(b.a)(c,2),o=s[0],i=s[1],l=r.a.useState(""),d=Object(b.a)(l,2),p=d[0],j=d[1],m=r.a.useState([]),x=Object(b.a)(m,2),k=x[0],v=x[1],g=r.a.useState(""),T=Object(b.a)(g,2),N=T[0],B=T[1],S=function(){var e=Object(f.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:n=e.sent,v(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r.a.useEffect((function(){}));var D=function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t,o,p);case 2:S();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("section",{className:"transferfungible",children:[Object(u.jsx)("section",{className:"token-selection",children:Object(u.jsx)("div",{className:"token-selection__select",children:Object(u.jsxs)(A.a,{variant:"outlined",className:"token-selection__select-token-dropdown",children:[Object(u.jsx)(C.a,{children:"Contract"}),Object(u.jsxs)(I.a,{value:N,onChange:function(e){switch(B(e.target.value),e.target.value){case"TitanToken":O(J.TitanToken);break;case"T1tanToken":O(J.T1tanToken);break;default:console.log("Contract not available")}},label:"Token",children:[Object(u.jsx)(F.a,{value:"TitanToken",children:"Titan Token"}),Object(u.jsx)(F.a,{value:"T1tanToken",children:"T1tan Token"})]})]})})}),Object(u.jsxs)("section",{className:"fungibletoken-section",children:[Object(u.jsx)(y,{}),Object(u.jsxs)("div",{className:"fungibletoken-section__inputs",children:[Object(u.jsx)(_.a,{className:"fungibletoken-section__names",label:"Names (optional)",value:t,onChange:function(e){a(e.target.value)},variant:"outlined",fullWidth:!0}),Object(u.jsx)(_.a,{className:"fungibletoken-section__addresses",label:"Addresses",value:o,onChange:function(e){i(e.target.value)},variant:"outlined",fullWidth:!0}),Object(u.jsx)(_.a,{className:"fungibletoken-section__amount",label:"Amount",value:p,onChange:function(e){j(e.target.value)},variant:"outlined",fullWidth:!0}),Object(u.jsx)("button",{className:"fungibletoken-section__submit-button",onClick:function(){return D()},children:"Submit"}),Object(u.jsx)("button",{className:"fungibletoken-section__mint-button",onClick:function(){return z()},children:"Transfer Tokens"})]}),Object(u.jsx)("div",{className:"token-section__transferlist",children:Object(u.jsxs)("table",{className:"token-section__transferlisttable",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Address"}),Object(u.jsx)("th",{children:"Amount"})]})}),Object(u.jsx)("tbody",{children:k.map((function(e,n){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.address}),Object(u.jsx)("td",{children:e.amount})]},n)}))})]})})]})]})},V=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/",exact:!0,component:l}),Object(u.jsx)(i.a,{path:"/mintnonfungible",exact:!0,component:U}),Object(u.jsx)(i.a,{path:"/transferfungible",exact:!0,component:G})]})})},X=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,585)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,s=n.getTTFB;t(e),a(e),r(e),c(e),s(e)}))};t(543);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(V,{})}),document.getElementById("root")),X()}},[[544,1,2]]]);
//# sourceMappingURL=main.6b55768e.chunk.js.map