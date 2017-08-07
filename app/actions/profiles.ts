import IPCConstants from "../utils/IPCConstants";
import ProfileModel from "../models/ProfileModel";

export const LOAD_PROFILES_INIT = 'profile/LOAD_PROFILES_INIT';
export const LOAD_PROFILES_SUCCESS = 'profile/LOAD_PROFILES_SUCCESS';
export const LOAD_PROFILES_FAIL = 'profile/LOAD_PROFILES_FAIL';

export const NEW_PROFILE_INIT = 'profile/NEW_PROFILE_INIT';
export const NEW_PROFILE_SUCCESS = 'profile/NEW_PROFILE_SUCCESS';
export const NEW_PROFILE_FAIL = 'profile/NEW_PROFILE_FAIL';

export function loadProfiles() {
  return {
    ipc: true,
    types: [LOAD_PROFILES_INIT, LOAD_PROFILES_SUCCESS, LOAD_PROFILES_FAIL],
    promise: ipcClient => ipcClient.send(IPCConstants.GET_PROFILES())
  };
}

export function newProfile(profile: ProfileModel) {
  return {
    ipc: true,
    types: [NEW_PROFILE_INIT, NEW_PROFILE_SUCCESS, NEW_PROFILE_FAIL],
    promise: ipcClient => ipcClient.send(IPCConstants.NEW_PROFILE(), profile)
  };
}
