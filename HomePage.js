import React from 'react';
import injectSheet from 'react-jss';
import { Helmet } from 'react-helmet';

import FilterComponent from './FilterComponent/FilterComponent';
import WhatIsFloornap from './WhatIsFloornap/WhatIsFloornap.js';
import ExtraspaceComponent from './ExtraspaceComponent/ExtraspaceComponent.js';
// import PictureComponent from './PictureComponent/PictureComponent.js';
import SupportComponent from './SupportComponent/SupportComponent.js';
import SpendComponent from './SpendComponent/SpendComponent.js';
import UserCommentsComponent from './UserCommentsComponent/UserCommentsComponent.js';
import FooterComponent from '../HomePage/FooterComponent/FooterComponent.js';
import FloornapStory from './FloornapStoryComponent/FloornapStory.js';
import styles from './HomePage.styles';
import PreFooterComponent from './PreFooterComponent/PreFooterComponent.js';
import './HomePage.css';
import { updateStatsHomePage } from '../LandingPage/landingPageHelper';

class HomePage extends React.Component {
  componentDidMount = () => {
    updateStatsHomePage();
  };
  render() {
    return (
      <div className="noselect">
        <Helmet>
          <title> Home page </title>
          <meta />
        </Helmet>
        <FilterComponent />
        <main className="main-area">
          <WhatIsFloornap />
          <ExtraspaceComponent />
          <SupportComponent />
          <UserCommentsComponent />
          {/* <PictureComponent /> */}
          <SpendComponent />
          <PreFooterComponent />
        </main>
        <FloornapStory />
        <FooterComponent />
      </div>
    );
  }
}

export default injectSheet(styles)(HomePage);
