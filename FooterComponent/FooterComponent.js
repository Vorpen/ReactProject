import React, { Component } from 'react';
import FloorLogo from '../SpendComponent/ikone/logo4.png';
import mailImg from '../SpendComponent/ikone/mail.png';
import mapImg from '../SpendComponent/ikone/map.png';
import FRlogo from '../SpendComponent/ikone/FRlogo.png';

import './FooterComponent.css';
import facebook from '../SpendComponent/ikone/Facebook_footer.svg';
import instagram from '../SpendComponent/ikone/Instagram_footer.svg';
class FooterComponent extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footer-content">
          <div className="leftside">
            <div className="logo-container">
              <img alt="" className="LogoFloorFooter" src={FloorLogo}></img>
              <p className="first">Experience more for less</p>
              <p className="second">
                <a className="about-link" href="/about">
                  FloorNap story
                </a>
              </p>
            </div>
            <div className="mail">
              <a className="hotmail">
                <img alt="" className="footer-icon" src={mailImg} />
                info@floornap.com
              </a>
              <p style={{ color: '#3C414D', paddingTop: '9px' }}>
                <img alt="" className="footer-icon" src={mapImg} />
                Kučerina ulica 62. Zagreb
              </p>
            </div>
            <div className="FR-logo-container">
              <img src={FRlogo} />
            </div>
            <div className="rightside">
              <h4>Follow us on </h4>
              <a href="https://www.facebook.com/FloorNap/?ref=bookmarks">
                <img alt="" src={facebook} id="facebook"></img>
              </a>
              <a href="https://www.instagram.com/floornapofficial/">
                <img alt="" src={instagram} id="instagram"></img>
              </a>
            </div>
          </div>

          <div className="FR-logo-container-mobile">
            <img src={FRlogo} />
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
