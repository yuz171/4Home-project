(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{255:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(1),i=(a=o)&&a.__esModule?a:{default:a};t.getComponentLocale=function(e,t,n,a){var o={};if(t&&t.antLocale&&t.antLocale[n])o=t.antLocale[n];else{var r=a();o=r.default||r}var s=(0,i.default)({},o);e.locale&&(s=(0,i.default)({},s,e.locale),e.locale.lang&&(s.lang=(0,i.default)({},o.lang,e.locale.lang)));return s},t.getLocaleCode=function(e){var t=e.antLocale&&e.antLocale.locale;if(e.antLocale&&e.antLocale.exist&&!t)return"zh-cn";return t}},561:function(e,t,n){"use strict";n(19),n(562)},562:function(e,t,n){},563:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(n(1)),o=y(n(35)),i=y(n(2)),r=y(n(5)),s=y(n(3)),l=y(n(4)),c=y(n(15)),u=v(n(0)),f=v(n(31)),h=y(n(109)),p=y(n(118)),d=n(255),m=n(564);function v(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function y(e){return e&&e.__esModule?e:{default:e}}var C=function(e){function t(e){(0,i.default)(this,t);var n=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit&&n.props.onSubmit(n.state.value||""),n.inputRef&&n.inputRef.blur()},n.onChange=function(e){n.state.focus||n.setState({focus:!0});var t=e.target.value;"value"in n.props||n.setState({value:t}),n.props.onChange&&n.props.onChange(t)},n.onFocus=function(){n.setState({focus:!0}),n.firstFocus=!0,n.props.onFocus&&n.props.onFocus()},n.onBlur=function(){var e;n.onBlurTimeout=(e=function(){n.blurFromOnClear||document.activeElement!==n.inputRef&&n.setState({focus:!1}),n.blurFromOnClear=!1},window.requestAnimationFrame?window.requestAnimationFrame(e):window.setTimeout(e,1)),n.props.onBlur&&(setTimeout(function(){document.body&&(document.body.scrollTop=document.body.scrollTop)},100),n.props.onBlur())},n.onClear=function(){n.doClear()},n.doClear=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];n.blurFromOnClear=e,"value"in n.props||n.setState({value:""}),n.props.onClear&&n.props.onClear(""),n.props.onChange&&n.props.onChange(""),e&&n.focus()},n.onCancel=function(){n.props.onCancel?n.props.onCancel(n.state.value||""):n.doClear(!1)},n.focus=function(){n.inputRef&&n.inputRef.focus()};var a=void 0;return a="value"in e?e.value||"":"defaultValue"in e?e.defaultValue:"",n.state={value:a,focus:!1},n}return(0,l.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){if(this.rightBtnRef){var e=window.getComputedStyle(this.rightBtnRef);this.rightBtnInitMarginleft=e.marginLeft}this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){if(this.syntheticPhRef)if(this.inputContainerRef&&this.inputContainerRef.className.indexOf(this.props.prefixCls+"-start")>-1){if(this.syntheticPhContainerRef){var e=this.syntheticPhContainerRef.getBoundingClientRect().width;this.syntheticPhRef.style.width=Math.ceil(e)+"px"}!this.props.showCancelButton&&this.rightBtnRef&&(this.rightBtnRef.style.marginRight="0")}else this.syntheticPhRef.style.width="100%",!this.props.showCancelButton&&this.rightBtnRef&&(this.rightBtnRef.style.marginRight="-"+(this.rightBtnRef.offsetWidth+(null!=this.rightBtnInitMarginleft?parseInt(this.rightBtnInitMarginleft,10):0))+"px")}},{key:"componentWillReceiveProps",value:function(e){"value"in e&&e.value!==this.state.value&&this.setState({value:e.value})}},{key:"componentWillUnmount",value:function(){var e;this.onBlurTimeout&&(e=this.onBlurTimeout,window.cancelAnimationFrame?window.cancelAnimationFrame(e):window.clearTimeout(e),this.onBlurTimeout=null)}},{key:"render",value:function(){var e,t=this,i=this.props,r=i.prefixCls,s=i.showCancelButton,l=i.disabled,f=i.placeholder,m=i.className,v=i.style,y=i.maxLength,C=(0,d.getComponentLocale)(this.props,this.context,"SearchBar",function(){return n(565)}).cancelText,g=this.state,b=g.value,w=g.focus,_=(0,c.default)(r,m,(0,o.default)({},r+"-start",!!(w||b&&b.length>0))),B=(0,c.default)(r+"-clear",(0,o.default)({},r+"-clear-show",!!(w&&b&&b.length>0))),R=(0,c.default)(r+"-cancel",(e={},(0,o.default)(e,r+"-cancel-show",!!(s||w||b&&b.length>0)),(0,o.default)(e,r+"-cancel-anim",this.firstFocus),e));return u.createElement("form",{onSubmit:this.onSubmit,className:_,style:v,ref:function(e){return t.inputContainerRef=e},action:"#"},u.createElement("div",{className:r+"-input"},u.createElement("div",{className:r+"-synthetic-ph",ref:function(e){return t.syntheticPhRef=e}},u.createElement("span",{className:r+"-synthetic-ph-container",ref:function(e){return t.syntheticPhContainerRef=e}},u.createElement("i",{className:r+"-synthetic-ph-icon"}),u.createElement("span",{className:r+"-synthetic-ph-placeholder",style:{visibility:f&&!b?"visible":"hidden"}},f))),u.createElement("input",(0,a.default)({type:"search",className:r+"-value",value:b,disabled:l,placeholder:f,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,ref:function(e){return t.inputRef=e},maxLength:y},(0,p.default)(this.props))),u.createElement(h.default,{activeClassName:r+"-clear-active"},u.createElement("a",{onClick:this.onClear,className:B}))),u.createElement("div",{className:R,onClick:this.onCancel,ref:function(e){return t.rightBtnRef=e}},this.props.cancelText||C))}}]),t}(u.Component);t.default=C,C.defaultProps=m.defaultProps,C.contextTypes={antLocale:f.object},e.exports=t.default},564:function(e,t,n){"use strict";function a(){}Object.defineProperty(t,"__esModule",{value:!0});t.defaultProps={prefixCls:"am-search",placeholder:"",onSubmit:a,onChange:a,onFocus:a,onBlur:a,onClear:a,showCancelButton:!1,disabled:!1}},565:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={cancelText:"\u53d6\u6d88"},e.exports=t.default},566:function(e,t,n){e.exports={root:"Search_root__2q837",list:"Search_list__1dQBQ",noHistory:"Search_noHistory__2_73W",tips:"Search_tips__3oC7E",tip:"Search_tip__iFVTo"}},599:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return C});n(561);var a=n(563),o=n.n(a),i=n(9),r=n.n(i),s=n(20),l=n(36),c=n(37),u=n(39),f=n(38),h=n(40),p=n(0),d=n.n(p),m=n(41),v=n(566),y=n.n(v),C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).cityId=Object(m.c)().value,n.timerId=null,n.state={searchTxt:"",tipsList:[]},n.onTipsClick=function(e){n.props.history.replace("/rent/add",{name:e.communityName,id:e.community})},n.renderTips=function(){return n.state.tipsList.map(function(e){return d.a.createElement("li",{key:e.community,className:y.a.tip,onClick:function(){return n.onTipsClick(e)}},e.communityName)})},n.handleSearchTxt=function(e){if(n.setState({searchTxt:e}),!e)return n.setState({tipsList:[]});clearTimeout(n.timerId),n.timerId=setTimeout(Object(s.a)(r.a.mark(function t(){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("/area/community",{params:{name:e,id:n.cityId}});case 2:a=t.sent,n.setState({tipsList:a.data.body});case 4:case"end":return t.stop()}},t)})),500)},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.history,t=this.state.searchTxt;return d.a.createElement("div",{className:y.a.root},d.a.createElement(o.a,{placeholder:"\u8bf7\u8f93\u5165\u5c0f\u533a\u6216\u5730\u5740",value:t,onChange:this.handleSearchTxt,showCancelButton:!0,onCancel:function(){return e.replace("/rent/add")}}),d.a.createElement("ul",{className:y.a.tips},this.renderTips()))}}]),t}(p.Component)}}]);
//# sourceMappingURL=16.ee1bfac9.chunk.js.map