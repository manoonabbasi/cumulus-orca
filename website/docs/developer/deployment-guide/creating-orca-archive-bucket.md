---
id: deployment-s3-bucket
title: Creating the Archive Bucket
description: Provides developer with information on archive storage solutions.
---

ORCA maintains a cloud ready backup of science and ancillary data 
in one of various [storage classes](../../operator/storage-classes.md) 
in [S3](https://aws.amazon.com/s3/)
for the long term. The ORCA archive bucket can live in any NGAP Organizational
Unit (OU).

:::important Archive Bucket OU Placement

Best practice is to place the ORCA archive bucket in your Disaster Recovery OU.
This is done to better separate the costs associated with the cloud ready backup
from primary Cumulus holdings and ingest and archive activity. See the
[ORCA Architecture Introduction documentation](../../about/architecture/architecture-intro.mdx)
for more information.

:::

The sections below go into further detail on creating the ORCA archive bucket.

## Create the ORCA Archive and Report Buckets

Prior to creating the S3 buckets, make sure the deployment environment is created
per the [Creating the Deployment Environment](setting-up-deployment-environment.mdx)
documentation.

To create the ORCA buckets run the AWS CLI command below twice, once for your archive bucket and once for your report bucket.
Replace the \[place holder text\] with proper values for your deployment.

```bash
aws s3api create-bucket \
    --bucket [orca bucket name] \
    --profile [AWS OU profile]  \
    --region us-west-2 \
    --create-bucket-configuration "LocationConstraint=us-west-2"
```

- **\[orca bucket name\]** - This is the name of your bucket. Example: `sandbox-orca-archive` and `sandbox-orca-reports`
- **\[AWS OU profile\]** - This is the AWS profile name to use to connect to the proper OU where the bucket will be created.

:::note

The `--region us-west-2` and `--create-bucket-configuration "LocationConstraint=us-west-2"`
lines are only necessary if you are creating your bucket outside of **us-east-1**.

:::

For more information on creating an S3 bucket, see the
[AWS "Creating a Bucket" documentation](http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html)
and the [Cumulus "Creating an S3 Bucket" documentation](https://nasa.github.io/cumulus/docs/deployment/create_bucket).


## Provide Cross Account (OU) Access

Per best practice, the ORCA archive bucket will be created in the Disaster
Recovery OU and the additional ORCA components will be created in the Cumulus OU.
In order for the components in the Cumulus OU to interact with the ORCA archive
bucket in the Cumulus OU, cross account bucket access privileges are needed. This
section details the steps needed to request the cross account bucket access.

:::warning Deploying ORCA with Objects in Different OUs

If you are following best practice and have created your ORCA archive bucket in
the Disaster Recovery OU, you must have cross account bucket access permissions
created and enabled before deploying the ORCA code. If you do not, your deployment
will return with the following error.

```
module.orca.module.orca_lambdas.aws_s3_bucket_notification.copy_lambda_trigger: Creating...

Error: Error putting S3 notification configuration: AccessDenied: Access Denied
	status code: 403, request id: 2E31C2ACD124B50B, host id: 0JrRBUioe/gT......
```

:::

### Filling out the form

First, create a NASD ticket for cross account bucket access. This is a turn key
request to NGAP. The link to create a ticket is available
[here](https://bugs.earthdata.nasa.gov/servicedesk/customer/portal/7/create/80).

Next, fill out the form. The sections below provide information on the data needed
for each of the fields and where to look for information.


#### Project Name

This is the name of the Disaster Recover OU where the ORCA archive bucket resides.
The project name can be found in your [Cloud Tamer](http://cloud.earthdata.nasa.gov/)
account and is usually in the format of \[project name\]-app-\[application name\]-\[environment\]-\[4 digit number\].
For example, an ORCA disaster recovery OU project name may look like the following
orca-app-dr-sandbox-1234.


#### Account Type:

This is the OU environment the bucket resides in. Typical values for this field
are Sandbox, SIT, UAT, and Production.


#### Business Justification:

This is the business justification for the cross account bucket access. Below is
an example of a justification.

> The ORCA Cumulus application in the Cumulus Sandbox OU needs to read/write to
> the ORCA DR account S3 buckets in order to create an operational archive copy of
> ORCA data and recover data back to the primary Cumulus data holdings in case
> of a failure. Note that only `GLACIER` and `DEEP_ARCHIVE` storage types are allowed for objects written to the bucket. This cross account access will allow the Cumulus application to
> seamlessly perform these functions and provide operators with the capability to
> test and verify disaster recovery scenarios.


#### Bucket Names(s):

This is the name of the ORCA archive bucket created in the Disaster Recover OU.
Below is an example name of an ORCA archive bucket and ORCA report bucket.

> sandbox-orca-archive
> sandbox-orca-reports

#### Policy:

The policy section is the JSON policy requested for the ORCA archive bucket in
the Disaster Recovery OU.

##### Archive Bucket:

The policy shown below can be used with some minor
modifications, which will be detailed below.

```json
{
   "Version":"2012-10-17",
   "Statement":[
      {
         "Sid":"Cross Account Access",
         "Effect":"Allow",
         "Principal":{
            "AWS":"arn:aws:iam::012345678912:root"
         },
         "Action":[
            "s3:GetObject*",
            "s3:RestoreObject",
            "s3:GetBucket*",
            "s3:ListBucket",
            "s3:PutBucketNotification",
            "s3:GetInventoryConfiguration",
            "s3:PutInventoryConfiguration",
            "s3:ListBucketVersions"
         ],
         "Resource":[
            "arn:aws:s3:::sandbox-orca-archive",
            "arn:aws:s3:::sandbox-orca-archive/*"
         ]
      },
      {
         "Sid":"Cross Account Write Access",
         "Effect":"Allow",
         "Principal":{
            "AWS":"arn:aws:iam::012345678912:root"
         },
         "Action":"s3:PutObject*",
         "Resource":[
            "arn:aws:s3:::sandbox-orca-archive/*"
         ],
         "Condition":{
            "StringEquals":{
               "s3:x-amz-acl":"bucket-owner-full-control",
               "s3:x-amz-storage-class":[
                  "GLACIER",
                  "DEEP_ARCHIVE"
               ]
            }
         }
      }
   ]
}
```

The Principal value is the AWS root user for your Cumulus application that will
access the ORCA archive bucket. The value for this can be retrieved by
performing the following.

First, change your connection to the Cumulus account/OU rather than the Disaster Recovery account/OU.
Then, using your AWS CLI client run the following command to get the account number:

```bash
aws sts get-caller-identity

{
    "UserId": "ABCWXYZ123...",
    "Account": "90912...",
    "Arn": "arn:aws:iam::90912...:user/NGAPShApplicationDeveloper-someone-123"
}
```

Replace the number in `arn:aws:iam::012345678912:root` with the value of your account number.

The Resource value is the bucket and bucket paths that the Cumulus application
can access. Replace `sandbox-orca-archive` with the name
of the Orca archive bucket created in the previous section.

##### Reports Bucket:

The policy shown below can be used with some minor
modifications, which will be detailed below.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Cross Account Access",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::012345678912:root"
      },
      "Action": [
        "s3:GetObject*",
        "s3:GetBucket*",
        "s3:ListBucket",
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:PutBucketNotification"
      ],
      "Resource": [
        "arn:aws:s3:::sandbox-orca-archive",
        "arn:aws:s3:::sandbox-orca-archive/*"
      ]
    },
    {
      "Sid": "Inventory-sandbox-orca-archive",
      "Effect": "Allow",
      "Principal": {
        "Service": "s3.amazonaws.com"
      },
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::sandbox-orca-archive/*",
      "Condition": {
        "StringEquals": {
      	  "s3:x-amz-acl": "bucket-owner-full-control",
      	  "aws:SourceAccount": "000000000000"
        },
      	"ArnLike": {
      	  "aws:SourceArn": "arn:aws:s3:::sandbox-orca-archive"
      	}
      }
    }
  ]
}
```
The Principal value is the AWS root user for your Cumulus application that will
access the ORCA archive bucket.
See the Archive Bucket instructions for assistance getting this value.

Replace the number in `arn:aws:iam::012345678912:root` with the value of your account number.
See the Archive Bucket instructions for assistance getting this value.

Replace the number `000000000000` with your DR account number.

The Resource value is the bucket and bucket paths that the Cumulus application
can access. Replace `sandbox-orca-archive` with the name
of the Orca archive bucket created in the previous section.