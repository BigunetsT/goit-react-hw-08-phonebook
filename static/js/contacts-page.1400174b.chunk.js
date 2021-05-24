(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{100:function(t,e,n){t.exports={phoneNumber:"ContactItem_phoneNumber__3XFla",contactItem:"ContactItem_contactItem__3KsoJ",img:"ContactItem_img__qDPtL",name:"ContactItem_name__1Wwl7",contactBtn:"ContactItem_contactBtn__2t_q0",ring:"ContactItem_ring__1_krW",svg:"ContactItem_svg__7RI2a"}},101:function(t,e,n){t.exports={enter:"pop_enter__Wk_8m",enterActive:"pop_enterActive__2EZSq",exit:"pop_exit__2CQEY",exitActive:"pop_exitActive__3594w"}},107:function(t,e,n){"use strict";n.r(e);var a=n(34),c=n(35),s=n(37),o=n(36),r=n(0),l=n(4),i=n(11),u=n(96),h=n.n(u),d=n(1),m=function(t){var e=t.name,n=t.number,a=t.onSubmit,c=t.onChange,s=t.textBtn;return Object(d.jsxs)("form",{onSubmit:a,className:h.a.contactForm,children:[Object(d.jsx)("h2",{className:h.a.title,children:"\u0414\u0430\u043d\u0456 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443: "}),Object(d.jsxs)("label",{className:h.a.label,children:["\u0406\u043c'\u044f",Object(d.jsx)("input",{className:h.a.input,type:"text",name:"name",value:e,placeholder:"\u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:c})]}),Object(d.jsxs)("label",{className:h.a.label,children:["\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",Object(d.jsx)("input",{className:h.a.input,type:"tel",name:"number",placeholder:"XXX-XX-XX",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:c})]}),Object(d.jsx)("button",{type:"submit",className:h.a.addContactBtn,children:s})]})},b=n(10),j=n(33),p={name:"",number:""},v=function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state=Object(i.a)({},p),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(l.a)({},a,c))}))},t.handleSubmit=function(e){var n=t.state.name;e.preventDefault(),t.props.contacts.map((function(t){return t.name.toLowerCase()})).includes(n.toLowerCase())?alert("".concat(n," is already in contacts")):(t.props.onSubmit(t.state),t.reset())},t.reset=function(){t.setState(Object(i.a)({},p))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(d.jsx)(m,{onSubmit:this.handleSubmit,onChange:this.handleChange,name:e,number:n,textBtn:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})}}]),n}(r.Component),O=Object(b.b)((function(t){return{contacts:j.d.getContacts(t)}}),(function(t){return{onSubmit:function(e){var n=e.name,a=e.number;return t(j.b.addContact({name:n,number:a}))}}}))(v),f=n(109),x=n(23),_=n(97),C=n.n(_),g=document.querySelector("#modal-root"),w=function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).handleKeyDown=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackdropClick=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var t=this;return Object(x.createPortal)(Object(d.jsx)("div",{className:C.a.overlay,onClick:this.handleBackdropClick,children:Object(d.jsxs)("div",{className:C.a.modal,children:[Object(d.jsx)("button",{type:"button",className:C.a.closeModalBtn,onClick:function(){t.props.onClose()},children:"X"}),this.props.children]})}),g)}}]),n}(r.Component),N=n(98),y=n.n(N),k=Object(b.b)((function(t){return{value:j.d.getFilter(t)}}),(function(t){return{onChange:function(e){return t(Object(j.a)(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(d.jsx)("div",{className:y.a.filter,children:Object(d.jsxs)("label",{className:y.a.label,children:["\u041f\u043e\u0448\u0443\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u0437\u0430 \u0456\u043c'\u044f\u043c",Object(d.jsx)("input",{type:"text",className:y.a.input,value:e,onChange:n})]})})})),z=n(99),B=n.n(z),M=n(100),S=n.n(M),A=function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={name:t.props.name,number:t.props.number,id:t.props.id},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(l.a)({},a,c))}))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number,s=t.props.contacts;e.preventDefault(),s.map((function(t){return t.name.toLowerCase()})).includes(a.toLowerCase())&&s.map((function(t){return t.number})).includes(c)?alert("This contact is already in list"):t.props.onSubmit(t.state)},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(d.jsx)(m,{onSubmit:this.handleSubmit,onChange:this.handleChange,name:e,number:n,textBtn:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043c\u0456\u043d\u0438"})}}]),n}(r.Component),I=Object(b.b)((function(t){return{contacts:j.d.getContacts(t)}}),(function(t){return{onSubmit:function(e){var n=e.id,a=e.name,c=e.number;return t(j.b.updateContact({id:n,name:a,number:c}))}}}))(A),F=function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={showModal:!1},t.openModal=function(){t.setState({showModal:!0})},t.closeModal=function(){t.setState({showModal:!1})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.id,a=e.name,c=e.number,s=e.onDelete;return Object(d.jsxs)("li",{name:a,number:c,className:S.a.contactItem,children:[Object(d.jsxs)("div",{className:S.a.contactData,children:[Object(d.jsx)("svg",{className:S.a.img,id:"Capa_1",enableBackground:"new 0 0 512 512",height:"30",viewBox:"0 0 512 512",width:"30",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsxs)("g",{children:[Object(d.jsx)("circle",{cx:"255.997",cy:"255.997",fill:"#fd9468",r:"255.997"}),Object(d.jsx)("path",{d:"m512 255.997c0 141.381-114.622 256.003-256.003 256.003-42.346 0-82.285-10.278-117.471-28.488 30.597 12.922 64.24 20.072 99.549 20.072 141.381 0 255.992-114.621 255.992-256.002 0-99.076-56.277-185.003-138.614-227.555 91.978 38.827 156.547 129.857 156.547 235.97z",fill:"#fe7d43"}),Object(d.jsx)("circle",{cx:"255.997",cy:"255.997",fill:"#f9f3f1",r:"212.835"}),Object(d.jsx)("path",{d:"m468.83 255.997c0 117.543-95.29 212.833-212.833 212.833-32.264 0-62.851-7.181-90.259-20.031 21.225 7.109 43.951 10.957 67.573 10.957 117.553 0 212.843-95.29 212.843-212.833 0-85.279-50.155-158.84-122.585-192.802 84.417 28.242 145.261 107.955 145.261 201.876z",fill:"#efe2dd"}),Object(d.jsx)("path",{d:"m226.382 144.985c-15.039-23.199-35.383-41.206-63.445-23.299-15.673 10.002-27.089 25.962-33.236 43.509-13.068 37.303-6.857 77.233 10.736 111.934 21.676 42.754 59.049 81.69 101.112 104.661 46.325 25.298 92.168 20.165 131.372-15.177 16.568-14.936 24.524-40.862 4.519-56.948-16.476-13.248-41.545-33.756-63.268-19.57-14.952 9.765-19.618 26.154-39.359 27.515-33.757 2.327-69.626-50.132-74.033-79.392-1.366-9.075 1.105-16.973 6.538-24.209 5.695-7.585 12.534-9.481 19.286-14.745 16.056-12.519 11.979-35.457-.222-54.279z",fill:"#fd9468"}),Object(d.jsx)("path",{d:"m372.923 366.617c-39.208 35.34-85.053 40.474-131.371 15.175-42.069-22.974-79.436-61.904-101.113-104.662-13.118-25.865-19.908-54.631-17.099-83.057 1.883 19.753 7.953 39.208 17.099 57.233 21.677 42.758 59.044 81.689 101.113 104.662 46.318 25.299 92.162 20.165 131.371-15.175 6.019-5.432 10.895-12.305 13.714-19.63 6.997 15.206-.699 33.715-13.714 45.454z",fill:"#fe7d43"})]})}),Object(d.jsxs)("span",{className:S.a.name,children:[a," :"]}),Object(d.jsx)("span",{className:S.a.phoneNumber,children:c})]}),Object(d.jsxs)("div",{className:S.a.contactOperations,children:[Object(d.jsxs)("button",{type:"button",className:S.a.contactBtn,onClick:function(){return s(n)},children:["\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",Object(d.jsx)("svg",{className:S.a.svg,id:"Capa_1",enableBackground:"new 0 0 512 512",height:"20",viewBox:"0 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsxs)("g",{children:[Object(d.jsx)("path",{d:"m256 441.142c8.284 0 15-6.716 15-15v-201.409c0-8.284-6.716-15-15-15s-15 6.716-15 15v201.409c0 8.284 6.716 15 15 15z"}),Object(d.jsx)("path",{d:"m173.412 427.552c.78 8.263 8.115 14.303 16.344 13.523 8.248-.779 14.302-8.096 13.523-16.344l-19.018-201.409c-.779-8.247-8.083-14.303-16.344-13.523-8.248.779-14.302 8.096-13.523 16.344z"}),Object(d.jsx)("path",{d:"m322.244 441.076c8.238.779 15.564-5.269 16.344-13.523l19.018-201.409c.779-8.248-5.276-15.565-13.523-16.344-8.26-.784-15.565 5.276-16.344 13.523l-19.018 201.409c-.779 8.247 5.276 15.565 13.523 16.344z"}),Object(d.jsx)("path",{d:"m57.646 168.875h8.967l43.448 330.083c.982 7.463 7.344 13.042 14.872 13.042h262.135c7.528 0 13.889-5.579 14.872-13.042l43.448-330.083h8.967c8.284 0 15-6.716 15-15v-65.629c0-8.284-6.716-15-15-15h-128.357v-5.911c0-37.128-30.207-67.335-67.335-67.335h-5.325c-37.128 0-67.335 30.207-67.335 67.335v5.911h-128.357c-8.284 0-15 6.716-15 15v65.629c0 8.284 6.715 15 15 15zm316.267 313.125h-235.826l-41.215-313.125h318.257zm-157.911-414.665c0-20.586 16.749-37.335 37.335-37.335h5.325c20.586 0 37.335 16.749 37.335 37.335v5.911h-79.995zm-143.356 35.911h366.709v35.629c-3.207 0-362.709 0-366.709 0z"})]})})]}),Object(d.jsxs)("button",{type:"button",className:S.a.contactBtn,onClick:function(){return t.openModal()},children:["\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",Object(d.jsxs)("svg",{className:S.a.svg,height:"20",viewBox:"0 -1 381.53417 381",width:"20",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"m370.589844 230.964844c-5.523438 0-10 4.476562-10 10v88.792968c-.019532 16.558594-13.4375 29.980469-30 30h-280.589844c-16.5625-.019531-29.980469-13.441406-30-30v-260.589843c.019531-16.5625 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.523438-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.589843c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.789062c0-5.523438-4.476563-10.003906-10-10.003906zm0 0"}),Object(d.jsx)("path",{d:"m156.367188 178.34375 146.011718-146.015625 47.089844 47.089844-146.011719 146.015625zm0 0"}),Object(d.jsx)("path",{d:"m132.542969 249.257812 52.039062-14.414062-37.625-37.625zm0 0"}),Object(d.jsx)("path",{d:"m362.488281 7.578125c-9.769531-9.746094-25.585937-9.746094-35.355469 0l-10.605468 10.605469 47.089844 47.089844 10.605468-10.605469c9.75-9.769531 9.75-25.585938 0-35.355469zm0 0"})]})]}),this.state.showModal&&Object(d.jsx)(w,{onClose:this.closeModal,children:Object(d.jsx)(I,{name:a,number:c,id:n})})]})]})}}]),n}(r.Component),L=Object(b.b)(null,(function(t){return{onDelete:function(e){return t(j.b.deleteContact(e))}}}))(F),D=n(110),X=n(108),E=n(101),q=n.n(E),J=Object(b.b)((function(t){return{contacts:j.d.getSortContacts(t)}}))((function(t){var e=t.contacts;return Object(d.jsx)(D.a,{component:"ul",className:B.a.contactsList,children:e.map((function(t){var e=t.id,n=t.name,a=t.number;return Object(d.jsx)(X.a,{timeout:200,classNames:q.a,children:Object(d.jsx)(L,{id:e,name:n,number:a})},e)}))})})),K=(n(102),n(28),function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={showModal:!1},t.openModal=function(){t.setState({showModal:!0})},t.closeModal=function(){t.setState({showModal:!1})},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container-page container-page__contacts",children:[Object(d.jsx)("h1",{className:"title",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),Object(d.jsxs)("div",{className:"contacts",children:[Object(d.jsxs)("div",{className:"contacts-operations",children:[Object(d.jsxs)("h3",{className:"contacts-count",children:["\u0412\u0441\u044c\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432:"," ",Object(d.jsx)("span",{className:"contacts-count__value",children:this.props.contactsCount})]}),Object(d.jsxs)(f.a,{variant:"secondary",onClick:this.openModal,className:"addBtn",children:["\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",Object(d.jsxs)("svg",{className:"addBtnImg",id:"_x31__px",enableBackground:"new 0 0 24 24",height:"20",viewBox:"0 0 24 24",width:"20",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"m9.02 21h-6.52c-1.378 0-2.5-1.121-2.5-2.5v-16c0-1.379 1.122-2.5 2.5-2.5h12c1.378 0 2.5 1.121 2.5 2.5v6.06c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-6.06c0-.827-.673-1.5-1.5-1.5h-12c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h6.52c.276 0 .5.224.5.5s-.224.5-.5.5z"}),Object(d.jsx)("path",{d:"m13.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"}),Object(d.jsx)("path",{d:"m9.5 13h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z"}),Object(d.jsx)("path",{d:"m8.5 5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5s-.224.5-.5.5z"}),Object(d.jsx)("path",{d:"m17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-12c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.467-5.5-5.5-5.5z"}),Object(d.jsx)("path",{d:"m17.5 21c-.276 0-.5-.224-.5-.5v-6c0-.276.224-.5.5-.5s.5.224.5.5v6c0 .276-.224.5-.5.5z"}),Object(d.jsx)("path",{d:"m20.5 18h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z"})]})]}),this.state.showModal&&Object(d.jsx)(w,{onClose:this.closeModal,children:Object(d.jsx)(O,{})}),Object(d.jsx)(k,{})]}),Object(d.jsx)("div",{className:"contacts-info",children:Object(d.jsx)(J,{className:"contacts-list"})})]}),Object(d.jsx)("div",{className:"footer",children:"GoIt-2021 React#27"})]})}}]),n}(r.Component));e.default=Object(b.b)((function(t){return{contactsCount:j.d.getContactsCount(t)}}),(function(t){return{fetchContacts:function(){return t(j.b.fetchContacts())}}}))(K)},96:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__1jXwC",title:"ContactForm_title__2AUJn",label:"ContactForm_label__1_9aD",input:"ContactForm_input__2vrgd",addContactBtn:"ContactForm_addContactBtn__1lBji"}},97:function(t,e,n){t.exports={overlay:"Modal_overlay__3jN6Q",modal:"Modal_modal__L_zlP",closeModalBtn:"Modal_closeModalBtn__33InE"}},98:function(t,e,n){t.exports={filter:"Filter_filter__3QK9A",label:"Filter_label__1YEKJ",input:"Filter_input__35LBw"}},99:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__n3jNT"}}}]);
//# sourceMappingURL=contacts-page.1400174b.chunk.js.map