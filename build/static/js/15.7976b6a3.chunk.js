(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{210:function(e,t,n){"use strict";n(211);var a=n(213),r=n.n(a),i=n(0),c=n.n(i),o=n(14),s=n(214),l=n.n(s);t.a=Object(o.f)(function(e){var t=e.children,n=e.history,a=e.onLeftClick,i=e.className,o=e.rightContent;return c.a.createElement(r.a,{className:[l.a.navBar,i||""].join(" "),mode:"light",icon:c.a.createElement("i",{className:"iconfont icon-back"}),onLeftClick:a||function(){return n.go(-1)},rightContent:o},t)})},211:function(e,t,n){"use strict";n(19),n(212)},212:function(e,t,n){},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(1)),r=u(n(2)),i=u(n(5)),c=u(n(3)),o=u(n(4)),s=u(n(15)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function u(e){return e&&e.__esModule?e:{default:e}}var f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},d=function(e){function t(){return(0,r.default)(this,t),(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,r=e.children,i=e.mode,c=e.icon,o=e.onLeftClick,u=e.leftContent,d=e.rightContent,h=f(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return l.createElement("div",(0,a.default)({},h,{className:(0,s.default)(n,t,t+"-"+i)}),l.createElement("div",{className:t+"-left",role:"button",onClick:o},c?l.createElement("span",{className:t+"-left-icon","aria-hidden":"true"},c):null,u),l.createElement("div",{className:t+"-title"},r),l.createElement("div",{className:t+"-right"},d))}}]),t}(l.Component);t.default=d,d.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}},e.exports=t.default},214:function(e,t,n){e.exports={navBar:"NavHeader_navBar__3a5BZ"}},385:function(e,t,n){},592:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return N});n(216);var a=n(217),r=n.n(a),i=n(9),c=n.n(i),o=n(20),s=n(36),l=n(37),u=n(39),f=n(38),d=n(40),h=n(0),y=n.n(h),m=n(18),p=n.n(m),v=n(352),x=n(41),C=n(210),g=(n(385),function(e){var t={};e.forEach(function(e){var n=e.short.substr(0,1);t[n]?t[n].push(e):t[n]=[e]});var n=Object.keys(t).sort();return{cityList:t,cityIndex:n}}),b=36,w=50,k=function(e){switch(e){case"#":return"\u5f53\u524d\u5b9a\u4f4d";case"hot":return"\u70ed\u95e8\u57ce\u5e02";default:return e.toUpperCase()}},O=["\u5317\u4eac","\u4e0a\u6d77","\u5e7f\u5dde","\u6df1\u5733"],N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(f.a)(t).call(this,e))).rowRenderer=function(e){var t=e.key,a=e.index,r=(e.isScrolling,e.isVisible,e.style),i=n.state,c=i.cityIndex,o=i.cityList,s=c[a];return y.a.createElement("div",{key:t,style:r,className:"city"},y.a.createElement("div",{className:"title"},k(s)),o[s].map(function(e){return y.a.createElement("div",{className:"name",key:e.value,onClick:function(){return n.changeCity(e)}},e.label)}))},n.getRowHeight=function(e){var t=e.index,a=n.state,r=a.cityList,i=a.cityIndex;return b+r[i[t]].length*w},n.onRowsRendered=function(e){var t=e.startIndex;n.state.activeIndex!==t&&n.setState({activeIndex:t})},n.state={cityList:{},cityIndex:[],activeIndex:0},n.cityListComponent=y.a.createRef(),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCityList();case 2:this.cityListComponent.current.measureAllRows();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getCityList",value:function(){var e=Object(o.a)(c.a.mark(function e(){var t,n,a,r,i,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:8080/area/city?level=1");case 2:return t=e.sent,n=g(t.data.body),a=n.cityList,r=n.cityIndex,e.next=6,p.a.get("http://localhost:8080/area/hot");case 6:return i=e.sent,a.hot=i.data.body,r.unshift("hot"),e.next=11,Object(x.d)();case 11:o=e.sent,a["#"]=[o],r.unshift("#"),this.setState({cityList:a,cityIndex:r});case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"changeCity",value:function(e){var t=e.label,n=e.value;O.indexOf(t)>-1?(localStorage.setItem("hkzf_city",JSON.stringify({label:t,value:n})),this.props.history.go(-1)):r.a.info("\u8be5\u57ce\u5e02\u6682\u65e0\u623f\u6e90\u6570\u636e",1,null,!1)}},{key:"renderCityIndex",value:function(){var e=this,t=this.state,n=t.cityIndex,a=t.activeIndex;return n.map(function(t,n){return y.a.createElement("li",{className:"city-index-item",key:t,onClick:function(){e.cityListComponent.current.scrollToRow(n)}},y.a.createElement("span",{className:a===n?"index-active":""},"hot"===t?"\u70ed":t.toUpperCase()))})}},{key:"render",value:function(){var e=this;return y.a.createElement("div",{className:"citylist"},y.a.createElement(C.a,null,"\u57ce\u5e02\u9009\u62e9"),y.a.createElement(v.a,null,function(t){var n=t.width,a=t.height;return y.a.createElement(v.c,{ref:e.cityListComponent,width:n,height:a,rowCount:e.state.cityIndex.length,rowHeight:e.getRowHeight,rowRenderer:e.rowRenderer,onRowsRendered:e.onRowsRendered,scrollToAlignment:"start"})}),y.a.createElement("ul",{className:"city-index"},this.renderCityIndex()))}}]),t}(y.a.Component)}}]);
//# sourceMappingURL=15.7976b6a3.chunk.js.map