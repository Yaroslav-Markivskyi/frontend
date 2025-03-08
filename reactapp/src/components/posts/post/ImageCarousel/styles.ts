import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  activeImage: {
    width: 300,
    height: 300,
    objectFit: 'cover',
    borderRadius: 10,
  },
  prevButton: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    fontSize: 24,
    padding: 10,
    cursor: 'pointer',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 10,
  },
  nextButton: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    fontSize: 24,
    padding: 10,
    cursor: 'pointer',
    top: '50%',
    transform: 'translateY(-50%)',
    right: 10,
  },
});

export default useStyles;
