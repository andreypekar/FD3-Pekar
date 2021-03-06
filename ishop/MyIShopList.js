var MyIShopList = React.createClass({

    displayName: 'MyIShopList',

    render: function() {
  
      var rowsArr=this.props.listProducts.map( function( item ){
        return React.DOM.li({key:'li'+item.code},
          React.DOM.div({key:item.code,className:'Row'},
            React.DOM.div({},React.DOM.span({},item.name)),
            React.DOM.div({},React.DOM.span({},item.price)),
            React.DOM.div({},React.DOM.a({href:item.url},'ссылка')),
            React.DOM.div({},React.DOM.span({},item.count)),
          ),
        );
      });

      return React.DOM.div( {className:'MyIShopList'},
        React.DOM.h1( {}, this.props.shopName ),
        React.DOM.ul( {className:'Catalog'}, rowsArr ),
      );
    },
  
  });