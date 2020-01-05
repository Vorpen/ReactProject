import React from 'react';

import './SupportComponent.css';
import Ecological from '../SpendComponent/ikone/ecological.jpg';
import Social from '../SpendComponent/ikone/social.jpg';
import Economical from '../SpendComponent/ikone/economical.jpg';

const Support = () => {
  return (
    <div id="support" className="container">
      <div id="reed">
        <p className="reed-naslov">
          FloorNap is a platform for variety of all low budget accommodation within 15 euros per person.
        </p>
        <p className="reed-podnaslov">By joining us you support</p>
        <div id="redak" className="redak col-sm-6 col-md-4 col-lg-4 col-xl-4 text-center">
          <div className="text-container">
            <h3>Budget travelers</h3>
            <p>Providing your space (floor, couch, bed) to budget traveler you are helping with his limited budget</p>
          </div>
          <img alt="" className="img-responsive center-block" src={Economical}></img>
        </div>
        <div id="redak" className="redak col-sm-6 col-md-4 col-lg-4 col-xl-4 text-center">
          <div className="text-container">
            <h3>Socializing</h3>
            <p>
              We promote socializing within our community of mostly young people. Traveler with host and with other
              travelers
            </p>
          </div>
          <img alt="" className="img-responsive center-block" src={Social}></img>
        </div>
        <div id="redak" className="redak col-sm-6 col-md-4 col-lg-4 col-cl-4 text-center">
          <div className="text-container">
            <h3>Fighting climate change</h3>
            <p>
              Bringing a sleeping bag on your journey is helping reducing the carbon emissions up to 1% by removing
              sheets
            </p>
          </div>
          <img alt="" className="img-responsive center-block" src={Ecological}></img>
        </div>
      </div>
    </div>
  );
};

export default Support;
