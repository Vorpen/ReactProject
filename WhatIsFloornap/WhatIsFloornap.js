import React, { Component } from 'react';
import image1 from '../SpendComponent/ikone/whatIsFloornap1.jpg';
import image2 from '../SpendComponent/ikone/whatIsFloornap2.jpg';
import image3 from '../SpendComponent/ikone/whatIsFloornap3.jpg';
import './WhatIsFloornap.css';

class WhatIsFloornap extends Component {
  render() {
    return (
      <div className="what-is-floornap">
        <div className="title">What is FloorNap accomodation</div>
        <div className="subtitle">Choose between various types of accomodation from 5€ to 15€ per person</div>
        <div className="cards-container">
          <div className="card">
            <div className="card-title">From floor space</div>
            <div className="image img-first">
              <img alt="" src={image1} />
            </div>
          </div>
          <div className="card">
            <div className="card-title">Couch</div>
            <div className="image img-second">
              <img alt="" src={image2} />
            </div>
          </div>
          <div className="card">
            <div className="card-title">To luxury place</div>
            <div className="image img-third">
              <img alt="" src={image3} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatIsFloornap;
