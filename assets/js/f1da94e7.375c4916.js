"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[8942,2083],{4410:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=t(7462),a=(t(7294),t(3905)),n=t(4079),i=t(4996);const s={id:"recovery-workflow",title:"Recovery Workflow",description:"Provides developers with the steps of how data are recovered."},d=void 0,c={unversionedId:"developer/deployment-guide/recovery-workflow",id:"developer/deployment-guide/recovery-workflow",title:"Recovery Workflow",description:"Provides developers with the steps of how data are recovered.",source:"@site/docs/developer/deployment-guide/recovery-workflow.mdx",sourceDirName:"developer/deployment-guide",slug:"/developer/deployment-guide/recovery-workflow",permalink:"/cumulus-orca/docs/developer/deployment-guide/recovery-workflow",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/deployment-guide/recovery-workflow.mdx",tags:[],version:"current",frontMatter:{id:"recovery-workflow",title:"Recovery Workflow",description:"Provides developers with the steps of how data are recovered."},sidebar:"dev_guide",previous:{title:"Upgrading ORCA",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment-upgrading-orca"},next:{title:"Testing Deployment",permalink:"/cumulus-orca/docs/developer/deployment-guide/testing_deployment"}},l={},m=[],u={toc:m};function p(e){let{components:o,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ORCA recovery workflow diagram below visualizes the process of\nrecovering missing data in Cumulus. As each user organization will\nhave unique needs when recovering data, the diagram provides details\non which components can be modified and which components should not\nbe modified. Refer to the legend on the diagram for details on which\ncomponents can be modified."),(0,a.kt)("p",null,"A developer kicks off the recovery processes manually via the AWS UI,\nwhich then triggers an API that kicks off a recovery workflow. Recovery is an asynchronous operation since data\nrequested from GLACIER can take 4 hours or more to reconstitute,\nand DEEP_ARCHIVE can take 12 hours.\nSince it is asynchronous, the recovery container\nrelies on a database to maintain the status of the request and event\ndriven triggers to restore the data once it has been reconstituted\nfrom archive into an S3 bucket. Currently data is copied back to the\nCumulus S3 primary data bucket which is the default bucket. The developer\nhas the option to override the default bucket with another restore bucket if desired.\nDetermining the status of the recovery job is done manually by querying the database\ndirectly or by checking the status on the UI. In addition, you can also check the job status by calling the ORCA API."),(0,a.kt)(n.default,{imageSource:(0,i.Z)("img/ORCA-Recovery-Workflow.svg"),imageAlt:"ORCA Recovery Workflow Context",zoomInPic:(0,i.Z)("img/zoom-in.svg"),zoomOutPic:(0,i.Z)("img/zoom-out.svg"),resetPic:(0,i.Z)("img/zoom-pan-reset.svg"),mdxType:"MyImage"}),(0,a.kt)("p",null,"See the recovery workflow ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-orca/tree/master/modules/workflows/OrcaRecoveryWorkflow"},"stepfunction modules"),"\nfor additional details on recovering files belonging to a granule."),(0,a.kt)("p",null,"For additional details on the recovery workflow input and output, see ",(0,a.kt)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-orca/docs/operator/data-recovery#recovery-workflow-input-and-output-examples"},"this documentation"),"."))}p.isMDXComponent=!0},4079:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=t(7462),a=t(7294),n=t(3905),i=t(6126);const s={},d=void 0,c={unversionedId:"templates/pan-zoom-image",id:"templates/pan-zoom-image",title:"pan-zoom-image",description:"The image below can be panned and zoomed using your mouse or the provided buttons.",source:"@site/docs/templates/pan-zoom-image.mdx",sourceDirName:"templates",slug:"/templates/pan-zoom-image",permalink:"/cumulus-orca/docs/templates/pan-zoom-image",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/templates/pan-zoom-image.mdx",tags:[],version:"current",frontMatter:{}},l={},m=[],u={toc:m};function p(e){let{components:o,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Interactive Image",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The image below can be panned and zoomed using your mouse or the provided buttons.\nTo reset the image to the original size on the page click ",(0,n.kt)("img",{width:"12px",height:"12px",src:t.resetPic,alt:"Reset Image"}),".\nIf you wish to view the full image on a separate page, click this ",(0,n.kt)("a",{href:t.imageSource,target:"_blank",rel:"noopener noreferrer"},"link"),".")),(0,n.kt)(i.d$,{defaultScale:1,mdxType:"TransformWrapper"},(e=>{let{zoomIn:o,zoomOut:r,resetTransform:s,...d}=e;return(0,n.kt)(a.Fragment,null,(0,n.kt)("div",{className:"tools"},(0,n.kt)("button",{onClick:()=>o()},(0,n.kt)("img",{width:"15px",height:"15px",src:t.zoomInPic,alt:"Zoom In"})),(0,n.kt)("button",{onClick:()=>r()},(0,n.kt)("img",{width:"15px",height:"15px",src:t.zoomOutPic,alt:"Zoom Out"})),(0,n.kt)("button",{onClick:()=>s()},(0,n.kt)("img",{width:"15px",height:"15px",src:t.resetPic,alt:"Reset Image"}))),(0,n.kt)(i.Uv,{mdxType:"TransformComponent"},(0,n.kt)("img",{src:t.imageSource,alt:t.imageAlt})))})))}p.isMDXComponent=!0}}]);