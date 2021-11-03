var TableHeader = React.createClass({

  displayName: 'TableHeader',

/*   getDefaultProps: function () {
    return {
      colnames: [
        {col:1, name:'Name'},
        {col:2, name:'Price'},
        {col:3, name:'URL'},
        {col:4, name:'Quantity'},
        {col:5, name:'Control'}
      ]
    };
  }, */

/*   propTypes: {
    colnames: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        col: React.PropTypes.number,
        name: React.PropTypes.string,
      })
    ),
  }, */

  render: function() {

/*     var arrHeaderRow = [];

    for (let i=0; i<this.props.colnames.length; i++) {
      for (key in this.props.colnames[i]) {
        if (key == 'col') {
          if (this.props.colnames[i][key] == (i+1)){
            arrHeaderRow.push(React.DOM.div( {className:'HeaderCell'}, this.props.colnames[i]['name']));
          }
        }
      }
    } */

    return
//      React.DOM.div( {className:'TableHeader'}, arrHeaderRow );
    React.DOM.div( {className:'TableHeader'},
      React.DOM.div({className:'HeaderCell'},'Name'),
      React.DOM.div({className:'HeaderCell'},'Price'),
      React.DOM.div({className:'HeaderCell'},'URL'),
      React.DOM.div({className:'HeaderCell'},'Quantity'),
      React.DOM.div({className:'HeaderCell'},'Control'),
    );
  },
});