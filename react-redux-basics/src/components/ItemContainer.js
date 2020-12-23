import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

const ItemContainer = (props) => {
  return (
    <>
      <h3>Passing ownProps to mapStateToProps</h3>
      <h2>Item is - {props.cake ? 'Cake' : 'Icecream'}</h2>
      <h2>Number of Items - {props.itemNum}</h2>
      <div>
        <button onClick={props.buyItem}>Buy Items</button>
      </div>
      <hr />
    </>
  );
};

// ownProps are the props that are passed by the parent component
// NOT through redux store's state
const mapStateToProps = (state, ownProps) => {
  const itemNum = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    itemNum: itemNum,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
