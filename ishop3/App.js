"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop from './components/IShop';

var shopNameText='iShop3 вам так жилось';
var listProductsArr=require('./listGoods.json');

ReactDOM.render(
  React.createElement(IShop,{shopName:shopNameText,listProducts:listProductsArr}),
  document.getElementById('container'),
);
