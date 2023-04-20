#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {VPCStack} from "../lib/vpc";

import console = require("console");

const app = new cdk.App();

const account = app.node.tryGetContext("account");
const region = app.node.tryGetContext("region");
const tagname = app.node.tryGetContext("tagName");
const tagvalue = app.node.tryGetContext("tagValue");


const myVPCStack = new VPCStack(app, "myVPCStack", {
  env: { account: account, region: region },
  stackName: "ohdsi-VPCStack"
});
cdk.Tags.of(myVPCStack).add(tagname,tagvalue);