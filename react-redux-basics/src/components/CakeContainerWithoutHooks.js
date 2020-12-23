import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = (props) => {
  return (
    <div>
      <h3>Without Hooks</h3>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <hr />
    </div>
  );
};

// this lets us use the state in the store
// as props in the component
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

// this lets us use props in the component
// to dispatch actions in the store
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// connect hooks up redux with the react component
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
