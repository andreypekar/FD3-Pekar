"use strict";

import React from 'react';

import './br2jsx.css';

const BR2JSX = props => {
//  let re = /(<.*?>)/;
  let re = /(<br\s*\/?>)/i;
  let br = <br/>;

  return <div className='br2jsx'>{props.text.split(re).map((item) => (item[0] != '<' ? item : br))}</div>;
};

export default BR2JSX;