import sizes from './sizes';
import { createStyles } from '@material-ui/styles';
const styles = createStyles({
  Album: {
    background: '#444',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#AAA',
    margin: '0.4rem 0.3rem',
    borderRadius: '1px',
    '&:hover': {
      // boxShadow: '15px 15px #c04b1519, 15px 15px #c04b1519',
      transform: 'translateY(-35px)',
      transition: 'all 0.1s ease',
      cursor: 'pointer',
    },
    [sizes.down('lg')]: {
      width: '25%',
    },
    [sizes.down('md')]: {
      width: '50%',
    },
    [sizes.down('xs')]: {
      width: '100%',
    },
  },
});
export default styles;
