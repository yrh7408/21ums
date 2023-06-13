import{j as Z,H as U,z as $,W as k,A as w,x as V,d as K,k as J,X as x,l as u,q as I,L as ee,Y as S,Z as ae,$ as te,o,c as d,g as T,N as a,M as r,V as ie,e as v,w as b,R as E,O as g,f as c,t as N,a as ne,a0 as oe,Q as A,a1 as se,U as le,a2 as re,a3 as ce,a4 as F,a5 as ue,G as de}from"./index-cb4e48ca.js";import{i as ve}from"./index-d20eb06a.js";import{U as B,C as P,I as _,u as fe,c as pe,d as me,e as he}from"./el-form-item-f6b9e70c.js";const ye=Z({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:U},inactiveIcon:{type:U},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:$(Function)},size:{type:String,validator:ve},tabindex:{type:[String,Number]}}),be={[B]:s=>k(s)||w(s)||V(s),[P]:s=>k(s)||w(s)||V(s),[_]:s=>k(s)||w(s)||V(s)},ge=["onClick"],ke=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Ce=["aria-hidden"],we=["aria-hidden"],Ve=["aria-hidden"],z="ElSwitch",Ie=K({name:z}),Se=K({...Ie,props:ye,emits:be,setup(s,{expose:G,emit:f}){const t=s,H=re(),{formItem:m}=fe(),L=pe(),i=J("switch");x({from:'"value"',replacement:'"model-value" or "v-model"',scope:z,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},u(()=>{var e;return!!((e=H.vnode.props)!=null&&e.value)}));const{inputId:W}=me(t,{formItemContext:m}),h=he(u(()=>t.loading)),C=I(t.modelValue!==!1),p=I(),j=I(),q=u(()=>[i.b(),i.m(L.value),i.is("disabled",h.value),i.is("checked",n.value)]),Q=u(()=>({width:ee(t.width)}));S(()=>t.modelValue,()=>{C.value=!0}),S(()=>t.value,()=>{C.value=!1});const D=u(()=>C.value?t.modelValue:t.value),n=u(()=>D.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(D.value)||(f(B,t.inactiveValue),f(P,t.inactiveValue),f(_,t.inactiveValue)),S(n,e=>{var l;p.value.checked=e,t.validateEvent&&((l=m==null?void 0:m.validate)==null||l.call(m,"change").catch(Y=>ae()))});const y=()=>{const e=n.value?t.inactiveValue:t.activeValue;f(B,e),f(P,e),f(_,e),ce(()=>{p.value.checked=n.value})},M=()=>{if(h.value)return;const{beforeChange:e}=t;if(!e){y();return}const l=e();[F(l),k(l)].includes(!0)||ue(z,"beforeChange must return type `Promise<boolean>` or `boolean`"),F(l)?l.then(O=>{O&&y()}).catch(O=>{}):l&&y()},R=u(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),X=()=>{var e,l;(l=(e=p.value)==null?void 0:e.focus)==null||l.call(e)};return te(()=>{p.value.checked=n.value}),G({focus:X,checked:n}),(e,l)=>(o(),d("div",{class:r(a(q)),style:A(a(R)),onClick:se(M,["prevent"])},[T("input",{id:a(W),ref_key:"input",ref:p,class:r(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(h),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(h),tabindex:e.tabindex,onChange:y,onKeydown:ie(M,["enter"])},null,42,ke),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),d("span",{key:0,class:r([a(i).e("label"),a(i).em("label","left"),a(i).is("active",!a(n))])},[e.inactiveIcon?(o(),v(a(g),{key:0},{default:b(()=>[(o(),v(E(e.inactiveIcon)))]),_:1})):c("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),d("span",{key:1,"aria-hidden":a(n)},N(e.inactiveText),9,Ce)):c("v-if",!0)],2)):c("v-if",!0),T("span",{ref_key:"core",ref:j,class:r(a(i).e("core")),style:A(a(Q))},[e.inlinePrompt?(o(),d("div",{key:0,class:r(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),v(a(g),{key:0,class:r(a(i).is("icon"))},{default:b(()=>[(o(),v(E(a(n)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),d("span",{key:1,class:r(a(i).is("text")),"aria-hidden":!a(n)},N(a(n)?e.activeText:e.inactiveText),11,we)):c("v-if",!0)],2)):c("v-if",!0),T("div",{class:r(a(i).e("action"))},[e.loading?(o(),v(a(g),{key:0,class:r(a(i).is("loading"))},{default:b(()=>[ne(a(oe))]),_:1},8,["class"])):c("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),d("span",{key:1,class:r([a(i).e("label"),a(i).em("label","right"),a(i).is("active",a(n))])},[e.activeIcon?(o(),v(a(g),{key:0},{default:b(()=>[(o(),v(E(e.activeIcon)))]),_:1})):c("v-if",!0),!e.activeIcon&&e.activeText?(o(),d("span",{key:1,"aria-hidden":!a(n)},N(e.activeText),9,Ve)):c("v-if",!0)],2)):c("v-if",!0)],14,ge))}});var Te=le(Se,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Pe=de(Te);export{Pe as E};
