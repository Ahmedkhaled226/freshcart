import './polyfills.server.mjs';
import{a as r}from"./chunk-JNO7ST2A.mjs";import{x as c}from"./chunk-Q2MC4KZB.mjs";import{S as o,X as n,g as s}from"./chunk-BPW7ZSEQ.mjs";var m=(()=>{let e=class e{constructor(t){this._HttpClient=t,this.cartNumber=new s(0),this.myHeader={token:localStorage.getItem("userToken")}}addProductToCart(t){return this._HttpClient.post(`${r.baseUrl}/api/v1/cart`,{productId:t},{headers:this.myHeader})}getProductsCart(){return this._HttpClient.get(`${r.baseUrl}/api/v1/cart`,{headers:this.myHeader})}deleteSpecificItem(t){return this._HttpClient.delete(`${r.baseUrl}/api/v1/cart/${t}`,{headers:this.myHeader})}updateProductQuantity(t,i){return this._HttpClient.put(`${r.baseUrl}/api/v1/cart/${t}`,{count:i},{headers:this.myHeader})}clearCart(){return this._HttpClient.delete(`${r.baseUrl}/api/v1/cart`,{headers:this.myHeader})}};e.\u0275fac=function(i){return new(i||e)(n(c))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let a=e;return a})();export{m as a};
