import { createStyles } from '@material-ui/styles';
// import sizes from '../../styles/sizes';

const styles = createStyles({
  '@global': {
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },
  BackButton: {
    color: 'white',
    position: 'relative',
    top: 10,
    margin: '1rem 0',
  },
  root: {
    backgroundColor: 'rgb(23,23,26)',
    height: '100%',
    display: 'flex',
    alignContent: 'flex-start',
    justifyContent: 'center',
    overflow: 'none',
    // overflowY: 'auto',
    // overflowX: 'hidden',
    // paddingBottom: '3rem',
  },
  heading: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '3rem',
    marginBottom: '3rem',
  },
  OuterContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    // flexWrap: 'wrap',

    // [sizes.down('xl')]: {
    //   width: '80%',
    // },
    // [sizes.down('xs')]: {
    //   width: '75%',
    // },
  },
  Fab: {
    display: 'flex',
    top: '40%',
    left: '50%',
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    padding: '3rem 0 4rem 0',
    flexDirection: 'row',
  },
  RecommendedTitle: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
  },
  RecommendedTitleContainer: { display: 'flex' },
  RecommendedTopsters: {
    marginTop: '2rem',
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'row',
    overflow: 'hidden',
    scrollSnapType: 'x mandatory',
    width: '1340px',
    scrollbarWidth: 'none',
    alignItems: 'center',

    // height: 'calc(100vh - 4rem)',
    //   [sizes.down('md')]: {
    //     // gridTemplateColumns: 'repeat(2, 50%)',
    //   },
    //   [sizes.down('xs')]: {
    //     // gridTemplateColumns: 'repeat(1, 100%)',
    //     gridGap: '1.4rem',
    //   },
  },
  RecommendedContainer: { display: 'flex', alignItems: 'center' },
  RecommendedSection: {
    display: 'flex',
    flexDirection: 'row',
    scrollSnapType: 'x mandatory',
    scrollSnapAlign: 'start',
  },
  recommendedArrowVisible: {
    fontSize: '70px',
    cursor: 'pointer',
  },
  recommendedArrowHidden: {
    fontSize: '70px',
    opacity: '0.2',
    pointerEvents: 'none',
  },

  subMainTitle: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
    marginTop: '4rem',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'start',
  },
  UserTopsters: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    overflowX: 'hidden',
    scrollbarWidth: 'none',
    // scrollSnapType: 'y mandatory',
    height: '400px',
    width: '800px',
  },
  topstersSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    scrollSnapType: 'y mandatory',
    scrollSnapAlign: 'start',
  },
  subMain: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem auto',
  },
  BookmarkTitle: {
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
    fontFamily: 'Merriweather, serif',
    alignSelf: 'center',
    marginLeft: '57%',
  },
  BookmarkCapacity: { fontSize: '14px', paddingLeft: '10px' },

  AOTDTitleContainer: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
  },
});

export default styles;
