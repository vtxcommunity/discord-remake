(()=>{"use strict";let e=!1;function t(){let t=document.getElementById("all_cards_listing")?.childNodes??null,o=document.getElementById("shuffle_cards_btn");if(null!==t&&null!==o){o.style.pointerEvents="none";var n=new URL(window.location.href).searchParams.get("shareIids");let s=[];if(null==n||""===n||e){var l=[...t];const e=3;s=l.map((e=>({x:e,r:Math.random()}))).sort(((e,t)=>e.r-t.r)).map((e=>e.x)).slice(0,e)}else{let t=n?.split(",");t&&(t.forEach((e=>{let t=document.getElementById("all_cards_listing")?.querySelector("div[data-id="+e+"]");t&&s.push(t)})),e=!0)}let i=document.getElementById("grid_hero_tarot_suffle");if(i){i.classList.add("pre-animation");var r=document.createElement("div");s.forEach((function(e){let t=e.cloneNode(!0),o=t.querySelector(".learn-more-padding");o&&o.classList.remove("hide");let n=t.querySelector(".link-arrow-more");n&&n.classList.remove("hide");let l=t.querySelector(".box");l?(l.style.transition="opacity 0.6s linear",l.style.opacity="0"):console.error("The dialog box element not found",t),r.appendChild(t)})),setTimeout((()=>{i.innerHTML=r.innerHTML,i.classList.remove("pre-animation"),setTimeout((()=>{o?o.style.pointerEvents="auto":console.error("shuffle cards button not found")}),200),i.querySelectorAll(".w-dyn-item").forEach((e=>e.addEventListener("click",(function(t){if(t.target instanceof HTMLElement&&!t.target.closest(".box")){let t=e.querySelector(".box");t.style.display="flex",setTimeout((function(){document.body.style.overflow="hidden",t.style.opacity="1"}),100)}else if(t.target instanceof HTMLElement&&(t.target.classList.contains("box-x")||t.target.classList.contains("modal-bg"))){let e=t.target.closest(".box");e.style.opacity="0",document.body.style.overflow="auto",setTimeout((function(){e.style.display="none"}),500)}}))))}),300)}else console.error("suffle cards grid element not found.")}else console.error("Cards not found.")}!function(){t();let e=document.getElementById("shuffle_cards_btn");e?e.onclick=function(){t()}:console.error("shuffle cards button not found");let o=document.getElementById("share_your_tarot_btn");o?o.addEventListener("click",(function(e){let t=window.location,n=t.origin+t.pathname;const l=document.getElementById("grid_hero_tarot_suffle").querySelectorAll(".w-dyn-item");let r=[];l.forEach((e=>{r.push(e.getAttribute("data-id"))})),n+="?shareIids="+r.toString(),navigator.clipboard.writeText(n);let s=o.querySelector(".tooltip");s.classList.remove("hide"),s.style.display="flex",setTimeout((function(){s.style.opacity="0",setTimeout((function(){s.classList.add("hide")}),100)}),5e3)})):console.error("Share your tarot button not found");let n=document.getElementById("see_whole_deck_link");n?n.addEventListener("click",(function(e){let t=n.getAttribute("href");setTimeout((function(){"#see"==t?n.setAttribute("href","#main"):n.setAttribute("href","#see")}),300)})):console.error("See the whole deck element not found")}()})();