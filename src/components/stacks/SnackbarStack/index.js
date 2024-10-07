import { useGlobalContext } from '../../../context/global-context';
import Snackbar from '../../snackbars/Snackbar';

export default function SnackbarStack() {
  const { popSnackbarStack, snackbarStack } = useGlobalContext();

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
