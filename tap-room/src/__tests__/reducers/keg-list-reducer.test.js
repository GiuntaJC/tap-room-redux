import kegListReducer from '../../reducers/keg-list-reducer'; 

describe('kegListReducer', () => {

  let action;

  const kegData = {
    name: 'foo',
    brand: 'bar inc.',
    quantityLeft: 124, // 124 initial pints in a keg
    pricePerPint: 5,
    proof: 80,
    id: 1
  }

  test('Should return default state if no action type is recognized', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg to the keg list', () => {
    const { name, brand, quantityLeft, pricePerPint, proof, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      quantityLeft: quantityLeft,
      pricePerPint: pricePerPint,
      proof: proof,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        quantityLeft: quantityLeft,
        pricePerPint: pricePerPint,
        proof: proof,
        id: id
      }
    })
  })
})