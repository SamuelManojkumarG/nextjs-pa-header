// layouts/Layout.tsx

// react
import React, { Fragment } from 'react';

// components
import Header from '/components/header/Header'
import Footer from '/components/footer/Footer'

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}      
    </Fragment>
  );
}
