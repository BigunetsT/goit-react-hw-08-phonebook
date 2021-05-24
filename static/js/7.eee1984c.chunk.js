(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{102:function(e,t,n){},108:function(e,t,n){"use strict";var a=n(3),r=n(8),i=n(14);n(20);function s(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var o=n(0),l=n.n(o),c=n(23),u=n.n(c),p=!1,d=n(94),f="unmounted",h="exited",E="entering",m="entered",v="exiting",x=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r=h,a.appearStatus=E):r=m:r=t.unmountOnExit||t.mountOnEnter?f:h,a.state={status:r},a.nextCallback=null,a}Object(i.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===f?{status:h}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==E&&n!==m&&(t=E):n!==E&&n!==m||(t=v)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===E?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===h&&this.setState({status:f})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[u.a.findDOMNode(this),a],i=r[0],s=r[1],o=this.getTimeouts(),l=a?o.appear:o.enter;!e&&!n||p?this.safeSetState({status:m},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,s),this.safeSetState({status:E},(function(){t.props.onEntering(i,s),t.onTransitionEnd(l,(function(){t.safeSetState({status:m},(function(){t.props.onEntered(i,s)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:u.a.findDOMNode(this);t&&!p?(this.props.onExit(a),this.safeSetState({status:v},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:h},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:h},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:u.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],s=r[1];this.props.addEndListener(i,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===f)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(r.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l.a.createElement(d.a.Provider,{value:null},"function"===typeof n?n(e,a):l.a.cloneElement(l.a.Children.only(n),a))},t}(l.a.Component);function b(){}x.contextType=d.a,x.propTypes={},x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},x.UNMOUNTED=f,x.EXITED=h,x.ENTERING=E,x.ENTERED=m,x.EXITING=v;var g=x,C=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.remove(a):"string"===typeof n.className?n.className=s(n.className,a):n.setAttribute("class",s(n.className&&n.className.baseVal||"",a)));var n,a}))},N=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var a=t.resolveArguments(e,n),r=a[0],i=a[1];t.removeClasses(r,"exit"),t.addClass(r,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=t.resolveArguments(e,n),r=a[0],i=a[1]?"appear":"enter";t.addClass(r,i,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=t.resolveArguments(e,n),r=a[0],i=a[1]?"appear":"enter";t.removeClasses(r,i),t.addClass(r,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,a="string"===typeof n,r=a?""+(a&&n?n+"-":"")+e:n[e];return{baseClassName:r,activeClassName:a?r+"-active":n[e+"Active"],doneClassName:a?r+"-done":n[e+"Done"]}},t}Object(i.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var a=this.getClassNames(t)[n+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&r&&(a+=" "+r),"active"===n&&e&&e.scrollTop,a&&(this.appliedClasses[t][n]=a,function(e,t){e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.add(a):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,a)||("string"===typeof n.className?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a)));var n,a}))}(e,a))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],a=n.base,r=n.active,i=n.done;this.appliedClasses[t]={},a&&C(e,a),r&&C(e,r),i&&C(e,i)},n.render=function(){var e=this.props,t=(e.classNames,Object(r.a)(e,["classNames"]));return l.a.createElement(g,Object(a.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(l.a.Component);N.defaultProps={classNames:""},N.propTypes={};t.a=N},109:function(e,t,n){"use strict";var a=n(21),r=n(38),i=n(49),s=n.n(i),o=n(0),l=n.n(o),c=n(50);var u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),null)};function p(e){return!e||"#"===e.trim()}var d=l.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"a":n,s=e.disabled,o=e.onKeyDown,c=Object(r.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=c.href,n=c.onClick;(s||p(t))&&e.preventDefault(),s?e.stopPropagation():n&&n(e)};return p(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),s&&(c.tabIndex=-1,c["aria-disabled"]=!0),l.a.createElement(i,Object(a.a)({ref:t},c,{onClick:d,onKeyDown:u((function(e){" "===e.key&&(e.preventDefault(),d(e))}),o)}))}));d.displayName="SafeAnchor";var f=d,h=l.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.variant,o=e.size,u=e.active,p=e.className,d=e.block,h=e.type,E=e.as,m=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(c.a)(n,"btn"),x=s()(p,v,u&&"active",i&&v+"-"+i,d&&v+"-block",o&&v+"-"+o);if(m.href)return l.a.createElement(f,Object(a.a)({},m,{as:E,ref:t,className:s()(x,m.disabled&&"disabled")}));t&&(m.ref=t),h?m.type=h:E||(m.type="button");var b=E||"button";return l.a.createElement(b,Object(a.a)({},m,{className:x}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=h},110:function(e,t,n){"use strict";var a=n(8),r=n(3),i=n(39),s=n(14),o=(n(20),n(0)),l=n.n(o),c=n(94);function u(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(o.isValidElement)(e)?t(e):e}(e)})),n}function p(e,t,n){return null!=n[t]?n[t]:e.props[t]}function d(e,t,n){var a=u(e.children),r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var a,r=Object.create(null),i=[];for(var s in e)s in t?i.length&&(r[s]=i,i=[]):i.push(s);var o={};for(var l in t){if(r[l])for(a=0;a<r[l].length;a++){var c=r[l][a];o[r[l][a]]=n(c)}o[l]=n(l)}for(a=0;a<i.length;a++)o[i[a]]=n(i[a]);return o}(t,a);return Object.keys(r).forEach((function(i){var s=r[i];if(Object(o.isValidElement)(s)){var l=i in t,c=i in a,u=t[i],d=Object(o.isValidElement)(u)&&!u.props.in;!c||l&&!d?c||!l||d?c&&l&&Object(o.isValidElement)(u)&&(r[i]=Object(o.cloneElement)(s,{onExited:n.bind(null,s),in:u.props.in,exit:p(s,"exit",e),enter:p(s,"enter",e)})):r[i]=Object(o.cloneElement)(s,{in:!1}):r[i]=Object(o.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:p(s,"exit",e),enter:p(s,"enter",e)})}})),r}var f=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},h=function(e){function t(t,n){var a,r=(a=e.call(this,t,n)||this).handleExited.bind(Object(i.a)(a));return a.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},a}Object(s.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,a,r=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,a=i,u(n.children,(function(e){return Object(o.cloneElement)(e,{onExited:a.bind(null,e),in:!0,appear:p(e,"appear",n),enter:p(e,"enter",n),exit:p(e,"exit",n)})}))):d(e,r,i),firstRender:!1}},n.handleExited=function(e,t){var n=u(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(r.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=Object(a.a)(e,["component","childFactory"]),i=this.state.contextValue,s=f(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?l.a.createElement(c.a.Provider,{value:i},s):l.a.createElement(c.a.Provider,{value:i},l.a.createElement(t,r,s))},t}(l.a.Component);h.propTypes={},h.defaultProps={component:"div",childFactory:function(e){return e}};t.a=h},94:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=r.a.createContext(null)}}]);
//# sourceMappingURL=7.eee1984c.chunk.js.map