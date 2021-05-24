(this.webpackJsonpreact2dust=this.webpackJsonpreact2dust||[]).push([[0],{80:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(11),a=c.n(n),i=c(0);var r=function(){return Object(i.jsx)("div",{className:"jumbotron jumbotron-fluid ",style:{backgroundImage:"url(./images/header.jpg)"},children:Object(i.jsx)("header",{className:"navbar-brand header",children:" Comp2Dust "})})};var l=function(){return Object(i.jsx)("footer",{className:"rounded",style:{backgroundImage:"url(./images/header.jpg)"},children:Object(i.jsx)("div",{className:"navbar navbar-light navbar-expand",children:Object(i.jsx)("div",{className:"container justify-content-center",children:Object(i.jsxs)("ul",{className:"nav navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link disabled",href:"A simple Manual",children:"Docs"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link disabled ",children:"Examples"})}),Object(i.jsx)("li",{className:"nav-item ",children:Object(i.jsx)("a",{className:"nav-link",href:"https://github.com/YigitSIK/Comp2Dust",title:"View the GitHub project",children:"GitHub"})}),Object(i.jsx)("li",{className:"nav-item ",children:Object(i.jsx)("a",{className:"nav-link disabled",href:"This part will be an explanation about algs",title:"Explore more projects",children:"Explore"})}),Object(i.jsx)("li",{className:"nav-item ",children:Object(i.jsx)("a",{className:"nav-link disabled",href:"Explanation of the project",title:"About the author",children:"About"})})]})})})})},o=c(19),j=c(5),d=c(8),b=c.n(d),m=c(12),h=c.n(m),u=(c(30),{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:1},desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}}),p={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:6},desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:3},mobile:{breakpoint:{max:464,min:0},items:2}},O=c(15),x=c.n(O),g=c(85);var f=function(e){return Object(i.jsxs)("div",{className:"col-lg-8 rounded",children:[Object(i.jsx)(h.a,{responsive:u,swipeable:!1,draggable:!1,children:!1===e.checkIn&&!1===e.checkOut?Object(i.jsx)("div",{className:"card ",id:"mainCard",children:Object(i.jsx)(x.a,{leftImage:"/images/upload.jpg",rightImage:"/images/upload.jpg"},"default")}):e.imageArray.inputArray.map((function(t,c){return function(t,c){return!0===e.checkIn&&!1===e.checkOut||e.errorStatus?Object(i.jsx)("div",{className:"card ",id:"mainCard",children:Object(i.jsx)(x.a,{leftImage:e.sessionID+"/"+t,rightImage:e.sessionID+"/"+t},c)}):e.checkIn&&e.checkOut?Object(i.jsx)("div",{className:"card ",id:"mainCard",children:Object(i.jsx)(x.a,{leftImage:e.sessionID+"/"+t,rightImage:e.sessionID+"/"+e.outputArray.outputArray[c]},c)}):void 0}(t,c)}))}),Object(i.jsx)("div",{children:null===e.uploadProgress||100===e.uploadProgress?null:Object(i.jsxs)("div",{className:"my-5",children:[Object(i.jsx)("label",{htmlFor:"props.uploadProgress",children:Object(i.jsx)("h6",{children:"Upload Progress"})}),Object(i.jsx)(g.a,{now:e.uploadProgress})]})}),e.checkOut&&0==e.errorStatus?Object(i.jsxs)("div",{className:" alert alert-info text-center mt-3",children:["You have saved ",(e.size-e.oSize).toFixed(1)," kb in total"]}):null,Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:e.errorStatus?Object(i.jsxs)("div",{className:" alert alert-info text-center mt-3",children:[Object(i.jsx)("p",{children:"There was an error, You can download the error log to get a clue"}),Object(i.jsx)("a",{onClick:function(){b.a.get("/download/log").then((function(e){window.open("https://comp2dust.herokuapp.com/download/log")})).catch((function(e){console.log(e)}))},download:"log",className:"btn btn-primary",children:"download"})]}):null}),!1===e.checkOut&&!0===e.checkIn&&!1===e.isLoading?Object(i.jsx)("div",{className:" alert alert-info text-center mt-3",children:"Choose your options then press compress button to compress your images"}):null]}),e.loadingStatus?Object(i.jsx)("div",{className:" alert alert-info text-center mt-3",children:"Please wait... Compressing Images"}):null]})};var v=function(e){return Object(i.jsx)("div",{className:"column col mb-3  shadow-sm d-flex",id:"dispCard",children:Object(i.jsx)("img",{className:"card-img",id:"imgDisp",src:e.src,alt:"upload.jpg"},e.src)})};var N=function(e){var t=e.id,c=e.parentProps.statistics,s=String(c[e.id].input);return s=s.substring(s.lastIndexOf("/")+1,s.length),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:t+1}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:c[e.id].algorithm}),Object(i.jsx)("td",{children:(c[e.id].size_in/1024).toFixed(1)+" kb"}),Object(i.jsx)("td",{children:(c[e.id].size_output/1024).toFixed(1)+" kb"}),Object(i.jsx)("td",{children:c[e.id].percent})]})};var y=function(e){return Object(i.jsx)("div",{className:"mb-4",children:Object(i.jsxs)("div",{className:"card my-3 shadow rounded",children:[Object(i.jsxs)("h5",{className:"card-header d-flex align-items-center justify-content-between",children:[Object(i.jsx)("span",{children:"Input image "}),0==e.checkOut?null:Object(i.jsx)("a",{onClick:function(){b.a.get("/download").then((function(e){window.open("https://comp2dust.herokuapp.com/download")})).catch((function(e){console.log(e)}))},download:"pack.zip",className:"btn btn-primary",children:"download"})]}),Object(i.jsx)("div",{className:"card-body",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(h.a,{responsive:p,children:!1===e.checkIn&&!1===e.checkOut?Object(i.jsx)(v,{src:"/images/upload.jpg"}):e.imageArray.inputArray.map((function(t,c){return function(t){return!1===e.checkIn?Object(i.jsx)(v,{src:"/images/upload.jpg"}):!0===e.checkIn?Object(i.jsx)(v,{src:e.sessionID+"/"+t},t):void 0}(t)}))}),Object(i.jsx)("hr",{}),Object(i.jsx)(h.a,{responsive:p,children:!1===e.checkIn&&!1===e.checkOut||e.error?Object(i.jsxs)("div",{className:" alert alert-info text-center col-12",children:[Object(i.jsx)("strong",{children:"There was an error"}),"                     "]}):e.imageArray.inputArray.map((function(t,c){return function(t,c){if(!0===e.checkOut)return Object(i.jsx)(v,{src:e.sessionID+"/"+e.outputArray.outputArray[c]},e.outputArray.outputArray[c])}(0,c)}))}),Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:Object(i.jsxs)("table",{className:"table shadow-sm",children:[!1===e.checkOut||e.error?null:Object(i.jsx)("thead",{className:"thead-dark",children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"#"}),Object(i.jsx)("th",{scope:"col",children:"Name"}),Object(i.jsx)("th",{scope:"col",children:"Algorithm"}),Object(i.jsx)("th",{scope:"col",children:"Input Size"}),Object(i.jsx)("th",{scope:"col",children:"Output Size"}),Object(i.jsx)("th",{scope:"col",children:"Compression %"})]})}),Object(i.jsx)("tbody",{children:!1===e.checkOut||e.error?null:e.imageArray.inputArray.map((function(t,c){return function(t,c){if(!0===e.checkOut)return Object(i.jsx)(N,{parentProps:e,id:c},c)}(0,c)}))})]})})})]})})]})})},k=c(13),w=c.n(k),I=c(83),S=c(84),A=c(86);var C=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=(t[0],t[1],Object(s.useState)(!1)),n=Object(j.a)(c,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){!function(e){var t=new FormData;null!=a&&(t.append("file",e.inputFiles),b.a.post("/uploadText",t,{onUploadProgress:function(e){}}).then((function(e){})).catch((function(e){console.log(e)})))}(a)}),[a]),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{id:"example-fade-text",children:Object(i.jsx)("div",{className:"m-3",children:Object(i.jsxs)("ul",{className:"list-group",children:[Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsxs)("label",{className:"btn btn-primary",children:[Object(i.jsx)("h5",{children:"Upload Your Quantization Table !!!"}),Object(i.jsx)("input",{type:"file",hidden:!0,id:"file",name:"file",multiple:"multiple",onChange:function(e){r({inputFiles:e.target.files[0]})}})]})}),Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsx)("a",{href:"https://github.com/mozilla/mozjpeg/blob/master/usage.txt",children:"Mozjpeg"})}),Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsx)("a",{href:"https://github.com/cloudflare/jpegtran/blob/master/usage.txt",children:"Jpegtran"})}),Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsx)("a",{href:"https://developers.google.com/speed/webp/docs/cwebp",children:"Webp"})}),Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsx)("a",{href:"https://github.com/google/guetzli",children:"Guetzli"})}),Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsx)("a",{href:"https://github.com/imagemin/guetzli-bin",children:"Guetzli-Bin"})}),Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsx)("a",{href:"https://github.com/imagemin/jpeg-recompress-bin",children:"jpeg-Recompress"})}),Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsx)("a",{href:"https://github.com/imagemin/jpegoptim-bin",children:"jpeg-Optim"})}),Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsx)("a",{href:"https://github.com/imagemin/pngquant-bin",children:"png-quant"})}),Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsx)("a",{href:"https://github.com/imagemin/pngcrush-bin",children:"png-crush"})}),Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsx)("a",{href:"https://www.npmjs.com/package/svgo",children:"svgo"})}),Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsx)("a",{href:"https://github.com/imagemin/gifsicle-bin",children:"gifsicle"})}),Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsx)("a",{href:"https://www.npmjs.com/package/giflossy",children:"gif-lossy"})})]})})})})};var z=function(){function e(e){}return Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:Object(i.jsxs)(I.a,{defaultActiveKey:"0",children:[Object(i.jsxs)(S.a,{children:[Object(i.jsx)(S.a.Header,{children:Object(i.jsx)(I.a.Toggle,{as:A.a,variant:"link",eventKey:"1",children:"Info & Custom Configurations"})}),Object(i.jsx)(I.a.Collapse,{eventKey:"1",children:Object(i.jsx)(S.a.Body,{children:Object(i.jsx)(C,{})})})]}),Object(i.jsxs)(S.a,{children:[Object(i.jsx)(S.a.Header,{children:Object(i.jsx)(I.a.Toggle,{as:A.a,variant:"link",eventKey:"0",children:"Options"})}),Object(i.jsx)(I.a.Collapse,{eventKey:"0",children:Object(i.jsxs)(S.a.Body,{children:[Object(i.jsx)("div",{className:"alert alert-info  text-center my-1",children:"Commands are for advanced users. You can check the Info button above too see manuals or you can leave it empty for default values."}),Object(i.jsxs)("div",{className:"col-md-6 offset-md-1",id:"optionBox",children:[Object(i.jsxs)("div",{className:"form-row d-flex",children:[Object(i.jsxs)("div",{className:"form-group col-6 mb-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"JPG Engine"})}),Object(i.jsxs)("select",{className:"form-control",name:"JPG",onChange:e,children:[Object(i.jsx)("option",{defaultValue:"mozjpeg",children:"mozjpeg"}),Object(i.jsx)("option",{value:"jpegtran",children:"jpegtran"}),Object(i.jsx)("option",{value:"webp",children:"webp"}),Object(i.jsx)("option",{value:"guetzli",children:"guetzli"}),Object(i.jsx)("option",{value:"jpegRecompress",children:"jpegRecompress"}),Object(i.jsx)("option",{value:"jpegoptim",children:"jpegoptim"})]})]}),Object(i.jsxs)("div",{className:"form-group col-12 mb-3 mx-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"Command"})}),Object(i.jsx)("input",{className:"form-control",type:"text",name:"commandJPG",id:"commandJPG",onKeyUp:e})]})]}),Object(i.jsxs)("div",{className:"form-row d-flex",children:[Object(i.jsxs)("div",{className:"form-group col-6 mb-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"PNG Engine"})}),Object(i.jsxs)("select",{className:"form-control",name:"PNG",onChange:e,children:[Object(i.jsx)("option",{defaultValue:!0,children:"pngquant"}),Object(i.jsx)("option",{value:"optipng",children:"optipng"}),Object(i.jsx)("option",{value:"pngout",children:"pngout"}),Object(i.jsx)("option",{value:"webp",children:"webp"}),Object(i.jsx)("option",{value:"pngcrush",children:"pngcrush"})]})]}),Object(i.jsxs)("div",{className:"form-group col-12 mb-3 mx-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"Command"})}),Object(i.jsx)("input",{className:"form-control",type:"text",name:"commandPNG",id:"commandPNG",onKeyUp:e})]})]}),Object(i.jsxs)("div",{className:"form-row d-flex",children:[Object(i.jsxs)("div",{className:"form-group col-6 mb-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"SVG Engine"})}),Object(i.jsx)("select",{className:"form-control",name:"SVG",children:Object(i.jsx)("option",{defaultValue:!0,children:"svgo"})})]}),Object(i.jsxs)("div",{className:"form-group col-12 mb-3 mx-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"Command"})}),Object(i.jsx)("input",{className:"form-control",type:"text",name:"commandSVG",id:"commandSVG",onKeyUp:e})]})]}),Object(i.jsxs)("div",{className:"form-row d-flex",children:[Object(i.jsxs)("div",{className:"form-group col-6 mb-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"GIF Engine"})}),Object(i.jsxs)("select",{className:"form-control",name:"GIF",children:[Object(i.jsx)("option",{defaultValue:!0,children:"gifsicle"}),Object(i.jsx)("option",{value:"giflossy",children:"giflossy"}),Object(i.jsx)("option",{value:"gif2webp",children:"gif2webp"})]})]}),Object(i.jsxs)("div",{className:"form-group col-12 mb-3 mx-3",children:[Object(i.jsx)("label",{children:Object(i.jsx)("h6",{children:"Command"})}),Object(i.jsx)("input",{className:"form-control",type:"text",name:"commandGIF",id:"commandGIF",onKeyUp:e})]})]})]})]})})]})]})})})};var G=function(){var e=Object(s.useState)(null),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(null),r=Object(j.a)(a,2),l=r[0],d=r[1],m=Object(s.useState)(null),h=Object(j.a)(m,2),u=h[0],p=h[1],O=Object(s.useState)(0),x=Object(j.a)(O,2),g=x[0],v=x[1],N=Object(s.useState)(!1),k=Object(j.a)(N,2),I=k[0],S=k[1],A=Object(s.useState)(!1),C=Object(j.a)(A,2),G=C[0],F=C[1],P=Object(s.useState)(null),D=Object(j.a)(P,2),E=D[0],K=D[1],V=Object(s.useState)(null),U=Object(j.a)(V,2),J=U[0],T=U[1],B=Object(s.useState)(null),Y=Object(j.a)(B,2),H=Y[0],_=Y[1],q=Object(s.useState)(0),L=Object(j.a)(q,2),M=L[0],R=L[1],Q=Object(s.useState)(0),W=Object(j.a)(Q,2),X=W[0],Z=W[1],$=Object(s.useState)(!1),ee=Object(j.a)($,2),te=ee[0],ce=ee[1],se=Object(s.useState)(!1),ne=Object(j.a)(se,2),ae=ne[0],ie=ne[1];return Object(s.useEffect)((function(){!function(e){var t=new FormData;if(null!=l){var c,s=Object(o.a)(e.inputFiles);try{for(s.s();!(c=s.n()).done;){var a=c.value;t.append("file",a)}}catch(i){s.e(i)}finally{s.f()}b.a.post("/upload",t,{onUploadProgress:function(e){_(Math.round(e.loaded/e.total*100))}}).then((function(e){var t=new Array;Array.from(l.inputFiles).forEach((function(e){t.push(e.name)})),n({inputArray:t}),F(!0)})).catch((function(e){console.log(e)}))}}(l)}),[l]),Object(s.useEffect)((function(){var e=0,t=0;for(var c in E)e+=E[c].size_in/1024,t+=E[c].size_output/1024;R(e.toFixed(1)),Z(t.toFixed(1))}),[E]),w()("#optionsForm").keydown((function(e){if(13==e.keyCode)return e.preventDefault(),!1})),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"btn-group col-12 mb-3 ",children:Object(i.jsxs)("label",{className:"btn btn-primary",title:"select an image (jpeg, png)",children:[Object(i.jsx)("h5",{children:"Upload"}),Object(i.jsx)("input",{type:"file",hidden:!0,id:"file",name:"file",multiple:"multiple",onChange:function(e){b.a.get("/reset").then((function(t){F(!1),S(!1),d({inputFiles:e.target.files}),T(t.data),ie(!1)})).catch((function(e){console.log(e)}))}}),"        "]})}),G?null:Object(i.jsxs)("div",{className:" alert alert-info text-center",children:[Object(i.jsx)("strong",{children:"To get started use the upload button to upload up to 100 JPG, PNG, GIF, SVG files"}),"                     "]}),Object(i.jsxs)("div",{className:"row",children:["             ",Object(i.jsx)(f,{imageArray:c,outputArray:u,checkOut:I,checkIn:G,statistics:E,sessionID:J,uploadProgress:H,size:M,oSize:X,loadingStatus:te,errorStatus:ae}),Object(i.jsx)("div",{className:"col-lg-4 mb-4 ",children:Object(i.jsxs)("form",{action:"/compSubmit",id:"optionsForm",method:"post",children:["                          ",Object(i.jsxs)("div",{className:"card h-100 shadow rounded",children:[Object(i.jsx)("h4",{className:"card-header",children:"Options"}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)(z,{}),"                                                                         ",Object(i.jsxs)("div",{className:"form-group row m-5",children:[Object(i.jsx)("button",{className:"btn bg-primary",onClick:function(){var e=w()("#optionsForm").serialize();ie(!1),ce(!0),b.a.get("/deleteOutput").then((function(t){S(!1),b.a.post("/compSubmit",e).then((function(e){K(e.data.statistics),b.a.post("/rename",{compIndex:g}).then((function(e){var t,s=new Array,n=(new Array,Object(o.a)(c.inputArray));try{for(n.s();!(t=n.n()).done;){var a=t.value;s.push("compressed-"+g+"-"+a),v(g+1)}}catch(i){n.e(i)}finally{n.f()}p({outputArray:s}),S(!0)})).catch((function(e){console.log(e)})),ce(!1),null!=e.data.errors[0]&&(ie(!0),S(!1))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},type:"button",children:"Compress"}),"                   "]})]})]})]})}),!0===G?Object(i.jsx)(y,{imageArray:c,outputArray:u,checkOut:I,checkIn:G,statistics:E,sessionID:J,error:ae}):Object(i.jsx)("div",{})]})]})};var F=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"container rounded",children:[Object(i.jsx)(r,{}),"                               ",Object(i.jsx)(G,{}),"                                   ",Object(i.jsx)(l,{}),"                                  "]})})};c(80);a.a.render(Object(i.jsx)(F,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.d88541ca.chunk.js.map