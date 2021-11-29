"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import './IShop.css';

import TableHeader from './TableHeader';
import Goods from './Goods';
import ProdTitleCard from './ProdTitleCard';
import ProdEditCard from './ProdEditCard';


class IShop extends React.Component {

  static propTypes = {
    shopName: PropTypes.string.isRequired,
    listProducts: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
        url: PropTypes.string,
        count: PropTypes.number,
      })
    ),
  }

  state = {
    arrGoods: this.props.listProducts,
    colnames: [
      {col:1, name:'Name'},
      {col:2, name:'Price'},
      {col:3, name:'URL'},
      {col:4, name:'Quantity'},
      {col:5, name:'Control'}
    ],
    selectedRowCode: null,
    clickOnRow: false,
    editMode: 0, //0 - просмотр, 1 редактирование, 2 - новый
  }

  rowNumSelected = (code) => {
    if (this.state.editMode === 0) {
      console.log( 'выбрана строка # '+code + ', у неё до выбора был флаг подсветки ' + this.state.clickOnRow);
      this.setState( {clickOnRow: (this.state.selectedRowCode!=code || !this.state.clickOnRow), selectedRowCode: code} );
    }
  }

  deleteRow = (code) => {
    if (this.state.editMode === 0) {
      console.log( 'будет удалена строка # '+code );
      this.setState( {arrGoods: this.state.arrGoods.filter(el => {return el.code!=code}),
                      selectedRowCode: null,
                      clickOnRow: false,
                      editMode: 0} );
    }
  }

  editRow = (code, mode) => {
    if (this.state.editMode === 0) {
      console.log( 'редактируется строка # '+ code + ', режим ' + mode);
      this.setState({editMode: mode, selectedRowCode: code, clickOnRow: true});
    }
  }

  rowNewClick = (EO) => {
    EO.preventDefault();
    console.log( 'создание нового продукта, режим 2' );
    this.editRow(null, 2);
  }

  addRow = (editRow) => {
    console.log( 'новая строка # '+ editRow.code );
    let tArr = this.state.arrGoods.slice();
    tArr.push(editRow);
    this.setState({editMode: 0, selectedRowCode: null, clickOnRow: false, arrGoods: tArr});
  }

  saveRow = (editRow) => {
    console.log( 'сохранена строка # '+ editRow.code );
    let tArr = this.state.arrGoods.slice();
    let indexElem = tArr.findIndex( item => ( item.code === editRow.code) );
    tArr.splice(indexElem, 1, editRow);
    this.setState({editMode: 0, selectedRowCode: null, clickOnRow: false, arrGoods: tArr});
  }

  cancelRow = () => {
    console.log( 'отмена' );
    this.setState({editMode: 0, selectedRowCode: null, clickOnRow: false});
}
  
  render() {

    var rowsArr=this.state.arrGoods.map( item =>
      <Goods key={item.code}
        code={item.code}
        name={item.name}
        price={item.price}
        url={item.url}
        count={item.count}
        cbSelected={ this.rowNumSelected }
        cbDeleted={ this.deleteRow }
        cbEdited={ this.editRow }
        isSelectRow={ (this.state.selectedRowCode==item.code && this.state.clickOnRow) }
      />
    );
    let prodCard = {}; //строка продукта 
    if (this.state.editMode === 0) // просмотр
      prodCard=this.state.arrGoods.find(item => ( this.state.selectedRowCode==item.code && this.state.clickOnRow ) );
    else if (this.state.editMode === 1) //редактирование
      prodCard=this.state.arrGoods.find(item => ( this.state.selectedRowCode==item.code) );
    else { // новый
      let nextCode = this.state.arrGoods.reduce((prev, cur) => (prev.code > cur.code? prev: cur));
      prodCard = {code: Number(nextCode.code+1), name: '', price: 0 , url:'', count: 0};
    }

    return (
      <div className='IShop'>
        <h1>{this.props.shopName}</h1>
        <div className='Table'>
          <TableHeader colnames={this.state.colnames} />
          {rowsArr}
        </div>
        {
          (this.state.editMode === 0 ) &&
            <input type='button' value='New product' onClick={this.rowNewClick}/>
        }
        {
          (this.state.clickOnRow && this.state.editMode === 0) &&
          <div>
            <ProdTitleCard prodCardRow={prodCard} />
          </div>
        }
        {
          (this.state.editMode === 1) &&
          <ProdEditCard prodCardRow={prodCard}
            mode={this.state.editMode}
            cbSave={ this.saveRow }
            cbCancel={ this.cancelRow } />
        }
        {
          (this.state.editMode === 2) &&
          <ProdEditCard prodCardRow={prodCard}
            mode={this.state.editMode}
            cbAdd={ this.addRow }
            cbCancel={ this.cancelRow } />
        }
      </div>
    );
  }
}

export default IShop;