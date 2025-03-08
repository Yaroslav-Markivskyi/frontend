import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  layout: {
    display: 'flex',
    backgroundColor: '#f4f4f4',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: 'darkslategray'
  },
  paper: {
    width: '100%',
    maxWidth: 800,
    padding: '16px',
    backgroundColor: 'white',


  },
});

export default useStyles;
