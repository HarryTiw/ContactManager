(this.webpackJsonpmc1=this.webpackJsonpmc1||[]).push([[0],{41:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(32),s=a.n(c),o=(a(41),a(21),a(13)),i=a(0),l=function(e){var t=e.branding;return Object(i.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py--0",children:[Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("a",{href:"\\",className:"navbar-brand",children:t})}),Object(i.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsxs)(o.b,{to:"/",className:"nav-link",children:[Object(i.jsx)("i",{className:"fas fa-home"})," Home"]})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsxs)(o.b,{to:"/contact/add",className:"nav-link",children:[Object(i.jsx)("i",{className:"fas fa-plus"})," Add"]})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsxs)(o.b,{to:"/about",className:"nav-link",children:[Object(i.jsx)("i",{className:"fas fa-question"})," About"]})})]})]})},u=a(7),h=a(8),j=a(10),d=a(9),p=a(3),b=a.n(p),m=a(11),O=a(36),f=a(14),v=a(12),x=a.n(v),y=r.a.createContext(),C=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:[t.payload].concat(Object(O.a)(e.contacts))});case"UPDATE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},g=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){e.setState((function(e){return C(e,t)}))}},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){return t.setState({contacts:e.data})}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(i.jsx)(y.Provider,{value:this.state,children:this.props.children})}}]),a}(n.Component),N=y.Consumer,k=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onshowClick=function(t){e.setState({showContactInfo:!e.state.showContactInfo})},e.onDeleteClick=function(){var e=Object(m.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t)).then((function(e){return a({type:"DELETE_CONTACT",payload:t})}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,r=t.phone,c=t.email,s=this.state.showContactInfo;return Object(i.jsx)(N,{children:function(t){var l=t.dispatch;return Object(i.jsxs)("div",{className:"card card-body mb-3",children:[Object(i.jsxs)("h4",{children:[n,"",Object(i.jsx)("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),Object(i.jsx)("i",{className:"fas fa-trash",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,l)}),Object(i.jsx)(o.b,{to:"contact/edit/".concat(a),children:Object(i.jsx)("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}})})]}),s?Object(i.jsxs)("ul",{className:"list-group",children:[Object(i.jsxs)("li",{className:"list-group-item",children:["Email:",c]}),Object(i.jsxs)("li",{className:"list-group-item",children:["Phone:",r]})]}):null]})}})}}]),a}(n.Component),w=k,S=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(i.jsx)(N,{children:function(e){var t=e.contacts;return Object(i.jsx)(r.a.Fragment,{children:Object(i.jsx)("div",{children:t.map((function(e){return Object(i.jsx)(w,{contact:e},e.id)}))})})}})}}]),a}(n.Component),E=S,A=a(15),T=a(35),D=a.n(T),P=function(e){var t=e.label,a=e.name,n=e.placeholder,r=e.type,c=e.value,s=e.onChange,o=e.error;return Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:a,children:t}),Object(i.jsx)("input",{type:r,name:a,className:D()("form-control form-control-lg",{"is-invalid":o}),placeholder:n,value:c,onChange:s}),o&&Object(i.jsx)("div",{className:"invalid-feedback",children:o})]})};P.defaultProps={type:"text"};var I=P,q=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",error:{}},e.onSubmit=function(){var t=Object(m.a)(b.a.mark((function t(a,n){var r,c,s,o,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({error:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({error:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({error:{phone:"Phone is required"}}),t.abrupt("return");case 11:i={name:c,email:s,phone:o},x.a.post("https://jsonplaceholder.typicode.com/users",i).then((function(e){return a({type:"ADD_CONTACT",payload:e.data})})),e.setState({name:"",email:"",phone:"",error:{}}),e.props.history.push("/");case 15:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(A.a)({},t.target.name,t.target.value))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=t.phone,c=t.error;return Object(i.jsx)(N,{children:function(t){var s=t.dispatch;return Object(i.jsxs)("div",{className:"card mb-3",children:[Object(i.jsx)("div",{className:"card-header",children:"Addcontact  "}),Object(i.jsx)("div",{className:"card-body",children:Object(i.jsxs)("form",{onSubmit:e.onSubmit.bind(e,s),children:[Object(i.jsx)(I,{label:"Name",name:"name",placeholder:"Entername",value:a,onChange:e.onChange,error:c.name}),Object(i.jsx)(I,{label:"Email",name:"email",placeholder:"Enteremail",value:n,onChange:e.onChange,error:c.email}),Object(i.jsx)(I,{label:"Phone",name:"phone",placeholder:"Enterphoneno",value:r,onChange:e.onChange,error:c.phone}),Object(i.jsx)("input",{type:"submit",value:"Add contact",className:"btn btn-block bt-light"})]})})]})}})}}]),a}(n.Component),F=q,_=a(2),M=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"display-4",children:"About Contact Manager"}),Object(i.jsx)("p",{className:"lead",children:"Simple app to manage Contacts"}),Object(i.jsx)("p",{className:"text-Secondary",children:"Made by Harsimran"})]})};function L(){return Object(i.jsx)("div",{children:Object(i.jsxs)("h1",{className:"display-4",children:[Object(i.jsx)("span",{className:"text-danger",children:"404"}),"Page Not Found "]})})}var U=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",body:""},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:t}),Object(i.jsx)("p",{children:a})]})}}]),a}(n.Component),B=U,H=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(m.a)(b.a.mark((function t(a,n){var r,c,s,o,i,l,u;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},l=e.props.match.params.id,t.next=15,x.a.put("https://jsonplaceholder.typicode.com/users/".concat(l),i);case 15:u=t.sent,a({type:"UPDATE_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(A.a)({},t.target.name,t.target.value))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(b.a.mark((function e(){var t,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,x.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=t.phone,c=t.errors;return Object(i.jsx)(N,{children:function(t){var s=t.dispatch;return Object(i.jsxs)("div",{className:"card mb-3",children:[Object(i.jsx)("div",{className:"card-header",children:"Edit Contact"}),Object(i.jsx)("div",{className:"card-body",children:Object(i.jsxs)("form",{onSubmit:e.onSubmit.bind(e,s),children:[Object(i.jsx)(I,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:c.name}),Object(i.jsx)(I,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:c.email}),Object(i.jsx)(I,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:r,onChange:e.onChange,error:c.phone}),Object(i.jsx)("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"})]})})]})}})}}]),a}(n.Component),J=H;var R=function(){return Object(i.jsx)(g,{children:Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{branding:"contactmanager"}),Object(i.jsx)("div",{className:"Container",children:Object(i.jsxs)(_.c,{children:[Object(i.jsx)(_.a,{exact:!0,path:"/",component:E}),Object(i.jsx)(_.a,{exact:!0,path:"/contact/add",component:F}),Object(i.jsx)(_.a,{exact:!0,path:"/about",component:M}),Object(i.jsx)(_.a,{exact:!0,path:"/test",component:B}),Object(i.jsx)(_.a,{exact:!0,path:"/contact/edit/:id",component:J}),Object(i.jsx)(_.a,{exact:!0,component:L})]})})]})})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(R,{})}),document.getElementById("root")),z()}},[[70,1,2]]]);
//# sourceMappingURL=main.de6eef33.chunk.js.map