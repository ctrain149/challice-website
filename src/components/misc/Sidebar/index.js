'use client';

import { Button } from '@mui/material';
import { useContext } from 'react';

import { GlobalContext } from '../../../context/store';
import ModalContactForm from '../../modals/ModalContactForm';

import styles from './index.module.scss';

export default function Sidebar() {
  const { openSnackbar, openModal } = useContext(GlobalContext);

  function downloadProfessionalCV() {
    window.open(
      'https://challices-website.s3.amazonaws.com/Professional_CV.pdf',
      '_blank',
    );
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

  return (
    <div className="flex flex-col items-start justify-between w-64 h-full p-5 bg-slate-800 rounded-md">
      <div className="flex flex-col items-start">
        <span className={styles.labelTitle}>Challice Ryan</span>

        <Button onClick={downloadProfessionalCV}>Download my Resume</Button>
        <Button onClick={openModalContactForm}>Contact Me</Button>
      </div>

      <div className="p-2">
        <span>Copyright © 2023 Challice Ryan - All Rights Reserved.</span>
      </div>
    </div>
  );
}
