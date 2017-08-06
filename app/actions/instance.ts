import IPCConstants from "../utils/IPCConstants";
import InstanceModel from "../models/InstanceModel";

export const LOAD_INSTANCES_INIT = 'instance/LOAD_INSTANCES_INIT';
export const LOAD_INSTANCES_SUCCESS = 'instance/LOAD_INSTANCES_SUCCESS';
export const LOAD_INSTANCES_FAIL = 'instance/LOAD_INSTANCES_FAIL';

export const NEW_INSTANCE_INIT = 'instance/NEW_INSTANCE_INIT';
export const NEW_INSTANCE_SUCCESS = 'instance/NEW_INSTANCE_SUCCESS';
export const NEW_INSTANCE_FAIL = 'instance/NEW_INSTANCE_FAIL';


export function loadInstances() {
  return {
    ipc: true,
    types: [LOAD_INSTANCES_INIT, LOAD_INSTANCES_SUCCESS, LOAD_INSTANCES_FAIL],
    promise: ipcClient => ipcClient.send(IPCConstants.GET_INSTANCES())
  };
}

export function newInstance(instance: InstanceModel) {
  return {
    ipc: true,
    types: [NEW_INSTANCE_INIT, NEW_INSTANCE_SUCCESS, NEW_INSTANCE_FAIL],
    promise: ipcClient => ipcClient.send(IPCConstants.NEW_INSTANCE(), instance)
  };
}
