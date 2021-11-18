import React from 'react';

import './Goods.css';

var Goods = React.createClass({

  displayName: 'Goods',

  propTypes: {
    name: React.PropTypes.string,
    price: React.PropTypes.number,
    url: React.PropTypes.string,
    code: React.PropTypes.number,
    count: React.PropTypes.number,
    cbSelected: React.PropTypes.func,
    cbDeleted: React.PropTypes.func,
    isSelectRow: React.PropTypes.bool,
  },

  rowClicked: function(EO) {
    if (EO.defaultPrevented) return;
    console.log( 'выбрана строка # '+this.props.code + ', сейчас флаг ' + this.props.isSelectRow + ', сейчас подсветка ' + (this.props.isSelectRow?"LightGreen":"transparent") );
    this.props.cbSelected(this.props.code);
  },

  rowDeleteClick: function(EO) {
    EO.preventDefault();
    console.log( 'выбрана для удаления строка # '+this.props.code );
    this.props.cbDeleted(this.props.code);
  },
  
  render: function() {
    return React.DOM.div({className:'GoodsRow',onClick:this.rowClicked, style:(this.props.isSelectRow?{backgroundColor:'LightGreen'}:{}),},
      React.DOM.div({className:'GoodsCell'},React.DOM.span({},this.props.name)),
      React.DOM.div({className:'GoodsCell'},React.DOM.span({},this.props.price)),
      React.DOM.div({className:'GoodsCell'},React.DOM.span({},this.props.url)),
      React.DOM.div({className:'GoodsCell'},React.DOM.span({},this.props.count)),
      React.DOM.div({className:'GoodsCell'},React.DOM.input({type:'button',value:'Delete',onClick:this.rowDeleteClick})),
    );
  },
});

export default Goods;