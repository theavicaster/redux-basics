import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer(props) {
  // react hook for local state
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h3> Using local state with Redux</h3>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
      <hr />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)), // we are using the action creator with the parameter
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
