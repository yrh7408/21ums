import{_ as A,E as o,r as _,o as m,c as O,a as t,V as B,w as n,e as g,g as N,b as V,O as S}from"./index-cb4e48ca.js";import{E as U}from"./el-overlay-1d94b4c5.js";import{a as w,b as F,E as K}from"./el-form-item-f6b9e70c.js";import{E as M}from"./el-input-number-1349538c.js";import{E as j}from"./el-pagination-8d11a77d.js";import{E as R,b as q}from"./index-d20eb06a.js";import{a as b}from"./ums_member_tag-63fa0a10.js";import{E as D}from"./index-3ec6997f.js";import{E as G}from"./index-c18ef027.js";import"./index-ee84b82c.js";import"./index-b083c78e.js";const H={data(){return{json:{current:1,size:99},searchText:"",currentPage:1,pageSize:6,total:0,tableData:[],editDialogVisible:!1,editItem:{},selectedRow:null}},computed:{paginatedData(){const l=(this.currentPage-1)*this.pageSize,e=l+this.pageSize;return this.filteredtableData.slice(l,e)},filteredtableData(){return this.searchText?this.tableData.filter(l=>String(l.id).includes(String(this.searchText))):this.tableData}},methods:{openEditDialog(l){this.editItem={...l},this.editDialogVisible=!0},handlePageChange(l){this.currentPage=l},saveEdit(){console.log(this.editItem),D.confirm("确定修改吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{const l=this.tableData.findIndex(e=>e.id===this.editItem.id);l!==-1?this.tableData.splice(l,1,this.editItem):this.tableData.push(this.editItem),this.editDialogVisible=!1,o.success("修改成功！"),this.editItem={}}).catch(()=>{o.info("修改取消！")})},fetchData(){b.Page(this.json).then(l=>{this.tableData=l.data.data.page.records||l.data.records,console.log(l),o.success("刷新成功！")}).catch(l=>{o.error("刷新失败，请检查网络！"),console.error("Error fetching data:",l)})},Insert(l){b.Add(l).then(e=>{delete l.isNew,o.success("插入数据成功！")}).catch(e=>{o.error("插入数据失败！"),console.error("保存修改失败:",e)})},Alter(l){b.Edit(l).then(e=>{console.log("修改保存成功:",e.data),o.success("修改数据成功！")}).catch(e=>{o.error("修改数据失败！"),console.error("保存修改失败:",e)})},Del(l){D.confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{b.Del(l.id).then(e=>{const c=this.tableData.findIndex(C=>C.id===l.id);c!==-1&&this.tableData.splice(c,1),console.log("删除成功:",e.data),o.success("删除成功！")}).catch(e=>{o.error(response.msg),console.error("删除失败:",e)})}).catch(()=>{})},delND(l){D.confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{const e=this.tableData.findIndex(c=>c.id===l.id);e!==-1&&this.tableData.splice(e,1),o.success("删除成功！")}).catch(()=>{o.error("删除失败！"),console.log("取消删除 API",l)})},addAPI(){o.success("添加数据ing");const l={finishOrderAmount:0,finishOrderCount:0,id:0,name:"",isNew:!0};this.tableData.push(l);const e=Math.ceil(this.tableData.length/this.pageSize);this.handlePageChange(e)}},created(){this.fetchData()}},J={class:"root"},L={slot:"footer"};function Q(l,e,c,C,a,s){const p=w,u=q,I=_("Position"),d=S,r=G,x=_("EditPen"),E=_("Delete"),y=R,k=j,f=F,P=M,v=K,z=U,T=_("CirclePlusFilled");return m(),O("div",J,[t(p,{modelValue:a.searchText,"onUpdate:modelValue":e[0]||(e[0]=i=>a.searchText=i),placeholder:"请输入搜索关键字",clearable:"",onClear:l.clearSearch,onKeyup:B(l.performSearch,["enter"]),style:{"margin-bottom":"20px"}},null,8,["modelValue","onClear","onKeyup"]),t(y,{data:s.paginatedData,"header-cell-style":{background:"#eef1f6",color:"#606266"},borde:""},{default:n(()=>[t(u,{prop:"id",label:"id"}),t(u,{prop:"finishOrderAmount",label:"finishOrderAmount"}),t(u,{prop:"finishOrderCount",label:"finishOrderCount"}),t(u,{prop:"name",label:"name"}),t(u,{width:"150rpx",label:"操作"},{default:n(({row:i})=>[i.isNew?(m(),g(r,{key:0,size:"mini",class:"custom-button",type:"success",circle:"",onClick:h=>s.Insert(i)},{default:n(()=>[t(d,null,{default:n(()=>[t(I)]),_:1})]),_:2},1032,["onClick"])):(m(),g(r,{key:1,class:"custom-button",size:"mini",type:"warning",circle:"",onClick:h=>s.Alter(i)},{default:n(()=>[t(d,null,{default:n(()=>[t(I)]),_:1})]),_:2},1032,["onClick"])),t(r,{type:"primary",size:"mini",circle:"",onClick:h=>s.openEditDialog(i)},{default:n(()=>[t(d,null,{default:n(()=>[t(x)]),_:1})]),_:2},1032,["onClick"]),i.isNew?(m(),g(r,{key:2,size:"mini",type:"danger",circle:"",onClick:h=>s.delND(i)},{default:n(()=>[t(d,null,{default:n(()=>[t(E)]),_:1})]),_:2},1032,["onClick"])):(m(),g(r,{key:3,type:"danger",size:"mini",circle:"",onClick:h=>s.Del(i)},{default:n(()=>[t(d,null,{default:n(()=>[t(E)]),_:1})]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"]),t(k,{"current-page":a.currentPage,"page-size":a.pageSize,total:s.filteredtableData.length,onCurrentChange:s.handlePageChange},null,8,["current-page","page-size","total","onCurrentChange"]),t(z,{class:"form",modelValue:a.editDialogVisible,"onUpdate:modelValue":e[6]||(e[6]=i=>a.editDialogVisible=i),onClose:e[7]||(e[7]=i=>a.editDialogVisible=!1)},{default:n(()=>[t(v,null,{default:n(()=>[t(f,{label:"id"},{default:n(()=>[t(p,{modelValue:a.editItem.id,"onUpdate:modelValue":e[1]||(e[1]=i=>a.editItem.id=i),disabled:""},null,8,["modelValue"])]),_:1}),t(f,{label:"finishOrderAmount"},{default:n(()=>[t(p,{modelValue:a.editItem.finishOrderAmount,"onUpdate:modelValue":e[2]||(e[2]=i=>a.editItem.finishOrderAmount=i)},null,8,["modelValue"])]),_:1}),t(f,{label:"finishOrderCount"},{default:n(()=>[t(P,{modelValue:a.editItem.finishOrderCount,"onUpdate:modelValue":e[3]||(e[3]=i=>a.editItem.finishOrderCount=i)},null,8,["modelValue"])]),_:1}),t(f,{label:"name"},{default:n(()=>[t(p,{modelValue:a.editItem.name,"onUpdate:modelValue":e[4]||(e[4]=i=>a.editItem.name=i)},null,8,["modelValue"])]),_:1})]),_:1}),N("div",L,[t(r,{onClick:e[5]||(e[5]=i=>a.editDialogVisible=!1)},{default:n(()=>[V("取消")]),_:1}),t(r,{type:"primary",onClick:s.saveEdit},{default:n(()=>[V("保存")]),_:1},8,["onClick"])])]),_:1},8,["modelValue"]),t(r,{type:"primary",circle:"",size:"large",onClick:s.addAPI,style:{"margin-top":"20px","margin-left":"50%"}},{default:n(()=>[t(d,null,{default:n(()=>[t(T)]),_:1})]),_:1},8,["onClick"])])}const oe=A(H,[["render",Q]]);export{oe as default};
