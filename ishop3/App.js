"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop from './components/IShop';

var shopNameText='iShop вам так жилось';
var listProductsArr=[
  {name:'Телевизор Samsung QE55QN87AAU',price:3290.00,url:'http://samsung.com',code:1,count:21}, 
  {name:'Ноутбук Lenovo IdeaPad 3 15ALC6 82KU00B3RK',price:1653.00,url:'http://lenovo.com',code:2,count:17}, 
  {name:'Смартфон Samsung Galaxy Z Flip3 5G 8GB/256GB',price:3040.00,url:'http://samsung.com',code:3,count:7}, 
  {name:'Наушники Apple AirPods 2',price:360.00,url:'http://apple.com',code:4,count:13}, 
  {name:'Электронная книга PocketBook 616',price:299.00,url:'http://pocketbook.net',code:5,count:3},
];

ReactDOM.render(
  React.createElement(IShop,{shopName:shopNameText,listProducts:listProductsArr}),
  document.getElementById('container'),
);
