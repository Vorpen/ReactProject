const styles = {
  wrapper: {},

  cardd: {
    maxWidth: '100%',
    margin: '0 auto 0 auto',
    padding: '95px 20px 0 20px',
  },
  helloo: {
    fontFamily: 'Lucida Blackletter',
    fontSize: '62px',

    color: '#3A4660',
    textShadow: '#000000',
    background: 'blur',

    paddingLeft: '500px',
    paddingTop: '250px',
  },

  '@media (max-width: 1100px)': {
    helloo: {
      width: '350px',
      fontSize: '37px',
      width: '476px',
      height: '48px',
      marginLeft: '-400px',
    },
  },

  '@media (max-width: 1750px)': {
    helloo: {
      fontSize: '55px',
      width: '876px',
      height: '48px',
      marginLeft: '250px',
      marginBottom: '100px',
    },
  },

  '@media (max-width: 1550px)': {
    cardd: {
      height: '911px',
    },
  },

  '@media (max-width: 1216px)': {
    helloo: {
      fontSize: '55px',
      width: '876px',
      height: '48px',
      marginLeft: '-250px',
      marginBottom: '100px',
    },
  },

  '@media (max-width: 460px)': {
    helloo: {
      width: '380px',
      fontSize: '47px',
      width: '405px',
      height: '48px',
    },
  },

  '@media (max-width: 415px)': {
    helloo: {
      width: '350px',
      fontSize: '47px',
      width: '405px',
      height: '48px',
      marginLeft: '-400px',
      marginBottom: '100px',
      paddingBottom: '100px',
      marginTop: '-300px',
    },

    cardd: {
      maxWidth: '625px',
      margin: '0 auto 0 auto',
      padding: '20px 20px 0 20px',
      paddingBottom: '100px',
    },
  },

  '@media (max-width: 360px)': {
    helloo: {
      width: '350px',
      fontSize: '40px',
      width: '476px',
      height: '48px',
      marginLeft: '-400px',
    },

    cardd: {
      paddingRight: '20px',
    },
  },
};

export default styles;
