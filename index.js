import{a as y,S as H,i as Y}from"./assets/vendor-Rdv7LHNr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))L(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const T of o.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&L(T)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function L(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const U={TOP_LEFT:"topLeft",TOP_RIGHT:"topRight"},n={NO_IMAGES_MATCHING_SEARCH_QUERY:"Sorry, there are no images matching your search query. Please try again!",REACHED_END_OF_SEARCH_RESULTS:"We're sorry, but you've reached the end of search results.",VALID_SEARCH_QUERY:"Please enter a valid search!",QUERY_FAILED:"Query failed!"},i={WARNING:"warning",ERROR:"error",INFO:"info"},m={SUBMIT:"submit",CLICK:"click"},R={FORM:"form",LOADER:".loader",GALLERY:".gallery",BTN_MORE:".btnMore",GALLERY_ITEM:".gallery-item"},d={API_KEY:"46865646-27ce533d0a2b530f03419db89",URL:"https://pixabay.com/api/"},$="smooth",I={HITS:"hits",TOTAL_HITS:"totalHits",TOTAL:"total"},a={COLLECTIONS:"collections",COMMENTS:"comments",DOWNLOADS:"downloads",ID:"id",IMAGE_HEIGHT:"imageHeight",IMAGE_WIDTH:"imageWidth",LARGE_IMAGE_URL:"largeImageURL",LIKES:"likes",PAGE_URL:"pageURL",PREVIEW_HEIGHT:"previewHeight",PREVIEW_URL:"previewURL",PREVIEW_WIDTH:"previewWidth",TAGS:"tags",TYPE:"type",USER:"user",USER_IMAGE_URL:"userImageURL",USER_ID:"user_id",VIEWS:"views",WEB_FORMAT_HEIGHT:"webformatHeight",WEB_FORMAT_URL:"webformatURL",WEB_FORMAT_WIDTH:"webformatWidth"},A={LIKES:"Likes",VIEWS:"Views",COMMENTS:"Comments",DOWNLOADS:"Downloads"},W={SEARCH:"search"},t={HIDDEN:"hidden",GALLERY_ITEM:"gallery-item",GALLERY_LINK:"gallery-link",GALLERY_IMAGE:"gallery-image",GALLERY_LEGEND:"gallery-legend",GALLERY_LEGEND_ITEM:"gallery-legend-item",GALLERY_LEGEND_ITEM_LABEL:"gallery-legend-item-label",GALLERY_LEGEND_ITEM_VALUE:"gallery-legend-item-value"};let g={image_type:"photo",orientation:"horizontal",safesearch:"true",min_width:"360",max_height:"200",per_page:"200"};function v(E,e=1,s=15){g.page=String(e),g.per_page=String(s);let L=new URLSearchParams(g);return`${d.URL}?key=${d.API_KEY}&q=${E}&${L}`}async function M(E,e,s){return(await y.get(v(E,e,s))).data}const C=document.querySelector(".gallery");let f=null,P=E=>E.map(e=>`<li class=${t.GALLERY_ITEM}>
        <a class=${t.GALLERY_LINK} href="${e[a.LARGE_IMAGE_URL]}">
          <img
            class=${t.GALLERY_IMAGE}
            src="${e[a.PREVIEW_URL]}"
            alt="${e[a.TAGS]}"
          />
          <span class=${t.GALLERY_LEGEND}>
                <div class=${t.GALLERY_LEGEND_ITEM}>
                  <p class=${t.GALLERY_LEGEND_ITEM_LABEL}>${A.LIKES}</p>
                  <p class=${t.GALLERY_LEGEND_ITEM_VALUE}>${e[a.LIKES]}</p>
                </div>
                <div class=${t.GALLERY_LEGEND_ITEM}>
                  <p class=${t.GALLERY_LEGEND_ITEM_LABEL}>${A.VIEWS}</p>
                  <p class=${t.GALLERY_LEGEND_ITEM_VALUE}>${e[a.VIEWS]}</p>
               </div>
                <div class=${t.GALLERY_LEGEND_ITEM}>
                  <p class=${t.GALLERY_LEGEND_ITEM_LABEL}>${A.COMMENTS}</p>
                  <p class=${t.GALLERY_LEGEND_ITEM_VALUE}>${e[a.COMMENTS]}</p>
               </div>
                <div class=${t.GALLERY_LEGEND_ITEM}>
                  <p class=${t.GALLERY_LEGEND_ITEM_LABEL}>${A.DOWNLOADS}</p>
                  <p class=${t.GALLERY_LEGEND_ITEM_VALUE}>${e[a.DOWNLOADS]}</p>
               </div>
            </span>
          </a>
        </li>
      `).join("");f=new H(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function h(E){C.insertAdjacentHTML("beforeend",P(E)),w()}function w(){f.refresh()}const G=document.querySelector(R.FORM),b=document.querySelector(R.LOADER),V=document.querySelector(R.GALLERY),S=document.querySelector(R.BTN_MORE);let l=1;const u=15;let p=null,N=null,D=null,O=null;function _(){l>1&&S.classList.toggle(t.HIDDEN),b.classList.toggle(t.HIDDEN)}function c({position:E=U.TOP_RIGHT,method:e=i.INFO,message:s}){Y[e]({position:E,message:s})}function B(E){window.scrollBy({top:E*2,left:0,behavior:$})}G.addEventListener(m.SUBMIT,E=>{const e=E.target.elements[W.SEARCH];if(N=e.value.trim(),E.preventDefault(),V.innerHTML="",_(),l=1,e.value.trim().length===0)return _(),c({message:n.VALID_SEARCH_QUERY,method:i.WARNING}),!1;M(e.value.trim(),l,u).then(s=>{console.log(s),s[I.HITS].length<1&&c({method:i.WARNING,message:n.NO_IMAGES_MATCHING_SEARCH_QUERY}),D=s[I.TOTAL_HITS],h(s[I.HITS]),l++}).catch(s=>{throw c({method:i.ERROR,message:n.QUERY_FAILED}),new Error(s.message)}).finally(()=>{O=document.querySelector(R.GALLERY_ITEM).getBoundingClientRect().height,_()}),G.reset()});S.addEventListener(m.CLICK,E=>{E.preventDefault(),p=Math.ceil(D/u),_(),M(N,l,u).then(e=>{h(e[I.HITS]),l++,l>p&&(c({message:n.REACHED_END_OF_SEARCH_RESULTS}),S.classList.add(t.HIDDEN)),B(O)}).catch(e=>{throw c({method:i.ERROR,message:n.QUERY_FAILED}),new Error(e.message)}).finally(()=>{_()})});
//# sourceMappingURL=index.js.map
