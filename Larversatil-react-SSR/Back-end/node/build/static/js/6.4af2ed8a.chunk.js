(this.webpackJsonprecode=this.webpackJsonprecode||[]).push([[6],{60:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/cartaz.b71b8224.jpeg"},69:function(e,t,n){"use strict";var r=n(1),a=n(3),c=n(5),o=n.n(c),u=n(0),s=n.n(u),i=n(6),l=["xl","lg","md","sm","xs"],d=s.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,u=e.noGutters,d=e.as,f=void 0===d?"div":d,b=Object(a.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(i.a)(n,"row"),m=v+"-cols",j=[];return l.forEach((function(e){var t,n=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&j.push(""+m+r+"-"+t)})),s.a.createElement(f,Object(r.a)({ref:t},b,{className:o.a.apply(void 0,[c,v,u&&"no-gutters"].concat(j))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},93:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var r=n(2),a=n(56),c=n(69),o=n(1),u=n(3),s=n(18),i=n(0),l=n.n(i);var d=function(e,t){var n=Object(i.useRef)(!0);Object(i.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},f=n(27),b=n(70);function v(e){var t=function(e){var t=Object(i.useRef)(e);return t.current=e,t}(e);Object(i.useEffect)((function(){return function(){return t.current()}}),[])}var m=Math.pow(2,31)-1;function j(e,t,n){var r=n-Date.now();e.current=r<=m?setTimeout(t,r):setTimeout((function(){return j(e,t,n)}),m)}function p(){var e=Object(b.a)(),t=Object(i.useRef)();return v((function(){return clearTimeout(t.current)})),Object(i.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=m?t.current=setTimeout(r,a):j(t,r,Date.now()+a))},clear:n}}),[])}var O=n(5),h=n.n(O),x=n(30),N=n(16),E=n(14),y=n.n(E),w=n(19),k=n(26),g=Object(k.a)("carousel-caption"),I=n(6),S=l.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,a=e.bsPrefix,c=e.children,s=e.className,i=Object(u.a)(e,["as","bsPrefix","children","className"]),d=h()(s,Object(I.a)(a,"carousel-item"));return l.a.createElement(r,Object(o.a)({ref:t},i,{className:d}),c)}));S.displayName="CarouselItem";var C=S;function T(e,t){var n=0;return l.a.Children.map(e,(function(e){return l.a.isValidElement(e)?t(e,n++):e}))}var R=n(25),M=n(28),L={bsPrefix:y.a.string,as:y.a.elementType,slide:y.a.bool,fade:y.a.bool,controls:y.a.bool,indicators:y.a.bool,activeIndex:y.a.number,onSelect:y.a.func,onSlide:y.a.func,onSlid:y.a.func,interval:y.a.number,keyboard:y.a.bool,pause:y.a.oneOf(["hover",!1]),wrap:y.a.bool,touch:y.a.bool,prevIcon:y.a.node,prevLabel:y.a.string,nextIcon:y.a.node,nextLabel:y.a.string},P={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:l.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:l.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function D(e,t){var n=Object(w.a)(e,{activeIndex:"onSelect"}),r=n.as,a=void 0===r?"div":r,c=n.bsPrefix,b=n.slide,v=n.fade,m=n.controls,j=n.indicators,O=n.activeIndex,E=n.onSelect,y=n.onSlide,k=n.onSlid,g=n.interval,S=n.keyboard,C=n.onKeyDown,L=n.pause,P=n.onMouseOver,D=n.onMouseOut,A=n.wrap,G=n.touch,K=n.onTouchStart,J=n.onTouchMove,V=n.onTouchEnd,X=n.prevIcon,q=n.prevLabel,z=n.nextIcon,F=n.nextLabel,H=n.className,B=n.children,Q=Object(u.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),U=Object(I.a)(c,"carousel"),W=Object(i.useRef)(null),Y=Object(i.useState)("next"),Z=Y[0],$=Y[1],_=Object(i.useState)(!1),ee=_[0],te=_[1],ne=Object(i.useState)(!1),re=ne[0],ae=ne[1],ce=Object(i.useState)(O||0),oe=ce[0],ue=ce[1];re||O===oe||(W.current?$(W.current):$((O||0)>oe?"next":"prev"),b&&ae(!0),ue(O||0)),Object(i.useEffect)((function(){W.current&&(W.current=null)}));var se,ie=0;!function(e,t){var n=0;l.a.Children.forEach(e,(function(e){l.a.isValidElement(e)&&t(e,n++)}))}(B,(function(e,t){++ie,t===O&&(se=e.props.interval)}));var le=Object(f.a)(se),de=Object(i.useCallback)((function(e){if(!re){var t=oe-1;if(t<0){if(!A)return;t=ie-1}W.current="prev",E&&E(t,e)}}),[re,oe,E,A,ie]),fe=Object(s.a)((function(e){if(!re){var t=oe+1;if(t>=ie){if(!A)return;t=0}W.current="next",E&&E(t,e)}})),be=Object(i.useRef)();Object(i.useImperativeHandle)(t,(function(){return{element:be.current,prev:de,next:fe}}));var ve=Object(s.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(be.current)&&fe()})),me="next"===Z?"left":"right";d((function(){b||(y&&y(oe,me),k&&k(oe,me))}),[oe]);var je=U+"-item-"+Z,pe=U+"-item-"+me,Oe=Object(i.useCallback)((function(e){Object(M.a)(e),y&&y(oe,me)}),[y,oe,me]),he=Object(i.useCallback)((function(){ae(!1),k&&k(oe,me)}),[k,oe,me]),xe=Object(i.useCallback)((function(e){if(S&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void de(e);case"ArrowRight":return e.preventDefault(),void fe(e)}C&&C(e)}),[S,C,de,fe]),Ne=Object(i.useCallback)((function(e){"hover"===L&&te(!0),P&&P(e)}),[L,P]),Ee=Object(i.useCallback)((function(e){te(!1),D&&D(e)}),[D]),ye=Object(i.useRef)(0),we=Object(i.useRef)(0),ke=p(),ge=Object(i.useCallback)((function(e){ye.current=e.touches[0].clientX,we.current=0,"hover"===L&&te(!0),K&&K(e)}),[L,K]),Ie=Object(i.useCallback)((function(e){e.touches&&e.touches.length>1?we.current=0:we.current=e.touches[0].clientX-ye.current,J&&J(e)}),[J]),Se=Object(i.useCallback)((function(e){if(G){var t=we.current;Math.abs(t)>40&&(t>0?de(e):fe(e))}"hover"===L&&ke.set((function(){te(!1)}),g||void 0),V&&V(e)}),[G,L,de,fe,ke,g,V]),Ce=null!=g&&!ee&&!re,Te=Object(i.useRef)();Object(i.useEffect)((function(){var e,t;if(Ce)return Te.current=window.setInterval(document.visibilityState?ve:fe,null!=(e=null!=(t=le.current)?t:g)?e:void 0),function(){null!==Te.current&&clearInterval(Te.current)}}),[Ce,fe,le,g,ve]);var Re=Object(i.useMemo)((function(){return j&&Array.from({length:ie},(function(e,t){return function(e){E&&E(t,e)}}))}),[j,ie,E]);return l.a.createElement(a,Object(o.a)({ref:be},Q,{onKeyDown:xe,onMouseOver:Ne,onMouseOut:Ee,onTouchStart:ge,onTouchMove:Ie,onTouchEnd:Se,className:h()(H,U,b&&"slide",v&&U+"-fade")}),j&&l.a.createElement("ol",{className:U+"-indicators"},T(B,(function(e,t){return l.a.createElement("li",{key:t,className:t===oe?"active":void 0,onClick:Re?Re[t]:void 0})}))),l.a.createElement("div",{className:U+"-inner"},T(B,(function(e,t){var n=t===oe;return b?l.a.createElement(N.e,{in:n,onEnter:n?Oe:void 0,onEntered:n?he:void 0,addEndListener:x.a},(function(t){return l.a.cloneElement(e,{className:h()(e.props.className,n&&"entered"!==t&&je,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&pe)})})):l.a.cloneElement(e,{className:h()(e.props.className,n&&"active")})}))),m&&l.a.createElement(l.a.Fragment,null,(A||0!==O)&&l.a.createElement(R.a,{className:U+"-control-prev",onClick:de},X,q&&l.a.createElement("span",{className:"sr-only"},q)),(A||O!==ie-1)&&l.a.createElement(R.a,{className:U+"-control-next",onClick:fe},z,F&&l.a.createElement("span",{className:"sr-only"},F))))}var A=l.a.forwardRef(D);A.displayName="Carousel",A.propTypes=L,A.defaultProps=P,A.Caption=g,A.Item=C;var G=A,K=n(60);function J(){return Object(r.jsxs)(a.a,{children:[Object(r.jsx)("div",{class:"jumbotron jumbotron-fluid",children:Object(r.jsxs)("div",{class:"container",children:[Object(r.jsx)("h1",{class:"display-4",children:"Seja bem vindo(a)!"}),Object(r.jsxs)("p",{class:"lead",children:[" A loja de eletrdomesticos, que sempre te d\xe1 ",Object(r.jsxs)("em",{children:[" desconto",Object(r.jsx)("b",{children:"s"})]})," !"]})]})}),Object(r.jsx)(c.a,{className:"my-5"}),Object(r.jsxs)(G,{className:"mb-5",children:[Object(r.jsx)(G.Item,{children:Object(r.jsx)("img",{className:"d-block w-100",src:K.default})}),Object(r.jsx)(G.Item,{children:Object(r.jsx)("img",{className:"d-block w-100",src:K.default})}),Object(r.jsx)(G.Item,{children:Object(r.jsx)("img",{className:"d-block w-100",src:K.default})})]})]})}}}]);
//# sourceMappingURL=6.4af2ed8a.chunk.js.map