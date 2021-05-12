import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name" className="form-control" required/>
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <input type="text" name="brand" placeholder="Brand" className="form-control" required/>
        </div>
        <div className="form-group">
          <label htmlFor="pricePerPint">Price Per Pint</label>
          <input type="number" name="pricePerPint" placeholder="$0.00" min="0.00" step="0.01" precision={2} className="form-control" required/>
        </div>
        <div className="form-group">
          <label htmlFor="proof">Proof</label>
          <input type="number" name="proof" placeholder="Proof" min="0" max="200" className="form-control" required/>
        </div>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;