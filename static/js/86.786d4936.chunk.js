"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[86],{6075:(e,t,a)=>{a.d(t,{A:()=>l});a(5043);var n=a(4005),o=a(579);const l=e=>{let{variant:t="info",message:a,show:l=!0,className:s=""}=e;return l?(0,o.jsx)(n.A,{variant:t,className:s,children:a}):null}},6313:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);var n=a(4104),o=a(4282),l=a(579);const s=e=>{let{show:t,onHide:a,title:s,children:r,footerButtons:i}=e;return(0,l.jsxs)(n.A,{show:t,onHide:a,size:"lg",centered:!0,children:[(0,l.jsx)(n.A.Header,{closeButton:!0,children:(0,l.jsx)(n.A.Title,{children:s||"Modal Title"})}),(0,l.jsx)(n.A.Body,{children:r}),(0,l.jsx)(n.A.Footer,{children:i?i.map(((e,t)=>(0,l.jsx)(o.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,l.jsx)(o.A,{variant:"secondary",onClick:a,children:"Close"})})]})}},3353:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(5043),o=a(6313),l=a(7348),s=a(6075),r=a(579);const i=e=>{let{errors:t}=e;const a=(0,n.useMemo)((()=>{const e=t.reduce(((e,t)=>{const a=t.match(/Row (\d+):/),n=t.match(/"([^"]*)" (?:is required|value)/),o=t.split(": ").slice(1).join(": "),l=a?a[1]:"N/A",s=n?n[1]:t.includes("Collaborative Space","Quantity")?"Collaborative Space":"N/A";return e[l]||(e[l]={rowNumber:l,columns:[],errors:[]}),e[l].columns.push(s),e[l].errors.push(o||t),e}),{});return Object.values(e).sort(((e,t)=>Number(e.rowNumber)-Number(t.rowNumber)))}),[t]),o=new l.jS({fixedWidth:!0,defaultHeight:50}),i=e=>{let{key:t,index:n,style:s,parent:i}=e;const c=a[n];return(0,r.jsx)(l.dl,{cache:o,columnIndex:0,rowIndex:n,parent:i,children:(0,r.jsxs)("div",{style:s,className:"table-row",children:[(0,r.jsx)("div",{className:"table-cell",style:{width:"15%"},children:c.rowNumber}),(0,r.jsx)("div",{className:"table-cell",style:{width:"25%"},children:c.columns.map(((e,t)=>(0,r.jsx)("div",{children:e},t)))}),(0,r.jsx)("div",{className:"table-cell",style:{width:"60%"},children:(0,r.jsx)("ul",{className:"error-list",children:c.errors.map(((e,t)=>(0,r.jsx)("li",{children:e},t)))})})]})},t)};return(0,r.jsxs)("div",{className:"error-popup-container",children:[(0,r.jsx)(s.A,{variant:"danger",message:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("strong",{children:"\u26a0\ufe0f Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve these issues, update the spreadsheet and re-import. (",a.length," errors found)"]}),className:"custom-alert"}),(0,r.jsxs)("div",{className:"table-wrapper",children:[(0,r.jsxs)("div",{className:"static-header",children:[(0,r.jsx)("div",{className:"header-cell",style:{width:"15%"},children:"Row Number"}),(0,r.jsx)("div",{className:"header-cell",style:{width:"25%"},children:"Column Name"}),(0,r.jsx)("div",{className:"header-cell",style:{width:"60%"},children:"Error Description"})]}),(0,r.jsx)("div",{className:"table-container",children:(0,r.jsx)(l.t$,{children:e=>{let{height:t,width:n}=e;return(0,r.jsx)(l.B8,{width:n,height:t,rowCount:a.length,rowHeight:o.rowHeight,deferredMeasurementCache:o,rowRenderer:i})}})})]})]})},c=e=>{let{show:t,onHide:a,errors:n}=e;return console.log("[ContentErrorsModal.jsx] errors:",n),(0,r.jsx)(o.A,{show:t,onHide:a,title:"Content Errors",footerButtons:[{label:"Close",variant:"danger",onClick:a}],children:(0,r.jsx)(i,{errors:n})})}},3526:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var n=a(5043),o=a(4391),l=(a(2342),a(9555),a(3003)),s=a(2670),r=a(2115),i=(a(8421),a(4050),a(9959),a(174)),c=a(2725),d=a(3277),u=a(6713),p=a(5645),g=a(867),m=a(314);const h=()=>{const{showErrorToast:e}=(0,c.A)(),{handlePlantAssignment:t}=(0,g.A)(),a=(0,l.d4)((e=>e.droppedObject.isDropped)),o=(0,l.d4)((e=>e.droppedObject.loading)),s=(0,l.wA)(),r=(0,n.useCallback)((async a=>{try{const l=await(0,m.Sj)({dataItems:a});if(l.success){s((0,p.um)({cardData:l.data.cardData}));const e=l.data.cardData;var n,o;if(console.log("[Dragged Items are]",e),s((0,p.Rr)(!0)),l)await t(e["Collaborative Space"],e["Maturity State"],null===(n=a[0])||void 0===n?void 0:n.objectId,null===(o=a[0])||void 0===o?void 0:o.objectType)}else e(d.wX)}catch(l){console.error("[FetchObjectDetails] Error fetching details:",l),e(d.wX)}finally{s((0,p.r1)(!1))}}),[s,t]),i=(0,n.useCallback)((async t=>{console.log("[handleDrop] handleDrop called with dataItems:",t);try{if(t&&t.length>0){var a;const n=null===(a=t[0])||void 0===a?void 0:a.objectType;if(!["VPMReference","Document","Raw_Material","Change Action"].includes(n))return void e(d.Zo);s((0,p.Rr)(!0)),console.log("[handleDrop] \ud83d\udd04 Force setting `loading = true`..."),s((0,p.r1)(!1)),setTimeout((()=>s((0,p.r1)(!0))),0),await r(t)}else console.warn("[handleDrop] No data items to process.")}catch(n){console.error("[Drop] Error in handleDrop:",n),s((0,p.r1)(!1)),console.log("[handleDrop] Error in handleDrop, setting loading to false"),e(d.nz)}}),[r,e]);return{initializeDroppableArea:(0,n.useCallback)((()=>{a?console.log("[initializeDroppableArea] \u23f3 isDropped is already true. Skipping reset."):(console.log("[initializeDroppableArea] \ud83d\ude80 Resetting isDropped to false..."),s((0,p.Rr)(!1)));const t=setInterval((()=>{const a=document.querySelector(".droppable-container");a&&(clearInterval(t),(0,m.pn)(a,i,s,e))}),100);return()=>clearInterval(t)}),[i,s]),loading:o,handleDrop:i}};var v=a(579);const f=()=>{const{handleDrop:e}=h(),{showSuccessToast:t,showErrorToast:a}=(0,c.A)(),[o,l]=(0,n.useState)(!1);console.log("---[WidgetLifecycle]--- starts");return(0,n.useEffect)((()=>{if(!window.widget)return;console.trace("[WidgetLifecycle] \ud83d\udd04 `onRefresh` was called from:"),window.widget.addEvent("onRefresh",(async()=>{var n,o;const r=(new Error).stack.split("\n"),c=sessionStorage.getItem("userClickedRefresh");if((e=>e.some((e=>e.includes("UWA_Frame_Alone.js")||e.includes("bundle-min.js"))))(r)&&!c)return void console.warn("[WidgetLifecycle] \u26d4 Auto-refresh detected. Ignoring unwanted `onRefresh`.");sessionStorage.removeItem("userClickedRefresh"),l(!0);const u=s.A.getState().droppedObject.droppedObjectData.initialDraggedData;if(null===u||void 0===u||null===(n=u.data)||void 0===n||null===(o=n.items)||void 0===o||!o.length)return console.error("[WidgetLifecycle] \u26a0\ufe0f `initialDraggedData` is missing or invalid:",u),void l(!1);try{await(0,i.M)(u.data.items,e)}catch(p){console.error("[WidgetLifecycle] \u274c Error during refresh:",p),a(d.H6)}finally{l(!1),t(d._l)}}))}),[]),o?(0,v.jsx)(u.A,{}):null};var A=a(45),b=a(9379),w=(a(4816),a(2691)),j=a(4282),x=a(3637),C=a(768),y=a(759),P=a(184),M=a(3825);const N=e=>{let{plants:t=[],itemId:a,isRemoveMode:n,handleRemovePlant:o}=e;return console.log("PlantRenderer received plants:",t),null!==t&&void 0!==t&&t.length?(0,v.jsx)(v.Fragment,{children:t.map((e=>(0,v.jsxs)("span",{style:{marginRight:"8px",display:"inline-flex",alignItems:"center"},children:[e.PlantName,n&&(0,v.jsx)(M.zhF,{size:16,style:{cursor:"pointer",color:"red"},onClick:()=>o(a,e.PlantID)})]},e.PlantID)))}):"N/A"},D=(e,t)=>e?e.map((e=>"Change Action"===t?{ItemName:(null===e||void 0===e?void 0:e.ItemTitle)||"N/A",Plant:(null===e||void 0===e?void 0:e.ItemPlants)||[],ItemId:(null===e||void 0===e?void 0:e.ItemId)||"N/A"}:{Plant:(null===e||void 0===e?void 0:e.title)||"N/A",Seq:(null===e||void 0===e?void 0:e.Seq)||"1",Status:"Current","MFG Change":(null===e||void 0===e?void 0:e.MFGChange)||"N/A","MFG Status":(null===e||void 0===e?void 0:e.MFGStatus)||"N/A",Change:(null===e||void 0===e?void 0:e.Change)||"N/A","Change Status":(null===e||void 0===e?void 0:e.ChangeStatus)||"N/A","Oracle Template":e.OracleTemplate||"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":!1,MBom:e.MBOM?"Make":"Buy","Sort Value":""})):[],S=[{accessorKey:"Available Plant",header:"Available Plant"}];var O=a(3127),R=a(5362),E=a(6313);a(3728);const I=e=>{let{onAddPlant:t,addedPlant:a,onSave:o,onRemove:l,uniquedata:s,uniqueColumn:r,CAName:i,state:u,type:p}=e;const{showWarningToast:g}=(0,c.A)(),[m,h]=(0,n.useState)([]),[f,A]=(0,n.useState)([]),[b,w]=(0,n.useState)(!1),j=(0,n.useRef)();console.log("[Unique Table Data]:",s);return console.log("Added item data:",f),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"d-flex cta-absolute",children:[(0,v.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{"Change Action"===p||i?w(!0):g("RELEASED"===u?d.sL:d.Ru)},children:"Add Plant"}),(0,v.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{o&&i?o():g("RELEASED"===u?d.EZ:d.nX)},children:"Save"}),(0,v.jsx)("button",{className:"btn btn-outline-danger btn-lg m-2",onClick:()=>{l&&l()},children:"Remove"})]}),(0,v.jsx)(E.A,{show:b,onHide:()=>w(!1),title:"Available Plant",footerButtons:[{label:"Add",variant:"primary",onClick:()=>{var e;null===(e=j.current)||void 0===e||e.addPlant(),w(!1)}},{label:"Close",variant:"danger",onClick:()=>w(!1)}],children:(0,v.jsx)("div",{className:"modal-body",children:(0,v.jsx)(R.A,{ref:j,data:s,columns:r,CAName:i,addedItem:e=>{if(console.log(e),h(e),e.length>0){const n=e.map((e=>({title:e,Seq:"1",Status:"Current","MFG Change":"N/A","MFG Status":"N/A",Change:"N/A","Change Status":"N/A","Oracle Template":"N/A","ERP Status":"Active","ERP Export":"Yes","Lead Plant":"false",MBom:"Buy","Sort Value":""})));t(n),A(n),a(e)}},state:u})})})]})};a(4119);var T=a(1397),k=a(4675);const B=()=>{const{handleDrop:e}=h(),{performSearch:t}=(0,k.A)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"droppable-container mt-4",children:[(0,v.jsx)(x.A,{style:{width:"90px",height:"90px"},src:"https://thewhitechamaleon.github.io/testrapp/images/drag.png",alt:"Data Collect",className:"search-icon"}),(0,v.jsx)("span",{className:"drag-and-drop-text",children:"Drag and Drop"}),(0,v.jsxs)("div",{className:"divider-container",children:[(0,v.jsx)("hr",{className:"divider"}),(0,v.jsx)("span",{className:"divider-text",children:"or"}),(0,v.jsx)("hr",{className:"divider"})]}),(0,v.jsx)(T.A,{onSearch:a=>{t(a,{title:"Search",role:"",mode:"furtive",default_with_precond:!0,precond:'flattenedtaxonomies:"types/VPMReference" OR flattenedtaxonomies:"types/Raw_Material" OR flattenedtaxonomies:"types/Document"',show_precond:!1,multiSel:!1,idcard_activated:!1,select_result_max_idcard:!1,itemViewClickHandler:"",search_delegation:"3dsearch"},(t=>{console.log("Selected objects:",t),console.log("objectId: selectedObjects[0].id",t[0].id),t&&t.length>0&&t[0].id?e([{objectId:t[0].id,objectType:t[0]["ds6w:type_value"]}]):console.warn("No objectId found in selected objects")}))}})]})})};var F=a(3353),L=a(9332),q=a(2268),_=a(1238),K=a(9722),z=a(6047);const G=async e=>{const t=await async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";console.log("Fetching URL:",e),console.log("Method is:"),console.log("Request Body:",JSON.stringify(t,null,2));try{const n=await(0,K.A)({url:e,method:a,headers:{"Content-Type":"application/json"},data:t});return console.log("Response received:",n.data),n.data}catch(n){throw console.error("Request failed:",n),n}}("https://emr-product-datahub-server-sap-stage.azurewebsites.net/flowDownCA/createMFGCA",e,"POST");return console.log("Manufacturing CA Response:",JSON.stringify(t)),t},U=async(e,t,a)=>{try{const t=await(0,q.I)(),n=(0,b.A)({"Content-Type":"application/json"},t);let o=window.widget.getValue("Credentials");console.log("credentials createMFGCA",o);const l=o.split(".");console.log("credentialsParts",l);const s=l[1];console.log("Company Name:",s);const r=l[2];console.log("Collab Space:",r);const i=await(0,L.g)([r],n,"");console.log("Fetched allPlantsData:",i);const c=await(0,z.ui)("GET","https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/modeler/pno/person?current=true","",n);console.log("Logged in person Response:",JSON.stringify(c));const d=c.output.name;console.log("Logged in person Name:",d);const u=await(async(e,t,a,n,o)=>{const l=[],s=new Set;for(let i=1;i<e.length;i++){const t=e[i];if(t.length>=2&&t[0]&&t[1]){const e=t[0].toString().trim(),a=t[1].toString().includes(",")?t[1].toString().split(",").map((e=>e.trim())):[t[1].toString().trim()];l.push({name:e,plants:a}),a.forEach((e=>s.add(e)))}}const r=[];return s.forEach((e=>{const a=t.find((t=>t.title.replace(/^Plant\s+/,"")===e||t.title===e));a&&r.push({PlantName:a.title.replace(/^Plant\s+/,""),PlantID:a.id})})),{CATitle:"FromAutomation",CAOrganization:a,CACollabSpace:n,CAOwner:o,Items:l,ParentPlants:r}})(e,i,s,r,d);console.log("[processManufacturingCA] Manufacturing CA Body (JSON):",JSON.stringify(u,null,2));const p=await G(u);console.log("[processManufacturingCA] Manufacturing CA API Response:",p),a("Manufacturing CA created successfully!")}catch(n){console.error("Error in processManufacturingCA:",n),t("Failed to create Manufacturing CA. Please try again.")}},V=["title"],H=()=>{const[e,t]=(0,n.useState)(null),[a,o]=(0,n.useState)(!1),[s,r]=(0,n.useState)([]),{initializeDroppableArea:i,loading:g}=h(),[m,f]=(0,n.useState)(0),[M,R]=(0,n.useState)([]),[E,T]=(0,n.useState)([]),[k,L]=(0,n.useState)(null),[q,K]=(0,n.useState)([]),[z,G]=(0,n.useState)([]),[H,W]=(0,n.useState)([]),[J,X]=(0,n.useState)(!1),[Y,Z]=(0,n.useState)(!1),[Q,$]=(0,n.useState)(!1),[ee,te]=(0,n.useState)(!1),ae=(0,l.wA)(),{showSuccessToast:ne,showErrorToast:oe}=(0,c.A)(),le=(0,n.useCallback)(((e,t)=>{G((a=>a.map((a=>a.ItemId===e?(0,b.A)((0,b.A)({},a),{},{ItemPlants:a.ItemPlants.filter((e=>e.PlantID!==t))}):a))))}),[G]),se=e=>{const t=e.map((e=>({itemName:e.ItemName,plantName:e.Plant})));return console.log("Extracted Plant Data:",t),t};console.log("Table Data after Adding:",M);const re=(0,l.d4)((e=>e.droppedObject.selectedTableRows)),ie=(0,l.d4)((e=>e.droppedObject.droppedObjectData));console.log("droppedObjectData",ie);const ce=(0,l.d4)((e=>e.droppedObject.CAItemObjectDetails.CAItemDetails));console.log("The CA Item Details are:",ce);const de=(0,l.d4)((e=>e.droppedObject.CAItemObjectDetails.CAallPlants));console.log("For CA all Plants are: ",de);const ue=(0,l.d4)((e=>e.droppedObject.CAItemObjectDetails.CAheaders));console.log("caheaders plant assign",ue);const pe=(0,l.d4)((e=>e.droppedObject.loadingParentDetails));console.log("Parents Loading State:",pe);const ge=(0,l.d4)((e=>e.droppedObject.plantObjectData.proposedChanges));console.log("Proposed Changes are:",ge);const me=(0,l.d4)((e=>e.droppedObject.isDropped)),he=(0,l.d4)((e=>e.droppedObject.plantObjectData.allPlants));console.log("[PlantAssignment] plant object data: ",he);const ve=(0,l.d4)((e=>e.droppedObject.plantObjectData.uniquePlants));console.log("[Plant Assignment] Unique Plants:",ve);const fe=(0,l.d4)((e=>e.droppedObject.plantObjectData.initialAssignedPlants));console.log("The Assigned Plants are:",fe);const Ae=(0,l.d4)((e=>e.droppedObject.plantObjectData.productChildren));console.log("[Plant Assignment] Product Children:",Ae);const be=(0,l.d4)((e=>e.droppedObject.plantObjectData.CAName));console.log("[plant Assignment] CAName:",be);const we=(0,l.d4)((e=>e.droppedObject.plantObjectData.headers));console.log("[Plant Assignment] Headers are: ",we);const je=(0,n.useCallback)((()=>{let e=de.map((e=>e.title.replace(/^Plant /,"")));const t=0===re.length?M:re;let a=[...new Set(t.flatMap((e=>{var t;return(null===(t=e.Plant)||void 0===t?void 0:t.map((e=>e.PlantName)))||[]})))],n=e.filter((e=>!a.includes(e))).map((e=>({title:e})));return console.log("Unique table plants are :",n),n}),[de,M,re]),xe=e=>{R(e)};if(console.log("Tanble Data is:",M),(0,n.useEffect)((()=>{M.length>=0&&f((e=>e+1))}),[M]),ie.cardData&&ie.initialDraggedData)var Ce,ye,Pe=ie.cardData["Maturity State"],Me=null===(Ce=ie.initialDraggedData)||void 0===Ce||null===(ye=Ce.data)||void 0===ye?void 0:ye.items[0].objectType;const[Ne,De]=(0,n.useState)(fe);console.log("Duplicate Initial Assigned Classes are:",Ne),(0,n.useEffect)((()=>{De(fe),"Change Action"===Me?G(ce):T(fe)}),[fe,Me,ce]),(0,n.useEffect)((()=>{K("Change Action"===Me?je():ve)}),[je,ve,Me]);const Se=async e=>{var t,a;let n={};const o=[];console.log("Table Data",e),console.log("Before DupInitialAssignedClasses:",Ne);let l=[],s=Ne.map((t=>{let a=(0,b.A)({},t);return e.forEach((e=>{var t;let o={};const s=e.Plant.replace("Plant","").replace(/\s+/g,""),r=null===(t=he.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(a.title===e.Plant){(a.MBOM?"Make":"Buy")!==e.MBom&&(/^\d/.test(s)?(n["MBOM".concat(s)]="Make"===e.MBom,o.MBOMName="MBOM".concat(s),o.MBOMValue="Make"===e.MBom):(n["".concat(s,"MBOM")]="Make"===e.MBom,o.MBOMName="".concat(s,"MBOM"),o.MBOMValue="Make"===e.MBom),a.MBOM="Make"===e.MBom,o=(0,b.A)((0,b.A)({},o),{},{id:r,title:e.Plant,Type:"Update"}),l.push(o))}})),a}));e.forEach((e=>{if(!Ne.find((t=>t.title===e.Plant))){var t;const a=e.Plant.replace("Plant","").replace(/\s+/g,""),r=null===(t=he.find((t=>t.title===e.Plant)))||void 0===t?void 0:t.id;if(r){let t={id:r,title:e.Plant},i={};o.push(r),"Make"===e.MBom?(/^\d/.test(a)?(n["MBOM".concat(a)]=!0,i.MBOMName="MBOM".concat(a)):(n["".concat(a,"MBOM")]=!0,i.MBOMName="".concat(a,"MBOM")),t.MBOM=!0,i.MBOMValue=!0):(t.MBOM=!1,i.MBOMValue=!1),s.push(t),i=(0,b.A)((0,b.A)({},i),{},{id:r,title:e.Plant,Type:"New"}),l.push(i)}}}));let r=[];Ne.forEach((t=>{if(!e.some((e=>e.Plant===t.title))){var a;const e=null===(a=he.find((e=>e.title===t.title)))||void 0===a?void 0:a.id;e&&r.push(e)}})),s=s.filter((e=>!r.includes(e.id))),console.log("Rows getting deleted rowstoDelete:",r),console.log("After DupInitialAssignedClasses:",s),console.log("Classes to be Classified:",o),console.log("Updated Items:",n),console.log();const i=await(0,O.i)(n,o,s,we,null===(t=ie.initialDraggedData)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.items[0].objectId,he,Ae,Me,r,l,ge);if(i.success){Z(!1),console.log("Save result:",i),""===i.Finalmessage||null==i.Finalmessage?ne(d.KF):oe((e=>{if(!e)return"An error occurred.";const t=e.split("\n").filter((e=>""!==e.trim()));return(0,v.jsxs)("div",{style:{userSelect:"text",cursor:"text",position:"relative",paddingRight:"40px"},children:[(0,v.jsx)("strong",{children:"Errors:"}),(0,v.jsx)("button",{onClick:()=>{const e=t.map((e=>"- ".concat(e))).join("\n");navigator.clipboard.writeText(e)},style:{position:"absolute",right:"10px",top:"-12px",background:"none",border:"none",cursor:"pointer",fontSize:"16px",color:"grey"},children:(0,v.jsx)(P.zU_,{size:12})}),(0,v.jsx)("ol",{children:t.map(((e,t)=>(0,v.jsx)("li",{children:e},t)))})]})})(i.Finalmessage),{autoClose:!1,closeOnClick:!1});let e=[];if(i.ErrorObj&&Object.keys(i.ErrorObj).length>0){let t=function(e,t,a,n){return console.log("Assigned Plants are:",t),console.log("unique Plants are:",n),e.forEach((e=>{"New"===e.type?(a=a.filter((t=>t.title!==e.title)),n.some((t=>t.title===e.title))||n.push(e)):"Update"===e.type&&(a=a.map((t=>t.title===e.title?(0,b.A)((0,b.A)({},t),{},{MBOM:"false"}):t)))})),{updatedAssignedClasses:a,uniquePlant:n}}(i.ErrorObj,E,s,ve);console.log("response is ",t),t&&(K(t.uniquePlant),e=t.updatedAssignedClasses)}else e=s;e&&(T(e),De(e))}else Z(!1),oe(d.fm)};(0,n.useEffect)((()=>{me||i()}),[me,i]),(0,n.useEffect)((()=>{X(pe)}),[pe]);const Oe=(0,n.useMemo)((()=>D("Change Action"===Me?z:E,Me)),[z,E,Me]),Re=(0,n.useMemo)((()=>(e=>e?e.map((e=>({"Available Plant":(null===e||void 0===e?void 0:e.title)||"N/A"}))):[])(q)),[q]);console.log("[Plant Assignment] Unique Table Data:",Re),(0,n.useEffect)((()=>{Oe.length>=0&&(console.log("New Table Data:",Oe),R(Oe),f((e=>e+1)))}),[Oe]),(0,n.useEffect)((()=>{se(M)}),[M]);const Ee=(0,n.useMemo)((()=>(e=>{if(!e||!e.cardData)return null;const t=e.cardData;let a={title:t.Title||"N/A",type:t.Type||"N/A","Maturity State":t["Maturity State"]||"N/A",owner:t.Owner||"N/A","Collaborative Space Title":t["Collaborative Space Title"]||"N/A",Description:t.Description||"N/A","Dropped Revision":t["Dropped Revision"]||"N/A","Latest Released Revision":t["Latest Released Revision"]||"N/A","CAD Format":t["CAD Format"]||"N/A",imageURL:t.imageURL||"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/snresources/images/icons/large/I_VPMNavProduct108x144.png"};return"Document"!==t.Type&&(a.EIN=t.EIN||"N/A",a["CAD Format"]=t["CAD Format"]||"N/A"),a})(ie)),[ie]);console.log(Ee),(0,n.useEffect)((()=>{$(!!Ee)}),[Ee]);const Ie=(0,n.useMemo)((()=>((e,t,a,n)=>(console.log("type here is: ",t),"Change Action"===t?[{accessorKey:"ItemName",header:"Item Name"},{accessorKey:"Plant",header:"Plant",cell:e=>{let{row:t}=e;return(0,v.jsx)(N,{plants:t.original.Plant,itemId:t.original.ItemId,isRemoveMode:a,handleRemovePlant:n})}}]:[{accessorKey:"Plant",header:"Plant"},{accessorKey:"Seq",header:"Seq"},{accessorKey:"MBom",header:"MBom",cell:t=>{let{row:a,getValue:n,table:o}=t;return(0,v.jsxs)("select",{value:n(),onChange:t=>{var n;if(!e)return;const l=t.target.value,s=o.getRowModel().rows.map((e=>e.id===a.id?(0,b.A)((0,b.A)({},e.original),{},{MBom:l}):e.original));null===(n=o.options.meta)||void 0===n||n.updateTableData(s)},disabled:!e,className:"appearance-none bg-transparent border-none cursor-pointer focus:outline-none",style:(0,b.A)((0,b.A)({},!1===e&&{appearance:"none"}),{},{width:"70%",padding:"5px",fontSize:"14px",color:"#333",background:"none",border:"none",textAlign:"left"}),onMouseOver:t=>{e&&(t.target.style.border="1px solid #ccc")},onMouseOut:t=>{e&&(t.target.style.border="none")},children:[(0,v.jsx)("option",{value:"Make",children:"Make"}),(0,v.jsx)("option",{value:"Buy",children:"Buy"})]})}},{accessorKey:"Status",header:"Status"},{accessorKey:"MFG Change",header:"MFG Change"},{accessorKey:"MFG Status",header:"MFG Status"},{accessorKey:"Change",header:"Change"},{accessorKey:"Change Status",header:"Change Status"},{accessorKey:"Oracle Template",header:"Oracle Template"},{accessorKey:"ERP Status",header:"ERP Status"},{accessorKey:"ERP Export",header:"ERP Export"},{accessorKey:"Lead Plant",header:"Lead Plant"},{accessorKey:"Sort Value",header:"Sort Value"}]))(be,Me,ee,le)),[be,Me,ee,le]),Te=(0,n.useMemo)((()=>S),[]);(0,n.useEffect)((()=>{console.log("[PlantAssignment] State Changes:",{loading:g,loadingParentDetails:pe,isDropped:me})}),[g,pe,me]);return(0,v.jsxs)(v.Fragment,{children:[Y&&(0,v.jsx)(u.A,{}),!me&&!g&&!J&&(0,v.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",position:"relative"},children:[(0,v.jsx)(B,{}),(0,v.jsxs)("div",{style:{position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",gap:"10px",alignItems:"center"},children:[(0,v.jsx)(w.A.Group,{controlId:"formFileMultiple",children:(0,v.jsx)(w.A.Control,{type:"file",multiple:!0,onChange:e=>{(async(e,t,a,n,o,l,s)=>{console.log("[handleFileChange] Function triggered");const r=e.target.files,i=["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];if(Array.from(r).filter((e=>!i.includes(e.type)&&!e.name.toLowerCase().endsWith(".xls")&&!e.name.toLowerCase().endsWith(".xlsx"))).length>0)return n("Only Excel files (.xls, .xlsx) can be uploaded"),void(e.target.value="");const c=r[0],d=new FileReader;d.onload=async e=>{const r=new Uint8Array(e.target.result),i=_.LF(r,{type:"array"}),d=i.SheetNames[0],u=i.Sheets[d],p=_.Wp.sheet_to_json(u,{header:1});if(console.log("Parsed Excel Data:",p),0===p.length)return void n("File is empty");const g=p[0].map((e=>null===e||void 0===e?void 0:e.toString().trim().toLowerCase()));if(console.log("Normalized Headers:",g),"item"!==g[0]||"plants"!==g[1])return void n("File headers are incorrect. Expected headers: 'Item' and 'Plants'");const m=[];for(let t=1;t<p.length;t++){const e=p[t],a=e[0],n=e[1];!a&&n&&m.push({rowNumber:t+1,columnName:"Item",errorDescription:"Items can't be empty"}),a&&!n&&m.push({rowNumber:t+1,columnName:"Plants",errorDescription:"Plants value is missing"})}if(console.log("Validation Errors:",m),m.length>0){const e=m.map((e=>"Row ".concat(e.rowNumber,': "').concat(e.columnName,'" value ').concat(e.errorDescription)));console.log("[createMFGCA.js] Formatted Errors:",e),t(e),a(!0)}else o("File uploaded successfully with no errors"),l(p),s(c)},d.onerror=()=>{n("Failed to read the file. Please try again.")},d.readAsArrayBuffer(c)})(e,r,o,oe,ne,t,L)}})}),(0,v.jsx)(j.A,{variant:"outline-primary",onClick:async()=>{e?await U(e,oe,ne):oe("Please upload and validate a file before proceeding.")},style:{cursor:k?"pointer":"not-allowed",opacity:k?1:.5},children:"Create Manufacturing CA"})]})]}),me&&(0,v.jsxs)(v.Fragment,{children:[g&&(0,v.jsx)(u.A,{}),(0,v.jsx)("div",{className:"content-wrapper py-3 border-bottom",children:(0,v.jsxs)("div",{className:"d-flex ",children:[(0,v.jsx)("div",{className:" p-0 pt-4",children:(0,v.jsx)(x.A,{src:"https://thewhitechamaleon.github.io/testrapp/images/home.png",alt:"home-icon",className:"home-icon",onClick:()=>{i(),ae((0,p.Rr)(!1)),ae((0,p.um)({cardData:{},parentDetails:[],versions:[],initialDraggedData:[]})),ae((0,p.Lq)({allPlants:[],initialAssignedPlants:[],uniquePlants:[],productChildren:[],CAName:!1,headers:{}})),R([]),$(!1)}})}),Ee&&(0,v.jsx)(y.A,{data:Ee})]})}),J?(0,v.jsx)("div",{className:"loading-indicator mt-5",children:(0,v.jsx)(u.A,{})}):(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"wrapper-cta",children:[(0,v.jsx)(I,{uniquedata:Re,data:M,uniqueColumn:Te,CAName:be,onAddPlant:e=>{console.log("Data Received"),W(e),console.log("[Plant Assignment] Table data",M),console.log("Added Data from Toolbar",e),R((t=>[...e.map((e=>{let{title:t}=e,a=(0,A.A)(e,V);return(0,b.A)({Plant:t},a)})),...t])),f((e=>e+1))},addedPlant:e=>{console.log("The data received from Child is:",e);const t=Re.filter((t=>!e.find((e=>e===t["Available Plant"]))));if(console.log("Updated Table Data after unique:",t),t){const e=t.map((e=>({title:e["Available Plant"]})));console.log(e),K(e)}},onSave:async()=>{console.log("OnSave is Called with the TableData",M),se(M),Z(!0),await Se(M)},onRemove:async()=>{if("Change Action"===Me)console.log("Remove is clicked for Chnage Action"),te(!0);else if(console.log("Selected Table Rows:",re),console.log("handleRemove is Called with the TableData",M),re.length>0){const e=re.map((e=>e.Plant));console.log("Selected Titles:",e);const t=e.map((e=>({title:e})));console.log("Removed Titles:",t);const a=M.filter((t=>!e.includes(t.Plant)));console.log("updateTableData",xe),xe&&(R(a),f((e=>e+1))),K((e=>[...e,...t]))}else alert("Please select at least one row to remove.")},state:Pe,type:Me}),(0,v.jsx)(C.A,{data:M,columns:Ie,meta:{updateTableData:xe},widgetType:"Plant_Assignment_Widget"},m)]})})]}),(0,v.jsx)(F.A,{show:a,onHide:()=>o(!1),errors:s})]})};let W=null;function J(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let a=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");a||(a=document.createElement("div"),a.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(a):document.body.appendChild(a)),W||(W=o.createRoot(a)),W.render((0,v.jsxs)(l.Kq,{store:s.A,children:[(0,v.jsx)(f,{}),(0,v.jsx)(H,{}),(0,v.jsx)(r.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}!function(){if(window.parent&&window.parent.document){let e=window.parent.document.createElement("script");e.textContent='\n    function listenForRefreshClicks() {\n      // console.log("\ud83c\udf0d [Parent] Listening for manual refresh clicks...");\n\n      document.body.addEventListener("click", function (event) {\n        let refreshButton = event.target.closest("#refresh"); // Check if refresh was clicked\n\n        if (refreshButton) {\n          // console.log("\u2705 [Parent] User clicked Refresh!");\n          sessionStorage.setItem("userClickedRefresh", "true"); // Store flag\n          // console.log("Stored Flag:", sessionStorage.getItem("userClickedRefresh"));\n        }\n      }, true);\n    }\n\n    // \u2705 Ensure event listener is added even if DOM is already loaded\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", listenForRefreshClicks);\n    } else {\n      listenForRefreshClicks();\n    }\n  ',window.parent.document.body.appendChild(e)}else console.warn("\u26a0\ufe0f [index.js] Unable to inject script\u2014parent window not accessible.")}()}}]);
//# sourceMappingURL=86.786d4936.chunk.js.map