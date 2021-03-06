import { GET_PRODUCT, GET_ONE_PRODUCT, RESET } from './types';

const initialState = {
  products: [],
  oneProduct: {
    id: 1,
    title: '...',
    price: '...',
    category: '...',
    description: '...',
    image: '...',
    rating: {
      rate: 0,
      count: 1,
    },
  },
};
// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case GET_ONE_PRODUCT:
      return {
        ...state,
        oneProduct: action.payload,
      };
    case RESET:
      return {
        ...state,
        oneProduct: initialState.oneProduct,
      };
    default:
      return state;
  }
}
