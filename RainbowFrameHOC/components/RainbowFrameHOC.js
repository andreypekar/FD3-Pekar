"use strict";

import React, { Children } from 'react';
import './RainbowFrame.css';

const RainbowFrame = props => {

  let myJSX=props.children;

  props.colors.forEach( elem => {
    myJSX = <div className='RainbowFrame' style={{border:"solid 5px "+elem, padding:"10px"}}>{myJSX}</div>;
  });

  return myJSX;
};

export default RainbowFrame;