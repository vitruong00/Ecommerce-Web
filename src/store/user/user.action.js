import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACITON_TYPES } from "./user.type";

export const setCurrentUser = (user) => {
  return createAction(USER_ACITON_TYPES.SET_CURRENT_USER, user);
};
