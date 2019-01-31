import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import CarBuilder from './containers/CarBuilder/CarBuilder'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CarBuilder></CarBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
