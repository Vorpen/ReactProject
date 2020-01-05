const styles = {
  newsLetter: {
    width: '100%',
    backgroundColor: '#fafafa'
  },
  newsLetterWrapper: {
    padding: '20px',
    width: '500px',
    border:'1px solid black',
    margin: '0 auto',
    fontFamily: 'Ubuntu',
    textAlign: 'center',
    marginTop:'100px'
  },
  title: {
    marginTop: '20px',
    fontSize: '30px'
  },
  description: {
    fontSize: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputWrapper: {
    width: '100%',
    border: '1px solid rgb(204, 204, 204)',
    padding: '12px',
    borderRadius: '4px'
  },
  submitButton: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '16px',
    padding: '4px',
    backgroundColor: '#c74918',
    color: '#fff',
    fontSize: '20px',
    fontFamily: 'Ubuntu'
  },
  '@media only screen and (max-width: 500px)': {
    newsLetterWrapper: {
      width: '320px'
    }
  }
};

export default styles;
