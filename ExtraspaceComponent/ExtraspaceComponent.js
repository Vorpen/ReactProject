import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './ExtraspaceComponent.css';
import extra from '../SpendComponent/ikone/extraspace.jpg';
import ModalConsumer from '../../../consumers/modalConsumer';
import { modalConstants } from '../../../constants/modalConstants';
import http from '../../../helpers/http';
import Toast from '../../../helpers/toast';
import history from '../../../helpers/history';

class ExtraspaceComponent extends Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);

    this.handleResize = this.handleResize.bind(this);

    this.state = {
      hover: false,
    };
  }

  handleLogOut(e) {
    e.preventDefault();
    localStorage.setItem('user', null);
    history.push('/');
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).onclick = function() {};
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    if (window.innerWidth > 770) {
      this.setState({
        hover: false,
      });
    }
  }

  render() {
    return (
      <div id="extraSpace" className="container">
        <h3 className="three">
          <div className="three-title">Become a host and share some space</div>
          <div className="three-subtitle">Earn 7-15€ per person</div>
        </h3>
        <div className="row">
          <div className="ExtraPhoto-container">
            <div className="ExtraPhoto-text">got extra space?</div>
            <img alt="" className="ExtraPhoto" src={extra}></img>
          </div>
          <div id="sideText" className="">
            <p className="bedding">
              If you have extra bed, couch or some free space around in your place why not use it for good cause?
              <br />
              <b>FloorNap</b> offers you to host mostly young, open-minded people who are looking to meet new people
              with similar mindset.
            </p>

            <p className="help">
              <br />
              Help things get in motion
            </p>
            <ModalConsumer>
              {({ showModal }) => (
                <React.Fragment>
                  <button
                    className="host"
                    to="/become-renter"
                    activeStyle={{ color: '#c74918' }}
                    onClick={event => {
                      event.preventDefault();
                      if (!http.getCookie(process.env.REACT_APP_TOKEN)) {
                        showModal('login', modalConstants.MODAL_LOGIN);
                        Toast.triggerError('You need to be logged in to access this site');
                        history.push('/become-renter');
                      } else {
                        history.push('/become-renter');
                      }
                    }}
                  >
                    <p className="buttonText">Become a host</p>
                  </button>
                </React.Fragment>
              )}
            </ModalConsumer>
          </div>
        </div>
      </div>
    );
  }
}

export default ExtraspaceComponent;
