import { CHANGE_USER_FIELD } from 'src/actions/user';
import { LOG_OUT, SAVE_USER_DATA } from '../actions/user';

const initialState = {
  email: '',
  password: '',
  logged: false,
  username: null,
  token: null,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        logged: action.data.logged,
        username: action.data.pseudo,
        token: action.data.token,
      };
    case LOG_OUT:
      return {
        ...state,
        logged: false,
        username: null,
        token: null,
        email: '',
        password: '',
      };
    default:
      return { ...state };
  }
};

export default userReducer;
