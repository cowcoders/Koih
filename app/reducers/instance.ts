export type TState = number;

const initialState = {
  instances: [],
  isLoading: false
};

export default function instance(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_INSTANCES_INIT':
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
