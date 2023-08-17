import Image from 'next/image';

import AuthorPhoto from '../../../public/author-photo-bw.png';

import styles from './index.module.scss';

export default function About() {
  return (
    <main className={styles.About}>
      <div className={styles.container}>
        <span className={styles.labelTitle}>About the Author</span>

        <div className={styles.containerImg}>
          <Image
            className={styles.imgAuthor}
            alt="Author Photo"
            placeholder="blur"
            sizes="500px"
            src={AuthorPhoto}
            fill
            priority
          />
        </div>

        <span>
          {`Born and raised in California, M. H. Reardon got her bachelor's degree in
          Political Science from the University of Massachusetts Amherst and works as a
          freelance editor. She currently lives with her family in North Carolina.`}
        </span>
      </div>
    </main>
  );
}
