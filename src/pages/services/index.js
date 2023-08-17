import ButtonLink from '../../components/controls/ButtonLink';
import IconFilePen from '../../components/icons/IconFilePen';
import IconGlasses from '../../components/icons/IconGlasses';
import IconStarHalfStroke from '../../components/icons/IconStarHalfStroke';

import styles from './index.module.scss';

export default function PageServices() {
  return (
    <main className={styles.Contact}>
      <div className={styles.container}>
        <div className={styles.containerSection}>
          <div className={styles.labelTitle}>Editing Services</div>

          <p>
            I specialize in fiction manuscripts but will consider smaller projects. The
            cost of all services is based on word count.
          </p>
        </div>

        <div className={styles.containerSection}>
          <div className={styles.labelHeader}>
            <IconStarHalfStroke fill="#ff6a00" fontSize="20px" />
            MANUSCRIPT CRITIQUE
          </div>

          <p className={styles.labelParagraph}>
            A critique is a general assessment of your manuscript. It provides detailed
            feedback as well as advice on how to improve your story.
          </p>

          <p className={styles.labelParagraph}>
            <b>Basic Critique</b> : This option includes one read-through of your
            manuscript with email delivery of an editorial memo that examines plot,
            characters, writing style, language use, and addresses any structural issues.
          </p>

          <p className={styles.labelParagraph}>
            <b>Full Critique</b> : This option has the editorial memo but also includes
            comments in the margins of your manuscript, providing additional feedback on
            specific scenes and chapters. It also includes a one- hour phone call to
            answer any questions you may have, as well as one week of email
            correspondence.
          </p>
        </div>

        <div className={styles.containerSection}>
          <div className={styles.labelHeader}>
            <IconFilePen fill="#ff6a00" fontSize="20px" />
            COPYEDIT
          </div>

          <p className={styles.labelParagraph}>
            A copyedit addresses flaws on a technical level and should only be done after
            any structural or plot issues have been resolved. Includes one copyedit pass
            of manuscript and copy-editing style sheet.
          </p>

          <div className={styles.labelParagraph}>A copyedit:</div>

          <ul className={styles.list}>
            <li>Corrects spelling, grammar, punctuation, and syntax</li>
            <li>
              Ensures consistency in spelling, hyphenation, numerals, fonts, and
              capitalization
            </li>
            <li>Tracks plot and character consistency</li>
          </ul>
        </div>

        <div className={styles.containerSection}>
          <div className={styles.labelHeader}>
            <IconGlasses fill="#ff6a00" fontSize="20px" />
            PROOFREAD
          </div>

          <p className={styles.labelParagraph}>
            Proofreading occurs after a manuscript has been typeset. A final copy of the
            manuscript-or proof—is then examined by a proofreader. The proofreader
            corrects typos, grammatical mistakes, and other writing issues before
            publication.
          </p>

          <p className={styles.labelParagraph}>
            If you&apos;re interested in any of these services, please{' '}
            <ButtonLink href="/contact" label="fill out the contact form" />. Leave your
            name, contact information, service you&apos;re requesting, and size/genre of
            project, and I will get back to you within 48 hours with a quote. Thank you.
          </p>
        </div>
      </div>
    </main>
  );
}
