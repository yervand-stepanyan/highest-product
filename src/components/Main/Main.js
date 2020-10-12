import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import {
  BUTTON_LABEL,
  INPUT_LABEL,
  LIST_EXAMPLE,
  TITLE_TEXT,
} from '../../globals/constants';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleInputChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    setValue('');
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleWrapper}>
        <Typography color="textPrimary" variant="h5">
          {TITLE_TEXT}
        </Typography>
      </div>
      <div className={classes.exampleWrapper}>
        <Typography color="textSecondary" variant="subtitle2">
          {LIST_EXAMPLE}
        </Typography>
      </div>
      <div className={classes.inputContainer}>
        <TextField
          id="outlined-basic"
          fullWidth
          label={INPUT_LABEL}
          onChange={e => handleInputChange(e)}
          onKeyDown={e => handleSubmitOnEnter(e)}
          value={value}
          variant="outlined"
        />
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          color="primary"
          disabled={!value}
          onClick={handleSubmit}
          size="large"
          variant="contained"
        >
          {BUTTON_LABEL}
        </Button>
      </div>
      <div>
        <Typography color="secondary" variant="h4">
          Result
        </Typography>
      </div>
    </div>
  );
}

export default Main;
