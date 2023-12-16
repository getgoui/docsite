import{r as t,h as e,g as o}from"./p-797021b3.js";import{i as r,b as i,l as n,f as a}from"./p-c049857b.js";import"./p-3d035636.js";import{u as s}from"./p-fa247fce.js";import"./p-66f1b45b.js";import"./p-465a6716.js";const l=":root{--input-bg:var(--go-color-lightest);--input-fg:var(--go-color-darkest);--input-gap-inner:0.5rem;--input-padding-y:0.5rem;--input-padding-x:0.5rem;--input-control-padding:var(--input-padding-y) var(--input-padding-x);--input-radius:var(--radius-2);--input-border-color:var(--go-color-neutral-400);--input-border:1px solid var(--input-border-color);--input-gap-outer:1rem 0;--input-error-color:var(--go-color-critical-600);--input-focus-shadow:var(--inner-shadow-2);--input-icon-size:1.5rem;--input-text-disabled-color:var(--go-color-neutral-700);--input-bg-disabled-color:rgba(var(--go-token-neutral-200), 0.4);--input-text-readonly-color:var(--go-color-neutral-700);--input-bg-readonly-color:rgba(var(--go-token-neutral-200), 0.3);--input-presuf-bg:var(--go-color-neutral-100);--input-presuf-text-color:var(--go-color-neutral-800);--input-presuf-padding:var(--input-control-padding);--input-hint-color:var(--go-color-neutral-800);--input-hint-font-size:var(--go-size--1);--control-selected-bg-color:var(--go-color-primary-600);--control-selected-fg-color:rgb(var(--go-token-lightest));--input-label-font-size:1rem;--input-label-font-weight:700;--control-focus-duration:0.3s;--field-icon-button-size:2.25rem}go-textarea{display:block}go-textarea textarea{overflow:auto;resize:vertical}go-textarea textarea:-moz-read-only{resize:none}go-textarea textarea:disabled,go-textarea textarea:read-only{resize:none}go-textarea .textarea-count{color:var(--input-hint-color);line-height:1;font-size:var(--input-hint-font-size);margin-top:var(--input-gap-inner);margin-bottom:0}go-textarea .textarea-count:last-child{margin-bottom:0}";const u=class{constructor(e){t(this,e);this.hasNamedSlot={};this.prefixer="go-textarea-";this.controlId=s(this.prefixer);this.labelId=undefined;this.prefixId=undefined;this.suffixId=undefined;this.hintId=undefined;this.errorId=undefined;this.name=undefined;this.label=undefined;this.disabled=undefined;this.hint=undefined;this.error=undefined;this.readonly=undefined;this.value=undefined;this.autoGrow=false;this.attrs=undefined}componentWillLoad(){this.attrs=r(this,["auto-grow"]);this.hasNamedSlot=i(this.el)}updateControlHeight(){if(this.autoGrow&&this.controlEl){this.controlEl.style.height="auto";this.controlEl.style.height=this.controlEl.scrollHeight+"px"}}render(){var t;const{value:o,controlId:r,attrs:i}=this;const s=n(this);return e("go-field",Object.assign({},s),a.map((t=>{if(this.hasNamedSlot[t]){return e("template",{slot:t},e("slot",{name:t}))}})),e("textarea",Object.assign({},s,i,{ref:t=>this.controlEl=t,id:r,class:"control",rows:5,onInput:t=>this.value=t.target.value}),o),i.maxlength&&i.maxlength>0?e("span",{class:"textarea-count"},(t=o===null||o===void 0?void 0:o.length)!==null&&t!==void 0?t:0,"/",i.maxlength,e("span",{class:"visually-hidden","aria-live":"assertive",role:"alert"},(o===null||o===void 0?void 0:o.length)===Number(i.maxlength)?`Limit reached, you can only enter ${i.maxlength} characters in this field.`:"")):null)}get el(){return o(this)}static get watchers(){return{value:["updateControlHeight"]}}};u.style=l;export{u as go_textarea};
//# sourceMappingURL=p-8f5e7c7e.entry.js.map