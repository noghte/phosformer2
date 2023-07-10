import{S as we,i as ke,s as De,e as ee,b as N,G as q,h as c,C as j,D as z,m as w,n as i,O as x,E as _,k as I,q as R,a as K,l as S,r as H,c as Y,g as W,d as te,f as Ie,P as Pe,o as Ce,F as M,u as X,p as Se,v as Ve,Q as Fe,R as ie,y as Ne,z as Oe,T as le,A as Le,B as Re,U as He,V as ne,W as Te,X as Ge,Y as Be,Z as Ke,_ as Ye}from"../chunks/index.741ab857.js";import{k as se}from"../chunks/kinase_data.32c16280.js";const $=parseFloat;function re(s,e=";"){let t;if(Array.isArray(s))t=s.filter(l=>l);else{t=[];for(const l in s)s[l]&&t.push(`${l}:${s[l]}`)}return t.join(e)}function Ue(s,e,t,l){let a,n;const r="1em";let f,u,d,h="-.125em";const o="visible";return l&&(d="center",n="1.25em"),t&&(a=t),e&&(e=="lg"?(u="1.33333em",f=".75em",h="-.225em"):e=="xs"?u=".75em":e=="sm"?u=".875em":u=e.replace("x","em")),re([re({float:a,width:n,height:r,"line-height":f,"font-size":u,"text-align":d,"vertical-align":h,"transform-origin":"center",overflow:o}),s])}function Me(s,e,t,l,a,n=1,r="",f=""){let u=1,d=1;return a&&(a=="horizontal"?u=-1:a=="vertical"?d=-1:u=d=-1),re([`translate(${$(e)*n}${r},${$(t)*n}${r})`,`scale(${u*$(s)},${d*$(s)})`,l&&`rotate(${l}${f})`]," ")}function oe(s){let e,t,l,a,n,r,f,u;function d(v,g){return typeof v[10][4]=="string"?je:Qe}let h=d(s),o=h(s);return{c(){e=j("svg"),t=j("g"),l=j("g"),o.c(),this.h()},l(v){e=z(v,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var g=w(e);t=z(g,"g",{transform:!0,"transform-origin":!0});var V=w(t);l=z(V,"g",{transform:!0});var p=w(l);o.l(p),p.forEach(c),V.forEach(c),g.forEach(c),this.h()},h(){i(l,"transform",s[12]),i(t,"transform",a="translate("+s[10][0]/2+" "+s[10][1]/2+")"),i(t,"transform-origin",n=s[10][0]/4+" 0"),i(e,"id",r=s[1]||void 0),i(e,"class",f="svelte-fa "+s[0]+" svelte-1cj2gr0"),i(e,"style",s[11]),i(e,"viewBox",u="0 0 "+s[10][0]+" "+s[10][1]),i(e,"aria-hidden","true"),i(e,"role","img"),i(e,"xmlns","http://www.w3.org/2000/svg"),x(e,"pulse",s[4]),x(e,"spin",s[3])},m(v,g){N(v,e,g),_(e,t),_(t,l),o.m(l,null)},p(v,g){h===(h=d(v))&&o?o.p(v,g):(o.d(1),o=h(v),o&&(o.c(),o.m(l,null))),g&4096&&i(l,"transform",v[12]),g&1024&&a!==(a="translate("+v[10][0]/2+" "+v[10][1]/2+")")&&i(t,"transform",a),g&1024&&n!==(n=v[10][0]/4+" 0")&&i(t,"transform-origin",n),g&2&&r!==(r=v[1]||void 0)&&i(e,"id",r),g&1&&f!==(f="svelte-fa "+v[0]+" svelte-1cj2gr0")&&i(e,"class",f),g&2048&&i(e,"style",v[11]),g&1024&&u!==(u="0 0 "+v[10][0]+" "+v[10][1])&&i(e,"viewBox",u),g&17&&x(e,"pulse",v[4]),g&9&&x(e,"spin",v[3])},d(v){v&&c(e),o.d()}}}function Qe(s){let e,t,l,a,n,r,f,u,d,h;return{c(){e=j("path"),r=j("path"),this.h()},l(o){e=z(o,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),w(e).forEach(c),r=z(o,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),w(r).forEach(c),this.h()},h(){i(e,"d",t=s[10][4][0]),i(e,"fill",l=s[6]||s[2]||"currentColor"),i(e,"fill-opacity",a=s[9]!=!1?s[7]:s[8]),i(e,"transform",n="translate("+s[10][0]/-2+" "+s[10][1]/-2+")"),i(r,"d",f=s[10][4][1]),i(r,"fill",u=s[5]||s[2]||"currentColor"),i(r,"fill-opacity",d=s[9]!=!1?s[8]:s[7]),i(r,"transform",h="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")},m(o,v){N(o,e,v),N(o,r,v)},p(o,v){v&1024&&t!==(t=o[10][4][0])&&i(e,"d",t),v&68&&l!==(l=o[6]||o[2]||"currentColor")&&i(e,"fill",l),v&896&&a!==(a=o[9]!=!1?o[7]:o[8])&&i(e,"fill-opacity",a),v&1024&&n!==(n="translate("+o[10][0]/-2+" "+o[10][1]/-2+")")&&i(e,"transform",n),v&1024&&f!==(f=o[10][4][1])&&i(r,"d",f),v&36&&u!==(u=o[5]||o[2]||"currentColor")&&i(r,"fill",u),v&896&&d!==(d=o[9]!=!1?o[8]:o[7])&&i(r,"fill-opacity",d),v&1024&&h!==(h="translate("+o[10][0]/-2+" "+o[10][1]/-2+")")&&i(r,"transform",h)},d(o){o&&c(e),o&&c(r)}}}function je(s){let e,t,l,a;return{c(){e=j("path"),this.h()},l(n){e=z(n,"path",{d:!0,fill:!0,transform:!0}),w(e).forEach(c),this.h()},h(){i(e,"d",t=s[10][4]),i(e,"fill",l=s[2]||s[5]||"currentColor"),i(e,"transform",a="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")},m(n,r){N(n,e,r)},p(n,r){r&1024&&t!==(t=n[10][4])&&i(e,"d",t),r&36&&l!==(l=n[2]||n[5]||"currentColor")&&i(e,"fill",l),r&1024&&a!==(a="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")&&i(e,"transform",a)},d(n){n&&c(e)}}}function ze(s){let e,t=s[10][4]&&oe(s);return{c(){t&&t.c(),e=ee()},l(l){t&&t.l(l),e=ee()},m(l,a){t&&t.m(l,a),N(l,e,a)},p(l,[a]){l[10][4]?t?t.p(l,a):(t=oe(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:q,o:q,d(l){t&&t.d(l),l&&c(e)}}}function Xe(s,e,t){let{class:l=""}=e,{id:a=""}=e,{style:n=""}=e,{icon:r}=e,{size:f=""}=e,{color:u=""}=e,{fw:d=!1}=e,{pull:h=""}=e,{scale:o=1}=e,{translateX:v=0}=e,{translateY:g=0}=e,{rotate:V=""}=e,{flip:p=!1}=e,{spin:D=!1}=e,{pulse:T=!1}=e,{primaryColor:C=""}=e,{secondaryColor:y=""}=e,{primaryOpacity:b=1}=e,{secondaryOpacity:k=.4}=e,{swapOpacity:A=!1}=e,G,B,O;return s.$$set=m=>{"class"in m&&t(0,l=m.class),"id"in m&&t(1,a=m.id),"style"in m&&t(13,n=m.style),"icon"in m&&t(14,r=m.icon),"size"in m&&t(15,f=m.size),"color"in m&&t(2,u=m.color),"fw"in m&&t(16,d=m.fw),"pull"in m&&t(17,h=m.pull),"scale"in m&&t(18,o=m.scale),"translateX"in m&&t(19,v=m.translateX),"translateY"in m&&t(20,g=m.translateY),"rotate"in m&&t(21,V=m.rotate),"flip"in m&&t(22,p=m.flip),"spin"in m&&t(3,D=m.spin),"pulse"in m&&t(4,T=m.pulse),"primaryColor"in m&&t(5,C=m.primaryColor),"secondaryColor"in m&&t(6,y=m.secondaryColor),"primaryOpacity"in m&&t(7,b=m.primaryOpacity),"secondaryOpacity"in m&&t(8,k=m.secondaryOpacity),"swapOpacity"in m&&t(9,A=m.swapOpacity)},s.$$.update=()=>{s.$$.dirty&16384&&t(10,G=r&&r.icon||[0,0,"",[],""]),s.$$.dirty&237568&&t(11,B=Ue(n,f,h,d)),s.$$.dirty&8126464&&t(12,O=Me(o,v,g,V,p,512))},[l,a,u,D,T,C,y,b,k,A,G,B,O,n,r,f,d,h,o,v,g,V,p]}class We extends we{constructor(e){super(),ke(this,e,Xe,ze,De,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}const qe=We;var Ze={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]};const{Map:Je}=Ke;function fe(s,e,t){const l=s.slice();return l[30]=e[t],l}function ue(s,e,t){const l=s.slice();return l[33]=e[t],l[34]=e,l[35]=t,l}function ce(s){let e,t,l=s[3][0]+"",a,n,r,f,u,d;return{c(){e=I("div"),t=I("div"),a=R(l),n=K(),r=I("button"),f=R("Edit"),this.h()},l(h){e=S(h,"DIV",{class:!0});var o=w(e);t=S(o,"DIV",{class:!0});var v=w(t);a=H(v,l),v.forEach(c),n=Y(o),r=S(o,"BUTTON",{type:!0,class:!0});var g=w(r);f=H(g,"Edit"),g.forEach(c),o.forEach(c),this.h()},h(){i(t,"class","ml-2"),i(r,"type","button"),i(r,"class","btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded"),i(e,"class","flex justify-between items-center")},m(h,o){N(h,e,o),_(e,t),_(t,a),_(e,n),_(e,r),_(r,f),u||(d=M(r,"click",s[14]),u=!0)},p(h,o){o[0]&8&&l!==(l=h[3][0]+"")&&X(a,l)},d(h){h&&c(e),u=!1,d()}}}function de(s){let e,t,l=[],a=new Je,n,r,f,u,d,h,o,v,g,V,p,D,T,C=s[3];const y=b=>b[35];for(let b=0;b<C.length;b+=1){let k=ue(s,C,b),A=y(k);a.set(A,l[b]=_e(A,k))}return{c(){e=I("div"),t=I("div");for(let b=0;b<l.length;b+=1)l[b].c();n=K(),r=I("div"),f=I("button"),u=R("Add"),h=K(),o=I("input"),v=K(),g=I("button"),V=R("Upload File"),this.h()},l(b){e=S(b,"DIV",{"x-show":!0,class:!0});var k=w(e);t=S(k,"DIV",{class:!0});var A=w(t);for(let m=0;m<l.length;m+=1)l[m].l(A);n=Y(A),r=S(A,"DIV",{class:!0});var G=w(r);f=S(G,"BUTTON",{class:!0});var B=w(f);u=H(B,"Add"),B.forEach(c),h=Y(G),o=S(G,"INPUT",{type:!0,id:!0,style:!0}),v=Y(G),g=S(G,"BUTTON",{class:!0});var O=w(g);V=H(O,"Upload File"),O.forEach(c),G.forEach(c),A.forEach(c),k.forEach(c),this.h()},h(){i(f,"class","btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded mr-2"),f.disabled=d=s[4].some(Ee),i(o,"type","file"),i(o,"id","file"),Se(o,"display","none"),i(g,"class","btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded"),i(r,"class","flex items-center"),i(t,"class","flex flex-col items-start"),i(e,"x-show","open"),i(e,"class","flex justify-between items-center")},m(b,k){N(b,e,k),_(e,t);for(let A=0;A<l.length;A+=1)l[A]&&l[A].m(t,null);_(t,n),_(t,r),_(r,f),_(f,u),_(r,h),_(r,o),_(r,v),_(r,g),_(g,V),p=!0,D||(T=[M(f,"click",s[10]),M(o,"change",s[18]),M(g,"click",s[19])],D=!0)},p(b,k){k[0]&2584&&(C=b[3],Ve(),l=Fe(l,k,y,1,b,C,a,t,Ye,_e,n,ue),Ie()),(!p||k[0]&16&&d!==(d=b[4].some(Ee)))&&(f.disabled=d)},i(b){if(!p){for(let k=0;k<C.length;k+=1)W(l[k]);p=!0}},o(b){for(let k=0;k<l.length;k+=1)te(l[k]);p=!1},d(b){b&&c(e);for(let k=0;k<l.length;k+=1)l[k].d();D=!1,ie(T)}}}function he(s){let e,t=s[4][s[35]]+"",l;return{c(){e=I("p"),l=R(t),this.h()},l(a){e=S(a,"P",{class:!0});var n=w(e);l=H(n,t),n.forEach(c),this.h()},h(){i(e,"class","text-red-500")},m(a,n){N(a,e,n),_(e,l)},p(a,n){n[0]&24&&t!==(t=a[4][a[35]]+"")&&X(l,t)},d(a){a&&c(e)}}}function _e(s,e){let t,l,a,n,r,f,u,d,h;function o(){e[15].call(l,e[34],e[35])}function v(...p){return e[16](e[35],...p)}r=new qe({props:{icon:Ze}});function g(){return e[17](e[35])}let V=e[4][e[35]]&&he(e);return{key:s,first:null,c(){t=I("div"),l=I("input"),a=K(),n=I("div"),Ne(r.$$.fragment),f=K(),V&&V.c(),this.h()},l(p){t=S(p,"DIV",{class:!0});var D=w(t);l=S(D,"INPUT",{type:!0,class:!0}),a=Y(D),n=S(D,"DIV",{style:!0});var T=w(n);Oe(r.$$.fragment,T),T.forEach(c),f=Y(D),V&&V.l(D),D.forEach(c),this.h()},h(){i(l,"type","text"),i(l,"class","flex-grow bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"),Se(n,"cursor","pointer"),i(t,"class","flex items-center mb-2 w-full"),this.first=t},m(p,D){N(p,t,D),_(t,l),le(l,e[33]),_(t,a),_(t,n),Le(r,n,null),_(t,f),V&&V.m(t,null),u=!0,d||(h=[M(l,"input",o),M(l,"input",Te(v)),M(n,"click",g)],d=!0)},p(p,D){e=p,D[0]&8&&l.value!==e[33]&&le(l,e[33]),e[4][e[35]]?V?V.p(e,D):(V=he(e),V.c(),V.m(t,null)):V&&(V.d(1),V=null)},i(p){u||(W(r.$$.fragment,p),u=!0)},o(p){te(r.$$.fragment,p),u=!1},d(p){p&&c(t),Re(r),V&&V.d(),d=!1,ie(h)}}}function me(s){let e,t,l=ye(s[6])+"",a,n,r,f,u,d;return{c(){e=I("div"),t=I("div"),a=R(l),n=K(),r=I("button"),f=R("Edit"),this.h()},l(h){e=S(h,"DIV",{class:!0});var o=w(e);t=S(o,"DIV",{class:!0});var v=w(t);a=H(v,l),v.forEach(c),n=Y(o),r=S(o,"BUTTON",{type:!0,class:!0});var g=w(r);f=H(g,"Edit"),g.forEach(c),o.forEach(c),this.h()},h(){i(t,"class","ml-2"),i(r,"type","button"),i(r,"class","btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded"),i(e,"class","flex justify-between items-center")},m(h,o){N(h,e,o),_(e,t),_(t,a),_(e,n),_(e,r),_(r,f),u||(d=M(r,"click",s[20]),u=!0)},p(h,o){o[0]&64&&l!==(l=ye(h[6])+"")&&X(a,l)},d(h){h&&c(e),u=!1,d()}}}function ve(s){let e,t,l,a,n,r,f,u,d,h,o,v,g,V=se,p=[];for(let T=0;T<V.length;T+=1)p[T]=pe(fe(s,V,T));let D=s[7]!==""&&be(s);return{c(){e=I("div"),t=I("div"),l=I("div"),a=I("select");for(let T=0;T<p.length;T+=1)p[T].c();n=K(),r=I("textarea"),f=K(),D&&D.c(),u=K(),d=I("div"),h=I("button"),o=R("Save"),this.h()},l(T){e=S(T,"DIV",{"x-show":!0,class:!0});var C=w(e);t=S(C,"DIV",{class:!0});var y=w(t);l=S(y,"DIV",{class:!0});var b=w(l);a=S(b,"SELECT",{class:!0});var k=w(a);for(let B=0;B<p.length;B+=1)p[B].l(k);k.forEach(c),n=Y(b),r=S(b,"TEXTAREA",{type:!0,rows:!0,cols:!0,class:!0}),w(r).forEach(c),b.forEach(c),f=Y(y),D&&D.l(y),y.forEach(c),u=Y(C),d=S(C,"DIV",{class:!0});var A=w(d);h=S(A,"BUTTON",{type:!0,class:!0});var G=w(h);o=H(G,"Save"),G.forEach(c),A.forEach(c),C.forEach(c),this.h()},h(){i(a,"class","bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"),s[6]===void 0&&He(()=>s[21].call(a)),i(r,"type","text"),i(r,"rows","10"),i(r,"cols","50"),i(r,"class","flex-grow bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"),i(l,"class","flex items-center"),i(t,"class","flex items-center"),i(h,"type","button"),i(h,"class","btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-medium rounded"),i(d,"class","flex justify-center items-center space-x-2"),i(e,"x-show","open"),i(e,"class","flex justify-between items-center")},m(T,C){N(T,e,C),_(e,t),_(t,l),_(l,a);for(let y=0;y<p.length;y+=1)p[y]&&p[y].m(a,null);ne(a,s[6],!0),_(l,n),_(l,r),le(r,s[6]),_(t,f),D&&D.m(t,null),_(e,u),_(e,d),_(d,h),_(h,o),v||(g=[M(a,"change",s[21]),M(r,"input",s[22]),M(r,"input",Te(s[12])),M(h,"click",s[23])],v=!0)},p(T,C){if(C&0){V=se;let y;for(y=0;y<V.length;y+=1){const b=fe(T,V,y);p[y]?p[y].p(b,C):(p[y]=pe(b),p[y].c(),p[y].m(a,null))}for(;y<p.length;y+=1)p[y].d(1);p.length=V.length}C[0]&64&&ne(a,T[6]),C[0]&64&&le(r,T[6]),T[7]!==""?D?D.p(T,C):(D=be(T),D.c(),D.m(t,null)):D&&(D.d(1),D=null)},d(T){T&&c(e),Ge(p,T),D&&D.d(),v=!1,ie(g)}}}function pe(s){let e,t=s[30].gene+"",l,a,n=s[30].uniprot+"",r;return{c(){e=I("option"),l=R(t),a=R(" - "),r=R(n),this.h()},l(f){e=S(f,"OPTION",{});var u=w(e);l=H(u,t),a=H(u," - "),r=H(u,n),u.forEach(c),this.h()},h(){e.__value=s[30].kinase_domain,e.value=e.__value},m(f,u){N(f,e,u),_(e,l),_(e,a),_(e,r)},p:q,d(f){f&&c(e)}}}function be(s){let e,t;return{c(){e=I("p"),t=R(s[7]),this.h()},l(l){e=S(l,"P",{class:!0});var a=w(e);t=H(a,s[7]),a.forEach(c),this.h()},h(){i(e,"class","text-sm text-gray-500")},m(l,a){N(l,e,a),_(e,t)},p(l,a){a[0]&128&&X(t,l[7])},d(l){l&&c(e)}}}function xe(s){let e,t,l,a,n,r;return{c(){e=I("button"),t=I("div"),l=I("div"),a=K(),n=I("div"),r=R("Processing..."),this.h()},l(f){e=S(f,"BUTTON",{type:!0,class:!0});var u=w(e);t=S(u,"DIV",{class:!0});var d=w(t);l=S(d,"DIV",{class:!0}),w(l).forEach(c),a=Y(d),n=S(d,"DIV",{class:!0});var h=w(n);r=H(h,"Processing..."),h.forEach(c),d.forEach(c),u.forEach(c),this.h()},h(){i(l,"class","h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"),i(n,"class","ml-2"),i(t,"class","flex items-center justify-center m-[10px]"),i(e,"type","button"),i(e,"class","bg-red-800 h-max w-max rounded-lg text-white font-bold hover:bg-red-900 hover:cursor-not-allowed duration-[500ms,800ms]"),e.disabled=!0},m(f,u){N(f,e,u),_(e,t),_(t,l),_(t,a),_(t,n),_(n,r)},p:q,d(f){f&&c(e)}}}function $e(s){let e,t,l,a,n,r;return{c(){e=I("button"),t=I("div"),l=I("div"),a=R("Prediction"),this.h()},l(f){e=S(f,"BUTTON",{type:!0,class:!0});var u=w(e);t=S(u,"DIV",{class:!0});var d=w(t);l=S(d,"DIV",{class:!0});var h=w(l);a=H(h,"Prediction"),h.forEach(c),d.forEach(c),u.forEach(c),this.h()},h(){i(l,"class","ml-2"),i(t,"class","flex items-center justify-center m-[10px]"),i(e,"type","button"),i(e,"class","bg-red-800 h-max w-max rounded-lg text-white font-bold hover:bg-red-900")},m(f,u){N(f,e,u),_(e,t),_(t,l),_(l,a),n||(r=M(e,"click",s[13]),n=!0)},p:q,d(f){f&&c(e),n=!1,r()}}}function ge(s){let e,t,l,a,n,r,f,u,d,h,o,v=parseFloat(s[1].probability).toFixed(4)+"",g,V,p,D=s[1].result+"",T,C;return{c(){e=I("div"),t=I("div"),l=I("div"),a=I("div"),n=j("svg"),r=j("path"),f=K(),u=I("div"),d=I("p"),h=R(`With a score of
                        `),o=I("span"),g=R(v),V=R(`, the prediction is
                        `),p=I("span"),T=R(D),C=R("."),this.h()},l(y){e=S(y,"DIV",{class:!0});var b=w(e);t=S(b,"DIV",{class:!0});var k=w(t);l=S(k,"DIV",{class:!0});var A=w(l);a=S(A,"DIV",{class:!0});var G=w(a);n=z(G,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var B=w(n);r=z(B,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),w(r).forEach(c),B.forEach(c),G.forEach(c),f=Y(A),u=S(A,"DIV",{class:!0});var O=w(u);d=S(O,"P",{class:!0});var m=w(d);h=H(m,`With a score of
                        `),o=S(m,"SPAN",{class:!0});var E=w(o);g=H(E,v),E.forEach(c),V=H(m,`, the prediction is
                        `),p=S(m,"SPAN",{class:!0});var F=w(p);T=H(F,D),F.forEach(c),C=H(m,"."),m.forEach(c),O.forEach(c),A.forEach(c),k.forEach(c),b.forEach(c),this.h()},h(){i(r,"fill-rule","evenodd"),i(r,"d","M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"),i(r,"clip-rule","evenodd"),i(n,"xmlns","http://www.w3.org/2000/svg"),i(n,"class","h-5 w-5 text-blue-500"),i(n,"viewBox","0 0 20 20"),i(n,"fill","currentColor"),i(a,"class","bg-blue-200 flex p-2 rounded-md"),i(o,"class","font-bold"),i(p,"class","font-bold"),i(d,"class","text-gray-700 text-lg"),i(u,"class","text-center sm:text-left"),i(l,"class","flex flex-col sm:flex-row justify-start items-center gap-4"),i(t,"class","w-1/2 bg-blue-100 rounded-lg shadow-sm p-5 border-dashed border border-blue-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0"),i(e,"class","w-full flex justify-center items-center")},m(y,b){N(y,e,b),_(e,t),_(t,l),_(l,a),_(a,n),_(n,r),_(l,f),_(l,u),_(u,d),_(d,h),_(d,o),_(o,g),_(d,V),_(d,p),_(p,T),_(d,C)},p(y,b){b[0]&2&&v!==(v=parseFloat(y[1].probability).toFixed(4)+"")&&X(g,v),b[0]&2&&D!==(D=y[1].result+"")&&X(T,D)},d(y){y&&c(e)}}}function et(s){let e,t,l,a,n,r,f,u,d,h,o,v,g,V,p,D,T,C,y=!s[2]&&ce(s),b=s[2]&&de(s),k=!s[5]&&me(s),A=s[5]&&ve(s);function G(E,F){return E[8]?xe:$e}let B=G(s),O=B(s),m=s[1]&&ge(s);return{c(){e=I("div"),t=I("div"),l=I("p"),a=R("Substrate Sequence"),n=K(),y&&y.c(),r=K(),b&&b.c(),f=K(),u=I("div"),d=I("div"),h=I("p"),o=R("Kinase Sequences"),v=K(),k&&k.c(),g=K(),A&&A.c(),V=K(),p=I("div"),O.c(),D=K(),m&&m.c(),T=ee(),this.h()},l(E){e=S(E,"DIV",{class:!0});var F=w(e);t=S(F,"DIV",{class:!0});var Q=w(t);l=S(Q,"P",{class:!0});var Z=w(l);a=H(Z,"Substrate Sequence"),Z.forEach(c),n=Y(Q),y&&y.l(Q),r=Y(Q),b&&b.l(Q),Q.forEach(c),F.forEach(c),f=Y(E),u=S(E,"DIV",{class:!0});var J=w(u);d=S(J,"DIV",{class:!0});var P=w(d);h=S(P,"P",{class:!0});var L=w(h);o=H(L,"Kinase Sequences"),L.forEach(c),v=Y(P),k&&k.l(P),g=Y(P),A&&A.l(P),P.forEach(c),J.forEach(c),V=Y(E),p=S(E,"DIV",{class:!0});var U=w(p);O.l(U),U.forEach(c),D=Y(E),m&&m.l(E),T=ee(),this.h()},h(){i(l,"class","text-blue-800 font-bold text-md"),i(t,"class","p-2 bg-white rounded w-1/2"),i(e,"class","flex"),i(h,"class","text-blue-800 font-bold text-md"),i(d,"class","p-2 bg-white rounded w-1/2"),i(u,"class","flex"),i(p,"class","flex items-center justify-left")},m(E,F){N(E,e,F),_(e,t),_(t,l),_(l,a),_(t,n),y&&y.m(t,null),_(t,r),b&&b.m(t,null),N(E,f,F),N(E,u,F),_(u,d),_(d,h),_(h,o),_(d,v),k&&k.m(d,null),_(d,g),A&&A.m(d,null),N(E,V,F),N(E,p,F),O.m(p,null),N(E,D,F),m&&m.m(E,F),N(E,T,F),C=!0},p(E,F){E[2]?y&&(y.d(1),y=null):y?y.p(E,F):(y=ce(E),y.c(),y.m(t,r)),E[2]?b?(b.p(E,F),F[0]&4&&W(b,1)):(b=de(E),b.c(),W(b,1),b.m(t,null)):b&&(Ve(),te(b,1,1,()=>{b=null}),Ie()),E[5]?k&&(k.d(1),k=null):k?k.p(E,F):(k=me(E),k.c(),k.m(d,g)),E[5]?A?A.p(E,F):(A=ve(E),A.c(),A.m(d,null)):A&&(A.d(1),A=null),B===(B=G(E))&&O?O.p(E,F):(O.d(1),O=B(E),O&&(O.c(),O.m(p,null))),E[1]?m?m.p(E,F):(m=ge(E),m.c(),m.m(T.parentNode,T)):m&&(m.d(1),m=null)},i(E){C||(W(b),C=!0)},o(E){te(b),C=!1},d(E){E&&c(e),y&&y.d(),b&&b.d(),E&&c(f),E&&c(u),k&&k.d(),A&&A.d(),E&&c(V),E&&c(p),O.d(),E&&c(D),m&&m.d(E),E&&c(T)}}}const tt="";function ye(s){return s.length>25?s.slice(0,25)+"...":s}const Ee=s=>s;function lt(s,e,t){const l=Pe();let a=null,n=!1,r=["PSVEPPLSQETFSDL"],f=new Array(r.length).fill(""),u=!1;const d=["L","A","G","V","S","E","R","T","I","D","P","K","Q","N","F","Y","M","H","W","C","X","B","U","Z","O"];let h="HLEDIATERATRHRYNAVTGEWLDDEVLIKMASQPFGRGAMRECFRTKKLSNFLHAQQWKGASNYVAKRYIEPVDRDVYFEDVRLQMEAKLWGEEYNRHKPPKQVDIMQMCIIELKDRPGKPLFHLEHYIEGKYIKYNSNSGFVRDDNIRLTPQAFSHFTFERSGHQLIVVDIQGVGDLYTDPQIHTETGTDFGDGNLGVRGMALFFYSHACNRIC",o,v=!1,g;function V(){if(g&&g[0]){const P=new FileReader;P.onload=L=>{const U=L.target.result.split(`
`);t(3,r=[...r,...U]),t(4,f=new Array(r.length).fill("")),r.forEach((ae,Ae)=>p(Ae))},P.readAsText(g[0])}}function p(P){let L=r[P];L.length!==15?t(4,f[P]="Substrate should be 15 characters long.",f):[...L].every(U=>d.includes(U))?L.charAt(7)!=="T"&&L.charAt(7)!=="S"?t(4,f[P]="Substrate should have a T or S in the middle.",f):t(4,f[P]="",f):t(4,f[P]="Substrate should contain only the allowed characters: L, A, G, V, S, E, R, T, I, D, P, K, Q, N, F, Y, M, H, W, C, X, B, U, Z, O.",f)}function D(P,L){t(3,r[L]=P.target.value.toUpperCase(),r),p(L)}function T(){t(3,r=[...r,""]),t(4,f=[...f,""]),p(r.length-1)}function C(P){y(P),l("click")}function y(P){t(3,r=r.filter((L,U)=>U!==P)),t(4,f=f.filter((L,U)=>U!==P))}function b(P){t(6,h=P.target.value),l("input",h)}async function k(){t(8,v=!0);try{const P=await fetch(`${tt}/api/predict`,{method:"POST",mode:"cors",body:JSON.stringify({kinase:h,substrates:r}),headers:{"content-type":"application/json"}});if(!P.ok)throw new Error(`HTTP error! status: ${P.status}`);t(1,a=await P.json()),console.log("predResponse",a)}catch(P){console.error("There was a problem with the fetch operation:",P)}finally{t(8,v=!1)}}Ce(async()=>{se.reduce((P,L)=>{const U=L.family,ae=L["kinase domain"];return P.has(U)||P.set(U,[]),P.get(U).push(ae),P},new Map)});const A=()=>t(2,n=!n);function G(P,L){P[L]=this.value,t(3,r)}const B=(P,L)=>D(L,P),O=P=>C(P);function m(){g=this.files,t(0,g)}const E=()=>document.getElementById("file").click(),F=()=>t(5,u=!u);function Q(){h=Be(this),t(6,h)}function Z(){h=this.value,t(6,h)}const J=()=>o===""?t(5,u=!1):t(5,u=!0);return s.$$.update=()=>{s.$$.dirty[0]&1&&(t(1,a=null),t(7,o=""),g&&(V(),t(0,g=null)))},[g,a,n,r,f,u,h,o,v,D,T,C,b,k,A,G,B,O,m,E,F,Q,Z,J]}class it extends we{constructor(e){super(),ke(this,e,lt,et,De,{},null,[-1,-1])}}export{it as default};
