import { createContext, useContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [stack, setStack] = useState([]);
  const [snackbarStack, setSnackbarStack] = useState([]);
  const [theme, setTheme] = useState('light');

  async function openModal(item) {
    return new Promise((resolveFn) => {
      const stackItem = { dialog: item, resolveFn, type: 'modal' };

      setStack([...stack, stackItem]);
    });
  }

  async function openOverlay(item) {
    return new Promise((resolveFn) => {
      const stackItem = { dialog: item, resolveFn, type: 'overlay' };

      setStack([...stack, stackItem]);
    });
  }

  async function openSnackbar(item) {
    return new Promise((resolveFn) => {
      const stackItem = { dialog: item, resolveFn, type: 'snackbar' };

      setSnackbarStack([...stack, stackItem]);
    });
  }

  function popStack(item) {
    const stackItem = stack.pop();

    if (stackItem.resolveFn) stackItem.resolveFn(item);

    setStack(stack);
  }

  function popSnackbarStack() {
    const newStack = snackbarStack.length > 1 ? snackbarStack.slice(1) : [];

    return setSnackbarStack(newStack);
  }

  function toggleTheme() {
    const newMode = theme === 'light' ? 'dark' : 'light';
    setTheme(newMode);
    localStorage.setItem('themeMode', newMode);
  }

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');

    if (savedMode) {
      setTheme(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        openModal,
        openOverlay,
        openSnackbar,
        popStack,
        popSnackbarStack,
        setTheme,
        snackbarStack,
        stack,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}
