import React from 'react';
import Login from './src/view/login';
import store from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store} >
      <Login />
    </Provider>
  );
}

export default App;
