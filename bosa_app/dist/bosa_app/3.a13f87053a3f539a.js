"use strict";(self.webpackChunkbosa_app=self.webpackChunkbosa_app||[]).push([[3],{1003:(O,c,e)=>{e.r(c),e.d(c,{UsuariosModule:()=>y});var d=e(6895),u=e(3060),g=e(7579),m=e(2722),U=e(5226),Z=e.n(U),t=e(4650),p=e(3071),f=e(7009),T=e(5412),h=e(4859);function A(s,r){if(1&s){const o=t.EpF();t.TgZ(0,"tr")(1,"th",3),t._uU(2),t.qZA(),t.TgZ(3,"th"),t._uU(4),t.qZA(),t.TgZ(5,"th"),t._uU(6),t.qZA(),t.TgZ(7,"th"),t._uU(8),t.qZA(),t.TgZ(9,"th"),t._uU(10),t.qZA(),t.TgZ(11,"th"),t._uU(12),t.qZA(),t.TgZ(13,"th"),t._uU(14),t.qZA(),t.TgZ(15,"th"),t._uU(16),t.qZA(),t.TgZ(17,"th")(18,"button",6),t.NdJ("click",function(){const n=t.CHM(o).$implicit,l=t.oxw();return t.KtG(l.onDelete(n.idUsuario))}),t._uU(19,"Eliminar"),t.qZA()()()}if(2&s){const o=r.$implicit;t.xp6(2),t.Oqu(o.idUsuario),t.xp6(2),t.Oqu(o.nombres),t.xp6(2),t.Oqu(o.apellidos),t.xp6(2),t.Oqu(o.email),t.xp6(2),t.Oqu(o.calle),t.xp6(2),t.Oqu(o.colonia),t.xp6(2),t.Oqu(o.ciudad),t.xp6(2),t.Oqu(o.telefono)}}const b=[{path:"",component:(()=>{class s{constructor(o,i,a,n,l){this.userService=o,this.snackBar=i,this.dialog=a,this.router=n,this.activeRoute=l,this.usuarios=[],this.destroy$=new g.x}ngOnDestroy(){this.destroy$.next({}),this.destroy$.complete()}ngOnInit(){this.userService.getUsuarioList().subscribe(o=>{this.usuarios=o},o=>console.log(o))}onDelete(o){Z().fire({title:"",text:"\xbfRealmente desea eliminar el registro?",icon:"warning",showCancelButton:!0,confirmButtonColor:"darkBlue",cancelButtonColor:"darkRed",confirmButtonText:"Si",cancelButtonText:"No"}).then(i=>{i.isConfirmed&&this.userService.deleteUsuario(o).pipe((0,m.R)(this.destroy$)).subscribe(a=>{a&&(this.snackBar.open(a.message,"",{duration:5e3,panelClass:[0==a.code?"success-snackbar":"error-snackbar"],horizontalPosition:"right",verticalPosition:"top"}),this.userService.getUsuarioList().subscribe(n=>{this.usuarios=n},n=>console.log(n)))})})}}return s.\u0275fac=function(o){return new(o||s)(t.Y36(p.K),t.Y36(f.ux),t.Y36(T.uw),t.Y36(u.F0),t.Y36(u.gz))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-usuarios"]],decls:38,vars:1,consts:[[2,"margin-left","47%","font-size","xx-large"],[1,"table"],[1,"thead-dark"],["scope","row"],[2,"width","10%"],[4,"ngFor","ngForOf"],["mat-raised-button","","color","warm",3,"click"]],template:function(o,i){1&o&&(t._UZ(0,"br")(1,"br")(2,"br")(3,"br")(4,"br"),t.TgZ(5,"h1",0)(6,"b"),t._uU(7,"Usuarios"),t.qZA()(),t.TgZ(8,"table",1)(9,"thead",2)(10,"tr")(11,"th",3),t._uU(12,"#"),t.qZA(),t.TgZ(13,"th",4),t._uU(14,"Nombre(s)"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Apellidos"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Email"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"Calle"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Colonia"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Ciudad"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Telefono"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"Acciones"),t.qZA()()(),t.TgZ(29,"tbody"),t.YNc(30,A,20,8,"tr",5),t.qZA()(),t._UZ(31,"br")(32,"br")(33,"br")(34,"br")(35,"br")(36,"br")(37,"br")),2&o&&(t.xp6(30),t.Q6J("ngForOf",i.usuarios))},dependencies:[d.sg,h.lW],styles:[".table[_ngcontent-%COMP%]{width:90%;margin-left:5%;margin-right:5%}"]}),s})()}];let v=(()=>{class s{}return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[u.Bz.forChild(b),u.Bz]}),s})();var C=e(3806),x=e(7155),q=e(4006);let y=(()=>{class s{}return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[d.ez,v,C.q,x.p0,h.ot,q.UX]}),s})()}}]);