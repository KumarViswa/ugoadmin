(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{iQDh:function(t,e,i){"use strict";i.r(e),i.d(e,"DriversPageModule",(function(){return m}));var n=i("ofXK"),b=i("3Pt+"),r=i("TEn/"),o=i("tyNb"),c=i("fXoL"),s=i("hrwK"),l=i("OlR4");function a(t,e){if(1&t&&(c.Lb(0,"a",10),c.kc(1),c.Kb()),2&t){const t=c.Vb().$implicit;c.dc("href","tel:",t.phoneNumber,"",c.hc),c.yb(1),c.lc(t.phoneNumber)}}function p(t,e){if(1&t){const t=c.Mb();c.Lb(0,"ion-button",11),c.Tb("click",(function(){c.gc(t);const e=c.Vb().$implicit;return c.Vb().changeStatus(e.key,e.isApproved)})),c.kc(1," Approve"),c.Kb()}}function d(t,e){if(1&t){const t=c.Mb();c.Lb(0,"ion-button",11),c.Tb("click",(function(){c.gc(t);const e=c.Vb().$implicit;return c.Vb().changeStatus(e.key,e.isApproved)})),c.kc(1," DisApprove"),c.Kb()}}function h(t,e){if(1&t){const t=c.Mb();c.Lb(0,"tr"),c.Lb(1,"td"),c.Lb(2,"p"),c.kc(3),c.Wb(4,"date"),c.Kb(),c.Kb(),c.Lb(5,"td"),c.Lb(6,"p",3),c.kc(7),c.Kb(),c.Lb(8,"p"),c.kc(9),c.Kb(),c.Lb(10,"p"),c.jc(11,a,2,2,"a",4),c.Kb(),c.Kb(),c.Lb(12,"td"),c.Lb(13,"p"),c.kc(14),c.Kb(),c.Lb(15,"p"),c.kc(16),c.Kb(),c.Kb(),c.Lb(17,"td"),c.Lb(18,"p"),c.kc(19),c.Kb(),c.Kb(),c.Lb(20,"td"),c.jc(21,p,2,0,"ion-button",5),c.jc(22,d,2,0,"ion-button",5),c.Kb(),c.Lb(23,"td"),c.Lb(24,"ion-button",6),c.Jb(25,"ion-icon",7),c.Kb(),c.Lb(26,"ion-button",8),c.Tb("click",(function(){c.gc(t);const i=e.$implicit;return c.Vb().delete(i.key)})),c.Jb(27,"ion-icon",9),c.Kb(),c.Kb(),c.Kb()}if(2&t){const t=e.$implicit;c.yb(3),c.lc(c.Yb(4,11,t.createdAt,"MMM dd yyyy")),c.yb(4),c.lc(t.name),c.yb(2),c.lc(t.email),c.yb(2),c.bc("ngIf",t.phoneNumber),c.yb(3),c.nc("",t.brand," ",t.model,""),c.yb(2),c.lc(t.plate),c.yb(3),c.lc(t.type),c.yb(2),c.bc("ngIf",!t.isApproved),c.yb(1),c.bc("ngIf",t.isApproved),c.yb(2),c.dc("routerLink","/driverinfo/",t.key,"")}}const u=[{path:"",component:(()=>{class t{constructor(t,e,i){this.driverService=t,this.common=e,this.router=i,this.drivers=[]}ngOnInit(){this.getDrivers()}getDrivers(){this.driverService.getDrivers().snapshotChanges().subscribe(t=>{null!=t&&(this.drivers=[],t.forEach(t=>this.drivers.push(Object.assign({key:t.key},t.payload.val()))),this.drivers=this.drivers.reverse())})}delete(t){this.driverService.deleteDriver(t).then(t=>{this.common.showToast("Deleted")}).catch(t=>this.common.showLoader())}changeStatus(t,e){this.driverService.updateDriver(t,{isApproved:e=!e}).then(()=>{this.common.showToast("Updated")}).catch(t=>this.common.showToast("error"))}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(s.a),c.Ib(l.a),c.Ib(o.g))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-drivers"]],decls:25,vars:2,consts:[["slot","start"],[1,"ion-padding"],[4,"ngFor","ngForOf"],[1,"bold"],["target","_blank",3,"href",4,"ngIf"],["fill","outline","color","primary","size","small",3,"click",4,"ngIf"],["fill","clear","size","small",3,"routerLink"],["name","eye"],["fill","clear","color","danger","size","small",3,"click"],["name","trash"],["target","_blank",3,"href"],["fill","outline","color","primary","size","small",3,"click"]],template:function(t,e){1&t&&(c.Lb(0,"ion-header"),c.Lb(1,"ion-toolbar"),c.Lb(2,"ion-buttons",0),c.Jb(3,"ion-menu-button"),c.Kb(),c.Lb(4,"ion-title"),c.kc(5),c.Kb(),c.Kb(),c.Kb(),c.Lb(6,"ion-content",1),c.Lb(7,"ion-card",1),c.Lb(8,"table"),c.Lb(9,"thead"),c.Lb(10,"tr"),c.Lb(11,"th"),c.kc(12,"Joined On"),c.Kb(),c.Lb(13,"th"),c.kc(14,"Detail"),c.Kb(),c.Lb(15,"th"),c.kc(16,"Car Detail"),c.Kb(),c.Lb(17,"th"),c.kc(18,"Type"),c.Kb(),c.Lb(19,"th"),c.kc(20,"Status"),c.Kb(),c.Lb(21,"th"),c.kc(22,"Actions"),c.Kb(),c.Kb(),c.Kb(),c.Lb(23,"tbody"),c.jc(24,h,28,14,"tr",2),c.Kb(),c.Kb(),c.Kb(),c.Kb()),2&t&&(c.yb(5),c.mc("Drivers - ",e.drivers.length,""),c.yb(19),c.bc("ngForOf",e.drivers))},directives:[r.m,r.I,r.h,r.t,r.G,r.k,r.i,n.j,n.k,r.g,r.P,o.h,r.n],pipes:[n.e],styles:["p[_ngcontent-%COMP%]{margin:4px;color:#777}.bold[_ngcontent-%COMP%]{font-weight:500;font-size:14px;color:#222}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[o.i.forChild(u)],o.i]}),t})(),m=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(e){return new(e||t)},imports:[[n.c,b.b,r.J,f]]}),t})()}}]);