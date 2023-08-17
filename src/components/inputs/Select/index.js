import { FormControl, InputLabel, MenuItem } from '@mui/material';
import MatSelect from '@mui/material/Select';

import styles from './index.module.scss';

export default function Select({
  disabled = false,
  error = '',
  items = [],
  label = '',
  name = '',
  onChange = () => {},
  placeholder = '',
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

  function renderMenuItems() {
    return items.map((item) => {
      return <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>;
    });
  }

  return (
    <div className={styles.Select}>
      <FormControl className={styles.container} fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>

        <MatSelect
          sx={{ width }}
          className={styles.select}
          disabled={disabled}
          error={Boolean(error)}
          helperText={getHelperText()}
          label={label}
          placeholder={placeholder}
          type="primary"
          value={value}
          variant={type}
          onChange={change}
          width={width}
        >
          { renderMenuItems() }
        </MatSelect>
      </FormControl>
    </div>
  );
}
