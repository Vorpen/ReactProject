import React, { Component } from 'react';

import './MoreLessComponent.css';
import less from '../SpendComponent/ikone/sleep.png';
import more from '../SpendComponent/ikone/more_fun.png';

class MoreLessComponent extends Component {
  render() {
    return (
      <div id="moreless" className="container">
        <div className="row">
          <div className="less-more-column">
            <div className="text" style={{ '-ms-grid-column': '1' }}>
              <h3> Less </h3>
              <p>Sleep and worries</p>
            </div>
            <div style={{ '-ms-grid-column': '2' }}>
              <img className="less" src={less}></img>
            </div>
          </div>

          <div className="less-more-column">
            <div className="text" style={{ '-ms-grid-column': '1' }}>
              <h3>More</h3>
              <p>fun and enjoyment</p>
            </div>
            <img className="more" src={more} style={{ '-ms-grid-column': '2' }}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default MoreLessComponent;
