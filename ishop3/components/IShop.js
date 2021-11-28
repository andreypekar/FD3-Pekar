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
        name: PropTypes.string,
        price: PropTypes.number,
        url: PropTypes.string,
        code: PropTypes.number,
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
    editMode: 0,
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
    console.log( 'создание нового продукта, режим 1' );
    this.editRow(null, 1);
  }

  addRow = (code) => {
    console.log( 'новая строка # '+ code );
  }

  saveRow = (code) => {
    console.log( 'сохранена строка # '+ code );
  }

  cancelRow = () => {
    console.log( 'отмена' );
    this.setState({editMode: 0, selectedRowCode: null, clickOnRow: false});
}
  
  render() {

    var rowsArr=this.state.arrGoods.map( item =>
      <Goods key={item.code}
        name={item.name}
        price={item.price}
        url={item.url}
        code={item.code}
        count={item.count}
        cbSelected={ this.rowNumSelected }
        cbDeleted={ this.deleteRow }
        cbEdited={ this.editRow }
        isSelectRow={ (this.state.selectedRowCode==item.code && this.state.clickOnRow) }
      />
    );

    if (this.state.editMode === 0)
      var prodCard=this.state.arrGoods.find(item => ( this.state.selectedRowCode==item.code && this.state.clickOnRow ) );
    else
      var prodCard=this.state.arrGoods.find(item => ( this.state.selectedRowCode==item.code) );

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
          (this.state.editMode === 1 || this.state.editMode === 2) &&
          <ProdEditCard prodCardRow={prodCard}
            mode={this.state.editMode}
            colnames={this.state.colnames}
            cbAdd={ this.addRow }
            cbSave={ this.saveRow }
            cbCancel={ this.cancelRow } />
        }
      </div>
    );
  }
}

export default IShop;