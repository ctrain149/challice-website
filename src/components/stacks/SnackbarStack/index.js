import { useContext } from 'react';

import { GlobalContext } from '../../../context/store';
import Snackbar from '../../snackbars/Snackbar';

// import styles from './index.module.scss';

export default function SnackbarStack() {
  const { popSnackbarStack, snackbarStack } = useContext(GlobalContext);

  return snackbarStack.map(({ snackbar }, index) => {
    let open = true;

    const close = () => {
      open = false;
      popSnackbarStack();
    };

    return (
      <Snackbar
        key={index}
        label={snackbar.label}
        onClose={close}
        open={open}
        severity={snackbar.severity}
      />
    );
  });
}
