var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in i)return i[e].exports;if(e in r){var l=r[e];delete r[e];var t={id:e,exports:{}};return i[e]=t,l.call(t.exports,t,t.exports),t.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,i){r[e]=i},e.parcelRequired7c6=l),l("jOU4Y"),l("TIRvd"),l("kJ7C1"),l("9Bkxl"),l("krGWQ"),l("cky31"),l("g5ITN");var t=l("TIRvd"),n=l("as7W7"),a=l("kJ7C1"),d=l("krGWQ"),o=l("g5ITN");const s=async e=>{const{target:i,ctrlKey:r}=e,l=i.dataset.movieId;l&&r?t.libary.remove(l):null!=l&&a.modalPopup.openLibary(l)};window.addEventListener("load",(()=>{document.location.href.includes("libary")&&(d.refs.libaryWatchedBtn.addEventListener("click",o.savedFilms.filterMovieList),d.refs.libaryQueueBtn.addEventListener("click",o.savedFilms.filterMovieList),d.refs.libaryAllBtn.addEventListener("click",o.savedFilms.filterMovieList),d.refs.libaryGalleryEl.addEventListener("click",s),n.loadData.libaryFilms())}));
//# sourceMappingURL=libary.68491d71.js.map