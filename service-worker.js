"use strict";var precacheConfig=[["/home/index.html","5e5b0d0791b002876f833b78e47b6331"],["/home/static/css/main.33d2741c.css","0a7fb63d89ca2ad153b5ff87b4abb945"],["/home/static/js/main.4b01a3f1.js","2c3d8405de45ad1d10c4fef1ff1d841d"],["/home/static/media/about.3128138d.png","3128138dcd2852b82741e15a8658971f"],["/home/static/media/mecirc.99856bb7.png","99856bb7925ad8f4b8cc0cc0a08a7c13"],["/home/static/media/pic1.64bb3baa.png","64bb3baa20f0b6c25f2a26b44d76e828"],["/home/static/media/pic4.a4e5aeb5.png","a4e5aeb5cc6160dfce087c0abe93f157"],["/home/static/media/pic5.90375b8a.png","90375b8abf1471af76fef6f6e7f75991"],["/home/static/media/piechart.583a9865.png","583a9865d6d6f33d30972237c8b29ba1"],["/home/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/home/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/home/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/home/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/home/static/media/steves.9b279dd2.png","9b279dd25937c5f98064f2926a89608c"],["/home/static/media/windhorse.493ec4c7.png","493ec4c7702220a078a65eb4abf4d365"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/home/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});