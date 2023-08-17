import { Close } from '@mui/icons-material';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/store';
import Button from '../../controls/Button';
import Loader from '../../misc/Loader';

import styles from './index.module.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const MatDialog = styled(Dialog)(() => ({
  '& .MuiDialog-container': {
    justifyContent: 'right',
  },
  '& .MuiPaper-root': {
    position: 'relative',
    width: 'fit-content',
    height: '100%',
    maxWidth: 'unset',
    maxHeight: 'unset',
    margin: 0,
  },
  '& .MuiTypography-root': {
    padding: '16px 10px 14px 20px',
    borderBottom: '1px solid #90caf9',
  },
  '& .MuiDialogContent-root': {
    padding: 0,
  },
  '& .MuiDialogActions-root': {
    padding: '20px',
    borderTop: '1px solid #90caf9',
  },
}));

export default function Overlay({ actions = '', body = '', loading = '', title = '' }) {
  const { popStack } = useContext(GlobalContext);

  function dismiss(v) {
    popStack(v);
  }

  function renderActions() {
    return (
      actions || (
        <div className={styles.containerActions}>
          <Button label="Dismiss" onClick={() => dismiss()} />
        </div>
      )
    );
  }

  function renderBody() {
    return body;
  }

  function renderLoader() {
    return loading ? <Loader label={loading} /> : null;
  }

  function renderTitle() {
    return (
      <div className={styles.containerTitle}>
        <span>{title}</span>

        <IconButton aria-label="Close Overlay Button" onClick={() => dismiss()}>
          <Close />
        </IconButton>
      </div>
    );
  }

  return (
    <div className={styles.Overlay}>
      <MatDialog TransitionComponent={Transition} open>
        <DialogTitle>{renderTitle()}</DialogTitle>

        <DialogContent>{renderBody()}</DialogContent>

        <DialogActions>{renderActions()}</DialogActions>

        {renderLoader()}
      </MatDialog>
    </div>
  );
}
