import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { Field, reduxForm, Form, change } from 'redux-form';

import styles from './FilterForm.styles';
import { renderInput, renderDatePicker, renderSelect } from '../../../shared/SharedForm/sharedFunctions';
import { postService } from '../../../../services/postsService';
import plusIco from '../../SpendComponent/ikone/plus.png';
import minusIco from '../../SpendComponent/ikone/minus.png';
import personIco from '../../SpendComponent/ikone/person.png';
import { store } from '../../../../helpers/store';

const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxInputLength = maxLength(30);
const maxValue = max => value => (value && value > max ? `Must be at less than ${max}` : undefined);
const maxPeopleValue = maxValue(30);
const required = value => (value ? undefined : 'Required');
const dateValidate = value => {
  const date = new Date(value);
  return !!value && isNaN(date.getTime()) ? 'Date must be in right format' : undefined;
};

class FilterForm extends Component {
  constructor(props) {
    super(props);

    this.handleMinDateChange = this.handleMinDateChange.bind(this);
    this.handleMaxDateChange = this.handleMaxDateChange.bind(this);
    this.state = {
      minDate: new Date(),
      maxDate: null,
      cities: [],
    };
  }

  componentDidMount() {
    this.props.initialize({ number_of_people: 1 });
    postService.getCities().then(data => {
      let cities = data.cities.map(city => {
        return { value: city, label: city };
      });
      this.props.initialize({ number_of_people: 1, city: cities[0] });
      this.setState({ cities: cities });
    });
  }

  handleMinDateChange(minDate) {
    this.setState({ minDate });
  }

  handleMaxDateChange(maxDate) {
    this.setState({ maxDate });
  }

  getNumbrOfPeople = () => {
    let people_number =
      (store.getState().form['FilterForm'] &&
        store.getState().form['FilterForm'].values &&
        store.getState().form['FilterForm'].values.number_of_people) ||
      1;
    return people_number;
  };

  handleDecreacePeopleNumber = () => {
    let people_number =
      store.getState().form['FilterForm'].values && store.getState().form['FilterForm'].values.number_of_people;
    if (parseInt(people_number) === 1) {
      return;
    }
    this.props.dispatch(change('FilterForm', 'number_of_people', parseInt(people_number) - 1));
    this.setState(this.state || {});
  };

  handleIncreasePeopleNumber = () => {
    let people_number =
      store.getState().form['FilterForm'].values && store.getState().form['FilterForm'].values.number_of_people;
    if (parseInt(people_number) === 30) {
      return;
    }
    this.props.dispatch(change('FilterForm', 'number_of_people', parseInt(people_number) + 1));
    this.setState(this.state || {});
  };

  render() {
    const { classes, handleSubmit, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <div className="form-header">
          {/* <div className="form-header-naslov">Experience more for less</div> */}
          <div className="form-header-text">
            Find accommodation for less than <span className="blue">15 Euros per person!</span>
          </div>
        </div>
        <div className="inputs">
          <div className="input-wrapper" style={{ '-ms-grid-column': '1', '-ms-grid-row': '1' }}>
            <label htmlFor="city">We are available here</label>
            <Field
              currentForm="FilterForm"
              fieldName="city"
              name="city"
              component={renderSelect}
              options={this.state.cities}
              classes={{}}
              validate={[maxInputLength, required]}
            />
          </div>

          <Field type="hidden" name="lat" component={renderInput} style={{ display: 'none' }} />
          <Field type="hidden" name="long" component={renderInput} style={{ display: 'none' }} />
          <div className="input-wrapper number_of_people" style={{ '-ms-grid-column': '2', '-ms-grid-row': '1' }}>
            <label htmlFor="number_of_people">How many</label>
            <div className="number_of_people_input">
              <div className="minus-plus-icon person-icon">
                <img alt="" src={personIco} />
              </div>
              <div className="minus-plus-icon minus-plus" onClick={this.handleDecreacePeopleNumber}>
                <img alt="" src={minusIco} />
              </div>
              <Field
                name="number_of_people"
                placeholder="Number of people"
                type="text"
                component={renderInput}
                normalize={(val, prevVal) => {
                  if (val) {
                    return /^\d+$/.test(val) ? val : prevVal;
                  }
                  return val;
                }}
                defaultValue={1}
                inputmode="numeric"
                validate={maxPeopleValue}
              />
              <div className="current_number">{this.getNumbrOfPeople()}</div>
              <div className="minus-plus-icon minus-plus" onClick={this.handleIncreasePeopleNumber}>
                <img alt="" src={plusIco} />
              </div>
            </div>
          </div>
          <div className={classes.b} style={{ display: 'none' }}>
            <Field type="hidden" name="country" component={renderInput} />
            <Field type="hidden" name="postal_code" component={renderInput} />
          </div>

          <div className="input-wrapper" style={{ '-ms-grid-column': '1', '-ms-grid-row': '2' }}>
            <label htmlFor="date_available_from">When</label>
            <Field
              name="date_available_from"
              placeholder="Check in"
              component={renderDatePicker}
              classes={classes}
              handleChange={this.handleMinDateChange}
              customProps={{
                disabledDays: [
                  {
                    before: new Date(),
                    after: this.state.maxDate,
                  },
                ],
              }}
              validate={[dateValidate]}
            />
          </div>

          <div className="input-wrapper" style={{ '-ms-grid-column': '2', '-ms-grid-row': '2' }}>
            <label className="" htmlFor="date_available_to">
              To
            </label>
            <Field
              name="date_available_to"
              placeholder="Check out"
              component={renderDatePicker}
              classes={classes}
              handleChange={this.handleMaxDateChange}
              customProps={{
                disabledDays: [
                  {
                    before: this.state.minDate,
                  },
                ],
              }}
              validate={[dateValidate]}
            />
          </div>
        </div>

        <button className={'submitButton'} type="submit" disabled={submitting}>
          <div>
            <p
              className={classes.pic}
              style={{
                color: 'white',
                fontFamily: 'Helvetica',
                paddingTop: '0px',
                textALign: 'center',
              }}
            >
              Search
            </p>
          </div>
        </button>
      </Form>
    );
  }
}

const handleSubmit = values => {
  if (values['city']) {
    values['city'] = (values['city'].value || values['city']).split(',')[0];
  }
  postService.filterPosts(values, true);
};

FilterForm = reduxForm({
  form: 'FilterForm',
  destroyOnUnmount: false,
  onSubmit: handleSubmit,
})(FilterForm);

export default injectSheet(styles)(FilterForm);
