import{r as t,h as o,H as n,g as r}from"./p-797021b3.js";const e="go-button-group{--go-button-group-gap:1rem;display:flex;gap:var(--go-button-group-gap);flex-wrap:wrap;align-items:baseline}go-button-group.connected{flex-wrap:nowrap;gap:0}go-button-group.connected go-button{-webkit-margin-end:-0.0625rem;margin-inline-end:-0.0625rem}go-button-group.connected go-button:first-of-type .inner-button{border-top-right-radius:0;border-bottom-right-radius:0}go-button-group.connected go-button:last-of-type .inner-button{border-top-left-radius:0;border-bottom-left-radius:0}go-button-group.connected go-button:not(:first-of-type,:last-of-type){--go-btn-radius:0}";const g=class{constructor(o){t(this,o);this.block=undefined;this.connected=false}async componentWillLoad(){if(this.block){this.el.querySelectorAll("go-button").forEach((t=>{t.setAttribute("block",this.block)}))}}render(){const{connected:t}=this;return o(n,{role:"group",class:{connected:t}},o("slot",null))}get el(){return r(this)}};g.style=e;export{g as go_button_group};
//# sourceMappingURL=p-4c7c25ca.entry.js.map