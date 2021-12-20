import App from 'src/components/App';
import { connect } from 'react-redux';
import { getRecipes } from '../../actions/recipes';

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onRecipesLoad: () => {
    dispatch(getRecipes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
