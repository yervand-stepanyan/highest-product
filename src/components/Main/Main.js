import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import {
  BUTTON_LABEL,
  ERROR_MESSAGE,
  INPUT_LIST_LABEL,
  INPUT_PLACEHOLDER,
  LIST_EXAMPLE_LABEL,
  RESULT_LABEL,
  TITLE_TEXT_LABEL,
} from '../../globals/constants';
import filterInput from '../../helpers/filterInput';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [inputList, setInputList] = useState('');
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');

  const handleInputChange = event => {
    setValue(event.target.value);
  };

  const highestProduct = listString => {
    const filteredString = filterInput(listString);
    const arrayFromString = filteredString.split(',');
    const numbersList = arrayFromString.map(item => +item);
    setInputList(`[ ${arrayFromString.join(', ')} ]`);

    const isListValid = numbersList.every(
      item => typeof item === 'number' && Number.isInteger(item)
    );

    if (isListValid && numbersList.length > 2) {
      const sortedList = [...numbersList].sort((a, b) => b - a);
      const highestThreeNumbers = sortedList.slice(0, 3);

      return highestThreeNumbers.reduce((acc, next) => acc * next, 1);
    }

    return ERROR_MESSAGE;
  };

  const handleSubmit = () => {
    setResult(highestProduct(value));

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
          {TITLE_TEXT_LABEL}
        </Typography>
      </div>
      <div className={classes.exampleWrapper}>
        <Typography color="textSecondary" variant="subtitle2">
          {LIST_EXAMPLE_LABEL}
        </Typography>
      </div>
      <div className={classes.inputContainer}>
        <TextField
          id="outlined-basic"
          fullWidth
          label={INPUT_PLACEHOLDER}
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
      {inputList.length ? (
        <div>
          <div className={classes.listWrapper}>
            <Typography color="primary" variant="subtitle1">
              {INPUT_LIST_LABEL}
            </Typography>
            <Typography color="primary" variant="subtitle2">
              {inputList}
            </Typography>
          </div>
          <div className={classes.resultWrapper}>
            <Typography color="primary" variant="subtitle1">
              {RESULT_LABEL}
            </Typography>
            <Typography color="secondary" variant="h5">
              {result}
            </Typography>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Main;
