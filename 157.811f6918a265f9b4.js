"use strict";(self.webpackChunkown_stamp_ng=self.webpackChunkown_stamp_ng||[]).push([[157],{3157:(y,p,o)=>{o.r(p),o.d(p,{ConstructorStamps6Module:()=>T});var l=o(9808),i=o(1171),t=o(6435),a=o(821),c=o(2e3),d=o(8165),m=o(3090),g=o(4067);const h=["step2"],f=[{path:"",component:(()=>{class e{constructor(s,n){this._translate=s,this._storeService=n,this.constructorConfig={type:"stamps-6",totalStamps:6,costPerPage:25e3,costPerItem:"12.00",stamp:{resolution:{width:this.setResolution(33),height:this.setResolution(30)},size:{width:"33 \u043c\u043c",height:"30 \u043c\u043c"}},background:{resolution:{width:this.setResolution(192),height:this.setResolution(154)},size:{width:"192 \u043c\u043c",height:"154 \u043c\u043c"}}},this.fileBtnConfig={type:"front",imageNumber:[1,2,3,4,5,6]},this.addBackgroundBtnConfig={type:"background",imageNumber:[]},this.addStampBtnConfig={type:"front",imageNumber:[]},this.stepData={inputFile:"",checkboxText:""}}getTranslates(){this._storeService.currentLanguage.subscribe(()=>{this.stepData={inputFile:"",checkboxText:""},this._translate.get("button.inputFile.forAllStamps").subscribe(s=>{this.stepData.inputFile=s}),this._translate.get("steps.step2.checkbox").subscribe(s=>{this.stepData.checkboxText=s}),this._translate.get("button.edit").subscribe(s=>{this.stepResultButton.text=s})})}setOrderData(){this._storeService.order.next({costPerPage:this.constructorConfig.costPerPage,costPerItem:this.constructorConfig.costPerItem,images:{background:{index:0,src:""},front:[]},totalCost:0,totalPages:0,type:this.constructorConfig.type})}scroll(s){s.scrollIntoView({behavior:"smooth"})}scrollToStep2(){this.scroll(this._step2.nativeElement)}setResolution(s){return Math.round(s/10/2.54*300)}setStep1ResultButton(){this.stepResultButton={routerLink:"/",class:"link link_edit",text:""}}ngOnInit(){this.setOrderData(),this.setStep1ResultButton(),this.getTranslates()}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(a.sK),t.Y36(c.d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-constructor-stamps6"]],viewQuery:function(s,n){if(1&s&&t.Gf(h,5),2&s){let u;t.iGM(u=t.CRH())&&(n._step2=u.first)}},decls:28,vars:21,consts:[[1,"steps"],[1,"site__centered"],[1,"steps__cover"],[1,"steps__item"],["routerLink","/",1,"steps__edit-mob"],[1,"steps__title"],[1,"steps__wrap"],[3,"stepResultButton"],["step2",""],[3,"fileBtnConfig","addBackgroundBtnConfig","addStampBtnConfig","constructorConfig","stepData","scrollToStep2"]],template:function(s,n){1&s&&(t.TgZ(0,"app-site-title"),t._uU(1),t.ALo(2,"translate"),t.qZA(),t.TgZ(3,"div",0)(4,"div",1)(5,"div",2)(6,"div",3),t._UZ(7,"a",4),t.TgZ(8,"h2",5),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"div",6),t._UZ(12,"app-step1-result",7),t.qZA()(),t.TgZ(13,"div",3,8)(15,"h2",5),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"div",6)(19,"app-edit-form",9),t.NdJ("scrollToStep2",function(){return n.scrollToStep2()}),t.qZA()()(),t.TgZ(20,"div",3)(21,"h2",5),t._uU(22),t.ALo(23,"translate"),t.qZA()(),t.TgZ(24,"div",3)(25,"h2",5),t._uU(26),t.ALo(27,"translate"),t.qZA()()()()()),2&s&&(t.xp6(1),t.hij(" ",t.lcZ(2,11,"mainPage.title"),"\n"),t.xp6(8),t.Oqu(t.lcZ(10,13,"steps.step1.title.active")),t.xp6(3),t.Q6J("stepResultButton",n.stepResultButton),t.xp6(4),t.Oqu(t.lcZ(17,15,"steps.step2.title.active.stamps6")),t.xp6(3),t.Q6J("fileBtnConfig",n.fileBtnConfig)("addBackgroundBtnConfig",n.addBackgroundBtnConfig)("addStampBtnConfig",n.addStampBtnConfig)("constructorConfig",n.constructorConfig)("stepData",n.stepData),t.xp6(3),t.Oqu(t.lcZ(23,17,"steps.step3.title.default")),t.xp6(4),t.Oqu(t.lcZ(27,19,"steps.step4.title.default")))},directives:[d.b,i.yS,m.W,g.n],pipes:[a.X$],styles:[""]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.Bz.forChild(f)],i.Bz]}),e})();var v=o(4105),S=o(2124),B=o(3100),Z=o(9953);let T=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.ez,C,a.aw,v.y,S.u,B.b,Z.U]]}),e})()}}]);