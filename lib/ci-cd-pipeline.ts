import * as cdk from 'aws-cdk-lib';
import * as pipelines from "aws-cdk-lib/pipelines";


export class CICDPipelineStack extends cdk.Stack {

    //public readonly VPC : ec2.Vpc;
    //public readonly rdsEP : ec2.InterfaceVpcEndpoint;

    constructor(scope : cdk.App, id : string, props : cdk.StackProps) {
        super(scope, id, props);

        /*
        const pipeline = new pipelines.CodePipeline(this, "Pipeline", {
            pipelineName: "CDK-Pipeline",
            synth: new pipelines.ShellStep('Synth', {
                input: pipelines.CodePipelineSource.gitHub
            })
        });
        */
    }
}