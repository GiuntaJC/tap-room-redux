import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickSell } = props;
  let message;
  if(keg.quantityLeft < 1) {
    message = <h1>Out of Stock</h1>
  }

  return (
    <React.Fragment>
      {message}
      <h1>Keg Detail</h1>
      <h3>Name: {keg.name}</h3>
      <h3>Brand: {keg.brand}</h3>
      <h3>Pints Left: {keg.quantityLeft}</h3>
      <h3>Price Per Pint: ${keg.pricePerPint}</h3>
      <button onClick={() => onClickSell(keg.id)}>Sell a pint</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickSell: PropTypes.func
};

export default KegDetail;