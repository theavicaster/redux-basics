import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import CakeContainerWithoutHooks from './components/CakeContainerWithoutHooks';
import CakeContainerHooks from './components/CakeContainerHooks';
import IceCreamContainer from './components/IceCreamContainer';
import CakeContainerSetNum from './components/CakeContainerSetNum';
import ItemContainer from './components/ItemContainer';
import UsersContainer from './components/UsersContainer';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainerWithoutHooks />
        <CakeContainerHooks />
        <IceCreamContainer />
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainerSetNum />
        <UsersContainer />
      </div>
    </Provider>
  );
};

export default App;
