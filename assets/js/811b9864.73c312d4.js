"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[2140,2083],{9607:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return l}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=r(4079),c=r(4996),s=["components"],u={id:"architecture-recover-container",title:"Recover Container Architecture",description:"High level overview of ORCA recover container architecture."},m=void 0,h={unversionedId:"about/architecture/architecture-recover-container",id:"about/architecture/architecture-recover-container",title:"Recover Container Architecture",description:"High level overview of ORCA recover container architecture.",source:"@site/docs/about/architecture/architecture-restore-container.mdx",sourceDirName:"about/architecture",slug:"/about/architecture/architecture-recover-container",permalink:"/cumulus-orca/docs/about/architecture/architecture-recover-container",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/about/architecture/architecture-restore-container.mdx",tags:[],version:"current",frontMatter:{id:"architecture-recover-container",title:"Recover Container Architecture",description:"High level overview of ORCA recover container architecture."},sidebar:"about_orca",previous:{title:"Archive Container Architecture",permalink:"/cumulus-orca/docs/about/architecture/architecture-archive-container"},next:{title:"API Container Architecture",permalink:"/cumulus-orca/docs/about/architecture/architecture-api-container"}},d={},l=[],p={toc:l};function v(e){var t=e.components,r=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ORCA recover data container contains all the components used in the recovery\nof data from the secondary archive. The diagram below shows the various\ninteractions of these components. Recovery processes are kicked off manually\nby an operator through the Cumulus Dashboard. The dashboard calls an API which\nkicks off a recovery workflow. Recovery is an asynchronous operation since data\nrequested from the archive can take up to 4 hours or more to reconstitute in most\nscenarios. Since it is asynchronous, the recovery container relies on a database\nto maintain the status of the request and event driven triggers to restore the\ndata once it has been reconstituted from the archive into an S3 bucket. Currently\ndata is copied back to the Cumulus S3 primary data bucket as the final restore\nstep. Determining the status of the recovery job is done by either checking the\nstatus on the Cumulus Dashboard or manually by accessing the ORCA API or querying\nthe database directly."),(0,a.kt)(i.default,{imageSource:(0,c.Z)("img/ORCA-Architecture-Recovery-Container-Component.svg"),imageAlt:"ORCA Recover Data Container Context",zoomInPic:(0,c.Z)("img/zoom-in.svg"),zoomOutPic:(0,c.Z)("img/zoom-out.svg"),resetPic:(0,c.Z)("img/zoom-pan-reset.svg"),mdxType:"MyImage"}))}v.isMDXComponent=!0},4079:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return p}});var o=r(7462),n=r(3366),a=r(7294),i=r(3905),c=r(6126),s=["components"],u=["zoomIn","zoomOut","resetTransform"],m={},h=void 0,d={unversionedId:"templates/pan-zoom-image",id:"templates/pan-zoom-image",title:"pan-zoom-image",description:"The image below can be panned and zoomed using your mouse or the provided buttons.",source:"@site/docs/templates/pan-zoom-image.mdx",sourceDirName:"templates",slug:"/templates/pan-zoom-image",permalink:"/cumulus-orca/docs/templates/pan-zoom-image",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/templates/pan-zoom-image.mdx",tags:[],version:"current",frontMatter:{}},l={},p=[],v={toc:p};function g(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Interactive Image")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The image below can be panned and zoomed using your mouse or the provided buttons.\nTo reset the image to the original size on the page click ",(0,i.kt)("img",{width:"12px",height:"12px",src:r.resetPic,alt:"Reset Image"}),".\nIf you wish to view the full image on a separate page, click this ",(0,i.kt)("a",{href:r.imageSource,target:"_blank",rel:"noopener noreferrer"},"link"),"."))),(0,i.kt)(c.d$,{defaultScale:1,mdxType:"TransformWrapper"},(function(e){var t=e.zoomIn,o=e.zoomOut,s=e.resetTransform;(0,n.Z)(e,u);return(0,i.kt)(a.Fragment,null,(0,i.kt)("div",{className:"tools"},(0,i.kt)("button",{onClick:function(){return t()}},(0,i.kt)("img",{width:"15px",height:"15px",src:r.zoomInPic,alt:"Zoom In"})),(0,i.kt)("button",{onClick:function(){return o()}},(0,i.kt)("img",{width:"15px",height:"15px",src:r.zoomOutPic,alt:"Zoom Out"})),(0,i.kt)("button",{onClick:function(){return s()}},(0,i.kt)("img",{width:"15px",height:"15px",src:r.resetPic,alt:"Reset Image"}))),(0,i.kt)(c.Uv,{mdxType:"TransformComponent"},(0,i.kt)("img",{src:r.imageSource,alt:r.imageAlt})))})))}g.isMDXComponent=!0}}]);