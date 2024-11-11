import{a as $,S as W,i as v}from"./assets/vendor-Rdv7LHNr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))L(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const S of a.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&L(S)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function L(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const C={TOP_LEFT:"topLeft",TOP_RIGHT:"topRight"},n={NO_IMAGES_MATCHING_SEARCH_QUERY:"Sorry, there are no images matching your search query. Please try again!",REACHED_END_OF_SEARCH_RESULTS:"We're sorry, but you've reached the end of search results.",VALID_SEARCH_QUERY:"Please enter a valid search!",QUERY_FAILED:"Query failed!"},i={WARNING:"warning",ERROR:"error",INFO:"info"},M={SUBMIT:"submit",CLICK:"click"},R={FORM:"form",LOADER:".loader",GALLERY:".gallery",BTN_MORE:".btnMore",GALLERY_ITEM:".gallery-item"},f={API_KEY:"46865646-27ce533d0a2b530f03419db89",URL:"https://pixabay.com/api/"},P="smooth",I={HITS:"hits",TOTAL_HITS:"totalHits",TOTAL:"total"},l={COLLECTIONS:"collections",COMMENTS:"comments",DOWNLOADS:"downloads",ID:"id",IMAGE_HEIGHT:"imageHeight",IMAGE_WIDTH:"imageWidth",LARGE_IMAGE_URL:"largeImageURL",LIKES:"likes",PAGE_URL:"pageURL",PREVIEW_HEIGHT:"previewHeight",PREVIEW_URL:"previewURL",PREVIEW_WIDTH:"previewWidth",TAGS:"tags",TYPE:"type",USER:"user",USER_IMAGE_URL:"userImageURL",USER_ID:"user_id",VIEWS:"views",WEB_FORMAT_HEIGHT:"webformatHeight",WEB_FORMAT_URL:"webformatURL",WEB_FORMAT_WIDTH:"webformatWidth"},A={LIKES:"Likes",VIEWS:"Views",COMMENTS:"Comments",DOWNLOADS:"Downloads"},w={SEARCH:"search"},t={HIDDEN:"hidden",GALLERY_ITEM:"gallery-item",GALLERY_LINK:"gallery-link",GALLERY_IMAGE:"gallery-image",GALLERY_LEGEND:"gallery-legend",GALLERY_LEGEND_ITEM:"gallery-legend-item",GALLERY_LEGEND_ITEM_LABEL:"gallery-legend-item-label",GALLERY_LEGEND_ITEM_VALUE:"gallery-legend-item-value"};let G={image_type:"photo",orientation:"horizontal",safesearch:"true",min_width:"360",max_height:"200",per_page:"200"};function b(E,e=1,s=15){G.page=String(e),G.per_page=String(s);let L=new URLSearchParams(G);return`${f.URL}?key=${f.API_KEY}&q=${E}&${L}`}async function D(E,e,s){return(await $.get(b(E,e,s))).data}const V=document.querySelector(".gallery");let N=null,B=E=>E.map(e=>`<li class=${t.GALLERY_ITEM}>
        <a class=${t.GALLERY_LINK} href="${e[l.LARGE_IMAGE_URL]}">
          <img
            class=${t.GALLERY_IMAGE}
            src="${e[l.PREVIEW_URL]}"
            alt="${e[l.TAGS]}"
          />
          <span class=${t.GALLERY_LEGEND}>
                <div class=${t.GALLERY_LEGEND_ITEM}>
                  <p class=${t.GALLERY_LEGEND_ITEM_LABEL}>${A.LIKES}</p>
                  <p class=${t.GALLERY_LEGEND_ITEM_VALUE}>${e[l.LIKES]}</p>
                </div>
                <div class=${t.GALLERY_LEGEND_ITEM}>
                  <p class=${t.GALLERY_LEGEND_ITEM_LABEL}>${A.VIEWS}</p>
                  <p class=${t.GALLERY_LEGEND_ITEM_VALUE}>${e[l.VIEWS]}</p>
               </div>
                <div class=${t.GALLERY_LEGEND_ITEM}>
                  <p class=${t.GALLERY_LEGEND_ITEM_LABEL}>${A.COMMENTS}</p>
                  <p class=${t.GALLERY_LEGEND_ITEM_VALUE}>${e[l.COMMENTS]}</p>
               </div>
                <div class=${t.GALLERY_LEGEND_ITEM}>
                  <p class=${t.GALLERY_LEGEND_ITEM_LABEL}>${A.DOWNLOADS}</p>
                  <p class=${t.GALLERY_LEGEND_ITEM_VALUE}>${e[l.DOWNLOADS]}</p>
               </div>
            </span>
          </a>
        </li>
      `).join("");N=new W(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function O(E){V.insertAdjacentHTML("beforeend",B(E)),F()}function F(){N.refresh()}const h=document.querySelector(R.FORM),y=document.querySelector(R.LOADER),K=document.querySelector(R.GALLERY),m=document.querySelector(R.BTN_MORE);let o=1,u=15,T=null,H=null,p=null,Y=null;function c(){o>1&&m.classList.toggle(t.HIDDEN),y.classList.toggle(t.HIDDEN)}function d(){m.classList.add(t.HIDDEN)}function g(){y.classList.add(t.HIDDEN)}function _({position:E=C.TOP_RIGHT,method:e=i.INFO,message:s}){v[e]({position:E,message:s})}function Q(E){window.scrollBy({top:E*2,left:0,behavior:P})}function U({totalPages:E}){if(o>E)return _({message:n.REACHED_END_OF_SEARCH_RESULTS}),o=1,d(),g(),!1}h.addEventListener(M.SUBMIT,E=>{const e=E.target.elements[w.SEARCH];if(H=e.value.trim(),E.preventDefault(),K.innerHTML="",c(),o=1,e.value.trim().length===0)return c(),_({message:n.VALID_SEARCH_QUERY,method:i.WARNING}),!1;D(e.value.trim(),o,u).then(s=>{if(s[I.HITS].length<1)return _({method:i.WARNING,message:n.NO_IMAGES_MATCHING_SEARCH_QUERY}),d(),g(),!1;p=s[I.TOTAL_HITS],O(s[I.HITS]),o++}).catch(s=>{throw _({method:i.ERROR,message:n.QUERY_FAILED}),g(),d(),new Error(s.message)}).finally(()=>{Y=document.querySelector(R.GALLERY_ITEM).getBoundingClientRect().height,c(),T=Math.ceil(p/u),U({page:o,totalPages:T})}),h.reset()});m.addEventListener(M.CLICK,E=>{E.preventDefault(),c(),T=Math.ceil(p/u),D(H,o,u).then(e=>{O(e[I.HITS]),o++,Q(Y)}).catch(e=>{throw _({method:i.ERROR,message:n.QUERY_FAILED}),g(),d(),new Error(e.message)}).finally(()=>{c(),U({page:o,totalPages:T})})});
//# sourceMappingURL=index.js.map
