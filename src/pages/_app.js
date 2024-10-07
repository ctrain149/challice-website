'use client';

import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import DialogStack from '../components/stacks/DialogStack';
import SnackbarStack from '../components/stacks/SnackbarStack';
import { GlobalProvider, useGlobalContext } from '../context/global-context';
import createEmotionCache from '../utils/emotion-cache';
import { lightTheme, darkTheme } from '../utils/material-theme';

import '../styles/global.scss';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Challice Ryan | The Official Website</title>
        <link rel="icon" href="/chalice.webp" />
      </Head>

      <GlobalProvider>
        <AppContent Component={Component} pageProps={pageProps} />
      </GlobalProvider>
    </CacheProvider>
  );
}

// This component consumes the theme and re-renders when the theme changes
const AppContent = ({ Component, pageProps }) => {
  const { theme } = useGlobalContext();
  const [materialTheme, setMaterialTheme] = useState(darkTheme);

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    const defaultMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const selectedTheme = theme || savedMode || defaultMode;

    if (selectedTheme === 'dark') {
      document.body.style.background = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='200' height='200' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(0, 20, 20,1)'/%3E%3Cpath d='M-0.5 20v20h1v-20zM39.5 20v20h1v-20z' fill='rgba(120, 120, 169,0.1)'/%3E%3Cpath d='M-10 29.5 h60 v1 h-60z' fill='rgba(184, 184, 184,0.1)'/%3E%3Cpath d='M19.5 0v40h1v-40z' fill='rgba(120, 120, 169,0.1)'/%3E%3Cpath d='M-10 9.5h60v1h-60z' fill='rgba(184, 184, 184,0.1)'/%3E%3Cpath d='M-0.5 0v20h1v-20zM39.5 0v20h1v-20z' fill='rgba(120, 120, 169,0.1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`;
      document.documentElement.classList.add('dark');
      document.body.style.color = '#B8B8B8';
    } else {
      document.body.style.background = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='200' height='200' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(0, 20, 20, 0.2)'/%3E%3Cpath d='M-0.5 20v20h1v-20zM39.5 20v20h1v-20z' fill='rgba(120, 120, 169,0.5)'/%3E%3Cpath d='M-10 29.5 h60 v1 h-60z' fill='rgba(184, 184, 184,0.5)'/%3E%3Cpath d='M19.5 0v40h1v-40z' fill='rgba(120, 120, 169,0.5)'/%3E%3Cpath d='M-10 9.5h60v1h-60z' fill='rgba(184, 184, 184,0.5)'/%3E%3Cpath d='M-0.5 0v20h1v-20zM39.5 0v20h1v-20z' fill='rgba(120, 120, 169,0.5)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`;
      document.documentElement.classList.remove('dark');
      document.body.style.color = '#4D4D4D';
    }

    setMaterialTheme(selectedTheme === 'light' ? lightTheme : darkTheme);
  }, [theme]);

  return (
    <ThemeProvider theme={materialTheme}>
      <Component {...pageProps} />

      <Analytics />

      <DialogStack />

      <SnackbarStack />
    </ThemeProvider>
  );
};

export default MyApp;
