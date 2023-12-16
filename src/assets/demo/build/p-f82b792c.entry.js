import{r,h as o,H as i,g as a}from"./p-797021b3.js";import{b as e,d}from"./p-66f1b45b.js";import"./p-3d035636.js";import"./p-fa247fce.js";const t="go-radio{--radio-border-color:var(--input-border-color);--radio-border-width:0.125rem;--radio-border:var(--radio-border-width) solid var(--radio-border-color);--radio-border-color-hover:var(--go-color-neutral-700);--radio-size:1.5em;--radio-dot-size:0.7em;--radio-checked-bg:var(--control-selected-bg-color);--radio-checked-fg:var(--control-selected-fg-color);--radio-mark-shadow-inner:var(--shadow-2)}go-radio .control-wrapper{display:flex;align-items:flex-start;gap:var(--input-gap-inner)}go-radio input,go-radio label{cursor:pointer}go-radio[error]{color:var(--input-error-color);--input-hint-color:var(--input-error-color);--radio-border-color:var(--input-error-color)}go-radio[error] .control{--input-border-color:var(--input-error-color);border-color:var(--input-error-color)}go-radio[error] input:checked~.mark{--radio-checked-bg:var(--input-error-color)}go-radio[error] .error-msg{margin:var(--input-gap-inner) 0}go-radio[disabled] input,go-radio[disabled] label{cursor:not-allowed}go-radio[disabled] .box .mark{background:var(--input-bg-disabled-color);border-color:var(--input-text-disabled-color)}go-radio[disabled] .box input:checked~.mark .dot{background:var(--input-text-disabled-color)}go-radio label{margin:0;font-size:var(--go-size-0);font-weight:400;line-height:1.5;line-height:var(--radio-size)}go-radio label~.hint{margin-top:0.25rem}go-radio .box{flex-shrink:0;flex-grow:0;position:relative}go-radio .mark{display:block;width:var(--radio-size);height:var(--radio-size);border:var(--radio-border);border-radius:50%;transition:background-color var(--go-duration-normal) var(--go-timing-function)}@media (prefers-reduced-motion: reduce){go-radio .mark{transition-duration:0s}}go-radio .mark .dot{border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:var(--radio-dot-size);height:var(--radio-dot-size);transition:background-color var(--go-duration-normal) var(--go-timing-function)}@media (prefers-reduced-motion: reduce){go-radio .mark .dot{transition-duration:0s}}go-radio input:checked~.mark{background:var(--radio-checked-bg);border-color:var(--radio-checked-bg)}go-radio input:checked~.mark .dot{background:var(--radio-checked-fg);box-shadow:var(--radio-mark-shadow-inner)}go-radio input:not(:disabled):hover~.mark{border-color:var(--radio-border-color-hover)}go-radio input:not(:disabled):focus-visible~.mark{outline:var(--go-focus-outline-width, 2px) solid var(--go-focus-outline-color, #000);outline-offset:var(--go-focus-outline-offset)}go-radio input:not(:disabled):active~.mark{box-shadow:var(--input-focus-shadow);outline-offset:0}go-radio .hint{color:var(--input-hint-color);line-height:1;font-size:var(--input-hint-font-size)}go-radio .hint:last-child{margin-bottom:0}";const n=class{constructor(o){r(this,o);this.checked=undefined;this.indeterminate=undefined;this.name=undefined;this.disabled=undefined;this.value=undefined;this.label=undefined;this.hint=undefined;this.error=undefined;this.controlId=undefined;this.hintId=undefined;this.errorId=undefined;this.hasError=false}updateErrorState(){this.hasError=typeof this.error!=="undefined"}componentWillLoad(){this.hasHintSlot=e(this.el,"hint");d(this,this.el,["hint","error","control"],"go-radio-");this.updateErrorState()}render(){const{label:r,value:a,error:e,controlId:d,hint:t,hintId:n,hasHintSlot:s,checked:l,name:c,disabled:u,hasError:h,errorId:g}=this;const b=[];if(s||t){b.push(n)}if(h){b.push(g)}const p={id:d,checked:l,name:c,disabled:u,value:a};return o(i,{class:{error:h,disabled:!!u}},o("div",{class:"control-wrapper"},o("div",{class:"box"},o("input",Object.assign({},p,{type:"radio",class:"hidden-control","aria-invalid":String(h),"aria-describedby":b.join(" ")})),o("span",{class:"mark"},o("span",{class:"dot"}))),o("div",{class:"text"},o("label",{htmlFor:d},r),s||t?o("div",{class:"hint",id:n},o("slot",{name:"hint"},t)):null)),h?o("div",{class:"error-msg",id:g},e):null)}get el(){return a(this)}static get watchers(){return{error:["updateErrorState"]}}};n.style=t;export{n as go_radio};
//# sourceMappingURL=p-f82b792c.entry.js.map