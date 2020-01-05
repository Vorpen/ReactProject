const facebook = process.env.PUBLIC_URL + '/images/facebook.svg';
const instagram = process.env.PUBLIC_URL + '/images/instagram.svg';
const styles = {
  contactWrapper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  linksWrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px'
  },
  contactItem: {
    display: 'block',
    width: '30px',
    height: '30px',
    '&.facebook': {
      backgroundImage: `url(${facebook})`,
      marginRight: '20px'
    },
    '&.instagram': {
      backgroundImage: `url(${instagram})`
    }
  }
};

export default styles;
