import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import './IShop.css';

import TableHeader from './TableHeader';
import Goods from './Goods';

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
  }

  rowNumSelected = (code) => {
    console.log( 'выбрана строка # '+code + ', сейчас флаг подсветки был ' + this.state.clickOnRow);
    this.setState( {clickOnRow:(this.state.selectedRowCode!=code || !this.state.clickOnRow), selectedRowCode:code} );
  }

  deleteRow = (code) => {
    console.log( 'будет удалена строка # '+code );
    
    this.setState( {arrGoods: this.state.arrGoods.filter(el => {return el.code!=code})} );
  }
  
  render() {

    var self=this;

    var rowsArr=self.state.arrGoods.map( function( item ) {
      return React.createElement( Goods, {key:item.code,
        name:item.name,
        price:item.price,
        url:item.url,
        code:item.code,
        count:item.count,
        cbSelected: self.rowNumSelected,
        cbDeleted: self.deleteRow,
        isSelectRow: (self.state.selectedRowCode==item.code && self.state.clickOnRow),
      });
    });

    return DOM.div( {className:'IShop'},
      DOM.h1( {}, self.props.shopName ),
      DOM.div( {className:'Table'},
        React.createElement( TableHeader, {colnames:self.state.colnames}),
        rowsArr ),
    );
  }
}

export default IShop;