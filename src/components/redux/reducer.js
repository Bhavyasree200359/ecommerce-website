const initialState = {
  itemCounts: {},
  totalPrice: 0,
  cartItems: {},
};

export default function reducer(state = initialState, action) {
  console.log("Updated State:", state);

  switch (action.type) {
    case "INCREMENT": {
      const { id, price, productDetails } = action.payload;

      const currentCount = state.itemCounts[id] || 0;

      return {
        ...state,
        itemCounts: {
          ...state.itemCounts,
          [id]: currentCount + 1,
        },
        cartItems: {
          ...state.cartItems,
          [id]: {
            ...productDetails,
            count: currentCount + 1,
          },
        },
        totalPrice: state.totalPrice + price,
      };
    }

    case "DECREMENT_ITEM": {
      const { id, price } = action.payload;

      if (state.cartItems[id]) {
        const currentCount = state.cartItems[id].count;

        if (currentCount > 1) {
          const updatedCartItems = {
            ...state.cartItems,
            [id]: {
              ...state.cartItems[id],
              count: currentCount - 1,
            },
          };

          return {
            ...state,
            itemCounts: {
              ...state.itemCounts,
              [id]: state.itemCounts[id] - 1,
            },
            totalPrice: state.totalPrice - price,
            cartItems: updatedCartItems,
          };
        } else {
          const { [id]: removedItem, ...updatedCartItems } = state.cartItems;

          const updatedItemCounts = { ...state.itemCounts };
          delete updatedItemCounts[id];

          return {
            ...state,
            itemCounts: updatedItemCounts,
            totalPrice: state.totalPrice - price,
            cartItems: updatedCartItems,
          };
        }
      }

      return state;
    }
    default:
      return state;
  }
}
