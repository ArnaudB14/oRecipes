import axios from 'axios';

import { LOG_IN, saveUserData } from 'src/actions/user';
import { fetchFavorites } from 'src/actions/recipes';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().user;

      axios.post(
        'http://localhost:3001/login',
        {
          email,
          password,
        },
      ).then((response) => {
        store.dispatch(saveUserData(response.data));

        store.dispatch(fetchFavorites());
      }).catch((error) => {
        console.log('error');
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
