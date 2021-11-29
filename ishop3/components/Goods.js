"use strict";

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './Goods.css';

class Goods extends React.Component {

  static propTypes = {
    code: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
    count: PropTypes.number,
    cbSelected: PropTypes.func, //rowNumSelected()
    cbDeleted: PropTypes.func, //deleteRow()
    cbEdited: PropTypes.func, //editRow()
    isSelectRow: PropTypes.bool,
    mode: PropTypes.number,
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
    this.props.cbEdited(this.props.code, 1); // 1 - режим редактирования
  }
  
  render() {
    var goodRows=
      <Fragment>
        <div className='GoodsCell'>{this.props.name}</div>
        <div className='GoodsCell'>{this.props.price}</div>
        <div className='GoodsCell'>{this.props.url}</div>
        <div className='GoodsCell'>{this.props.count}</div>
        <div className='GoodsCell'>
        {
          (this.props.mode === 0) &&
          <Fragment>
            <input type='button' value='Edit' onClick={this.rowEditClick} />
            <input type='button' value='Delete' onClick={this.rowDeleteClick} />
          </Fragment>
        }
        {
          (this.props.mode === 1 || this.props.mode === 2) &&
          <Fragment>
            <input type='button' value='Edit' onClick={this.rowEditClick} disabled />
            <input type='button' value='Delete' onClick={this.rowDeleteClick} disabled />
          </Fragment>
        }
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