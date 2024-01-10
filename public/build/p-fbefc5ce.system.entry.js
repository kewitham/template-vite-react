System.register(["./p-5e3f33dd.system.js"],(function(e){"use strict";var t,n,o,i,a,r;return{setters:[function(e){t=e.r;n=e.c;o=e.h;i=e.F;a=e.H;r=e.g}],execute:function(){var s="button:not([disabled]):focus,:host(:not([uswds])) button:not([disabled]):active,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,[role='option']:focus{outline:2px solid var(--color-gold-light);outline-offset:2px}button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;border-radius:5px;color:var(--color-white);cursor:pointer;display:inline-block;font-family:var(--font-source-sans);font-size:1.6rem;font-weight:700;line-height:1;padding:1rem 2rem;text-align:center;text-decoration:none}button:not([disabled]):focus,:host(:not([uswds])) button:not([disabled]):active,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,[role='option']:focus{outline:2px solid var(--color-gold-light);outline-offset:2px}input,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0.1rem solid var(--color-gray);border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--color-base);display:block;font-size:1.6rem;height:4.2rem;line-height:1.3;margin:0.2em 0;max-width:46rem;padding:1rem 0.7em;width:100%}:host{display:block;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;position:relative}#va-search-input{border-color:var(--color-gray);display:inline-block;height:4.8rem;margin:0;max-width:none;min-width:24.8rem;padding:1.2rem 0.8rem}#va-search-input:focus{z-index:1}#va-search-button{-ms-flex-align:center;align-items:center;background-color:var(--color-primary);border-radius:0 3px 3px 0;display:-ms-flexbox;display:flex;height:4.8rem}#va-search-button:focus{z-index:1}#va-search-button:active,#va-search-button:hover{background-color:var(--color-primary-darker)}i::before{content:'\\F002';display:inline-block;font-family:'Font Awesome 5 Free';font-style:normal;font-variant:normal;font-weight:900;line-height:1;text-rendering:auto}#va-search-button-text{margin-left:0.4rem}#va-search-listbox{background-color:var(--color-white);-webkit-box-shadow:0px 2px 6px 1px rgba(20, 20, 20, 0.14);box-shadow:0px 2px 6px 1px rgba(20, 20, 20, 0.14);display:block;left:0;line-height:2.4rem;list-style-type:none;margin:0;padding:0;position:absolute;right:0;top:4.8rem}.va-search-suggestion{cursor:pointer;padding:0.8rem}.va-search-suggestion[aria-selected='true'],.va-search-suggestion:focus,.va-search-suggestion:hover{background-color:var(--color-primary);color:var(--color-white)}";var u=e("va_search_input",function(){function e(e){var a=this;t(this,e);this.componentLibraryAnalytics=n(this,"component-library-analytics",7);this.handleBlur=function(){a.componentLibraryAnalytics.emit({componentName:"va-search-input",action:"blur",details:{value:a.value}});if(!a.formattedSuggestions.length)return;a.isListboxOpen=false};this.handleSubmit=function(){a.inputRef.dispatchEvent(new SubmitEvent("submit",{bubbles:true,cancelable:true,composed:true}));a.componentLibraryAnalytics.emit({componentName:"va-search-input",action:"click",details:{value:a.value}})};this.handleInput=function(e){a.value=e.target.value;if(!a.suggestions)return;a.updateSuggestions(a.suggestions)};this.handleInputFocus=function(){if(a.formattedSuggestions.length&&!a.isListboxOpen){a.isListboxOpen=true}};this.handleInputKeyDown=function(e){var t=a.el.shadowRoot.querySelectorAll('[role="option"]');switch(e.key){case"ArrowDown":e.preventDefault();if(!(t===null||t===void 0?void 0:t.length))return;var n=t[0];a.selectSuggestion(n);break;case"ArrowUp":e.preventDefault();if(!(t===null||t===void 0?void 0:t.length))return;var o=t[t.length-1];a.selectSuggestion(o);break;case"Enter":a.handleSubmit();break;case"Escape":a.inputRef.value="";a.inputRef.dispatchEvent(new InputEvent("input",{bubbles:true,composed:true}));break;case"Tab":a.isListboxOpen=false;break}};this.handleButtonClick=function(){a.handleSubmit()};this.handleListboxClick=function(e){var t=a.el.shadowRoot.getElementById("listbox-option-".concat(e));a.inputRef.value=t.innerText;a.inputRef.dispatchEvent(new InputEvent("input",{bubbles:true,composed:true}));a.inputRef.removeAttribute("aria-activedescendant");a.isListboxOpen=false;a.handleSubmit()};this.handleListboxKeyDown=function(e,t){var n=a.el.shadowRoot.querySelectorAll('[role="option"]');switch(e.key){case"ArrowUp":e.preventDefault();if(t===0){a.selectSuggestion(n[n.length-1])}else{a.selectSuggestion(n[t-1])}break;case"ArrowDown":e.preventDefault();if(t===n.length-1){a.selectSuggestion(n[0])}else{a.selectSuggestion(n[t+1])}break;case"Enter":a.inputRef.value=n[t].innerText;a.inputRef.dispatchEvent(new InputEvent("input",{bubbles:true,composed:true}));a.inputRef.focus();a.inputRef.removeAttribute("aria-activedescendant");a.isListboxOpen=false;a.handleSubmit();break;case"Escape":a.inputRef.value="";a.inputRef.dispatchEvent(new InputEvent("input",{bubbles:true,composed:true}));a.inputRef.focus();a.inputRef.removeAttribute("aria-activedescendant");a.isListboxOpen=false;break;case"Home":e.preventDefault();a.inputRef.focus();a.inputRef.setSelectionRange(0,0);break;case"ArrowRight":case"End":e.preventDefault();a.inputRef.focus();a.inputRef.setSelectionRange(a.inputRef.value.length+1,a.inputRef.value.length+1);break;case"ArrowLeft":e.preventDefault();a.inputRef.focus();a.inputRef.setSelectionRange(a.inputRef.value.length,a.inputRef.value.length);break;default:a.inputRef.focus();break}};this.formatSuggestion=function(e){var t=e.toLowerCase();var n=a.inputRef.value.toLowerCase();if(t.includes(n)){return o(i,null,n,o("strong",null,t.replace(n,"")))}return o("strong",null,t)};this.selectSuggestion=function(e){var t=a.el.shadowRoot.querySelector('[aria-selected="true"]');t===null||t===void 0?void 0:t.removeAttribute("aria-selected");e.focus();e.setAttribute("aria-selected","true");a.inputRef.setAttribute("aria-activedescendant",e.id)};this.updateSuggestions=function(e){if(!e.length){a.formattedSuggestions=[];a.isListboxOpen=false;return}a.formattedSuggestions=e.slice(0,5).sort().map((function(e){return a.formatSuggestion(e)}));a.isListboxOpen=true};this.formattedSuggestions=[];this.isListboxOpen=undefined;this.buttonText=undefined;this.label="Search";this.suggestions=undefined;this.value=""}e.prototype.componentDidLoad=function(){var e;if(!Array.isArray(this.suggestions)||!((e=this.suggestions)===null||e===void 0?void 0:e.length))return;this.updateSuggestions(this.suggestions)};e.prototype.watchValueHandler=function(){this.value=this.inputRef.value};e.prototype.watchSuggestionsHandler=function(e){if(!Array.isArray(e))return;this.updateSuggestions(e)};e.prototype.render=function(){var e=this;var t=this,n=t.buttonText,i=t.formattedSuggestions,r=t.handleBlur,s=t.handleButtonClick,u=t.handleInput,l=t.handleInputFocus,c=t.handleInputKeyDown,d=t.handleListboxClick,p=t.handleListboxKeyDown,f=t.isListboxOpen,b=t.label,h=t.value;var g=i.length;var v=g?"list":"none";var m=g?"va-search-listbox":undefined;var x=g?f?"true":"false":undefined;var y=g?"listbox":undefined;var w=g?"combobox":undefined;var k=this.el.getAttribute("type")||"text";return o(a,{onBlur:r},o("input",{ref:function(t){return e.inputRef=t},id:"va-search-input","aria-autocomplete":v,"aria-controls":m,"aria-expanded":x,"aria-haspopup":y,"aria-label":b,autocomplete:"off",onFocus:l,onInput:u,onKeyDown:c,role:w,type:k,value:h}),o("button",{id:"va-search-button",type:"submit","aria-label":b,onClick:s},o("i",{"aria-hidden":"true",class:"fa fa-search"}),n&&o("span",{id:"va-search-button-text"},n)),f&&o("ul",{id:"va-search-listbox","aria-label":"Search Suggestions",role:"listbox"},i.map((function(e,t){return o("li",{id:"listbox-option-".concat(t),class:"va-search-suggestion",onClick:function(){return d(t)},onKeyDown:function(e){return p(e,t)},role:"option",tabIndex:-1},e)}))))};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["watchValueHandler"],suggestions:["watchSuggestionsHandler"]}},enumerable:false,configurable:true});return e}());u.style=s}}}));