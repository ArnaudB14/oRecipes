import { createStore, applyMiddleware, compose } from 'redux';
import recipeMiddleware from 'src/middlewares/allRecipes';
import authMiddleware from 'src/middlewares/auth';
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(recipeMiddleware, authMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
