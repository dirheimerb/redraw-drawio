import{r as a}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var fe={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve=a,Se=Symbol.for("react.element"),we=Symbol.for("react.fragment"),be=Object.prototype.hasOwnProperty,Ie=ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Le={key:!0,ref:!0,__self:!0,__source:!0};function ge(r,e,o){var t,i={},d=null,u=null;o!==void 0&&(d=""+o),e.key!==void 0&&(d=""+e.key),e.ref!==void 0&&(u=e.ref);for(t in e)be.call(e,t)&&!Le.hasOwnProperty(t)&&(i[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)i[t]===void 0&&(i[t]=e[t]);return{$$typeof:Se,type:r,key:d,ref:u,props:i,_owner:Ie.current}}z.Fragment=we;z.jsx=ge;z.jsxs=ge;fe.exports=z;var l=fe.exports;const Ce=(r,e)=>{const o=new URL("/","https://embed.diagrams.net"),t=new URLSearchParams;return t.append("proto","json"),e&&t.append("configure","1"),r&&Object.keys(r).forEach(i=>{const d=r[i];d&&(typeof d=="boolean"?t.append(i,d?"1":"0"):t.append(i,d.toString()))}),o.search=t.toString(),o.toString()};function Ee(r,e){if(r.origin.includes("embed.diagrams.net"))try{const o=JSON.parse(r.data);if(qe(o)){const t=e[o.event];t&&t(o)}}catch{console.error("Failed to handle event")}}function qe(r){return typeof r=="object"&&r!==null&&"event"in r}const Re=r=>{function e(n,p){var f,c;(c=(f=r.current)==null?void 0:f.contentWindow)==null||c.postMessage(JSON.stringify({action:n,...p}),"*")}return{load:n=>{e("load",n)},configure:n=>{e("configure",n)},merge:n=>{e("merge",n)},dialog:n=>{e("dialog",n)},prompt:n=>{e("prompt",n)},template:n=>{e("template",n)},layout:n=>{e("layout",n)},draft:n=>{e("draft",n)},status:n=>{e("status",n)},spinner:n=>{e("spinner",n)},exportDiagram:n=>{e("export",n)}}},N=a.forwardRef(function(e,o){const{urlParameters:t,configuration:i,xml:d,onSave:u,onClose:m,onLoad:x,onConfigure:h,onDraft:y,onExport:v,onMerge:S,onPrompt:n,onTemplate:p}=e,f=a.useRef(null),c=Re(f),xe=Ce(t,!!i),[D,he]=a.useState(!1),M=a.useCallback(ye=>{Ee(ye,{init:()=>{he(!0)},load:s=>{x&&x(s)},configure:s=>{i&&c.configure({config:i}),h&&h(s)},save:s=>{c.exportDiagram({format:"xmlsvg",exit:s.exit})},exit:s=>{m&&m(s)},draft:s=>{y&&y(s)},export:s=>{u&&u({event:"save",xml:s.data}),v&&v(s),s.message.exit&&m&&m({event:"exit",modified:!0})},merge:s=>{S&&S(s)},prompt:s=>{n&&n(s)},template:s=>{p&&p(s)}})},[c,i,m,u,x,h,y,v,S,n,p]);return a.useImperativeHandle(o,()=>({...c}),[c]),a.useEffect(()=>{D&&(d?c.load({xml:d}):c.load({xml:""}))},[c,D,d]),a.useEffect(()=>(window.addEventListener("message",M),()=>{window.removeEventListener("message",M)}),[M]),l.jsx("iframe",{className:"diagrams-iframe",src:xe,ref:f,title:"Diagrams.net",style:{width:"100%",height:"100%",minWidth:"400px",minHeight:"400px",border:"none"}})});try{N.displayName="DrawIOEmbed",N.__docgenInfo={description:"Draw.io embed component",displayName:"DrawIOEmbed",props:{urlParameters:{defaultValue:null,description:"Parameters documented at https://www.drawio.com/doc/faq/embed-mode",name:"urlParameters",required:!1,type:{name:"UrlParameters"}},xml:{defaultValue:null,description:"XML structure for prefilling the editor",name:"xml",required:!1,type:{name:"string"}},configuration:{defaultValue:null,description:"For configuration options, see https://www.drawio.com/doc/faq/configure-diagram-editor",name:"configuration",required:!1,type:{name:"{ [key: string]: any; }"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"((data: EventLoad) => void)"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!1,type:{name:"((data: EventSave) => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((data: EventExit) => void)"}},onConfigure:{defaultValue:null,description:"",name:"onConfigure",required:!1,type:{name:"((data: EventConfigure) => void)"}},onMerge:{defaultValue:null,description:"",name:"onMerge",required:!1,type:{name:"((data: EventMerge) => void)"}},onPrompt:{defaultValue:null,description:"",name:"onPrompt",required:!1,type:{name:"((data: EventPrompt) => void)"}},onTemplate:{defaultValue:null,description:"",name:"onTemplate",required:!1,type:{name:"((data: EventTemplate) => void)"}},onDraft:{defaultValue:null,description:"",name:"onDraft",required:!1,type:{name:"((data: EventDraft) => void)"}},onExport:{defaultValue:null,description:"",name:"onExport",required:!1,type:{name:"((data: EventExport) => void)"}}}}}catch{}const ze={title:"Components/DrawIoEmbed",component:N,parameters:{layout:"centered"},args:{urlParameters:{ui:"kennedy",spin:!0,libraries:!0,saveAndExit:!0}},argTypes:{onLoad:{action:"onLoad"},onSave:{action:"onSave"},onClose:{action:"onClose"},onConfigure:{action:"onConfigure"},onDraft:{action:"onDraft"},onExport:{action:"onExport"},onMerge:{action:"onMerge"},onPrompt:{action:"onPrompt"},onTemplate:{action:"onTemplate"}},decorators:[r=>l.jsx("div",{className:"box",style:{width:"800px",height:"500px"},children:l.jsx(r,{})})]},w={},g={args:{xml:'<mxfile host="embed.diagrams.net" modified="2023-08-27T13:05:56.668Z" agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36" etag="GK7-tOtf0hGFVXvr0iag" version="21.6.9" type="embed"><diagram id="Y9a7kf5wORv1aMeNYXJv" name="Pagina-1"><mxGraphModel dx="482" dy="314" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0"><root><mxCell id="0" /><mxCell id="1" parent="0" /><mxCell id="-r8ZIlIq8bq7zP4vNG12-16" value="" style="ellipse;shape=cloud;whiteSpace=wrap;html=1;fillStyle=zigzag-line;fillColor=#F7F7F7;" vertex="1" parent="1"><mxGeometry x="150" y="60" width="460" height="360" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-11" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="-r8ZIlIq8bq7zP4vNG12-9" target="-r8ZIlIq8bq7zP4vNG12-10"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-9" value="Actor" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;" vertex="1" parent="1"><mxGeometry x="380" y="270" width="30" height="60" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-10" value="" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1"><mxGeometry x="335" y="160" width="120" height="60" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-13" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="-r8ZIlIq8bq7zP4vNG12-12" target="-r8ZIlIq8bq7zP4vNG12-9"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-12" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;" vertex="1" parent="1"><mxGeometry x="240" y="240" width="80" height="80" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-15" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="-r8ZIlIq8bq7zP4vNG12-14" target="-r8ZIlIq8bq7zP4vNG12-9"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-14" value="" style="rhombus;whiteSpace=wrap;html=1;" vertex="1" parent="1"><mxGeometry x="480" y="240" width="80" height="80" as="geometry" /></mxCell></root></mxGraphModel></diagram></mxfile>'}},b={args:{xml:'<mxfile host="embed.diagrams.net" modified="2023-08-27T13:33:23.800Z" agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36" version="21.6.9" etag="xthbfrarG6SmZwCYJPbt" type="embed"><diagram id="kaqXdMjmixOsNJA9w4jU" name="Page-1"><mxGraphModel dx="314" dy="361" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0" /><mxCell id="1" parent="0" /><mxCell id="2" value="" style="shape=cube;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;darkOpacity=0.05;darkOpacity2=0.1;fillColor=#99FFFF;strokeColor=#0066CC;" vertex="1" parent="1"><mxGeometry x="110" y="150" width="120" height="80" as="geometry" /></mxCell></root></mxGraphModel></diagram></mxfile>',configuration:{customColorSchemes:[[null,{fill:"#99FFFF",stroke:"#0066CC"}]]}}},I={args:{},parameters:{layout:"fullscreen"},decorators:[r=>(a.useEffect(()=>{const e=document.querySelector(".box");e&&(e.style.width="100vw",e.style.height="100vh")},[]),l.jsx("div",{style:{width:"100%",height:"100%"},children:l.jsx(r,{})}))]},L={args:{},decorators:[r=>{const[e,o]=a.useState(!1),t=a.useRef(null);return a.useEffect(()=>{t.current&&e&&t.current.dialog({title:"My test dialog",message:"My message",button:"OK"})},[e]),l.jsx(r,{args:{onLoad:()=>o(!0),ref:t}})}]},C={args:{},decorators:[r=>{const[e,o]=a.useState(!1),t=a.useRef(null);return a.useEffect(()=>{t.current&&e&&t.current.prompt({title:"What color?",defaultValue:"blue",ok:"Save"})},[e]),l.jsx(r,{args:{onLoad:()=>o(!0),ref:t}})}]},E={args:{},decorators:[r=>{const[e,o]=a.useState(!1),t=a.useRef(null);return a.useEffect(()=>{t.current&&e&&t.current.template({})},[e]),l.jsx(r,{args:{onLoad:()=>o(!0),ref:t}})}]},q={args:{},decorators:[r=>{const[e,o]=a.useState(!1),t=a.useRef(null);return a.useEffect(()=>{t.current&&e&&t.current.layout({layouts:[]})},[e]),l.jsx(r,{args:{onLoad:()=>o(!0),ref:t}})}]},R={args:{},decorators:[r=>{const[e,o]=a.useState(!1),t=a.useRef(null);return a.useEffect(()=>{t.current&&e&&t.current.status({message:"My status message"})},[e]),l.jsx(r,{args:{onLoad:()=>o(!0),ref:t}})}]},G={args:{},decorators:[r=>{const[e,o]=a.useState(!1),t=a.useRef(null);return a.useEffect(()=>{t.current&&e&&t.current.spinner({message:"Spinner spinner spinner",enabled:!0,show:!0})},[e]),l.jsx(r,{args:{onLoad:()=>o(!0),ref:t}})}]},P={args:g.args,decorators:[(r,e)=>{const[o,t]=a.useState(!1),[i,d]=a.useState(null),u=a.useRef(null);return a.useEffect(()=>{u.current&&o&&u.current.exportDiagram({format:"xmlsvg"})},[o]),l.jsxs(l.Fragment,{children:[l.jsx(r,{args:{...e.args,onLoad:()=>t(!0),onExport(m){console.log("onExport",m),d(m.data)},onSave(m){console.log("onSave",m)},onClose(m){console.log("onClose",m)},ref:u}}),l.jsxs("div",{style:{marginTop:"10px"},children:[l.jsx("strong",{children:"Result as SVG"}),l.jsx("br",{}),i&&l.jsx("img",{src:i})]})]})}]};var _,j,k;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(k=(j=w.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var Z,O,F;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    xml: '<mxfile host="embed.diagrams.net" modified="2023-08-27T13:05:56.668Z" agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36" etag="GK7-tOtf0hGFVXvr0iag" version="21.6.9" type="embed"><diagram id="Y9a7kf5wORv1aMeNYXJv" name="Pagina-1"><mxGraphModel dx="482" dy="314" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0"><root><mxCell id="0" /><mxCell id="1" parent="0" /><mxCell id="-r8ZIlIq8bq7zP4vNG12-16" value="" style="ellipse;shape=cloud;whiteSpace=wrap;html=1;fillStyle=zigzag-line;fillColor=#F7F7F7;" vertex="1" parent="1"><mxGeometry x="150" y="60" width="460" height="360" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-11" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="-r8ZIlIq8bq7zP4vNG12-9" target="-r8ZIlIq8bq7zP4vNG12-10"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-9" value="Actor" style="shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;" vertex="1" parent="1"><mxGeometry x="380" y="270" width="30" height="60" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-10" value="" style="rounded=0;whiteSpace=wrap;html=1;" vertex="1" parent="1"><mxGeometry x="335" y="160" width="120" height="60" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-13" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="-r8ZIlIq8bq7zP4vNG12-12" target="-r8ZIlIq8bq7zP4vNG12-9"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-12" value="" style="ellipse;whiteSpace=wrap;html=1;aspect=fixed;" vertex="1" parent="1"><mxGeometry x="240" y="240" width="80" height="80" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-15" value="" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;" edge="1" parent="1" source="-r8ZIlIq8bq7zP4vNG12-14" target="-r8ZIlIq8bq7zP4vNG12-9"><mxGeometry relative="1" as="geometry" /></mxCell><mxCell id="-r8ZIlIq8bq7zP4vNG12-14" value="" style="rhombus;whiteSpace=wrap;html=1;" vertex="1" parent="1"><mxGeometry x="480" y="240" width="80" height="80" as="geometry" /></mxCell></root></mxGraphModel></diagram></mxfile>'
  }
}`,...(F=(O=g.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var T,V,W;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    xml: '<mxfile host="embed.diagrams.net" modified="2023-08-27T13:33:23.800Z" agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36" version="21.6.9" etag="xthbfrarG6SmZwCYJPbt" type="embed"><diagram id="kaqXdMjmixOsNJA9w4jU" name="Page-1"><mxGraphModel dx="314" dy="361" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0" /><mxCell id="1" parent="0" /><mxCell id="2" value="" style="shape=cube;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;darkOpacity=0.05;darkOpacity2=0.1;fillColor=#99FFFF;strokeColor=#0066CC;" vertex="1" parent="1"><mxGeometry x="110" y="150" width="120" height="80" as="geometry" /></mxCell></root></mxGraphModel></diagram></mxfile>',
    configuration: {
      customColorSchemes: [[null, {
        fill: '#99FFFF',
        stroke: '#0066CC'
      }]]
    }
  }
}`,...(W=(V=b.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var A,H,K;I.parameters={...I.parameters,docs:{...(A=I.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {},
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [Story => {
    useEffect(() => {
      const boxElem = document.querySelector<HTMLDivElement>('.box');
      if (boxElem) {
        boxElem.style.width = '100vw';
        boxElem.style.height = '100vh';
      }
    }, []);
    return <div style={{
      width: '100%',
      height: '100%'
    }}>
          <Story />
        </div>;
  }]
}`,...(K=(H=I.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var X,J,U;L.parameters={...L.parameters,docs:{...(X=L.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => {
    const [isLoaded, setIsLoaded] = useState(false);
    const drawioRef = useRef<DrawIoEmbedRef>(null);
    useEffect(() => {
      if (drawioRef.current && isLoaded) {
        drawioRef.current.dialog({
          title: 'My test dialog',
          message: 'My message',
          button: 'OK'
        });
      }
    }, [isLoaded]);
    return <Story args={{
      onLoad: () => setIsLoaded(true),
      ref: drawioRef
    }} />;
  }]
}`,...(U=(J=L.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var Y,$,B;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => {
    const [isLoaded, setIsLoaded] = useState(false);
    const drawioRef = useRef<DrawIoEmbedRef>(null);
    useEffect(() => {
      if (drawioRef.current && isLoaded) {
        drawioRef.current.prompt({
          title: 'What color?',
          defaultValue: 'blue',
          ok: 'Save'
        });
      }
    }, [isLoaded]);
    return <Story args={{
      onLoad: () => setIsLoaded(true),
      ref: drawioRef
    }} />;
  }]
}`,...(B=($=C.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var Q,ee,te;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => {
    const [isLoaded, setIsLoaded] = useState(false);
    const drawioRef = useRef<DrawIoEmbedRef>(null);
    useEffect(() => {
      if (drawioRef.current && isLoaded) {
        drawioRef.current.template({});
      }
    }, [isLoaded]);
    return <Story args={{
      onLoad: () => setIsLoaded(true),
      ref: drawioRef
    }} />;
  }]
}`,...(te=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,oe;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => {
    const [isLoaded, setIsLoaded] = useState(false);
    const drawioRef = useRef<DrawIoEmbedRef>(null);
    useEffect(() => {
      if (drawioRef.current && isLoaded) {
        drawioRef.current.layout({
          layouts: []
        });
      }
    }, [isLoaded]);
    return <Story args={{
      onLoad: () => setIsLoaded(true),
      ref: drawioRef
    }} />;
  }]
}`,...(oe=(ae=q.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,se,le;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => {
    const [isLoaded, setIsLoaded] = useState(false);
    const drawioRef = useRef<DrawIoEmbedRef>(null);
    useEffect(() => {
      if (drawioRef.current && isLoaded) {
        drawioRef.current.status({
          message: 'My status message'
        });
      }
    }, [isLoaded]);
    return <Story args={{
      onLoad: () => setIsLoaded(true),
      ref: drawioRef
    }} />;
  }]
}`,...(le=(se=R.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,de,me;G.parameters={...G.parameters,docs:{...(ie=G.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => {
    const [isLoaded, setIsLoaded] = useState(false);
    const drawioRef = useRef<DrawIoEmbedRef>(null);
    useEffect(() => {
      if (drawioRef.current && isLoaded) {
        drawioRef.current.spinner({
          message: 'Spinner spinner spinner',
          enabled: true,
          show: true
        });
      }
    }, [isLoaded]);
    return <Story args={{
      onLoad: () => setIsLoaded(true),
      ref: drawioRef
    }} />;
  }]
}`,...(me=(de=G.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,ce,pe;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: WithData.args,
  decorators: [(Story, context) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imgData, setImgData] = useState<string | null>(null);
    const drawioRef = useRef<DrawIoEmbedRef>(null);
    useEffect(() => {
      if (drawioRef.current && isLoaded) {
        drawioRef.current.exportDiagram({
          format: 'xmlsvg'
        });
      }
    }, [isLoaded]);
    return <>
          <Story args={{
        ...context.args,
        onLoad: () => setIsLoaded(true),
        onExport(data) {
          console.log('onExport', data);
          setImgData(data.data);
        },
        onSave(data) {
          console.log('onSave', data);
        },
        onClose(data) {
          console.log('onClose', data);
        },
        ref: drawioRef
      }} />
          <div style={{
        marginTop: '10px'
      }}>
            <strong>Result as SVG</strong>
            <br />
            {imgData && <img src={imgData} />}
          </div>
        </>;
  }]
}`,...(pe=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const Me=["NewCanvas","WithData","WithConfigurations","FlexibleSize","ShowDialog","ShowPrompt","PickTemplate","PickLayout","SetStatus","SetSpinner","ExportData"];export{P as ExportData,I as FlexibleSize,w as NewCanvas,q as PickLayout,E as PickTemplate,G as SetSpinner,R as SetStatus,L as ShowDialog,C as ShowPrompt,b as WithConfigurations,g as WithData,Me as __namedExportsOrder,ze as default};
//# sourceMappingURL=DrawIO.stories-4f3b9d7b.js.map
