"use strict";(self.webpackChunkbosa_app=self.webpackChunkbosa_app||[]).push([[833],{1833:(W,b,c)=>{c.r(b),c.d(b,{ConfigCategoriasModule:()=>K});var M=c(6895),p=c(3060),e=c(4650),s=c(7155),g=c(7392),T=c(2687),h=c(1281),d=c(4006),m=c(3238),f=c(9643);const A=["input"],R=function(t){return{enterDuration:t}},D=["*"],I=new e.OlP("mat-checkbox-default-options",{providedIn:"root",factory:x});function x(){return{color:"accent",clickAction:"check-indeterminate"}}let Z=0;const C=x(),E={provide:d.JU,useExisting:(0,e.Gpc)(()=>_),multi:!0};class w{}const O=(0,m.sb)((0,m.pj)((0,m.Kr)((0,m.Id)(class{constructor(t){this._elementRef=t}}))));let B=(()=>{class t extends O{constructor(i,a,o,r,l,k,u){super(a),this._changeDetectorRef=o,this._ngZone=r,this._animationMode=k,this._options=u,this.ariaLabel="",this.ariaLabelledby=null,this.labelPosition="after",this.name=null,this.change=new e.vpe,this.indeterminateChange=new e.vpe,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=0,this._controlValueAccessorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||C,this.color=this.defaultColor=this._options.color||C.color,this.tabIndex=parseInt(l)||0,this.id=this._uniqueId=`${i}${++Z}`}get inputId(){return`${this.id||this._uniqueId}-input`}get required(){return this._required}set required(i){this._required=(0,h.Ig)(i)}ngAfterViewInit(){this._syncIndeterminate(this._indeterminate)}get checked(){return this._checked}set checked(i){const a=(0,h.Ig)(i);a!=this.checked&&(this._checked=a,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(i){const a=(0,h.Ig)(i);a!==this.disabled&&(this._disabled=a,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(i){const a=i!=this._indeterminate;this._indeterminate=(0,h.Ig)(i),a&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(i){this.checked=!!i}registerOnChange(i){this._controlValueAccessorChangeFn=i}registerOnTouched(i){this._onTouched=i}setDisabledState(i){this.disabled=i}_getAriaChecked(){return this.checked?"true":this.indeterminate?"mixed":"false"}_transitionCheckState(i){let a=this._currentCheckState,o=this._getAnimationTargetElement();if(a!==i&&o&&(this._currentAnimationClass.length>0&&o.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(a,i),this._currentCheckState=i,this._currentAnimationClass.length>0)){o.classList.add(this._currentAnimationClass);const r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{o.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){const i=this._options?.clickAction;this.disabled||"noop"===i?!this.disabled&&"noop"===i&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==i&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this._checked=!this._checked,this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}_onInteractionEvent(i){i.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(i,a){if("NoopAnimations"===this._animationMode)return"";switch(i){case 0:if(1===a)return this._animationClasses.uncheckedToChecked;if(3==a)return this._animationClasses.uncheckedToIndeterminate;break;case 2:return 1===a?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case 1:return 2===a?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case 3:return 1===a?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(i){const a=this._inputElement;a&&(a.nativeElement.indeterminate=i)}}return t.\u0275fac=function(i){e.$Z()},t.\u0275dir=e.lG2({type:t,viewQuery:function(i,a){if(1&i&&(e.Gf(A,5),e.Gf(m.wG,5)),2&i){let o;e.iGM(o=e.CRH())&&(a._inputElement=o.first),e.iGM(o=e.CRH())&&(a.ripple=o.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],id:"id",required:"required",labelPosition:"labelPosition",name:"name",value:"value",checked:"checked",disabled:"disabled",indeterminate:"indeterminate"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},features:[e.qOj]}),t})(),_=(()=>{class t extends B{constructor(i,a,o,r,l,k,u){super("mat-checkbox-",i,a,r,l,k,u),this._focusMonitor=o,this._animationClasses={uncheckedToChecked:"mat-checkbox-anim-unchecked-checked",uncheckedToIndeterminate:"mat-checkbox-anim-unchecked-indeterminate",checkedToUnchecked:"mat-checkbox-anim-checked-unchecked",checkedToIndeterminate:"mat-checkbox-anim-checked-indeterminate",indeterminateToChecked:"mat-checkbox-anim-indeterminate-checked",indeterminateToUnchecked:"mat-checkbox-anim-indeterminate-unchecked"}}_createChangeEvent(i){const a=new w;return a.source=this,a.checked=i,a}_getAnimationTargetElement(){return this._elementRef.nativeElement}ngAfterViewInit(){super.ngAfterViewInit(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(i=>{i||this._onBlur()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onInputClick(i){i.stopPropagation(),super._handleInputClick()}focus(i,a){i?this._focusMonitor.focusVia(this._inputElement,i,a):this._inputElement.nativeElement.focus(a)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(T.tE),e.Y36(e.R0b),e.$8M("tabindex"),e.Y36(e.QbO,8),e.Y36(I,8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["mat-checkbox"]],hostAttrs:[1,"mat-checkbox"],hostVars:14,hostBindings:function(i,a){2&i&&(e.Ikx("id",a.id),e.uIk("tabindex",null)("aria-label",null)("aria-labelledby",null),e.ekj("mat-checkbox-indeterminate",a.indeterminate)("mat-checkbox-checked",a.checked)("mat-checkbox-disabled",a.disabled)("mat-checkbox-label-before","before"==a.labelPosition)("_mat-animation-noopable","NoopAnimations"===a._animationMode))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex"},exportAs:["matCheckbox"],features:[e._Bn([E]),e.qOj],ngContentSelectors:D,decls:17,vars:21,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24","aria-hidden","true",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(i,a){if(1&i&&(e.F$t(),e.TgZ(0,"label",0,1)(2,"span",2)(3,"input",3,4),e.NdJ("change",function(r){return a._onInteractionEvent(r)})("click",function(r){return a._onInputClick(r)}),e.qZA(),e.TgZ(5,"span",5),e._UZ(6,"span",6),e.qZA(),e._UZ(7,"span",7),e.TgZ(8,"span",8),e.O4$(),e.TgZ(9,"svg",9),e._UZ(10,"path",10),e.qZA(),e.kcU(),e._UZ(11,"span",11),e.qZA()(),e.TgZ(12,"span",12,13),e.NdJ("cdkObserveContent",function(){return a._onLabelTextChange()}),e.TgZ(14,"span",14),e._uU(15,"\xa0"),e.qZA(),e.Hsn(16),e.qZA()()),2&i){const o=e.MAs(1),r=e.MAs(13);e.uIk("for",a.inputId),e.xp6(2),e.ekj("mat-checkbox-inner-container-no-side-margin",!r.textContent||!r.textContent.trim()),e.xp6(1),e.Q6J("id",a.inputId)("required",a.required)("checked",a.checked)("disabled",a.disabled)("tabIndex",a.tabIndex),e.uIk("value",a.value)("name",a.name)("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby)("aria-checked",a._getAriaChecked())("aria-describedby",a.ariaDescribedby),e.xp6(2),e.Q6J("matRippleTrigger",o)("matRippleDisabled",a._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",e.VKq(19,R,"NoopAnimations"===a._animationMode?0:150))}},dependencies:[m.wG,f.wD],styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-ripple{outline:solid 3px}.mat-checkbox-layout{-webkit-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:rgba(0,0,0,0);transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:rgba(0,0,0,0)}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}"],encapsulation:2,changeDetection:0}),t})(),y=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t})(),F=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.si,m.BQ,f.Q8,y,m.BQ,y]}),t})();var v=c(266);function P(t,n){1&t&&(e.TgZ(0,"th",18),e._uU(1," ID "),e.qZA())}function V(t,n){if(1&t&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&t){const i=n.$implicit;e.xp6(1),e.hij(" ",i.id," ")}}function z(t,n){1&t&&(e.TgZ(0,"th",18),e._uU(1," Categor\xedas "),e.qZA())}function N(t,n){if(1&t&&(e.TgZ(0,"td",19),e._uU(1),e.qZA()),2&t){const i=n.$implicit;e.xp6(1),e.hij(" ",i.categoria," ")}}function S(t,n){1&t&&e._UZ(0,"th",18)}function L(t,n){1&t&&(e.TgZ(0,"td",19)(1,"a",20)(2,"mat-icon"),e._uU(3,"edit"),e.qZA()(),e.TgZ(4,"a",21)(5,"mat-icon"),e._uU(6,"delete"),e.qZA()()())}function j(t,n){1&t&&e._UZ(0,"th",18)}function Q(t,n){1&t&&(e.TgZ(0,"td",19),e._UZ(1,"mat-checkbox",22),e.qZA())}function Y(t,n){1&t&&e._UZ(0,"tr",23)}function H(t,n){1&t&&e._UZ(0,"tr",24)}const X=[{id:1,categoria:"Categoria 1"},{id:2,categoria:"Categoria 2"},{id:3,categoria:"Categoria 3"},{id:4,categoria:"Categoria 4"},{id:5,categoria:"Categoria 5"}],J=[{path:"",component:(()=>{class t{constructor(){this.displayedColumns=["id","categoria","acciones","activar"],this.dataSource=X}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-config-categorias"]],decls:28,vars:4,consts:[[1,"row"],[1,"col-3","col_Ti","active"],["href","",1,"tituloRI"],[1,"col-6","col_Ti"],[1,"col-12","justify-content-center",2,"text-align","right"],["href","#"],["type","button",1,"btn","btn-secondary","center-block"],[1,"tabla"],["tabindex","1",1,"example-container","mat-elevation-z4"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","categoria"],["matColumnDef","acciones"],["matColumnDef","activar"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["matTooltip","Editar Categor\xeda",1,"pointer",2,"color","cadetblue"],["matTooltip","Eliminar Categor\xeda",1,"pointer",2,"color","darkred"],["matTooltip","Activar/Desactivar Categor\xeda",1,"example-margin"],["mat-header-row",""],["mat-row",""]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2")(3,"a",2),e._uU(4,"Configuraci\xf3n Categor\xedas"),e.qZA()()(),e._UZ(5,"div",3),e.qZA(),e.TgZ(6,"div",4)(7,"a",5)(8,"button",6),e._uU(9,"Agregar Categor\xeda"),e.qZA()()(),e._UZ(10,"br"),e.TgZ(11,"div",7)(12,"section",8)(13,"table",9),e.ynx(14,10),e.YNc(15,P,2,0,"th",11),e.YNc(16,V,2,1,"td",12),e.BQk(),e.ynx(17,13),e.YNc(18,z,2,0,"th",11),e.YNc(19,N,2,1,"td",12),e.BQk(),e.ynx(20,14),e.YNc(21,S,1,0,"th",11),e.YNc(22,L,7,0,"td",12),e.BQk(),e.ynx(23,15),e.YNc(24,j,1,0,"th",11),e.YNc(25,Q,2,0,"td",12),e.BQk(),e.YNc(26,Y,1,0,"tr",16),e.YNc(27,H,1,0,"tr",17),e.qZA()()()),2&i&&(e.xp6(13),e.Q6J("dataSource",a.dataSource),e.xp6(13),e.Q6J("matHeaderRowDef",a.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns))},dependencies:[s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,g.Hw,_,v.gM],styles:[".contenedorTitulo[_ngcontent-%COMP%]{margin-top:60px;min-height:150px;max-height:200px;background-color:#f8f8f8}.tituloRI[_ngcontent-%COMP%]{color:#444}.tituloRI[_ngcontent-%COMP%]:hover{color:#9d9d9d}.row[_ngcontent-%COMP%]{max-width:100%;margin-left:0;margin-right:0;padding:0 40px}.col_Ti[_ngcontent-%COMP%]{min-height:150px;border-bottom:solid #444444 2px;transition:.5s;padding-top:90px;margin-bottom:50px}.col_Ti[_ngcontent-%COMP%]:hover, .active[_ngcontent-%COMP%]{border-bottom:solid #adadad 2px}table[_ngcontent-%COMP%]{width:100%}.example-container[_ngcontent-%COMP%]{height:auto;overflow:visible;justify-content:center;display:flex}th[_ngcontent-%COMP%]{width:20%;font-size:larger}"]}),t})()}];let G=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(J),p.Bz]}),t})();var $=c(9549);let K=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[M.ez,G,s.p0,g.Ps,F,v.AV,$.lN]}),t})()}}]);