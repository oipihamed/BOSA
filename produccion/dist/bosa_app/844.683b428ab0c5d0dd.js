"use strict";(self.webpackChunkbosa_app=self.webpackChunkbosa_app||[]).push([[844],{2592:(T,l,r)=>{r.r(l),r.d(l,{HomeModule:()=>b});var u=r(6895),a=r(3060),t=r(4650),v=r(186),m=r(2340),g=r(529);let p=(()=>{class e{constructor(o){this.http=o}listarProductosOferta(){return this.http.get(`${m.N.API_URL}/producto/ofer`)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(g.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=r(1875);function Z(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"div")(1,"div",15)(2,"div",16)(3,"div",17)(4,"div",9),t._UZ(5,"img",18),t.qZA(),t.TgZ(6,"div",19)(7,"div",8)(8,"h4"),t._uU(9),t.qZA(),t.TgZ(10,"span"),t._uU(11),t.qZA()(),t.TgZ(12,"div",14)(13,"button",12),t.NdJ("click",function(){const c=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.direccionarDetalle(c.idProducto))}),t._UZ(14,"i",20),t.qZA()()(),t._UZ(15,"div"),t.qZA()()()()}if(2&e){const o=i.$implicit;t.xp6(5),t.MGl("src","../../../",o.rutaImagen,"",t.LSH),t.xp6(4),t.Oqu(o.nombre),t.xp6(2),t.hij("$ ",o.precio,"")}}function _(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"div")(1,"div",15)(2,"div",16)(3,"div",17)(4,"div",9),t._UZ(5,"img",18),t.qZA(),t.TgZ(6,"div",19)(7,"div",8)(8,"h4"),t._uU(9),t.qZA(),t.TgZ(10,"span"),t._uU(11),t.qZA()(),t.TgZ(12,"div",14)(13,"button",12),t.NdJ("click",function(){const c=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.direccionarDetalle(c.idProducto))}),t._UZ(14,"i",20),t.qZA()()(),t._UZ(15,"div"),t.qZA()()()()}if(2&e){const o=i.$implicit;t.xp6(5),t.MGl("src","../../../",o.rutaImagen,"",t.LSH),t.xp6(4),t.Oqu(o.nombre),t.xp6(2),t.hij("$ ",o.precio,"")}}function h(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"div")(1,"div",7)(2,"div",21)(3,"div",9)(4,"div",10)(5,"h4"),t._uU(6),t.qZA(),t.TgZ(7,"div",11)(8,"button",12),t.NdJ("click",function(){const c=t.CHM(o).$implicit,d=t.oxw();return t.KtG(d.direccionarCategoria(c.idCategoria))}),t._uU(9,"Ver M\xe1s!"),t.qZA()()(),t._UZ(10,"img",22),t.qZA()()()()}if(2&e){const o=i.$implicit;t.xp6(6),t.Oqu(o.nombre)}}const C=[{path:"",component:(()=>{class e{constructor(o,n,s,c){this.ProductoService=o,this.ProdOfertaService=n,this.CategoriaService=s,this.router=c}ngOnInit(){this.listarProductos(),this.listarProductosOfert(),this.listarCategorias()}listarProductos(){this.ProductoService.listarProductos().subscribe(o=>{console.log(o),this.ListarProductoss=o},o=>console.log(o))}listarProductosOfert(){this.ProdOfertaService.listarProductosOferta().subscribe(o=>{console.log(o),this.ListarProductosOferta=o},o=>console.log(o))}listarCategorias(){this.CategoriaService.listarCategorias().subscribe(o=>{console.log(o),this.ListarCategoriass=o},o=>console.log(o))}direccionarDetalle(o){this.router.navigate(["/detalle/"+o])}direccionarCategoria(o){this.router.navigate(["/categoria/"+o])}direccionarAllProducts(){this.router.navigate(["/productoGeneral"])}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(v.U),t.Y36(p),t.Y36(f.n),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:51,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-12","justify-content-center",2,"text-align","center"],[1,"section-heading"],[1,"container-fluid"],[4,"ngFor","ngForOf"],[1,"main-banner"],[1,"col-lg-6"],[1,"left-content"],[1,"thumb"],[1,"inner-content"],[1,"main-border-button"],[3,"click"],["src","assets/images/imagen_ejemplo2.jpg","alt","500px"],[1,"right-content"],[1,"col-sm-4"],[1,"form-group","col"],[1,"item"],["height","400",3,"src"],[1,"quantity-content"],[1,"fa","fa-eye"],[1,"right-first-image"],["src","../../../assets/images/imagen_ejemplo2.jpg"]],template:function(o,n){1&o&&(t._UZ(0,"br")(1,"br")(2,"br")(3,"br")(4,"br"),t.TgZ(5,"div",0)(6,"div",1)(7,"div",2)(8,"div",3)(9,"h1")(10,"b"),t._uU(11,"Nuevos Productos"),t.qZA()()()()()(),t._UZ(12,"br"),t.TgZ(13,"div",4)(14,"div"),t.YNc(15,Z,16,3,"div",5),t.TgZ(16,"div",0)(17,"div",1)(18,"div",2)(19,"div",3)(20,"h1")(21,"b"),t._uU(22,"Ofertas"),t.qZA()()()()()(),t._UZ(23,"br"),t.TgZ(24,"div",4)(25,"div"),t.YNc(26,_,16,3,"div",5),t._UZ(27,"br"),t.TgZ(28,"div",0)(29,"div",1)(30,"div",2)(31,"div",3)(32,"h1"),t._UZ(33,"b"),t.qZA()()()()(),t.TgZ(34,"div",6)(35,"div",4)(36,"div",1)(37,"div",7)(38,"div",8)(39,"div",9)(40,"div",10)(41,"h4"),t._uU(42,"Todos los Productos"),t.qZA(),t.TgZ(43,"div",11)(44,"button",12),t.NdJ("click",function(){return n.direccionarAllProducts()}),t._uU(45,"Ver M\xe1s!"),t.qZA()()(),t._UZ(46,"img",13),t.qZA()()(),t.TgZ(47,"div",7)(48,"div",14)(49,"div"),t.YNc(50,h,11,1,"div",5),t.qZA()()()()()()()()()()),2&o&&(t.xp6(15),t.Q6J("ngForOf",n.ListarProductoss),t.xp6(11),t.Q6J("ngForOf",n.ListarProductosOferta),t.xp6(24),t.Q6J("ngForOf",n.ListarCategoriass))},dependencies:[u.sg],styles:["[class*=col-sm-][_ngcontent-%COMP%], [class*=col-lg-][_ngcontent-%COMP%]{float:left}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.Bz.forChild(C),a.Bz]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,P]}),e})()}}]);