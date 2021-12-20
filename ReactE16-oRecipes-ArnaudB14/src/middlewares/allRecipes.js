import axios from 'axios';
import { saveRecipes, GET_RECIPES } from 'src/actions/recipes';

const recipeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RECIPES: {
      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          console.log(response.data)
          return store.dispatch(saveRecipes(response.data));
        }
        ).catch((error) => {
          console.log('error', error);
        }
        );
      next(action);
    }
    default:
      next(action);
  }
};

export default recipeMiddleware;
