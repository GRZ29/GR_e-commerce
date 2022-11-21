export const INITIAL_STATE_CARRITO = {
  carrito: localStorage.getItem("carrito")
    ? JSON.parse(localStorage.getItem("carrito"))
    : [],
  itemsTotal: 0,
};

export const ACTION_TYPES_CARRITO = {
  ADD_CARRITO: "ADD_CARRITO",
  ITEMS_TOTAL: "ITEMS_TOTAL",
  REMOVE_ITEM_CARRITO: "REMOVE_ITEM_CARRITO",
  INCREASE_CANTIDAD: "INCREASE_CANTIDAD",
  DECREASE_CANTIDAD: "DECREASE_CANTIDAD",
};
