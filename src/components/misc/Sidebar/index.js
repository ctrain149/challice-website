'use client';

import { Button } from '@mui/material';
import { Download, Mail } from '@mui/icons-material';
import { useContext } from 'react';

import { GlobalContext } from '../../../context/store';
import ModalContactForm from '../../modals/ModalContactForm';

import styles from './index.module.scss';

export default function Sidebar() {
  const { openSnackbar, openModal } = useContext(GlobalContext);

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

  const className =
    'flex flex-col items-start justify-between w-full h-fit p-5' +
    'bg-slate-800 rounded-md md:w-72 md:h-full';

  return (
    <div className={className}>
      <div className="flex flex-col items-start">
        <span className={styles.labelTitle}>Challice Ryan</span>

        <div className="flex flex-col items-start gap-0">
          <Button sx={{ display: 'flex', gap: '8px' }} onClick={downloadProfessionalCV}>
            <Download /> Download my Resume
          </Button>

          <Button sx={{ display: 'flex', gap: '8px' }} onClick={openModalContactForm}>
            <Mail /> Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
}
