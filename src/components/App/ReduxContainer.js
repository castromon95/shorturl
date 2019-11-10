import React from 'react';
import {Provider} from "react-redux";
import configureStore from './configureStore';
import RouterContainer from './RouterContainer';

const store = configureStore();

export default () => {
  
  return (
    <Provider store={store}>
      <RouterContainer />
    </Provider>
  );
  
}