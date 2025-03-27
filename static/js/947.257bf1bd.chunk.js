"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[947],{6075:(e,t,a)=>{a.d(t,{A:()=>l});a(5043);var o=a(4005),n=a(579);const l=e=>{let{variant:t="info",message:a,show:l=!0,className:s=""}=e;return l?(0,n.jsx)(o.A,{variant:t,className:s,children:a}):null}},6313:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);var o=a(4104),n=a(4282),l=a(579);const s=e=>{let{show:t,onHide:a,title:s,children:r,footerButtons:i}=e;return(0,l.jsxs)(o.A,{show:t,onHide:a,size:"lg",centered:!0,children:[(0,l.jsx)(o.A.Header,{closeButton:!0,children:(0,l.jsx)(o.A.Title,{children:s||"Modal Title"})}),(0,l.jsx)(o.A.Body,{children:r}),(0,l.jsx)(o.A.Footer,{children:i?i.map(((e,t)=>(0,l.jsx)(n.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,l.jsx)(n.A,{variant:"secondary",onClick:a,children:"Close"})})]})}},3353:(e,t,a)=>{a.d(t,{A:()=>c});var o=a(5043),n=a(6313),l=a(7348),s=a(6075),r=a(579);const i=e=>{let{errors:t}=e;console.log("[ErrorPopup.jsx] errors:",t);const a=(0,o.useMemo)((()=>{const e=t.reduce(((e,t)=>{const a=t.match(/Row (\d+):/),o=t.match(/"([^"]*)" (?:is required|value)/),n=t.split(": ").slice(1).join(": "),l=a?a[1]:"N/A",s=o?o[1]:t.includes("Collaborative Space")?"Collaborative Space":"N/A";return e[l]||(e[l]={rowNumber:l,columns:[],errors:[]}),e[l].columns.push(s),e[l].errors.push(n||t),e}),{});return Object.values(e).sort(((e,t)=>Number(e.rowNumber)-Number(t.rowNumber)))}),[t]),n=new l.jS({fixedWidth:!0,defaultHeight:50}),i=e=>{let{key:t,index:o,style:s,parent:i}=e;const c=a[o];return(0,r.jsx)(l.dl,{cache:n,columnIndex:0,rowIndex:o,parent:i,children:(0,r.jsxs)("div",{style:s,className:"table-row",children:[(0,r.jsx)("div",{className:"table-cell",style:{width:"15%"},children:c.rowNumber}),(0,r.jsx)("div",{className:"table-cell",style:{width:"25%"},children:c.columns.map(((e,t)=>(0,r.jsx)("div",{children:e},t)))}),(0,r.jsx)("div",{className:"table-cell",style:{width:"60%"},children:(0,r.jsx)("ul",{className:"error-list",children:c.errors.map(((e,t)=>(0,r.jsx)("li",{children:e},t)))})})]})},t)};return(0,r.jsxs)("div",{className:"error-popup-container",children:[(0,r.jsx)(s.A,{variant:"danger",message:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("strong",{children:"\u26a0\ufe0f Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve these issues, update the spreadsheet and re-import. (",a.length," errors found)"]}),className:"custom-alert"}),(0,r.jsxs)("div",{className:"table-wrapper",children:[(0,r.jsxs)("div",{className:"static-header",children:[(0,r.jsx)("div",{className:"header-cell",style:{width:"15%"},children:"Row Number"}),(0,r.jsx)("div",{className:"header-cell",style:{width:"25%"},children:"Column Name"}),(0,r.jsx)("div",{className:"header-cell",style:{width:"60%"},children:"Error Description"})]}),(0,r.jsx)("div",{className:"table-container",children:(0,r.jsx)(l.t$,{children:e=>{let{height:t,width:o}=e;return(0,r.jsx)(l.B8,{width:o,height:t,rowCount:a.length,rowHeight:n.rowHeight,deferredMeasurementCache:n,rowRenderer:i})}})})]})]})},c=e=>{let{show:t,onHide:a,errors:o}=e;return console.log("[ContentErrorsModal.jsx] errors:",o),(0,r.jsx)(n.A,{show:t,onHide:a,title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:a}],children:(0,r.jsx)(i,{errors:o})})}},7725:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var o=a(5043),n=a(4391),l=(a(2342),a(9555),a(3003)),s=a(2670),r=a(2115),i=(a(8421),a(4050),a(9959),a(174)),c=a(2725),d=a(3277),u=a(6713),p=a(5645),g=a(867),h=a(314);const m=()=>{const{showErrorToast:e}=(0,c.A)(),{handlePlantAssignment:t}=(0,g.A)(),a=(0,l.d4)((e=>e.droppedObject.isDropped)),n=(0,l.d4)((e=>e.droppedObject.loading)),s=(0,l.wA)(),r=(0,o.useCallback)((async a=>{try{var o,n;const i={success:"true",data:{cardData:{Type:"Change Action","Maturity State":"In Work",Owner:"Sudarshan Sambamurthy","Collaborative Space":"Micro Motion","Collaborative Space Title":"MSOL-Micro Motion","Dropped Revision":"","Dropped Revision ID":"","Latest Released Revision":"","Latest Released Revision ID":"",EIN:"","CAD Format":"",imageURL:"https://oi000186152-us1-space.3dexperience.3ds.com:443/enovia/snresources/images/icons/large/I_ECM_CA108x144.png",relativePath:"/resources/v1/modeler/dslc/changeaction/474D00260AC21A0067CA9D1000015F59",Title:null===(o=a[0])||void 0===o?void 0:o.displayName,Name:null===(n=a[0])||void 0===n?void 0:n.displayName,organization:"BU-0000001","Latest Revision":"-"}}};if(i.success){s((0,p.um)({cardData:i.data.cardData}));const e=i.data.cardData;var l,r;if(console.log("[Dragged Items are]",e),s((0,p.Rr)(!0)),i)await t(e["Collaborative Space"],e["Maturity State"],null===(l=a[0])||void 0===l?void 0:l.objectId,null===(r=a[0])||void 0===r?void 0:r.objectType)}else e(d.wX)}catch(i){console.error("[FetchObjectDetails] Error fetching details:",i),e(d.wX)}finally{s((0,p.r1)(!1))}}),[s,t]),i=(0,o.useCallback)((async t=>{console.log("[handleDrop] handleDrop called with dataItems:",t);try{if(t&&t.length>0){var a;const o=null===(a=t[0])||void 0===a?void 0:a.objectType;if(!["VPMReference","Document","Raw_Material","Change Action"].includes(o))return void e(d.Zo);s((0,p.Rr)(!0)),console.log("[handleDrop] \ud83d\udd04 Force setting `loading = true`..."),s((0,p.r1)(!1)),setTimeout((()=>s((0,p.r1)(!0))),0),await r(t)}else console.warn("[handleDrop] No data items to process.")}catch(o){console.error("[Drop] Error in handleDrop:",o),s((0,p.r1)(!1)),console.log("[handleDrop] Error in handleDrop, setting loading to false"),e(d.nz)}}),[r,e]);return{initializeDroppableArea:(0,o.useCallback)((()=>{a?console.log("[initializeDroppableArea] \u23f3 isDropped is already true. Skipping reset."):(console.log("[initializeDroppableArea] \ud83d\ude80 Resetting isDropped to false..."),s((0,p.Rr)(!1)));const t=setInterval((()=>{const a=document.querySelector(".droppable-container");a&&(clearInterval(t),(0,h.pn)(a,i,s,e))}),100);return()=>clearInterval(t)}),[i,s]),loading:n,handleDrop:i}};var v=a(579);const f=()=>{const{handleDrop:e}=m(),{showSuccessToast:t,showErrorToast:a}=(0,c.A)(),[n,l]=(0,o.useState)(!1);console.log("---[WidgetLifecycle]--- starts");return(0,o.useEffect)((()=>{if(!window.widget)return;console.trace("[WidgetLifecycle] \ud83d\udd04 `onRefresh` was called from:"),window.widget.addEvent("onRefresh",(async()=>{var o,n;const r=(new Error).stack.split("\n"),c=sessionStorage.getItem("userClickedRefresh");if((e=>e.some((e=>e.includes("UWA_Frame_Alone.js")||e.includes("bundle-min.js"))))(r)&&!c)return void console.warn("[WidgetLifecycle] \u26d4 Auto-refresh detected. Ignoring unwanted `onRefresh`.");sessionStorage.removeItem("userClickedRefresh"),l(!0);const u=s.A.getState().droppedObject.droppedObjectData.initialDraggedData;if(null===u||void 0===u||null===(o=u.data)||void 0===o||null===(n=o.items)||void 0===n||!n.length)return console.error("[WidgetLifecycle] \u26a0\ufe0f `initialDraggedData` is missing or invalid:",u),void l(!1);try{await(0,i.M)(u.data.items,e)}catch(p){console.error("[WidgetLifecycle] \u274c Error during refresh:",p),a(d.H6)}finally{l(!1),t(d._l)}}))}),[]),n?(0,v.jsx)(u.A,{}):null};var A=a(45),b=a(9379),C=(a(4816),a(2691)),w=a(4282),j=a(3637),x=a(768),y=a(759),M=a(184),P=a(3825);const D=e=>{let{plants:t=[],itemId:a,isRemoveMode:o,handleRemovePlant:n}=e;return console.log("PlantRenderer received plants:",t),null!==t&&void 0!==t&&t.length?(0,v.jsx)(v.Fragment,{children:t.map((e=>(0,v.jsxs)("span",{style:{marginRight:"8px",display:"inline-flex",alignItems:"center"},children:[e.PlantName,o&&(0,v.jsx)(P.zhF,{size:16,style:{cursor:"pointer",color:"red"},onClick:()=>n(a,e.PlantID)})]},e.PlantID)))}):"N/A"},N=(e,t)=>e?e.map((e=>"Change Action"===t?{ItemName:(null===e||void 0===e?void 0:e.ItemTitle)||"N/A",Plant:(null===e||void 0===e?void 0:e.ItemPlants)||[],ItemId:(null===e||void 0===e?void 0:e.ItemId)||"N/A"}:{Plant:(null===e||void 0===e?void 0:e.title)||"N/A",Seq:(null===e||void 0===e?void 0:e.Seq)||"1",Status:"Current","MFG Change":(null===e||void 0===e?void 0:e.MFGChange)||"N/A","MFG Status":(null===e||void 0===e?void 0:e.MFGStatus)||"N/A",Change:(null===e||void 0===e?void 0:e.Change)||"N/A","Change Status":(null===e||void 0===e?void 0:e.ChangeStatus)||"N/A","Oracle Template":e.OracleTemplate||"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":!1,MBom:e.MBOM?"Make":"Buy","Sort Value":""})):[],S=[{accessorKey:"Available Plant",header:"Available Plant"}];var O=a(3127),E=a(5362),R=a(6313);const I=e=>{let{onAddPlant:t,addedPlant:a,onSave:n,onRemove:l,uniquedata:s,uniqueColumn:r,CAName:i,state:u}=e;const{showWarningToast:p}=(0,c.A)(),[g,h]=(0,o.useState)([]),[m,f]=(0,o.useState)([]),[A,b]=(0,o.useState)(!1),C=(0,o.useRef)();console.log("[Unique Table Data]:",s);return console.log("Added item data:",m),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"d-flex cta-absolute",children:[(0,v.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{i?b(!0):p("RELEASED"===u?d.sL:d.Ru)},children:"Add Plant"}),(0,v.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{n&&i?n():p("RELEASED"===u?d.EZ:d.nX)},children:"Save"}),(0,v.jsx)("button",{className:"btn btn-outline-danger btn-lg m-2",onClick:()=>{l&&l()},children:"Remove"})]}),(0,v.jsx)(R.A,{show:A,onHide:()=>b(!1),title:"Available Plant",footerButtons:[{label:"Add",variant:"primary",onClick:()=>{var e;null===(e=C.current)||void 0===e||e.addPlant(),b(!1)}},{label:"Close",variant:"danger",onClick:()=>b(!1)}],children:(0,v.jsx)("div",{className:"modal-body",children:(0,v.jsx)(E.A,{ref:C,data:s,columns:r,CAName:i,addedItem:e=>{if(console.log(e),h(e),e.length>0){const o=e.map((e=>({title:e,Seq:"1",Status:"Current","MFG Change":"N/A","MFG Status":"N/A",Change:"N/A","Change Status":"N/A","Oracle Template":"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":"false",MBom:"Buy","Sort Value":""})));t(o),f(o),a(e)}},state:u})})})]})};a(4119);var B=a(1397),F=a(4675);const T=()=>{const{handleDrop:e}=m(),{performSearch:t}=(0,F.A)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"droppable-container mt-4",children:[(0,v.jsx)(j.A,{style:{width:"90px",height:"90px"},src:"https://thewhitechamaleon.github.io/testrapp/images/drag.png",alt:"Data Collect",className:"search-icon"}),(0,v.jsx)("span",{className:"drag-and-drop-text",children:"Drag and Drop"}),(0,v.jsxs)("div",{className:"divider-container",children:[(0,v.jsx)("hr",{className:"divider"}),(0,v.jsx)("span",{className:"divider-text",children:"or"}),(0,v.jsx)("hr",{className:"divider"})]}),(0,v.jsx)(B.A,{onSearch:a=>{t(a,{title:"Search",role:"",mode:"furtive",default_with_precond:!0,precond:'flattenedtaxonomies:"types/VPMReference" OR flattenedtaxonomies:"types/Raw_Material" OR flattenedtaxonomies:"types/Document"',show_precond:!1,multiSel:!1,idcard_activated:!1,select_result_max_idcard:!1,itemViewClickHandler:"",search_delegation:"3dsearch"},(t=>{console.log("Selected objects:",t),console.log("objectId: selectedObjects[0].id",t[0].id),t&&t.length>0&&t[0].id?e([{objectId:t[0].id,objectType:t[0]["ds6w:type_value"]}]):console.warn("No objectId found in selected objects")}))}})]})})};var k=a(1238),L=a(3353),q=(a(9332),a(9722)),_=a(2268);const z=["title"],U=()=>{const[e,t]=(0,o.useState)(!1),[a,n]=(0,o.useState)([]),{initializeDroppableArea:s,loading:r}=m(),[i,g]=(0,o.useState)(0),[h,f]=(0,o.useState)([]),[P,E]=(0,o.useState)([]),[R,B]=(0,o.useState)(null),[F,U]=(0,o.useState)([]),[K,G]=(0,o.useState)([]),[V,H]=(0,o.useState)([]),[W,X]=(0,o.useState)(!1),[J,Y]=(0,o.useState)(!1),[Z,$]=(0,o.useState)(!1),[Q,ee]=(0,o.useState)(!1),te=(0,l.wA)(),{showSuccessToast:ae,showErrorToast:oe}=(0,c.A)(),ne=(0,o.useCallback)(((e,t)=>{G((a=>a.map((a=>a.ItemId===e?(0,b.A)((0,b.A)({},a),{},{ItemPlants:a.ItemPlants.filter((e=>e.PlantID!==t))}):a))))}),[G]);console.log("Table Data after Adding:",h);const le=(0,l.d4)((e=>e.droppedObject.selectedTableRows)),se=(0,l.d4)((e=>e.droppedObject.droppedObjectData));console.log("droppedObjectData",se);const re=(0,l.d4)((e=>e.droppedObject.CAItemDetails));console.log("The CA Item Details are:",re);const ie=(0,l.d4)((e=>e.droppedObject.loadingParentDetails));console.log("Parents Loading State:",ie);const ce=(0,l.d4)((e=>e.droppedObject.plantObjectData.proposedChanges));console.log("Proposed Changes are:",ce);const de=(0,l.d4)((e=>e.droppedObject.isDropped)),ue=(0,l.d4)((e=>e.droppedObject.plantObjectData.allPlants));console.log("[PlantAssignment] plant object data: ",ue);const pe=(0,l.d4)((e=>e.droppedObject.plantObjectData.uniquePlants));console.log("[Plant Assignment] Unique Plants:",pe),(0,o.useEffect)((()=>{U(pe)}),[pe]);const ge=(0,l.d4)((e=>e.droppedObject.plantObjectData.initialAssignedPlants));console.log("The Assigned Plants are:",ge);const he=(0,l.d4)((e=>e.droppedObject.plantObjectData.productChildren));console.log("[Plant Assignment] Product Children:",he);const me=(0,l.d4)((e=>e.droppedObject.plantObjectData.CAName));console.log("[plant Assignment] CAName:",me);const ve=(0,l.d4)((e=>e.droppedObject.plantObjectData.headers));console.log("[Plant Assignment] Headers are: ",ve);const fe=e=>{f(e)};if(console.log("Tanble Data is:",h),(0,o.useEffect)((()=>{h.length>=0&&g((e=>e+1))}),[h]),se.cardData&&se.initialDraggedData)var Ae,be,Ce=se.cardData["Maturity State"],we=null===(Ae=se.initialDraggedData)||void 0===Ae||null===(be=Ae.data)||void 0===be?void 0:be.items[0].objectType;const[je,xe]=(0,o.useState)(ge);console.log("Duplicate Initial Assigned Classes are:",je),(0,o.useEffect)((()=>{xe(ge),"Change Action"===we?G(re):E(ge)}),[ge,we,re]);const ye=async e=>{var t,a;let o={};const n=[];console.log("Table Data",e),console.log("Before DupInitialAssignedClasses:",je);let l=[],s=je.map((t=>{let a=(0,b.A)({},t);return e.forEach((e=>{var t;let n={};const s=e.Plant.replace("Plant","").replace(/\s+/g,""),r=null===(t=ue.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(a.title===e.Plant){(a.MBOM?"Make":"Buy")!==e.MBom&&(/^\d/.test(s)?(o["MBOM".concat(s)]="Make"===e.MBom,n.MBOMName="MBOM".concat(s),n.MBOMValue="Make"===e.MBom):(o["".concat(s,"MBOM")]="Make"===e.MBom,n.MBOMName="".concat(s,"MBOM"),n.MBOMValue="Make"===e.MBom),a.MBOM="Make"===e.MBom,n=(0,b.A)((0,b.A)({},n),{},{id:r,title:e.Plant,Type:"Update"}),l.push(n))}})),a}));e.forEach((e=>{if(!je.find((t=>t.title===e.Plant))){var t;const a=e.Plant.replace("Plant","").replace(/\s+/g,""),r=null===(t=ue.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(r){let t={id:r,title:e.Plant},i={};n.push(r),"Make"===e.MBom?(/^\d/.test(a)?(o["MBOM".concat(a)]=!0,i.MBOMName="MBOM".concat(a)):(o["".concat(a,"MBOM")]=!0,i.MBOMName="".concat(a,"MBOM")),t.MBOM=!0,i.MBOMValue=!0):(t.MBOM=!1,i.MBOMValue=!1),s.push(t),i=(0,b.A)((0,b.A)({},i),{},{id:r,title:e.Plant,Type:"New"}),l.push(i)}}}));let r=[];je.forEach((t=>{if(!e.some((e=>e.Plant===t.title))){var a;const e=null===(a=ue.find((e=>e.title===t.title)))||void 0===a?void 0:a.id;e&&r.push(e)}})),s=s.filter((e=>!r.includes(e.id))),console.log("Rows getting deleted rowstoDelete:",r),console.log("After DupInitialAssignedClasses:",s),console.log("Classes to be Classified:",n),console.log("Updated Items:",o),console.log();const i=await(0,O.i)(o,n,s,ve,null===(t=se.initialDraggedData)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.items[0].objectId,ue,he,we,r,l,ce);if(i.success){Y(!1),console.log("Save result:",i),""===i.Finalmessage||null==i.Finalmessage?ae(d.KF):oe((e=>{if(!e)return"An error occurred.";const t=e.split("\n").filter((e=>""!==e.trim()));return(0,v.jsxs)("div",{style:{userSelect:"text",cursor:"text",position:"relative",paddingRight:"40px"},children:[(0,v.jsx)("strong",{children:"Errors:"}),(0,v.jsx)("button",{onClick:()=>{const e=t.map((e=>"- ".concat(e))).join("\n");navigator.clipboard.writeText(e)},style:{position:"absolute",right:"10px",top:"-12px",background:"none",border:"none",cursor:"pointer",fontSize:"16px",color:"grey"},children:(0,v.jsx)(M.zU_,{size:12})}),(0,v.jsx)("ol",{children:t.map(((e,t)=>(0,v.jsx)("li",{children:e},t)))})]})})(i.Finalmessage),{autoClose:!1,closeOnClick:!1});let e=[];if(i.ErrorObj&&Object.keys(i.ErrorObj).length>0){let t=function(e,t,a,o){return console.log("Assigned Plants are:",t),console.log("unique Plants are:",o),e.forEach((e=>{"New"===e.type?(a=a.filter((t=>t.title!==e.title)),o.some((t=>t.title===e.title))||o.push(e)):"Update"===e.type&&(a=a.map((t=>t.title===e.title?(0,b.A)((0,b.A)({},t),{},{MBOM:"false"}):t)))})),{updatedAssignedClasses:a,uniquePlant:o}}(i.ErrorObj,P,s,pe);console.log("response is ",t),t&&(U(t.uniquePlant),e=t.updatedAssignedClasses)}else e=s;e&&(E(e),xe(e))}else Y(!1),oe(d.fm)};(0,o.useEffect)((()=>{de||s()}),[de,s]),(0,o.useEffect)((()=>{X(ie)}),[ie]);const Me=(0,o.useMemo)((()=>N("Change Action"===we?K:P,we)),[K,P,we]),Pe=(0,o.useMemo)((()=>(e=>e?e.map((e=>({"Available Plant":(null===e||void 0===e?void 0:e.title)||"N/A"}))):[])(F)),[F]);console.log("[Plant Assignment] Unique Table Data:",Pe),(0,o.useEffect)((()=>{Me.length>=0&&(console.log("New Table Data:",Me),f(Me),g((e=>e+1)))}),[Me]);const De=(0,o.useMemo)((()=>(e=>{if(!e||!e.cardData)return null;const t=e.cardData;let a={title:t.Title||"N/A",type:t.Type||"N/A","Maturity State":t["Maturity State"]||"N/A",owner:t.Owner||"N/A","Collaborative Space Title":t["Collaborative Space Title"]||"N/A",Description:t.Description||"N/A","Dropped Revision":t["Dropped Revision"]||"N/A","Latest Released Revision":t["Latest Released Revision"]||"N/A","CAD Format":t["CAD Format"]||"N/A",imageURL:t.imageURL||"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/snresources/images/icons/large/I_VPMNavProduct108x144.png"};return"Document"!==t.Type&&(a.EIN=t.EIN||"N/A",a["CAD Format"]=t["CAD Format"]||"N/A"),a})(se)),[se]);console.log(De),(0,o.useEffect)((()=>{$(!!De)}),[De]);const Ne=(0,o.useMemo)((()=>((e,t,a,o)=>(console.log("type here is: ",t),"Change Action"===t?[{accessorKey:"ItemName",header:"Item Name"},{accessorKey:"Plant",header:"Plant",cell:e=>{let{row:t}=e;return(0,v.jsx)(D,{plants:t.original.Plant,itemId:t.original.ItemId,isRemoveMode:a,handleRemovePlant:o})}}]:[{accessorKey:"Plant",header:"Plant"},{accessorKey:"Seq",header:"Seq"},{accessorKey:"MBom",header:"MBom",cell:t=>{let{row:a,getValue:o,table:n}=t;return(0,v.jsxs)("select",{value:o(),onChange:t=>{var o;if(!e)return;const l=t.target.value,s=n.getRowModel().rows.map((e=>e.id===a.id?(0,b.A)((0,b.A)({},e.original),{},{MBom:l}):e.original));null===(o=n.options.meta)||void 0===o||o.updateTableData(s)},disabled:!e,className:"appearance-none bg-transparent border-none cursor-pointer focus:outline-none",style:(0,b.A)((0,b.A)({},!1===e&&{appearance:"none"}),{},{width:"70%",padding:"5px",fontSize:"14px",color:"#333",background:"none",border:"none",textAlign:"left"}),onMouseOver:t=>{e&&(t.target.style.border="1px solid #ccc")},onMouseOut:t=>{e&&(t.target.style.border="none")},children:[(0,v.jsx)("option",{value:"Make",children:"Make"}),(0,v.jsx)("option",{value:"Buy",children:"Buy"})]})}},{accessorKey:"Status",header:"Status"},{accessorKey:"MFG Change",header:"MFG Change"},{accessorKey:"MFG Status",header:"MFG Status"},{accessorKey:"Change",header:"Change"},{accessorKey:"Change Status",header:"Change Status"},{accessorKey:"Oracle Template",header:"Oracle Template"},{accessorKey:"ERP Status",header:"ERP Status"},{accessorKey:"ERP Export",header:"ERP Export"},{accessorKey:"Lead Plant",header:"Lead Plant"},{accessorKey:"Sort Value",header:"Sort Value"}]))(me,we,Q,ne)),[me,we,Q,ne]),Se=(0,o.useMemo)((()=>S),[]);(0,o.useEffect)((()=>{console.log("[PlantAssignment] State Changes:",{loading:r,loadingParentDetails:ie,isDropped:de})}),[r,ie,de]);const Oe=(e,t)=>{const a=[],o=new Set;for(let s=1;s<e.length;s++){const t=e[s];if(t.length>=2&&t[0]&&t[1]){const e=t[0].toString().trim(),n=t[1].toString().includes(",")?t[1].toString().split(",").map((e=>e.trim())):[t[1].toString().trim()];a.push({name:e,plants:n}),n.forEach((e=>o.add(e)))}}const n=[];o.forEach((e=>{const a=t.find((t=>t.title.replace(/^Plant\s+/,"")===e||t.title===e));a&&n.push({PlantName:a.title.replace(/^Plant\s+/,""),PlantID:a.id})}));const l=t.length>0?t[0]:null;return{CAName:"TEMPKP22",CAOrganization:null===l||void 0===l?void 0:l.organization,CACollabSpace:null===l||void 0===l?void 0:l.collabspace,CADescription:null===l||void 0===l?void 0:l.description,CASeverity:"Low",CAOwner:null===l||void 0===l?void 0:l.owner,Items:a,ParentPlants:n}},Ee=async(e,t)=>{console.log("Headers for Manufacturing CA API:",t);const a=await async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};console.log("Fetching URL:",e),console.log("Method is:",a),t&&console.log("Request Body:",JSON.stringify(t,null,2));try{const n=await(0,q.A)({url:e,method:a,headers:(0,b.A)((0,b.A)({},o),{},{"Content-Type":"application/json"}),data:t});return console.log("Response received:",n.data),n.data}catch(l){var n;throw console.error("Request failed:",(null===(n=l.response)||void 0===n?void 0:n.data)||l.message),l}}("https://jsonplaceholder.typicode.com/posts",e,"POST",t);return console.log("Manufacturing CA Response:",JSON.stringify(a)),a};return(0,v.jsxs)(v.Fragment,{children:[J&&(0,v.jsx)(u.A,{}),!de&&!r&&!W&&(0,v.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative"},children:[(0,v.jsx)(T,{}),(0,v.jsxs)("div",{style:{position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",gap:"10px",alignItems:"center"},children:[(0,v.jsx)(C.A.Group,{controlId:"formFileMultiple",children:(0,v.jsx)(C.A.Control,{type:"file",multiple:!0,onChange:async e=>{console.log("[handleFileChange] Function triggered");const a=await(0,_.I)();console.log("handlefile change Headers:",a);const o=[{id:"B56EF85DED292C0066E35FC2000136B3",name:"Class-OI000186152-00000133",title:"Plant MVO",classUsage:"Definition",description:"Master Validation Org - Oracle",type:"General Class",state:"Active",modified:"3/26/2025 2:07:16 PM",created:"9/12/2024 9:40:48 PM",revision:"-",owner:"Cornel Gazdaru",organization:"Company Name",collabspace:"Micro Motion"},{id:"B56EF85DED292C0066E35FEE000136B5",name:"Class-OI000186152-00000134",title:"Plant MMB",classUsage:"Definition",description:"Boulder Factory - Oracle",type:"General Class",state:"Active",modified:"3/26/2025 2:07:20 PM",created:"9/12/2024 9:41:35 PM",revision:"-",owner:"Cornel Gazdaru",organization:"Company Name",collabspace:"Micro Motion"},{id:"B56EF85DED292C0066E36019000136B7",name:"Class-OI000186152-00000135",title:"Plant MMC",classUsage:"Definition",description:"Chihuahua Factory - Oracle",type:"General Class",state:"Active",modified:"3/26/2025 6:57:08 AM",created:"9/12/2024 9:42:07 PM",revision:"-",owner:"Cornel Gazdaru",organization:"Company Name",collabspace:"Micro Motion"}];if(console.log("[handleFileChange] allPlants data handlefile change:",o),Array.isArray(o)){const e=o.map((e=>e.title));console.log("[handleFileChange] Extracted Plant Titles:",e)}else console.log("[handleFileChange] allPlants is not an array or is undefined");const l=e.target.files,s=["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],r=Array.from(l).filter((e=>!s.includes(e.type)&&!e.name.toLowerCase().endsWith(".xls")&&!e.name.toLowerCase().endsWith(".xlsx")));if(r.length>0)return oe("Only Excel files (.xls, .xlsx) can be uploaded"),void(e.target.value="");const i=l[0],c=new FileReader;c.onload=async e=>{const l=new Uint8Array(e.target.result),s=k.LF(l,{type:"array"}),r=s.SheetNames[0],i=s.Sheets[r],c=k.Wp.sheet_to_json(i,{header:1});if(console.log("Parsed Excel Data:",c),0===c.length)return void oe("File is empty");const d=Oe(c,o);console.log("[handleFileChange] Manufacturing CA Body:",d);const u=await Ee(d,a);console.log("[handleFileChange] Manufacturing CA API Response:",u);const p=c[0].map((e=>null===e||void 0===e?void 0:e.toString().trim().toLowerCase()));if(console.log("Normalized Headers:",p),"item"!==p[0]||"plants"!==p[1])return void oe("File headers are incorrect. Expected headers: 'Item' and 'Plants'");const g=o.map((e=>e.title.replace("Plant ","").trim()));console.log("Valid Plant Titles:",g);const h=[];for(let t=1;t<c.length;t++){const e=c[t],a=e[0],o=e[1];if(!a&&o&&h.push({rowNumber:t+1,columnName:"Item",errorDescription:"Items can't be empty"}),a&&!o&&h.push({rowNumber:t+1,columnName:"Plants",errorDescription:"Plants value is missing"}),o){const e=o.split(",").map((e=>e.trim()));console.log("Row ".concat(t+1," Plant Values:"),e),e.forEach((e=>{g.includes(e)||h.push({rowNumber:t+1,columnName:"Plants",errorDescription:"Invalid plant value: ".concat(e)})}))}}if(console.log("Validation Errors:",h),h.length>0){const e=h.map((e=>"Row ".concat(e.rowNumber,': "').concat(e.columnName,'" value ').concat(e.errorDescription)));console.log("[plantAssignment.jsx] Formatted Errors:",e),n(e),t(!0)}else ae("File uploaded successfully with no errors")},c.onerror=()=>{oe("Failed to read the file. Please try again.")},c.readAsArrayBuffer(i)}})}),(0,v.jsx)(w.A,{variant:"outline-primary",onClick:()=>{R&&console.log("Files submitted:",R)},style:{cursor:R?"pointer":"not-allowed",opacity:R?1:.5},children:"Create Manufacturing CA"})]})]}),de&&(0,v.jsxs)(v.Fragment,{children:[r&&(0,v.jsx)(u.A,{}),(0,v.jsx)("div",{className:"content-wrapper py-3 border-bottom",children:(0,v.jsxs)("div",{className:"d-flex ",children:[(0,v.jsx)("div",{className:" p-0 pt-4",children:(0,v.jsx)(j.A,{src:"https://thewhitechamaleon.github.io/testrapp/images/home.png",alt:"home-icon",className:"home-icon",onClick:()=>{s(),te((0,p.Rr)(!1)),te((0,p.um)({cardData:{},parentDetails:[],versions:[],initialDraggedData:[]})),te((0,p.Lq)({allPlants:[],initialAssignedPlants:[],uniquePlants:[],productChildren:[],CAName:!1,headers:{}})),f([]),$(!1)}})}),De&&(0,v.jsx)(y.A,{data:De})]})}),W?(0,v.jsx)("div",{className:"loading-indicator mt-5",children:(0,v.jsx)(u.A,{})}):(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"wrapper-cta",children:[(0,v.jsx)(I,{uniquedata:Pe,data:h,uniqueColumn:Se,CAName:me,onAddPlant:e=>{console.log("Data Received"),H(e),console.log("[Plant Assignment] Table data",h),console.log("Added Data from Toolbar",e),f((t=>[...e.map((e=>{let{title:t}=e,a=(0,A.A)(e,z);return(0,b.A)({Plant:t},a)})),...t])),g((e=>e+1))},addedPlant:e=>{console.log("The data received from Child is:",e);const t=Pe.filter((t=>!e.find((e=>e===t["Available Plant"]))));if(console.log("Updated Table Data after unique:",t),t){const e=t.map((e=>({title:e["Available Plant"]})));console.log(e),U(e)}},onSave:async()=>{console.log("OnSave is Called with the TableData",h),Y(!0),await ye(h)},onRemove:async()=>{if("Change Action"===we)console.log("Remove is clicked for Chnage Action"),ee(!0);else if(console.log("Selected Table Rows:",le),console.log("handleRemove is Called with the TableData",h),le.length>0){const e=le.map((e=>e.Plant));console.log("Selected Titles:",e);const t=e.map((e=>({title:e})));console.log("Removed Titles:",t);const a=h.filter((t=>!e.includes(t.Plant)));console.log("updateTableData",fe),fe&&(f(a),g((e=>e+1))),U((e=>[...e,...t]))}else alert("Please select at least one row to remove.")},state:Ce}),(0,v.jsx)(x.A,{data:h,columns:Ne,meta:{updateTableData:fe},widgetType:"Plant_Assignment_Widget"},i)]})})]}),(0,v.jsx)(L.A,{show:e,onHide:()=>t(!1),errors:a})]})};let K=null;function G(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let a=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");a||(a=document.createElement("div"),a.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(a):document.body.appendChild(a)),K||(K=n.createRoot(a)),K.render((0,v.jsxs)(l.Kq,{store:s.A,children:[(0,v.jsx)(f,{}),(0,v.jsx)(U,{}),(0,v.jsx)(r.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}!function(){if(window.parent&&window.parent.document){let e=window.parent.document.createElement("script");e.textContent='\n    function listenForRefreshClicks() {\n      // console.log("\ud83c\udf0d [Parent] Listening for manual refresh clicks...");\n\n      document.body.addEventListener("click", function (event) {\n        let refreshButton = event.target.closest("#refresh"); // Check if refresh was clicked\n\n        if (refreshButton) {\n          // console.log("\u2705 [Parent] User clicked Refresh!");\n          sessionStorage.setItem("userClickedRefresh", "true"); // Store flag\n          // console.log("Stored Flag:", sessionStorage.getItem("userClickedRefresh"));\n        }\n      }, true);\n    }\n\n    // \u2705 Ensure event listener is added even if DOM is already loaded\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", listenForRefreshClicks);\n    } else {\n      listenForRefreshClicks();\n    }\n  ',window.parent.document.body.appendChild(e)}else console.warn("\u26a0\ufe0f [index.js] Unable to inject script\u2014parent window not accessible.")}()}}]);
//# sourceMappingURL=947.257bf1bd.chunk.js.map