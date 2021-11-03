var IShop = React.createClass({

    displayName: 'IShop',

    propTypes: {
        shopName: React.PropTypes.string.isRequired,
        listProducts: React.PropTypes.arrayOf(
          React.PropTypes.shape({
            name: React.PropTypes.string,
            price: React.PropTypes.number,
            url: React.PropTypes.string,
            code: React.PropTypes.number,
            count: React.PropTypes.number,
          })
        ),
      },
    
      getInitialState: function() {
        return { arrGoods: this.props.listProducts };
      },
    
    render: function() {
  
      var rowsArr=this.state.arrGoods.map( function( item ) {
        return React.createElement(Goods,{name:item.name,price:item.price,url:item.url,code:item.code,count:item.count});
      });

      return React.DOM.div( {className:'IShop'},
        React.DOM.h1( {}, this.props.shopName ),
        React.DOM.div( {className:'IShopTable'},
          React.DOM.div( {className:'Header'},
            React.DOM.div({className:'GoodsCell'},'Name'),
            React.DOM.div({className:'GoodsCell'},'Price'),
            React.DOM.div({className:'GoodsCell'},'URL'),
            React.DOM.div({className:'GoodsCell'},'Quantity'),
            React.DOM.div({className:'GoodsCell'},'Control'),
          ),
          rowsArr ),
      );
    },
  });