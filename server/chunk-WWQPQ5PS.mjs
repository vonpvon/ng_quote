import './polyfills.server.mjs';
import{E as y,a as n,b as a,c as f,d as s,e as m,f as u,g as c,h as d,i as l,j as i,q as h,s as v,t as g,u as x,v as C,y as q}from"./chunk-7J6VK6AU.mjs";var b=(()=>{let t=class t{constructor(e){this.http=e,this.quote={content:"Fetching quote...",author:""}}ngOnInit(){this.fetchQuote()}fetchQuote(){this.http.get("https://api.quotable.io/random").subscribe(e=>{this.quote=e},e=>{this.quote={content:"Failed to fetch quote.",author:"System"}})}};t.\u0275fac=function(o){return new(o||t)(f(v))},t.\u0275cmp=n({type:t,selectors:[["app-panel-qoute"]],standalone:!0,features:[i],decls:6,vars:2,consts:[[1,"d-flex","justify-content-center","align-items-center","vh-100"],[1,"p-4","border","rounded","bg-light"],[1,"text-center","fs-4"],[1,"blockquote-footer","text-center"]],template:function(o,p){o&1&&(s(0,"div",0)(1,"div",1)(2,"p",2),c(3),m(),s(4,"footer",3),c(5),m()()()),o&2&&(a(3),l('"',p.quote.content,'"'),a(2),d(p.quote.author))}});let r=t;return r})();var F=(()=>{let t=class t{constructor(){this.title="qoute-randomizer"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n({type:t,selectors:[["app-root"]],standalone:!0,features:[i],decls:1,vars:0,template:function(o,p){o&1&&u(0,"app-panel-qoute")},dependencies:[b,g]});let r=t;return r})();var S=[];var M={providers:[y(S),C()]};var A={providers:[q()]},D=h(M,A);var H=()=>x(F,D),V=H;export{V as a};