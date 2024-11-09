import{a as y,S as H,i as Y}from"./assets/vendor-Rdv7LHNr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))L(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const I of o.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&L(I)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function L(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const U={TOP_LEFT:"topLeft",TOP_RIGHT:"topRight"},_={NO_IMAGES_MATCHING_SEARCH_QUERY:"Sorry, there are no images matching your search query. Please try again!",REACHED_END_OF_SEARCH_RESULTS:"We're sorry, but you've reached the end of search results.",VALID_SEARCH_QUERY:"Please enter a valid search!",QUERY_FAILED:"Query failed!"},c={WARNING:"warning",ERROR:"error",INFO:"info"},m={SUBMIT:"submit",CLICK:"click"},n={FORM:"form",LOADER:".loader",GALLERY:".gallery",BTN_MORE:".btnMore",GALLERY_ITEM:".gallery-item"},d={API_KEY:"46865646-27ce533d0a2b530f03419db89",URL:"https://pixabay.com/api/"},$="smooth",R={HITS:"hits",TOTAL_HITS:"totalHits",TOTAL:"total"},a={COLLECTIONS:"collections",COMMENTS:"comments",DOWNLOADS:"downloads",ID:"id",IMAGE_HEIGHT:"imageHeight",IMAGE_WIDTH:"imageWidth",LARGE_IMAGE_URL:"largeImageURL",LIKES:"likes",PAGE_URL:"pageURL",PREVIEW_HEIGHT:"previewHeight",PREVIEW_URL:"previewURL",PREVIEW_WIDTH:"previewWidth",TAGS:"tags",TYPE:"type",USER:"user",USER_IMAGE_URL:"userImageURL",USER_ID:"user_id",VIEWS:"views",WEB_FORMAT_HEIGHT:"webformatHeight",WEB_FORMAT_URL:"webformatURL",WEB_FORMAT_WIDTH:"webformatWidth"},i={LIKES:"Likes",VIEWS:"Views",COMMENTS:"Comments",DOWNLOADS:"Downloads"},W={SEARCH:"search"},t={HIDDEN:"hidden",GALLERY_ITEM:"gallery-item",GALLERY_LINK:"gallery-link",GALLERY_IMAGE:"gallery-image",GALLERY_LEGEND:"gallery-legend",GALLERY_LEGEND_ITEM:"gallery-legend-item",GALLERY_LEGEND_ITEM_LABEL:"gallery-legend-item-label",GALLERY_LEGEND_ITEM_VALUE:"gallery-legend-item-value"};let T={image_type:"photo",orientation:"horizontal",safesearch:"true",min_width:"360",max_height:"200",per_page:"200"};function v(E,e=1,s=15){T.page=String(e),T.per_page=String(s);let L=new URLSearchParams(T);return`${d.URL}?key=${d.API_KEY}&q=${E}&${L}`}async function M(E,e,s){return(await y.get(v(E,e,s))).data}const C=document.querySelector(".gallery");let f=null,P=E=>E.map(e=>`<li class=${t.GALLERY_ITEM}>
        <a class=${t.GALLERY_LINK} href="${e[a.LARGE_IMAGE_URL]}">
          <img
            class=${t.GALLERY_IMAGE}
            src="${e[a.PREVIEW_URL]}"
            alt="${e[a.TAGS]}"
          />
          <span class=${t.GALLERY_LEGEND}>
                <div class=${t.GALLERY_LEGEND_ITEM}>
                  <p class=${t.GALLERY_LEGEND_ITEM_LABEL}>${i.LIKES}</p>
                  <p class=${t.GALLERY_LEGEND_ITEM_VALUE}>${e[a.LIKES]}</p>
                </div>
                <div class=${t.GALLERY_LEGEND_ITEM}>
                  <p class=${t.GALLERY_LEGEND_ITEM_LABEL}>${i.VIEWS}</p>
                  <p class=${t.GALLERY_LEGEND_ITEM_VALUE}>${e[a.VIEWS]}</p>
               </div>
                <div class=${t.GALLERY_LEGEND_ITEM}>
                  <p class=${t.GALLERY_LEGEND_ITEM_LABEL}>${i.COMMENTS}</p>
                  <p class=${t.GALLERY_LEGEND_ITEM_VALUE}>${e[a.COMMENTS]}</p>
               </div>
                <div class=${t.GALLERY_LEGEND_ITEM}>
                  <p class=${t.GALLERY_LEGEND_ITEM_LABEL}>${i.DOWNLOADS}</p>
                  <p class=${t.GALLERY_LEGEND_ITEM_VALUE}>${e[a.DOWNLOADS]}</p>
               </div>
            </span>
          </a>
        </li>
      `).join("");f=new H(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function N(E){C.insertAdjacentHTML("beforeend",P(E)),w()}function w(){f.refresh()}const G=document.querySelector(n.FORM),b=document.querySelector(n.LOADER),V=document.querySelector(n.GALLERY),S=document.querySelector(n.BTN_MORE);let l=1;const u=15;let p=null,h=null,D=null,O=null;function g(){l>1&&S.classList.toggle(t.HIDDEN),b.classList.toggle(t.HIDDEN)}function A({position:E=U.TOP_RIGHT,method:e=c.INFO,message:s}){Y[e]({position:E,message:s})}function B(E){window.scrollBy({top:E*2,left:0,behavior:$})}G.addEventListener(m.SUBMIT,E=>{const e=E.target.elements[W.SEARCH];if(h=e.value.trim(),E.preventDefault(),V.innerHTML="",g(),l=1,e.value.trim().length===0)return g(),A({message:_.VALID_SEARCH_QUERY,method:c.WARNING}),!1;M(e.value.trim(),l,u).then(s=>{s[R.HITS].length<1&&A({method:c.WARNING,message:_.NO_IMAGES_MATCHING_SEARCH_QUERY}),D=s[R.TOTAL_HITS],N(s[R.HITS]),l++}).catch(s=>{throw A({method:c.ERROR,message:_.QUERY_FAILED}),new Error(s.message)}).finally(()=>{O=document.querySelector(n.GALLERY_ITEM).getBoundingClientRect().height,g()}),G.reset()});S.addEventListener(m.CLICK,E=>{E.preventDefault(),p=Math.ceil(D/u),M(h,l,u).then(e=>{N(e[R.HITS]),l++,l>p&&(A({message:_.REACHED_END_OF_SEARCH_RESULTS}),S.classList.add(t.HIDDEN)),B(O)})});
//# sourceMappingURL=index.js.map
