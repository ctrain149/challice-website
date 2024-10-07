import { createTheme } from '@mui/material/styles';

const cyan = '#00FFFF';
const dark_cyan = '#005757';
const emerald = '#50C878';
const dark_emerald = '#1B5531';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#d3d3d3', paper: '#ffffff' },
    text: {
      primary: '#000000',
      secondary: dark_emerald,
    },
    primary: {
      main: dark_emerald, // Emerald color for primary elements (buttons, links, etc.)
    },
    secondary: {
      main: dark_cyan, // Cyan color for secondary elements (buttons, links, etc.)
    },
    error: {
      main: '#f44336', // Default error color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      color: dark_emerald, // Emerald for headers
    },
    h2: {
      color: dark_cyan, // Cyan for subheaders
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#001514', // Dark theme background
      paper: '#00201e', // Slightly lighter shade for papers and cards
    },
    text: {
      primary: '#d3d3d3', // Light text on dark background
      secondary: cyan, // Cyan for secondary text for pop
    },
    primary: {
      main: cyan, // Cyan for primary buttons and links in dark mode
    },
    secondary: {
      main: emerald, // Emerald for secondary buttons and links in dark mode
    },
    error: {
      main: '#ff1744', // Default error color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      color: emerald, // Emerald for headers
    },
    h2: {
      color: cyan, // Cyan for subheaders
    },
  },
});

export default lightTheme;
