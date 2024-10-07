'use client';

import { Send, Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import FormService from '@zensen/form-service';
import { isEmailAddress, isRequired } from '@zensen/form-validators';
import { useEffect, useState } from 'react';

import { useGlobalContext } from '../../context/global-context';

import Button from '../controls/Button';
import Select from '../inputs/Select';
import Textfield from '../inputs/Textfield';
import Loader from '../misc/Loader';

import ModalConfirm from './ModalConfirm';

const model = Object.freeze({
  email: '',
  message: '',
  name: '',
  subject: '',
});

const selectors = Object.freeze({
  children: {
    email: [isRequired(), isEmailAddress()],
    message: [isRequired()],
    name: [isRequired()],
    subject: [isRequired()],
  },
});

const subjects = Object.freeze([
  { label: 'About a Career Opportunity', value: 'About a Career Opportunity' },
  { label: 'About me', value: 'About me' },
  { label: 'Other', value: 'Other' },
]);

export default function ModalContactForm() {
  const { openSnackbar, openModal, popStack } = useGlobalContext();
  const [dirty, setDirty] = useState(false);
  const [errors, setErrors] = useState(model);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(model);
  const [formService] = useState(new FormService(model, selectors, () => {}));

  async function dismiss(v) {
    let proceed = true;

    if (dirty) {
      proceed = await openModal(
        <ModalConfirm
          title="Warning"
          body="Your form changes will be deleted. Do you want to continue?"
        />,
      );
    }

    if (proceed) {
      popStack(v);
    }
  }

  function change(e) {
    formService.apply(e.name, e.value);

    refresh(e);
  }

  function refresh() {
    setDirty(formService.isDirty);
    setErrors(formService.errors);
    setState(formService.state);
  }

  async function send() {
    if (formService.validate()) {
      const build = formService.build();

      try {
        setLoading(true);

        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(build),
        });

        popStack(response);
      } catch (error) {
        console.error(error);
        openSnackbar({
          label: 'There was an error sending the email.',
          severity: 'error',
        });
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    refresh();
  }, [formService, setDirty, setErrors, setState]);

  function renderCircularProgress() {
    return loading ? <Loader label="Sending email..." /> : null;
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <span className="text-2xl">Contact Me</span>

          <span>
            Please fill out and submit the form below and I will contact you as soon as possible!
          </span>
        </div>

        <IconButton sx={{ padding: '0' }} aria-label="close" onClick={() => dismiss(null)}>
          <Close />
        </IconButton>
      </div>

      <form
        className={`flex flex-col items-end gap-3 ${loading ? 'blur-sm' : ''}`}
        data-loading={loading}
      >
        <Textfield
          error={errors.name}
          label="Your name"
          name="name"
          value={state.name}
          onChange={change}
        />

        <Textfield
          error={errors.email}
          label="Your e-mail"
          name="email"
          value={state.email}
          onChange={change}
        />

        <Select
          error={errors.subject}
          items={subjects}
          label="Subject"
          name="subject"
          value={state.subject}
          onChange={change}
        />

        <Textfield
          error={errors.message}
          label="Message"
          name="message"
          rows={6}
          value={state.message}
          onChange={change}
          multiline
        />

        <Button
          disabled={formService.hasErrors || !dirty || !formService.isPristine || loading}
          icon={<Send sx={{ fontSize: '18px' }} />}
          label="Send"
          onClick={send}
          flipped
        />
      </form>

      {renderCircularProgress()}
    </div>
  );
}
