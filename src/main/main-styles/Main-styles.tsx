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
    cursor: 'pointer',
    top: 10,
    // left: 25,
  },
  root: {
    backgroundColor: 'rgb(23,23,26)',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowY: 'scroll',
    overflowX: 'hidden',
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
    flexWrap: 'wrap',

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
    padding: '1rem 0 4rem 0',
    flexDirection: 'row',
  },
  RecommendedTitle: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
  },
  Recommended: {
    marginTop: '2rem',
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'row',
    overflow: 'auto',
    scrollSnapType: 'x mandatory',
    width: '1340px',
    scrollbarWidth: 'none',
    // width: '100%',
    // height: 'calc(100vh - 4rem)',
    //   [sizes.down('md')]: {
    //     // gridTemplateColumns: 'repeat(2, 50%)',
    //   },
    //   [sizes.down('xs')]: {
    //     // gridTemplateColumns: 'repeat(1, 100%)',
    //     gridGap: '1.4rem',
    //   },
  },
  RecommendedSection: {
    display: 'flex',
    flexDirection: 'row',
    scrollSnapType: 'x mandatory',
    scrollSnapAlign: 'start',
  },
  UserTitleContainer: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
    marginTop: '4rem',
    display: 'flex',
    alignItems: 'center',
  },
  subMain: {
    display: 'flex',
    alignItems: 'center',
  },
  AOTDContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'repeat(3, 1fr)',
    borderRadius: '5px',
    border: '3px solid #91a7ff',
    width: '400px',
    height: '400px',
    marginLeft: '5rem',
    cursor: 'pointer',
    position: 'relative',
  },
  AOTDContainerEmpty: {
    borderRadius: '5px',
    border: '3px solid #91a7ff',
    width: '400px',
    height: '400px',
    marginLeft: '5rem',
    cursor: 'pointer',
    position: 'relative',
    textAlign: 'center',
  },
  AOTDTitleContainer: {
    color: '#fff',
    fontFamily: 'Merriweather, serif',
  },
  firstBookmarkedItem: {
    height: '131.5px',
    display: 'block ruby',
  },
  UserTopsters: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    overflowY: 'scroll',
    overflowX: 'hidden',
    gridGap: '0',
    scrollbarWidth: 'none',
    scrollSnapType: 'y mandatory',
    height: '400px',
    width: '800px',
  },
  CompareArrowsIcon: {
    color: 'rgb(120 92 124)',
    position: 'absolute',
    left: '88%',
    top: '2%',
    zIndex: 10,
  },
  noBookmarks: {
    marginTop: '40%',
    fontSize: '2rem',
    color: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'inherit',
  },
});

export default styles;
