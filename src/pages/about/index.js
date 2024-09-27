import styles from './index.module.scss';

export default function About() {
  return (
    <main className={styles.About}>
      <div className={styles.container}>
        <span className={styles.labelTitle}>About the Author</span>

        <span>
          {`Born and raised in California, M. H. Reardon got her bachelor's degree in
          Political Science from the University of Massachusetts Amherst and works as a
          freelance editor. She currently lives with her family in North Carolina.`}
        </span>
      </div>
    </main>
  );
}
