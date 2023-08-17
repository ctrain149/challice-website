import { CircularProgress } from '@mui/material';

import styles from './index.module.scss';

export default function Loader({ label = 'Loading...' }) {
  function renderLabel() {
    return label ? <span className={styles.label}>{label}</span> : null;
  }

  return (
    <div className={styles.Loader}>
      <div className={styles.container}>
        <CircularProgress className={styles.circularProgress} />

        {renderLabel()}
      </div>
    </div>
  );
}
