'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let headersArr=[
  {colnum:'001', name:'Фамилия'},
  {colnum:'002', name:'Имя'},
  {colnum:'003', name:'Отчество'},
  {colnum:'004', name:'Баланс'},
  {colnum:'005', name:'Статус'},
  {colnum:'006', name:'Редактировать'},
  {colnum:'007', name:'Удалить'},
];
let clientsArr=[ 
  {id:101, fio:{lst:'Иванов', fst: 'Иван', mid: 'Иванович'}, balance:200, status:true}, 
  {id:105, fio:{lst:'Сидоров', fst: 'Сергей', mid: 'Сергеевич'}, balance:250, status:false}, 
  {id:110, fio:{lst:'Петров', fst: 'Пётр', mid: 'Петрович'}, balance:180, status:true},
  {id:120, fio:{lst:'Григорьев', fst: 'Геннадий', mid: 'Геннадьевич'}, balance:220, status:true},
];

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    headers={headersArr}
    clients={clientsArr}
  />
  , document.getElementById('container') 
);