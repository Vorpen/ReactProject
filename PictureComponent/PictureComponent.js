import React from 'react';

import './PictureComponent.css';
import Experience from '../SpendComponent/ikone/experience.jpg';

const Picture = () => {
  return (
    <div className="PictureSection">
      <div className="experience-text">Experience more for less</div>
      <div className="image">
        <img alt="" src={Experience}></img>
      </div>
    </div>
  );
};

export default Picture;
