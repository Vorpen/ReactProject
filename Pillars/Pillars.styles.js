const styles = {
  infoWrapper: {
    maxWidth: '90%',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px auto',
    padding: '30px'
  },
  cardsWrapper: {
    display: 'flex',
    margin: '0 auto',
    width: '100%',
    justifyContent: 'center'
  },
  image: {
    width: '300px',
    height: '250px'
  },
  header: {
    display: 'flex',
    margin: '20px 0',
    justifyContent: 'center',
    color: '#3e455e',
    fontFamily: 'Ubuntu',
    fontSize: '40px'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '250px',
    margin: '10px'
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px 0',
    color: '#3e455e'
  },
  title: {
    fontWeight: '700',
    fontSize: '18px'
  },
  paragraph: {
    textAlign: 'center'
  },
  '@media only screen and (max-width: 1190px)': {
    cardsWrapper: {
      display: 'flex',
      margin: '0 auto',
      flexWrap: 'wrap'
    },
    card: {
      display: 'flex',
      flex: '0 0 46%',
      flexDirection: 'column',
      alignItems: 'center',
      width: '250px',
      margin: '10px'
    }
  },
  '@media only screen and (max-width: 622px)': {
    cardsWrapper: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    card: {
      display: 'flex',
      flex: '0 0 100%',
      flexDirection: 'column',
      alignItems: 'center',
      width: '200px',
      margin: '0'
    },
    header: {
      textAlign: 'center'
    }
  },
  '@media only screen and (max-width: 280px)': {
    card: {
      width: '150px'
    }
  }
};

export default styles;
