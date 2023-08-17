import { FormControl } from '@mui/material';
import MatTextfield from '@mui/material/TextField';

import styles from './index.module.scss';

export default function Textfield({
  disabled = false,
  error = '',
  label = '',
  maxRows = 4,
  multiline = false,
  name = '',
  onChange = () => {},
  placeholder = '',
  rows = null,
  type = 'outlined',
  value = null,
  width = '100%',
}) {
  function change(e) {
    onChange({ name, value: e.target.value });
  }

  function getHelperText() {
    return error || '';
  }

  return (
    <div className={styles.Textfield}>
      <FormControl className={styles.container} fullWidth>
        <MatTextfield
          sx={{ width }}
          className={styles.select}
          disabled={disabled}
          error={Boolean(error)}
          helperText={getHelperText()}
          label={label}
          maxRows={rows ? null : maxRows}
          multiline={multiline}
          placeholder={placeholder}
          rows={rows}
          type="primary"
          value={value}
          variant={type}
          onChange={change}
          width={width}
        />
      </FormControl>
    </div>
  );
}
