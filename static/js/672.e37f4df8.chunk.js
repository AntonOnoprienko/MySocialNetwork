"use strict";(self.webpackChunknew_project=self.webpackChunknew_project||[]).push([[672],{5672:function(e,s,a){a.r(s),a.d(s,{default:function(){return p}});var n=a(3504),i={dialogs:"Dialogs_dialogs__oe96H",dialog:"Dialogs_dialog__htSTl",dialogsItems:"Dialogs_dialogsItems__zeEWD",messages:"Dialogs_messages__Cg2l+"},t=a(184),l=function(e){return(0,t.jsx)("div",{className:i.dialog,children:(0,t.jsxs)(n.OL,{to:"/dialogs/".concat(e.id),children:[(0,t.jsx)("img",{alt:"not found",src:e.url}),e.name]})})},o=function(e){return(0,t.jsxs)("div",{className:i.message,children:[(0,t.jsx)("img",{alt:"not found",src:e.url}),e.message]})},d=(a(2791),a(6139)),r=a(704),g=a(8661),c=a(7307),u=(0,g.h)(40),m=(0,r.Z)({form:"DialogAddMessagesForm"})((function(e){return(0,t.jsx)("form",{onSubmit:e.handleSubmit,children:(0,t.jsxs)("div",{children:[(0,t.jsx)(d.Z,{validate:[g.C,u],component:c.gx,placeholder:"Enter your message",name:"newMessageBody"}),(0,t.jsx)("button",{children:"send message "})]})})})),h=function(e){var s=e.chatPage.dialogsData.map((function(e){return(0,t.jsx)(l,{id:e.id,name:e.name,url:e.url},e.id)})),a=e.chatPage.messagesData.map((function(e){return(0,t.jsx)(o,{message:e.message,url:e.url},e.id)}));return(0,t.jsxs)("div",{className:i.dialogs,children:[(0,t.jsx)("div",{className:i.dialogsItems,children:s}),(0,t.jsxs)("div",{className:i.messages,children:[a,(0,t.jsx)(m,{onSubmit:function(s){e.sendMessage(s.newMessageBody),s.newMessageBody=null}})]})]})},j=a(6928),x=a(364),f=a(7781),_=a(1982),p=(0,f.qC)(_.U,(0,x.$j)((function(e){return{chatPage:e.chatPage,newMessageText:e.chatPage.newMessageText}}),{sendMessage:j.bG}))(h)}}]);
//# sourceMappingURL=672.e37f4df8.chunk.js.map