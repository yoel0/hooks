import React from 'react';

const MutateCountBtn = (props) => {
  return <button className="cool-btn" onClick={props.handleClick}
  >{props.display}</button>
}


export default MutateCountBtn;