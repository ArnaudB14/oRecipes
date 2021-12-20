import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
} from "react-router-dom";

import ScrollToTop from 'src/components/ScrollToTop';
import LoginForm from 'src/components/LoginForm';
import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App({loading, onRecipesLoad}) {
  //on veut charger les datas
  useEffect(
    onRecipesLoad,
    [],
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
          <ScrollToTop />
          <Menu />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/recipe/:slug">
            <Recipe/>
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  onRecipesLoad: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
