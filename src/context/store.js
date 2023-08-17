import { createContext, useReducer } from 'react';

import reducer from './reducer';

const initialState = { snackbarStack: [], stack: [] };

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function openModal(item) {
    return new Promise((resolveFn) => {
      dispatch({ payload: item, resolveFn, type: 'openModal' });
    });
  }

  function openOverlay(item) {
    return new Promise((resolveFn) => {
      dispatch({ payload: item, resolveFn, type: 'openOverlay' });
    });
  }

  function openSnackbar(item) {
    dispatch({ payload: item, type: 'openSnackbar' });
  }

  function popStack(item) {
    dispatch({ payload: item, type: 'popStack' });
  }

  function popSnackbarStack() {
    dispatch({ type: 'popSnackbarStack' });
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        openModal,
        openOverlay,
        openSnackbar,
        popStack,
        popSnackbarStack,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
