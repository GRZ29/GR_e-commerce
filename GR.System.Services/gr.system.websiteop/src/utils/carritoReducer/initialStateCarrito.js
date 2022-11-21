export const INITIAL_STATE_CARRITO = {
  carrito: localStorage.getItem("carrito")
    ? JSON.parse(localStorage.getItem("carrito"))
    : [],
  itemsTotal: 0,
};

export const ACTION_TYPES_CARRITO = {
  ADD_CARRITO: "ADD_CARRITO",
  ITEMS_TOTAL: "ITEMS_TOTAL",
};
