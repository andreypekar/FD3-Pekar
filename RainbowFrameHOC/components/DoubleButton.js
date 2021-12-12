import React from 'react';

import './DoubleButton.css';

const DoubleButton = props => (
  <div className='DoubleButton'>
    <input key="01" type='button' value={props.caption1} onClick={(EO) => {EO.preventDefault(); props.cbPressed("1");}} />
    {props.children}
    <input key="02" type='button' value={props.caption2} onClick={(EO) => {EO.preventDefault(); props.cbPressed("2");}} />
  </div>
);

export default DoubleButton;