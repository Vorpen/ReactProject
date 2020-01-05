import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModalConsumer from '../../../consumers/modalConsumer';
import { modalConstants } from '../../../constants/modalConstants';
import history from '../../../helpers/history';

import './PreFooterComponent.css';
class PreFooterComponent extends Component {
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
  handleShowModal(modal) {
    this.setState({
      currentModal: modal,
    });
  }

  handleHideModal() {
    this.setState({
      currentModal: null,
    });
  }

  render() {
    return (
      <ModalConsumer>
        {({ showModal }) => (
          <React.Fragment>
            <div id="prefooter" className="container-fluid">
              <div className="row">
                <div id="sideFooter" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h3 className="prefooterh3">At the end of your journey </h3>
                  <p className="prefooterh3">you always remember what did you do and not where did you sleep</p>
                  <button className="joinusbutton" onClick={() => showModal('register', modalConstants.MODAL_REGISTER)}>
                    <p
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        paddingRight: '115px',
                        fontSize: '18px',
                        fontFamily: 'Helvetica',
                      }}
                    >
                      Join us
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </ModalConsumer>
    );
  }
}

export default PreFooterComponent;
