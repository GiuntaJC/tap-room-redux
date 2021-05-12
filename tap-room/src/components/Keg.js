import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div className = "kegClickable" onClick={() => props.selection(props.id)}>
        <p>Name: {props.name}</p>
        <p>Brand: {props.brand}</p>
        <p>Price per Pint: ${props.pricePerPint}</p>
        <p>Proof: {props.proof}</p>
        <p>Quantity Remaining: {props.quantityLeft}</p>
      </div>
        <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  pricePerPint: PropTypes.number,
  proof: PropTypes.number,
  quantityLeft: PropTypes.number,
  id: PropTypes.string,
  selection: PropTypes.func
}

export default Keg;