import React, { useState } from 'react';

import './UserComments.css';
import ogulcan from './images/ogulcan.jpg';
import benjamin from './images/Benjamin.jpg';
import szabina from './images/szabina.jpg';
import antonio from './images/Antonio.jpg';
import betul from './images/betul.jpg';
import { modalConstants } from '../../../constants/modalConstants';
import ModalConsumer from '../../../consumers/modalConsumer';
import ItemsCarousel from 'react-items-carousel';
import chevronIcon from '../SpendComponent/ikone/chevron-icon.png';

const UserComments = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const mobile = window.screen.width <= 770;
  const small = window.screen.width <= 550;
  const tiny = window.screen.width <= 400;
  const cards = tiny ? 1 : mobile ? 2 : 3;
  return (
    <div className="user-comments-section">
      <div className="title">What hosts and travelers say about us</div>
      <div className="review-container">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={cards}
          gutter={small ? 10 : 20}
          leftChevron={
            <button>
              <img className="chevron-icon left" src={chevronIcon} />
            </button>
          }
          rightChevron={
            <button>
              <img className="chevron-icon right" src={chevronIcon} />
            </button>
          }
          outsideChevron
          chevronWidth={small ? 40 : 80}
        >
          <div className="user-image-wrapper">
            <img alt="" className="user-image" src={ogulcan} />
            <div className="name">Ogulcan (27):</div>
            <div className="comment">
              {`"I hosted on FloorNap and it was amazing, I met very spontaneous and friendly people and I earned some money"`}
              <br />
            </div>
          </div>
          <div className="user-image-wrapper">
            <img alt="" className="user-image" src={benjamin} />
            <div className="name">Benjamin (25):</div>
            <div className="comment">
              {`"I can't wait for FloorNap to be possible in my desired destinations so I can easily find budget accommodation"`}
              <br />
            </div>
          </div>
          <div className="user-image-wrapper">
            <img alt="" className="user-image" src={szabina} />
            <div className="name">Szabina (30):</div>
            <div className="comment">
              {`"I really love the idea of cheap eco-accommodation and community of young and open-minded people"`}
              <br />
            </div>
          </div>
          <div className="user-image-wrapper">
            <img alt="" className="user-image" src={antonio} />
            <div className="name">Antonio (24):</div>
            <div className="comment">
              {`"I live in a center of Paris and I love the idea of helping people sleep on budget in expensive cities, I am currently on a trip so I am not available for hosting"`}
              <br />
            </div>
          </div>
          <div className="user-image-wrapper">
            <img alt="" className="user-image" src={betul} />
            <div className="name">Betul (23):</div>
            <div className="comment">
              {`"I am really excited to meet people and to earn some money for my trip"`}
              <br />
            </div>
          </div>
        </ItemsCarousel>
      </div>
      <div className="title">Do you want to meet these wonderful people?</div>
      <ModalConsumer>
        {({ showModal }) => (
          <React.Fragment>
            <button className="joinusbutton" onClick={() => showModal('register', modalConstants.MODAL_REGISTER)}>
              <p>Yes, sign me up</p>
            </button>
          </React.Fragment>
        )}
      </ModalConsumer>
    </div>
  );
};

export default UserComments;
