import { createStyles } from '@material-ui/core';

const styles = createStyles({
  Toppings: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(47,48,52)',
    height: '92.5vh',
    width: '92.5vw',
    margin: '4vh auto',
    justifyContent: 'space-between',
  },

  LeftPanel: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    bottom: '50%',
    marginLeft: '1rem',
    cursor: 'pointer',
    '& h3': {
      fontFamily: 'Lexend, sans-serif',
      transform: 'rotate(-90deg)',
      fontSize: '2rem',
      marginLeft: '-3rem',
    },
  },

  RightPanel: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    right: 0,
    bottom: '50%',
    marginRight: '1.5rem',
    cursor: 'pointer',
    '& h3': {
      fontFamily: 'Lexend, sans-serif',
      transform: 'rotate(-270deg)',
      fontSize: '2rem',
      marginRight: '-4.5rem',
    },
  },

  ToppingsDescription: {
    '& h1': {
      fontSize: '2rem',
      fontFamily: 'Lexend Peta, sans-serif',
    },
    '& h2': {
      fontSize: '1.5rem',
      fontWeight: '700',
    },
    '& ol': {
      marginLeft: '1rem',
      marginTop: '1rem',
      lineHeight: '2rem',
      fontWeight: '600',
    },
    fontFamily: 'Lexend, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    color: 'rgb(255,255,255)',
    margin: '0 auto',
    width: '35vw',
  },
  ToppingsContainer: {
    background: 'rgb(255,255,255)',
    margin: '0 auto',
    padding: '0.5rem',
    borderRadius: '2px',
    display: 'flex',
    flexDirection: 'column',
  },

  ToppingsAlbums: {
    display: 'grid',
    gridTemplateRows: '250px 250px 250px',
    gridTemplateColumns: '250px 250px 250px',
    maxHeight: '750px',
    background: 'rgb(255,255,255)',
  },

  ToppingsFooter: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    minHeight: '3.5vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Lexend, sans-serif',
    fontSize: '2rem',
  },
});

export default styles;
