import { useContext } from 'react';

import { GlobalContext } from '../../../context/store';

import styles from './index.module.scss';

export default function DialogStack() {
  const { stack } = useContext(GlobalContext);

  function renderDialogs() {
    return stack.map(({ dialog }, index) => {
      const zIndex = index + 1001;

      return (
        <div sx={{ 'z-index': zIndex }} key={index}>
          {dialog}
        </div>
      );
    });
  }

  return (
    <div className={styles.DialogStack}>
      <div className={styles.container}>{renderDialogs()}</div>
    </div>
  );
}
