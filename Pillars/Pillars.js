import React from 'react';
import injectSheet from 'react-jss';
import _ from 'lodash';

import styles from './Pillars.styles';

const images = ['/images/icon1.png', '/images/icon2.png', '/images/icon3.png'];
const titles = ['AFFORDABLE', 'FLEXIBLE', 'CONSISTENT'];
const texts = ['Guarantee price within 15€ per person ', 'Variety of accommodation ', 'Low prices '];

class Pillars extends React.Component {
  constructor(props) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
  }

  renderCards() {
    const { classes } = this.props;
    return images.map((image, i) => {
      return (
        <div className={classes.card} key={i}>
          <img src={process.env.PUBLIC_URL + image} className={classes.image} />
          <div className={classes.textWrapper}>
            <div className={classes.title}>{titles[i]}</div>
            <p className={classes.paragraph}>{texts[i]}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.infoWrapper}>
        <h2 className={classes.header}>Why FloorNap?</h2>
        <div className={classes.cardsWrapper}>{this.renderCards()}</div>
      </div>
    );
  }
}

export default injectSheet(styles)(Pillars);
