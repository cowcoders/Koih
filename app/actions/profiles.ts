import IPCConstants from "../utils/IPCConstants";

export const LOAD_PROFILES_INIT = 'instance/LOAD_PROFILES_INIT';
export const LOAD_PROFILES_SUCCESS = 'instance/LOAD_PROFILES_SUCCESS';
export const LOAD_PROFILES_FAIL = 'instance/LOAD_PROFILES_FAIL';

export function loadProfiles() {
  return {
    ipc: true,
    types: [LOAD_PROFILES_INIT, LOAD_PROFILES_SUCCESS, LOAD_PROFILES_FAIL],
    promise: ipcClient => ipcClient.send(IPCConstants.GET_PROFILES())
  };
}
