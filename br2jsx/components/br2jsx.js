"use strict";

import React from 'react';

import './br2jsx.css';

const BR2JSX = props => {
//  let re = /(<.*?>)/; // любой тег <>
  let re = /(<br\s*\/?>)/i; // только <br< ,/>> с любыми вариацими
  let indexFlag = true; // флаг чётности индексов

  return <div className='br2jsx'>{props.text.split(re).map((item, i) => { 
/*
    if ((i+1)%2 === 0) return <br key={i}/>; // можно через остаток от деления
    else return item;
*/
    indexFlag = !indexFlag; // можно просто флаг чётности менять
    if (indexFlag) return <br key={i}/>;
    else return item;
  })}</div>;
};

export default BR2JSX;