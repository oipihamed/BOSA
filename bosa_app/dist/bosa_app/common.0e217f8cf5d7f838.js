"use strict";(self.webpackChunkbosa_app=self.webpackChunkbosa_app||[]).push([[592],{1875:(v,P,r)=>{r.d(P,{n:()=>c});var s=r(2340),u=r(4650),h=r(529),l=r(3060),_=r(7009);let c=(()=>{class a{constructor(e,t,i){this.http=e,this.router=t,this.snackBar=i}listarCategorias(){return this.http.get(`${s.N.API_URL}/categoria`)}listarUnaCategoria(e){return this.http.get(`${s.N.API_URL}/categoria/${e} `)}}return a.\u0275fac=function(e){return new(e||a)(u.LFG(h.eN),u.LFG(l.F0),u.LFG(_.ux))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},3071:(v,P,r)=>{r.d(P,{K:()=>e});var s=r(2340),u=r(4004),h=r(262),l=r(2843),_=r(4650),c=r(529),a=r(3060),E=r(7009);let e=(()=>{class t{constructor(n,o,g){this.http=n,this.router=o,this.snackBar=g}signUpUser(n){return this.http.post(`${s.N.API_URL}/user`,n).pipe((0,u.U)(o=>(0==o.code&&(this.snackBar.open(o.message,"",{duration:5e3,panelClass:["success-snackbar"],horizontalPosition:"right",verticalPosition:"top"}),this.router.navigate(["login"])),o)),(0,h.K)(o=>this.handlerError(o)))}getUsuarioList(){return this.http.get(`${s.N.API_URL}/user/`)}getUsuarioById(n){return this.http.get(`${s.N.API_URL}/user/${n}`)}deleteUsuario(n){return this.http.delete(`${s.N.API_URL}/user/${n}`)}handlerError(n){let o="Ocurrio un error";return n&&(o=`${n.error.message}`),this.snackBar.open(o,"",{duration:5e3,panelClass:["error-snackbar"],horizontalPosition:"right",verticalPosition:"top"}),(0,l._)(o)}}return t.\u0275fac=function(n){return new(n||t)(_.LFG(c.eN),_.LFG(a.F0),_.LFG(E.ux))},t.\u0275prov=_.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},5861:(v,P,r)=>{function s(h,l,_,c,a,E,e){try{var t=h[E](e),i=t.value}catch(n){return void _(n)}t.done?l(i):Promise.resolve(i).then(c,a)}function u(h){return function(){var l=this,_=arguments;return new Promise(function(c,a){var E=h.apply(l,_);function e(i){s(E,c,a,e,t,"next",i)}function t(i){s(E,c,a,e,t,"throw",i)}e(void 0)})}}r.d(P,{Z:()=>u})}}]);