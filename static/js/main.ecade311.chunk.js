(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,n){e.exports=n.p+"static/media/180825_01_laptop.91a96d32.mp4"},230:function(e,t,n){e.exports=n(433)},235:function(e,t,n){},237:function(e,t,n){},239:function(e,t,n){},241:function(e,t,n){},255:function(e,t,n){},259:function(e,t,n){},261:function(e,t,n){},271:function(e,t,n){},273:function(e,t,n){},275:function(e,t,n){},277:function(e,t,n){},336:function(e,t,n){},338:function(e,t,n){},406:function(e,t,n){},408:function(e,t,n){},410:function(e,t,n){},412:function(e,t,n){},414:function(e,t,n){},416:function(e,t,n){},418:function(e,t,n){},428:function(e,t,n){},433:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(65),i=n.n(c),o=(n(235),n(47)),l=(n(237),n(451)),s=n(452),u=n(450),m=n(453),d=(n(239),n(15)),f=(n(241),n(24)),p=n(33),E=n(34);function v(){var e=Object(p.a)(["\n  query($id: ID!) {\n    user(id: $id) {\n      name\n    }\n  }\n"]);return v=function(){return e},e}function _(){var e=Object(p.a)(["\n  {\n    users {\n      name\n      id\n      gender\n      error\n    }\n  }\n"]);return _=function(){return e},e}function g(){var e=Object(p.a)(["\n  query($startWithId: ID) {\n    posts(startWithId: $startWithId) {\n      text\n      id\n      createdAt\n      file {\n        id\n        url\n        type\n      }\n      user {\n        name\n        gender\n        id\n      }\n    }\n  }\n"]);return g=function(){return e},e}var h=Object(E.a)(g()),b=Object(E.a)(_()),O=Object(E.a)(v());function w(){var e=Object(p.a)(["\n  subscription {\n    userChange {\n      name\n      id\n      gender\n      error\n    }\n  }\n"]);return w=function(){return e},e}function y(){var e=Object(p.a)(["\n  subscription {\n    postChange {\n      text\n      id\n      createdAt\n      user {\n        name\n        gender\n        id\n      }\n      file {\n        id\n        url\n        type\n      }\n    }\n  }\n"]);return y=function(){return e},e}var x=Object(E.a)(y()),j=Object(E.a)(w()),I=n(35),S={currentForm:"login",userLoggedIn:!1,error:null,currentUserId:"",profileFormVisibility:!1},N=function(e,t){switch(t.type){case"LOGOUT":return Object(I.a)({},e,{userLoggedIn:!1,currentUserId:"",profileFormVisibility:!1});case"LOGIN":return Object(I.a)({},e,{userLoggedIn:!0});case"SET_ERROR":return Object(I.a)({},e,{error:t.error});case"TOOGLE_FORM_TYPE":return Object(I.a)({},e,{currentForm:"login"===e.currentForm?"signup":"login"});case"SET_CURRENT_USER_ID":return Object(I.a)({},e,{currentUserId:t.userId});case"SET_PROFILE_FORM_VISIBILITY":return Object(I.a)({},e,{profileFormVisibility:t.payload});default:return e}},R={formIsClear:!0},C=function(e,t){switch(t.type){case"TYPING_STARTED":return Object(I.a)({},e,{formIsClear:!1});case"FORM_IS_CLEAR":return Object(I.a)({},e,{formIsClear:!0});default:return e}},k=a.a.createContext(),T=function(e){var t=e.children,n=k.Provider,r=a.a.useReducer(N,S),c=Object(d.a)(r,2),i=c[0],o=c[1],l=a.a.useReducer(C,R),s=Object(d.a)(l,2),u=s[0],m=s[1];return a.a.createElement(n,{value:Object(I.a)({profileState:i,profileDispatch:o},u,{typingDispatch:m})},t)},F=k,L=n(135),D=(n(255),n(21)),U=n.n(D),$=n(30),P=(n(259),n(31));function M(){var e=Object(p.a)(["\n  mutation($id: ID!) {\n    deleteUser(id: $id) {\n      name\n      id\n      gender\n      error\n    }\n  }\n"]);return M=function(){return e},e}function q(){var e=Object(p.a)(["\n  mutation($id: ID!) {\n    deletePost(id: $id) {\n      id\n    }\n  }\n"]);return q=function(){return e},e}function A(){var e=Object(p.a)(["\n  mutation(\n    $name: String!\n    $gender: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(name: $name, gender: $gender, email: $email, password: $password) {\n      name\n      id\n      gender\n      error\n    }\n  }\n"]);return A=function(){return e},e}function H(){var e=Object(p.a)(["\n  mutation($userId: ID!, $text: String!, $fileId: ID, $fileUrl: String, $fileType: String) {\n    addPost(userId: $userId, text: $text, fileId: $fileId, fileUrl: $fileUrl, fileType: $fileType) {\n      text\n      id\n      createdAt \n      user {\n        name\n        gender\n        id\n      }\n      file {\n        id\n        url\n        type\n      }\n    }\n  }\n"]);return H=function(){return e},e}var B=Object(E.a)(H()),V=Object(E.a)(A()),Y=Object(E.a)(q()),z=Object(E.a)(M()),G=n(190),W=n.n(G),Q=function(e){var t=e.className,n=e.onClick,r=e.text,c=e.children,i=e.focus,o=a.a.useRef(null);a.a.useEffect(function(){i&&o.current&&o.current.focus()},[]);return a.a.createElement("div",{className:"general-button ".concat(t),tabIndex:"0",onKeyPress:function(e){13===e.charCode&&n()},onClick:n,ref:o},c,r)},J=(n(261),function(){return a.a.createElement("div",{className:"divider"})}),K=n(191),X=n.n(K),Z=(n(269),n(435),X.a.initializeApp({apiKey:"AIzaSyDF7tOoFEBvdFyJYxcPlbOxt_YwNFBPSp8",authDomain:"graphql-server-17d36.firebaseapp.com",databaseURL:"https://graphql-server-17d36.firebaseio.com",projectId:"graphql-server-17d36",messagingSenderId:"878772503268",storageBucket:"graphql-server-17d36.appspot.com"})),ee=(n(271),function(e){var t=e.error;return a.a.createElement("div",{className:"error-message"},t)}),te=(n(273),function(e){var t=e.text,n=e.withRadius,r=e.inverted;return a.a.createElement("div",{className:"loader__container ".concat(n&&"loader__container--withRadius"," ").concat(r&&"loader__container--inverted")},a.a.createElement("div",{className:"loader__spinner ".concat(r&&"loader__spinner--inverted")}),a.a.createElement("div",null,t))}),ne=(n(275),n(97)),re=function(e){var t=e.fileUrl,n=e.handleFileLoaded,r=e.handleFileDeleteClick,c=e.fileType,i=e.posted,o=e.inverted,l=a.a.useRef(null),s=a.a.useRef(null),u=a.a.useState(!1),m=Object(d.a)(u,2),f=m[0],p=m[1];a.a.useEffect(function(){n()},[]);var E,v=function(e){e.current&&(e.current.requestFullscreen?e.current.requestFullscreen():e.current.mozRequestFullScreen?e.current.mozRequestFullScreen():e.current.webkitRequestFullScreen?e.current.webkitRequestFullScreen():e.current.msRequestFullscreen&&e.current.msRequestFullscreen())};return c&&c.includes("image")&&(E=a.a.createElement("img",{className:i?"uploaded-file__image uploaded-file__image--posted":"uploaded-file__image",src:t,alt:"uploaded",onLoad:n,onClick:function(){v(l)},ref:l})),c&&c.includes("video")&&(E=a.a.createElement("div",{className:"uploaded-file__video-container "},a.a.createElement("video",{ref:s,width:"150px"},a.a.createElement("source",{src:t})," Your browser does not support HTML5 video."),a.a.createElement(Q,{className:"uploaded-file__play-pause-button",onClick:f?function(){s.current&&s.current.pause(),p(!1)}:function(){s.current&&s.current.play(),p(!0)},children:f?a.a.createElement(P.d,null):a.a.createElement(P.e,null)}),a.a.createElement(Q,{className:"uploaded-file__fullscreen-button",onClick:function(){v(s)},children:a.a.createElement(ne.b,null)}))),c&&c.includes("audio")&&(E=a.a.createElement("audio",{src:t,controls:!0})),a.a.createElement("div",{className:"uploaded-file__file-container"},E||a.a.createElement("div",{className:o?"uploaded-file__general-file-container uploaded-file__general-file-container--inverted":"uploaded-file__general-file-container"},a.a.createElement("a",{href:t,download:!0,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(P.b,{color:o?"white":"0084ff",size:"3rem"})),a.a.createElement("div",null,"Attached file")),!i&&a.a.createElement(P.g,{color:"red",cursor:"pointer",onClick:r}))},ae=(n(277),function(e){var t=e.text,n=void 0===t?"Are you sure?":t,r=e.confirmText,c=void 0===r?"Delete":r,i=e.onConfirmClick,o=e.onCancelClick,l=e.top,s=void 0===l?0:l,u=e.modal;return a.a.createElement("div",{className:u?"confirm__container confirm__container--modal":"confirm__container ",style:{top:s}},a.a.createElement(J,null),a.a.createElement("div",{className:"confirm__message"},n),a.a.createElement(J,null),a.a.createElement("div",{className:"confirm__buttons-container"},a.a.createElement(Q,{text:"Cancel",onClick:o,focus:!0}),a.a.createElement(Q,{text:c,onClick:i})))}),ce=function(e){var t=e.post,n=e.setFileLoaded,r=e.scrollTop,c=a.a.useContext(F).profileState,i=a.a.useState(!1),o=Object(d.a)(i,2),l=o[0],s=o[1],u=a.a.useState(!1),m=Object(d.a)(u,2),p=m[0],E=m[1],v=a.a.useState(!1),_=Object(d.a)(v,2),g=_[0],h=_[1],b=function(){var e=Object($.a)(U.a.mark(function e(n,r){var a;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(E(!0),e.prev=1,!t.file.url){e.next=6;break}return a=Z.storage().ref("files/".concat(t.file.id)),e.next=6,a.delete();case 6:return e.next=8,n({variables:{id:r}});case 8:e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),s(new Error("There is a problem deleting the file...").message),E(!1);case 15:case"end":return e.stop()}},e,this,[[1,10]])}));return function(t,n){return e.apply(this,arguments)}}(),O=function(){h(!0)},w=function(e,t){b(e,t),h(!1)},y=function(){h(!1)},x=a.a.createElement(P.g,{color:"red",cursor:"pointer"});return a.a.createElement(f.Mutation,{mutation:Y},function(e,i){var o=i.error;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"post__container"},a.a.createElement("div",{className:"post__detailes-container"},a.a.createElement("div",{className:"post__created-at-container"},W()(t.createdAt).calendar()),a.a.createElement("div",{className:"post__user-name"},a.a.createElement("span",null,"By: "),t.user.name)),a.a.createElement(J,null),l&&a.a.createElement(ee,{error:l}),o&&a.a.createElement(ee,{error:new Error("There is a problem deleting the message...").message}),a.a.createElement("div",{className:"post__text-row"},a.a.createElement("div",{className:"post__invisible-sides"}),c.currentUserId===t.user.id&&a.a.createElement("div",{className:"post__invisible"}),a.a.createElement("div",{className:"post__visible"},a.a.createElement("div",{className:c.currentUserId===t.user.id?"post__text post__text--own":"post__text post__text--else"},t.file.url&&a.a.createElement(re,{fileUrl:t.file.url,handleFileLoaded:n,fileType:t.file.type,posted:!0,inverted:c.currentUserId===t.user.id}),a.a.createElement("div",{className:"post__text-and-button"},p?a.a.createElement(te,null):a.a.createElement("span",{className:"post__text-span"},t.text),a.a.createElement(Q,{className:c.currentUserId!==t.user.id?"post__delete-button post__delete-button--hidden":"post__delete-button",onClick:O,children:x})))),c.currentUserId!==t.user.id&&a.a.createElement("div",{className:"post__invisible"}),a.a.createElement("div",{className:"post__invisible-sides"}))),g&&a.a.createElement(ae,{top:r+20,modal:!0,text:"Are you sure you want to delete the post?",onCancelClick:y,onConfirmClick:function(){return w(e,t.id)}}))})},ie=n(446),oe=function(e){var t=e.posts,n=e.refetch,r=e.fetchMore,c=e.subscribeToNewPosts,i=e.subscriptionHappened,o=e.setSubscriptionHappened,l=e.error,s=a.a.useRef(null),u=a.a.useState(!0),m=Object(d.a)(u,2),f=m[0],p=m[1],E=a.a.useState(!0),v=Object(d.a)(E,2),_=v[0],g=v[1],h=a.a.useState(0),b=Object(d.a)(h,2),O=b[0],w=b[1],y=a.a.useRef(!0);a.a.useEffect(function(){(s.current&&i||s.current&&_)&&(s.current.scrollTop=s.current.scrollHeight,o(!1),p(!0),g(!1))},[t,_]),a.a.useEffect(function(){s.current&&y.current&&(s.current.scrollTop=s.current.scrollHeight,y.current=!1)}),a.a.useEffect(function(){s.current&&(s.current.scrollTop=s.current.scrollHeight),n()},[]),a.a.useEffect(function(){var e=c();return function(){e()}},[]);return t?a.a.createElement("div",{className:"posts-list__container",ref:s,onScroll:function(){w(s.current.scrollTop)}},a.a.createElement("div",{className:t.length<1?"posts-list__container-inner posts-list__container-inner--empty":"posts-list__container-inner"},t.length<1&&a.a.createElement("div",{className:"posts-list__start-element"},"Start Typing To Chat ..."),t.map(function(e){return a.a.createElement(a.a.Fragment,{key:e.id},a.a.createElement(ce,{post:e,setFileLoaded:function(){g(!0)},scrollTop:s.current?O:0}),a.a.createElement(J,null))}),a.a.createElement(ie.a,{once:!1,onBottomVisible:function(){f&&t.length>19&&function(){r({variables:{startWithId:t[t.length-1].id},updateQuery:function(e,t){var n=t.fetchMoreResult;return n.posts.length<20?p(!1):p(!0),{posts:Object(L.a)(e.posts).concat(Object(L.a)(n.posts))}}});var e=s.current.scrollHeight;setTimeout(function(){s.current.scrollTop=s.current.scrollHeight-e},1e3)}()}}),f&&t.length>19&&a.a.createElement("div",{className:"post-list__loader-wrapper"},a.a.createElement(te,{withRadius:!0,text:"Loading more messages..."})),l&&a.a.createElement(ee,{error:new Error("There is a problem loading the messages...").message}))):a.a.createElement("div",{className:"post-list__loader-wrapper post-list__loader-wrapper--empty"},a.a.createElement("span",null))},le=function(){var e=a.a.useContext(F).profileState,t=a.a.useState(!1),n=Object(d.a)(t,2),r=n[0],c=n[1];return e.userLoggedIn?a.a.createElement(a.a.Fragment,null,a.a.createElement(f.Query,{query:h,variables:{startWithId:null},notifyOnNetworkStatusChange:!0},function(e){var t=e.data.posts,n=e.refetch,i=e.fetchMore,o=e.subscribeToMore,l=e.error;return a.a.createElement(a.a.Fragment,null,a.a.createElement(oe,{subscribeToNewPosts:function(){return function(e){return e({document:x,updateQuery:function(e,t){var n=t.subscriptionData;return n.data?(c(!0),{posts:n.data.postChange}):e}})}(o)},posts:t,refetch:n,fetchMore:i,subscriptionHappened:r,setSubscriptionHappened:c,error:l}))})):a.a.createElement("span",null)},se=(n(336),{mobile:"(max-width: 767px)",tablet:"(min-width: 768px) and (max-width: 991px)",desktop:"(min-width: 992px) and (max-width: 1199px)",largeDesktop:"(min-width: 1200px)"}),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=Object.keys(e||{}),n=t.map(function(t){return e[t]}),a=n.map(function(e){return Object(r.useState)(window.matchMedia(e))});Object(r.useEffect)(function(){var e=n.map(function(e){return window.matchMedia(e)}),t=a.map(function(t,n){return function(){return t[1](e[n].matches)}});return e.map(function(e,n){return e.addListener(t[n])}),t.map(function(e){return e()}),function(){e.map(function(e,n){return e.removeListener(t[n])})}},[]);var c={};return t.map(function(e,t){return c[e]=a[t][0]}),c},me=n(448),de=n(447),fe=(n(338),n(193)),pe=n.n(fe),Ee=n(218),ve=function(e){var t=e.setShowLoader,n=e.setError,r=e.setFileId,c=e.setFileUrl,i=e.setFileType,o=function(){var e=Object($.a)(U.a.mark(function e(a,o){var l,s,u,m;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t(!0),n(null),l=a[0],s=pe.a.v4(),u=Z.storage().ref("files/".concat(s)),e.prev=5,!(o&&o.length>0)){e.next=8;break}throw new Error("The file has been rejected: (the file must be a media files and the maximum file size is 25MB)");case 8:return e.next=10,u.put(l);case 10:return e.next=12,u.getDownloadURL();case 12:m=e.sent,r(s),c(m),i(l.type),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(5),console.log(e.t0),n(new Error(e.t0.message)),t(!1);case 23:case"end":return e.stop()}},e,this,[[5,18]])}));return function(t,n){return e.apply(this,arguments)}}();return a.a.createElement(Ee.a,{accept:"image/*, audio/*, video/*",maxSize:25e6,multiple:!1,onDrop:o},function(e){var t=e.getRootProps,n=e.getInputProps,r=e.isDragActive;return a.a.createElement("div",t(),a.a.createElement(Q,{className:"file-uploader__file-upload-button",children:a.a.createElement(a.a.Fragment,null,r?a.a.createElement("div",{className:"file-uploader__drop-files-box "},a.a.createElement("div",{className:"file-uploader__drop-files-box-sides"},"Drop files here..."),a.a.createElement(P.f,{color:"var(--mainColor)",size:"5rem"}),a.a.createElement("div",{className:"file-uploader__drop-files-box-sides"})):a.a.createElement(ne.a,{className:"file-uploader__attach-icon",color:"var(--mainColor)",size:"32px"}),a.a.createElement("input",n()))}))})},_e=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),o=Object(d.a)(i,2),l=o[0],s=o[1],u=Object(r.useState)(""),m=Object(d.a)(u,2),p=m[0],E=m[1],v=Object(r.useState)(""),_=Object(d.a)(v,2),g=_[0],h=_[1],b=Object(r.useState)(!1),w=Object(d.a)(b,2),y=w[0],x=w[1],j=Object(r.useState)(null),I=Object(d.a)(j,2),S=I[0],N=I[1],R=a.a.useContext(F),C=R.profileState,k=R.typingDispatch,T=ue(),L=T.mobile,D=T.tablet,P=a.a.useRef(null);a.a.useEffect(function(){P.current.focus()},[]);var M=function(){var e=Object($.a)(U.a.mark(function e(t){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,t();case 3:c(""),s(""),E(""),h(""),N(null),x(!1),k({type:"FORM_IS_CLEAR"});case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),q=function(){return n.match(/\S.*/g)},A=function(){var e=Object($.a)(U.a.mark(function e(){var t;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,t=Z.storage().ref("files/".concat(l)),e.next=5,t.delete();case 5:s(""),E(""),h(""),x(!1),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0),N(new Error("There is a problem deleting the file ...")),x(!1);case 16:case"end":return e.stop()}},e,this,[[1,11]])}));return function(){return e.apply(this,arguments)}}(),H=function(){x(!1)};return a.a.createElement(f.Mutation,{mutation:B,variables:{userId:C.currentUserId,text:n,fileId:l,fileUrl:p,fileType:g}},function(e,t){var r=t.error;return a.a.createElement("div",{className:"new-posts__container"},a.a.createElement(f.Query,{query:O,variables:{id:C.currentUserId}},function(t){var i=t.loading,o=t.data;return a.a.createElement(a.a.Fragment,null,S&&a.a.createElement(ee,{error:S.message}),r&&a.a.createElement(ee,{error:new Error("There is a problem sending the message...").message}),p&&a.a.createElement(re,{fileUrl:p,handleFileLoaded:H,handlePostClick:M,mutation:e,handleFileDeleteClick:A,fileType:g}),a.a.createElement(me.a,{className:"new-posts__form"},a.a.createElement(de.a,{rows:2,autoHeight:!0,className:"new-posts__text-area ".concat(L?"new-posts__text-area--mobile":D?"new-posts__text-area--tablet":"new-posts__text-area--desktop-largeDesktop"),onChange:function(e){!function(e,t){0===t.length&&e.target.value.length>0&&k({type:"TYPING_STARTED"}),0===e.target.value.length&&t.length>0&&k({type:"FORM_IS_CLEAR"}),c(e.target.value)}(e,n)},onKeyPress:function(t){13===t.charCode&&function(e,t){q()||p?e.preventDefault()||M(t):e.preventDefault()}(t,e)},value:n,ref:P,placeholder:"Type a message".concat(!i&&o.user?", "+o.user.name:""," ...")})),y?a.a.createElement(te,{inverted:!0}):!p&&a.a.createElement(ve,{setShowLoader:x,setError:N,setFileId:s,setFileUrl:E,setFileType:h}),a.a.createElement("button",{className:q()||p?"new-posts__button":"new-posts__button new-posts__button--disabled",onClick:function(){M(e)},disabled:!q()&&!p},"Send"))}))})},ge=(n(406),n(210)),he=n.n(ge),be=function(e){var t=e.containerRef,n=a.a.useState(null),r=Object(d.a)(n,2),c=r[0],i=r[1],o=a.a.useState(null),l=Object(d.a)(o,2),s=l[0],u=l[1],m=a.a.useRef(null),f=a.a.useContext(F).formIsClear;a.a.useEffect(function(){return p(),window.addEventListener("resize",function(){p()}),function(){window.removeEventListener("resize",p())}},[]),a.a.useEffect(function(){f?v():E()},[f]);var p=function(){i(t.current&&t.current.clientWidth),u(t.current&&t.current.clientHeight)},E=function(){m.current&&m.current.play()},v=function(){m.current&&m.current.pause()};return a.a.createElement("div",{className:"video-background__container"},a.a.createElement("div",{className:"video-background__overlay"}),a.a.createElement("video",{className:"video-background__video",ref:m,loop:!0,muted:!0,src:he.a,height:s&&1.89*s>c?s:"",width:c&&c>1.89*s?"100%":""}))},Oe=(n(408),n(410),n(412),function(e){var t=a.a.useState(e),n=Object(d.a)(t,2),r=n[0],c=n[1];return{value:r,onChange:function(e){c(e.target.value)},reset:function(e){c(e)}}}),we=function(){var e=a.a.useContext(F).profileDispatch,t=Oe(""),n=(t.reset,Object(o.a)(t,["reset"])),r=Oe(""),c=(r.reset,Object(o.a)(r,["reset"])),i=a.a.useState(!1),l=Object(d.a)(i,2),s=l[0],u=l[1],m=function(){var t=Object($.a)(U.a.mark(function t(){var r;return U.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,Z.auth().signInWithEmailAndPassword("".concat(n.value,"@gmail.com"),c.value||"123456");case 4:t.next=11;break;case 6:t.prev=6,t.t0=t.catch(1),r=t.t0.message,e({type:"SET_ERROR",error:r}),u(!1);case 11:case"end":return t.stop()}},t,this,[[1,6]])}));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",{className:"login-form__container"},s?a.a.createElement(te,{text:"Loging in..."}):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"login-form__header"},"Log In"),a.a.createElement("input",Object.assign({placeholder:"name"},n)),a.a.createElement("input",Object.assign({placeholder:"password",type:"password"},c)),a.a.createElement("div",{className:"login-form__buttons"},a.a.createElement(Q,{onClick:function(){e({type:"TOOGLE_FORM_TYPE"})},text:"Sign up"}),a.a.createElement(Q,{onClick:m,text:"Log in"}))))},ye=(n(414),function(){var e=Oe(""),t=(e.reset,Object(o.a)(e,["reset"])),n=Oe(""),r=(n.reset,Object(o.a)(n,["reset"])),c=Oe(""),i=(c.reset,Object(o.a)(c,["reset"])),l=Oe("male"),s=a.a.useContext(F).profileDispatch,u=a.a.useState(!1),m=Object(d.a)(u,2),p=m[0],E=m[1],v=function(){var e=Object($.a)(U.a.mark(function e(n){var a;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.prev=1,e.next=4,n({variables:{name:t.value,gender:l.value,email:r.value,password:i.value}});case 4:return e.next=6,Z.auth().signInWithEmailAndPassword(r.value,i.value);case 6:e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),a=e.t0.message,s({type:"SET_ERROR",error:a}),E(!1);case 13:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),_=function(){s({type:"TOOGLE_FORM_TYPE"})};return a.a.createElement("div",{className:"signup-form__container"},p?a.a.createElement(te,{text:"Signing up user..."}):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"signup-form__header"},"SIGN UP"),a.a.createElement("input",Object.assign({placeholder:"Name"},t)),a.a.createElement("input",Object.assign({placeholder:"Email"},r)),a.a.createElement("input",Object.assign({placeholder:"Password",type:"password"},i)),a.a.createElement("div",{className:"signup-form__radios-container"},a.a.createElement("div",{className:"signup-form__radio"},a.a.createElement("input",{type:"radio",onChange:l.onChange,value:"male",checked:"male"===l.value}),a.a.createElement("div",{className:"singup-form__radio-divider"}),a.a.createElement("label",{className:"singup-form__radio-label"},"Male")),a.a.createElement("div",{className:"signup-form__radio"},a.a.createElement("input",{type:"radio",onChange:l.onChange,value:"female",checked:"female"===l.value}),a.a.createElement("div",{className:"singup-form__radio-divider"}),a.a.createElement("label",{className:"singup-form__radio-label"},"Female"))),a.a.createElement(f.Mutation,{mutation:V},function(e){return a.a.createElement("div",null,a.a.createElement("div",{className:"signup-form__buttons-container"},a.a.createElement(Q,{text:"Log In",onClick:_}),0!==t.value.length&&0!==r.value.length&&0!==i.value.length&&a.a.createElement(Q,{text:"Signup",onClick:function(){return v(e)}})))})))}),xe=function(){var e=a.a.useContext(F),t=e.profileState,n=e.profileDispatch,r=a.a.useState(!1),c=Object(d.a)(r,2),i=c[0],o=c[1],l=a.a.useState(!1),s=Object(d.a)(l,2),u=s[0],m=s[1],p=a.a.useState(!1),E=Object(d.a)(p,2),v=E[0],_=E[1];a.a.useEffect(function(){n({type:"SET_ERROR",error:null})},[t.currentForm]);var g=function(){var e=Object($.a)(U.a.mark(function e(){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,Z.auth().signOut();case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),n({type:"SET_ERROR",error:e.t0.message}),m(!1);case 10:case"end":return e.stop()}},e,this,[[1,6]])}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object($.a)(U.a.mark(function e(r){var a;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,r({variables:{id:t.currentUserId}});case 4:return e.next=6,Z.auth().signOut();case 6:e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),a=e.t0.message,n({type:"SET_ERROR",error:a}),o(!1);case 13:n({type:"LOGOUT"});case 14:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),b=function(e){h(e),_(!1)},O=function(){_(!1)};return a.a.createElement("div",null,t.userLoggedIn?a.a.createElement(f.Mutation,{mutation:z},function(e){return i?a.a.createElement(te,{text:"Deleting user..."}):u?a.a.createElement(te,{text:"Loging out user..."}):a.a.createElement("div",{className:"profile-form__buttons-container"},a.a.createElement(Q,{text:"Delete Me",className:"profile-form__button",onClick:function(){_(!0)}}),v&&a.a.createElement(ae,{onCancelClick:O,onConfirmClick:function(){b(e)}}),a.a.createElement(Q,{text:"Log Out",className:"profile-form__button",onClick:g}))}):a.a.createElement("div",{className:"profile-form__container"},"login"===t.currentForm?a.a.createElement(we,null):a.a.createElement(ye,null)),t.error&&a.a.createElement(ee,{error:t.error}))},je=(n(416),n(418),function(e){var t=e.user,n=a.a.useContext(F).profileState;return a.a.createElement("div",{className:"user__container"},a.a.createElement("div",{className:n.currentUserId===t.id?"user__user-name-container user__user-name-container--current":"user__user-name-container"},"male"===t.gender?a.a.createElement(P.c,null):a.a.createElement(P.a,null),a.a.createElement("div",null,t.name)),a.a.createElement(J,null))}),Ie=function(e){var t=e.users,n=e.refetch,r=e.loading,c=e.error,i=e.visiable,o=a.a.useContext(F).profileState;return a.a.useEffect(function(){n()},[]),r?a.a.createElement("div",{className:"users-list__container"},a.a.createElement(te,{withRadius:!0,text:"Loading users..."})):i?a.a.createElement("div",{className:"users-list__container"},c&&a.a.createElement(ee,{error:new Error("There is a problem getting the users...").message}),t.map(function(e){return o.currentUserId!==e.id&&a.a.createElement(je,{user:e,key:e.id})})):a.a.createElement("span",null)},Se=function(e){var t=e.visiable;return a.a.createElement(f.Query,{query:b},function(e){var n=e.loading,r=e.data,c=e.refetch,i=e.error;return a.a.createElement(f.Subscription,{subscription:j},function(e){var o=e.loading,l=e.data,s=o?r.users:l.userChange;return a.a.createElement(Ie,{users:s,refetch:c,loading:n,error:i,visiable:t})})})},Ne=function(e){var t=e.scrollTop,n=a.a.useContext(F),r=n.profileState,c=n.profileDispatch,i=a.a.useRef(!0),o=a.a.useState(!1),l=Object(d.a)(o,2),s=l[0],u=l[1];a.a.useEffect(function(){var e=Z.auth().onAuthStateChanged(function(e){e?(c({type:"LOGIN"}),c({type:"SET_ERROR",error:null}),c({type:"SET_CURRENT_USER_ID",userId:e.uid}),c({type:"SET_PROFILE_FORM_VISIBILITY",payload:!1})):c({type:"LOGOUT"})});return function(){e()}},[]),a.a.useEffect(function(){return document.addEventListener("mousedown",m),function(){document.removeEventListener("mousedown",m)}},[]),a.a.useEffect(function(){var e=setTimeout(function(){u(!0)},1e3);return function(){clearTimeout(e)}},[]);var m=function(e){i.current&&!i.current.contains(e.target)&&c({type:"SET_PROFILE_FORM_VISIBILITY",payload:!1})},p=a.a.createElement(P.h,{cursor:"pointer"});return a.a.createElement("div",{className:r.userLoggedIn?"profile__container--loggedin":"profile__container--loggedout",style:{top:r.userLoggedIn?t:"",display:!s&&"none"},ref:i},r.userLoggedIn?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"profile__user-button"},a.a.createElement(Q,{className:"profile__user-icon",onClick:function(){c({type:"SET_PROFILE_FORM_VISIBILITY",payload:!r.profileFormVisibility})},children:p}),a.a.createElement(f.Query,{query:O,variables:{id:r.currentUserId}},function(e){var t=e.loading,n=e.data;return!t&&n.user&&r.profileFormVisibility&&a.a.createElement("span",null,"Hi ",n.user.name," ")})),a.a.createElement(Se,{visiable:r.profileFormVisibility}),r.profileFormVisibility&&a.a.createElement(xe,{scrollTop:t})):a.a.createElement(xe,null))},Re=function(){var e=a.a.useRef(null);return a.a.createElement("div",{className:"app__container",ref:e},a.a.createElement(be,{containerRef:e}),a.a.createElement(Ne,null),a.a.createElement(le,null),a.a.createElement(_e,null))},Ce=n(184),ke=n(449),Te=n(75),Fe=n(217),Le=n(14),De=n(104),Ue=new Te.a({uri:"https://".concat("chat-room-server.herokuapp.com")}),$e=new Fe.a({uri:"ws://".concat("chat-room-server.herokuapp.com","/graphql"),options:{reconnect:!0}}),Pe=Object(Le.e)(function(e){var t=e.query,n=Object(De.f)(t),r=n.kind,a=n.operation;return"OperationDefinition"===r&&"subscription"===a},$e,Ue),Me=new Ce.a({link:Pe,cache:new ke.a}),qe=n(211),Ae=n(212),He=n(215),Be=n(213),Ve=n(216),Ye=(n(428),function(e){function t(e){var n;return Object(qe.a)(this,t),(n=Object(He.a)(this,Object(Be.a)(t).call(this,e))).state={hasError:!1},n}return Object(Ve.a)(t,e),Object(Ae.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("div",{className:"error-boundary__container"},a.a.createElement("h1",null,"Something went wrong.... ")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.a.Component)),ze=function(){var e=a.a.useContext(F).profileState,t=a.a.useRef(null);return e.userLoggedIn?a.a.createElement(l.a,{to:"/"}):a.a.createElement("div",{className:"app-router__profile-container",ref:t},a.a.createElement(be,{containerRef:t}),a.a.createElement("div",{className:"app-router__divider"}),a.a.createElement("div",{className:"app-router__profile-wrapper"},a.a.createElement(Ne,null)))},Ge=function(e){var t=e.component,n=Object(o.a)(e,["component"]),r=a.a.useContext(F).profileState;return a.a.createElement(s.a,Object.assign({},n,{render:function(e){return r.userLoggedIn?a.a.createElement(Ye,null,a.a.createElement(t,Object.assign({},e,n))):a.a.createElement(l.a,{to:"/login"})}}))},We=function(){return a.a.createElement(f.ApolloProvider,{client:Me},a.a.createElement(T,null,a.a.createElement(u.a,null,a.a.createElement(m.a,null,a.a.createElement(s.a,{path:"/login",component:ze}),a.a.createElement(Ge,{path:"/",component:Re})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe=n(214);n.n(Qe).a.config(),i.a.render(a.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[230,2,1]]]);
//# sourceMappingURL=main.ecade311.chunk.js.map