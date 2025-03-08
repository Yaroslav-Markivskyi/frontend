import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  postList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    margin: '20px 0',
  },
  noPosts: {
    color: '#888',
    fontStyle: 'italic',
  },
});

export default useStyles;
