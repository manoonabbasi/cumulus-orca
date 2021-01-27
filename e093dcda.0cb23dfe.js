(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(107)),i={id:"deployment-environment",title:"Creating a Deployment Environment",description:"Provides developer with information on setting up deployment environment."},l={unversionedId:"developer/deployment-guide/deployment-environment",id:"developer/deployment-guide/deployment-environment",isDocsHomePage:!1,title:"Creating a Deployment Environment",description:"Provides developer with information on setting up deployment environment.",source:"@site/docs/developer/deployment-guide/setting-up-deployment-environment.md",slug:"/developer/deployment-guide/deployment-environment",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment-environment",editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/deployment-guide/setting-up-deployment-environment.md",version:"current",sidebar:"dev_guide",previous:{title:"Developer Deployment",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment"},next:{title:"Creating the Glacier Bucket",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment-s3-bucket"}},c=[{value:"Deployment Tool Requirements",id:"deployment-tool-requirements",children:[]},{value:"Deployment Environment Setup",id:"deployment-environment-setup",children:[{value:"Installing Terraform",id:"installing-terraform",children:[]},{value:"Configure AWS CLI Profiles",id:"configure-aws-cli-profiles",children:[]}]}],s={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In order to deploy ORCA into an NGAP environment with Cumulus, a deployment\nenvironment needs be created. The sections below describe the tool chain needed\nand any additional environmental setup that should occur. The setup for deploying\nORCA is similar to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nasa.github.io/cumulus/docs/deployment/deployment-readme#requirements"}),"Cumulus deployment requirements"),".\nThe sections below assume that the end user is using a Linux or MacOS environment."),Object(a.b)("h2",{id:"deployment-tool-requirements"},"Deployment Tool Requirements"),Object(a.b)("p",null,"The following tools should be installed to perform an ORCA deployment."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"git")),Object(a.b)("li",{parentName:"ul"},"zip/unzip"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://aws.amazon.com/cli/"}),"AWS CLI")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html"}),"AWS CLI Session Manager")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/tfutils/tfenv"}),"Terraform Version Manager")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.terraform.io/intro/index.html"}),"Terraform")," v0.13.6 and up. Please see the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#installing-terraform"}),"installing terraform instructions"),".")),Object(a.b)("h2",{id:"deployment-environment-setup"},"Deployment Environment Setup"),Object(a.b)("p",null,"Setting up the development environment consists of installing the proper Terraform\nversion using Terraform Version Manager and creating the AWS profiles for connecting\nto the proper NGAP OU for your application."),Object(a.b)("h3",{id:"installing-terraform"},"Installing Terraform"),Object(a.b)("p",null,"Using Terraform Version Manager install the latest supported version of terraform\nusing the command below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"tfenv install 0.13.6\n")),Object(a.b)("h3",{id:"configure-aws-cli-profiles"},"Configure AWS CLI Profiles"),Object(a.b)("p",null,"Configure the AWS CLI with two profiles. The first profile should be the default\nand the access information should be for the Cumulus OU. The second profile should\nbe have access information for the Disaster Recovery OU."),Object(a.b)("p",null,"Use the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.earthdatacloud.nasa.gov"}),"Cloud Tamer")," application to create\nlong term access keys to both the Cumulus and Recovery OU environments. Using the\nAccess Key ID and Secret Access Key values configure the different profiles as seen\nbelow."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Creating the Default Profile.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"aws configure --profile default\n\nAWS Access Key ID []: Your AWS Access Key ID Value for Cumulus OU\nAWS Secret Access Key []: Your AWS Secret Access Key Value for Cumulus OU\nDefault region name []: us-west-2\nDefault output format []: json\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Creating the Disaster Recovery Profile")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"aws configure --profile drou-sandbox\n\nAWS Access Key ID []: Your AWS Access Key ID Value for Disaster Recovery OU\nAWS Secret Access Key []: Your AWS Secret Access Key Value for Disaster Recovery OU\nDefault region name []: us-west-2\nDefault output format []: json\n")))}u.isMDXComponent=!0},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(b,l(l({ref:t},s),{},{components:n})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);