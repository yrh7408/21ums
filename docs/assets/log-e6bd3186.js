import{_ as d,o as p,c as m,a,w as u}from"./index-cb4e48ca.js";import{a as o,E as _,b as g}from"./index-d20eb06a.js";import{a as h}from"./index-96ba63c6.js";import{E as b}from"./index-b083c78e.js";import"./el-form-item-f6b9e70c.js";import"./el-switch-483ed374.js";let l;const r=()=>{l=b.service({lock:!0,text:"加载中...",spinner:"wave"})},s=()=>{l&&l.close()},y=async t=>{r();try{return await o.request({url:"/mall/ums-member-level/one/"+t,method:"get"})}catch(e){throw e}finally{s()}},f=async t=>{r();try{return await o.request({url:"/mall/ums-member-receive-address/del/"+t,method:"get"})}catch(e){throw e}finally{s()}},w=async t=>{r();try{return await o.request({url:"/mall/ums-member-receive-address/edit",method:"post",data:t})}catch(e){throw e}finally{s()}},v=async t=>{r();try{return await o.request({url:"/mall/ums-member-login-log/add",method:"post",data:t})}catch(e){throw e}finally{s()}},x=async t=>{r();try{return await o.request({url:"/mall/ums-member-login-log/page",method:"post",data:t})}catch(e){throw e}finally{s()}},D={One:y,Del:f,Edit:w,Add:v,Page:x};const E={components:{add:h},data(){return{json:{current:1,size:99},searchText:"",currentPage:1,pageSize:6,total:0,tableData:[],editDialogVisible:!1,editItem:{},selectedRow:null,form:{},updateOpen:!1,searchVal:"",tableDateCopy:[]}},created(){this.getList()},methods:{getList(){D.Page(this.json).then(t=>{console.log(t.data.data.page.records),this.tableData=t.data.data.page.records,this.tableDateCopy=t.data.data.page.records})}}},q={class:"use_box"};function L(t,e,C,$,c,k){const n=g,i=_;return p(),m("div",q,[a(i,{border:"",data:c.tableData,stripe:"",style:{width:"100%"}},{default:u(()=>[a(n,{align:"center",prop:"name",label:"登录ip"}),a(n,{align:"center",prop:"phoneNumber",label:"登录时间"}),a(n,{align:"center",prop:"province",label:"登录会员id"}),a(n,{align:"center",prop:"userAgent",label:"登录类型"})]),_:1},8,["data"])])}const A=d(E,[["render",L],["__scopeId","data-v-835bb7d7"]]);export{A as default};
