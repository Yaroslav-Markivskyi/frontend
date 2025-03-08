import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  thumbnailContainer: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '10px',
  },
  thumbnail: {
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '5px',
    cursor: 'pointer',
    opacity: 0.6,
    transition: 'opacity 0.3s ease, border 0.3s ease',
  },
  activeThumbnail: {
    opacity: 1,
    border: '2px solid #000',
  },
});

export default useStyles;
