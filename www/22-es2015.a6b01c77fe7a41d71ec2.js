(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{oZIE:function(t,n,c){"use strict";c.r(n),c.d(n,"WithdrawsPageModule",(function(){return k}));var e=c("ofXK"),b=c("3Pt+"),i=c("TEn/"),s=c("tyNb"),o=c("IzEk"),a=c("fXoL"),r=c("sSZD"),l=c("OlR4");function u(t,n){if(1&t){const t=a.Mb();a.Lb(0,"ion-button",6),a.Tb("click",(function(){a.gc(t);const n=a.Vb().$implicit;return a.Vb().send(n)})),a.kc(1,"SEND "),a.Kb()}}function d(t,n){if(1&t){const t=a.Mb();a.Lb(0,"ion-button",7),a.Tb("click",(function(){a.gc(t);const n=a.Vb().$implicit;return a.Vb().cancel(n.key)})),a.kc(1,"CANCEL "),a.Kb()}}function f(t,n){if(1&t&&(a.Lb(0,"tr"),a.Lb(1,"td"),a.kc(2),a.Wb(3,"date"),a.Kb(),a.Lb(4,"td"),a.Lb(5,"ion-button",3),a.kc(6),a.Kb(),a.Kb(),a.Lb(7,"td"),a.kc(8),a.Kb(),a.Lb(9,"td"),a.kc(10),a.Kb(),a.Lb(11,"td"),a.jc(12,u,2,0,"ion-button",4),a.jc(13,d,2,0,"ion-button",5),a.Kb(),a.Kb()),2&t){const t=n.$implicit;a.yb(2),a.lc(a.Xb(3,7,t.createdAt)),a.yb(3),a.dc("routerLink","/driverinfo/",t.userId,""),a.yb(1),a.mc("",t.name," "),a.yb(2),a.lc(t.amount),a.yb(2),a.lc(t.status),a.yb(2),a.bc("ngIf","PENDING"==t.status),a.yb(1),a.bc("ngIf","PENDING"==t.status)}}const h=[{path:"",component:(()=>{class t{constructor(t,n){this.db=t,this.commonService=n,this.allrequests=[]}ngOnInit(){this.getAllWithDraw()}getAllWithDraw(){this.db.list("transactions").snapshotChanges().subscribe(t=>{if(null!=t){let n=[];t.forEach(t=>(n.push(Object.assign({key:t.key},t.payload.val())),!1)),n.reverse(),this.allrequests=n}})}send(t){this.db.object("drivers/"+t.userId+"/balance").valueChanges().pipe(Object(o.a)(1)).subscribe(n=>{console.log(n);let c=n;c>t.amount?this.db.object("drivers/"+t.userId).update({balance:c-t.amount}).then(n=>{this.db.object("transactions/"+t.key).update({status:"SUCCESS"})}):this.commonService.showToast("Insufficient Balance")})}cancel(t){this.db.object("transactions/"+t).update({status:"CANCELED"})}}return t.\u0275fac=function(n){return new(n||t)(a.Ib(r.a),a.Ib(l.a))},t.\u0275cmp=a.Cb({type:t,selectors:[["app-withdraws"]],decls:22,vars:1,consts:[["slot","start"],[1,"ion-padding"],[4,"ngFor","ngForOf"],["size","small","fill","clear",3,"routerLink"],["size","small","fill","clear",3,"click",4,"ngIf"],["size","small","fill","clear","color","danger",3,"click",4,"ngIf"],["size","small","fill","clear",3,"click"],["size","small","fill","clear","color","danger",3,"click"]],template:function(t,n){1&t&&(a.Lb(0,"ion-header"),a.Lb(1,"ion-toolbar"),a.Lb(2,"ion-buttons",0),a.Jb(3,"ion-menu-button"),a.Kb(),a.Lb(4,"ion-title"),a.kc(5,"withdraws"),a.Kb(),a.Kb(),a.Kb(),a.Lb(6,"ion-content",1),a.Lb(7,"ion-card",1),a.Lb(8,"table"),a.Lb(9,"thead"),a.Lb(10,"th"),a.kc(11,"Date"),a.Kb(),a.Lb(12,"th"),a.kc(13,"Driver Info"),a.Kb(),a.Lb(14,"th"),a.kc(15,"Amount"),a.Kb(),a.Lb(16,"th"),a.kc(17,"Status"),a.Kb(),a.Lb(18,"th"),a.kc(19,"Action"),a.Kb(),a.Kb(),a.Lb(20,"tbody"),a.jc(21,f,14,9,"tr",2),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&t&&(a.yb(21),a.bc("ngForOf",n.allrequests))},directives:[i.m,i.I,i.h,i.t,i.G,i.k,i.i,e.j,i.g,i.P,s.h,e.k],pipes:[e.e],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(n){return new(n||t)},imports:[[s.i.forChild(h)],s.i]}),t})(),k=(()=>{class t{}return t.\u0275mod=a.Gb({type:t}),t.\u0275inj=a.Fb({factory:function(n){return new(n||t)},imports:[[e.c,b.b,i.J,p]]}),t})()}}]);