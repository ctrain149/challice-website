import { useGlobalContext } from '../../../context/global-context';
import Button from '../../controls/Button';
import Modal from '../Modal';

import styles from './index.module.scss';

export default function ModalConfirm({ body, title }) {
  const { popStack } = useGlobalContext();

  function dismiss(v) {
    popStack(v);
  }

  function renderActions() {
    return (
      <div className={styles.containerActions}>
        <Button label="Confirm" onClick={() => dismiss(true)} />

        <Button label="Cancel" type="outline" onClick={() => dismiss(false)} />
      </div>
    );
  }

  return (
    <div className={styles.ModalConfirm}>
      <div className={styles.container}>
        <Modal title={title} body={body} actions={renderActions()} />
      </div>
    </div>
  );
}
