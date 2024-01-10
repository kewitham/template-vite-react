import{r as e,c as a,f as t,h as s,F as i,H as r,g as o}from"./p-80f0c69a.js";import{c as n}from"./p-3d46030a.js";import{i as d}from"./p-89e69a9d.js";import{g as p,a as u}from"./p-4f8f1bd9.js";const l=class{constructor(t){e(this,t),this.vaKeyDown=a(this,"vaKeyDown",7),this.vaSelect=a(this,"vaSelect",7),this.componentLibraryAnalytics=a(this,"component-library-analytics",7),this.required=!1,this.label=void 0,this.name=void 0,this.value=void 0,this.error=void 0,this.reflectInputError=!1,this.invalid=!1,this.enableAnalytics=!1,this.uswds=!1,this.hint=void 0,this.options=void 0}connectedCallback(){d.on("languageChanged",(()=>{t(this.el)}))}disconnectedCallback(){d.off("languageChanged")}handleKeyDown(){this.vaKeyDown.emit()}handleChange(e){this.value=e.target.value,this.enableAnalytics&&this.componentLibraryAnalytics.emit({componentName:"va-select",action:"change",details:{label:this.label,selectLabel:this.value}}),this.vaSelect.emit({value:this.value})}populateOptions(){const{value:e}=this;this.options=p(this.el,"option").map((a=>s("option",{value:a.value,selected:e===a.value},a.text)))}handleValueChange(){this.populateOptions()}render(){const{error:e,reflectInputError:a,invalid:t,label:o,required:p,name:u,hint:l,uswds:c}=this;if(c){const c=n({"usa-label":!0,"usa-label--error":e}),x=n({"usa-select":!0,"usa-input--error":e||a});return s(r,null,o&&s("label",{htmlFor:"options",class:c,part:"label"},o,p&&s("span",{class:"usa-label--required"}," ",d.t("required"))),l&&s("span",{class:"usa-hint"},l),s("span",{id:"input-error-message",role:"alert"},e&&s(i,null,s("span",{class:"usa-sr-only"},d.t("error")),s("span",{class:"usa-error-message"},e))),s("slot",{onSlotchange:()=>this.populateOptions()}),s("select",{class:x,"aria-describedby":e?"error-message":void 0,"aria-invalid":t||e?"true":"false",id:"options",name:u,required:p||null,onKeyDown:()=>this.handleKeyDown(),onChange:e=>this.handleChange(e),part:"select"},s("option",{key:"0",value:"",selected:!0},d.t("select")),this.options))}return s(r,null,s("label",{htmlFor:"select",part:"label"},o,p&&s("span",{class:"required"},d.t("required"))),l&&s("span",{class:"hint-text"},l),s("span",{id:"error-message",role:"alert"},e&&s(i,null,s("span",{class:"sr-only"},d.t("error"))," ",e)),s("slot",{onSlotchange:()=>this.populateOptions()}),s("select",{"aria-describedby":e?"error-message":void 0,"aria-invalid":t||e?"true":"false",id:"select",name:u,required:p||null,onKeyDown:()=>this.handleKeyDown(),onChange:e=>this.handleChange(e),part:"select"},this.options))}get el(){return o(this)}static get watchers(){return{value:["handleValueChange"]}}};l.style='button:not([disabled]):focus,:host(:not([uswds])) button:not([disabled]):active,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,[role=\'option\']:focus{outline:2px solid var(--color-gold-light);outline-offset:2px}input,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0.1rem solid var(--color-gray);border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--color-base);display:block;font-size:1.6rem;height:4.2rem;line-height:1.3;margin:0.2em 0;max-width:46rem;padding:1rem 0.7em;width:100%}.sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}#error-message{margin-bottom:1.2rem}#error-message,#input-error-message{color:var(--color-secondary-dark);display:block;font-weight:700}:host([error]:not([error=\'\'])){border-left:0.4rem solid  var(--color-secondary-dark);padding-left:2rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\'\'])){margin-left:-2.4rem;}}:host([error]:not([error=\'\']):not([uswds])) label{margin-top:0}:host([error]:not([error=\'\']):not([uswds])) input,:host([error]:not([error=\'\']):not([uswds])) textarea,:host([error]:not([error=\'\']):not([uswds])) select{border:4px solid var(--color-secondary-dark)}.hint-text{color:#71767A;display:block}.usa-select,.usa-hint,.usa-input{font-family:Source Sans Pro Web, "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-select,.usa-input{border-width:1px;border-color:#565c65;border-style:solid;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;color:#1b1b1b;display:block;height:2.5rem;margin-top:0.5rem;max-width:30rem;padding:0.5rem;width:100%}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-icon{display:inline-block;fill:currentColor;height:1em;position:relative;width:1em}.usa-icon--size-3{height:1.5rem;width:1.5rem}.usa-icon--size-4{height:2rem;width:2rem}.usa-icon--size-5{height:2.5rem;width:2.5rem}.usa-icon--size-6{height:3rem;width:3rem}.usa-icon--size-7{height:3.5rem;width:3.5rem}.usa-icon--size-8{height:4rem;width:4rem}.usa-icon--size-9{height:4.5rem;width:4.5rem}.usa-label{font-family:Source Sans Pro Web, "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-input:disabled,.usa-input[aria-disabled=true]{background-color:#c9c9c9;color:#454545;cursor:not-allowed;opacity:1;-webkit-text-fill-color:#454545}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{background-color:#c9c9c9;color:#454545}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:0;color:GrayText}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{color:GrayText}}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:2px solid GrayText}}.usa-input--error{border-width:0.25rem;border-color:#b50909;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-input--success{border-width:0.25rem;border-color:#00a91c;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-select{background-image:url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z%22%2F%3E%3C%2Fsvg%3E"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z%22%2F%3E%3C%2Fsvg%3E"), linear-gradient(transparent, transparent);background-repeat:no-repeat;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:white;background-position:right 0.5rem center;background-size:1.25rem;padding-right:2rem}.usa-select::-ms-expand{display:none}.usa-select:-webkit-autofill{-webkit-appearance:menulist;appearance:menulist}.usa-select:-moz-focusring{color:transparent;text-shadow:0 0 0 black}.usa-select[multiple]{height:auto;background-image:none;padding-right:0}.usa-select option{overflow:hidden;text-overflow:ellipsis}.usa-select:disabled,.usa-select[aria-disabled=true]{background-color:#c9c9c9;color:#454545;cursor:not-allowed;opacity:1}.usa-select:disabled:hover,.usa-select:disabled:active,.usa-select:disabled:focus,.usa-select:disabled.usa-focus,.usa-select[aria-disabled=true]:hover,.usa-select[aria-disabled=true]:active,.usa-select[aria-disabled=true]:focus,.usa-select[aria-disabled=true].usa-focus{background-color:#c9c9c9;color:#454545}@media (forced-colors: active){.usa-select:disabled,.usa-select[aria-disabled=true]{border:0;color:GrayText}.usa-select:disabled:hover,.usa-select:disabled:active,.usa-select:disabled:focus,.usa-select:disabled.usa-focus,.usa-select[aria-disabled=true]:hover,.usa-select[aria-disabled=true]:active,.usa-select[aria-disabled=true]:focus,.usa-select[aria-disabled=true].usa-focus{color:GrayText}}@media (forced-colors: active){.usa-select:disabled,.usa-select[aria-disabled=true]{border:2px solid GrayText}}@media (forced-colors: active){.usa-select{-webkit-appearance:listbox;-moz-appearance:listbox;appearance:listbox;background-image:none;padding-right:0}}:host([error][uswds]:not([error=""])){border-left:0.4rem solid #b50909;padding-left:16px;position:relative}@media screen and (min-width: 1008px){:host([error][uswds]:not([error=""])){margin-left:-1.4rem}}.usa-form{font-size:16px}@media (min-width: 30em){.usa-form{max-width:320px}}.usa-fieldset,.usa-hint,.usa-input,.usa-label,.usa-legend,.usa-radio__label,.usa-textarea,.usa-modal,.usa-select{font-size:16.96px}.usa-label,.usa-legend{margin-top:24px;max-width:480px}.usa-radio__label{margin-top:12px;padding-left:32px}.usa-radio__label::before{height:20px;border-radius:1584px;width:20px;margin-top:1.024px}.usa-radio__label-description{font-size:14.88px;margin-top:8px}.usa-radio__input{font-size:25.6px;border-width:1.6px;height:67.2px;max-width:736px;padding:16px 0.7em}.usa-radio__input--tile+[class*=__label]{border-radius:4px;margin-top:8px;padding:12px 16px 12px 40px}.usa-radio__input--tile+[class*=__label]::before{left:8px}.usa-input,.usa-select,.usa-textarea{height:40px;margin-top:8px;max-width:480px;padding:8px}.usa-input--success,.usa-input--error,.usa-select--success,.usa-select--error,.usa-textarea--success,.usa-textarea--error{padding-top:4px;padding-bottom:4px;border-width:4px}.usa-checkbox__label{margin-top:12px;padding-left:32px;font-size:16.96px}.usa-checkbox__label::before{height:20px;width:20px;margin-top:1.024px}.usa-checkbox__input--tile+[class*=__label]{border-radius:4px;margin-top:8px;padding:12px 16px 12px 40px}.usa-checkbox__input--tile+[class*=__label]::before{left:8px}.usa-checkbox__label-description{font-size:14.88px;margin-top:8px}.usa-error-message{padding-bottom:4px;padding-top:4px}.usa-legend{color:#1B1B1B}.usa-select{background-size:20px;background-position:right 8px center}.usa-memorable-date .usa-form-group{margin-top:0px}.usa-form-group--day,.usa-form-group--month,.usa-form-group--year{margin-right:16px}.usa-form-group--day-input,.usa-form-group--month-input{width:48px}.usa-form-group--year-input{width:72px}.usa-form-group--month-select{width:240px}.usa-textarea{height:160px}.usa-button{font-size:16.96px;border-radius:4px;margin-right:8px;padding:12px 20px}.usa-button--big{border-radius:4px;font-size:23.36px;padding:16px 24px}.usa-button i{font-size:16px}.usa-button-group{margin:0px -8px}.usa-button-group__item{margin:4px}.usa-modal{border-radius:8px;margin:20px auto;max-width:480px}.usa-modal__content{padding-top:32px}.usa-modal--lg .usa-modal__main{padding-bottom:64px;padding-top:20px;max-width:640px}.usa-modal__main{padding:8px 32px 32px}.usa-modal__heading{font-size:21.44px}.usa-modal__footer{margin-top:24px}.usa-modal__close{font-size:14.88px;margin:-32px 0 0 auto;padding:4px}.usa-modal__close .usa-icon{height:32px;width:32px}.usa-modal--lg{max-width:880px}.usa-step-indicator{font-size:16.96px;margin-bottom:32px}.usa-step-indicator__segment{max-width:240px;min-height:8px}.usa-step-indicator__segment::after{height:8px}.usa-step-indicator__heading{font-size:18.08px;margin:16px 0px 0px}.usa-step-indicator__current-step{height:40px;border-radius:1584px;width:40px;padding:calc((40px - 2.2ex) * 0.5);-webkit-box-sizing:border-box;box-sizing:border-box}.usa-step-indicator__total-steps{margin-right:8px}@media (min-width: 40em){.usa-step-indicator--counters .usa-step-indicator__segment,.usa-step-indicator--counters-sm .usa-step-indicator__segment{margin-top:20px}.usa-step-indicator--counters-sm .usa-step-indicator__segment{margin-top:12px}.usa-step-indicator--counters .usa-step-indicator__segment::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment::before{height:40px;border-radius:1584px;width:40px;padding:calc((40px - 1.8ex) * 0.5);top:-16px}.usa-step-indicator--counters-sm .usa-step-indicator__segment::before{height:24px;border-radius:1584px;width:24px;font-size:14.88px;padding:5px;top:-8px}.usa-step-indicator__segment-label{font-size:16.96px;margin-top:16px;padding-right:32px}.usa-step-indicator--counters .usa-step-indicator__segment-label,.usa-step-indicator--counters-sm .usa-step-indicator__segment-label{margin-top:32px}.usa-step-indicator--center .usa-step-indicator__segment::before{left:calc(50% - 22px)}.usa-step-indicator__segment::after{height:8px}.usa-step-indicator--counters .usa-step-indicator__segment::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment::before{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:inset 0 0 0 4px #919191, 0 0 0 4px #fff;box-shadow:inset 0 0 0 4px #919191, 0 0 0 4px #fff}.usa-step-indicator--counters .usa-step-indicator__segment--current::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment--current::before,.usa-step-indicator--counters .usa-step-indicator__segment--complete::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment--complete::before{-webkit-box-shadow:0 0 0 4px #fff;box-shadow:0 0 0 4px #fff}}.usa-alert{border-left-width:8px}.usa-alert .usa-alert__body{font-size:16.96px;max-width:1024px;padding:16px}.usa-alert--info .usa-alert__body,.usa-alert--warning .usa-alert__body,.usa-alert--success .usa-alert__body,.usa-alert--error .usa-alert__body{padding-left:46.66672px}.usa-alert--info .usa-alert__body::before,.usa-alert--warning .usa-alert__body::before,.usa-alert--success .usa-alert__body::before,.usa-alert--error .usa-alert__body::before{height:32px;width:32px;top:12px;left:8px}@media (min-width: 64em){.usa-alert--info .usa-alert__body,.usa-alert--warning .usa-alert__body,.usa-alert--success .usa-alert__body,.usa-alert--error .usa-alert__body{padding-left:64px;padding-right:64px}.usa-alert--info .usa-alert__body::before,.usa-alert--warning .usa-alert__body::before,.usa-alert--success .usa-alert__body::before,.usa-alert--error .usa-alert__body::before{left:24px;top:12px}}.usa-alert--slim .usa-alert__body{padding-bottom:8px;padding-top:8px;padding-left:38.6666666672px}@media (min-width: 64em){.usa-alert--slim .usa-alert__body{padding-left:56px}}.usa-checkbox__input:checked+[class*=__label]::before{background-size:12px}.usa-breadcrumb{padding-bottom:16px;padding-top:16px;font-size:16.96px}.usa-breadcrumb__list{margin:0 -4px;padding:4px}.usa-accordion{font-size:16.96px}.usa-accordion__heading{font-size:16.96px}.usa-accordion__heading:not(:first-child){margin-top:8px}.usa-accordion__button{background-size:24px;background-position:right 20px center;padding:16px 56px 16px 20px}.usa-accordion__button[aria-expanded=false]{background-size:24px}.usa-accordion__content{padding:16px 20px 12px}.usa-accordion--bordered .usa-accordion__content{border-bottom:4px solid #f0f0f0;border-left:4px solid #f0f0f0;border-right:4px solid #f0f0f0;padding-bottom:16px}.usa-character-count__status{padding-top:4px}.usa-process-list{font-size:16.96px;padding-left:16px}.usa-process-list__item:before{font-size:16.96px;border-width:4px;margin-top:-6.4px;height:32px;width:32px;border-radius:1584px}.usa-process-list__item{font-size:16.96px;border-left-width:8px;padding-bottom:32px;padding-left:32px}.usa-process-list__item:last-child{border-left-width:8px}.usa-icon--size-3{height:24px;width:24px}.usa-icon--size-4{height:32px;width:32px}.usa-icon--size-5{height:40px;width:40px}.usa-icon--size-6{height:48px;width:48px}.usa-icon--size-7{height:56px;width:56px}.usa-icon--size-8{height:64px;width:64px}.usa-icon--size-9{height:72px;width:72px}.usa-pagination{margin-bottom:16px;margin-top:16px;font-size:16.96px}.usa-pagination__item{height:40px;margin-left:4px;margin-right:4px;min-width:40px}.usa-pagination__button{border-radius:4px;padding:8px}.usa-pagination__overflow{padding:8px}.usa-pagination .usa-icon{height:18.08px;width:18.08px}@media (min-width: 40em){.usa-pagination__next-page{margin-left:20px}}:host([uswds]){color:var(--v3-color-base-darkest)}:host{display:block;font-family:var(--font-source-sans)}:host([uswds][inert]) select{border:0;background:none}.usa-select{margin-bottom:0}span.required{color:var(--color-secondary-dark);margin:0 0.35em}:host([error]:not([error=""]):not([uswds])) label,:host([error]:not([error=""]):not([uswds]))>span{display:block;font-size:1.6rem}:host([error]:not([error=""]):not([uswds]))>span{color:var(--color-secondary-dark)}::slotted(option){display:none}:host(:not([uswds])) label{margin-top:3rem;max-width:46rem;display:block}:host(:not([uswds])) select{background-color:var(--color-white);background-image:url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 10 14%22%3E%3Cg fill%3D%22%23323a45%22 fill-rule%3D%22evenodd%22%3E%3Cpath d%3D%22M.62639628 5.99993896H9.3727389c.25339173.00130856.482416-.15074264.57956202-.38477624.09714598-.2340336.04312294-.50357616-.13670922-.6820964L5.4401815.1835435C5.32475606.06613116 5.1670083 0 5.00236114 0c-.16464716 0-.3223949.06613117-.43782037.1835435L.1835435 4.93306632C.06613116 5.0484918 0 5.20623953 0 5.3708867s.06613117.32239492.1835435.43782038c.1146444.1224934.27508006.19177244.44285278.19123188zM9.3727389 7.9999685H.6263963c-.1662653-.00316183-.32647608.06237894-.4428528.18116705C.0661312 8.296561 0 8.45430875 0 8.61895592s.06613117.32239492.1835435.43782037l4.38099726 4.7596802C4.67996622 13.9338688 4.83771396 14 5.00236113 14s.32239492-.0661312.43782038-.1835435l4.3754102-4.74961537c.17983216-.17852023.2338552-.44806278.13670922-.68209638-.09714602-.2340336-.3261703-.3860848-.579562-.38477625z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");background-position:right 1.3rem center;background-repeat:no-repeat;background-size:1rem;font-family:var(--font-source-sans);padding:0.8rem 3rem 0.8rem 0.7em}';const c=class{constructor(t){e(this,t),this.componentLibraryAnalytics=a(this,"component-library-analytics",7),this.allowedInputTypes=["email","number","search","tel","text","url"],this.handleInput=e=>{this.value=e.target.value},this.handleBlur=()=>{this.enableAnalytics&&this.componentLibraryAnalytics.emit({componentName:"va-text-input",action:"blur",details:{label:this.label,value:this.value}})},this.label=void 0,this.error=void 0,this.reflectInputError=!1,this.invalid=!1,this.required=!1,this.inputmode=void 0,this.type="text",this.maxlength=void 0,this.minlength=void 0,this.autocomplete=void 0,this.enableAnalytics=!1,this.name=void 0,this.pattern=void 0,this.hint=void 0,this.messageAriaDescribedby=void 0,this.value=void 0,this.success=!1,this.width=void 0,this.uswds=!1,this.charcount=!1}getInputType(){return this.allowedInputTypes.includes(this.type)?this.type:"text"}getMaxlength(){if(!(this.maxlength<=0))return this.maxlength}connectedCallback(){d.on("languageChanged",(()=>{t(this.el)}))}disconnectedCallback(){d.off("languageChanged")}render(){const{label:e,error:a,reflectInputError:t,invalid:o,inputmode:p,required:l,value:c,minlength:x,pattern:h,name:m,autocomplete:b,hint:g,handleInput:f,handleBlur:_,uswds:w,success:v,messageAriaDescribedby:y,width:z,charcount:k}=this,C=!this.el.classList.contains("memorable-date-input"),F=this.getInputType(),q=this.getMaxlength(),D=`${y?"input-message":""} ${a?"input-error-message":""} ${k&&q?"charcount-message":""}`.trim()||null;if(w){const x=k&&(null==c?void 0:c.length)>q,w=n({"usa-label":!0,"usa-label--error":a}),S=n({"usa-input":!0,"usa-input--success":v,"usa-input--error":a||t,[`usa-input--${z}`]:z}),E=n({"usa-hint":!0,"usa-character-count__status":k,"usa-character-count__status--invalid":k&&q&&(null==c?void 0:c.length)>q});return s(r,null,e&&s("label",{htmlFor:"inputField",class:w,part:"label"},e,l&&s("span",{class:"usa-label--required"}," ",d.t("required")),g&&s("span",{class:"usa-hint"},g)),s("slot",null),s("span",{id:"input-error-message",role:"alert"},a&&s(i,null,s("span",{class:"usa-sr-only"},d.t("error")),s("span",{class:"usa-error-message"},a))),s("input",{class:S,id:"inputField",type:F,value:c,onInput:f,onBlur:_,"aria-describedby":D,"aria-invalid":o||a||x?"true":"false",inputmode:p||void 0,maxlength:k?void 0:q,pattern:h,name:m,autocomplete:b,required:l||null,part:"input"}),y&&s("span",{id:"input-message",class:"sr-only"},y),C&&!k&&q&&(null==c?void 0:c.length)>=q&&s("span",{id:"maxlength-message",class:E,"aria-live":"polite"},d.t("max-chars",{length:q})),C&&k&&q&&s("span",{id:"charcount-message",class:E,"aria-live":"polite"},u(c,q)))}{const t=n({[`usa-input--${z}`]:z});return s(r,null,e&&s("label",{htmlFor:"inputField",part:"label"},e," ",l&&s("span",{class:"required"},d.t("required")),g&&s("span",{class:"hint-text"},g)),s("slot",null),s("span",{id:"input-error-message",role:"alert"},a&&s(i,null,s("span",{class:"sr-only"},d.t("error"))," ",a)),s("input",{class:t,id:"inputField",type:F,value:c,onInput:f,onBlur:_,"aria-describedby":D,"aria-invalid":o||a?"true":"false",inputmode:p||void 0,maxlength:q,minlength:x,pattern:h,name:m,autocomplete:b,required:l||null,part:"input"}),y&&s("span",{id:"input-message",class:"sr-only"},y),C&&q&&(null==c?void 0:c.length)>=q&&s("small",{id:"maxlength-message",part:"validation","aria-live":"polite"},d.t("max-chars",{length:q})),C&&x&&(null==c?void 0:c.length)<x&&s("small",{id:"charcount-message",part:"validation"},d.t("min-chars",{length:x})))}}get el(){return o(this)}};c.style=".sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}#error-message{margin-bottom:1.2rem}#error-message,#input-error-message{color:var(--color-secondary-dark);display:block;font-weight:700}:host([error]:not([error=''])){border-left:0.4rem solid  var(--color-secondary-dark);padding-left:2rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=''])){margin-left:-2.4rem;}}:host([error]:not([error='']):not([uswds])) label{margin-top:0}:host([error]:not([error='']):not([uswds])) input,:host([error]:not([error='']):not([uswds])) textarea,:host([error]:not([error='']):not([uswds])) select{border:4px solid var(--color-secondary-dark)}.hint-text{color:#71767A;display:block}.usa-hint,.usa-input{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-input{border-width:1px;border-color:#565c65;border-style:solid;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;color:#1b1b1b;display:block;height:2.5rem;margin-top:0.5rem;max-width:30rem;padding:0.5rem;width:100%}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-input:disabled,.usa-input[aria-disabled=true]{background-color:#c9c9c9;color:#454545;cursor:not-allowed;opacity:1;-webkit-text-fill-color:#454545}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{background-color:#c9c9c9;color:#454545}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:0;color:GrayText}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{color:GrayText}}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:2px solid GrayText}}.usa-input--error{border-width:0.25rem;border-color:#b50909;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-input--success{border-width:0.25rem;border-color:#00a91c;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-character-count__status{display:inline-block;padding-top:0.25rem}.usa-character-count__status.usa-character-count__status--invalid{color:#b50909;font-weight:700}:host([error][uswds]:not([error=\"\"])){border-left:0.4rem solid #b50909;padding-left:16px;position:relative}@media screen and (min-width: 1008px){:host([error][uswds]:not([error=\"\"])){margin-left:-1.4rem}}:host(:not([uswds])) .usa-input--2xs,:host .usa-input--2xs{max-width:5ex}:host(:not([uswds])) .usa-input--xs,:host .usa-input--xs{max-width:9ex}:host(:not([uswds])) .usa-input--sm,:host(:not([uswds])) .usa-input--small,:host .usa-input--sm,:host .usa-input--small{max-width:13ex}:host(:not([uswds])) .usa-input--md,:host(:not([uswds])) .usa-input--medium,:host .usa-input--md,:host .usa-input--medium{max-width:20ex}:host(:not([uswds])) .usa-input--lg,:host .usa-input--lg{max-width:30ex}:host(:not([uswds])) .usa-input--xl,:host .usa-input--xl{max-width:40ex}:host(:not([uswds])) .usa-input--2xl,:host .usa-input--2xl{max-width:50ex}.usa-form{font-size:16px}@media (min-width: 30em){.usa-form{max-width:320px}}.usa-fieldset,.usa-hint,.usa-input,.usa-label,.usa-legend,.usa-radio__label,.usa-textarea,.usa-modal,.usa-select{font-size:16.96px}.usa-label,.usa-legend{margin-top:24px;max-width:480px}.usa-radio__label{margin-top:12px;padding-left:32px}.usa-radio__label::before{height:20px;border-radius:1584px;width:20px;margin-top:1.024px}.usa-radio__label-description{font-size:14.88px;margin-top:8px}.usa-radio__input{font-size:25.6px;border-width:1.6px;height:67.2px;max-width:736px;padding:16px 0.7em}.usa-radio__input--tile+[class*=__label]{border-radius:4px;margin-top:8px;padding:12px 16px 12px 40px}.usa-radio__input--tile+[class*=__label]::before{left:8px}.usa-input,.usa-select,.usa-textarea{height:40px;margin-top:8px;max-width:480px;padding:8px}.usa-input--success,.usa-input--error,.usa-select--success,.usa-select--error,.usa-textarea--success,.usa-textarea--error{padding-top:4px;padding-bottom:4px;border-width:4px}.usa-checkbox__label{margin-top:12px;padding-left:32px;font-size:16.96px}.usa-checkbox__label::before{height:20px;width:20px;margin-top:1.024px}.usa-checkbox__input--tile+[class*=__label]{border-radius:4px;margin-top:8px;padding:12px 16px 12px 40px}.usa-checkbox__input--tile+[class*=__label]::before{left:8px}.usa-checkbox__label-description{font-size:14.88px;margin-top:8px}.usa-error-message{padding-bottom:4px;padding-top:4px}.usa-legend{color:#1B1B1B}.usa-select{background-size:20px;background-position:right 8px center}.usa-memorable-date .usa-form-group{margin-top:0px}.usa-form-group--day,.usa-form-group--month,.usa-form-group--year{margin-right:16px}.usa-form-group--day-input,.usa-form-group--month-input{width:48px}.usa-form-group--year-input{width:72px}.usa-form-group--month-select{width:240px}.usa-textarea{height:160px}.usa-button{font-size:16.96px;border-radius:4px;margin-right:8px;padding:12px 20px}.usa-button--big{border-radius:4px;font-size:23.36px;padding:16px 24px}.usa-button i{font-size:16px}.usa-button-group{margin:0px -8px}.usa-button-group__item{margin:4px}.usa-modal{border-radius:8px;margin:20px auto;max-width:480px}.usa-modal__content{padding-top:32px}.usa-modal--lg .usa-modal__main{padding-bottom:64px;padding-top:20px;max-width:640px}.usa-modal__main{padding:8px 32px 32px}.usa-modal__heading{font-size:21.44px}.usa-modal__footer{margin-top:24px}.usa-modal__close{font-size:14.88px;margin:-32px 0 0 auto;padding:4px}.usa-modal__close .usa-icon{height:32px;width:32px}.usa-modal--lg{max-width:880px}.usa-step-indicator{font-size:16.96px;margin-bottom:32px}.usa-step-indicator__segment{max-width:240px;min-height:8px}.usa-step-indicator__segment::after{height:8px}.usa-step-indicator__heading{font-size:18.08px;margin:16px 0px 0px}.usa-step-indicator__current-step{height:40px;border-radius:1584px;width:40px;padding:calc((40px - 2.2ex) * 0.5);-webkit-box-sizing:border-box;box-sizing:border-box}.usa-step-indicator__total-steps{margin-right:8px}@media (min-width: 40em){.usa-step-indicator--counters .usa-step-indicator__segment,.usa-step-indicator--counters-sm .usa-step-indicator__segment{margin-top:20px}.usa-step-indicator--counters-sm .usa-step-indicator__segment{margin-top:12px}.usa-step-indicator--counters .usa-step-indicator__segment::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment::before{height:40px;border-radius:1584px;width:40px;padding:calc((40px - 1.8ex) * 0.5);top:-16px}.usa-step-indicator--counters-sm .usa-step-indicator__segment::before{height:24px;border-radius:1584px;width:24px;font-size:14.88px;padding:5px;top:-8px}.usa-step-indicator__segment-label{font-size:16.96px;margin-top:16px;padding-right:32px}.usa-step-indicator--counters .usa-step-indicator__segment-label,.usa-step-indicator--counters-sm .usa-step-indicator__segment-label{margin-top:32px}.usa-step-indicator--center .usa-step-indicator__segment::before{left:calc(50% - 22px)}.usa-step-indicator__segment::after{height:8px}.usa-step-indicator--counters .usa-step-indicator__segment::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment::before{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:inset 0 0 0 4px #919191, 0 0 0 4px #fff;box-shadow:inset 0 0 0 4px #919191, 0 0 0 4px #fff}.usa-step-indicator--counters .usa-step-indicator__segment--current::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment--current::before,.usa-step-indicator--counters .usa-step-indicator__segment--complete::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment--complete::before{-webkit-box-shadow:0 0 0 4px #fff;box-shadow:0 0 0 4px #fff}}.usa-alert{border-left-width:8px}.usa-alert .usa-alert__body{font-size:16.96px;max-width:1024px;padding:16px}.usa-alert--info .usa-alert__body,.usa-alert--warning .usa-alert__body,.usa-alert--success .usa-alert__body,.usa-alert--error .usa-alert__body{padding-left:46.66672px}.usa-alert--info .usa-alert__body::before,.usa-alert--warning .usa-alert__body::before,.usa-alert--success .usa-alert__body::before,.usa-alert--error .usa-alert__body::before{height:32px;width:32px;top:12px;left:8px}@media (min-width: 64em){.usa-alert--info .usa-alert__body,.usa-alert--warning .usa-alert__body,.usa-alert--success .usa-alert__body,.usa-alert--error .usa-alert__body{padding-left:64px;padding-right:64px}.usa-alert--info .usa-alert__body::before,.usa-alert--warning .usa-alert__body::before,.usa-alert--success .usa-alert__body::before,.usa-alert--error .usa-alert__body::before{left:24px;top:12px}}.usa-alert--slim .usa-alert__body{padding-bottom:8px;padding-top:8px;padding-left:38.6666666672px}@media (min-width: 64em){.usa-alert--slim .usa-alert__body{padding-left:56px}}.usa-checkbox__input:checked+[class*=__label]::before{background-size:12px}.usa-breadcrumb{padding-bottom:16px;padding-top:16px;font-size:16.96px}.usa-breadcrumb__list{margin:0 -4px;padding:4px}.usa-accordion{font-size:16.96px}.usa-accordion__heading{font-size:16.96px}.usa-accordion__heading:not(:first-child){margin-top:8px}.usa-accordion__button{background-size:24px;background-position:right 20px center;padding:16px 56px 16px 20px}.usa-accordion__button[aria-expanded=false]{background-size:24px}.usa-accordion__content{padding:16px 20px 12px}.usa-accordion--bordered .usa-accordion__content{border-bottom:4px solid #f0f0f0;border-left:4px solid #f0f0f0;border-right:4px solid #f0f0f0;padding-bottom:16px}.usa-character-count__status{padding-top:4px}.usa-process-list{font-size:16.96px;padding-left:16px}.usa-process-list__item:before{font-size:16.96px;border-width:4px;margin-top:-6.4px;height:32px;width:32px;border-radius:1584px}.usa-process-list__item{font-size:16.96px;border-left-width:8px;padding-bottom:32px;padding-left:32px}.usa-process-list__item:last-child{border-left-width:8px}.usa-icon--size-3{height:24px;width:24px}.usa-icon--size-4{height:32px;width:32px}.usa-icon--size-5{height:40px;width:40px}.usa-icon--size-6{height:48px;width:48px}.usa-icon--size-7{height:56px;width:56px}.usa-icon--size-8{height:64px;width:64px}.usa-icon--size-9{height:72px;width:72px}.usa-pagination{margin-bottom:16px;margin-top:16px;font-size:16.96px}.usa-pagination__item{height:40px;margin-left:4px;margin-right:4px;min-width:40px}.usa-pagination__button{border-radius:4px;padding:8px}.usa-pagination__overflow{padding:8px}.usa-pagination .usa-icon{height:18.08px;width:18.08px}@media (min-width: 40em){.usa-pagination__next-page{margin-left:20px}}:host([uswds]){color:var(--v3-color-base-darkest)}:host{display:block;font-family:var(--font-source-sans)}:host(:focus){outline:none !important}:host([uswds]) input:not([disabled]):focus{outline:2px solid var(--color-gold-light);outline-offset:2px}input{-webkit-box-sizing:border-box;box-sizing:border-box}input.usa-input{color:var(--color-base)}.usa-hint{display:block}:host(:not([uswds])) label{display:block;max-width:46rem;margin-top:3rem;font-size:16px}span.required{color:var(--color-secondary-dark)}:host(:not([uswds])) input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0.1rem solid var(--color-gray);border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--color-base);display:block;font-family:var(--font-source-sans);font-size:1.6rem;height:4.2rem;line-height:1.3;margin:0.2em 0;max-width:46rem;padding:1rem 0.7em;width:100%}:host(:not([uswds])) input:not([disabled]):focus{outline:2px solid var(--color-gold-light);outline-offset:2px}:host([success]:not([success=false]):not([uswds])) input{border:4px solid var(--color-green)}";export{l as va_select,c as va_text_input}