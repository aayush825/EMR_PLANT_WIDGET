"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[746],{1358:(e,t,s)=>{s.d(t,{A:()=>r});s(5043);var o=s(8012),a=(s(4119),s(3637)),n=s(1397),l=s(4675),i=s(579);const r=()=>{const{handleDrop:e}=(0,o.A)(),{performSearch:t}=(0,l.A)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"droppable-container mt-4",children:[(0,i.jsx)(a.A,{style:{width:"90px",height:"90px"},src:"https://thewhitechamaleon.github.io/testrapp/images/drag.png",alt:"Data Collect",className:"search-icon"}),(0,i.jsx)("span",{className:"drag-and-drop-text",children:"Drag and Drop"}),(0,i.jsxs)("div",{className:"divider-container",children:[(0,i.jsx)("hr",{className:"divider"}),(0,i.jsx)("span",{className:"divider-text",children:"or"}),(0,i.jsx)("hr",{className:"divider"})]}),(0,i.jsx)(n.A,{onSearch:s=>{t(s,{title:"Search",role:"",mode:"furtive",default_with_precond:!0,precond:'flattenedtaxonomies:"types/VPMReference" OR flattenedtaxonomies:"types/Raw_Material" OR flattenedtaxonomies:"types/Document"',show_precond:!1,multiSel:!1,idcard_activated:!1,select_result_max_idcard:!1,itemViewClickHandler:"",search_delegation:"3dsearch"},(t=>{t&&t.length>0&&t[0].id?e([{objectId:t[0].id,objectType:t[0]["ds6w:type_value"]}]):console.warn("No objectId found in selected objects")}))}})]})})}},5362:(e,t,s)=>{s.d(t,{A:()=>c});var o=s(5043),a=s(8931),n=s(7111),l=s(3277),i=s(2725),r=s(579);const c=(0,o.forwardRef)(((e,t)=>{let{data:s,columns:c,addedItem:d,CAName:u,state:p}=e;const{showWarningToast:g}=(0,i.A)(),[m,h]=(0,o.useState)({});(0,o.useEffect)((()=>{h({})}),[s]);const v=()=>{const e=b.getSelectedRowModel().rows.map((e=>e.original["Available Plant"]));0!==e.length?(d(e),h({})):g(l.e1)};(0,o.useImperativeHandle)(t,(()=>({addPlant:v})));const f=(0,o.useMemo)((()=>[{id:"select",cell:e=>{let{row:t}=e;return(0,r.jsx)("input",{type:"checkbox",className:"form-check-input",checked:t.getIsSelected(),onChange:t.getToggleSelectedHandler()})}},...c]),[c]),b=(0,a.N4)({data:s,columns:f,state:{rowSelection:m},enableRowSelection:!0,onRowSelectionChange:h,getCoreRowModel:(0,n.HT)()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{type:"button",className:"btn btn-outline-primary me-3",onClick:()=>{b.getRowModel().rows.forEach((e=>e.toggleSelected(!0)))},children:"Select All"}),(0,r.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:()=>{b.getRowModel().rows.forEach((e=>e.toggleSelected(!1)))},children:"Deselect All"})]}),b.getRowModel().rows.length>0?(0,r.jsx)("div",{className:"overflow-auto",style:{maxHeight:"60vh"},children:b.getRowModel().rows.map((e=>(0,r.jsxs)("div",{className:"p-3 border-bottom d-flex align-items-center",style:{backgroundColor:e.getIsSelected()?"#d5e8f2":"inherit"},children:[(0,r.jsx)("div",{className:"me-3",children:(0,a.Kv)(e.getVisibleCells()[0].column.columnDef.cell,e.getVisibleCells()[0].getContext())}),(0,r.jsx)("div",{children:e.original[c[0].accessorKey]})]},e.id)))}):(0,r.jsx)("p",{className:"text-muted p-3",children:"No data available"})]})}))},7119:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var o=s(5043),a=s(4391),n=(s(2342),s(9555),s(3003)),l=s(2670),i=s(2115),r=(s(8421),s(4050),s(9959),s(9379)),c=s(1358),d=s(3637),u=s(6713),p=s(768),g=s(759),m=s(5645),h=s(579);var v=s(2725),f=(s(3127),s(3277)),b=s(4428);s(5362);const w=e=>{let{editableColumns:t,selectedRows:s,onApplyUpdate:a,valueOptions:n,onClose:l}=e;const[i,r]=(0,o.useState)(""),[c,d]=(0,o.useState)(""),u=e=>{i&&c?(a(i,c,e?"all":"selected"),l()):alert("Please select a column and a value.")};return(0,h.jsxs)("div",{className:"dropdown-menu p-3 ",style:{width:"300px",display:"block"},children:[(0,h.jsx)("label",{children:"Select Column:"}),(0,h.jsxs)("select",{className:"form-select mb-2",onChange:e=>r(e.target.value),value:i,children:[(0,h.jsx)("option",{value:"",children:"-- Select Column --"}),t.map((e=>(0,h.jsx)("option",{value:e,children:e},e)))]}),(0,h.jsx)("label",{children:"Select Value:"}),(0,h.jsxs)("select",{className:"form-select mb-2",value:c,onChange:e=>d(e.target.value),disabled:!i,children:[(0,h.jsx)("option",{value:"",children:"-- Select Value --"}),n.map((e=>(0,h.jsx)("option",{value:e,children:e},e)))]}),(0,h.jsx)("button",{className:"btn btn-outline-success me-2 mb-2",onClick:()=>u(!1),disabled:!s.length,style:{cursor:s.length?"pointer":"not-allowed"},children:"Apply to Selected"}),(0,h.jsx)("button",{className:"btn btn-outline-primary me-2 mb-2",onClick:()=>u(!0),children:"Apply to All"}),(0,h.jsx)("button",{className:"btn btn-outline-danger me-2 mb-2",onClick:l,children:"Close"})]})},y=e=>{let{onSave:t,state:s,selectedRows:a,tableData:n,onMassUpdate:l,type:i,latestRevision:r,droppedRevision:c}=e;const{showWarningToast:d}=(0,v.A)(),[u,p]=(0,o.useState)(!1);return(0,h.jsxs)("div",{className:"d-flex flex-column cta-absolute",children:[(0,h.jsxs)("div",{className:"d-flex",children:[(0,h.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{"Document"!==i&&r!==c?d(f.Vv):t()},children:"Save"}),(0,h.jsx)("button",{className:"btn btn-outline-primary btn-lg m-2",onClick:()=>"Document"!==i&&r!==c?d(f.Vv):p((e=>!e)),children:"Mass Update"})]}),u&&(0,h.jsx)("div",{className:"mt-2",children:(0,h.jsx)(w,{editableColumns:["Print On Purchase Order Required","Print On Work Order Required","Work Order Document Required","Print On report Order Required","SAP/JDE"],selectedRows:a,onApplyUpdate:(e,t,s)=>{l("selected"===s?a:n,e,t)},valueOptions:["Yes","No"],onClose:()=>p(!1)})})]})};var R=s(6047);const D=()=>{const{initializeDroppableArea:e,loading:t}=(0,b.A)(),[s,a]=(0,o.useState)(0),[l,i]=(0,o.useState)([]),[w,D]=(0,o.useState)(!1),[S,A]=(0,o.useState)(!1),[C,j]=(0,o.useState)(!1),[x,O]=(0,o.useState)([]),[N,P]=(0,o.useState)([]),T=(0,n.wA)(),{showSuccessToast:I,showErrorToast:E}=(0,v.A)();(0,o.useEffect)((()=>{x.length&&i(x.map((e=>(0,r.A)((0,r.A)({},e),{},{changedCells:{}}))))}),[x]);console.log("Table Data after Adding:",l);const k=(0,n.d4)((e=>e.droppedObject.selectedTableRows)),M=(0,n.d4)((e=>e.droppedObject.droppedObjectData));console.log("droppedObjectData",M);const L=(0,n.d4)((e=>e.droppedObject.loadingParentDetails));console.log("Parents Loading State:",L);const q=(0,n.d4)((e=>e.droppedObject.plantObjectData.proposedChanges));console.log("Proposed Changes are:",q);const F=(0,n.d4)((e=>e.droppedObject.isDropped)),W=(0,n.d4)((e=>e.droppedObject.BOSObjectData));console.log("Bos data in BOS Widget is:",W);const _=(0,n.d4)((e=>e.droppedObject.BOSObjectData.specDocument));console.log("BOSObjectData",_);const B=e=>{const t=e.map((e=>{const t=x.find((t=>t.Title===e.Title&&t.Revision===e.Revision));if(!t)return(0,r.A)((0,r.A)({},e),{},{changedCells:{}});const s={};return Object.keys(e).forEach((o=>{e[o]!==t[o]&&(s[o]=!0)})),(0,r.A)((0,r.A)({},e),{},{changedCells:s})}));i(t)};if(console.log("Table Data is:",l),(0,o.useEffect)((()=>{l.length>=0&&a((e=>e+1))}),[l]),M.cardData&&M.initialDraggedData)var U,V,J=M.cardData["Maturity State"],z=null===(U=M.initialDraggedData)||void 0===U||null===(V=U.data)||void 0===V?void 0:V.items[0].objectType;(0,o.useEffect)((()=>{F||e()}),[F,e]),(0,o.useEffect)((()=>{D(L)}),[L]);const K=(0,o.useMemo)((()=>((e,t)=>e?e.map((e=>{let s={Title:(null===e||void 0===e?void 0:e.childTitle)||"N/A",Revision:(null===e||void 0===e?void 0:e.childRevision)||"1",State:(null===e||void 0===e?void 0:e.childState)||"N/A","Print On Purchase Order Required":e.PrintOnPurchaseOrderRequired||"No","Print On Work Order Required":e.PrintOnWorkOrderRequired||"No","Work Order Document Required":e.WorkOrderDocumentRequired||"No","Print On report Order Required":e.PrintOnReportOrderRequired||"No","SAP/JDE":e["SAP/JDE"]||"No"};return"Document"===t&&(s.IsLatest=(null===e||void 0===e?void 0:e.childLatest)||"FALSE"),s})):[])(_,z)),[_,z]);(0,o.useEffect)((()=>{O(K)}),[K]),(0,o.useEffect)((()=>{K.length>=0&&(console.log("New Table Data:",K),i(K),a((e=>e+1)))}),[K]);const H=(0,o.useMemo)((()=>(e=>{if(!e||!e.cardData)return null;const t=e.cardData;let s={title:t.Title||"N/A",type:t.Type||"N/A","Maturity State":t["Maturity State"]||"N/A",owner:t.Owner||"N/A","Collaborative Space Title":t["Collaborative Space Title"]||"N/A",Description:t.Description||"N/A","Dropped Revision":t["Dropped Revision"]||"N/A","Latest Released Revision":t["Latest Released Revision"]||"N/A","CAD Format":t["CAD Format"]||"N/A",imageURL:t.imageURL||"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/snresources/images/icons/large/I_VPMNavProduct108x144.png"};return"Document"!==t.Type&&(s.EIN=t.EIN||"N/A",s["CAD Format"]=t["CAD Format"]||"N/A"),s})(M)),[M]);console.log(H),(0,o.useEffect)((()=>{j(!!H)}),[H]);const Y=(0,o.useMemo)((()=>((e,t,s)=>{const o=[{accessorKey:"Title",header:"Title"},{accessorKey:"Revision",header:"Revision"},{accessorKey:"State",header:"State"}];"Document"===e&&o.push({accessorKey:"IsLatest",header:"Is Latest"});const a=["Print On Purchase Order Required","Print On Work Order Required","Work Order Document Required","Print On report Order Required","SAP/JDE"].map((o=>({accessorKey:o,header:o,cell:a=>{let{row:n,getValue:l,table:i}=a;return("Document"===e?"FALSE"===n.original.IsLatest:t&&t!==s)?(0,h.jsx)("span",{children:l()}):(0,h.jsxs)("select",{value:l(),onChange:e=>{var t;const s=e.target.value,a=i.getRowModel().rows.map((e=>e.id===n.id?(0,r.A)((0,r.A)({},e.original),{},{[o]:s}):e.original));null===(t=i.options.meta)||void 0===t||t.updateTableData(a)},className:"appearance-none bg-transparent border-none cursor-pointer focus:outline-none",style:{width:"70%",padding:"5px 0",fontSize:"14px",background:"none",border:"none",textAlign:"left"},onMouseOver:e=>e.target.style.border="1px solid #ccc",onMouseOut:e=>e.target.style.border="none",children:[(0,h.jsx)("option",{value:"Yes",children:"Yes"}),(0,h.jsx)("option",{value:"No",children:"No"})]})}})));return[...o,...a]})(z,null===M||void 0===M?void 0:M.cardData["Latest Revision"],null===M||void 0===M?void 0:M.cardData["Dropped Revision"])),[z,null===M||void 0===M?void 0:M.cardData]);return(0,h.jsxs)(h.Fragment,{children:[S&&(0,h.jsxs)("div",{className:"loading-overlay",children:[(0,h.jsx)(u.A,{}),(0,h.jsx)("p",{children:"Saving..."})]}),!F&&!t&&!w&&(0,h.jsx)(c.A,{}),t&&(0,h.jsx)(u.A,{}),F&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"content-wrapper py-3 border-bottom",children:(0,h.jsxs)("div",{className:"d-flex ",children:[(0,h.jsx)("div",{className:" p-0 pt-4",children:(0,h.jsx)(d.A,{src:"https://thewhitechamaleon.github.io/testrapp/images/home.png",alt:"home-icon",className:"home-icon",onClick:()=>{e(),T((0,m.Rr)(!1)),T((0,m.um)({cardData:{},parentDetails:[],versions:[],initialDraggedData:[]})),T((0,m.Lq)({allPlants:[],initialAssignedPlants:[],uniquePlants:[],productChildren:[],CAName:!1,headers:{}})),i([]),j(!1)}})}),H&&(0,h.jsx)(g.A,{data:H,widgetType:"bosWidget"})]})}),w?(0,h.jsx)("div",{className:"loading-indicator mt-5",children:(0,h.jsx)(u.A,{})}):(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"wrapper-cta",children:[(0,h.jsx)(y,{onSave:async()=>{console.log("Table Data is:",l),A(!0),console.log("Type of Parent:",z);let e,t,s,o,a=[];"Document"===z?(a={SpecName:M.cardData.Name,SpecRevision:M.cardData["Dropped Revision"],SpecState:M.cardData["Maturity State"],SpecID:M.cardData.ID},e="ItemName",t="ItemRevision",s="ItemState",o="ItemID"):(console.log("It's a physical Product"),a={ItemName:M.cardData.Name,ItemRevision:M.cardData["Dropped Revision"],ItemState:M.cardData["Maturity State"],ItemID:M.cardData.ID},e="SpecName",t="SpecRevision",s="SpecState",o="SpecID");const n=l.map((n=>{let l=_.find((e=>e.childTitle===n.Title&&e.childRevision===n.Revision));return(0,r.A)((0,r.A)({[e]:l?l.childName:null,[t]:n.Revision,[s]:l?l.childState:null,[o]:l?l.ID:null},a),{},{PrintOnPurchaseOrderRequired:n["Print On Purchase Order Required"],PrintOnWorkOrderRequired:n["Print On Work Order Required"],WorkOrderDocumentRequired:n["Work Order Document Required"],PrintOnReportOrderRequired:n["Print On report Order Required"],"SAP/JDE":n["SAP/JDE"]})}));n.sort(((e,t)=>e.SpecName!==t.SpecName?e.SpecName.localeCompare(t.SpecName):Number(e.SpecRevision)-Number(t.SpecRevision))),console.log("Formatted Data:",n);const i=await(0,R.Fd)("POST","https://emr-product-datahub-server-sap-stage.azurewebsites.net/bosAttribute/createORupdateDetails",n);console.log("the response from node API is:",i),200===i.status?(I(f.KF),O(l),A(!1)):(E(f.fm),A(!1))},type:z,latestRevision:null===M||void 0===M?void 0:M.cardData["Latest Revision"],droppedRevision:null===M||void 0===M?void 0:M.cardData["Dropped Revision"],selectedRows:k,state:J,tableData:N,onMassUpdate:async(e,t,s)=>{console.log("Data when the Mass Update is Clicked:",e),console.log("Columns to Change:",t),console.log("Value after change:",s);const o=e.map((e=>(0,r.A)((0,r.A)({},e),{},{[t]:s})));console.log("Updated Data is:",o),console.log("Table Data is:",l);const a=l.map((e=>{const t=o.find((t=>t.Title===e.Title&&t.Revision===e.Revision));return t||e}));console.log("Merged Data:",a),B(a)}}),(0,h.jsx)(p.A,{data:l,columns:Y,meta:{updateTableData:B},type:z,latestRevision:null===M||void 0===M?void 0:M.cardData["Latest Revision"],droppedRevision:null===M||void 0===M?void 0:M.cardData["Dropped Revision"],widgetType:"Bos_Attribute_Widget",onSelectableRowsChange:P},s)]})})]})]})};var S=s(174);const A=()=>{const{handleDrop:e}=(0,b.A)(),{showSuccessToast:t,showErrorToast:s}=(0,v.A)(),[a,n]=(0,o.useState)(!1);console.log("---[WidgetLifecycle]--- starts");return(0,o.useEffect)((()=>{if(!window.widget)return;console.trace("[WidgetLifecycle] \ud83d\udd04 `onRefresh` was called from:"),window.widget.addEvent("onRefresh",(async()=>{var o,a;const i=(new Error).stack.split("\n"),r=sessionStorage.getItem("userClickedRefresh");if((e=>e.some((e=>e.includes("UWA_Frame_Alone.js")||e.includes("bundle-min.js"))))(i)&&!r)return void console.warn("[WidgetLifecycle] \u26d4 Auto-refresh detected. Ignoring unwanted `onRefresh`.");sessionStorage.removeItem("userClickedRefresh"),n(!0);const c=l.A.getState().droppedObject.droppedObjectData.initialDraggedData;if(null===c||void 0===c||null===(o=c.data)||void 0===o||null===(a=o.items)||void 0===a||!a.length)return console.error("[WidgetLifecycle] \u26a0\ufe0f `initialDraggedData` is missing or invalid:",c),void n(!1);try{await(0,S.M)(c.data.items,e)}catch(d){console.error("[WidgetLifecycle] \u274c Error during refresh:",d),s(f.H6)}finally{n(!1),t(f._l)}}))}),[]),a?(0,h.jsx)(u.A,{}):null};s(8885);let C=null;function j(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let s=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");s||(s=document.createElement("div"),s.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(s):document.body.appendChild(s)),C||(C=a.createRoot(s)),C.render((0,h.jsxs)(n.Kq,{store:l.A,children:[(0,h.jsx)(A,{}),(0,h.jsx)(D,{}),(0,h.jsx)(i.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}!function(){if(window.parent&&window.parent.document){let e=window.parent.document.createElement("script");e.textContent='\n    function listenForRefreshClicks() {\n      // console.log("\ud83c\udf0d [Parent] Listening for manual refresh clicks...");\n\n      document.body.addEventListener("click", function (event) {\n        let refreshButton = event.target.closest("#refresh"); // Check if refresh was clicked\n\n        if (refreshButton) {\n          // console.log("\u2705 [Parent] User clicked Refresh!");\n          sessionStorage.setItem("userClickedRefresh", "true"); // Store flag\n          // console.log("Stored Flag:", sessionStorage.getItem("userClickedRefresh"));\n        }\n      }, true);\n    }\n\n    // \u2705 Ensure event listener is added even if DOM is already loaded\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", listenForRefreshClicks);\n    } else {\n      listenForRefreshClicks();\n    }\n  ',window.parent.document.body.appendChild(e)}else console.warn("\u26a0\ufe0f [index.js] Unable to inject script\u2014parent window not accessible.")}()},3127:(e,t,s)=>{s.d(t,{Bx:()=>i,Eo:()=>r,iu:()=>c});var o=s(9379),a=s(9722),n=s(6047);const l=(e,t)=>{console.log("Data Received for ID Extraction:",e),console.log("[PlantAssignment] All Plants Data:",t);const s=e.map((e=>{const s=e.title.replace(/\s+/g,"").replace(/plant/i,""),o=t.find((e=>e.title.replace(/\s+/g,"").replace(/plant/i,"").toLowerCase()===s.toLowerCase()));return o?o.id:null})).filter((e=>null!==e));return console.log("Extracted IDs (newClasses):",s),s},i=async(e,t,s,o)=>{console.log("allPlants",e),console.log("removedTitles",t);const a=l(t,e);if(a.length>0){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/declassifyProductToClass",t={id:s,type:o,classes:a};const l=await(0,n.Fd)(e,t,"POST");console.log("declassifyResponse:",JSON.stringify(l))}},r=async(e,t,s,o,a,i)=>{console.log("Data Received for handleAddData:",e);const r=l(e,t);console.log("newClasses before filtering:",r),console.log("productChilds",i);const c=i.filter((e=>{if("released"===e.state.toLowerCase()){return!a.find((t=>t.identifier===e.id&&"modify"===t.action.toLowerCase()))}return!1}));console.log("NotPropagableChilds ARE:",c);const d=[];r.forEach((e=>{const t=c.filter((t=>!t.classes.includes(e))).map((e=>e.name)).join(", ");""!==t&&"Undefined"!==t&&d.push({ClassID:e,Childs:t})})),console.log("error object savetable",d);let u="";d.forEach((e=>{var s;const o=null===(s=t.find((t=>t.id===e.ClassID)))||void 0===s?void 0:s.title,a="Unable to classify product in ".concat(o," due to unclassified child items: ").concat(e.Childs);u+="".concat(a,"\n")})),console.log("Final Message:\n",u);const p=r.filter((e=>!d.some((t=>t.ClassID===e))));if(console.log("Filtered New Classes (excluding errored ones):",p),p.length>0){const e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/classifyProductToClass",t={id:s,type:o,classes:p,mode:"classifyParent"};console.log("Classify API Body:",t);try{const s=await(0,n.Fd)(e,t,"POST");console.log("Classify Response:",JSON.stringify(s))}catch(g){console.error("Error in Classify API Call:",g)}}return{success:!0,message:"Data saved successfully",ErrorObject:d,Finalmessage:u}},c=async(e,t,s,l,i,r,c,d,u,p,g)=>{try{const e="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";console.log("[Save Data] Starting data saving process..."),console.log("Type in Save Table Data:",d),console.log("Final aRRAY IS inside Save:",p),console.log("Proposed Changes in Save",g);const t=await(0,n.fV)(),s=async(e,s,a)=>(console.log("Fetching URL:",e),console.log("Request Body:",JSON.stringify(s,null,2)),new Promise(((n,i)=>{t.authenticatedRequest(e,{method:a,headers:(0,o.A)((0,o.A)({},l),{},{"Content-Type":"application/json"}),data:JSON.stringify(s),type:"json",onComplete:e=>{console.log("Response received:",e),n(e)},onFailure:e=>{console.error("Request failed:",e),i(e)}})}))),r=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";console.log("Fetching URL:",e),console.log("Method is:"),console.log("Request Body:",JSON.stringify(t,null,2));try{const n=await(0,a.A)({url:e,method:s,headers:(0,o.A)((0,o.A)({},l),{},{"Content-Type":"application/json"}),data:t});return console.log("Response received:",n.data),n.data}catch(n){throw console.error("Request failed:",n),n}};let h=c.filter((e=>{if(console.log("Processing prodChild:",e),"released"===e.state.toLowerCase()){console.log("Released prodChild:",e);const t=g.find((t=>t.identifier===e.id&&"modify"===t.action.toLowerCase()));return console.log("Matching change for prodChild:",t),!t}return console.log("prodChild state is not 'released':",e.state),!1}));console.log("NotPropagableChilds ARE :",h);let v=[];p.forEach((e=>{if(e.MBOMValue){let t=[];h.forEach((s=>{s.classes.includes(e.id)||t.push({childId:s.id,childName:s.name})})),t.length>0&&v.push({id:e.id,title:e.title,childs:t,type:e.Type})}}));let f="";console.log("ErrorObj IS",v),v.forEach((e=>{let t="";if(Array.isArray(e.childs)&&e.childs.every((e=>e.childName))){const s=e.childs.map((e=>e.childName)).join(", ");console.log("Chilld Titles are",s),t="new"!==e.type.toLowerCase()?"".concat(e.title," MBOM can't be Make due to unclassified child items: ").concat(s):"Unable to classify product ".concat(e.title," due to unclassified child items: ").concat(s),console.log("Message is:",t)}else t="Invalid child data for ".concat(e.title,".");f+="".concat(t,"\n")})),console.log(v),console.log("Concatenated Messages:\n",f);let b=p.filter((e=>"new"===e.Type.toLowerCase()&&!v.some((t=>t.id===e.id)))).map((e=>e.id));console.log("New Classes are:",b);let w={};p.forEach((e=>{!v.some((t=>t.id===e.id))&&("update"===e.Type.toLowerCase()||"new"===e.Type.toLowerCase()&&e.MBOMValue)&&(w[e.MBOMName]=e.MBOMValue)})),console.log("Update body is:",w);let y=p.filter((e=>e.MBOMValue&&!v.some((t=>t.id===e.id)))).map((e=>e.id));if(console.log("Propogateable classes are",y),b.length>0){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/classifyProductToClass",t={id:i,type:d,classes:b,mode:"classifyParent"};const s=await r(e,t,"POST");console.log("classifyResponse:",JSON.stringify(s))}if(Object.keys(w).length>0){var m;const t="".concat(e,"/resources/v1/modeler/dslib/dslib:ClassifiedItem/").concat(i),o=await s(t,"","GET");console.log("CStamp Response:",o);let a=(null===(m=o.member[0])||void 0===m?void 0:m.cestamp)||"";w.cestamp=a;const n="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/updateClassificationAttribute?id=".concat(i);await r(n,w,"PATCH"),console.log("Updated database successfully.")}if(y.length>0&&c.length>0&&"VPMReference"===d){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/classifyProductToClass",t={id:i,type:d,classes:y,childs:c,mode:"classifychilds"};const s=await r(e,t,"POST");console.log("child classifyResponse:",JSON.stringify(s))}if(u.length>0){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/declassifyProductToClass",t={id:i,type:d,classes:u};const s=await r(e,t,"POST");console.log("declassifyResponse:",JSON.stringify(s))}return console.log("All classification API calls completed successfully."),{success:!0,message:"Data saved successfully",ErrorObj:v,Finalmessage:f}}catch(h){return console.error("Error occurred:",h),{success:!1,message:"Failed to save data",error:h}}}}}]);
//# sourceMappingURL=746.c62eb8b2.chunk.js.map