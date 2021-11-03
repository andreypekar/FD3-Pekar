var MyIShopList = React.createClass({

    displayName: 'MyIShopList',

    render: function() {
  
      var rowsArr=this.props.listProducts.map( function( item ) {
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