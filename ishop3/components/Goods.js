import React from 'react';
import DOM from 'react-dom-factories';
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
    console.log( 'выбрана строка # '+this.props.code + ', сейчас флаг ' + this.props.isSelectRow + ', сейчас подсветка ' + (this.props.isSelectRow?"LightGreen":"transparent") );
    this.props.cbSelected(this.props.code);
  }

  rowDeleteClick = (EO) => {
    EO.preventDefault();
    console.log( 'выбрана для удаления строка # '+this.props.code );
    this.props.cbDeleted(this.props.code);
  }
  
  render() {
    return DOM.div({className:'GoodsRow',onClick:this.rowClicked, style:(this.props.isSelectRow?{backgroundColor:'LightGreen'}:{}),},
      DOM.div({className:'GoodsCell'},DOM.span({},this.props.name)),
      DOM.div({className:'GoodsCell'},DOM.span({},this.props.price)),
      DOM.div({className:'GoodsCell'},DOM.span({},this.props.url)),
      DOM.div({className:'GoodsCell'},DOM.span({},this.props.count)),
      DOM.div({className:'GoodsCell'},DOM.input({type:'button',value:'Delete',onClick:this.rowDeleteClick})),
    );
  }
}

export default Goods;