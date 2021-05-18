const styles = {
  root: {
    backgroundColor: 'pink',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    padding: '1rem',
  },

  albums: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
  },
};

export default styles;