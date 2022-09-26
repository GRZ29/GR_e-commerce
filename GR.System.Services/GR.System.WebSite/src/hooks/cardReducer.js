export const INTIAL_STATE = {
  fetchColors: [],
  checked: false,
  loading: false,
  error: false,
  idSelected: 0,
  newItem: [],
  cantidad: 1,
};

export const ACTION_TYPES = {
  FETCH_SUCCESS: "FETCH_SUCCESS",
  ERROR_STATE: "ERROR_STATE",
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  ID_SELECTED: "ID_SELECTED",
  FETCH_NEW_ITEM: "FETCH_NEW_ITEM",
};

const checkNumber = (num) => {
  if (num < 1) {
    return 1;
  }
  return num;
};

export const cardReduce = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchColors: action.payload,
      };

    case ACTION_TYPES.ID_SELECTED:
      return {
        ...state,
        checked: true,
        error: false,
        idSelected: action.payload,
      };

    case ACTION_TYPES.FETCH_NEW_ITEM:
      return {
        ...state,
        newItem: action.payload,
      };

    case ACTION_TYPES.ERROR_STATE:
      return {
        ...state,
        checked: false,
        error: true,
      };

    case ACTION_TYPES.INCREASE:
      return {
        ...state,
        error: false,
        cantidad: state.cantidad + 1,
      };

    case ACTION_TYPES.DECREASE:
      return {
        ...state,
        error: false,
        cantidad: checkNumber(state.cantidad - 1),
      };

    default:
      return state;
  }
};
