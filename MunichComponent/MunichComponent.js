import React, { Component } from 'react';

import './MunichComponent.css';
import bestLeft from '../SpendComponent/ikone/best-left.png';
import bestRight from '../SpendComponent/ikone/best-right.png';
class MunichComponent extends Component {
  render() {
    return (
      <div className="above">
        <div className="images-container">
          <img className="photo" src={bestLeft}></img>
          <img className="photo" src={bestRight}></img>
        </div>
        <div className="best-of-text">
          Best of
          <br /> Central European cities
        </div>
        <div className="text text-big">Join the community</div>
        <div className="text text-small">
          And help people like yourself truly experience Central Europe in cities like Prague, Wien, Budapest
        </div>
      </div>
    );
  }
}

export default MunichComponent;
