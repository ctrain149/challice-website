import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

import Sidebar from '../components/misc/Sidebar';
import DialogStack from '../components/stacks/DialogStack';
import SnackbarStack from '../components/stacks/SnackbarStack';
import { GlobalProvider } from '../context/store';
import createEmotionCache from '../utils/emotion-cache';
import theme from '../utils/material-theme';

import '../styles/global.scss';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Challice Ryan | The Official Website</title>
        <link rel="icon" href="/chalice.webp" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <div className="flex self-center w-full h-full p-5">
            <Sidebar />

            <Component {...pageProps} />
          </div>

          <Analytics />

          <DialogStack />

          <SnackbarStack />
        </GlobalProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
