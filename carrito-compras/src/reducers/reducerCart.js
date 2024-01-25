import { initialState } from "../context/cart";

const CART_ACTION_TYPES = {
  ADD_TO_CARAT: "ADD_TO_CART",
  CLEAR_CART: "CLEAR_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};

export const reducerCart = (state, action) => {
  const { type: actionType, payload: actionPayLoad } = action;

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CARAT: {
      const { id } = actionPayLoad;
      const cartProductIndex = state.findIndex((item) => item?.id === id);

      if (cartProductIndex >= 0) {
        const newState = structuredClone(state);
        newState[cartProductIndex].quantity += 1;
        return newState;
      }

      const newState = [
        ...state,
        {
          ...actionPayLoad, //* esto hace referencia al product
          quantity: 1,
        },
      ];

      return newState;
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      return initialState;
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayLoad;
      const newState = state.filter((item) => item.id !== id);
      return newState;
    }
  }

  return state;
};
