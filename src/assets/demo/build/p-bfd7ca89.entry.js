import{r,h as e,H as t,g as s}from"./p-797021b3.js";const o="go-overlay.go-search-bar-overlay .close-btn-wrapper{display:none;position:fixed;top:1rem;right:1rem}go-overlay.go-search-bar-overlay.active .close-btn-wrapper{display:block}";const a=class{constructor(e){r(this,e);this.isSearchFormOpen=false}async openSearchForm(){this.isSearchFormOpen=true;this.el.focus()}async closeSearchForm(){this.isSearchFormOpen=false}render(){const{isSearchFormOpen:r}=this;return e(t,{class:{open:r}},e("go-overlay",{active:r?true:false,class:"go-search-bar-overlay",onOverlayClose:()=>this.closeSearchForm()},e("slot",{name:"search-form"}),e("div",{class:"close-btn-wrapper"},e("go-button",{flat:true,stack:true,variant:"text",compact:true,onClick:()=>this.closeSearchForm()},e("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},e("path",{d:"M18 6 6 18M6 6l12 12"})),e("span",null,"Close")))),e("div",{class:"search-btn"},e("go-button",{class:"open-btn",compact:true,flat:true,stack:true,variant:"text",onClick:()=>this.openSearchForm()},e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},e("path",{d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})),e("span",null,"Search"))))}get el(){return s(this)}};a.style=o;export{a as go_search_bar};
//# sourceMappingURL=p-bfd7ca89.entry.js.map