"use strict";var precacheConfig=[["/home/index.html","a16d994e1a5abf210f13323fc13d80b5"],["/home/static/css/main.701cda1d.css","02e8ae26676b56744bd9a19838b76dbb"],["/home/static/js/main.e895f889.js","4f95c6d341a31c9eb1ad08518d26d593"],["/home/static/media/about.3e143a53.png","3e143a5367169b09b32697342cb6d13e"],["/home/static/media/checkersgif.64224c52.gif","64224c52d26e8b21332952f01785b248"],["/home/static/media/cityScape.cccf9cd8.jpg","cccf9cd876a712793d9a88c5bd65b145"],["/home/static/media/logo.c34a0b38.png","c34a0b388c05d219f2a66a64d4b1ba06"],["/home/static/media/mapperCollage.184b85c5.png","184b85c57310a7faf7884998466f5b5c"],["/home/static/media/mecirc.99856bb7.png","99856bb7925ad8f4b8cc0cc0a08a7c13"],["/home/static/media/pic1.467f0b3b.jpeg","467f0b3b2228c399b0d4b3bbe12c8cfa"],["/home/static/media/pic2c.6c215573.jpeg","6c215573456ae9cfc807ee8d6b163179"],["/home/static/media/pic3.0b7748c1.jpeg","0b7748c1eb728116dd2d3ff9e985326e"],["/home/static/media/pic4.e2a0c856.jpeg","e2a0c8561d16fb5eda862ba424eba20d"],["/home/static/media/pic5.5a28394a.jpeg","5a28394aca9b72f74a74579a3ea228e7"],["/home/static/media/piechart.583a9865.png","583a9865d6d6f33d30972237c8b29ba1"],["/home/static/media/segoesc.5c452fb7.ttf","5c452fb7a0f5751f4e94e9d84eb01154"],["/home/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/home/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/home/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/home/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/home/static/media/steves.5fd06bc1.png","5fd06bc104aa4aea3a6b81e4dfadf470"],["/home/static/media/windhorse.1bc16655.png","1bc166556c51cb11c1860eea5b8d0f0e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/home/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});