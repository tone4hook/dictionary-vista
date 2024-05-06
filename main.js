(()=>{"use strict";var e,r,t,n,o={716:(e,r,t)=>{Promise.all([t.e(785),t.e(736),t.e(809)]).then(t.bind(t,809))}},a={};function i(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={id:e,exports:{}};return o[e](t,t.exports,i),t.exports}i.m=o,i.c=a,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="vista_dictionary:",i.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var u,f;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var p=s[l];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==r+o){u=p;break}}u||(f=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.setAttribute("data-webpack",r+o),u.src=t),e[t]=[n];var d=(r,n)=>{u.onerror=u.onload=null,clearTimeout(h);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(n))),r)return r(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),f&&document.head.appendChild(u)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={},n={},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var o=n[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var a=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),i.m[e]=()=>{throw r},o.p=0},u=(e,t,n,i,u,f)=>{try{var s=e(t,n);if(!s||!s.then)return u(s,i,f);var l=s.then((e=>u(e,i)),a);if(!f)return l;r.push(o.p=l)}catch(e){a(e)}},f=(e,r,n)=>u(r.get,o[1],t,0,s,n),s=r=>{o.p=1,i.m[e]=e=>{e.exports=r()}};u(i,o[2],0,0,((e,r,t)=>e?u(i.I,o[0],0,e,f,t):a()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var a=i.S[t],u="vista_dictionary",f=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:u>i.from))&&(o[r]={get:t,from:u,eager:!!n})},s=[];return"default"===t&&(f("pinia","2.1.7",(()=>Promise.all([i.e(849),i.e(785)]).then((()=>()=>i(849))))),f("vue","3.4.24",(()=>i.e(31).then((()=>()=>i(31)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),i.p="https://tone4hook.github.io/vista-dictionary/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return n}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+f()+")":1===u?"("+f()+" || "+f()+")":2===u?i.pop()+" "+i.pop():r(u))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,f=!0;;u++,i++){var s,l,p=u<r.length?(typeof r[u])[0]:"";if(i>=n.length||"o"==(l=(typeof(s=n[i]))[0]))return!f||("u"==p?u>o&&!a:""==p!=a);if("u"==l){if(!f||"u"!=p)return!1}else if(f)if(p==l)if(u<=o){if(s!=r[u])return!1}else{if(a?s>r[u]:s<r[u])return!1;s!=r[u]&&(f=!1)}else if("s"!=p&&"n"!=p){if(a||u<=o)return!1;f=!1,u--}else{if(u<=o||l<p!=a)return!1;f=!1}else"s"!=p&&"n"!=p&&(f=!1,u--)}}var d=[],h=d.pop.bind(d);for(i=1;i<r.length;i++){var c=r[i];d.push(1==c?h()|h():2==c?h()&h():c?t(c,n):!h())}return!!h()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},o=(e,o,i,f)=>{var s=n(e,i);return t(f,s)||a(((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(e,i,s,f)),u(e[i][s])},a=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},u=e=>(e.loaded=1,e.get()),f=(e=>function(r,t,n,o){var a=i.I(r);return a&&a.then?a.then(e.bind(e,r,i.S[r],t,n,o)):e(r,i.S[r],t,n,o)})(((e,r,t,n,a)=>r&&i.o(r,t)?o(r,0,t,n):a())),s={},l={785:()=>f("default","vue",[1,3,2,19],(()=>i.e(31).then((()=>()=>i(31))))),736:()=>f("default","pinia",[1,2,1,7],(()=>i.e(849).then((()=>()=>i(849)))))},p={736:[736],785:[785]},d={};i.f.consumes=(e,r)=>{i.o(p,e)&&p[e].forEach((e=>{if(i.o(s,e))return r.push(s[e]);if(!d[e]){var t=r=>{s[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=r()}};d[e]=!0;var n=r=>{delete s[e],i.m[e]=t=>{throw delete i.c[e],r}};try{var o=l[e]();o.then?r.push(s[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))}})(),(()=>{i.b=document.baseURI||self.location.href;var e={792:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^7(36|85)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=i.p+i.u(r),u=new Error;i.l(a,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,u,f]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in u)i.o(u,n)&&(i.m[n]=u[n]);f&&f(i)}for(r&&r(t);s<a.length;s++)o=a[s],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkvista_dictionary=self.webpackChunkvista_dictionary||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.nc=void 0,i(716)})();