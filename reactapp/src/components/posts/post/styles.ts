import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  post: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  paper: {
    width: '100%',
    maxWidth: 800,
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '3px 3px 10px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
  },
});

export default useStyles;
