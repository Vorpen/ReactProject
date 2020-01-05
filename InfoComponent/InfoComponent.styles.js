const styles = {
  infoWrapper: {
    textAlign: 'center',
    '& p': {
      maxWidth: '650px',
      margin: '20px auto',
      color: '#3e455e',
      fontSize: '18px',
      fontWeight: '300'
    }
  },
  aboutWrapper: {},
  aboutTitle: {
    margin: '0',
    padding: '16px',
    backgroundColor: '#3a4660',
    color: '#fff',
    fontSize: '40px'
  },
  footerWrapper: {
    marginBottom: '20px',
    fontSize: '25px',
    color: '#c74918'
  },
  aboutContent: {
    marginTop: '30px',
    color: '#3e455e',
    lineHeigth: '1.5',
    fontSize: '16px'
  },
  divider: {
    color: '#3e455e',
    fontSize: '25px'
  },
  border: {
    position: 'relative'
  },
  orange: {
    position: 'absolute',
    top: '-6px',
    left: '0',
    width: '100%',
    height: '14px',
    background: `url('${process.env.PUBLIC_URL}/images/orange.png')`,
    backgroundSize: '120% 100%'
  },
  blue: {
    position: 'absolute',
    top: '-6px',
    left: '0',
    width: '100%',
    height: '14px',
    background: `url('${process.env.PUBLIC_URL}/images/blue.png')`,
    backgroundSize: '120% 100%'
  },
  '@media (max-width:400px)': {
    infoWrapper: {
      '& p': {
        margin: '20px'
      }
    }
  }
};

export default styles;
