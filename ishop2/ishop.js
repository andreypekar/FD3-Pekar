var IShop = React.createClass({

    displayName: 'IShop',

    propTypes: {
        shopName: React.PropTypes.number.isRequired,
        listProducts:React.PropTypes.arrayOf(
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
        return { arrGoods:this.props.listProducts };
      },
    
    render: function() {
  
      var rowsArr=this.arrGoods.map( function( item ) {
        return React.DOM.div({key:item.code,className:'Row'},
            React.DOM.div({className:'Cell'},React.DOM.span({},item.name)),
            React.DOM.div({className:'Cell'},React.DOM.span({},item.price)),
            React.DOM.div({className:'Cell'},React.DOM.span({},item.url)),
            React.DOM.div({className:'Cell'},React.DOM.span({},item.count)),
            React.DOM.div({className:'Cell'},React.DOM.input({type:'button',value:'Delete'})),
        );
      });

      return React.DOM.div( {className:'MyIShopList'},
        React.DOM.h1( {}, this.props.shopName ),
        React.DOM.div( {className:'ishopTable'},
          React.DOM.div( {className:'Header'},
            React.DOM.div({className:'Cell'},'Name'),
            React.DOM.div({className:'Cell'},'Price'),
            React.DOM.div({className:'Cell'},'URL'),
            React.DOM.div({className:'Cell'},'Quantity'),
            React.DOM.div({className:'Cell'},'Control'),
          ),
          rowsArr ),
      );
    },
  
  });