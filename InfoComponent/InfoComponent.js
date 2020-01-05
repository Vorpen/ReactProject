import React, { Component } from 'react';
import { modalConstants } from '../../../constants/modalConstants';
import ModalConsumer from '../../../consumers/modalConsumer';

import happy from '../SpendComponent/ikone/fun.png';
import './InfoComponent.css';

class InfoComponent extends Component {
  render() {
    return (
      <div className="container info-component">
        <div className="row">
          <div className="info-text" style={{ '-ms-grid-column': '1' }}>
            <h2 className="naslov">
              Travel to enjoy,
              <br /> not to sleep.{' '}
            </h2>
            <p className="text">
              We are guided by the principle of “seeing and experiencing more for as little money as possible” you more
              time to have.
            </p>
            <ModalConsumer>
              {({ showModal }) => (
                <React.Fragment>
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
                      Register
                    </p>
                  </button>
                </React.Fragment>
              )}
            </ModalConsumer>
          </div>

          <div className="image" style={{ '-ms-grid-column': '2' }}>
            <img src={happy}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoComponent;
