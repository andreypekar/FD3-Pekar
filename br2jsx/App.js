"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import BR2JSX from './components/br2jsx';

let text="первый<br>второй<br/>третий<br />последний";
let myElem = <BR2JSX text={text}/>;

ReactDOM.render(
  myElem
  ,document.getElementById('container')
);
