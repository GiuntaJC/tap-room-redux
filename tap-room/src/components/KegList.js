import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types'; 

function KegList(props) {
  return (
    <React.Fragment>
      <h1>Keg List</h1>
      {Object.values(props.kegList).map((keg) => (
        <Keg
          name={keg.name}
          brand={keg.brand}
          quantityLeft={keg.quantityLeft}
          pricePerPint={keg.pricePerPint}
          proof={keg.proof}
          id={keg.id}
          selection={props.onKegSelection}
          key={keg.id}
        />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
}

export default KegList;