export default function ipcMiddleware(ipcClient) {
  return ({ dispatch, getState }) => {
    return (next) => (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { promise, ipc, types, type, ...rest } = action;

      if (!ipc) {
        return next(action);
      }

      const actionPromise = promise(ipcClient);

      if (type) {
        next({ ...rest, type });
        actionPromise.catch((error) => {
          console.error('MIDDLEWARE ERROR - CLIENT:', error);
        });
      } else {
        const [REQUEST, SUCCESS, FAILURE] = types;
        next({ ...rest, type: REQUEST });

        actionPromise.then(
          result => next({ ...rest, result, type: SUCCESS, success: true }),
          error => next({ ...rest, error, type: FAILURE })
        ).catch((error) => {
          console.error('MIDDLEWARE ERROR - CLIENT:', error);
          next({ ...rest, error, type: FAILURE });
        });
      }
      return actionPromise;
    };
  };
}
