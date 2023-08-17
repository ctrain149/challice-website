const reducer = (state, action) => {
  switch (action.type) {
    case 'openModal': {
      const { resolveFn, payload } = action;
      const stackItem = { dialog: payload, resolveFn, type: 'modal' };

      return { ...state, stack: [...state.stack, stackItem] };
    }

    case 'openOverlay': {
      const { resolveFn, payload } = action;
      const stackItem = { dialog: payload, resolveFn, type: 'overlay' };

      return { ...state, stack: [...state.stack, stackItem] };
    }

    case 'openSnackbar': {
      const { payload } = action;
      const stackItem = { snackbar: payload, type: 'snackbar' };

      return { ...state, snackbarStack: [...state.snackbarStack, stackItem] };
    }

    case 'popStack': {
      const stackItem = state.stack.pop();

      if (stackItem.resolveFn) stackItem.resolveFn(action.payload);

      return { ...state };
    }

    case 'popSnackbarStack': {
      const newStack = state.snackbarStack.length > 1 ? state.snackbarStack.slice(1) : [];

      return { ...state, snackbarStack: newStack };
    }

    default:
      return state;
  }
};

export default reducer;
