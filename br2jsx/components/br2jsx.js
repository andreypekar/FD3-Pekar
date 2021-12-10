"use strict";

import React from 'react';

import './br2jsx.css';

const BR2JSX = props => {
//  let re = /(<.*?>)/;
  let re = /(<br\s*\/?>)/i;
  let br = <br/>;
  let indexFlag = true;

  return <div className='br2jsx'>{props.text.split(re).map((item) => { 
    indexFlag = !indexFlag;
    if (indexFlag) return br;
    else return item;
  })}</div>;
};

export default BR2JSX;