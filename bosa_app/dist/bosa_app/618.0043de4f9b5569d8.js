"use strict";(self.webpackChunkbosa_app=self.webpackChunkbosa_app||[]).push([[618],{3618:(ht,_,s)=>{s.r(_),s.d(_,{ProductosListModule:()=>mt});var g=s(6895),d=s(3060),l=s(7155),t=s(4650),u=s(3238),m=s(4859),P=s(4385),x=s(266),p=s(1281),v=s(7579),b=s(9549);function S(i,o){if(1&i&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function M(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"mat-form-field",16)(1,"mat-select",17),t.NdJ("selectionChange",function(n){t.CHM(e);const r=t.oxw(2);return t.KtG(r._changePageSize(n.value))}),t.YNc(2,S,2,2,"mat-option",18),t.qZA()()}if(2&i){const e=t.oxw(2);t.Q6J("appearance",e._formFieldAppearance)("color",e.color),t.xp6(1),t.Q6J("value",e.pageSize)("disabled",e.disabled)("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering)("aria-label",e._intl.itemsPerPageLabel),t.xp6(1),t.Q6J("ngForOf",e._displayedPageSizeOptions)}}function I(i,o){if(1&i&&(t.TgZ(0,"div",20),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Oqu(e.pageSize)}}function Z(i,o){if(1&i&&(t.TgZ(0,"div",12)(1,"div",13),t._uU(2),t.qZA(),t.YNc(3,M,3,8,"mat-form-field",14),t.YNc(4,I,2,1,"div",15),t.qZA()),2&i){const e=t.oxw();t.xp6(2),t.hij(" ",e._intl.itemsPerPageLabel," "),t.xp6(1),t.Q6J("ngIf",e._displayedPageSizeOptions.length>1),t.xp6(1),t.Q6J("ngIf",e._displayedPageSizeOptions.length<=1)}}function O(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.firstPage())}),t.O4$(),t.TgZ(1,"svg",7),t._UZ(2,"path",22),t.qZA()()}if(2&i){const e=t.oxw();t.Q6J("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("matTooltipPosition","above")("disabled",e._previousButtonsDisabled()),t.uIk("aria-label",e._intl.firstPageLabel)}}function D(i,o){if(1&i){const e=t.EpF();t.O4$(),t.kcU(),t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.lastPage())}),t.O4$(),t.TgZ(1,"svg",7),t._UZ(2,"path",24),t.qZA()()}if(2&i){const e=t.oxw();t.Q6J("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("matTooltipPosition","above")("disabled",e._nextButtonsDisabled()),t.uIk("aria-label",e._intl.lastPageLabel)}}let h=(()=>{class i{constructor(){this.changes=new v.x,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(e,a,n)=>{if(0==n||0==a)return`0 of ${n}`;const r=e*a;return`${r+1} \u2013 ${r<(n=Math.max(n,0))?Math.min(r+a,n):r+a} of ${n}`}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const A={provide:h,deps:[[new t.FiY,new t.tp0,h]],useFactory:function y(i){return i||new h}},N=new t.OlP("MAT_PAGINATOR_DEFAULT_OPTIONS"),F=(0,u.Id)((0,u.dB)(class{}));let w=(()=>{class i extends F{constructor(e,a,n){if(super(),this._intl=e,this._changeDetectorRef=a,this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this._hidePageSize=!1,this._showFirstLastButtons=!1,this.selectConfig={},this.page=new t.vpe,this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),n){const{pageSize:r,pageSizeOptions:c,hidePageSize:f,showFirstLastButtons:L}=n;null!=r&&(this._pageSize=r),null!=c&&(this._pageSizeOptions=c),null!=f&&(this._hidePageSize=f),null!=L&&(this._showFirstLastButtons=L)}}get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max((0,p.su)(e),0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(e){this._length=(0,p.su)(e),this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max((0,p.su)(e),0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(a=>(0,p.su)(a)),this._updateDisplayedPageSizeOptions()}get hidePageSize(){return this._hidePageSize}set hidePageSize(e){this._hidePageSize=(0,p.Ig)(e)}get showFirstLastButtons(){return this._showFirstLastButtons}set showFirstLastButtons(e){this._showFirstLastButtons=(0,p.Ig)(e)}ngOnInit(){this._initialized=!0,this._updateDisplayedPageSizeOptions(),this._markInitialized()}ngOnDestroy(){this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;const e=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(e)}previousPage(){if(!this.hasPreviousPage())return;const e=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(e)}firstPage(){if(!this.hasPreviousPage())return;const e=this.pageIndex;this.pageIndex=0,this._emitPageEvent(e)}lastPage(){if(!this.hasNextPage())return;const e=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(e)}hasPreviousPage(){return this.pageIndex>=1&&0!=this.pageSize}hasNextPage(){const e=this.getNumberOfPages()-1;return this.pageIndex<e&&0!=this.pageSize}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){const n=this.pageIndex;this.pageIndex=Math.floor(this.pageIndex*this.pageSize/e)||0,this.pageSize=e,this._emitPageEvent(n)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){!this._initialized||(this.pageSize||(this._pageSize=0!=this.pageSizeOptions.length?this.pageSizeOptions[0]:50),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),-1===this._displayedPageSizeOptions.indexOf(this.pageSize)&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,a)=>e-a),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}}return i.\u0275fac=function(e){t.$Z()},i.\u0275dir=t.lG2({type:i,inputs:{color:"color",pageIndex:"pageIndex",length:"length",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",hidePageSize:"hidePageSize",showFirstLastButtons:"showFirstLastButtons",selectConfig:"selectConfig"},outputs:{page:"page"},features:[t.qOj]}),i})(),T=(()=>{class i extends w{constructor(e,a,n){super(e,a,n),n&&null!=n.formFieldAppearance&&(this._formFieldAppearance=n.formFieldAppearance)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h),t.Y36(t.sBO),t.Y36(N,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-paginator"],inputs:{disabled:"disabled"},exportAs:["matPaginator"],features:[t.qOj],decls:14,vars:14,consts:[[1,"mat-paginator-outer-container"],[1,"mat-paginator-container"],["class","mat-paginator-page-size",4,"ngIf"],[1,"mat-paginator-range-actions"],[1,"mat-paginator-range-label"],["mat-icon-button","","type","button","class","mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-previous",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["viewBox","0 0 24 24","focusable","false",1,"mat-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-next",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button","class","mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],[1,"mat-paginator-page-size"],[1,"mat-paginator-page-size-label"],["class","mat-paginator-page-size-select",3,"appearance","color",4,"ngIf"],["class","mat-paginator-page-size-value",4,"ngIf"],[1,"mat-paginator-page-size-select",3,"appearance","color"],[3,"value","disabled","panelClass","disableOptionCentering","aria-label","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mat-paginator-page-size-value"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,Z,5,3,"div",2),t.TgZ(3,"div",3)(4,"div",4),t._uU(5),t.qZA(),t.YNc(6,O,3,5,"button",5),t.TgZ(7,"button",6),t.NdJ("click",function(){return a.previousPage()}),t.O4$(),t.TgZ(8,"svg",7),t._UZ(9,"path",8),t.qZA()(),t.kcU(),t.TgZ(10,"button",9),t.NdJ("click",function(){return a.nextPage()}),t.O4$(),t.TgZ(11,"svg",7),t._UZ(12,"path",10),t.qZA()(),t.YNc(13,D,3,5,"button",11),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("ngIf",!a.hidePageSize),t.xp6(3),t.hij(" ",a._intl.getRangeLabel(a.pageIndex,a.pageSize,a.length)," "),t.xp6(1),t.Q6J("ngIf",a.showFirstLastButtons),t.xp6(1),t.Q6J("matTooltip",a._intl.previousPageLabel)("matTooltipDisabled",a._previousButtonsDisabled())("matTooltipPosition","above")("disabled",a._previousButtonsDisabled()),t.uIk("aria-label",a._intl.previousPageLabel),t.xp6(3),t.Q6J("matTooltip",a._intl.nextPageLabel)("matTooltipDisabled",a._nextButtonsDisabled())("matTooltipPosition","above")("disabled",a._nextButtonsDisabled()),t.uIk("aria-label",a._intl.nextPageLabel),t.xp6(3),t.Q6J("ngIf",a.showFirstLastButtons))},dependencies:[g.sg,g.O5,m.lW,b.KE,P.gD,u.ey,x.gM],styles:[".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-paginator-icon{fill:CanvasText}"],encapsulation:2,changeDetection:0}),i})(),k=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[A],imports:[g.ez,m.ot,P.LD,x.AV,u.BQ]}),i})();var U=s(5226),Y=s.n(U),R=s(8411),J=s(2722),Q=s(186),$=s(5109),E=s(7009),z=s(5412),C=s(7392);function j(i,o){1&i&&(t.TgZ(0,"th",15),t._uU(1," Nombre "),t.qZA())}function G(i,o){if(1&i&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij(" ",e.nombre," ")}}function H(i,o){1&i&&(t.TgZ(0,"th",15),t._uU(1," Descripcion "),t.qZA())}function q(i,o){if(1&i&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij(" ",e.descripcion," ")}}function K(i,o){1&i&&(t.TgZ(0,"th",15),t._uU(1," Precio "),t.qZA())}function V(i,o){if(1&i&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij(" ",e.precio," ")}}function W(i,o){1&i&&(t.TgZ(0,"th",15),t._uU(1," Cantidad "),t.qZA())}function X(i,o){if(1&i&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij(" ",e.cantidadExistencia," ")}}function tt(i,o){1&i&&(t.TgZ(0,"th",15),t._uU(1," Categoria "),t.qZA())}function et(i,o){if(1&i&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.xp6(1),t.hij(" ",e.nombreCategoria," ")}}function it(i,o){1&i&&(t.TgZ(0,"th",15),t._uU(1," Acciones "),t.qZA())}function at(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"td",16)(1,"button",17),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.onOpenModal(r))}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",18),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.deleteProduct(r.idProducto,r.nombre))}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA()()()}}function ot(i,o){1&i&&t._UZ(0,"tr",19)}function nt(i,o){1&i&&t._UZ(0,"tr",20)}const st=function(){return[5,10,20,50,100]},rt=[{path:"",component:(()=>{class i{constructor(e,a,n,r,c,f){this.ProductoService=e,this.router=a,this.activeRoute=n,this.pServAdm=r,this.snackBar=c,this.dialog=f,this.displayedColumns=["nombre","descripcion","cantidad","precio","categoria","actions"],this.dataSource=new l.by,this.destroy$=new v.x}ngOnDestroy(){this.destroy$.next({}),this.destroy$.complete()}ngOnInit(){this.listarProductos()}ngAfterViewInit(){this.dataSource.paginator=this.paginator}listarProductos(){this.ProductoService.listarAllProductos().subscribe(e=>{console.log(e),this.dataSource.data=e},e=>console.log(e))}deleteProduct(e,a){Y().fire({title:"",text:`\xbfDeseas eliminar el registro ${a}?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"darkBlue",cancelButtonColor:"darkRed",confirmButtonText:"Si",cancelButtonText:"No"}).then(n=>{n.isConfirmed&&this.pServAdm.delete(e).subscribe(r=>{r&&(this.snackBar.open(r.message,"",{duration:5e3,panelClass:[0==r.code?"success-snackbar":"error-snackbar"],horizontalPosition:"right",verticalPosition:"top"}),this.listarProductos())})})}onOpenModal(e={}){console.log(e),this.dialog.open(R.H,{minWidth:"60%",data:{title:"Registro de Productos",producto:e}}).afterClosed().pipe((0,J.R)(this.destroy$)).subscribe(n=>{n&&(this.snackBar.open(n.message,"",{duration:5e3,panelClass:[0==n.code?"success-snackbar":"error-snackbar"],horizontalPosition:"right",verticalPosition:"top"}),this.listarProductos())})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(Q.U),t.Y36(d.F0),t.Y36(d.gz),t.Y36($.U),t.Y36(E.ux),t.Y36(z.uw))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-productos-list"]],viewQuery:function(e,a){if(1&e&&t.Gf(T,5),2&e){let n;t.iGM(n=t.CRH())&&(a.paginator=n.first)}},decls:28,vars:5,consts:[[1,"table-content","mat-elevation-z8"],["align","right"],["mat-flat-button","","color","primary",3,"click"],["mat-table","",3,"dataSource"],["matColumnDef","nombre"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","descripcion"],["matColumnDef","precio"],["matColumnDef","cantidad"],["matColumnDef","categoria"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-flat-button","","color","accent",3,"click"],["mat-flat-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return a.onOpenModal()}),t.TgZ(3,"mat-icon"),t._uU(4,"add"),t.qZA(),t._uU(5," Agregar "),t.qZA()(),t.TgZ(6,"table",3),t.ynx(7,4),t.YNc(8,j,2,0,"th",5),t.YNc(9,G,2,1,"td",6),t.BQk(),t.ynx(10,7),t.YNc(11,H,2,0,"th",5),t.YNc(12,q,2,1,"td",6),t.BQk(),t.ynx(13,8),t.YNc(14,K,2,0,"th",5),t.YNc(15,V,2,1,"td",6),t.BQk(),t.ynx(16,9),t.YNc(17,W,2,0,"th",5),t.YNc(18,X,2,1,"td",6),t.BQk(),t.ynx(19,10),t.YNc(20,tt,2,0,"th",5),t.YNc(21,et,2,1,"td",6),t.BQk(),t.ynx(22,11),t.YNc(23,it,2,0,"th",5),t.YNc(24,at,7,0,"td",6),t.BQk(),t.YNc(25,ot,1,0,"tr",12),t.YNc(26,nt,1,0,"tr",13),t.qZA(),t._UZ(27,"mat-paginator",14),t.qZA()),2&e&&(t.xp6(6),t.Q6J("dataSource",a.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(4,st)))},dependencies:[m.lW,C.Hw,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,T],styles:[".table-content[_ngcontent-%COMP%]{width:90%;margin:0 auto;margin-top:10rem}table[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{margin:12px}"]}),i})()}];let lt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.Bz.forChild(rt),d.Bz]}),i})();var ct=s(3806),pt=s(3805),gt=s(3546),dt=s(4144),ut=s(4006);let mt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.ez,lt,ut.UX,ct.q,C.Ps,l.p0,k,b.lN,gt.QW,dt.c,m.ot,z.Is,pt.Bb,P.LD]}),i})()}}]);