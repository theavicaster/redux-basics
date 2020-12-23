import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainerHooks = () => {
  // this hook reaches into the store and gets a value from the state
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  // this hook pulls in the dispatch function of the store
  const dispatch = useDispatch();
  return (
    <div>
      <h3>With Hooks</h3>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <hr />
    </div>
  );
};

export default CakeContainerHooks;
