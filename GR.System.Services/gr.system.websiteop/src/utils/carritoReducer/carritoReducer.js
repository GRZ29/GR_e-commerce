import { ACTION_TYPES_CARRITO } from "./initialStateCarrito";

export const carritoReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES_CARRITO.ADD_CARRITO:
      const item = state.carrito.find(
        (item) =>
          item.id === action.payload.id &&
          item.idColor === action.payload.idColor
      );

      if (item) {
        return {
          ...state,
          carrito: [...state.carrito].map((item) =>
            item.id === action.payload.id &&
            item.idColor === action.payload.idColor
              ? {
                  ...item,
                  cantidad: item.cantidad + action.payload.cantidad,
                }
              : { ...item }
          ),
        };
      }

      return {
        ...state,
        carrito: [...state.carrito, action.payload],
      };

    case ACTION_TYPES_CARRITO.ITEMS_TOTAL:
      return {
        ...state,
        itemsTotal: state.carrito.reduce((total, item) => {
          return (total += item.cantidad);
        }, 0),
      };

    default:
      return state;
  }
};
