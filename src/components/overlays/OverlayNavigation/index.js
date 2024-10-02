import { Close } from '@mui/icons-material';
import { Dialog, DialogContent, DialogTitle, IconButton, Slide } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';

import { GlobalContext } from '../../../context/store';

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
    width: '100%',
    height: '100%',
    maxWidth: 'unset',
    maxHeight: 'unset',
    margin: 0,
  },
  '& .MuiTypography-root': {
    padding: '18px 18px 14px 20px',
    'line-height': '1',
  },
  '& .MuiDialogContent-root': {
    padding: 0,
  },
  '& .MuiSvgIcon-root': {
    width: '1.4em',
    height: '1.4em',
  },
  '& .MuiButtonBase-root': {
    padding: 0,
  },
}));

export default function Overlay({ items = [] }) {
  const { popStack } = useContext(GlobalContext);

  function dismiss(v) {
    popStack(v);
  }

  function renderBody() {
    return (
      <div className={styles.containerBody}>
        {items.map((item, index) => (
          <span className={styles.containerNavItem} key={index} onClick={() => dismiss(item)}>
            {item.icon || null}
            <span className={styles.labelItem}>{item.label}</span>
          </span>
        ))}
      </div>
    );
  }

  function renderTitle() {
    return (
      <div className={styles.containerTitle}>
        <span className={styles.labelTitle}>Challice Ryan</span>

        <IconButton aria-label="Close Menu Button" onClick={() => dismiss()}>
          <Close fontSize="32px" />
        </IconButton>
      </div>
    );
  }

  return (
    <div className={styles.Overlay}>
      <MatDialog TransitionComponent={Transition} open>
        <DialogTitle>{renderTitle()}</DialogTitle>

        <DialogContent>{renderBody()}</DialogContent>
      </MatDialog>
    </div>
  );
}
