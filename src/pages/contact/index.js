import { Send } from '@mui/icons-material';
import FormService from '@zensen/form-service';
import { isEmailAddress, isRequired } from '@zensen/form-validators';
import { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '../../context/store';
import Button from '../../components/controls/Button';
import Select from '../../components/inputs/Select';
import Textfield from '../../components/inputs/Textfield';
import Loader from '../../components/misc/Loader';

import styles from './index.module.scss';

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
  { label: 'About the Book', value: 'About the Book' },
  { label: 'Editing Services', value: 'Editing Services' },
  { label: 'Other', value: 'Other' },
]);

export default function Contact() {
  const name = 'contact';
  const { openSnackbar } = useContext(GlobalContext);
  const [dirty, setDirty] = useState(false);
  const [errors, setErrors] = useState(model);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(model);
  const [formService] = useState(new FormService(model, selectors, () => {}));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Object.entries(model).forEach(([key, value]) => {
        const formattedKey = `${name}-${key}`;
        const storageValue = localStorage.getItem(formattedKey) || value;

        if (storageValue !== value) formService.apply(key, storageValue);
      });

      setDirty(formService.isDirty);
      setErrors(formService.errors);
      setState(formService.state);
    }
  }, [formService, setDirty, setErrors, setState]);

  function change(e) {
    formService.apply(e.name, e.value);
    localStorage.setItem(`${name}-${e.name}`, e.value);

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

        if (response.ok) {
          openSnackbar({
            label: 'Email sent successfully.',
            severity: 'success',
          });

          formService.reset();

          refresh();

          Object.entries(model).forEach(([key, value]) =>
            localStorage.setItem(`${name}-${key}`, value),
          );
        } else {
          openSnackbar({
            label: 'There was an error sending the email.',
            severity: 'error',
          });
        }
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

  function renderCircularProgress() {
    return loading ? <Loader label="Sending email..." /> : null;
  }

  return (
    <main className={styles.Contact}>
      <div className={styles.container}>
        <span className={styles.labelTitle}>Contact Me</span>

        <span>
          Please fill out and submit the form below and I will contact you as soon as
          possible!
        </span>

        <form className={styles.containerForm} data-loading={loading}>
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
            className={styles.buttonSend}
            disabled={formService.hasErrors || !dirty || !formService.isPristine}
            icon={<Send sx={{ fontSize: '18px' }} />}
            label="Send"
            onClick={send}
            flipped
          />
        </form>

        {renderCircularProgress()}
      </div>
    </main>
  );
}
