"use strict";

import React, { Children } from 'react';
import './RainbowFrame.css';
import ColorFrame from './ColorFrame';

const RainbowFrame = props => {

  let arrJSX=null;

  props.colors.forEach( elem => 
    {
      arrJSX = (arrJSX == null ? <ColorFrame color={elem}>{props.children}</ColorFrame> : <ColorFrame color={elem}>{arrJSX}</ColorFrame>);
    }
  );

  return <div className='RainbowFrame'>{arrJSX}</div>;
};

export default RainbowFrame;