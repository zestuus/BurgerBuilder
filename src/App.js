import React from 'react';

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./components/BurgerBuilder/BurgerBuilder";

const App = () => (
  <React.Fragment>
    <Layout>
      <BurgerBuilder/>
    </Layout>
  </React.Fragment>
);

export default App;
