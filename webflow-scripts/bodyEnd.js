(()=>{"use strict";var e={596:(e,n,a)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.initLanguageSelect=void 0;const o=a(717);function l(e){return`<div class="dropdown-item" tabindex="0" role="button">\n      <div class="dropdown-clickable">\n        <div class="locale-container" data-locale="${e.code}">\n          <img class="flag flag-${e.code}"/>\n          <div class="dropdown-language-name">${e.name}</div>\n        </div>\n      </div>\n    </div>`}function i(){let e=[];return window.Localize.getAvailableLanguages((function(n,a){n?console.error(n):e=a.sort((function(e,n){return e.name.localeCompare(n.name)}))})),(0,o.updateSelectedLanguage)(),e}n.initLanguageSelect=function(){!function(){let e=document.querySelectorAll(".language .lang-container .lang-selector-container");e&&e.forEach((function(e){e.addEventListener("click",(function(e){let n=document.getElementById("locale-dropdown");n&&(n.style.display="block")}))}))}();const e=i();if(e){let n=document.querySelector(".language .lang-dropdown-container .lang-dropdown");n&&(n.innerHTML=e.map(l).join(""))}document.addEventListener("click",(e=>{let n=document.getElementsByClassName("language")[0];n&&!n.contains(e.target)&&(0,o.hideLocalizer)()})),window.Localize.hideWidget(),function(){let e=document.querySelectorAll(".language .lang-container .dropdown-item");e&&e.forEach((function(e){e.addEventListener("click",(function(n){let a=e.querySelector(".locale-container");if(a){let e=a.dataset.locale;(0,o.setBrowserLanguage)(e),(0,o.hideLocalizer)(),i()}})),e.addEventListener("keyup",(function(n){n.preventDefault(),"Enter"===n.code&&e instanceof HTMLElement&&e.click()}))})),document.addEventListener("keyup",(function(e){if("Escape"===e.code){const e=document.getElementById("locale-dropdown");e&&"block"===window.getComputedStyle(e,null).display&&(0,o.hideLocalizer)()}}))}()}},717:function(e,n,a){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.updateSelectedLanguage=n.hideLocalizer=n.setBrowserLanguage=n.getLocalizerLanguage=void 0;const l=o(a(80)),i={},t={};function c(e){let n=[];window.Localize.getAvailableLanguages((function(e,a){e?console.error(e):n=a}));const a={};n.forEach((e=>{a[e.code]=e}));const o=e&&null!=t[e]?t[e]:window.Localize.getLanguage();let l;if(null!=a[o])return a[o];if(null==l&&o.indexOf("-")>-1){const e=o.split("-")[0];l=a[e]}return l}l.default.forEach((e=>{"string"==typeof e.localizeCode&&"string"==typeof e.code&&(i[e.localizeCode]=e.code,t[e.code]=e.localizeCode)})),n.getLocalizerLanguage=c,n.setBrowserLanguage=function(e){if(window.Localize.setLanguage(e),null!=e&&null!=i[e]){const n=i[e];document.cookie=`locale=${n};path=/`}},n.hideLocalizer=function(){let e=document.getElementById("locale-dropdown");e&&(e.style.display="none")},n.updateSelectedLanguage=function(){const e=c();if(null==e)return;let n=document.querySelector(".lang-selector-container .flag");n&&(n.classList.remove(...n.classList),n.classList.add("flag","flag-"+e.code));let a=document.querySelector(".lang-selector-container .selector-language-name");a&&(a.innerHTML=e.name)}},638:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.setupDownloads=n.handleExternalDownloadClick=n.downloadFile=void 0,n.downloadFile=async(e,n)=>{const a=await fetch(e),o=await a.blob(),l=document.createElement("a");l.href=URL.createObjectURL(o),l.setAttribute("download",n),l.click()},n.handleExternalDownloadClick=e=>async a=>{a.preventDefault();const o=a.currentTarget.href;try{await(0,n.downloadFile)(o,e)}catch(a){console.error("Could not automatically download",a),window.open(o,"_blank")}},n.setupDownloads=()=>{document.querySelectorAll("[data-download-file]").forEach((e=>{const a=e;a.addEventListener("click",(0,n.handleExternalDownloadClick)(a.dataset.downloadFile??"untitled"))}))}},80:e=>{e.exports=JSON.parse('[{"name":"English, USA","englishName":"English, USA","code":"en-US","localizeCode":"en"},{"name":"English, UK","englishName":"English, UK","code":"en-GB","localizeCode":"en-GB"},{"name":"中文","englishName":"Chinese Simplified","code":"zh-CN","localizeCode":"zh-Hans"},{"name":"繁體中文","englishName":"Traditional Chinese","code":"zh-TW","localizeCode":"zh-TW"},{"name":"Čeština","englishName":"Czech","code":"cs","localizeCode":"cs"},{"name":"Dansk","englishName":"Danish","code":"da","localizeCode":"da"},{"name":"Nederlands","englishName":"Dutch","code":"nl","localizeCode":"nl"},{"name":"Français","englishName":"French","code":"fr","localizeCode":"fr"},{"name":"Deutsch","englishName":"German","code":"de","localizeCode":"de"},{"name":"Ελληνικά","englishName":"Greek","code":"el","localizeCode":"el"},{"name":"Magyar","englishName":"Hungarian","code":"hu","localizeCode":"hu"},{"name":"Italiano","englishName":"Italian","code":"it","localizeCode":"it"},{"name":"日本語","englishName":"Japanese","code":"ja","localizeCode":"ja"},{"name":"한국어","englishName":"Korean","code":"ko","localizeCode":"ko"},{"name":"Norwegian","englishName":"Norwegian","code":"no","localizeCode":"no"},{"name":"Hrvatski","englishName":"Croatian","code":"hr","localizeCode":"hr"},{"name":"Polski","englishName":"Polish","code":"pl","localizeCode":"pl"},{"name":"Português do Brasil","englishName":"Portuguese, Brazilian","code":"pt-BR","localizeCode":"pt-BR"},{"name":"Русский","englishName":"Russian","code":"ru","localizeCode":"ru"},{"name":"Español","englishName":"Spanish","code":"es-ES","localizeCode":"es"},{"name":"Svenska","englishName":"Swedish","code":"sv-SE","localizeCode":"sv"},{"name":"Türkçe","englishName":"Turkish","code":"tr","localizeCode":"tr"},{"name":"български","englishName":"Bulgarian","code":"bg","localizeCode":"bg"},{"name":"Українська","englishName":"Ukrainian","code":"uk","localizeCode":"uk"},{"name":"Suomi","englishName":"Finnish","code":"fi","localizeCode":"fi"},{"name":"Română","englishName":"Romanian","code":"ro","localizeCode":"ro"},{"name":"Lietuviškai","englishName":"Lithuanian","code":"lt","localizeCode":"lt"},{"name":"ไทย","englishName":"Thai","code":"th","localizeCode":"th"},{"name":"Tiếng Việt","englishName":"Vietnamese","code":"vi","localizeCode":"vi"},{"name":"हिंदी","englishName":"Hindi","code":"hi","localizeCode":"hi"}]')}},n={};function a(o){var l=n[o];if(void 0!==l)return l.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,a),i.exports}(()=>{const e=a(638);(0,a(596).initLanguageSelect)(),(0,e.setupDownloads)()})()})();