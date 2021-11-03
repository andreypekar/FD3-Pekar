﻿var Goods = React.createClass({

  displayName: 'Goods',

  propTypes: {
    name: React.PropTypes.string,
    price: React.PropTypes.number,
    url: React.PropTypes.string,
    code: React.PropTypes.number,
    count: React.PropTypes.number,
  },
    
  render: function() {
    return React.DOM.div({key:this.props.code,className:'GoodsRow'},
      React.DOM.div({className:'GoodsCell'},React.DOM.span({},this.props.name)),
      React.DOM.div({className:'GoodsCell'},React.DOM.span({},this.props.price)),
      React.DOM.div({className:'GoodsCell'},React.DOM.span({},this.props.url)),
      React.DOM.div({className:'GoodsCell'},React.DOM.span({},this.props.count)),
      React.DOM.div({className:'GoodsCell'},React.DOM.input({type:'button',value:'Delete'})),
    );
  },
});