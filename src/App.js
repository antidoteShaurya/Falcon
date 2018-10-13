import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Layout from './containers/Layout/Layout';
import ProductRegistration from './containers/ProductRegistration/ProductRegistration';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Layout>
            <ProductRegistration className="container" />
        </Layout>
      </div>
      </Router>
    );
  }
}

export default App;
