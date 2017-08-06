import { LOAD_PROFILES_FAIL, LOAD_PROFILES_INIT, LOAD_PROFILES_SUCCESS } from "../actions/profiles";

const initialState = {
  profiles: [],
  isLoading: false
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROFILES_INIT:
      return { ...state, isLoading: true };
    case LOAD_PROFILES_FAIL:
      return { ...state, isLoading: false, error: action.error, profiles: null };
    case LOAD_PROFILES_SUCCESS:
      return { ...state, isLoading: false, profiles: action.result, error: null };
    default:
      return state;
  }
}
