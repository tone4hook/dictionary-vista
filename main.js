(()=>{"use strict";var e,r,t,n,o,i,a,u,l,f,s,d,c={716:(e,r,t)=>{Promise.all([t.e(875),t.e(213)]).then(t.bind(t,213))}},p={};function h(e){var r=p[e];if(void 0!==r)return r.exports;var t=p[e]={id:e,exports:{}};return c[e](t,t.exports,h),t.exports}h.m=c,h.c=p,h.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return h.d(r,{a:r}),r},h.d=(e,r)=>{for(var t in r)h.o(r,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},h.f={},h.e=e=>Promise.all(Object.keys(h.f).reduce(((r,t)=>(h.f[t](e,r),r)),[])),h.u=e=>e+".js",h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),h.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="vista-dictionary:",h.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){a=s;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,h.nc&&a.setAttribute("nonce",h.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var d=(r,n)=>{a.onerror=a.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),u&&document.head.appendChild(a)}},h.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{h.S={};var e={},r={};h.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];h.o(h.S,t)||(h.S[t]={});var i=h.S[t],a="vista-dictionary",u=(e,r,t,n)=>{var o=i[e]=i[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:a>u.from))&&(o[r]={get:t,from:a,eager:!!n})},l=[];return"default"===t&&(u("pinia","2.1.7",(()=>Promise.all([h.e(849),h.e(875)]).then((()=>()=>h(849))))),u("vue","3.4.24",(()=>h.e(31).then((()=>()=>h(31)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),h.p="https://tone4hook.github.io/vista-dictionary/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],i=(typeof o)[0];if(n>=r.length)return"u"==i;var a=r[n],u=(typeof a)[0];if(i!=u)return"o"==i&&"n"==u||"s"==u||"u"==i;if("o"!=i&&"u"!=i&&o!=a)return o<a;n++}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],i=n<0;i&&(n=-n-1);for(var a=0,u=1,l=!0;;u++,a++){var f,s,d=u<e.length?(typeof e[u])[0]:"";if(a>=r.length||"o"==(s=(typeof(f=r[a]))[0]))return!l||("u"==d?u>n&&!i:""==d!=i);if("u"==s){if(!l||"u"!=d)return!1}else if(l)if(d==s)if(u<=n){if(f!=e[u])return!1}else{if(i?f>e[u]:f<e[u])return!1;f!=e[u]&&(l=!1)}else if("s"!=d&&"n"!=d){if(i||u<=n)return!1;l=!1,u--}else{if(u<=n||s<d!=i)return!1;l=!1}else"s"!=d&&"n"!=d&&(l=!1,u--)}}var c=[],p=c.pop.bind(c);for(a=1;a<e.length;a++){var h=e[a];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r,t)=>{var i=e[r];return(r=Object.keys(i).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&i[r]},a=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,n,o){var i=h.I(r);return i&&i.then?i.then(e.bind(e,r,h.S[r],t,n,o)):e(0,h.S[r],t,n,o)})(((e,r,t,n,o)=>{var u=r&&h.o(r,t)&&i(r,t,n);return u?a(u):o()})),l={},f={875:()=>u("default","vue",[1,3,2,19],(()=>h.e(31).then((()=>()=>h(31))))),6:()=>u("default","pinia",[1,2,1,7],(()=>h.e(849).then((()=>()=>h(849)))))},s={213:[6],875:[875]},d={},h.f.consumes=(e,r)=>{h.o(s,e)&&s[e].forEach((e=>{if(h.o(l,e))return r.push(l[e]);if(!d[e]){var t=r=>{l[e]=0,h.m[e]=t=>{delete h.c[e],t.exports=r()}};d[e]=!0;var n=r=>{delete l[e],h.m[e]=t=>{throw delete h.c[e],r}};try{var o=f[e]();o.then?r.push(l[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))},(()=>{h.b=document.baseURI||self.location.href;var e={792:0};h.f.j=(r,t)=>{var n=h.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(875!=r){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=h.p+h.u(r),a=new Error;h.l(i,(t=>{if(h.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[i,a,u]=t,l=0;if(i.some((r=>0!==e[r]))){for(n in a)h.o(a,n)&&(h.m[n]=a[n]);u&&u(h)}for(r&&r(t);l<i.length;l++)o=i[l],h.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkvista_dictionary=self.webpackChunkvista_dictionary||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),h.nc=void 0,h(716)})();