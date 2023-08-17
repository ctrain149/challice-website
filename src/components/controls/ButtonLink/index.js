import NextLink from 'next/link';

import styles from './index.module.scss';

export default function ButtonLink({ href = '', label = '', target = '' }) {
  return (
    <span className={styles.Link}>
      <NextLink className={styles.link} href={href} target={target}>
        {label}
      </NextLink>
    </span>
  );
}
