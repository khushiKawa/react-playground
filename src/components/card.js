import React from 'react';

const Card = (props) => (
  <div className="card" onClick={props.method}>
    {props.caption}
  </div>
);

export default Card;
