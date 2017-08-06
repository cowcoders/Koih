import IPCConstants from "../utils/IPCConstants";

export const LOAD_INSTANCES_INIT = 'instance/LOAD_INSTANCES_INIT';
export const LOAD_INSTANCES_SUCCESS = 'instance/LOAD_INSTANCES_SUCCESS';
export const LOAD_INSTANCES_FAIL = 'instance/LOAD_INSTANCES_FAIL';

export function loadInstances() {
  return {
    ipc: true,
    types: [LOAD_INSTANCES_INIT, LOAD_INSTANCES_SUCCESS, LOAD_INSTANCES_FAIL],
    promise: ipcClient => ipcClient.send(IPCConstants.GET_INSTANCES())
  };
}
