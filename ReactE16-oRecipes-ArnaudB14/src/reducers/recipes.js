import data from 'src/data';
import { SAVE_RECIPES } from 'src/actions/recipes';

export const initialState = {
  list: data,
  recipes: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      console.log(action.recipes);
      return {
        ...state,
        list: action.recipes,
        loading: false,
      };
    default:
      return state;
};
}

export default reducer;
