var MyIShopList = React.createClass({

    displayName: 'MyIShopList',

    render: function() {
  
      var rowsArr=this.props.listProducts.map( function( item ){
        return React.DOM.li({key:'li'+item.code},
          React.DOM.div({key:item.code,className:'Row'},
            React.DOM.div({className:'Cell'},React.DOM.span({},item.name)),
            React.DOM.div({className:'Cell'},React.DOM.span({},item.price)),
            React.DOM.div({className:'Cell'},React.DOM.span({},item.url)),
            React.DOM.div({className:'Cell'},React.DOM.span({},item.count)),
            React.DOM.div({className:'Cell'},React.DOM.div({className:'Btn'},React.DOM.span({},React.DOM.input({type:'button',value:'Delete'})))),
          ),
        );
      });

      return React.DOM.div( {className:'MyIShopList'},
        React.DOM.h1( {}, this.props.shopName ),
        React.DOM.ul( {className:'Catalog'}, rowsArr ),
      );
    },
  
  });