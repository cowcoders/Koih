import { EC2 } from 'aws-sdk';

// import InstanceModel from "../../models/InstanceModel";

function parseDescribeInstances(data) { //: [InstanceModel]
  return [];
}

export function searchInstances() {
  return new Promise((resolve, reject) => {
    const ec2 = new EC2();
    ec2.describeInstances({}, (err, data) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(parseDescribeInstances(data));
      }
    });
  })
}
