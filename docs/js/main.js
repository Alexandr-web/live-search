!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(module,exports){const liveSearch=()=>{const items=document.querySelectorAll(".list__item"),form=document.querySelector(".form"),searchEl=document.querySelector(".form__search");function handlerOfSearch(e){"FORM"===this.nodeName&&e.preventDefault();const searchText=searchEl.value;searchText.length?items.forEach(item=>{if(-1!==item.innerText.search(searchText)){item.hidden=!1,item.dataset.lastText=item.innerText;const writeText=item.innerText.replace(eval(`/${searchText}/`),`<span class="active">${searchText}</span>`);item.innerHTML=writeText}else item.hidden=!0,item.innerHTML=item.dataset.lastText?item.dataset.lastText:item.innerText}):items.forEach(e=>{e.hidden=!1,e.innerHTML=e.dataset.lastText?e.dataset.lastText:e.innerText})}form.addEventListener("submit",handlerOfSearch),searchEl.addEventListener("input",handlerOfSearch)};liveSearch()}]);