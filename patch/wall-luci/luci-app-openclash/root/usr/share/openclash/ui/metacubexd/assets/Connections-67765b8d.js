import{k as G,c as t,K as $e,i as n,F as K,O as te,a9 as Te,aa as Ne,ab as Ee,ac as Oe,ad as ke,S as Ce,b as F,d as f,a5 as X,a3 as ze,a4 as Ge,N as ve,q as _e,ae as ne,af as Ke,ag as Me,ah as Re,_ as ce,h as U,j as je,p as Le,a7 as Ae,A as E,g as L,t as A,ai as Ve,aj as He,M as Be,P as Q,ak as de,al as ue,am as qe,an as Ue,D as We,e as Ze}from"./vendor-0f159d83.js";import{c as Ye,g as Je,a as Xe,b as Qe,d as et,e as tt,f as W,r as nt}from"./index-5463170e.js";import{u as Z,B as O,d as st,f as rt,g as at,T as lt,h as H,i as pe,j as Se,M as xe,k as se,m as ot,n as m,o as ge,p as me,q as fe,r as it,v as ct,w as dt,x as ut}from"./index-26b8b771.js";import{C as ee}from"./ConfigTitle-5a7980bc.js";import{f as gt}from"./global-b979f772.js";const mt=f('<form><div class="join flex"><select name="sourceIP" class="select join-item select-bordered"><option></option></select><input name="tagName" class="input join-item input-bordered min-w-0 flex-1" placeholder="name">'),ft=f('<option class="badge">'),ht=f('<div class="sortable"><div class="flex cursor-grab justify-between py-2"><span class="select-none"></span><input type="checkbox" class="toggle">'),bt=f("<div>"),$t=f('<div class="flex flex-col gap-4"><div><select class="select select-bordered w-full"></select></div><div><div class="flex flex-col gap-4"><div class="flex flex-col gap-2"></div></div></div><div>'),Ct=f("<option>"),vt=f('<div class="badge badge-primary w-full items-center justify-between gap-2 py-4"><span class="truncate"> (<!>)'),_t=()=>{const r=X.object({tagName:X.string().nonempty(),sourceIP:X.string().nonempty()}),[g]=Z(),{form:a,reset:C}=ze({extend:Ge({schema:r}),onSubmit:({tagName:h,sourceIP:x})=>{pe(v=>v.some(o=>o.tagName===h||o.sourceIP===x)?v:[...v,{tagName:h,sourceIP:x}]),C()}});return(()=>{const h=mt(),x=h.firstChild,v=x.firstChild;return v.firstChild,v.nextSibling,ve(a,h,()=>a),n(v,t(ne,{get each(){return _e.uniq(se().map(({metadata:{sourceIP:o}})=>o)).sort().filter(o=>!H().some(({sourceIP:d})=>d===o))},children:o=>(()=>{const d=ft();return n(d,o),F(()=>d.value=o()),d})()}),null),n(x,t(O,{type:"submit",class:"join-item",get children(){return g("tag")}}),null),h})()},pt=r=>{const[g]=Z(),[a,C]=G(null),h=({draggable:o})=>C(o.id),x=({draggable:o,droppable:d})=>{if(o&&d){const _=r.order,b=_.indexOf(o.id),I=_.indexOf(d.id);if(b!==I){const S=_.slice();S.splice(I,0,...S.splice(b,1)),r.onOrderChange(S)}}},v=({key:o})=>{const d=Ke(o),[_]=Me();return(()=>{const b=ht(),I=b.firstChild,S=I.firstChild,k=S.nextSibling;return ve(d,b,()=>!0),n(S,()=>g(o)),k.addEventListener("change",c=>{r.onVisibleChange({...r.visible,[o]:c.target.checked})}),F(c=>{const y=!!d.isActiveDraggable,D=!!_.active.draggable;return y!==c._v$&&b.classList.toggle("opacity-25",c._v$=y),D!==c._v$2&&b.classList.toggle("transition-transform",c._v$2=D),c},{_v$:void 0,_v$2:void 0}),F(()=>k.checked=r.visible[o]),b})()};return t(xe,{ref:o=>{var d;return(d=r.ref)==null?void 0:d.call(r,o)},get icon(){return t($e,{size:24})},get title(){return g("connectionsSettings")},get action(){return t(O,{class:"btn-neutral btn-sm",onClick:()=>{r.onOrderChange(st),r.onVisibleChange(rt)},get children(){return g("reset")}})},get children(){const o=$t(),d=o.firstChild,_=d.firstChild,b=d.nextSibling,I=b.firstChild,S=I.firstChild,k=b.nextSibling;return n(d,t(ee,{withDivider:!0,get children(){return g("tableSize")}}),_),_.addEventListener("change",c=>at(c.target.value)),n(_,t(K,{get each(){return Object.values(lt)},children:c=>(()=>{const y=Ct();return y.value=c,n(y,()=>g(c)),y})()})),n(b,t(ee,{withDivider:!0,get children(){return g("tagClientSourceIPWithName")}}),I),n(I,t(_t,{}),S),n(S,t(K,{get each(){return H()},children:({tagName:c,sourceIP:y})=>(()=>{const D=vt(),R=D.firstChild,P=R.firstChild,M=P.nextSibling;return M.nextSibling,n(R,c,P),n(R,y,M),n(D,t(O,{class:"btn-circle btn-ghost btn-xs",onClick:()=>pe(j=>j.filter(Y=>Y.tagName!==c)),get icon(){return t(te,{size:12})}}),null),D})()})),n(k,t(ee,{withDivider:!0,get children(){return g("sort")}}),null),n(k,t(Te,{onDragStart:h,onDragEnd:x,collisionDetector:Ne,get children(){return[t(Ee,{}),t(Oe,{get ids(){return r.order},get children(){return t(K,{get each(){return r.order},children:c=>t(v,{key:c})})}}),t(ke,{get children(){return t(Ce,{get when(){return a()},get children(){const c=bt();return n(c,()=>g(a())),c}})}})]}}),null),F(()=>_.value=Se()),o}})},St=f("<pre><code>"),xt=r=>{const[g]=Z();return t(xe,{ref:a=>{var C;return(C=r.ref)==null?void 0:C.call(r,a)},get icon(){return t($e,{size:24})},get title(){return g("connectionsDetails")},get children(){return t(Ce,{get when(){return r.selectedConnectionID},get children(){const a=St(),C=a.firstChild;return n(C,()=>JSON.stringify(se().find(({id:h})=>h===r.selectedConnectionID),null,2)),a}})}})};var It=async r=>{typeof r=="string"?await navigator.clipboard.writeText(r):await navigator.clipboard.write(r)};const he=f('<div class="flex h-4 items-center">'),yt=f('<div class="flex h-full flex-col gap-2"><div class="flex w-full flex-wrap items-center gap-2"><div class="flex items-center gap-2"><div class="tabs-boxed tabs gap-2"></div><select class="select select-bordered select-primary select-sm w-full max-w-full flex-1 sm:select-md"><option value=""></option></select></div><div class="join flex flex-1 items-center md:flex-1"><input type="search" class="input join-item input-primary input-sm min-w-0 flex-1 sm:input-md"></div></div><div class="overflow-x-auto whitespace-nowrap rounded-md bg-base-300"><table><thead class="sticky top-0 z-10 h-8"></thead><tbody>'),wt=f('<button><span></span><div class="badge badge-sm">'),Ft=f("<option>"),Dt=f("<tr>"),Pt=f('<th class="bg-base-200"><div><div>'),Tt=f('<button class="cursor-pointer">'),Nt=f('<tr class="hover:!bg-primary hover:text-primary-content">'),Et=f('<td class="py-2">'),Ot=f("<button><div></div><div></div><div>(<!>)");var V=function(r){return r[r.activeConnections=0]="activeConnections",r[r.closedConnections=1]="closedConnections",r}(V||{});const be=(r,g,a,C)=>{const h=nt(r.getValue(g),a);return C({itemRank:h}),h.passed},Rt=()=>{let r,g;const[a]=Z(),[C,h]=G(V.activeConnections),{activeConnections:x,closedConnections:v,paused:o,setPaused:d}=ot(),[_,b]=G(""),[I,S]=G(),k=[{header:()=>a("details"),enableGrouping:!1,enableSorting:!1,enableColumnFilter:!1,enableGlobalFilter:!1,accessorKey:m.Details,cell:({row:e})=>(()=>{const i=he();return n(i,t(O,{class:"btn-circle btn-xs",onClick:()=>{S(e.original.id),g==null||g.showModal()},get icon(){return t(Re,{size:"16"})}})),i})()},{header:()=>a("close"),enableGrouping:!1,enableSorting:!1,enableColumnFilter:!1,enableGlobalFilter:!1,accessorKey:m.Close,cell:({row:e})=>(()=>{const i=he();return n(i,t(O,{class:"btn-circle btn-xs",onClick:()=>ge(e.original.id),get icon(){return t(te,{size:"16"})}})),i})()},{header:()=>a("ID"),enableGrouping:!1,accessorKey:m.ID,accessorFn:e=>e.id},{header:()=>a("type"),accessorKey:m.Type,accessorFn:e=>`${e.metadata.type}(${e.metadata.network})`},{header:()=>a("process"),accessorKey:m.Process,accessorFn:e=>e.metadata.process||e.metadata.processPath.replace(/^.*[/\\](.*)$/,"$1")||"-"},{header:()=>a("host"),accessorKey:m.Host,accessorFn:e=>`${e.metadata.host?e.metadata.host:e.metadata.destinationIP}:${e.metadata.destinationPort}`},{header:()=>a("sniffHost"),accessorKey:m.SniffHost,accessorFn:e=>e.metadata.sniffHost||"-"},{header:()=>a("rules"),accessorKey:m.Rule,accessorFn:e=>e.rulePayload?`${e.rule} :: ${e.rulePayload}`:e.rule},{header:()=>a("chains"),accessorKey:m.Chains,accessorFn:e=>e.chains.slice().reverse().join(" :: ")},{header:()=>a("connectTime"),enableGrouping:!1,accessorKey:m.ConnectTime,accessorFn:e=>gt(e.start),sortingFn:(e,i)=>ce(e.original.start).valueOf()-ce(i.original.start).valueOf()},{header:()=>a("dlSpeed"),enableGrouping:!1,accessorKey:m.DlSpeed,accessorFn:e=>`${U(e.downloadSpeed)}/s`,sortingFn:(e,i)=>e.original.downloadSpeed-i.original.downloadSpeed},{header:()=>a("ulSpeed"),enableGrouping:!1,accessorKey:m.ULSpeed,accessorFn:e=>`${U(e.uploadSpeed)}/s`,sortingFn:(e,i)=>e.original.uploadSpeed-i.original.uploadSpeed},{header:()=>a("dl"),enableGrouping:!1,accessorKey:m.Download,accessorFn:e=>U(e.download),sortingFn:(e,i)=>e.original.download-i.original.download},{header:()=>a("ul"),enableGrouping:!1,accessorKey:m.Upload,accessorFn:e=>U(e.upload),sortingFn:(e,i)=>e.original.upload-i.original.upload},{header:()=>a("sourceIP"),accessorKey:m.SourceIP,accessorFn:e=>{const i=H().find(B=>B.sourceIP===e.metadata.sourceIP);return i?i.tagName:e.metadata.sourceIP}},{header:()=>a("sourcePort"),accessorKey:m.SourcePort,accessorFn:e=>e.metadata.sourcePort},{header:()=>a("destination"),accessorKey:m.Destination,accessorFn:e=>e.metadata.remoteDestination||e.metadata.destinationIP||e.metadata.host}],[c,y]=G([]),[D,R]=je(G([{id:m.ConnectTime,desc:!0}]),{name:"connectionsTableSorting",storage:localStorage}),P=Ye({filterFns:{fuzzy:be},state:{get columnOrder(){return me()},get grouping(){return c()},get sorting(){return D()},get columnVisibility(){return fe()},get globalFilter(){return _()}},get data(){return C()===V.activeConnections?x():v()},sortDescFirst:!0,enableHiding:!0,columns:k,onGlobalFilterChange:b,globalFilterFn:be,onGroupingChange:y,onSortingChange:R,getFilteredRowModel:Je(),getSortedRowModel:Xe(),getExpandedRowModel:Qe(),getGroupedRowModel:et(),getCoreRowModel:tt()}),M=P.getFlatHeaders().find(({id:e})=>e===m.SourceIP),[j,Y]=G("");Le(Ae(j,()=>{const e=H().find(i=>i.sourceIP===j());M==null||M.column.setFilterValue(e?e.tagName:j())}));const Ie=E(()=>[{type:V.activeConnections,name:a("active"),count:x().length},{type:V.closedConnections,name:a("closed"),count:v().length}]);return(()=>{const e=yt(),i=e.firstChild,B=i.firstChild,re=B.firstChild,J=re.nextSibling,ye=J.firstChild,q=B.nextSibling,ae=q.firstChild,we=i.nextSibling,le=we.firstChild,oe=le.firstChild,Fe=oe.nextSibling;return n(re,t(ne,{get each(){return Ie()},children:s=>(()=>{const u=wt(),l=u.firstChild,T=l.nextSibling;return u.$$click=()=>h(s().type),n(l,()=>s().name),n(T,()=>s().count),F(()=>L(u,A(C()===s().type&&"tab-active","tab tab-sm gap-2 sm:tab-md"))),u})()})),J.addEventListener("change",s=>Y(s.target.value)),n(ye,()=>a("all")),n(J,t(ne,{get each(){return _e.uniq(se().map(({metadata:{sourceIP:s}})=>{const u=H().find(l=>l.sourceIP===s);return u?u.tagName:s})).sort()},children:s=>(()=>{const u=Ft();return n(u,s),F(()=>u.value=s()),u})()}),null),ae.$$input=s=>b(s.target.value),n(q,t(O,{class:"join-item btn-sm sm:btn-md",onClick:()=>d(s=>!s),get icon(){return E(()=>!!o())()?t(Ve,{}):t(He,{})}}),null),n(q,t(O,{class:"join-item btn-sm sm:btn-md",onClick:()=>{P.getState().globalFilter?P.getFilteredRowModel().rows.forEach(({id:s})=>ge(s)):it()},get icon(){return t(te,{})}}),null),n(q,t(O,{class:"btn join-item btn-sm sm:btn-md",onClick:()=>r==null?void 0:r.showModal(),get icon(){return t(Be,{})}}),null),n(oe,t(K,{get each(){return P.getHeaderGroups()},children:s=>(()=>{const u=Dt();return n(u,t(K,{get each(){return s.headers},children:l=>(()=>{const T=Pt(),N=T.firstChild,$=N.firstChild;return n(N,(()=>{const p=E(()=>!!l.column.getCanGroup());return()=>p()?(()=>{const w=Tt();return Q(w,"click",l.column.getToggleGroupingHandler(),!0),n(w,(()=>{const z=E(()=>!!l.column.getIsGrouped());return()=>z()?t(de,{size:18}):t(ue,{size:18})})()),w})():null})(),$),Q($,"click",l.column.getToggleSortingHandler(),!0),n($,()=>W(l.column.columnDef.header,l.getContext())),n(N,()=>({asc:t(qe,{}),desc:t(Ue,{})})[l.column.getIsSorted()]??null,null),F(p=>{const w=A("flex items-center gap-2"),z=A(l.column.getCanSort()&&"cursor-pointer select-none","flex-1");return w!==p._v$3&&L(N,p._v$3=w),z!==p._v$4&&L($,p._v$4=z),p},{_v$3:void 0,_v$4:void 0}),T})()})),u})()})),n(Fe,t(K,{get each(){return P.getRowModel().rows},children:s=>(()=>{const u=Nt();return n(u,t(K,{get each(){return s.getVisibleCells()},children:l=>(()=>{const T=Et();return T.$$contextmenu=N=>{N.preventDefault();const $=l.renderValue();$&&It($).catch(()=>{})},n(T,(()=>{const N=E(()=>!!l.getIsGrouped());return()=>N()?(()=>{const $=Ot(),p=$.firstChild,w=p.nextSibling,z=w.nextSibling,De=z.firstChild,ie=De.nextSibling;return ie.nextSibling,Q($,"click",s.getToggleExpandedHandler(),!0),n(p,(()=>{const Pe=E(()=>!!s.getIsExpanded());return()=>Pe()?t(de,{size:18}):t(ue,{size:18})})()),n(w,()=>W(l.column.columnDef.cell,l.getContext())),n(z,()=>s.subRows.length,ie),F(()=>L($,A(s.getCanExpand()?"cursor-pointer":"cursor-normal","flex items-center gap-2"))),$})():(()=>{const $=E(()=>!!l.getIsAggregated());return()=>$()?W(l.column.columnDef.aggregatedCell??l.column.columnDef.cell,l.getContext()):(()=>{const p=E(()=>!!l.getIsPlaceholder());return()=>p()?null:W(l.column.columnDef.cell,l.getContext())})()})()})()),T})()})),u})()})),n(e,t(pt,{ref:s=>r=s,get order(){return me()},get visible(){return fe()},onOrderChange:s=>ct(s),onVisibleChange:s=>dt({...s})}),null),n(e,t(xt,{ref:s=>g=s,get selectedConnectionID(){return I()}}),null),F(s=>{const u=a("search"),l=A(ut(Se()),"table table-zebra relative rounded-none");return u!==s._v$&&We(ae,"placeholder",s._v$=u),l!==s._v$2&&L(le,s._v$2=l),s},{_v$:void 0,_v$2:void 0}),e})()};Ze(["input","click","contextmenu"]);export{Rt as default};
