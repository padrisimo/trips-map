(this["webpackJsonptrips-map"]=this["webpackJsonptrips-map"]||[]).push([[0],{140:function(e,t,n){e.exports=n(254)},254:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),i=n.n(l),c=(n(145),n(19)),o=n.n(c),u=n(41),s=n(52),p=n(9),f=n(121),d={lat:41.3910524,lng:2.1806449},m=n.n(f).a.create({baseURL:"https://europe-west1-metropolis-fe-test.cloudfunctions.net/api"}),v=function(e,t,n){var l=r.a.createContext();return{Context:l,Provider:function(i){var c=i.children,o=Object(a.useReducer)(e,n),u=Object(p.a)(o,2),f=u[0],d=u[1],m={};for(var v in t)m[v]=t[v](d);return r.a.createElement(l.Provider,{value:Object(s.a)({state:f},m)},c)}}}((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{error:null,loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"get_trips":return Object(s.a)({},e,{loading:!1,results:t.payload});case"get_trips_fail":return Object(s.a)({},e,{loading:!1,error:t.payload});default:return e}}),{getTripsList:function(e){return Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.get("/trips");case 3:n=t.sent,e({type:"get_trips",payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e({type:"get_trips_fail",payload:"your device is about to explote, run 4 ur life!"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))}},[]),g=v.Context,E=v.Provider,b=n(258),h=n(260),j=b.a.Item;function O(e){var t=e.trips,n=e.selectTrip;if(!t)return null;return r.a.createElement(b.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},t.map((function(e,t){return r.a.createElement(j,{key:e.driverName+t,onClick:function(){return n(e)}},r.a.createElement("span",null,r.a.createElement(h.a,null),r.a.createElement("span",null,e.description)))})))}var y=n(5),k=n(6);function x(){var e=Object(y.a)(["\n  height: 2rem;\n  border: 1px solid white;\n  color: white;\n  margin: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: .5rem;\n"]);return x=function(){return e},e}var w=k.a.div(x()),C=n(74),_=n(261),T=n(262),S="#1890ff",M="#fff",z="#00152A",A="#000c17",I="#ff0000";function P(){var e=Object(y.a)(["\n  font-size: 1.2rem;\n  line-height: 4rem;\n  cursor: pointer;\n  transition: color 0.3s;\n  :hover {\n    color: ",";\n  }\n"]);return P=function(){return e},e}var W=k.a.span(P(),S);function D(e){var t=e.collapsed,n=Object(C.a)(e,["collapsed"]);return r.a.createElement(W,n,t?r.a.createElement(_.a,null):r.a.createElement(T.a,null))}var J=n(255);function K(){var e=Object(y.a)(["\n  @media (max-width: 414px) {\n    display: ",";\n  }\n"]);return K=function(){return e},e}var L=k.a.div(K(),(function(e){return e.collapsed?"block":"none"}));var N=function(e){var t=e.img,n=e.link,a=e.initial,l=void 0===a?"A":a,i=e.collapsed,c=void 0!==i&&i;return r.a.createElement(L,{collapsed:c},t||n?r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(J.a,{src:t})):r.a.createElement(J.a,null,l))},H=n(256);function R(){var e=Object(y.a)(["\n  background: ",";\n  overflow: hidden;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  position: relative;\n  @media (max-width: 414px) {\n    display: ",";\n  }\n"]);return R=function(){return e},e}function B(){var e=Object(y.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow-y: scroll;\n"]);return B=function(){return e},e}function G(){var e=Object(y.a)(["\n  background: ",";\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 1.5rem;\n  align-items: center;\n"]);return G=function(){return e},e}function U(){var e=Object(y.a)(["\n  min-height: 100vh;\n"]);return U=function(){return e},e}var V=Object(k.a)(H.a)(U()),Y=Object(k.a)(H.a.Header)(G(),M),q=H.a.Sider,F=k.a.div(B()),Q=Object(k.a)((function(e){return r.a.createElement(H.a.Content,e)}))(R(),M,(function(e){return e.collapsed?"block":"none"})),X=n(35),Z=n(138);function $(){var e=Object(y.a)(["\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  padding: 0;\n  height: 100%;\n"]);return $=function(){return e},e}var ee=k.a.div($()),te=function(e){var t=e.children,n=void 0===t?null:t,a=Object(C.a)(e,["children"]);return r.a.createElement(X.Map,Object.assign({zoom:11,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1},a),n)},ne=Object(X.GoogleApiWrapper)({apiKey:"AIzaSyD1aCwKJ42a5xoT7lk4EEgdHueW0vMY8TA"})((function(e){var t=e.google,n=e.activeTrip,l=e.handleMarkerClick,i=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1];return[function(e){var t=[{lat:e.origin.point._latitude,lng:e.origin.point._longitude},{lat:e.destination.point._latitude,lng:e.destination.point._longitude}];e.stops.length<=1&&r(t),function(){var n=Object(u.a)(o.a.mark((function n(){var a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.stops.filter((function(e){return void 0!==e.point})).map((function(e){return{lat:e.point._latitude,lng:e.point._longitude}}));case 2:a=n.sent,r([t[0]].concat(Object(Z.a)(a),[t[1]]));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()},n]}(),c=Object(p.a)(i,2),s=c[0],f=c[1];Object(a.useEffect)((function(){n&&s(n)}),[n]);var m=n?{lat:n.destination.point._latitude,lng:n.destination.point._longitude}:d;return r.a.createElement(ee,null,n?r.a.createElement(te,{google:t,center:m,initialCenter:d},r.a.createElement(X.Polyline,{path:f,strokeColor:I,strokeOpacity:1,strokeWeight:2}),r.a.createElement(X.Marker,{position:{lat:n.destination.point._latitude,lng:n.destination.point._longitude}}),n&&1!==n.stops.length?n.stops.map((function(e){return r.a.createElement(X.Marker,{onClick:function(){return l(e.id)},key:e.id,position:{lat:e.point._latitude,lng:e.point._longitude}})})):null,r.a.createElement(X.Marker,{position:{lat:n.origin.point._latitude,lng:n.origin.point._longitude}})):r.a.createElement(te,{google:t,initialCenter:d}))})),ae=n(56),re=n.n(ae);function le(){var e=Object(y.a)(["\n  color: white;\n  background: ",";\n  padding: 2rem;\n  font-size: .8rem;\n  width: 100%;\n"]);return le=function(){return e},e}var ie=k.a.div(le(),A),ce=function(e){var t=e.activeTrip;return r.a.createElement(ie,null,r.a.createElement("p",null," Destination: ",t.destination.address),r.a.createElement("p",null," Origin: ",t.origin.address),r.a.createElement("p",null," Driver: ",t.driverName),r.a.createElement("p",null," Status: ",t.status),r.a.createElement("p",null,"Start Time: ",re()(t.startTime).format("lll")),r.a.createElement("p",null,"End Time: ",re()(t.endTime).format("lll")))},oe=n(257),ue=n(263),se=n(264),pe=n(265),fe=n(266),de=n(267);function me(){var e=Object(y.a)(["\n  color: ",";\n"]);return me=function(){return e},e}var ve=k.a.span(me(),(function(e){return e.paid?"green":"tomato"}));var ge=function(e){var t=e.visible,n=e.onCancel,a=e.data;return a?r.a.createElement(oe.a,{title:r.a.createElement("span",null,r.a.createElement(ue.a,null)," Stop Info"),visible:t,onCancel:n,footer:null},r.a.createElement("p",null,r.a.createElement(se.a,null)," ",a.userName),r.a.createElement("p",null,r.a.createElement(pe.a,null)," ",a.address),r.a.createElement("p",null,r.a.createElement(fe.a,null)," ",re()(a.stopTime).format("lll")),r.a.createElement("p",null,r.a.createElement(de.a,null)," ",r.a.createElement(ve,{paid:a.paid},a.price,"\u20ac"))):null},Ee=n(259),be=function(e){Ee.a.config({top:100,duration:2,maxCount:3,rtl:!0}),Ee.a.error(e)},he="https://avatars2.githubusercontent.com/u/15703165?s=400&u=d08f78e7dd9f1f4dc3e06376cf282173af644c6f&v=4",je="https://github.com/padrisimo";var Oe=function(e){var t=e.trips,n=Object(a.useState)(!1),l=Object(p.a)(n,2),i=l[0],c=l[1],s=Object(a.useState)(null),f=Object(p.a)(s,2),d=f[0],v=f[1],g=Object(a.useState)(null),E=Object(p.a)(g,2),b=E[0],h=E[1],j=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(""),i=Object(p.a)(l,2),c=i[0],s=i[1];return[function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/stops/".concat(t));case 3:n=e.sent,r(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s("ups, there is no info for this stop");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),n,c,function(){s("")}]}(),y=Object(p.a)(j,4),k=y[0],x=y[1],C=y[2],_=y[3];return Object(a.useEffect)((function(){x&&h(x)}),[x]),Object(a.useEffect)((function(){C&&(be(C),_())}),[C]),r.a.createElement(H.a,null,r.a.createElement(q,{width:300,collapsedWidth:"0",trigger:null,collapsible:!0,collapsed:i},r.a.createElement(F,null,r.a.createElement("div",null,r.a.createElement(w,null,"Trips Map"),r.a.createElement(O,{trips:t,selectTrip:v})),d&&r.a.createElement(ce,{activeTrip:d}))),r.a.createElement(V,null,r.a.createElement(Y,null,r.a.createElement(D,{collapsed:i,onClick:function(){c(!i)}}),r.a.createElement(N,{collapsed:i,img:he,link:je})),r.a.createElement(Q,{collapsed:i?1:0},r.a.createElement(ge,{visible:!!b,onCancel:function(){return h(null)},data:b}),r.a.createElement(ne,{activeTrip:d,handleMarkerClick:function(e){e&&k(e)}}))))},ye=n(268);function ke(){var e=Object(y.a)(["\n  font-size: 48px;\n  background: ",";\n  color: ",";\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ke=function(){return e},e}function xe(){return r.a.createElement(we,null,r.a.createElement(ye.a,{spin:!0}))}var we=k.a.div(ke(),z,M),Ce=n(269);function _e(){var e=Object(y.a)(["\n  background: tomato;\n  color: ",";\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return _e=function(){return e},e}function Te(e){var t=e.msg;return r.a.createElement(Se,null,r.a.createElement(Ce.a,{style:{fontSize:48}}),r.a.createElement("p",null,t))}var Se=k.a.div(_e(),M);var Me=function(){var e=Object(a.useContext)(g),t=e.state,n=e.getTripsList;return Object(a.useEffect)((function(){n()}),[]),t.error?r.a.createElement(Te,{msg:t.error}):!t.results||t.loading?r.a.createElement(xe,null):r.a.createElement(Oe,{trips:t.results})};function ze(){return r.a.createElement(Me,null)}var Ae=function(){return r.a.createElement(E,null,r.a.createElement(ze,null))};i.a.render(r.a.createElement(Ae,null),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.fb16757e.chunk.js.map