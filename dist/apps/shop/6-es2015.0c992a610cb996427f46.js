(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{D57K:function(e,t,o){"use strict";function r(e,t,o,r){var i,n=arguments.length,d=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,o,r);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(d=(n<3?i(d):n>3?i(t,o,d):i(t,o))||d);return n>3&&d&&Object.defineProperty(t,o,d),d}function i(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return i}))},mJBM:function(e,t,o){"use strict";o.r(t),o.d(t,"ShopAdminModule",(function(){return E}));var r=o("2kYt"),i=o("sEIs"),n=function(e){return e.ADD="ADD",e.UPD="UPD",e.DEL="DEL",e}({}),d=o("C17D"),c=o("EM62"),s=o("Meci");const a=["headerButton"];let l=(()=>{class e{constructor(){}agInit(e){this.params=e}onMenuClicked(){this.params.context.componentParent.selectOrDeselectAll()}refresh(e){return!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["ecommerce-loading-overlay"]],viewQuery:function(e,t){var o;1&e&&c.yc(a,!0,c.l),2&e&&c.lc(o=c.bc())&&(t.headerButton=o.first)},decls:4,vars:1,consts:[[1,"customHeaderLabel",3,"click"],["headerButton",""]],template:function(e,t){1&e&&(c.Sb(0,"div"),c.Sb(1,"div",0,1),c.ac("click",(function(){return t.onMenuClicked()})),c.uc(3),c.Rb(),c.Rb()),2&e&&(c.Bb(3),c.vc(t.params.displayName))},styles:[".customHeaderLabel[_ngcontent-%COMP%] {\n          margin-left: 5px;\n          margin-top: 3px;\n      }"]}),e})();var u=o("1ZKx");let p=(()=>{class e{constructor(){this.updateData=new c.n,this.evSelItem=new c.n,this.subscriptions=[],this.selectableProd=!0,this.context={componentParent:this}}ngOnChanges(e){if(console.log("change",e),e.data&&this.gridReady&&this.updateItems(),e.item&&this.gridReady)switch(this.item.action){case n.ADD:this.onAddRow(this.item.item);break;case n.UPD:this.onUpdateRow(this.item.item);break;case n.DEL:this.onDeleteRow(this.item.item)}}ngOnInit(){this.updateGridOptions()}onGridReady(e){console.log("on grid ready"),this.gridReady=!0,this.gridApi=e.api,this.data&&this.updateItems(this.data)}createColumnDefs(){this.columnDefs=[{headerCheckboxSelection:this.selectableProd,checkboxSelection:this.selectableProd}],this.columns.map((e,t,o)=>{this.columnDefs[t]=Object.assign(Object.assign({},this.columnDefs[t]),{headerComponentFramework:l,headerComponentParams:{displayName:e.title},field:e.field,type:e.type,width:e.width})})}updateGridOptions(){console.log("update grid options"),this.gridOptions={rowData:[],rowSelection:"multiple",rowClassRules:{"refund-prod":"data.isRefund === true"},onGridReady:()=>{console.log("grid ready on update grid options"),this.gridOptions.api.sizeColumnsToFit()},onRowSelected:e=>{console.log("onRowSelected",e),this.evSelItem.emit(this.gridOptions.api.getSelectedRows())},onRowClicked:e=>{console.log("onRowClicked",e),this.evSelItem.emit(this.gridOptions.api.getSelectedRows())},onBodyScroll:e=>{this.gridOptions.api.sizeColumnsToFit()},onGridColumnsChanged:()=>{this.gridOptions.api.sizeColumnsToFit()},rowHeight:60,rowStyle:{"font-size":"16px"}},this.createColumnDefs()}selectOrDeselectAll(){this.selectableProd&&(this.gridOptions.api.getSelectedNodes().length!==this.gridOptions.api.getDisplayedRowCount()?this.gridOptions.api.selectAll():this.gridOptions.api.deselectAll())}onAddRow(e){console.log("onAddRow",e,this.gridOptions.api.getDisplayedRowCount()),e.price=Number(e.price).toFixed(2),this.gridOptions.api.updateRowData({add:[e]})}onDeleteRow(e){console.log("onDeleteRow",e),this.gridOptions.api.updateRowData({remove:[e]}),this.gridOptions.api.deselectAll()}onUpdateRow(e){console.log("onUpdateRow",e,this.gridOptions.api.getDisplayedRowCount()),e.price=Number(e.price).toFixed(2),this.gridOptions.api.deselectAll(),this.gridOptions.api.forEachNode((function(t){t.data.id===e.id&&t.setData(e)}))}getRowData(){const e=[];return this.gridOptions.api.forEachNode((function(t){e.push(t.data)})),console.log("Row Data:",e),e}clearData(){this.gridOptions.api.setRowData([])}updateItems(e){this.clearData(),this.data.map(e=>{console.log("updateItems",e),this.onAddRow(e)})}ngOnDestroy(){this.subscriptions.map(e=>e.unsubscribe())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["ecommerce-ag-grid"]],inputs:{columns:"columns",data:"data",item:"item"},outputs:{updateData:"updateData",evSelItem:"evSelItem"},features:[c.zb],decls:1,vars:5,consts:[[1,"ag-theme-material",3,"gridOptions","context","columnDefs","rowMultiSelectWithClick","suppressRowClickSelection","gridReady"]],template:function(e,t){1&e&&(c.Sb(0,"ag-grid-angular",0),c.ac("gridReady",(function(e){return t.onGridReady(e)})),c.Rb()),2&e&&c.jc("gridOptions",t.gridOptions)("context",t.context)("columnDefs",t.columnDefs)("rowMultiSelectWithClick",t.selectableProd)("suppressRowClickSelection",!t.selectableProd)},directives:[u.a],styles:["ag-grid-angular[_ngcontent-%COMP%]{width:100%;height:100%}ag-grid-angular[_ngcontent-%COMP%] > .customHeaderLabel[_ngcontent-%COMP%]{width:100%!important}ag-grid-angular[_ngcontent-%COMP%] > [col-id=total][_ngcontent-%COMP%] > .customHeaderLabel[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}  .ag-theme-material .ag-header-row{font-size:16px!important}"]}),e})();var m=o("PBFl");let h=(()=>{class e{constructor(){this.evEditProd=new c.n,this.evDelProd=new c.n,this.editBtnDisabled=!0,this.delBtnDisabled=!0,this.columDefs=[{field:"name",title:"Name",width:80},{field:"description",title:"Description",width:100},{field:"price",title:"Price",width:50,type:"numericColumn"}]}ngOnInit(){}selProduct(e){console.log("selProduct",e),this.selectedProds=e,this.editBtnDisabled=this.delBtnDisabled=1!==e.length}deleteProd(){console.log("deleteProd",this.selectedProds),this.evDelProd.emit(this.selectedProds[0])}editProd(){console.log("editProd",this.selectedProds),this.evEditProd.emit(this.selectedProds)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["ecommerce-manage-products"]],inputs:{data:"data",addProd:"addProd"},outputs:{evEditProd:"evEditProd",evDelProd:"evDelProd"},decls:10,vars:5,consts:[[1,"product-list"],[1,"product-list-content"],["fxFlex","50",1,"container",3,"data","item","columns","evSelItem"],["mat-raised-button","",3,"disabled","click"]],template:function(e,t){1&e&&(c.Sb(0,"mat-card",0),c.Sb(1,"mat-card-subtitle"),c.uc(2,"List of Products"),c.Rb(),c.Sb(3,"mat-card-content",1),c.Sb(4,"ecommerce-ag-grid",2),c.ac("evSelItem",(function(e){return t.selProduct(e)})),c.Rb(),c.Rb(),c.Sb(5,"mat-card-actions"),c.Sb(6,"button",3),c.ac("click",(function(){return t.editProd()})),c.uc(7,"Edit"),c.Rb(),c.Sb(8,"button",3),c.ac("click",(function(){return t.deleteProd()})),c.uc(9,"Delete"),c.Rb(),c.Rb(),c.Rb()),2&e&&(c.Bb(4),c.jc("data",t.data)("item",t.addProd)("columns",t.columDefs),c.Bb(2),c.jc("disabled",t.editBtnDisabled),c.Bb(2),c.jc("disabled",t.delBtnDisabled))},directives:[s.a,s.g,s.c,p,s.b,m.b],styles:[".container[_ngcontent-%COMP%]{display:flex;height:100%;width:100%}.product-list[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:column}.product-list-content[_ngcontent-%COMP%]{width:100%;height:90%}mat-card-actions[_ngcontent-%COMP%]{padding:0 10px}"]}),e})();var b=o("nIj0");o("D57K");var f=o("29Wa"),g=o("Cd2c");const P=["formDirective"];function v(e,t){1&e&&(c.Sb(0,"mat-error"),c.uc(1," Product name is a required field "),c.Rb())}function w(e,t){1&e&&(c.Sb(0,"mat-error"),c.uc(1," Product price is a required field "),c.Rb())}function D(e,t){1&e&&(c.Sb(0,"mat-error"),c.uc(1," Product price must be major equal than 0 "),c.Rb())}function R(e,t){1&e&&(c.Sb(0,"mat-error"),c.uc(1," Product price must be minor equal than 1000 "),c.Rb())}function O(e,t){if(1&e&&(c.Sb(0,"mat-error",9),c.uc(1),c.Rb()),2&e){const e=c.ec();c.Bb(1),c.vc(e.error)}}let S=(()=>{class e{constructor(e){this.formBuilder=e,this.evAddProd=new c.n,this.evUpdateProd=new c.n,this.prod2Edit={id:"",name:"",price:void 0,description:""},this.error="",this.submitted=!1}ngOnChanges(e){console.log("changes",e),e.prod2Edit&&this.form.patchValue({name:this.prod2Edit.name,price:this.prod2Edit.price,description:this.prod2Edit.description}),e.error&&console.error(e.error)}ngOnInit(){console.log("ngOnInit",this.prod2Edit),this.form=this.formBuilder.group({name:["",b.n.required],price:["",[b.n.required,b.n.min(0),b.n.max(1e3)]],description:["",b.n.maxLength(250)]})}get f(){return this.form.controls}onSubmit(){console.log("form",this.f),this.submitted=!0,this.form.valid&&(console.log(this.prod2Edit),this.prod2Edit&&""!==this.prod2Edit.id?this.updateProduct():this.saveProduct())}saveProduct(){this.evAddProd.emit({name:this.f.name.value,price:this.f.price.value,description:this.f.description.value}),this.formDirective.resetForm()}updateProduct(){this.evUpdateProd.emit({id:this.prod2Edit.id,name:this.f.name.value,price:this.f.price.value,description:this.f.description.value}),this.resetProdEdit(),this.formDirective.resetForm()}resetProdEdit(){this.prod2Edit={id:"",name:"",price:void 0,description:""}}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(b.c))},e.\u0275cmp=c.Hb({type:e,selectors:[["ecommerce-cru-product"]],viewQuery:function(e,t){var o;1&e&&c.yc(P,!0),2&e&&c.lc(o=c.bc())&&(t.formDirective=o.first)},inputs:{prod2Edit:"prod2Edit",error:"error"},outputs:{evAddProd:"evAddProd",evUpdateProd:"evUpdateProd"},features:[c.zb],decls:20,vars:9,consts:[[1,"product-cru"],[3,"formGroup","ngSubmit"],["formDirective","ngForm"],["type","text","matInput","","placeholder","Name*","formControlName","name",3,"value"],[4,"ngIf"],["type","number","matInput","","placeholder","Price*","formControlName","price",3,"value"],["matInput","","rows","3","placeholder","Description","formControlName","description",3,"value"],["class","alert",4,"ngIf"],["mat-raised-button","","color","primary","type","submit"],[1,"alert"]],template:function(e,t){1&e&&(c.Sb(0,"mat-card",0),c.Sb(1,"mat-card-subtitle"),c.uc(2,"Add/Edit Product"),c.Rb(),c.Sb(3,"mat-card-content"),c.Sb(4,"form",1,2),c.ac("ngSubmit",(function(){return t.onSubmit()})),c.Sb(6,"mat-form-field"),c.Ob(7,"input",3),c.tc(8,v,2,0,"mat-error",4),c.Rb(),c.Sb(9,"mat-form-field"),c.Ob(10,"input",5),c.tc(11,w,2,0,"mat-error",4),c.tc(12,D,2,0,"mat-error",4),c.tc(13,R,2,0,"mat-error",4),c.Rb(),c.Sb(14,"mat-form-field"),c.Sb(15,"textarea",6),c.uc(16,"        "),c.Rb(),c.Rb(),c.tc(17,O,2,1,"mat-error",7),c.Sb(18,"button",8),c.uc(19,"Save"),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&e&&(c.Bb(4),c.jc("formGroup",t.form),c.Bb(3),c.jc("value",null==t.prod2Edit?null:t.prod2Edit.name),c.Bb(1),c.jc("ngIf",t.submitted&&(null==t.f.name.errors?null:t.f.name.errors.required)),c.Bb(2),c.jc("value",null==t.prod2Edit?null:t.prod2Edit.price),c.Bb(1),c.jc("ngIf",t.submitted&&(null==t.f.price.errors?null:t.f.price.errors.required)),c.Bb(1),c.jc("ngIf",t.submitted&&(null==t.f.price.errors?null:t.f.price.errors.min)),c.Bb(1),c.jc("ngIf",t.submitted&&(null==t.f.price.errors?null:t.f.price.errors.max)),c.Bb(2),c.jc("value",null==t.prod2Edit?null:t.prod2Edit.description),c.Bb(2),c.jc("ngIf",t.error))},directives:[s.a,s.g,s.c,b.o,b.j,b.e,f.c,g.b,b.b,b.i,b.d,r.k,b.l,m.b,f.b],styles:[".product-cru-content[_ngcontent-%COMP%]{width:100%;height:90%}mat-card-actions[_ngcontent-%COMP%]{padding:0 10px}mat-form-field[_ngcontent-%COMP%]{width:90%}textarea[_ngcontent-%COMP%]{max-height:100px}"]}),e})(),y=(()=>{class e{constructor(e){this.prodService=e,this.responseErr="",this.prodService.getProducts().subscribe(e=>{console.log("products",e),this.products=e.products},e=>console.error(e))}ngOnInit(){}addProduct(e){console.log("addProduct",e),this.prodService.saveProduct(e).subscribe(e=>{console.log("added product",e),this.product={action:n.ADD,item:e},this.responseErr=""},e=>{console.error(e),this.responseErr=e})}updateProduct(e){console.log("updateProduct",e),this.prodService.updateProduct(e).subscribe(e=>{console.log("updated product",e),this.product={action:n.UPD,item:e},this.responseErr=""},e=>{console.error(e),this.responseErr=e})}deleteProduct(e){this.prodService.deleteProduct(e.id).subscribe(t=>{console.log("deleted product",t),this.product={action:n.DEL,item:e}},e=>console.error(e))}editProd(e){console.log("editProd",e),this.prod2Edit=e[0]}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(d.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["ecommerce-admin"]],decls:2,vars:4,consts:[[3,"data","addProd","evEditProd","evDelProd"],[3,"prod2Edit","error","evAddProd","evUpdateProd"]],template:function(e,t){1&e&&(c.Sb(0,"ecommerce-manage-products",0),c.ac("evEditProd",(function(e){return t.editProd(e)}))("evDelProd",(function(e){return t.deleteProduct(e)})),c.Rb(),c.Sb(1,"ecommerce-cru-product",1),c.ac("evAddProd",(function(e){return t.addProduct(e)}))("evUpdateProd",(function(e){return t.updateProduct(e)})),c.Rb()),2&e&&(c.jc("data",t.products)("addProd",t.product),c.Bb(1),c.jc("prod2Edit",t.prod2Edit)("error",t.responseErr))},directives:[h,S],styles:["[_nghost-%COMP%]{display:flex;flex:1;margin:10px 20px;justify-content:space-between}ecommerce-admin[_ngcontent-%COMP%] + ecommerce-admin[_ngcontent-%COMP%]{margin-left:10px}ecommerce-manage-products[_ngcontent-%COMP%]{display:flex;width:60%}ecommerce-cru-product[_ngcontent-%COMP%]{display:flex;width:38%;flex-direction:column}"]}),e})();var C=o("ZPsl");let E=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[r.b,i.e.forChild([{path:"",component:y}]),C.a,b.m]]}),e})()}}]);