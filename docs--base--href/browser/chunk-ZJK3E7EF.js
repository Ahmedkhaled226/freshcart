import{a as k}from"./chunk-M6FYKKAR.js";import{l as I}from"./chunk-E3LQUSMD.js";import{a as F}from"./chunk-ZGRWIGMM.js";import"./chunk-YXX363XN.js";import{e as D}from"./chunk-VMUYEW3F.js";import"./chunk-QNXCJ3HQ.js";import{$ as _,Eb as c,Fb as m,Gb as w,Ja as C,Lb as y,Mb as A,Na as o,Y as s,db as u,fb as S,ja as f,jb as v,ka as g,kb as P,lb as h,mb as b,nb as e,ob as n,pb as p,sb as E,wb as T,xb as x}from"./chunk-G3L4KF65.js";import"./chunk-CWTPBX7D.js";var M=()=>[1,2,3,4,5];function R(a,r){a&1&&(e(0,"span"),p(1,"i",9),n())}function V(a,r){a&1&&(e(0,"span"),p(1,"i",10),n())}function j(a,r){if(a&1){let i=E();e(0,"section")(1,"h1",0),c(2,"Details Product"),n(),e(3,"div",1)(4,"div",2)(5,"div"),p(6,"img",3),n()(),e(7,"div",4)(8,"div")(9,"h2"),c(10),n(),e(11,"p",5),c(12),n(),e(13,"h3",6),c(14),n(),e(15,"div",7)(16,"span"),c(17),n(),e(18,"div"),h(19,R,2,0,"span",null,P),u(21,V,2,0,"span"),e(22,"span",5),c(23),n()()(),e(24,"button",8),T("click",function(){f(i);let t=x();return g(t.addCart(t.detailsProduct.id))}),c(25,"Add To Chart"),n()()()()()}if(a&2){let i=x();o(6),S("src",i.detailsProduct.imageCover,C)("alt",i.detailsProduct.title),o(4),m(i.detailsProduct.title),o(2),m(i.detailsProduct.description),o(2),m(i.detailsProduct.category.name),o(3),w("",i.detailsProduct.price," EGP"),o(2),b(A(8,M).slice(0,i.detailsProduct.ratingsAverage)),o(2),v(21,i.detailsProduct.ratingsAverage%1!==0?21:-1),o(2),m(i.detailsProduct.ratingsAverage)}}var J=(()=>{let r=class r{constructor(){this._ActivatedRoute=s(D),this._ProductsService=s(k),this._CartService=s(F),this._ToastrService=s(I),this.detailsProduct=null}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:l=>{let t=l.get("id");this._ProductsService.getSpecificProduct(t).subscribe({next:d=>{console.log(d.data),this.detailsProduct=d.data},error:d=>{console.log(d)}})}})}addCart(l){this._CartService.addProductToCart(l).subscribe({next:t=>{console.log(t),this._ToastrService.success(t.message,"FreshCart")},error:t=>{console.log(t)}})}};r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=_({type:r,selectors:[["app-details"]],standalone:!0,features:[y],decls:1,vars:1,consts:[[1,"text-center","text-main","my-2"],[1,"row","align-items-center"],[1,"col-md-3"],[1,"w-100",3,"src","alt"],[1,"col-md-9"],[1,"text-muted"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center","p-2"],[1,"btn","btn-main","w-100",3,"click"],[1,"fas","fa-star","rating-color"],[1,"fas","fa-star-half-alt","rating-color"]],template:function(t,d){t&1&&u(0,j,26,9,"section"),t&2&&v(0,d.detailsProduct?0:-1)}});let a=r;return a})();export{J as DetailsComponent};
