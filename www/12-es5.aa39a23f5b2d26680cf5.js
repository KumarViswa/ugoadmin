!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function i(n,i,t){return i&&e(n.prototype,i),t&&e(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{vI8w:function(e,t,b){"use strict";b.r(t),b.d(t,"DriverinfoPageModule",(function(){return D}));var o,c=b("ofXK"),r=b("3Pt+"),a=b("TEn/"),l=b("tyNb"),s=b("fXoL"),u=b("hrwK"),d=b("cnYv"),f=b("sSZD"),g=((o=function(){function e(i){n(this,e),this.db=i}return i(e,[{key:"getDriverTransaction",value:function(n){return this.db.list("transactions",(function(e){return e.orderByChild("userId").equalTo(n)}))}},{key:"getRiderTransaction",value:function(n){}}]),e}()).\u0275fac=function(n){return new(n||o)(s.Pb(f.a))},o.\u0275prov=s.Eb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),h=b("OlR4");function v(n,e){if(1&n&&(s.Lb(0,"a",18),s.kc(1,"View Image"),s.Kb()),2&n){var i=s.Vb(2);s.cc("href",i.driver.carImg,s.hc)}}function p(n,e){if(1&n&&(s.Lb(0,"ion-item"),s.Lb(1,"ion-label"),s.kc(2,"Documents"),s.Kb(),s.Lb(3,"a",19),s.kc(4,"View / Download"),s.Kb(),s.Kb()),2&n){var i=s.Vb(2);s.yb(3),s.cc("href",i.driver.docsURL,s.hc)}}function L(n,e){if(1&n){var i=s.Mb();s.Lb(0,"div"),s.Lb(1,"ion-list",2),s.Lb(2,"ion-item"),s.Lb(3,"ion-label",11),s.kc(4,"CAR TYPE"),s.Kb(),s.Lb(5,"ion-input",12),s.Tb("ngModelChange",(function(n){return s.gc(i),s.Vb().driver.type=n})),s.Kb(),s.Kb(),s.Lb(6,"ion-item"),s.Lb(7,"ion-label",11),s.kc(8,"PLATE NUMBER"),s.Kb(),s.Lb(9,"ion-input",13),s.Tb("ngModelChange",(function(n){return s.gc(i),s.Vb().driver.plate=n})),s.Kb(),s.Kb(),s.Lb(10,"ion-item"),s.Lb(11,"ion-label",11),s.kc(12,"CAR BRAND"),s.Kb(),s.Lb(13,"ion-input",13),s.Tb("ngModelChange",(function(n){return s.gc(i),s.Vb().driver.brand=n})),s.Kb(),s.jc(14,v,2,1,"a",14),s.Kb(),s.jc(15,p,5,1,"ion-item",15),s.Lb(16,"ion-item"),s.Lb(17,"ion-label",11),s.kc(18,"Bank Info"),s.Kb(),s.Lb(19,"ion-textarea",16),s.Tb("ngModelChange",(function(n){return s.gc(i),s.Vb().driver.bankinfo=n})),s.Kb(),s.Kb(),s.Kb(),s.Lb(20,"ion-button",17),s.Tb("click",(function(){return s.gc(i),s.Vb().update()})),s.kc(21,"Update"),s.Kb(),s.Kb()}if(2&n){var t=s.Vb();s.yb(5),s.bc("ngModel",t.driver.type),s.yb(4),s.bc("ngModel",t.driver.plate),s.yb(4),s.bc("ngModel",t.driver.brand),s.yb(1),s.bc("ngIf",null!=t.driver.carImg),s.yb(1),s.bc("ngIf",t.driver.docsURL),s.yb(4),s.bc("ngModel",t.driver.bankinfo)}}function y(n,e){if(1&n&&(s.Lb(0,"ion-col"),s.Lb(1,"p"),s.kc(2),s.Kb(),s.Kb()),2&n){var i=s.Vb().$implicit;s.yb(2),s.nc("Discount: ",i.discount," (",i.promo,")")}}function K(n,e){if(1&n&&(s.Lb(0,"ion-item"),s.Lb(1,"ion-label"),s.Lb(2,"ion-text"),s.Lb(3,"p"),s.kc(4),s.Kb(),s.Kb(),s.Lb(5,"ion-text"),s.Lb(6,"h3"),s.Lb(7,"span",21),s.kc(8,"\u2022"),s.Kb(),s.kc(9),s.Kb(),s.Lb(10,"p"),s.kc(11),s.Wb(12,"date"),s.Kb(),s.Kb(),s.Lb(13,"ion-text"),s.Lb(14,"h3"),s.Lb(15,"span",22),s.kc(16,"\u2022"),s.Kb(),s.kc(17),s.Kb(),s.Lb(18,"p"),s.kc(19),s.Wb(20,"date"),s.Kb(),s.Kb(),s.Lb(21,"ion-text"),s.Lb(22,"ion-row"),s.Lb(23,"ion-col"),s.Lb(24,"p"),s.kc(25),s.Kb(),s.Kb(),s.jc(26,y,3,2,"ion-col",15),s.Lb(27,"ion-col"),s.Lb(28,"p"),s.kc(29),s.Kb(),s.Kb(),s.Kb(),s.Kb(),s.Kb(),s.Lb(30,"ion-badge",23),s.kc(31),s.Kb(),s.Kb()),2&n){var i=e.$implicit;s.yb(4),s.mc("ID: ",i.createdAt,""),s.yb(5),s.mc(" ",i.origin.vicinity,""),s.yb(2),s.lc(s.Yb(12,11,i.pickedUpAt,"medium")),s.yb(6),s.mc(" ",i.destination.vicinity,""),s.yb(2),s.lc(s.Yb(20,14,i.droppedOffAt,"medium")),s.yb(6),s.nc("FEE: ",i.currency," ",i.fee,""),s.yb(1),s.bc("ngIf",0!=i.discount),s.yb(3),s.mc("Payment Mode: ",i.paymentMethod,""),s.yb(2),s.nc(" ",i.currency," ",(i.fee-i.fee*i.discount/100).toFixed(2)," ")}}function k(n,e){if(1&n&&(s.Lb(0,"div"),s.Lb(1,"ion-list",2),s.jc(2,K,32,17,"ion-item",20),s.Kb(),s.Kb()),2&n){var i=s.Vb();s.yb(2),s.bc("ngForOf",i.trips)}}function m(n,e){if(1&n&&(s.Lb(0,"ion-item"),s.Lb(1,"ion-label"),s.Lb(2,"ion-text",24),s.Lb(3,"p"),s.kc(4),s.Wb(5,"date"),s.Kb(),s.Kb(),s.Lb(6,"ion-text"),s.Lb(7,"h3"),s.kc(8,"Requested "),s.Lb(9,"ion-badge"),s.kc(10),s.Kb(),s.kc(11," is "),s.Lb(12,"code"),s.kc(13),s.Kb(),s.Kb(),s.Lb(14,"p"),s.kc(15),s.Kb(),s.Kb(),s.Kb(),s.Kb()),2&n){var i=e.$implicit;s.yb(4),s.lc(s.Yb(5,5,i.createdAt,"medium")),s.yb(6),s.lc(i.amount),s.yb(3),s.lc(i.status),s.yb(2),s.nc("Ref: ",i.createdAt," / Type: ",i.type," ")}}function w(n,e){if(1&n&&(s.Lb(0,"div"),s.Lb(1,"ion-list",2),s.jc(2,m,16,8,"ion-item",20),s.Kb(),s.Kb()),2&n){var i=s.Vb();s.yb(2),s.bc("ngForOf",i.records)}}var C,M,I,T=[{path:"",component:(C=function(){function e(i,t,b,o,c){n(this,e),this.route=i,this.driverService=t,this.tripService=b,this.transactionService=o,this.cs=c,this.driver={},this.tabs="carinfo",this.trips=[],this.records=[]}return i(e,[{key:"ngOnInit",value:function(){this.key=this.route.snapshot.paramMap.get("id"),this.getDriverInfo()}},{key:"getDriverInfo",value:function(){var n=this;this.driverService.getDriver(this.key).valueChanges().subscribe((function(e){console.log(e),null!=e&&(n.driver=e)}))}},{key:"getTrips",value:function(){var n=this;this.tripService.getDriverTrips(this.key).valueChanges().subscribe((function(e){console.log(e),null!=e&&(n.trips=e)}))}},{key:"getWallet",value:function(){var n=this;this.transactionService.getDriverTransaction(this.key).valueChanges().subscribe((function(e){console.log(e),null!=e&&(n.records=e)}))}},{key:"update",value:function(){var n=this;this.driverService.updateDriver(this.key,this.driver).then((function(){n.cs.showToast("Updated")}))}}]),e}(),C.\u0275fac=function(n){return new(n||C)(s.Ib(l.a),s.Ib(u.a),s.Ib(d.a),s.Ib(g),s.Ib(h.a))},C.\u0275cmp=s.Cb({type:C,selectors:[["app-driverinfo"]],decls:31,vars:11,consts:[["slot","start"],[1,"ion-padding"],["lines","none"],[3,"src"],[3,"href"],["mode","ios",3,"ngModel","ngModelChange"],["value","carinfo"],["value","ridehistroy",3,"click"],["value","wallet",3,"click"],[3,"ngSwitch"],[4,"ngSwitchCase"],["position","stacked"],["type","text","disabled","",3,"ngModel","ngModelChange"],["type","text",3,"ngModel","ngModelChange"],["target","_blank","ion-button","","item-right","","clear","",3,"href",4,"ngIf"],[4,"ngIf"],[3,"ngModel","ngModelChange"],[3,"click"],["target","_blank","ion-button","","item-right","","clear","",3,"href"],["target","_blank","ion-button","","item-right","",3,"href"],[4,"ngFor","ngForOf"],[2,"color","#4CAF50"],[2,"color","#F44336"],["slot","end"],["color","medium"]],template:function(n,e){1&n&&(s.Lb(0,"ion-header"),s.Lb(1,"ion-toolbar"),s.Lb(2,"ion-buttons",0),s.Jb(3,"ion-back-button"),s.Kb(),s.Jb(4,"ion-title"),s.Kb(),s.Kb(),s.Lb(5,"ion-content",1),s.Lb(6,"ion-card",1),s.Lb(7,"ion-item",2),s.Lb(8,"ion-avatar",0),s.Jb(9,"img",3),s.Kb(),s.Lb(10,"ion-label"),s.Lb(11,"ion-text"),s.Lb(12,"h3"),s.kc(13),s.Kb(),s.Kb(),s.Lb(14,"ion-text"),s.Lb(15,"p"),s.kc(16),s.Kb(),s.Kb(),s.Lb(17,"ion-text"),s.Lb(18,"a",4),s.kc(19),s.Kb(),s.Kb(),s.Kb(),s.Kb(),s.Lb(20,"ion-segment",5),s.Tb("ngModelChange",(function(n){return e.tabs=n})),s.Lb(21,"ion-segment-button",6),s.kc(22," CAR INFORMATION "),s.Kb(),s.Lb(23,"ion-segment-button",7),s.Tb("click",(function(){return e.getTrips()})),s.kc(24," Ride History "),s.Kb(),s.Lb(25,"ion-segment-button",8),s.Tb("click",(function(){return e.getWallet()})),s.kc(26),s.Kb(),s.Kb(),s.Lb(27,"div",9),s.jc(28,L,22,6,"div",10),s.jc(29,k,3,1,"div",10),s.jc(30,w,3,1,"div",10),s.Kb(),s.Kb(),s.Kb()),2&n&&(s.yb(9),s.cc("src",e.driver.photoURL,s.hc),s.yb(4),s.lc(e.driver.name),s.yb(3),s.lc(e.driver.email),s.yb(2),s.dc("href","tel:",e.driver.phoneNumber,"",s.hc),s.yb(1),s.mc("Call: ",e.driver.phoneNumber,""),s.yb(1),s.bc("ngModel",e.tabs),s.yb(6),s.mc(" Wallet (",e.driver.balance,") "),s.yb(1),s.bc("ngSwitch",e.tabs),s.yb(1),s.bc("ngSwitchCase","carinfo"),s.yb(1),s.bc("ngSwitchCase","ridehistroy"),s.yb(1),s.bc("ngSwitchCase","wallet"))},directives:[a.m,a.I,a.h,a.d,a.e,a.G,a.k,a.i,a.p,a.c,a.q,a.E,a.z,a.Q,r.e,r.f,a.A,c.l,c.m,a.r,a.o,a.R,c.k,a.F,a.g,c.j,a.y,a.j,a.f],pipes:[c.e],styles:["h3[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{color:#777}"]}),C)}],R=((I=function e(){n(this,e)}).\u0275mod=s.Gb({type:I}),I.\u0275inj=s.Fb({factory:function(n){return new(n||I)},imports:[[l.i.forChild(T)],l.i]}),I),D=((M=function e(){n(this,e)}).\u0275mod=s.Gb({type:M}),M.\u0275inj=s.Fb({factory:function(n){return new(n||M)},imports:[[c.c,r.b,a.J,R]]}),M)}}])}();