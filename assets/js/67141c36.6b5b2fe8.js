"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[1510,2083],{4836:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=a(4079),i=a(4996);const l={id:"data-recovery",title:"Data Recovery",description:"Provides documentation for Operators to recover missing data."},s=void 0,c={unversionedId:"operator/data-recovery",id:"operator/data-recovery",title:"Data Recovery",description:"Provides documentation for Operators to recover missing data.",source:"@site/docs/operator/data-recovery.md",sourceDirName:"operator",slug:"/operator/data-recovery",permalink:"/cumulus-orca/docs/operator/data-recovery",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/operator/data-recovery.md",tags:[],version:"current",frontMatter:{id:"data-recovery",title:"Data Recovery",description:"Provides documentation for Operators to recover missing data."},sidebar:"ops_guide",previous:{title:"Operator Introduction",permalink:"/cumulus-orca/docs/operator/operator-intro"},next:{title:"Re-Ingesting Data to ORCA",permalink:"/cumulus-orca/docs/operator/restore-to-orca"}},p={},u=[{value:"Recovery via Cumulus Dashboard",id:"recovery-via-cumulus-dashboard",level:2},{value:"Manual recovery via step function workflow",id:"manual-recovery-via-step-function-workflow",level:2},{value:"Recovery workflow input and output examples",id:"recovery-workflow-input-and-output-examples",level:3},{value:"Recovery workflow configurable parameters",id:"recovery-workflow-configurable-parameters",level:3}],m={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"recovery-via-cumulus-dashboard"},"Recovery via Cumulus Dashboard"),(0,r.kt)("p",null,"Recovery processes are kicked off manually by an operator through the Cumulus Dashboard.\nThe dashboard calls an API which kicks off a recovery workflow.\nRecovery is an asynchronous operation since data\nrequested from GLACIER can take 4 hours or more to reconstitute,\nand DEEP_ARCHIVE can take 12 hours.\nSince it is asynchronous, the recovery container\nrelies on a database to maintain the status of the request and event\ndriven triggers to restore the data once it has been reconstituted\nfrom archive into an S3 bucket. Currently, data is copied back to the\nCumulus S3 primary data bucket which is the default bucket. The operator\nhas the option to override the default bucket with another restore bucket if desired.\nDetermining the status of the recovery job is done manually by querying the database\ndirectly or by checking the status on the dashboard."),(0,r.kt)("p",null,"A screenshot of the Cumulus dashboard used for recovering granules is shown below."),(0,r.kt)(o.default,{imageSource:(0,i.Z)("img/Cumulus-Dashboard-Recovery-Workflow.png"),imageAlt:"Cumulus Dashboard used for recovery",zoomInPic:(0,i.Z)("img/zoom-in.svg"),zoomOutPic:(0,i.Z)("img/zoom-out.svg"),resetPic:(0,i.Z)("img/zoom-pan-reset.svg"),mdxType:"MyImage"}),(0,r.kt)("p",null,"On the dashboard home page, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Granules")," option and add the granule to recover.\nThen click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Options")," button and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Execute"),". From the dropdown menu,\nselect ",(0,r.kt)("inlineCode",{parentName:"p"},"OrcaRecoveryWorkflow")," and hit ",(0,r.kt)("inlineCode",{parentName:"p"},"Confirm"),". This will execute the recovery process.\nThere are several configurable parameters that can be set up while running the workflow and are explained in\nthe section ",(0,r.kt)("a",{parentName:"p",href:"#recovery-workflow-configurable-parameters"},"below"),"."),(0,r.kt)("h2",{id:"manual-recovery-via-step-function-workflow"},"Manual recovery via step function workflow"),(0,r.kt)("p",null,"An operator can also run the recovery by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"Recovery Workflow")," in step function. "),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The operator should have access to AWS console to manually run the workflow which is not ideal.")),(0,r.kt)("h3",{id:"recovery-workflow-input-and-output-examples"},"Recovery workflow input and output examples"),(0,r.kt)("p",null,"The following is an input event example that an operator might set up while running the recovery workflow."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": {\n    "granules": [\n      {\n        "granuleId": "integrationGranuleId",\n        "version": "integrationGranuleVersion",\n        "files": [\n          {\n            "fileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n            "key": "MOD09GQ/006/MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n            "bucket": "test-orca-primary"\n          }\n        ]\n      }\n    ]\n  },\n  "meta": {\n    "buckets": {\n      "protected": {\n        "name": "test-protected",\n        "type": "protected"\n      },\n      "internal": {\n        "name": "test-internal",\n        "type": "internal"\n      },\n      "private": {\n        "name": "test-private",\n        "type": "private"\n      },\n      "public": {\n        "name": "test-public",\n        "type": "public"\n      },\n      "orca_default": {\n        "name": "test-orca-primary",\n        "type": "orca"\n      }\n    },\n    "collection": {\n      "meta": {\n        "orca": {\n          "excludedFileExtensions": [\n            ".xml"\n          ],\n          "defaultBucketOverride": "test-orca-primary",\n          "defaultRecoveryTypeOverride": "Standard"\n        },\n        "s3MultipartChunksizeMb": 200\n      },\n      "files": [\n        {\n          "regex": ".*.tar.gz",\n          "sampleFileName": "blah.tar.gz",\n          "bucket": "public"\n        }\n      ]\n    }\n  },\n  "cumulus_meta": {\n    "system_bucket": "test-internal",\n    "asyncOperationId": "1234"\n  }\n}\n')),(0,r.kt)("p",null,"The following is the corresponding output that the workflow will return if successful."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "granules": [\n    {\n      "granuleId": "integrationGranuleId",\n      "version": "integrationGranuleVersion",\n      "files": [\n        {\n          "fileName": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n          "key": "MOD09GQ/006/MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n          "bucket": "test-orca-primary"\n        }\n      ],\n      "keys": [\n        {\n          "key": "MOD09GQ/006/MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n          "destBucket": "test-public"\n        }\n      ],\n      "recoverFiles": [\n        {\n          "success": true,\n          "filename": "MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n          "keyPath": "MOD09GQ/006/MOD09GQ.A2017025.h21v00.006.2017034065104.hdf",\n          "restoreDestination": "test-public",\n          "s3MultipartChunksizeMb": 200,\n          "statusId": 1,\n          "requestTime": "2022-11-16T17:29:19.008088+00:00",\n          "lastUpdate": "2022-11-16T17:29:19.008088+00:00",\n          "completionTime": "2022-11-16T17:29:19.008088+00:00"\n        }\n      ]\n    }\n  ],\n  "asyncOperationId": "1234"\n}\n\n')),(0,r.kt)("h3",{id:"recovery-workflow-configurable-parameters"},"Recovery workflow configurable parameters"),(0,r.kt)("p",null,"The following are the parameters needed for recovery workflow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"buckets- AWS S3 bucket mapping used for Cumulus and ORCA configuration. Contains the following properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"name (Required)- Name of the S3 bucket."),(0,r.kt)("li",{parentName:"ul"},"type (Optional)- the type of bucket - i.e. internal, public, private, protected. ")),(0,r.kt)("p",{parentName:"li"},"It can be set up using the following configuration."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"config": {\n  "buckets.$": "$.meta.buckets"\n}\n')),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"buckets": {\n  "protected": {\n    "name": "test-protected",\n    "type": "protected"\n  },\n  "internal": {\n    "name": "test-internal",\n    "type": "internal"\n  },\n  "private": {\n    "name": "test-private",\n    "type": "private"\n  },\n  "public": {\n    "name": "test-public",\n    "type": "public"\n  }\n}\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"fileBucketMaps- A list of dictionaries that contains details of the configured storage bucket and file regex. Contains the following properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"regex (Required)- The regex that matches the file extension type."),(0,r.kt)("li",{parentName:"ul"},"bucket (Required))- The name of the key that points to the correct S3 bucket. Examples include public, private, protected, etc."),(0,r.kt)("li",{parentName:"ul"},"sampleFileName (Optional)- name of a sample file having extension.")),(0,r.kt)("p",{parentName:"li"},"It can be set up using the following configuration."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"config": {\n  "fileBucketMaps.$": "$.meta.collection.files"\n}\n')),(0,r.kt)("p",{parentName:"li"},"Example: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"fileBucketMaps": [\n  {\n    "regex": ".*.h5$",\n    "sampleFileName": "L0A_HR_RAW_product_0010-of-0420.h5",\n    "bucket": "protected"\n  },\n  {\n    "regex": ".*.cmr.xml$",\n    "sampleFileName": "L0A_HR_RAW_product_0010-of-0420.cmr.xml",\n    "bucket": "protected"\n  }\n]\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"excludedFileExtensions (Optional)- A list of file extensions to ignore when copying files.\nIt can be set up using the following configuration."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"config": {\n  "excludedFileExtensions.$": "$.meta.collection.meta.orca.excludedFileExtensions"\n}\n')),(0,r.kt)("p",{parentName:"li"},"Example: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"collection": {\n  "meta": {\n    "orca": {\n      "excludedFileExtensions": [\n        ".xml"\n      ]\n    }\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defaultRecoveryTypeOverride (Optional)- Overrides the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-orca/blob/master/website/docs/developer/deployment-guide/deployment-with-cumulus.md#orca-optional-variables"},"orca_default_recovery_type")," via a change in the collections configuration under ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," tag as shown below. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "config": {\n    "defaultRecoveryTypeOverride": "{$.event.meta.collection.meta.orca.defaultRecoveryTypeOverride}"\n  }\n')),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    "collection": {\n        "meta":{\n            "orca": {\n              "defaultRecoveryTypeOverride": "Standard"\n          }\n      }\n    }\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defaultBucketOverride (Optional)- Overrides the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-orca/blob/master/website/docs/developer/deployment-guide/deployment-with-cumulus.md#orca-required-variables"},"orca_default_bucket")," to copy recovered files to."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"config": {\n    "defaultBucketOverride": "{$.meta.collection.meta.orca.defaultBucketOverride}"\n  }\n')),(0,r.kt)("p",{parentName:"li"},"Example: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"collection": {\n  "meta": {\n    "orca": {\n      "defaultBucketOverride": "orca-bucket"\n    }\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"s3MultipartChunksizeMb (Optional)- Overrides the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-orca/blob/master/website/docs/developer/deployment-guide/deployment-with-cumulus.md#orca-optional-variables"},"default_multipart_chunksize_mb")," from TF. Defaults to 250."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"config": {\n  "s3MultipartChunksizeMb": "{$.meta.collection.meta.s3MultipartChunksizeMb}"\n}\n')),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"collection": {\n  "meta": {\n    "s3MultipartChunksizeMb": 300\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"asyncOperationId (Optional)- The unique identifier used for tracking requests. If not present, it will be generated."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"config": {\n  "asyncOperationId": "{$.cumulus_meta.asyncOperationId}"\n}\n')),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"cumulus_meta": {\n  "asyncOperationId": "1234"\n}\n')))),(0,r.kt)("p",null,"For full definition of the parameters, see the following schema."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nasa/cumulus-orca/blob/master/tasks/request_from_archive/schemas/config.json"},"request_from_archive schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nasa/cumulus-orca/blob/master/tasks/extract_filepaths_for_granule/schemas/config.json"},"extract_filepath_from_granule schema"))))}d.isMDXComponent=!0},4079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(7462),r=a(7294),o=a(3905),i=a(6126);const l={},s=void 0,c={unversionedId:"templates/pan-zoom-image",id:"templates/pan-zoom-image",title:"pan-zoom-image",description:"The image below can be panned and zoomed using your mouse or the provided buttons.",source:"@site/docs/templates/pan-zoom-image.mdx",sourceDirName:"templates",slug:"/templates/pan-zoom-image",permalink:"/cumulus-orca/docs/templates/pan-zoom-image",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/templates/pan-zoom-image.mdx",tags:[],version:"current",frontMatter:{}},p={},u=[],m={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Interactive Image",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The image below can be panned and zoomed using your mouse or the provided buttons.\nTo reset the image to the original size on the page click ",(0,o.kt)("img",{width:"12px",height:"12px",src:a.resetPic,alt:"Reset Image"}),".\nIf you wish to view the full image on a separate page, click this ",(0,o.kt)("a",{href:a.imageSource,target:"_blank",rel:"noopener noreferrer"},"link"),".")),(0,o.kt)(i.d$,{defaultScale:1,mdxType:"TransformWrapper"},(e=>{let{zoomIn:t,zoomOut:n,resetTransform:l,...s}=e;return(0,o.kt)(r.Fragment,null,(0,o.kt)("div",{className:"tools"},(0,o.kt)("button",{onClick:()=>t()},(0,o.kt)("img",{width:"15px",height:"15px",src:a.zoomInPic,alt:"Zoom In"})),(0,o.kt)("button",{onClick:()=>n()},(0,o.kt)("img",{width:"15px",height:"15px",src:a.zoomOutPic,alt:"Zoom Out"})),(0,o.kt)("button",{onClick:()=>l()},(0,o.kt)("img",{width:"15px",height:"15px",src:a.resetPic,alt:"Reset Image"}))),(0,o.kt)(i.Uv,{mdxType:"TransformComponent"},(0,o.kt)("img",{src:a.imageSource,alt:a.imageAlt})))})))}d.isMDXComponent=!0}}]);