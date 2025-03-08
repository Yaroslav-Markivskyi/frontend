import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  buyButton: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#218838',
    },
  },
});

export default useStyles;
