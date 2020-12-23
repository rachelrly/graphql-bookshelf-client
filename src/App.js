import React, { Fragment } from 'react';
import './css/App.css';
import './css/variables.css';
import Library from './components/Library';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Library />
      <Footer />
    </Fragment>
  );
}

export default App;
