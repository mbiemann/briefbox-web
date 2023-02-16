from aws_cdk import App, CfnOutput, Stack, RemovalPolicy
from aws_cdk.aws_s3 import Bucket, BucketAccessControl
from aws_cdk.aws_s3_deployment import BucketDeployment, Source

app = App()

stack = Stack(
    scope=app,
    id="stack",
    stack_name="briefbox-web",
)

bucket = Bucket(
    scope=stack,
    id="bucket",
    public_read_access=True,
    website_index_document="index.html",
    website_error_document="index.html",
    removal_policy=RemovalPolicy.DESTROY,
)

BucketDeployment(
    scope=stack,
    id="deploy-dist",
    destination_bucket=bucket,
    sources=[
        Source.asset("./dist/briefbox-web"),
    ],
    access_control=BucketAccessControl.PUBLIC_READ,
)

CfnOutput(
    scope=stack,
    id="bucket-website-url",
    value=bucket.bucket_website_url,
)

app.synth()
