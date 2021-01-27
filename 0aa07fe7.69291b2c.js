(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),c=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||p[d]||o;return n?c.a.createElement(m,i(i({ref:t},l),{},{components:n})):c.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<o;l++)r[l]=n[l];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),c=n(7),o=(n(0),n(107)),r={id:"deployment-s3-bucket",title:"Creating the Glacier Bucket",description:"Provides developer with information on archive storage solutions."},i={unversionedId:"developer/deployment-guide/deployment-s3-bucket",id:"developer/deployment-guide/deployment-s3-bucket",isDocsHomePage:!1,title:"Creating the Glacier Bucket",description:"Provides developer with information on archive storage solutions.",source:"@site/docs/developer/deployment-guide/creating-orca-glacier-bucket.md",slug:"/developer/deployment-guide/deployment-s3-bucket",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment-s3-bucket",editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/deployment-guide/creating-orca-glacier-bucket.md",version:"current",sidebar:"dev_guide",previous:{title:"Creating a Deployment Environment",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment-environment"},next:{title:"Testing Deployment",permalink:"/cumulus-orca/docs/developer/deployment-guide/testing_deployment"}},s=[{value:"Create the ORCA Archive Bucket",id:"create-the-orca-archive-bucket",children:[]},{value:"Provide Cross Account (OU) Access",id:"provide-cross-account-ou-access",children:[{value:"Filling out the form",id:"filling-out-the-form",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ORCA maintains a cloud ready backup of science and ancillary data in an\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/s3/storage-classes/#Infrequent_access"}),"S3-IA"),"\nbucket and utilizes ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html"}),"AWS bucket transition policies"),"\nto store the data in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/cumulus-orca/docs/about/introduction/intro-glossary#glacier-storage"}),"S3 Glacier"),"\nfor the long term. The ORCA archive bucket can live in any NGAP Organizational\nUnit (OU)."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"ORCA S3 Glacier Bucket OU Placement")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Best practice is to place the ORCA archive bucket in your Disaster Recovery OU.\nThis is done to better separate the costs associated with the cloud ready backup\nfrom primary Cumulus holdings and ingest and archive activity. See the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/cumulus-orca/docs/about/architecture/architecture-intro"}),"ORCA Architecture Introduction documentation"),"\nfor more information."))),Object(o.b)("p",null,"The sections below go into further detail on creating the ORCA archive bucket."),Object(o.b)("h2",{id:"create-the-orca-archive-bucket"},"Create the ORCA Archive Bucket"),Object(o.b)("p",null,"Prior to creating the S3 bucket, make sure the deployment environment is created\nper the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/cumulus-orca/docs/developer/deployment-guide/deployment-environment"}),"Creating the Deployment Environment"),"\ndocumentation."),Object(o.b)("p",null,"To create the ORCA archive bucket run the AWS CLI command below and replace the\n","[","place holder text","]"," with proper values for your deployment."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'aws s3api create-bucket \\\n    --bucket [orca bucket name] \\\n    --profile [AWS OU profile]  \\\n    --region us-west-2 \\\n    --create-bucket-configuration "LocationConstraint=us-west-2"\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"[","orca bucket name","]")," - This is the name of your ORCA archive bucket. Example: sandbox-orca-glacier-archive"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"[","AWS OU profile","]")," - This is the AWS profile name to use to connect to the proper OU where the bucket will be created.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"--region us-west-2")," and ",Object(o.b)("inlineCode",{parentName:"p"},'--create-bucket-configuration "LocationConstraint=us-west-2"'),"\nlines are only necessary if you are creating your bucket outside of ",Object(o.b)("strong",{parentName:"p"},"us-east-1"),"."))),Object(o.b)("p",null,"For more information on creating an S3 bucket, see the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html"}),'AWS "Creating a Bucket" documentation'),"\nand the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nasa.github.io/cumulus/docs/deployment/create_bucket"}),'Cumulus "Creating an S3 Bucket" documentation'),"."),Object(o.b)("h2",{id:"provide-cross-account-ou-access"},"Provide Cross Account (OU) Access"),Object(o.b)("p",null,"Per best practice, the ORCA archive bucket will be created in the Disaster\nRecovery OU and the additional ORCA components will be created in the Cumulus OU.\nIn order for the components in the Cumulus OU to interact with the ORCA archive\nbucket in the Cumulus OU, cross account bucket access privileges are needed. This\nsection details the steps needed to request the cross account bucket access."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Deploying ORCA with Objects in Different OUs")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you are following best practice and have created your ORCA archive bucket in\nthe Disaster Recovery OU, you must have cross account bucket access permissions\ncreated and enabled before deploying the ORCA code. If you do not, your deployment\nwill return with the following error."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"module.orca.module.orca_lambdas.aws_s3_bucket_notification.copy_lambda_trigger: Creating...\n\nError: Error putting S3 notification configuration: AccessDenied: Access Denied\n    status code: 403, request id: 2E31C2ACD124B50B, host id: 0JrRBUioe/gT......\n")))),Object(o.b)("h3",{id:"filling-out-the-form"},"Filling out the form"),Object(o.b)("p",null,"First, create a NASD ticket for cross account bucket access. This is a turn key\nrequest to NGAP. The link to create a ticket is available\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://bugs.earthdata.nasa.gov/servicedesk/customer/portal/7/create/80"}),"here"),"."),Object(o.b)("p",null,"Next, fill out the form. The sections below provide information on the data needed\nfor each of the fields and where to look for information."),Object(o.b)("h4",{id:"project-name"},"Project Name"),Object(o.b)("p",null,"This is the name of the Disaster Recover OU where the ORCA archive bucket resides.\nThe project name can be found in your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://cloud.earthdata.nasa.gov/"}),"Cloud Tamer"),"\naccount and is usually in the format of ","[","project name","]","-app-","[","application name","]","-","[","environment","]","-","[","4 digit number","]",".\nFor example, an ORCA disaster recovery OU project name may look like the following\norca-app-dr-sandbox-1234."),Object(o.b)("h4",{id:"account-type"},"Account Type:"),Object(o.b)("p",null,"This is the OU environment the bucket resides in. Typical values for this field\nare Sandbox, SIT, UAT, and Production."),Object(o.b)("h4",{id:"business-justification"},"Business Justification:"),Object(o.b)("p",null,"This is the business justification for the cross account bucket access. Below is\nan example of a justification."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ORCA Cumulus application in the Cumulus Sandbox OU needs to read/write to\nthe ORCA DR account S3 bucket in order to create an operational archive copy of\nORCA data and recover data back to the primary Cumulus data holdings in case\nof a failure. This cross account access will allow the Cumulus application to\nseamlessly perform these functions and provide operators with the capability to\ntest and verify disaster recovery scenarios.")),Object(o.b)("h4",{id:"bucket-namess"},"Bucket Names(s):"),Object(o.b)("p",null,"This is the name of the ORCA archive bucket created in the Disaster Recover OU.\nBelow is an example name of an ORCA archive bucket."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"sandbox-orca-glacier-archive")),Object(o.b)("h4",{id:"policy"},"Policy:"),Object(o.b)("p",null,"The policy section is the JSON policy requested for the ORCA archive bucket in\nthe Disaster Recovery OU. The policy shown below can be used with some minor\nmodifications."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "Cross Account Access",\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::909121343565:root"\n      },\n      "Action": [\n        "s3:GetObject*",\n        "s3:RestoreObject",\n        "s3:GetBucket*",\n        "s3:ListBucket",\n        "s3:PutBucketNotification"\n      ],\n      "Resource": [\n        "arn:aws:s3:::sandbox-orca-glacier-archive",\n        "arn:aws:s3:::sandbox-orca-glacier-archive/*"\n      ]\n    },\n    {\n      "Sid": "Cross Account Write Access",\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::909121343565:root"\n      },\n      "Action": "s3:PutObject*",\n      "Resource": [\n        "arn:aws:s3:::sandbox-orca-glacier-archive/*"\n      ],\n      "Condition": {\n        "StringEquals": {\n          "s3:x-amz-acl": "bucket-owner-full-control"\n        }\n      }\n    }\n  ]\n}\n')),Object(o.b)("p",null,"Change the values of the Principal and Resource keys to utilize the example above\nfor your JSON policy."),Object(o.b)("p",null,"The Principal value is the AWS root user for your Cumulus application that will\naccess the ORCA archive bucket. The value for this resource can be retrieved by\nperforming the following."),Object(o.b)("p",null,"Using your AWS CLI client run the following command to get the account number:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'aws sts get-caller-identity\n\n{\n    "UserId": "ABCWXYZ123...",\n    "Account": "90912...",\n    "Arn": "arn:aws:iam::90912...:user/NGAPShApplicationDeveloper-someone-123"\n}\n')),Object(o.b)("p",null,"Replace the value of ",Object(o.b)("inlineCode",{parentName:"p"},"arn:aws:iam::909121343565:root")," with the value of your\naccount number."),Object(o.b)("p",null,"The Resource value is the bucket and bucket paths that the Cumulus application\ncan access. Replace ",Object(o.b)("inlineCode",{parentName:"p"},"arn:aws:s3:::sandbox-orca-glacier-archive")," with the name\nof the Orca archive bucket created in the previous section."))}u.isMDXComponent=!0}}]);