import{r,c as e,h as a,g as n}from"./p-797021b3.js";import{p as t,i}from"./p-66f1b45b.js";import{d as o}from"./p-bcc2e44c.js";import{r as s}from"./p-e811a6ef.js";import"./p-3d035636.js";import"./p-fa247fce.js";const l=".nav-drawer{--drawer-bg-color:var(--go-color-lightest);--drawer-max-width:24rem;--nav-item-text-color:var(--go-color-darkest);--nav-item-bg-color:var(--go-color-lightest);--nav-item-hover-bg-color:var(--go-color-neutral-200);--nav-item-padding:var(--go-size--1) var(--go-size-0);--nav-header-padding:var(--go-size--1) var(--go-size-0);--nav-header-border-color:var(--go-color-neutral-200);--nav-item-icon-gap:var(--go-size-0);--nav-item-current-bar-width:0.25rem;--nav-item-current-bar-color:var(--go-color-primary-500);--submenu-parent-link-border-bottom:0.0625rem solid var(--go-color-neutral-200);display:block;width:100%;height:100%;position:fixed;top:0;left:0;z-index:var(--layer-important);background:var(--drawer-bg-color);transform:translateX(-100%);transition:transform var(--go-duration-normal) var(--go-timing-function)}@media (prefers-reduced-motion: reduce){.nav-drawer{transition-duration:0s}}@media (prefers-reduced-motion: reduce){.nav-drawer{transition-duration:0s}}@media (min-width: 600px){.nav-drawer{width:var(--drawer-max-width)}}.nav-drawer.right{left:auto;right:0;transform:translateX(100%)}.nav-drawer.open{transform:translateX(0)}.nav-drawer .nav-container{overflow:hidden;width:100%;height:100%;position:absolute}.nav-drawer .nav-menu{transition:transform var(--go-duration-normal) var(--go-timing-function), visibility var(--go-duration-normal) var(--go-timing-function);visibility:visible;transform:translateX(0);padding:0;position:absolute;top:0;right:0;z-index:1;background:var(--drawer-bg-color);display:flex;flex-direction:column;width:100%;height:100%}@media (prefers-reduced-motion: reduce){.nav-drawer .nav-menu{transition-duration:0s}}@media (prefers-reduced-motion: reduce){.nav-drawer .nav-menu{transition-duration:0s}}.nav-drawer .nav-menu .nav-drawer-header .header-row{display:flex;align-items:center;justify-content:space-between;padding:var(--nav-header-padding)}.nav-drawer .nav-menu .nav-drawer-header .header-row .back-btn{margin-right:auto}.nav-drawer .nav-menu .nav-drawer-header .header-row .close-btn{margin-left:auto;flex:0 0 auto}.nav-drawer .nav-menu .nav-drawer-header .header-row .title{font-weight:bold;font-size:var(--go-size-0);flex:1}.nav-drawer .nav-menu.is-sub-nav .nav-drawer-header .title{margin-left:1rem}.nav-drawer .nav-menu nav{border-top:0.125rem solid var(--nav-header-border-color);height:100%;padding:1rem 0;flex:1;overflow:auto}.nav-drawer .nav-menu .nav-menu{box-shadow:var(--shadow-4);visibility:hidden;transform:translateX(100%)}.nav-drawer ul{list-style:none;margin:0;padding:0}.nav-drawer .nav-item-inner{background:none;border:none;text-decoration:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;width:100%;padding:var(--nav-item-padding);color:var(--nav-item-text-color);text-decoration:none;background:var(--nav-item-bg-color);border-left:var(--nav-item-current-bar-width) solid transparent}.nav-drawer .nav-item-inner:hover,.nav-drawer .nav-item-inner:focus{background:var(--nav-item-hover-bg-color)}.nav-drawer .nav-item-label{display:flex;align-items:center;gap:var(--nav-item-icon-gap)}.nav-drawer .children-indicator{width:1.5em;height:1.5em}.nav-drawer li{padding:0;line-height:1.5}.nav-drawer li.active>.nav-menu{visibility:visible;transform:translateX(0);z-index:2}.nav-drawer li.current>.nav-item-inner{border-left-color:var(--nav-item-current-bar-color)}.nav-drawer .parent-link{border-bottom:var(--submenu-parent-link-border-bottom)}.nav-drawer .parent-link a{display:flex;align-items:center;justify-content:flex-start;width:100%;padding:var(--nav-item-padding);color:var(--nav-item-text-color);text-decoration:none;background:var(--nav-item-bg-color);font-weight:bold;border-left:var(--nav-item-current-bar-width) solid transparent}.nav-drawer .parent-link a svg{transition:transform var(--go-duration-normal) var(--go-timing-function);margin-left:0.5rem;width:1.25em;height:1.25em;transform:translateX(0)}@media (prefers-reduced-motion: reduce){.nav-drawer .parent-link a svg{transition-duration:0s}}.nav-drawer .parent-link a:hover,.nav-drawer .parent-link a:focus{background:var(--nav-item-hover-bg-color)}.nav-drawer .parent-link a:hover svg,.nav-drawer .parent-link a:focus svg{transform:translateX(0.3125rem)}";const d=class{constructor(a){r(this,a);this.openEvent=e(this,"open",7);this.closeEvent=e(this,"close",7);this.navItemClickEvent=e(this,"navItemClick",7);this.inheritedAttrs={};this.subMenus=null;this.position="left";this.items=undefined;this.navItems=null;this.active=false;this.label="Drawer";this.autoClose=false;this.currentSubMenus=[]}async init(r){this.navItems=t(r)}async open(){this.active=true;this.openEvent.emit()}async close(){while(this.currentSubMenus.length>0){await this.closeCurrentSubMenu()}this.active=false;this.closeEvent.emit()}async toggle(){if(this.active){this.close()}else{this.open()}}componentWillLoad(){this.inheritedAttrs=i(this.el,["class","style","items","active","position"],false);try{this.navItems=t(this.items)}catch(r){console.warn("Could not parse nav items.",r)}}async closeCurrentSubMenu(){if(this.currentSubMenus.length===0){return}const r=this.currentSubMenus.slice(-1)[0];r.classList.remove("active");r.querySelector(".nav-item-inner").setAttribute("aria-expanded","false");this.currentSubMenus=this.currentSubMenus.slice(0,-1)}openSubMenu(r){const e=r.target;const a=e.closest("li");a.classList.add("active");e.setAttribute("aria-expanded","true");o(a.querySelector(".nav-menu"));this.currentSubMenus=[...this.currentSubMenus,a]}handleNavItemClick(r,e){var a;if((a=e.linkAttrs)===null||a===void 0?void 0:a.onClick){e.linkAttrs.onClick(r)}if(this.autoClose){this.close()}this.navItemClickEvent.emit(e)}renderNavItems(r,e){const n=!!e;return a("div",{class:{"nav-menu":true,"is-sub-nav":n}},a("div",{class:"nav-drawer-header"},a("div",{class:"header-row"},e?a("go-button",{class:"back-btn",flat:true,stack:true,variant:"text",compact:true,onClick:()=>this.closeCurrentSubMenu()},a("svg",{slot:"prefix","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},a("path",{d:"M19 12H5M12 19l-7-7 7-7"})),a("span",null,"Back")):a("span",null),!n&&a("div",{class:"title"},this.label),a("go-button",{class:"close-btn",flat:true,stack:true,variant:"text",compact:true,onClick:()=>this.close()},a("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},a("path",{d:"M18 6 6 18M6 6l12 12"})),a("span",null,"Close")))),(r===null||r===void 0?void 0:r.length)>0?a("nav",{"aria-label":n?e.label:this.label},n&&e.url?a("div",{class:"parent-link"},a("go-link",Object.assign({href:e.url},e.linkAttrs,{onClick:r=>this.handleNavItemClick(r,e)}),a("span",{class:"nav-item-label"},s(e.icon),a("span",null,e.label)),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},a("path",{d:"M5 12h14M12 5l7 7-7 7"})))):null,a("ul",null,r.map((r=>this.renderNavItem(r))))):null)}renderNavItem(r){var e;let n="a";const t=((e=r===null||r===void 0?void 0:r.children)===null||e===void 0?void 0:e.length)>0;if(r.isCurrent){n="span"}if(t){n="button"}let i=null;if(n==="a"){i=Object.assign(Object.assign({href:r.url},r.linkAttrs),{onClick:e=>this.handleNavItemClick(e,r)})}if(n==="button"){i={type:"button","aria-haspopup":"true","aria-expanded":"false",onClick:r=>this.openSubMenu(r)}}return a("li",{class:{"nav-item":true,"has-children":t,current:r.isCurrent}},a(n,Object.assign({class:"nav-item-inner"},i),a("span",{class:"nav-item-label"},s(r.icon),a("span",null,r.label)),t?a("svg",{class:"children-indicator",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",viewBox:"0 0 24 24"},a("path",{d:"m9 18 6-6-6-6"})):null),r.children?this.renderNavItems(r.children,r):null)}render(){let{navItems:r,active:e,position:n,inheritedAttrs:t}=this;return a("go-overlay",Object.assign({active:e},t,{onOverlayClose:()=>this.close()}),a("div",{class:{"nav-drawer":true,open:e,[n]:!!n}},r?a("div",{class:"nav-container"},this.renderNavItems(r)):a("slot",null)))}get el(){return n(this)}static get watchers(){return{items:["init"]}}};d.style=l;export{d as go_nav_drawer};
//# sourceMappingURL=p-8cae5d94.entry.js.map