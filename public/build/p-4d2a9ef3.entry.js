import{r,c as t,h as e,F as o,H as i,g as s}from"./p-80f0c69a.js";const a=class{constructor(e){r(this,e),this.vaChange=t(this,"vaChange",7),this.componentLibraryAnalytics=t(this,"component-library-analytics",7),this.handleChange=r=>{const t=r.target;this.vaChange.emit({files:t.files}),t.value=null,this.enableAnalytics&&this.componentLibraryAnalytics.emit({componentName:"va-file-input",action:"change",details:{label:this.label}})},this.handleButtonClick=()=>{this.el.shadowRoot.getElementById("fileInputField").click()},this.getButtonText=()=>this.buttonText?this.buttonText:"Upload file",this.label=void 0,this.name=void 0,this.buttonText=void 0,this.required=!1,this.accept=void 0,this.error=void 0,this.hint=void 0,this.enableAnalytics=!1}render(){const{label:r,name:t,required:s,accept:a,error:n,hint:l}=this,d=this.getButtonText();return e(i,null,r&&e("label",{htmlFor:"fileInputButton"},r,s&&e("span",{class:"required"},"(*Required)")),l&&e("span",{class:"hint-text"},l),e("slot",null),e("span",{id:"error-message",role:"alert"},n&&e(o,null,e("span",{class:"sr-only"},"Error"),n)),e("va-button",{id:"fileInputButton","aria-label":r,label:r,onClick:this.handleButtonClick,secondary:!0,text:d,"aria-describedby":n?"error-message":void 0}),e("input",{id:"fileInputField",hidden:!0,type:"file",accept:a,name:t,onChange:this.handleChange}))}get el(){return s(this)}};a.style=".sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}#error-message{margin-bottom:1.2rem}#error-message,#input-error-message{color:var(--color-secondary-dark);display:block;font-weight:700}:host([error]:not([error=''])){border-left:0.4rem solid  var(--color-secondary-dark);padding-left:2rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=''])){margin-left:-2.4rem;}}:host([error]:not([error='']):not([uswds])) label{margin-top:0}:host([error]:not([error='']):not([uswds])) input,:host([error]:not([error='']):not([uswds])) textarea,:host([error]:not([error='']):not([uswds])) select{border:4px solid var(--color-secondary-dark)}.hint-text{color:#71767A;display:block}:host{display:block;font-family:var(--font-source-sans)}#error-message{margin-bottom:0.3rem}va-button{margin-bottom:-0.8rem}.required{color:var(--color-secondary-dark);margin-left:0.4rem}";export{a as va_file_input}