const styles = {
  mali: {
    display: 'none',
    color: '#4A4A4A',
    fontSize: '34px',
    width: '376px',
    height: '48px',
    fontFamily: 'Helvetica Neue',
  },
  submitButton: {
    marginTop: '100px',
    backgroundColor: '#337AB7',
    borderRadius: '40px',
    marginRight: '390px',
    paddingLeft: '-50px',
    width: '300px',
    height: '80px',
    padding: '6px',
  },
  h1: {
    color: '#4A4A4A',
    fontSize: '43px',
    width: '476px',
    height: '48px',
  },
  h3: {
    color: '#4A4A4A',
    fontSize: '25px',
    width: '496px',
    height: '28px',
  },
  up: {
    width: '670px',
    paddingLeft: '30px',
    paddingTop: '50px',
  },
  b: {
    height: '150px',
  },
  checkin: {},
  checkout: { marginBottom: '20px' },
  formfooter: {
    width: '670px',
    height: '50px',
    border: '1px solid black',
  },
  inputWrapper1: {
    height: '100px',
    '& input': {
      padding: '12px !important',
      width: '100%',
      border: '1px solid #707070',
      height: '61px',
      marginLeft: '30px',
      marginBottom: '40px',
    },
    '& > div': {
      width: '282px',
      paddingRight: '5px',
    },
  },
  inputWrapper2: {
    position: 'relative',
    height: '150px',
    '& input': {
      padding: '12px !important',
      width: '297px',
      border: '1px solid #707070',
      height: '61px',
      marginBottom: '-30px',
      paddingnBottom: '10px',
      marginLeft: '0px',
    },
    '& > div': {
      width: '282px',
      paddingRight: '5px',
    },
  },
  inputWrapper3: {
    position: 'relative',
    height: '282px',
    marginLeft: '0px',
    marginTop: '-10px',
    '& input': {
      padding: '12px !important',
      width: '297px',
      border: '1px solid #707070',
      height: '61px',
      marginBottom: '0px',
      paddingnBottom: '10px',
      marginLeft: '0px',
      marginTop: '-10px',
      paddingTop: '5px',
    },
    '& > div': {
      width: '297px',
      paddingRight: '5px',
    },
  },
  inputWrapper4: {
    position: 'relative',
    height: '250px',
    marginTop: '-305px',
    marginLeft: '30px',
    '& input': {
      padding: '12px !important',
      width: '297px',
      border: '1px solid #707070',
      height: '61px',
      marginBottom: '-30px',
      paddingnBottom: '10px',
      marginLeft: '0px',
    },
    '& > div': {
      width: '282px',
      paddingRight: '5px',
    },
  },
  '@media (max-width: 1780px)': {
    filterForm: {
      marginLeft: '50%',
    },
  },
  '@media (max-width: 1550px)': {
    filterForm: {
      marginRight: '200px',
      marginTop: '100px',
    },
  },
  '@media (max-width: 1400px)': {
    filterForm: {
      gridTemplateColumns: 'repeat(1, 100%)',
      width: '678px',
      marginRight: '200px',
    },
    inputWrapper3: {
      position: 'relative',
      height: '270px',
      marginLeft: '0px',
      marginTop: '-100px',
      '& input': {
        padding: '12px !important',
        width: '297px',
        border: '1px solid #707070',
        height: '61px',
        marginBottom: '0px',
        paddingnBottom: '10px',
        marginLeft: '0px',
        marginTop: '-10px',
        paddingTop: '5px',
      },
      '& > div': {
        width: '282px',
        paddingRight: '5px',
      },
    },
  },
  '@media (max-width: 1216px)': {
    filterForm: {
      gridTemplateColumns: 'repeat(1, 100%)',
    },
    h1: {
      width: '350px',
      fontSize: '37px',
      width: '476px',
      height: '48px',
    },
    filterForm: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(297px, 1fr))',
      gridRowGap: '15px',
      gridColumnGap: '15px',
      marginTop: '40px',
      boxShadow: '0px 0px #707070',
      width: '678px',
      height: '432px',
      backgroundColor: 'white',
      marginLeft: '-105px',
      marginTop: '400px',
    },
  },
  '@media (max-width: 1100px)': {
    filterForm: {
      gridTemplateColumns: 'repeat(1, 100%)',
    },
    submitButton: {
      width: '240px',
      marginBottom: '-100px',
      marginRight: '-100px',
    },
    pic: {
      marginLeft: '-35px',
    },
    h1: {
      width: '300px',
      fontSize: '37px',
      width: '476px',
      height: '48px',
    },
    h1form: {
      width: '400px',
      fontFamily: 'Helvetica neue',
    },
    up: {
      width: '570px',
      paddingLeft: '30px',
      paddingTop: '10px',
    },
    h3form: {
      fontFamily: 'Helvetica neue',
      width: '400px',
    },
    filterForm: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(297px, 1fr))',
      gridRowGap: '15px',
      gridColumnGap: '15px',
      marginTop: '100px',
      boxShadow: '0px 0px #707070',
      verticalAlign: 'baseline',
      width: '578px',
      height: '552px',
      backgroundColor: 'white',
      marginLeft: '300px',
    },
    inputWrapper2: {
      position: 'relative',
      height: '150px',
      paddingTop: '0px',
      '& input': {
        padding: '12px !important',
        width: '277px',
        border: '1px solid #707070',
        height: '61px',
        marginBottom: '-30px',
        paddingnBottom: '10px',
        marginLeft: '30px',
        marginTop: '-17px',
      },
      '& > div': {
        width: '282px',
        paddingRight: '5px',
      },
    },
    inputWrapper3: {
      position: 'relative',
      height: '270px',
      marginLeft: '29px',
      marginTop: '-400px',
      '& input': {
        padding: '12px !important',
        width: '297px',
        border: '1px solid #707070',
        height: '61px',
        marginBottom: '-30px',
        paddingnBottom: '10px',
        marginLeft: '0px',
      },
      '& > div': {
        width: '282px',
        paddingRight: '5px',
      },
    },
    inputWrapper4: {
      position: 'relative',
      height: '250px',
      marginTop: '-200px',
      marginLeft: '30px',
      '& input': {
        padding: '12px !important',
        width: '297px',
        border: '1px solid #707070',
        height: '61px',
        marginBottom: '-30px',
        paddingnBottom: '10px',
        marginLeft: '0px',
      },
      '& > div': {
        width: '282px',
        paddingRight: '5px',
      },
    },
  },
  '@media (max-width: 950px)': {
    filterForm: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(297px, 1fr))',
      gridRowGap: '15px',
      gridColumnGap: '15px',
      marginTop: '100px',
      boxShadow: '0px 0px #707070',
      verticalAlign: 'baseline',
      width: '578px',
      height: '552px',
      backgroundColor: 'white',
      marginLeft: '180px',
      position: 'relative',
    },
    submitButton: {
      width: '240px',
      paddingTop: '-200px',
      marginLeft: '300px',
      flex: '0 100%',
    },
  },
  '@media (max-width: 942px)': {
    filterForm: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(297px, 1fr))',
      gridRowGap: '15px',
      gridColumnGap: '15px',
      marginTop: '100px',
      boxShadow: '0px 0px #707070',
      verticalAlign: 'baseline',
      width: '578px',
      height: '552px',
      backgroundColor: 'white',
      marginLeft: '180px',
      position: 'relative',
    },
    submitButton: {
      width: '240px',
      paddingTop: '-200px',
      marginLeft: '200px',
      flex: '0 100%',
    },
  },
  '@media (max-width: 802px)': {
    filterForm: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(297px, 1fr))',
      gridRowGap: '15px',
      gridColumnGap: '15px',
      marginTop: '0px',
      boxShadow: '0px 0px #707070',
      verticalAlign: 'baseline',
      width: '578px',
      height: '552px',
      backgroundColor: 'white',
      marginLeft: '100px',
    },
  },
  '@media (max-width: 630px)': {
    filterForm: {
      gridTemplateColumns: 'repeat(1, 100%)',
    },
  },
  '@media (max-width: 478px)': {
    filterForm: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(297px, 1fr))',
      gridRowGap: '15px',
      gridColumnGap: '15px',
      marginTop: '100px',
      boxShadow: '0px 0px #707070',
      verticalAlign: 'baseline',
      width: '380px',
      height: '652px',
      backgroundColor: 'white',
      marginLeft: '25px',
      paddingLeft: '10px',
    },
    mali: {
      display: 'block',
      color: '#4A4A4A',
      fontSize: '43px',
      width: '376px',
      height: '48px',
      fontFamily: 'Helvetica Neue',
      paddingTop: '-90px',
    },
    h1form: {
      width: '250px',
      fontFamily: 'Helvetica neue',
      fontSize: '35px',
      display: 'none',
    },
    up: {
      width: '570px',
      paddingLeft: '30px',
      paddingTop: '10px',
    },
    h3form: {
      fontFamily: 'Helvetica neue',
      width: '200px',
      paddingTop: '30px',
    },
    submitButton: {
      width: '240px',
      marginLeft: '-265px',
      position: 'absolute',
      bottom: '0',
      marginTop: '-150px',
    },
    inputWrapper3: {
      position: 'relative',
      height: '270px',
      marginLeft: '29px',
      marginTop: '-240px',
      '& input': {
        padding: '12px !important',
        width: '297px',
        border: '1px solid #707070',
        height: '61px',
        marginBottom: '-30px',
        paddingnBottom: '10px',
        marginLeft: '0px',
      },
    },
  },
  '@media (max-width: 460px)': {
    filterForm: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(297px, 1fr))',
      gridRowGap: '15px',
      gridColumnGap: '15px',
      marginTop: 'px',
      boxShadow: '0px 0px #707070',
      verticalAlign: 'baseline',
      width: '370px',
      height: '758px',
      backgroundColor: 'white',
      marginLeft: '10px',
      paddingLeft: '10px',
    },
    mali: {
      color: '#4A4A4A',
      fontSize: '33px',
      width: '60%',
      height: '48px',
    },
  },
  '@media (max-width: 420px)': {
    filterForm: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(297px, 1fr))',
      gridRowGap: '15px',
      gridColumnGap: '15px',
      boxShadow: '0px 0px #707070',
      verticalAlign: 'baseline',
      width: '390px',
      height: '758px',
      backgroundColor: 'white',
      marginLeft: '-10px',
      paddingLeft: '25px',
    },
    inputWrapper3: {
      position: 'relative',
      height: '270px',
      marginLeft: '29px',
      marginTop: '-240px',
      '& input': {
        padding: '12px !important',
        width: '297px',
        border: '1px solid #707070',
        height: '61px',
        marginBottom: '-30px',
        paddingnBottom: '10px',
        marginLeft: '0px',
      },
    },
    h1form: {
      width: '300px',
      fontFamily: 'Helvetica neue',
      fontSize: '35px',
    },
    up: {
      width: '570px',
      paddingLeft: '30px',
      paddingTop: '10px',
    },
    h3form: {
      fontFamily: 'Helvetica neue',
      width: '200px',
    },
    submitButton: {
      width: '240px',
      marginLeft: '-270px',
      position: 'absolute',
      bottom: '0',
      marginTop: '-270px',
    },
  },
  '@media (max-width: 399px)': {
    filterForm: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(297px, 1fr))',
      gridRowGap: '15px',
      gridColumnGap: '15px',
      marginTop: '-200px',
      boxShadow: '0px 0px #707070',
      verticalAlign: 'baseline',
      width: '370px',
      height: '752px',
      backgroundColor: 'white',
      marginLeft: '-10px',
    },
  },
  '@media (max-width: 375px)': {
    filterForm: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(297px, 1fr))',
      gridRowGap: '15px',
      gridColumnGap: '15px',
      marginTop: '-200px',
      boxShadow: '0px 0px #707070',
      verticalAlign: 'baseline',
      width: '360px',
      height: '752px',
      backgroundColor: 'white',
      marginLeft: '-10px',
    },
    h1form: {
      width: '300px',
      fontFamily: 'Helvetica neue',
      fontSize: '30px',
    },
    up: {
      width: '570px',
      paddingLeft: '30px',
      paddingTop: '10px',
    },
    h3form: {
      fontFamily: 'Helvetica neue',
      width: '200px',
    },
    submitButton: {
      width: '240px',
      marginLeft: '-282px',
      position: 'absolute',
      bottom: '0',
      marginTop: '-250px',
    },
  },
  '@media (max-width: 360px)': {
    filterForm: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(297px, 1fr))',
      gridRowGap: '15px',
      gridColumnGap: '15px',
      marginTop: '0px',
      boxShadow: '0px 0px #707070',
      verticalAlign: 'baseline',
      width: '340px',
      height: '752px',
      paddingRight: '40px',
      backgroundColor: 'white',
      marginLeft: '-10px',
      paddingLeft: '0px',
    },
    h1form: {
      width: '300px',
      fontFamily: 'Helvetica neue',
      fontSize: '30px',
    },
    up: {
      width: '570px',
      paddingLeft: '30px',
      paddingTop: '10px',
    },
    h3form: {
      fontFamily: 'Helvetica neue',
      width: '200px',
    },
    submitButton: {
      width: '240px',
      marginLeft: '-265px',
      position: 'absolute',
      bottom: '0',
      marginTop: '-230px',
    },
  },
};

export default styles;
