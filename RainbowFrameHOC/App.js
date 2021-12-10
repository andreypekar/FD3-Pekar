"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let myElem = <RainbowFrame colors={colors}>Hello!</RainbowFrame>;

ReactDOM.render(
  myElem
  ,document.getElementById('container')
);
