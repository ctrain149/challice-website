import { createTheme } from '@mui/material/styles';

// Define your custom theme colors
const cyan = '#00FFFF';
const emerald = '#50C878';

// Define the Material UI theme
const theme = createTheme({
  palette: {
    mode: 'dark', // By default, the light mode is used
    light: {
      background: {
        default: '#d3d3d3', // Light theme background
        paper: '#ffffff', // Paper background color
      },
      text: {
        primary: '#000000', // Black text for contrast on the light background
        secondary: emerald, // Use emerald for secondary text for flavor
      },
      primary: {
        main: emerald, // Emerald color for primary elements (buttons, links, etc.)
      },
      secondary: {
        main: cyan, // Cyan color for secondary elements (buttons, links, etc.)
      },
      error: {
        main: '#f44336', // Default error color
      },
    },
    dark: {
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

// Function to toggle between light and dark modes
export const getTheme = (mode) => {
  return createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      mode: mode,
      background: theme.palette[mode].background,
      text: theme.palette[mode].text,
      primary: theme.palette[mode].primary,
      secondary: theme.palette[mode].secondary,
    },
  });
};

export default theme;
