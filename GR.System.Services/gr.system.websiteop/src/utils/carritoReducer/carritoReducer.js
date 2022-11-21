import { ACTION_TYPES_CARRITO } from "./initialStateCarrito";

export const checkNumber = (num) => {
  if (num < 1) {
    return 1;
  }
  return num;
};

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

    case ACTION_TYPES_CARRITO.REMOVE_ITEM_CARRITO:
      return {
        ...state,
        carrito: state.carrito.filter((_, idx) => action.payload.id !== idx),
      };

    case ACTION_TYPES_CARRITO.INCREASE_CANTIDAD:
      return {
        ...state,
        carrito: [...state.carrito].map((item, idx) =>
          idx === action.payload.id
            ? { ...item, cantidad: item.cantidad + action.payload.cantidad }
            : { ...item }
        ),
      };

    case ACTION_TYPES_CARRITO.DECREASE_CANTIDAD:
      return {
        ...state,
        carrito: [...state.carrito].map((item, idx) =>
          idx === action.payload.id
            ? {
                ...item,
                cantidad: checkNumber(item.cantidad - action.payload.cantidad),
              }
            : { ...item }
        ),
      };

    default:
      return state;
  }
};
