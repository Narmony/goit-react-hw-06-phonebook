(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{18:function(t,e,n){t.exports={searchWrap:"filter_searchWrap__3TG7j",title:"filter_title__212N-"}},32:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),s=n(9),o=n.n(s),i=n(5),l=n(19),u=n(10),b=n(11),d=n(14),j=n(12),m=n(6),h=n(8),p=n.n(h),O=n(37),f=n(3),_={addContact:Object(f.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(O.a)(),name:e,number:n}}})),deleteContact:Object(f.b)("contacts/delete"),changeFilter:Object(f.b)("contacts/changeFilter")},x=n(1),v=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(O.a)(),t.numberInputId=Object(O.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),(0,t.props.onSubmit)(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsx)("h2",{children:"Phonebook"}),Object(x.jsxs)("div",{className:p.a.form,children:[Object(x.jsxs)("label",{htmlFor:this.nameInputId,className:p.a.name_input,children:[Object(x.jsx)("span",{children:"Name"}),Object(x.jsx)("input",{onChange:this.handleChange,id:this.nameInputId,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(x.jsxs)("label",{htmlFor:this.numberInputId,className:p.a.number_input,children:[Object(x.jsx)("span",{children:"Number"}),Object(x.jsx)("input",{onChange:this.handleChange,id:this.numberInputId,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(x.jsx)("button",{type:"submit",className:p.a.add_Btn,children:"Add contact"})]})]})]})}}]),n}(c.Component),g=Object(i.b)(null,(function(t){return{onSubmit:function(e){return t(_.addContact(e))}}}))(v),C=n(7),y=n.n(C),N=function(t,e){var n=e.toLocaleLowerCase();return t.filter((function(t){return t.name.toLocaleLowerCase().includes(n)}))},k=Object(i.b)((function(t){var e=t.contacts,n=e.contacts,a=e.filter;return{contacts:N(n,a)}}),(function(t){return{onDelete:function(e){return t(_.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDelete;return Object(x.jsxs)("div",{className:y.a.contacts_block,children:[Object(x.jsx)("span",{className:y.a.contacts_title,children:"Contacts:"}),Object(x.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(x.jsxs)("li",{className:y.a.contact_item,children:[Object(x.jsx)("span",{className:y.a.name,children:e}),Object(x.jsx)("span",{className:y.a.number,children:a}),Object(x.jsx)("button",{onClick:function(){return n(c)},children:"Delete"})]},c)}))})]})})),I=n(18),F=n.n(I),w=Object(i.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(_.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(x.jsxs)("label",{className:F.a.searchWrap,children:[Object(x.jsx)("span",{className:F.a.title,children:"Find contacts by name:"}),Object(x.jsx)("input",{type:"text",value:e,onChange:n})]})})),A=(n(32),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)(g,{}),Object(x.jsx)(w,{}),Object(x.jsx)(k,{})]})}}]),n}(c.Component)),L=n(13),S=n(2),z=Object(f.c)([],(a={},Object(m.a)(a,_.addContact,(function(t,e){return function(t,e){var n=e.payload;if(!t.map((function(t){return t.name})).includes(n.name))return[].concat(Object(L.a)(t),[n]);alert("".concat(n.name," is already in contacts"))}(t,{payload:e.payload})})),Object(m.a)(a,_.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),B=Object(f.c)("",Object(m.a)({},_.changeFilter,(function(t,e){return e.payload}))),D=Object(S.b)({contacts:z,filter:B}),Z=n(20),J=n.n(Z),T=n(4),W=n(21),Y={key:"contacts",storage:n.n(W).a,blacklist:["filter"]},q=[].concat(Object(L.a)(Object(f.d)({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})),[J.a]),G=Object(f.a)({reducer:{contacts:Object(T.g)(Y,D)},middleware:q,devTools:!1}),M={store:G,persistor:Object(T.h)(G)};o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(i.a,{store:M.store,children:Object(x.jsx)(l.a,{loading:null,persistor:M.persistor,children:Object(x.jsx)(A,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={name:"contactsList_name__3OkeU",contacts_block:"contactsList_contacts_block__15lQl",contact_item:"contactsList_contact_item__1N_G3",contacts_title:"contactsList_contacts_title__3Kxou"}},8:function(t,e,n){t.exports={form:"contactsForm_form__2v-iC",add_Btn:"contactsForm_add_Btn__2YOYD",name_input:"contactsForm_name_input__3gjZp",number_input:"contactsForm_number_input__4ztsY"}}},[[36,1,2]]]);
//# sourceMappingURL=main.c747e25c.chunk.js.map