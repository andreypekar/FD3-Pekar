"use strict";

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './Goods.css';

class Goods extends React.Component {

  static propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
    code: PropTypes.number,
    count: PropTypes.number,
    cbSelected: PropTypes.func,
    cbDeleted: PropTypes.func,
    cbEdited: PropTypes.func,
    isSelectRow: PropTypes.bool,
  }

  rowClicked = (EO) => {
    if (EO.defaultPrevented) return;
    console.log( 'выбрана строка # '+this.props.code + ', перед выбором флаг ' + this.props.isSelectRow + ', подсветка ' + (this.props.isSelectRow?"LightGreen":"<пусто>") );
    this.props.cbSelected(this.props.code);
  }

  rowDeleteClick = (EO) => {
    EO.preventDefault();
    console.log( 'выбрана для удаления строка # '+this.props.code );
    this.props.cbDeleted(this.props.code);
  }

  rowEditClick = (EO) => {
    EO.preventDefault();
    console.log( 'выбрана для редактирования строка # '+this.props.code );
    this.props.cbEdited(this.props.code);
  }
  
  render() {
    var goodRows=
      <Fragment>
        <div className='GoodsCell'>{this.props.name}</div>
        <div className='GoodsCell'>{this.props.price}</div>
        <div className='GoodsCell'>{this.props.url}</div>
        <div className='GoodsCell'>{this.props.count}</div>
        <div className='GoodsCell'>
          <input type='button' value='Edit' onClick={this.rowEditClick}/>
          <input type='button' value='Delete' onClick={this.rowDeleteClick}/>
        </div>
      </Fragment>;

    var rowResult=null;

    if (this.props.isSelectRow) {
      rowResult =
        <div className='GoodsRow' onClick={this.rowClicked} style={{backgroundColor:'LightGreen'}}>
          {goodRows}
        </div>;
    }
    else
    {
      rowResult =
        <div className='GoodsRow' onClick={this.rowClicked}>
          {goodRows}
        </div>;
    }

    return rowResult;
  }
}

export default Goods;