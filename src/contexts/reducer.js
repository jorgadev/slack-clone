export const initialState = {
  user: null,
};

// Put all the actions needed
export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  // When we set the user it will return current state with updated user
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
