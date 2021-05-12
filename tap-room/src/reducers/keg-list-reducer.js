export default (state = {}, action) => {
  const { name, brand, quantityLeft, pricePerPint, proof, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          quantityLeft: quantityLeft,
          pricePerPint: pricePerPint,
          proof: proof,
          id: id
        }
      })
    default:
      return state;
  }
}