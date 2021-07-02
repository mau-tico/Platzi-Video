const reducer = (state, action) => {
  //return state;
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };
    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.trends
            .concat(state.originals)
            .find((item) => item.id === Number(action.payload)) || [],

        /* state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [], */
      };
    default:
      return state;
  }
};

export default reducer;
