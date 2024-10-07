import { Close } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/global-context';
import Button from '../../controls/Button';

import styles from './index.module.scss';

const MatDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    gap: '20px',
  },
  '& .MuiTypography-root': {
    padding: '16px 10px 0 20px',
  },
  '& .MuiDialogContent-root': {
    padding: 0,
  },
  '& .MuiDialogActions-root': {
    padding: '0 20px 20px 20px',
  },
}));

export default function Modal({ actions = '', body = '', title = '' }) {
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
    return <div className={styles.containerBody}>{body}</div>;
  }

  function renderTitle() {
    return (
      <div className={styles.containerTitle}>
        <span>{title}</span>

        <IconButton aria-label="Close Modal Button" onClick={() => dismiss()}>
          <Close />
        </IconButton>
      </div>
    );
  }

  return (
    <div className={styles.Modal}>
      <MatDialog open>
        <DialogTitle>{renderTitle()}</DialogTitle>

        <DialogContent>{renderBody()}</DialogContent>

        <DialogActions>{renderActions()}</DialogActions>
      </MatDialog>
    </div>
  );
}
