import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

import Header from '../components/misc/Header';
import DialogStack from '../components/stacks/DialogStack';
import SnackbarStack from '../components/stacks/SnackbarStack';
import { GlobalProvider } from '../context/store';
import createEmotionCache from '../utils/emotion-cache';
import theme from '../utils/material-theme';

import '../styles/global.scss';

import styles from './_app.module.scss';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>M.H. Reardon | The Official Website</title>
        <link rel="icon" href="/butterfly.png" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <div className={styles.containerContent}>
            <Header />

            <Component {...pageProps} />

            <div className={styles.containerFooter}>
              <span className={styles.labelCopyright}>
                Copyright © 2023 M.H. Reardon - All Rights Reserved.
              </span>
            </div>
          </div>

          <Analytics />

          <DialogStack />

          <SnackbarStack />
        </GlobalProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
