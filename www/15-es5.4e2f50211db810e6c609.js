!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var e=0;e<i.length;e++){var o=i[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{X3zk:function(e,o,t){"use strict";t.r(o),t.d(o,"LoginPageModule",(function(){return w}));var a,c,r,s=t("ofXK"),b=t("3Pt+"),l=t("TEn/"),u=t("tyNb"),d=t("cxbk"),f=t("fXoL"),p=t("UbJi"),m=t("OlR4"),h=[{path:"",component:(a=function(){function e(i,o){n(this,e),this.afAuth=i,this.commonService=o,this.email="",this.password="",this.adminEmail=d.a.adminEmail}var o,t,a;return o=e,(t=[{key:"ngOnInit",value:function(){}},{key:"login",value:function(){var n=this;""!=this.email&&""!=this.password&&(this.commonService.showLoader(),this.afAuth.signInWithEmailAndPassword(this.email,this.password).then((function(i){n.commonService.hideLoader()})).catch((function(i){n.commonService.hideLoader(),n.commonService.showToast("Error!")})))}}])&&i(o.prototype,t),a&&i(o,a),e}(),a.\u0275fac=function(n){return new(n||a)(f.Ib(p.a),f.Ib(m.a))},a.\u0275cmp=f.Cb({type:a,selectors:[["app-login"]],decls:18,vars:2,consts:[[1,"ion-padding"],[1,"loginBox"],[2,"width","300px"],["lines","none"],["position","stacked"],["type","text",3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],["expand","block",3,"click"]],template:function(n,i){1&n&&(f.Lb(0,"ion-content",0),f.Lb(1,"div",1),f.Lb(2,"div",2),f.Lb(3,"ion-list",3),f.Lb(4,"ion-item"),f.Lb(5,"ion-label",4),f.kc(6,"Email"),f.Kb(),f.Lb(7,"ion-input",5),f.Tb("ngModelChange",(function(n){return i.email=n})),f.Kb(),f.Kb(),f.Lb(8,"ion-item"),f.Lb(9,"ion-label",4),f.kc(10,"Password"),f.Kb(),f.Lb(11,"ion-input",6),f.Tb("ngModelChange",(function(n){return i.password=n})),f.Kb(),f.Kb(),f.Lb(12,"ion-item"),f.Lb(13,"ion-button",7),f.Tb("click",(function(){return i.login()})),f.kc(14,"Login"),f.Kb(),f.Kb(),f.Kb(),f.Lb(15,"div",0),f.Lb(16,"p"),f.kc(17,"Please create new account from firebase auth & update your adminEmail in environment.prod.ts"),f.Kb(),f.Kb(),f.Kb(),f.Kb(),f.Kb()),2&n&&(f.yb(7),f.bc("ngModel",i.email),f.yb(4),f.bc("ngModel",i.password))},directives:[l.k,l.r,l.p,l.q,l.o,l.R,b.e,b.f,l.g],styles:[".loginBox[_ngcontent-%COMP%]{display:flex;margin:auto;flex:1;align-items:center;justify-content:center;flex-direction:column;height:100%}p[_ngcontent-%COMP%]{color:#777;font-size:12px}"]}),a)}],g=((r=function i(){n(this,i)}).\u0275mod=f.Gb({type:r}),r.\u0275inj=f.Fb({factory:function(n){return new(n||r)},imports:[[u.i.forChild(h)],u.i]}),r),w=((c=function i(){n(this,i)}).\u0275mod=f.Gb({type:c}),c.\u0275inj=f.Fb({factory:function(n){return new(n||c)},imports:[[s.c,b.b,l.J,g]]}),c)}}])}();