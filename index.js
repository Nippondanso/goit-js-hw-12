import{a as $,S as W,i as v}from"./assets/vendor-Rdv7LHNr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))L(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&L(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function L(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const C={TOP_LEFT:"topLeft",TOP_RIGHT:"topRight"},n={NO_IMAGES_MATCHING_SEARCH_QUERY:"Sorry, there are no images matching your search query. Please try again!",REACHED_END_OF_SEARCH_RESULTS:"We're sorry, but you've reached the end of search results.",VALID_SEARCH_QUERY:"Please enter a valid search!",QUERY_FAILED:"Query failed!"},i={WARNING:"warning",ERROR:"error",INFO:"info"},f={SUBMIT:"submit",CLICK:"click"},R={FORM:"form",LOADER:".loader",GALLERY:".gallery",BTN_MORE:".btnMore",GALLERY_ITEM:".gallery-item"},p={API_KEY:"46865646-27ce533d0a2b530f03419db89",URL:"https://pixabay.com/api/"},P="smooth",I={HITS:"hits",TOTAL_HITS:"totalHits",TOTAL:"total"},l={COLLECTIONS:"collections",COMMENTS:"comments",DOWNLOADS:"downloads",ID:"id",IMAGE_HEIGHT:"imageHeight",IMAGE_WIDTH:"imageWidth",LARGE_IMAGE_URL:"largeImageURL",LIKES:"likes",PAGE_URL:"pageURL",PREVIEW_HEIGHT:"previewHeight",PREVIEW_URL:"previewURL",PREVIEW_WIDTH:"previewWidth",TAGS:"tags",TYPE:"type",USER:"user",USER_IMAGE_URL:"userImageURL",USER_ID:"user_id",VIEWS:"views",WEB_FORMAT_HEIGHT:"webformatHeight",WEB_FORMAT_URL:"webformatURL",WEB_FORMAT_WIDTH:"webformatWidth"},A={LIKES:"Likes",VIEWS:"Views",COMMENTS:"Comments",DOWNLOADS:"Downloads"},w={SEARCH:"search"},t={HIDDEN:"hidden",GALLERY_ITEM:"gallery-item",GALLERY_LINK:"gallery-link",GALLERY_IMAGE:"gallery-image",GALLERY_LEGEND:"gallery-legend",GALLERY_LEGEND_ITEM:"gallery-legend-item",GALLERY_LEGEND_ITEM_LABEL:"gallery-legend-item-label",GALLERY_LEGEND_ITEM_VALUE:"gallery-legend-item-value"};let g={image_type:"photo",orientation:"horizontal",safesearch:"true",min_width:"360",max_height:"200",per_page:"200"};function b(E,e=1,s=15){g.page=String(e),g.per_page=String(s);let L=new URLSearchParams(g);return`${p.URL}?key=${p.API_KEY}&q=${E}&${L}`}async function h(E,e,s){return(await $.get(b(E,e,s))).data}const V=document.querySelector(".gallery");let M=null,B=E=>E.map(e=>`<li class=${t.GALLERY_ITEM}>
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
      `).join("");M=new W(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function D(E){V.insertAdjacentHTML("beforeend",B(E)),F()}function F(){M.refresh()}const m=document.querySelector(R.FORM),N=document.querySelector(R.LOADER),K=document.querySelector(R.GALLERY),G=document.querySelector(R.BTN_MORE);let o=1,u=15,T=null,O=null,S=null,y=null;function c(){o>1&&G.classList.toggle(t.HIDDEN),N.classList.toggle(t.HIDDEN)}function H(){G.classList.add(t.HIDDEN)}function Y(){N.classList.add(t.HIDDEN)}function _({position:E=C.TOP_RIGHT,method:e=i.INFO,message:s}){v[e]({position:E,message:s})}function Q(E){window.scrollBy({top:E*2,left:0,behavior:P})}function U({totalPages:E}){if(o>E)return _({message:n.REACHED_END_OF_SEARCH_RESULTS}),o=1,H(),Y(),!1}m.addEventListener(f.SUBMIT,E=>{const e=E.target.elements[w.SEARCH];if(O=e.value.trim(),E.preventDefault(),K.innerHTML="",c(),o=1,e.value.trim().length===0)return c(),_({message:n.VALID_SEARCH_QUERY,method:i.WARNING}),!1;h(e.value.trim(),o,u).then(s=>{if(s[I.HITS].length<1)return _({method:i.WARNING,message:n.NO_IMAGES_MATCHING_SEARCH_QUERY}),H(),Y(),!1;S=s[I.TOTAL_HITS],D(s[I.HITS]),o++}).catch(s=>{throw _({method:i.ERROR,message:n.QUERY_FAILED}),new Error(s.message)}).finally(()=>{y=document.querySelector(R.GALLERY_ITEM).getBoundingClientRect().height,c(),T=Math.ceil(S/u),U({page:o,totalPages:T})}),m.reset()});G.addEventListener(f.CLICK,E=>{E.preventDefault(),c(),T=Math.ceil(S/u),h(O,o,u).then(e=>{D(e[I.HITS]),o++,Q(y)}).catch(e=>{throw _({method:i.ERROR,message:n.QUERY_FAILED}),new Error(e.message)}).finally(()=>{c(),U({page:o,totalPages:T})})});
//# sourceMappingURL=index.js.map
