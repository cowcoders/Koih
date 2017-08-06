import { LOAD_INSTANCES_FAIL, LOAD_INSTANCES_INIT, LOAD_INSTANCES_SUCCESS, NEW_INSTANCE_SUCCESS, SEARCH_INSTANCES_FAIL, SEARCH_INSTANCES_INIT, SEARCH_INSTANCES_SUCCESS } from "../actions/instance";

const initialState = {
  instances: [],
  isLoading: false
};

export default function instance(state = initialState, action) {
  switch (action.type) {
    case LOAD_INSTANCES_INIT:
      return { ...state, isLoading: true };
    case LOAD_INSTANCES_FAIL:
      return { ...state, isLoading: false, error: action.error, instances: null };
    case LOAD_INSTANCES_SUCCESS:
      return { ...state, isLoading: false, instances: action.result, error: null };
    case NEW_INSTANCE_SUCCESS:
      return { ...state, instances: [...state.instances, action.result], error: null };
    case SEARCH_INSTANCES_INIT:
      return state;
    case SEARCH_INSTANCES_FAIL:
      return { ...state, error: action.error };
    case SEARCH_INSTANCES_SUCCESS:
      return { ...state, awsInstances: action.result };

    default:
      return state;
  }
}
