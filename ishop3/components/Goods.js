import React from 'react';
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
    isSelectRow: PropTypes.bool,
  }

  rowClicked = (EO) => {
    if (EO.defaultPrevented) return;
    console.log( 'выбрана строка # '+this.props.code + ', перед выбором флаг ' + this.props.isSelectRow + ', подсветка ' + (this.props.isSelectRow?"LightGreen":"transparent") );
    this.props.cbSelected(this.props.code);
  }

  rowDeleteClick = (EO) => {
    EO.preventDefault();
    console.log( 'выбрана для удаления строка # '+this.props.code );
    this.props.cbDeleted(this.props.code);
  }
  
  render() {
    var rowResult=null;

    if (this.props.isSelectRow) {
      rowResult = <div className='GoodsRow' onClick={this.rowClicked} style={{backgroundColor:'LightGreen'}}>
      <div className='GoodsCell'>{this.props.name}</div>
      <div className='GoodsCell'>{this.props.price}</div>
      <div className='GoodsCell'>{this.props.url}</div>
      <div className='GoodsCell'>{this.props.count}</div>
      <div className='GoodsCell'>
        <input type='button' value='Delete' onClick={this.rowDeleteClick}/>
      </div>
    </div>;
    }
    else
    {
      rowResult = <div className='GoodsRow' onClick={this.rowClicked}>
      <div className='GoodsCell'>{this.props.name}</div>
      <div className='GoodsCell'>{this.props.price}</div>
      <div className='GoodsCell'>{this.props.url}</div>
      <div className='GoodsCell'>{this.props.count}</div>
      <div className='GoodsCell'>
        <input type='button' value='Delete' onClick={this.rowDeleteClick}/>
      </div>
    </div>;
    }

    return rowResult;
  }
}

export default Goods;