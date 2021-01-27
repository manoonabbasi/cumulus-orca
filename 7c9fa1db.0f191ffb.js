(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||p[d]||o;return n?r.a.createElement(m,i(i({ref:t},c),{},{components:n})):r.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(107)),l={id:"deployment-with-cumulus",title:"Deploying ORCA with Cumulus",description:"Provides developer information for ORCA code deployment with Cumulus."},i={unversionedId:"developer/deployment-guide/deployment-with-cumulus",id:"developer/deployment-guide/deployment-with-cumulus",isDocsHomePage:!1,title:"Deploying ORCA with Cumulus",description:"Provides developer information for ORCA code deployment with Cumulus.",source:"@site/docs/developer/deployment-guide/deployment-with-cumulus.md",slug:"/developer/deployment-guide/deployment-with-cumulus",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment-with-cumulus",editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/deployment-guide/deployment-with-cumulus.md",version:"current"},u=[{value:"Configure the Terraform backend",id:"configure-the-terraform-backend",children:[]},{value:"Configure and deploy the <code>main</code> root module",id:"configure-and-deploy-the-main-root-module",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Deploying with Terraform",id:"deploying-with-terraform",children:[]},{value:"Delete Terraform stack",id:"delete-terraform-stack",children:[]},{value:"Integrating with Cumulus",id:"integrating-with-cumulus",children:[{value:"Define the ORCA workflow (Cumulus &lt; v1.15)",id:"define-the-orca-workflow-cumulus--v115",children:[]},{value:"Integrating ORCA With Cumulus &gt;= v1.15",id:"integrating-orca-with-cumulus--v115",children:[]},{value:"Collection configuration",id:"collection-configuration",children:[]},{value:"Enable <code>Recover Granule</code> button",id:"enable-recover-granule-button",children:[]}]},{value:"Release Documentation:",id:"release-documentation",children:[]}],c={rightToc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Assumptions about OU setup, access, etc."),Object(o.b)("li",{parentName:"ul"},"Setup environment"),Object(o.b)("li",{parentName:"ul"},"Create Glacier S3 bucket"),Object(o.b)("li",{parentName:"ul"},"Followed Cumulus directions")),Object(o.b)("p",null,"ORCA Deployment"),Object(o.b)("p",null,"aws configure --profile default"),Object(o.b)("p",null,'aws s3api create-bucket --bucket orca-bh-sandbox-glacier --profile dr-ou  --create-bucket-configuration "LocationConstraint=us-west-2"\naws s3api put-bucket-versioning  --bucket orca-bh-sandbox-tf-state --versioning-configuration Status=Enabled'),Object(o.b)("p",null,"Changes to files"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"main.tf"),Object(o.b)("li",{parentName:"ul"},"variables.tf"),Object(o.b)("li",{parentName:"ul"},"variables.tfvars")),Object(o.b)("p",null,"Terraform deploy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"terraform init"),Object(o.b)("li",{parentName:"ul"},"terraform apply")),Object(o.b)("p",null,"aws ssm start-session --target i-0650c326450164b73 --document-name AWS-StartPortForwardingSession --parameters portNumber=22,localPortNumber=6868 &\nSsh"),Object(o.b)("p",null,"ENABLE_RECOVERY=true APIROOT=",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://acryfz64bj.execute-api.us-west-2.amazonaws.com/dev/"}),"https://acryfz64bj.execute-api.us-west-2.amazonaws.com/dev/")," npm run serve"),Object(o.b)("h2",{id:"configure-the-terraform-backend"},"Configure the Terraform backend"),Object(o.b)("p",null,"The state of the Terraform deployment is stored in S3. In the following\nexamples, it will be assumed that state is being stored in a bucket called\n",Object(o.b)("inlineCode",{parentName:"p"},"dr-tf-state"),". You can also use an existing bucket, if desired."),Object(o.b)("p",null,"Create the state bucket:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"aws s3api create-bucket --bucket dr-tf-state --create-bucket-configuration LocationConstraint=us-west-2\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," The ",Object(o.b)("inlineCode",{parentName:"p"},"--create-bucket-configuration")," line is only necessary if you are creating your bucket outside of ",Object(o.b)("inlineCode",{parentName:"p"},"us-east-1"),"."),Object(o.b)("p",null,"In order to help prevent loss of state information, it is recommended that\nversioning be enabled on the state bucket:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ aws s3api put-bucket-versioning \\\n    --bucket dr-tf-state \\\n    --versioning-configuration Status=Enabled\n")),Object(o.b)("p",null,"Terraform uses a lock stored in DynamoDB in order to prevent multiple\nsimultaneous updates. In the following examples, that table will be called\n",Object(o.b)("inlineCode",{parentName:"p"},"dr-tf-locks"),"."),Object(o.b)("p",null,"Create the locks table:"),Object(o.b)("p",null,"\u26a0\ufe0f ",Object(o.b)("strong",{parentName:"p"},"Note:")," The ",Object(o.b)("inlineCode",{parentName:"p"},"--billing-mode")," option was recently added to the AWS CLI. You\nmay need to upgrade your version of the AWS CLI if you get an error about\nprovisioned throughput when creating the table."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ aws dynamodb create-table \\\n    --table-name dr-tf-locks \\\n    --attribute-definitions AttributeName=LockID,AttributeType=S \\\n    --key-schema AttributeName=LockID,KeyType=HASH \\\n    --billing-mode PAY_PER_REQUEST\n")),Object(o.b)("h2",{id:"configure-and-deploy-the-main-root-module"},"Configure and deploy the ",Object(o.b)("inlineCode",{parentName:"h2"},"main")," root module"),Object(o.b)("p",null,"These steps should be executed in the root directory of the repo."),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"terraform.tf")," file, substituting the appropriate values for ",Object(o.b)("inlineCode",{parentName:"p"},"bucket"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"dynamodb_table"),". This tells Terraform where to store its\nremote state."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"terraform.tf")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'terraform {\n  backend "s3" {\n    region         = "us-west-2"\n    bucket         = "dr-tf-state"\n    key            = "terraform.tfstate"\n    dynamodb_table = "dr-tf-locks"\n  }\n}\n')),Object(o.b)("h2",{id:"variables"},"Variables"),Object(o.b)("p",null,"First, run a ",Object(o.b)("inlineCode",{parentName:"p"},"mv terraform.tfvars.example terraform.tfvars")," to get a template ",Object(o.b)("inlineCode",{parentName:"p"},"terraform.tfvars")," in your working directory. This is where you will place input variables to Terraform."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Necessary:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ngap_subnets")," - NGAP Subnets (array)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"vpc_id")," - ID of VPC to place resources in - recommended that this be a private VPC (or at least one with restricted access)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"glacier_bucket")," - Bucket with Glacier policy"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"public_bucket")," - Bucket with public permissions (Cumulus public bucket)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"private_bucket")," - Bucket with private permissions (Cumulus private bucket)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"internal_bucket")," - Analogous to the Cumulus internal bucket "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"protected_bucket")," - Analogous to the Cumulus protected bucket"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"permissions_boundary_arn")," - Permission Boundary Arn (Policy) for NGAP compliance"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"postgres_user_pw")," - password for the postgres user"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"database_name")," - disaster_recovery"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"database_app_user")," - druser "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"database_app_user_pw")," - the password for the application user")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Optional:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"prefix")," - Prefix that will be pre-pended to resource names created by terraform.\nDefaults to ",Object(o.b)("inlineCode",{parentName:"li"},"dr"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"profile")," - AWS CLI Profile (configured via ",Object(o.b)("inlineCode",{parentName:"li"},"aws configure"),") to use.\nDefaults to ",Object(o.b)("inlineCode",{parentName:"li"},"default"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"region")," - Your AWS region.\nDefaults to ",Object(o.b)("inlineCode",{parentName:"li"},"us-west-2"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restore_expire_days")," - How many days to restore a file for.\nDefaults to 5."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restore_request_retries")," - How many times to retry a restore request to Glacier.\nDefaults to 3."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restore_retry_sleep_secs")," - How many seconds to wait between retry calls to ",Object(o.b)("inlineCode",{parentName:"li"},"restore_object"),".\nDefaults to 3."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"restore_retrieval_type")," -  the Tier for the restore request. Valid values are 'Standard'|'Bulk'|'Expedited'.\nDefaults to ",Object(o.b)("inlineCode",{parentName:"li"},"Standard"),". Understand the costs associated with the tiers before modifying."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"copy_retries")," - How many times to retry a copy request from the restore location to the archive location.\nDefaults to 3."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"copy_retry_sleep_secs")," - How many seconds to wait between retry calls to ",Object(o.b)("inlineCode",{parentName:"li"},"copy_object"),".\nDefaults to 0."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ddl_dir")," - the location of the ddl dir that contains the sql to create the application database.\nDefaults to 'ddl/'."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"drop_database")," - Whether to drop the database if it exists (True), or keep it (False).\nDefaults to False."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"database_port")," - the port for the postgres database.\nDefaults to '5432'."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"platform")," - indicates if running locally (onprem) or in AWS (AWS).\nDefaults to 'AWS'.")),Object(o.b)("h2",{id:"deploying-with-terraform"},"Deploying with Terraform"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"terraform init"),".\nRun ",Object(o.b)("inlineCode",{parentName:"p"},"terraform plan")," #optional, but allows you to preview the deploy.\nRun ",Object(o.b)("inlineCode",{parentName:"p"},"terraform apply"),"."),Object(o.b)("p",null,"This will deploy ORCA."),Object(o.b)("h2",{id:"delete-terraform-stack"},"Delete Terraform stack"),Object(o.b)("p",null,"If you want to remove it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"terraform destroy\n")),Object(o.b)("h2",{id:"integrating-with-cumulus"},"Integrating with Cumulus"),Object(o.b)("p",null,"Integrate ORCA with Cumulus to be able to recover a granule from the Cumulus Dashboard."),Object(o.b)("h3",{id:"define-the-orca-workflow-cumulus--v115"},"Define the ORCA workflow (Cumulus < v1.15)"),Object(o.b)("p",null,"Copy the workflow from ",Object(o.b)("inlineCode",{parentName:"p"},"workflows/workflows.yml.dr")," into your Cumulus workflow."),Object(o.b)("p",null,"Set the values of these environment variables to the ARN for the\n{prefix}-extract-filepaths-for-granule and {prefix}-request-files lambdas,\nrespectively:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"DR_EXTRACT_LAMBDA_ARN=arn:aws:lambda:us-west-2:012345678912:function:dr_extract_filepaths_for_granule\n\nDR_REQUEST_LAMBDA_ARN=arn:aws:lambda:us-west-2:012345678912:function:dr_request_files\n")),Object(o.b)("p",null,"Add an ",Object(o.b)("inlineCode",{parentName:"p"},"aws")," provider to ",Object(o.b)("inlineCode",{parentName:"p"},"main.tf"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'provider "aws" {\n  version = "~> 2.13"\n  region  = var.region\n  profile = var.profile\n}\n')),Object(o.b)("h3",{id:"integrating-orca-with-cumulus--v115"},"Integrating ORCA With Cumulus >= v1.15"),Object(o.b)("h4",{id:"adding-a-orca-module-to-the-cumulus-deployment"},"Adding a ORCA module to the Cumulus deployment"),Object(o.b)("p",null,"Navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"cumulus-tf/main.tf")," within your Cumulus deployment directory and add the following module:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'module "orca" {\n  source = "https://github.com/ghrcdaac/operational-recovery-cloud-archive/releases/download/1.0.2/orca-1.0.2.zip"\n\n  prefix = var.prefix\n  subnet_ids = module.ngap.ngap_subnets_ids\n  database_port = "5432"\n  database_user_pw = var.database_user_pw\n  database_name = var.database_name\n  database_app_user = var.database_app_user\n  database_app_user_pw = var.database_app_user_pw\n  ddl_dir = "ddl/"\n  drop_database = "False"\n  platform = "AWS"\n  lambda_timeout = 300\n  restore_complete_filter_prefix = ""\n  vpc_id = module.ngap.ngap_vpc.id\n  copy_retry_sleep_secs = 2\n  permissions_boundary_arn = var.permissions_boundary_arn\n  buckets = var.buckets\n  workflow_config = module.cumulus.workflow_config\n  region = var.region\n}\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note"),": This above snippet assumes that you've configured your Cumulus deployment. More information on that process can be found in their ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nasa.github.io/cumulus/docs/deployment/deployment-readme#configure-and-deploy-the-cumulus-tf-root-module"}),"documentation")),Object(o.b)("h4",{id:"add-necessary-variables-unique-to-orca-to-the-cumulus-tf-configuration"},"Add necessary variables (unique to ORCA) to the Cumulus TF configuration"),Object(o.b)("p",null,"To support this module, you'll have to add the following values to your ",Object(o.b)("inlineCode",{parentName:"p"},"cumulus-tf/variables.tf")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'# Variables specific to ORCA\nvariable "database_user_pw" {\n  type = string\n}\n\nvariable "database_name" {\n  type = string\n}\n\nvariable "database_app_user" {\n  type = string\n}\n\nvariable "database_app_user_pw" {\n  type = string\n}\n')),Object(o.b)("p",null,"The values corresponding to these variables must be set in your ",Object(o.b)("inlineCode",{parentName:"p"},"cumulus-tf/terraform.tfvars")," file, but note that many of these variables are actually hardcoded at the time of updating this README"),Object(o.b)("h4",{id:"adding-the-copy-to-glacier-step-to-the-ingest-workflow"},"Adding the Copy To Glacier Step to the Ingest Workflow"),Object(o.b)("p",null,"Navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"cumulus-tf/ingest_granule_workflow.tf"),' then add the following step after the PostToCMR step being sure to change the PostToCMR\'s "Next" parameter equal to "CopyToGlacier"'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'"CopyToGlacier":{\n         "Parameters":{\n            "cma":{\n               "event.$":"$",\n               "task_config":{\n                  "bucket":"{$.meta.buckets.internal.name}",\n                  "buckets":"{$.meta.buckets}",\n                  "distribution_endpoint":"{$.meta.distribution_endpoint}",\n                  "files_config":"{$.meta.collection.files}",\n                  "fileStagingDir":"{$.meta.collection.url_path}",\n                  "granuleIdExtraction":"{$.meta.collection.granuleIdExtraction}",\n                  "collection":"{$.meta.collection}",\n                  "cumulus_message":{\n                     "input":"{[$.payload.granules[*].files[*].filename]}",\n                     "outputs":[\n                        {\n                           "source":"{$}",\n                           "destination":"{$.payload}"\n                        }\n                     ]\n                  }\n               }\n            }\n         },\n         "Type":"Task",\n         "Resource":"${module.orca.copy_to_glacier_lambda_arn}",\n         "Catch":[\n            {\n               "ErrorEquals":[\n                  "States.ALL"\n               ],\n               "ResultPath":"$.exception",\n               "Next":"WorkflowFailed"\n            }\n         ],\n         "Retry":[\n            {\n               "ErrorEquals":[\n                  "States.ALL"\n               ],\n               "IntervalSeconds":2,\n               "MaxAttempts":3\n            }\n         ],\n         "Next":"WorkflowSucceeded"\n      },\n')),Object(o.b)("h3",{id:"collection-configuration"},"Collection configuration"),Object(o.b)("p",null,"To configure a collection to enable ORCA, add the line\n",Object(o.b)("inlineCode",{parentName:"p"},'"granuleRecoveryWorkflow": "DrRecoveryWorkflow"')," to the collection configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n  "queriedAt": "2019-11-07T22:49:46.842Z",\n  "name": "L0A_HR_RAW",\n  "version": "1",\n  "sampleFileName": "L0A_HR_RAW_product_0001-of-0420.h5",\n  "dataType": "L0A_HR_RAW",\n  "granuleIdExtraction": "^(.*)((\\\\.cmr\\\\.json)|(\\\\.iso\\\\.xml)|(\\\\.tar\\\\.gz)|(\\\\.h5)|(\\\\.h5\\\\.mp))$",\n  "reportToEms": true,\n  "createdAt": 1561749178492,\n  "granuleId": "^.*$",\n  "provider_path": "L0A_HR_RAW/",\n  "meta": {\n    "response-endpoint": "arn:aws:sns:us-west-2:012345678912:providerResponseSNS",\n    "granuleRecoveryWorkflow": "DrRecoveryWorkflow"\n  },\n  "files": [\n    {\n')),Object(o.b)("h3",{id:"enable-recover-granule-button"},"Enable ",Object(o.b)("inlineCode",{parentName:"h3"},"Recover Granule")," button"),Object(o.b)("p",null,"To enable the ",Object(o.b)("inlineCode",{parentName:"p"},"Recover Granule")," button on the Cumulus Dashboard (available at github.com/nasa/cumulus-dashboard),\nset the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"ENABLE_RECOVERY=true"),"."),Object(o.b)("p",null,"Here is an example command to run the Cumulus Dashboard locally:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"  APIROOT=https://uttm5y1jcj.execute-api.us-west-2.amazonaws.com:8000/dev ENABLE_RECOVERY=true npm run serve\n")),Object(o.b)("h2",{id:"release-documentation"},"Release Documentation:"),Object(o.b)("p",null,"Information about how to create an ORCA release can be found here"))}b.isMDXComponent=!0}}]);