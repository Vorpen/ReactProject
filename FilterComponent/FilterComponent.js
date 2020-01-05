import React from 'react';
import FilterForm from './FilterForm/FilterForm';
import injectSheet from 'react-jss';
import { Helmet } from 'react-helmet';
import './FilterComponent.css';
import NavBar from '../../HeaderComponents/NavBar';

import styles from './FilterComponent.styles';

class FilterComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Floornap - Home page</title>
          <meta description="This is home page of floornap website. its fun" />
        </Helmet>

        <div className="filterForm-wrapper">
          <div className="main-nav-bar">
            <NavBar />
          </div>

          <div>
            <h1 className="hello">Sleep from 5€ in Europe cities</h1>

            <div className="filter-form-container">
              <div className="form">
                <FilterForm />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(FilterComponent);
