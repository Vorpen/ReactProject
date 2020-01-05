import React, { Component } from 'react';

import './SpendComponent.css';
import vrtuljak from './ikone/support1.png';
import food from './ikone/support2.png';
import beer from './ikone/support3.png';
import tradition from './ikone/support4.png';
import tents from './ikone/support5.png';
class SpendComponent extends Component {
  render() {
    return (
      <div id="spend" className="container-fluid">
        <div className="row">
          <h2 className="less">Spend less on accommodation</h2>
          <p className="pless">and focus on creating memories and exploring the world</p>
          <div className="slider-container">
            <div className="slides">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 mask-left" style={{ width: '50px' }} />
              <div className=" col-xs-12 col-sm-12 col-md-6  col-lg-2 slide">
                <img alt="" src={vrtuljak} className="Image"></img>

                <h3 className="NaslovH">Local Culture</h3>

                <p className="textP">
                  Explore the city and discover places where only locals go, Drink a coffee or beer with them. They
                  would surely like to share some good stories
                </p>
              </div>

              <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-2 slide">
                <img alt="" src={food} className="Image"></img>
                <h3 className="NaslovH">Local food</h3>

                <p className="textP">
                  Go to street food bar or to an authentic domestic restaurant or maybe cook some domestic meal with
                  host, you won't regret spending your money
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6  col-lg-2 slide">
                <img alt="" src={beer} className="Image"></img>
                <h3 className="NaslovH">Nature</h3>

                <p className="textP">
                  Take a half-day trip and visit nearest beautiful nature sights or climb the city’s hill and take a
                  look at the city and snap some great photos
                </p>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6  col-lg-2 slide">
                <img alt="" src={tradition} className="Image"></img>

                <h3 className="NaslovH">Concerts</h3>

                <p className="textP">
                  Buy a ticket for your favorite band, grab yourself a beer and enjoy it as much as you can :)
                </p>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 slide">
                <img alt="" src={tents} className="Image"></img>

                <h3 className="NaslovH">Museums</h3>

                <p className="textP">
                  Experience museums from history to modern art step inside the minds of artists, expand your knowledge
                  horizon horizon so you can be a smart ass back home :)
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 mask-right" style={{ width: '100px' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpendComponent;
