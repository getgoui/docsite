import{r as n,c as a,h as e,H as i,g as r}from"./p-797021b3.js";import{o}from"./p-bcc2e44c.js";import{i as t,p as s}from"./p-66f1b45b.js";import{r as v}from"./p-e811a6ef.js";import"./p-3d035636.js";import"./p-fa247fce.js";const l='go-main-nav{--nav-border-top:0.0625rem solid var(--go-color-neutral-200);--nav-border-bottom:0.0625rem solid var(--go-color-neutral-200);--nav-bg-color:transparent;--nav-shadow:var(--shadow-2);--nav-item-text-color:var(--go-color-darkest);--nav-item-bg-color:var(--nav-bg-color);--nav-item-hover-bg-color:var(--go-color-neutral-200);--nav-item-active-bg-color:var(--go-color-primary-100);--nav-item-current-bg-color:var(--nav-item-bg-color);--nav-item-padding:var(--go-size--1) var(--go-size-0);--nav-item-icon-gap:0.5rem;--nav-item-current-bar-width:0.25rem;--nav-item-current-bar-color:var(--go-color-secondary-700);--submenu-bg-color:var(--nav-item-active-bg-color);--submenu-border-radius:var(--radius-2);--submenu-padding-y:var(--go-size-0);--submenu-padding-x:var(--go-size-1);--submenu-link-padding:0.5rem;--submenu-link-hover-bg-color:var(--go-color-neutral-200);--submenu-description-color:var(--go-color-neutral-700);--submenu-separator-color:var(--go-color-neutral-200);--submenu-indent:0.5rem;--submenu-tail-size:1rem;display:block;box-shadow:var(--nav-shadow);border-top:var(--nav-border-top)}go-main-nav :where([color-scheme=dark],[data-theme=dark]){--submenu-bg-color:var(--go-color-neutral-500)}go-main-nav ul{list-style:none}go-main-nav>nav{background:var(--nav-bg-color)}go-main-nav>nav .nav-menu-root{margin:0;padding:0;display:flex;flex-direction:row;align-items:stretch;flex-wrap:nowrap;position:relative}go-main-nav>nav .nav-item .nav-item-inner{background:none;border:none;text-decoration:none;cursor:pointer;display:flex;align-items:center;justify-content:center;width:100%;padding:var(--nav-item-padding);color:var(--nav-item-text-color);text-decoration:none;background:var(--nav-item-bg-color);border-bottom:var(--nav-item-current-bar-width) solid transparent;transition:background var(--go-duration-normal) var(--go-timing-function)}@media (prefers-reduced-motion: reduce){go-main-nav>nav .nav-item .nav-item-inner{transition-duration:0s}}go-main-nav>nav .nav-item .nav-item-inner:hover,go-main-nav>nav .nav-item .nav-item-inner:focus{border-radius:var(--radius-2);background:var(--nav-item-hover-bg-color)}go-main-nav>nav .nav-item .nav-item-inner svg{transition:transform var(--go-duration-normal) var(--go-timing-function);margin-left:0.5rem;width:1.25em;height:1.25em;transform:translateX(0)}@media (prefers-reduced-motion: reduce){go-main-nav>nav .nav-item .nav-item-inner svg{transition-duration:0s}}go-main-nav>nav .nav-item .nav-item-inner .nav-item-label{display:flex;align-items:center;gap:var(--nav-item-icon-gap)}go-main-nav>nav .nav-item.current .nav-item-inner{--nav-item-bg-color:var(--nav-item-current-bg-color);border-bottom-color:var(--nav-item-current-bar-color)}go-main-nav>nav .nav-item .parent-link svg{width:2.5rem}go-main-nav>nav .nav-item .submenu-container{transition:opacity var(--go-duration-normal) var(--go-timing-function), visibility var(--go-duration-normal) var(--go-timing-function);visibility:hidden;opacity:0;position:absolute;top:calc(100% + var(--submenu-tail-size));max-width:100%;z-index:1;box-shadow:var(--nav-shadow);padding:var(--submenu-padding-y) var(--submenu-padding-x);background:var(--submenu-bg-color);border-radius:var(--submenu-border-radius)}@media (prefers-reduced-motion: reduce){go-main-nav>nav .nav-item .submenu-container{transition-duration:0s}}go-main-nav>nav .nav-item .submenu-container::before{content:"";width:var(--submenu-tail-size);height:var(--submenu-tail-size);background:var(--submenu-bg-color);position:absolute;top:0;left:calc(var(--submenu-tail-size) + 0.3125rem);transform:translate(-50%, -50%) rotate(45deg)}go-main-nav>nav .nav-item .submenu-container .submenu-header{padding:0.5rem 0;margin-bottom:0;border-bottom:0.0625rem solid var(--submenu-separator-color)}go-main-nav>nav .nav-item .submenu-container .submenu-header svg{width:1.5em;height:1.5em}go-main-nav>nav .nav-item .submenu-container .submenu-header h5{display:flex;align-items:center;gap:0.5em}go-main-nav>nav .nav-item .submenu-container .submenu-header .description{margin:0;padding:0.5rem;color:var(--submenu-description-color)}go-main-nav>nav .nav-item .submenu-container .submenu-list{display:flex;flex-direction:column;flex-wrap:wrap;gap:0.75rem}go-main-nav>nav .nav-item.active{background:var(--nav-item-active-bg-color)}go-main-nav>nav .nav-item.active .nav-item-inner svg{transform:rotate(180deg)}go-main-nav>nav .nav-item.active .submenu-container{visibility:visible;opacity:1;box-shadow:var(--shadow-2)}go-main-nav>nav .submenu ul{padding-left:0}go-main-nav>nav .submenu ul a{padding-left:calc(0.5rem + var(--submenu-indent))}go-main-nav>nav .submenu go-nav-link{display:block}go-main-nav go-nav-link{--nav-link-padding:var(--submenu-link-padding)}go-main-nav go-nav-link .nav-item-link .nav-link-text{text-decoration:none}';const m=class{constructor(e){n(this,e);this.navEvent=a(this,"navigate",7);this.inheritedAttrs={};this.items=undefined;this.navItems=null;this.label="Main"}async componentWillLoad(){this.inheritedAttrs=t(this.el,["class","style","items","active","position"]);this.navItems=s(this.items);o(this.el,(()=>{this.closeAllSubMenus()}));this.el.addEventListener("keydown",(n=>{if(n.code==="Escape"){this.closeAllSubMenus()}}))}async init(n){this.navItems=s(n)}async watchItems(n){this.navItems=s(n)}closeAllSubMenus(){this.el.querySelectorAll(".nav-menu-root > li.active").forEach((n=>{this.closeSubMenu(n)}))}toggleSubMenu(n){const a=n.currentTarget;const e=a.closest(".nav-item.has-children");if(e.classList.contains("active")){this.closeSubMenu(e)}else{this.closeAllSubMenus();e.classList.add("active");a.setAttribute("aria-expanded","true")}}closeSubMenu(n){const a=n.querySelector(".nav-item-inner");n.classList.remove("active");a.setAttribute("aria-expanded","false")}renderNavLink(n,a=false){let i=n.isCurrent?"span":"a";let r=(n===null||n===void 0?void 0:n.url)?Object.assign({href:n.url,onClick:a=>{this.navEvent.emit({event:a,item:n})}},n.linkAttrs):{};r.class=`${r.class?r.class:""} nav-item-link${n.isCurrent?" current":""}`;return e(i,Object.assign({},r),v(n.icon),e("span",null,n.label),a?e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},e("path",{d:"M5 12h14M12 5l7 7-7 7"})):null)}renderSubMenu(n){var a;if(!n){return}if(((a=n.children)===null||a===void 0?void 0:a.length)>0){return e("div",{class:"submenu"},e("div",{class:"submenu-header"},e("go-nav-link",{block:true,item:n}),n.description?e("p",{class:"description"},n.description):null),e("ul",null,n.children.map((n=>e("li",null,e("go-nav-link",{block:true,item:n}),n.description?e("p",{class:"description"},n.description):null)))))}return e("div",{class:"nav-item"},e("go-nav-link",{block:true,item:n}))}renderRootNavItem(n){var a;let i="a";const r=((a=n===null||n===void 0?void 0:n.children)===null||a===void 0?void 0:a.length)>0;if(n.isCurrent){i="span"}if(r){i="button"}let o=null;if(i==="a"){o=Object.assign({href:n.url,onClick:a=>{console.log("clicked");this.navEvent.emit({event:a,item:n})}},n.linkAttrs)}if(i==="button"){o={type:"button","aria-expanded":"false",onClick:n=>this.toggleSubMenu(n)}}return e("li",{class:{"nav-item":true,"has-children":r,current:n.isCurrent}},e(i,Object.assign({class:"nav-item-inner"},o),e("span",{class:"nav-item-label"},v(n.icon),e("span",null,n.label)),r?e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},e("path",{d:"m6 9 6 6 6-6"})):null),n.children?e("slot",{name:"submenu"},e("div",{class:"submenu-container"},e("div",{class:"submenu-header"},e("go-nav-link",{block:true,item:n,showArrow:true}),(n===null||n===void 0?void 0:n.description)?e("p",{class:"description"},n.description):null),e("div",{class:"submenu-list"},n.children.map((n=>this.renderSubMenu(n)))))):null)}renderRootNav(n){return e("div",{class:{"nav-menu":true}},e("div",{class:"container"},e("ul",{class:"nav-menu-root"},n.map((n=>this.renderRootNavItem(n))))))}render(){let{label:n,navItems:a,inheritedAttrs:r}=this;return e(i,Object.assign({},r),e("nav",{"aria-label":n},a?this.renderRootNav(a):e("slot",null)))}get el(){return r(this)}static get watchers(){return{items:["watchItems"]}}};m.style=l;export{m as go_main_nav};
//# sourceMappingURL=p-51b08a8b.entry.js.map