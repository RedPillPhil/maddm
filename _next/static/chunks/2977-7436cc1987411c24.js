"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2977],{7700:function(n,r,e){e.d(r,{r:function(){return O}});var t=e(70865),o=e(96670),i=e(26297),s=e(92228),a=e(52322),c=e(2784),u=e(27032),d=e(3411),l=e(79026),p=e(64152),f=e(57374),h=e(44427),v=e(41372),m=e(35892),x=e(60974),g=e(49255),Z=e(55294),y=e(70372),P=e(58124),j=e(15498),N=e(4073),T=e(67496);function k(){var n=(0,s.Z)(["\n  width: 100%;\n"]);return k=function(){return n},n}function w(){var n=(0,s.Z)(["\n  padding: 24px;\n"]);return w=function(){return n},n}function A(){var n=(0,s.Z)(["\n  padding: 24px 0;\n"]);return A=function(){return n},n}var b=d.ZP.div.withConfig({componentId:"sc-27b49a5d-0"})(k()),C=(0,d.ZP)(l.Tz).withConfig({componentId:"sc-27b49a5d-1"})(w()),E=(0,d.ZP)(l.lg).withConfig({componentId:"sc-27b49a5d-2"})(A());function O(n){var r=n.onDismiss,e=n.chainId,t=n.hash,o=n.currencyToAdd,i=(0,Z.$G)().t,s=(0,y.pu)(o,e);return(0,a.jsx)(b,{children:(0,a.jsxs)(C,{children:[(0,a.jsx)(E,{children:(0,a.jsx)(p.Z,{strokeWidth:.5,width:"90px",color:"primary"})}),(0,a.jsxs)(l.Tz,{gap:"12px",justify:"center",children:[(0,a.jsx)(f.Z,{fontSize:"20px",children:i("Transaction Submitted")}),e&&t&&(0,a.jsxs)(h.Z,{external:!0,small:!0,href:(0,N.C)(t,"transaction",e),children:[i("View on %site%",{site:(0,N.X0)(e)}),e===u.a_.BSC&&(0,a.jsx)(v.Z,{color:"primary",ml:"4px"})]}),o&&(0,a.jsx)(T.Z,{variant:"tertiary",mt:"12px",width:"fit-content",marginTextBetweenLogo:"6px",textOptions:T.L.TEXT_WITH_ASSET,tokenAddress:s.address,tokenSymbol:o.symbol,tokenDecimals:s.decimals,tokenLogo:s instanceof P.DT?s.logoURI:void 0}),(0,a.jsx)(m.Z,{onClick:r,mt:"20px",children:i("Close")})]})]})})}r.Z=function(n){var r=n.title,e=n.onDismiss,s=n.customOnDismiss,u=n.attemptingTxn,d=n.hash,l=n.pendingText,p=n.content,f=n.currencyToAdd,h=(0,i.Z)(n,["title","onDismiss","customOnDismiss","attemptingTxn","hash","pendingText","content","currencyToAdd"]),v=(0,j.g)().chainId,m=(0,c.useCallback)(function(){s&&s(),null==e||e()},[s,e]);return v?(0,a.jsx)(x.ZP,(0,o.Z)((0,t.Z)({title:r,headerBackground:"gradientCardHeader"},h),{onDismiss:m,children:u?(0,a.jsx)(g.P,{pendingText:l}):d?(0,a.jsx)(O,{chainId:v,hash:d,onDismiss:m,currencyToAdd:f}):p()})):null}},6187:function(n,r,e){var t=e(2784),o=e(27032),i=e(24273),s=e(61054),a=e(18733),c=e(15498);r.Z=function(){var n=(0,c.g)().chainId,r=(0,a.J)(!0,!0);return(0,t.useMemo)(function(){if(!n||!r){console.error("Could not instantiate GelatoLimitOrders: missing chainId or library");return}if(n===o.a_.BSC)try{return new i.GelatoLimitOrders(n,r,s.uX,!1)}catch(n){console.error("Could not instantiate GelatoLimitOrders: ".concat(n.message));return}},[n,r])}},87285:function(n,r,e){e.d(r,{UK:function(){return o},qL:function(){return P},tz:function(){return j}});var t,o,i=e(98788),s=e(45680),a=e(90711),c=e(55294),u=e(70355),d=e(47186);e(61054);var l=e(2784),p=e(50990);e(7014);var f=e(48891),h=e(4073);e(49980);var v=e(6187),m=e(89645),x=e(94579),g=e(27032),Z=e(87332),y=function(n,r,e){var t=(0,x.Ib)(null==n?void 0:n.address,!1),o=(0,l.useMemo)(function(){return[r,e]},[r,e]),i=(0,Z.Wk)(e?t:null,"allowance",o).result;return(0,l.useMemo)(function(){return n&&i?g.ih.fromRawAmount(n,i.toString()):void 0},[n,i])};function P(n,r){var e,t=(0,d.mA)().address,v=(0,m.d)().callWithGasPrice,g=(0,c.$G)().t,Z=(0,u.p)().toastError,P=(null==n?void 0:null===(e=n.currency)||void 0===e?void 0:e.isToken)?n.currency:void 0,j=y(P,null!=t?t:void 0,r),N=(0,f.wB)(null==P?void 0:P.address,r),T=(0,l.useMemo)(function(){var e;return n&&r?(null===(e=n.currency)||void 0===e?void 0:e.isNative)?o.APPROVED:j?j.lessThan(n)?N?o.PENDING:o.NOT_APPROVED:o.APPROVED:o.UNKNOWN:o.UNKNOWN},[n,j,N,r]),k=(0,x.Ib)(null==P?void 0:P.address),w=(0,f.h7)(),A=(0,l.useCallback)((0,i.Z)(function(){var e,t;return(0,s.__generator)(this,function(i){switch(i.label){case 0:if(T!==o.NOT_APPROVED)return Z(g("Error"),g("Approve was called unnecessarily")),console.error("approve was called unnecessarily"),[2,void 0];if(!P)return Z(g("Error"),g("No token")),console.error("no token"),[2,void 0];if(!k)return Z(g("Error"),g("Cannot find contract of the token %tokenAddress%",{tokenAddress:null==P?void 0:P.address})),console.error("tokenContract is null"),[2,void 0];if(!n)return Z(g("Error"),g("Missing amount to approve")),console.error("missing amount to approve"),[2,void 0];if(!r)return Z(g("Error"),g("No spender")),console.error("no spender"),[2,void 0];return e=!1,[4,k.estimateGas.approve(r,a.Bz).catch(function(){return e=!0,k.estimateGas.approve(r,n.quotient.toString()).catch(function(){return console.error("estimate gas failure"),Z(g("Error"),g("Unexpected error. Could not estimate gas for the approve.")),null})})];case 1:if(!(t=i.sent()))return[2,void 0];return[2,v(k,"approve",[r,e?n.quotient.toString():a.Bz],{gasLimit:(0,h.yC)(t)}).then(function(e){w(e,{summary:"Approve ".concat(n.currency.symbol),translatableSummary:{text:"Approve %symbol%",data:{symbol:n.currency.symbol}},approval:{tokenAddress:P.address,spender:r},type:"approve"})}).catch(function(n){throw(0,p.H)(n),console.error("Failed to approve token",n),(0,p.Z)(n)||Z(g("Error"),n.message),n})]}})}),[T,P,k,n,r,w,v,g,Z]);return[T,A]}function j(n){var r,e=(0,v.Z)();return P(n,null!==(r=null==e?void 0:e.erc20OrderRouter.address)&&void 0!==r?r:void 0)}(t=o||(o={}))[t.UNKNOWN=0]="UNKNOWN",t[t.NOT_APPROVED=1]="NOT_APPROVED",t[t.PENDING=2]="PENDING",t[t.APPROVED=3]="APPROVED"},8250:function(n,r,e){var t=e(52322);e(2784);var o=e(53620),i=e(90548);r.Z=function(n){var r=n.size,e=void 0===r?128:r;return(0,t.jsx)(o.ZP,{width:e,height:e,position:"relative",children:(0,t.jsx)(i.Z,{width:e,height:e,src:"https://mm.finance/madmeerkat/degen-logo.png",alt:"MM Degen Logo"})})}},49255:function(n,r,e){e.d(r,{P:function(){return h}});var t=e(92228),o=e(52322),i=e(55294),s=e(3411),a=e(79026),c=e(8250),u=e(57374);function d(){var n=(0,t.Z)(["\n  width: 100%;\n"]);return d=function(){return n},n}function l(){var n=(0,t.Z)(["\n  padding: 24px 0;\n"]);return l=function(){return n},n}var p=s.ZP.div.withConfig({componentId:"sc-aba0058e-0"})(d()),f=(0,s.ZP)(a.lg).withConfig({componentId:"sc-aba0058e-1"})(l());function h(n){var r=n.pendingText,e=(0,i.$G)().t;return(0,o.jsxs)(p,{children:[(0,o.jsx)(f,{children:(0,o.jsx)(c.Z,{})}),(0,o.jsxs)(a.Tz,{gap:"12px",justify:"center",children:[r?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Z,{fontSize:"20px",children:e("Waiting For Confirmation")}),(0,o.jsx)(a.Tz,{gap:"12px",justify:"center",children:(0,o.jsx)(u.Z,{bold:!0,small:!0,textAlign:"center",children:r})})]}):null,(0,o.jsx)(u.Z,{small:!0,color:"textSubtle",textAlign:"center",children:e("Confirm this transaction in your wallet")})]})]})}}}]);
//# sourceMappingURL=2977-7436cc1987411c24.js.map