import{a as w}from"./chunk-B5YBQX5N.js";import"./chunk-YXX363XN.js";import"./chunk-QNXCJ3HQ.js";import{$ as x,Eb as d,Fb as m,Ja as p,Lb as k,Na as l,Y as u,db as h,fb as g,ja as f,jb as b,ka as C,lb as _,mb as S,nb as t,ob as i,pb as c,sb as y,wb as E,xb as v}from"./chunk-G3L4KF65.js";import"./chunk-CWTPBX7D.js";var M=(n,e)=>e._id;function T(n,e){if(n&1){let o=y();t(0,"div",4)(1,"div",6),E("click",function(){let a=f(o).$implicit,s=v();return C(s.open(a.image,a.name,a.slug))}),t(2,"div",7),c(3,"img",8),i(),t(4,"div",9)(5,"p",10),d(6),i()()()()}if(n&2){let o=e.$implicit;l(3),g("src",o.image,p)("alt",o.name),l(3),m(o.name)}}function F(n,e){if(n&1&&(t(0,"div",5)(1,"div",11)(2,"div",12)(3,"div",13),c(4,"button",14),i(),t(5,"div",15)(6,"div",2)(7,"div",16)(8,"div",17)(9,"h1",18),d(10),i(),t(11,"p"),d(12),i()(),t(13,"div",17),c(14,"img",19),i()()()(),t(15,"div",20)(16,"button",21),d(17,"Close"),i()()()()()),n&2){let o=v();l(10),m(o.name),l(2),m(o.slug),l(2),g("src",o.imgSrc,p)}}var j=(()=>{let e=class e{constructor(){this._CategoriesService=u(w),this.categoriesList=[],this.isClicked=!1,this.imgSrc="",this.name="",this.slug=""}ngOnInit(){this._CategoriesService.getAllCategories().subscribe({next:r=>{this.categoriesList=r.data},error:r=>{console.log(r)}})}open(r,a,s){this.isClicked=!0,this.imgSrc=r,this.name=a,this.slug=s}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=x({type:e,selectors:[["app-categories"]],standalone:!0,features:[k],decls:8,vars:1,consts:[[1,"my-2","pb-3"],[1,"text-center","text-main","m-3"],[1,"container"],[1,"row","g-4"],[1,"col-lg-4","col-md-6","col-sm-12","text-center"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["data-bs-toggle","modal","data-bs-target","#exampleModal",1,"card",3,"click"],[1,"card-img"],[1,"img-fluid","ratio-4x3","w-100",2,"height","300px",3,"src","alt"],[1,"card-body"],[1,"text-success","h3","text-center"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"row","d-flex","justify-content-center","align-items-center"],[1,"col-md-6"],[1,"green","h2"],["alt","",1,"img-fluid",3,"src"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"]],template:function(a,s){a&1&&(t(0,"section",0)(1,"h2",1),d(2,"All Categories"),i(),t(3,"div",2)(4,"div",3),_(5,T,7,3,"div",4,M),i(),h(7,F,18,3,"div",5),i()()),a&2&&(l(5),S(s.categoriesList),l(2),b(7,s.isClicked==!0?7:-1))}});let n=e;return n})();export{j as CategoriesComponent};
