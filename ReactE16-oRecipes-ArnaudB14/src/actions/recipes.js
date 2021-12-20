export const GET_RECIPES = 'GET_RECIPES';
export const SAVE_RECIPES = 'SAVE_RECIPES';

export const getRecipes = () => ({
  type: GET_RECIPES,
});

export const saveRecipes = (recipes) => ({
  type: SAVE_RECIPES,
  recipes,
});
