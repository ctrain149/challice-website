'use client';

import { Button, IconButton, styled, Switch } from '@mui/material';
import { Download, GitHub, LinkedIn, Mail } from '@mui/icons-material';

import { useGlobalContext } from '../../context/global-context';
import ModalContactForm from '../modals/ModalContactForm';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage:
          `url('data:image/svg+xml;utf8,` +
          `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20">` +
          `<path fill="${encodeURIComponent('#fff')}" ` +
          `d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 ` +
          `8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/>` +
          `</svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage:
        `url('data:image/svg+xml;utf8,` +
        `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20">` +
        `<path fill="${encodeURIComponent('#fff')}" ` +
        `d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 ` +
        `6.072l.982-.982-1.473-1.473zm10.802 ` +
        `0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 ` +
        `4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 ` +
        `5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 ` +
        `3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 ` +
        `0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 ` +
        `0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/>` +
        `</svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

export default function Sidebar() {
  const { openSnackbar, openModal, setTheme, theme, toggleTheme } = useGlobalContext();

  const className = [
    'flex',
    'flex-col',
    'items-start',
    'justify-between',
    'w-full',
    'h-fit',
    'p-5',
    'bg-gray-200',
    'border',
    'border-gray-400',
    'shadow-lg',
    'rounded-md',
    'dark:bg-slate-800',
    'dark:border-slate-600',
    'md:w-[500px]',
    'md:h-full',
  ].join(' ');

  function openWindowGithub() {
    window.open('https://github.com/ctrain149', '_target');
  }

  function openWindowLinkedIn() {
    window.open('https://www.linkedin.com/in/challice-genest-16455491/', '_target');
  }

  function useSystemTheme() {
    const systemPrefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = systemPrefersDark ? 'dark' : 'light';

    setTheme(systemTheme);
    localStorage.setItem('themeMode', systemTheme);
  }

  async function downloadProfessionalCV() {
    try {
      const response = await fetch('/api/s3-url?version=Professional_CV.pdf');

      if (!response.ok) {
        throw new Error('Failed to download PDF');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      window.open(url, '_blank');
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error fetching S3 URL:', error);
    }
  }

  async function openModalContactForm() {
    const response = await openModal(<ModalContactForm />);

    if (response) {
      if (response.ok) {
        openSnackbar({
          label: 'Email sent successfully.',
          severity: 'success',
        });
      } else {
        openSnackbar({
          label: 'There was an error sending the email.',
          severity: 'error',
        });
      }
    }
  }

  function renderOutsideLinks() {
    return (
      <div className="flex">
        <IconButton onClick={() => openWindowGithub()}>
          <GitHub />
        </IconButton>

        <IconButton onClick={() => openWindowLinkedIn()}>
          <LinkedIn />
        </IconButton>
      </div>
    );
  }

  function renderThemeButtons() {
    return (
      <div className="flex flex-col justify-between items-end w-full gap-1">
        <MaterialUISwitch sx={{ m: 1 }} checked={theme === 'dark'} onClick={toggleTheme} />

        <Button onClick={useSystemTheme}>Use System Theme</Button>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex flex-col h-full w-full items-start justify-between">
        <div className="flex flex-col items-start gap-4">
          <span className="text-gray-600 dark:text-gray-100 text-3xl">Challice Ryan</span>

          <Button startIcon={<Download />} onClick={downloadProfessionalCV}>
            Download my Resume
          </Button>

          <Button startIcon={<Mail />} onClick={openModalContactForm}>
            Contact Me
          </Button>
        </div>

        <div className="flex items-end justify-between w-full">
          {renderOutsideLinks()}

          {renderThemeButtons()}
        </div>
      </div>
    </div>
  );
}
