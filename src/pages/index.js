import { CalendarMonth, ShoppingCart } from '@mui/icons-material';
import Image from 'next/image';

import FlightOfTheMonarchsBook from '../../public/flight-of-the-monarchs-book.png';

import ButtonAmazon from '../components/controls/ButtonAmazon';
import ButtonBarnes from '../components/controls/ButtonBarnes';
import ButtonBooksAMillion from '../components/controls/ButtonBooksAMillion';
// import ButtonGoodReads from '../components/controls/ButtonGoodReads';

import styles from './index.module.scss';

export default function Home() {
  return (
    <main className={styles.Home}>
      <div className={styles.container}>
        <div className={styles.containerBook}>
          <div className={styles.containerBookContent}>
            <div className={styles.containerBookContentLeft}>
              <div className={styles.containerImg}>
                <Image
                  className={styles.imgBook}
                  alt="Flight of the Monarchs Book"
                  placeholder="blur"
                  sizes="400px"
                  src={FlightOfTheMonarchsBook}
                  fill
                  priority
                />
              </div>

              <div className={styles.containerButtons}>
                <div className={styles.containerPreorder}>
                  <ShoppingCart color="primary" />

                  <span className={styles.labelPreorder}>Pre-order now!</span>
                </div>

                <ButtonAmazon
                  className={styles.button}
                  aria-label="Link to Book on Amazon"
                  href="https://a.co/d/cSCsJNr"
                />

                <ButtonBarnes
                  className={styles.button}
                  aria-label="Link to Book on Barnes & Noble"
                  href={
                    'https://www.barnesandnoble.com' +
                    '/w/flight-of-the-monarchs-mh-reardon/1143353691?ean=9798886450828'
                  }
                />

                <ButtonBooksAMillion
                  className={styles.button}
                  aria-label="Link to Book on Books-a-Million"
                  href={
                    'https://www.booksamillion.com' +
                    '/p/Flight-Monarchs/M-H-Reardon/9798886450828?id=8836396031068'
                  }
                />

                {/* <ButtonGoodReads
                  className={styles.button}
                  aria-label="Link to Book on GoodReads"
                  href={
                    'https://www.goodreads.com' +
                    '/book/show/125868000-flight-of-the-monarchs'
                  }
                  label="GoodReads"
                /> */}
              </div>
            </div>

            <div className={styles.containerBookContentRight}>
              <div className={styles.labelBlurb}>
                <h2 className={styles.labelTitle}>Flight of the Monarchs</h2>

                <p className={styles.labelReleaseDate}>
                  <CalendarMonth /> Release Date: September 19th, 2023
                </p>

                <p className={styles.labelTitle}>
                  <b>{'An evocative coming-of-age tale set in 1960s America'}</b>
                </p>

                <p>
                  {`When Jeremy Hill returns to his hometown of Pacific Grove, California,
                    in the summer of 1967, the small town is gripped with curiosity.
                    Having disappeared for eleven years following the tragic night he was
                    found standing over his abusive father's dead body, knife in hand,
                    Jeremy sparks a rush of memories, longings, and regrets for Celia, his
                    childhood best friend, and three of their early classmates. What
                    follows is a summer of reconnections and self-discovery amid the
                    cultural revolution of a changing America.`}
                </p>

                <p>
                  {`Plagued with apprehension of his upcoming service in Vietnam and
                    filled with the resentments of the past, Jeremy pushes a smitten Celia
                    away despite her many efforts to mend their broken bond.`}
                </p>

                <p>
                  {`Fletcher battles with his own sexuality as he sees gay men assaulted
                    and reviled. He must decide whether to face condemnation or go deeper
                    into hiding. No matter which he chooses, though, he risks losing
                    everyone he loves.`}
                </p>

                <p>
                  {`Angie struggles to embrace the new wave of feminism while trying to
                    support her family in the wake of her father's betrayal. She delights
                    in the sudden abundance of choices for young women, all of which tempt
                    her to abandon her responsibilities.`}
                </p>

                <p>
                  {`Moose dives headlong into the cultural revolution with sex, drugs,
                    and rock 'n' roll, inspired to question all forms of traditional
                    thought.`}
                </p>

                <p>
                  {`From music festivals and psychedelic acid trips to San Francisco's
                    burgeoning queer movement, Flight of the Monarchs, the first book in
                    a trilogy, will transport you into the dreamlike haze of the famed
                    Summer of Love.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
