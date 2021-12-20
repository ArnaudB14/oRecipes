import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from 'src/containers/LoginForm';

const Page = ({ children }) => (
  <main className="page">
  <LoginForm />
    {children}
  </main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
