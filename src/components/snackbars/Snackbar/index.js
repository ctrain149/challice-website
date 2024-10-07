import { Alert, Snackbar as MuiSnackbar } from '@mui/material';
import { useContext } from 'react';

import { GlobalContext } from '../../../context/global-context';

// import styles from './index.module.scss';

export default function Snackbar({
  label = '',
  onClose = () => {},
  open = false,
  severity = 'info',
  timeout = 5000,
}) {
  const { popSnackbarStack } = useContext(GlobalContext);

  setTimeout(popSnackbarStack, timeout);

  function close() {
    onClose();
  }

  return (
    <MuiSnackbar open={open} autoHideDuration={timeout - 250} onClose={close}>
      <Alert onClose={close} severity={severity} sx={{ width: '100%' }}>
        {label}
      </Alert>
    </MuiSnackbar>
  );
}
