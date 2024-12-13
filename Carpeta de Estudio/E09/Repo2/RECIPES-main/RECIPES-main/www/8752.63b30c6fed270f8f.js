"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8752],{8752:(C,l,r)=>{r.r(l),r.d(l,{RecipeDetailComponent:()=>F});var a=r(8986),s=r(177),n=r(6298),t=r(3953),u=r(505),d=r(758);const _=()=>["/cart"];function m(o,p){if(1&o&&(t.j41(0,"ion-item"),t.EFF(1),t.k0s()),2&o){const e=p.$implicit;t.R7$(),t.SpI(" ",e," ")}}function g(o,p){if(1&o){const e=t.RV6();t.j41(0,"ion-card"),t.nrm(1,"img",7),t.j41(2,"ion-card-header")(3,"ion-card-title"),t.EFF(4),t.k0s()(),t.j41(5,"ion-card-content")(6,"p"),t.EFF(7),t.k0s(),t.j41(8,"p"),t.EFF(9),t.k0s(),t.j41(10,"div",8)(11,"div",9)(12,"span",10),t.EFF(13,"Protein:"),t.k0s(),t.j41(14,"span",11),t.EFF(15),t.nI1(16,"number"),t.k0s()(),t.j41(17,"div",9)(18,"span",10),t.EFF(19,"Fat:"),t.k0s(),t.j41(20,"span",11),t.EFF(21),t.nI1(22,"number"),t.k0s()(),t.j41(23,"div",9)(24,"span",10),t.EFF(25,"Carbs:"),t.k0s(),t.j41(26,"span",11),t.EFF(27),t.nI1(28,"number"),t.k0s()()(),t.j41(29,"h2"),t.EFF(30,"Ingredients"),t.k0s(),t.j41(31,"ion-list"),t.DNE(32,m,2,1,"ion-item",12),t.k0s(),t.j41(33,"ion-button",13),t.bIt("click",function(){t.eBV(e);const c=t.XpG();return t.Njj(c.addToCart())}),t.EFF(34,"Add to Cart"),t.k0s()()()}if(2&o){const e=t.XpG();t.R7$(),t.FS9("alt",e.recipe.label),t.Y8G("src",e.recipe.image,t.B4B),t.R7$(3),t.JRh(e.recipe.label),t.R7$(3),t.JRh(e.recipe.description),t.R7$(2),t.JRh(e.recipe.description),t.R7$(6),t.Lme("",t.i5U(16,13,e.recipe.totalNutrients.PROCNT.quantity,"1.0-0")," ",e.recipe.totalNutrients.PROCNT.unit,""),t.R7$(6),t.Lme("",t.i5U(22,16,e.recipe.totalNutrients.FAT.quantity,"1.0-0")," ",e.recipe.totalNutrients.FAT.unit,""),t.R7$(6),t.Lme("",t.i5U(28,19,e.recipe.totalNutrients.CHOCDF.quantity,"1.0-0")," ",e.recipe.totalNutrients.CHOCDF.unit,""),t.R7$(5),t.Y8G("ngForOf",e.recipe.ingredientLines),t.R7$(),t.Y8G("routerLink",t.lJ4(22,_))}}let F=(()=>{class o{constructor(e,i,c){this.route=e,this.recipesService=i,this.ingredientsService=c}ngOnInit(){const e=this.route.snapshot.paramMap.get("id");null!==e&&this.recipesService.getRecipeById(e).subscribe(i=>{this.recipe=i.recipe},i=>{console.error("Error fetching recipe:",i)})}addToCart(){this.ingredientsService.addIngredients(this.recipe.ingredientLines)}static#t=this.\u0275fac=function(i){return new(i||o)(t.rXU(a.nX),t.rXU(u.F),t.rXU(d._))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-recipe-detail"]],standalone:!0,features:[t.aNF],decls:12,vars:3,consts:[[3,"translucent"],["slot","start"],["defaultHref","/"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngIf"],[3,"src","alt"],[1,"nutrition-info"],[1,"nutrition-item"],[1,"nutrition-text"],[1,"nutrition-value"],[4,"ngFor","ngForOf"],["expand","block",3,"click","routerLink"]],template:function(i,c){1&i&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t.nrm(3,"ion-back-button",2),t.k0s(),t.j41(4,"ion-title"),t.EFF(5,"Detalles de la receta"),t.k0s()()(),t.j41(6,"ion-content",3)(7,"ion-header",4)(8,"ion-toolbar")(9,"ion-title",5),t.EFF(10,"Recipe details"),t.k0s()()(),t.DNE(11,g,35,23,"ion-card",6),t.k0s()),2&i&&(t.Y8G("translucent",!0),t.R7$(6),t.Y8G("fullscreen",!0),t.R7$(5),t.Y8G("ngIf",c.recipe))},dependencies:[n.W9,n.eU,n.BC,n.ai,s.MD,s.Sq,s.bT,s.QX,n.QW,n.uz,n.Jm,n.I9,n.tN,n.ME,n.b_,n.nf,a.iI,a.Wk,n.el],styles:["ion-card[_ngcontent-%COMP%]{margin:20px 0}ion-card-title[_ngcontent-%COMP%]{font-size:1.5em;color:#333}ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2em;line-height:1.6;color:#666}h2[_ngcontent-%COMP%]{font-size:1.5em;margin-top:20px;margin-bottom:10px;color:#444}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:1.1em;line-height:1.4;color:#555}img[_ngcontent-%COMP%]{display:block;max-width:80%;height:auto;margin:0 auto 20px;border-radius:8px}.nutrition-info[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:20px}.nutrition-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;font-size:1em;color:#444}.nutrition-text[_ngcontent-%COMP%]{font-weight:700}.nutrition-value[_ngcontent-%COMP%]{margin-top:5px}"]})}return o})()}}]);