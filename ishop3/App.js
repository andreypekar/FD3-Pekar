"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop from './components/IShop';

let shopNameText='iShop3 вам так жилось';
let listProductsArr=require('./listGoods.json');

ReactDOM.render(
  <IShop
    shopName={shopNameText}
    listProducts={listProductsArr}
  />
  ,document.getElementById('container')
);
