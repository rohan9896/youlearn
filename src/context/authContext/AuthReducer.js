import { AuthActionTypes } from "./AuthActions";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_START:
      return {
        ...state,
        isFetching: true,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    default:
      return { ...state };
  }
};
