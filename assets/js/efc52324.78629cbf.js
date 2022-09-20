"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[7445],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4673:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"research-logging-libraries",title:"Logging Libraries Research Notes",description:"Research notes on some potential logging libraries."},s=void 0,u={unversionedId:"developer/research/research-logging-libraries",id:"developer/research/research-logging-libraries",title:"Logging Libraries Research Notes",description:"Research notes on some potential logging libraries.",source:"@site/docs/developer/research/research-logging-libraries.md",sourceDirName:"developer/research",slug:"/developer/research/research-logging-libraries",permalink:"/cumulus-orca/docs/developer/research/research-logging-libraries",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/research/research-logging-libraries.md",tags:[],version:"current",frontMatter:{id:"research-logging-libraries",title:"Logging Libraries Research Notes",description:"Research notes on some potential logging libraries."},sidebar:"dev_guide",previous:{title:"Deep Archive Storage Migration Research Notes",permalink:"/cumulus-orca/docs/developer/research/research-deep-archive-migration"}},c={},p=[{value:"Preconditions",id:"preconditions",level:2},{value:"CumulusLogger",id:"cumuluslogger",level:2},{value:"Default Logger",id:"default-logger",level:2},{value:"Powertools",id:"powertools",level:2},{value:"Recommendation",id:"recommendation",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"preconditions"},"Preconditions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As ORCA runs in AWS, logger should tie into AWS structures."),(0,o.kt)("li",{parentName:"ul"},"Presently, ORCA uses the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nasa/cumulus-message-adapter-python#logging-with-cumuluslogger"},"Python CumulusLogger"),"."),(0,o.kt)("li",{parentName:"ul"},"Presently, many ORCA tasks use ",(0,o.kt)("inlineCode",{parentName:"li"},"run_cumulus_task"),", a related component of the Python CumulusLogger.")),(0,o.kt)("h2",{id:"cumuluslogger"},"CumulusLogger"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Developed by Cumulus for interactions with AWS and ",(0,o.kt)("a",{parentName:"li",href:"https://nasa.github.io/cumulus/docs/workflows/input_output"},"CMA input/output"),"."),(0,o.kt)("li",{parentName:"ul"},"Adds some useful AWS context, though it is all redundant with information already stored in our CloudWatch logs, as long as we have one log-group per lambda."),(0,o.kt)("li",{parentName:"ul"},"Tied to CMA-specific features such as ",(0,o.kt)("a",{parentName:"li",href:"https://nasa.github.io/cumulus/docs/workflows/input_output#replaceconfig-cumulus-remote-message"},"S3 storage of inputs"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"run_cumulus_task")," handles pulling in S3 events."))),(0,o.kt)("li",{parentName:"ul"},"Tied to CMA-specific ",(0,o.kt)("a",{parentName:"li",href:"https://nasa.github.io/cumulus/docs/workflows/input_output#cma-inputoutput"},"input/output"),", which varies based on whether the running environment is AWS or Local."),(0,o.kt)("li",{parentName:"ul"},"Maintained by/for Cumulus, which has caused conflicts with our development."),(0,o.kt)("li",{parentName:"ul"},"Does not implement standard logging interface, requiring knowledge of the CumulusLogger-specific functions.")),(0,o.kt)("p",null,"Example Cloudwatch message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "message": "some string",\n    "sender": "lambda_name",\n    "version": "$LATEST",\n    "timestamp": "2022-09-02T18:06:00.782125",\n    "level": "error"\n}\n')),(0,o.kt)("p",null,"Recommend we move away from CumulusLogger where possible.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"ReplaceConfig")," keys that would indicate use of the Logger's features are red-herrings, and the input formatting can be handled via standard AWS Step Function construction.\n",(0,o.kt)("inlineCode",{parentName:"p"},"copy_to_glacier")," is the one Lambda that Cumulus calls in their own workflows, and thus must be able to handle ",(0,o.kt)("a",{parentName:"p",href:"https://nasa.github.io/cumulus/docs/workflows/input_output#replaceconfig-cumulus-remote-message"},"S3 storage of inputs"),"."),(0,o.kt)("h2",{id:"default-logger"},"Default Logger"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python's default ",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/logging.html"},"logging library")," provides an excellent interface.\nAny proposed options should implement the standard library to maintain ",(0,o.kt)("a",{parentName:"li",href:"/cumulus-orca/docs/developer/development-guide/code/clean-architecture"},"clean architecture"),"."),(0,o.kt)("li",{parentName:"ul"},"Standard output is picked up by Lambda's Cloudwatch logs with no additional effort."),(0,o.kt)("li",{parentName:"ul"},"Lacks information that would be helpful in determining AWS context unless added manually.")),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import json\nimport logging\n\nLOGGER = logging.getLogger(__name__)\n\ndef lambda_handler(event, context):\n    LOGGER.error(\"some string\")\n    return {\n        'statusCode': 200,\n        'body': json.dumps('results')\n    }\n\n")),(0,o.kt)("p",null,"Resulting Cloudwatch message:\n",(0,o.kt)("inlineCode",{parentName:"p"},"[ERROR]\t2022-09-02T19:40:17.662Z\t3020ae47-dd25-41b3-80fc-8bb3514cfb5c\tsome string")),(0,o.kt)("h2",{id:"powertools"},"Powertools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Available and documented on ",(0,o.kt)("a",{parentName:"li",href:"https://awslabs.github.io/aws-lambda-powertools-python/latest/"},"AWSLabs"),"."),(0,o.kt)("li",{parentName:"ul"},"Implements Python's default ",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/logging.html"},"logging library"),"."),(0,o.kt)("li",{parentName:"ul"},"Requires environment variables for setup values."),(0,o.kt)("li",{parentName:"ul"},"Automatically adds AWS context information."),(0,o.kt)("li",{parentName:"ul"})),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import json\nimport os\n\nimport aws_lambda_powertools\nfrom aws_lambda_powertools.utilities.typing import LambdaContext\n\nos.environ["POWERTOOLS_SERVICE_NAME"] = "powertools_test_service_name"\nos.environ["LOG_LEVEL"] = "INFO"\n\nLOGGER = aws_lambda_powertools.Logger()\n\n\ndef some_func():\n    LOGGER.info("Doing thing.", extra={"someKey": 5})\n\n    try:\n        raise KeyError("some key error")\n    except Exception as ex:\n        LOGGER.exception("Auto logging")\n        LOGGER.error(f"Manual logging: \'{ex}\'")\n    return\n\n\n@LOGGER.inject_lambda_context(log_event=True)  # event may be security risk\ndef lambda_handler(\n        event, context: LambdaContext\n):\n    some_func()\n    return {\n        \'statusCode\': 200,\n        \'body\': json.dumps(\'results\')\n    }\n')),(0,o.kt)("p",null,"Resulting Cloudwatch message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "level": "ERROR",\n    "location": "some_func:23",\n    "message": "Manual logging: \'\'some key error\'\'",\n    "timestamp": "2022-09-01 20:11:25,278+0000",\n    "service": "powertools_test_service_name",\n    "cold_start": true,\n    "function_name": "lambda_name",\n    "function_memory_size": "128",\n    "function_arn": "arn:aws:lambda:us-west-2:236859827343:function:lambda_name",\n    "function_request_id": "bdb3bb29-5023-498a-b7a5-0582b03e215e",\n    "xray_trace_id": "1-631111ec-64c294e313312cb53eb68777"\n}\n')),(0,o.kt)("h2",{id:"recommendation"},"Recommendation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nasa/cumulus-message-adapter-python#logging-with-cumuluslogger"},"Python CumulusLogger")," is tied to Cumulus,\nit is recommended that we decouple from it.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Any references to deployed layer should be removed from Terraform, including deployed layer and Step Function configuration."),(0,o.kt)("li",{parentName:"ul"},"Schema validation checks should be added to calling function."),(0,o.kt)("li",{parentName:"ul"},"References to run_cumulus_task should be replaced with manual transformation of inputs into non-architecture-specific formats.\n",(0,o.kt)("a",{parentName:"li",href:"https://bugs.earthdata.nasa.gov/browse/ORCA-522"},"Jira card for removal here"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"copy_to_glacier")," S3 requirements could be accomplished with a helper Lambda developed initially by us and maintained by Cumulus that handles the S3 retrieval\nand passes the result along to ",(0,o.kt)("inlineCode",{parentName:"li"},"copy_to_glacier"),".\n",(0,o.kt)("a",{parentName:"li",href:"https://bugs.earthdata.nasa.gov/browse/ORCA-520"},"Jira card for implementation here"),"."))),(0,o.kt)("li",{parentName:"ul"},"Given the standardized implementation and features of Powertools, it is a good pick for replacing the CumulusLogger in Orca code.\n",(0,o.kt)("a",{parentName:"li",href:"https://bugs.earthdata.nasa.gov/browse/ORCA-521"},"Jira card for replacement here"),"."),(0,o.kt)("li",{parentName:"ul"},"Recommend installing via Pip install as opposed to AWS Layer.\n",(0,o.kt)("a",{parentName:"li",href:"https://awslabs.github.io/aws-lambda-powertools-python/latest/core/logger/#removing-additional-keys"},"Documentation indicates"),' that there can be "unintended side effects if you use Layers" with certain features.'),(0,o.kt)("li",{parentName:"ul"},"Since Powertools properly implements the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/logging.html"},"standard Logging library"),", we can now use the ",(0,o.kt)("inlineCode",{parentName:"li"},"logging.exception"),' method to auto-capture and log exceptions, including stack traces.\nFrom the "Auto logging" code example above, Cloudwatch message is:',(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'{\n    "level": "ERROR",\n    "location": "some_func:22",\n    "message": "Auto logging",\n    "timestamp": "2022-09-01 20:11:25,278+0000",\n    "service": "powertools_test_service_name",\n    "cold_start": true,\n    "function_name": "lambda_name",\n    "function_memory_size": "128",\n    "function_arn": "arn:aws:lambda:us-west-2:236859827343:function:lambda_name",\n    "function_request_id": "bdb3bb29-5023-498a-b7a5-0582b03e215e",\n    "exception": "Traceback (most recent call last):\\n  File \\"/var/task/powertools_test.py\\", line 20, in some_func\\n    raise KeyError(\\"some key error\\")\\nKeyError: \'some key error\'",\n    "exception_name": "KeyError",\n    "xray_trace_id": "1-631111ec-64c294e313312cb53eb68777"\n}\n'))),(0,o.kt)("li",{parentName:"ul"},"Powertools also contains a ",(0,o.kt)("a",{parentName:"li",href:"https://awslabs.github.io/aws-lambda-powertools-python/latest/core/tracer/"},"Tracing library")," which could be helpful in debugging. Presently untested.")))}d.isMDXComponent=!0}}]);