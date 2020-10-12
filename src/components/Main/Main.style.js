import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxHeight: '100vh',
    padding: '10px',
  },
  titleWrapper: {
    marginBottom: '10px',
    textAlign: 'center',
  },
  exampleWrapper: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: '20px',
    width: '60%',
    '@media only screen and (min-width: 768px)': {
      width: '40%',
    },
  },
  buttonWrapper: {
    marginBottom: '20px',
  },
  listWrapper: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  resultWrapper: {
    textAlign: 'center',
  },
});
