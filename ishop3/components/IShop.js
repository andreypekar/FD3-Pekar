"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import './IShop.css';

import TableHeader from './TableHeader';
import Goods from './Goods';
import ProdTitleCard from './ProdTitleCard';

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
    editMode: false,
  }

  rowNumSelected = (code) => {
    console.log( 'выбрана строка # '+code + ', у неё до выбора был флаг подсветки ' + this.state.clickOnRow);
    this.setState( {clickOnRow:(this.state.selectedRowCode!=code || !this.state.clickOnRow), selectedRowCode:code} );
  }

  deleteRow = (code) => {
    console.log( 'будет удалена строка # '+code );
    this.setState( {arrGoods: this.state.arrGoods.filter(el => {return el.code!=code}),
                    selectedRowCode: false,
                    clickOnRow: false,
                    editMode: false} );
  }

  editRow = (code) => {
    console.log( 'редактируется строка # '+ code );
  }

  newOnClick = (editMode) => {
    console.log( 'создание нового продукта' );
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

    var prodCard=this.state.arrGoods.find(item => ( this.state.selectedRowCode==item.code && this.state.clickOnRow ) );

    return (
      <div className='IShop'>
        <h1>{this.props.shopName}</h1>
        <div className='Table'>
          <TableHeader colnames={this.state.colnames} />
          {rowsArr}
        </div>
        {
          (!this.state.editMode) &&
          <div>
              <input type='button' value='New product' onClick={this.newOnClick}/>
          </div>
        }
        {
          (this.state.clickOnRow && !this.state.editMode) &&
          <div>
            <ProdTitleCard prodCardRow={prodCard} />
          </div>
        }
      </div>
    );
  }
}

export default IShop;