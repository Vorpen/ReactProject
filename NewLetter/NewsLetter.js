import React, { Component } from 'react';
import injectSheet from 'react-jss';

import styles from './NewsLetter.styles';
import { feedBackService } from '../../../services/feedBackService';

import { reduxForm, Field, Form } from 'redux-form';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format!';
  }

  return errors;
};

class NewsLetter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, handleSubmit, pristine, reset, valid, submitting } = this.props;

    return (

      <div className={classes.newsLetter}>
        <div className={classes.newsLetterWrapper}>
          <h2 className={classes.title}>Subscribe to the FloorNap Newsletter</h2>
          <h3 className={classes.description}>Don't miss your affordable destination</h3>
          <Form className={classes.form} onSubmit={handleSubmit}>
            <Field
              classes={classes.inputWrapper}
              name="email"
              type="email"
              placeholder="Enter your email"
              component={({ input, placeholder, minDate, type, id, classes, meta: { touched, error, warning } }) => (
                <React.Fragment>
                  <input {...input} type={type} min={minDate} id={id} className={classes} placeholder={placeholder} />
                </React.Fragment>
              )}
            />{' '}
            <button type="submit" disabled={submitting || !valid || pristine} className={classes.submitButton}>
              Submit
            </button>
          </Form>
        </div>
      </div>
    );
  }
}

const handleSubmit = values => {
  feedBackService.send_newsletter(values);
};

NewsLetter = reduxForm({
  form: 'NewsLetterForm',
  onSubmit: handleSubmit,
  validate
})(NewsLetter);

export default injectSheet(styles)(NewsLetter);
