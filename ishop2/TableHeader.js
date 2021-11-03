var TableHeader = React.createClass({

  displayName: 'TableHeader',

  propTypes: {
    colnames: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        col: React.PropTypes.number,
        name: React.PropTypes.string,
      })
    ),
  },

  getDefaultProps: function () {
    return {
      colnames: [
        {col:1, name:'Name'},
        {col:2, name:'Price'},
        {col:3, name:'URL'},
        {col:4, name:'Quantity'},
        {col:5, name:'Control'},
      ],
    };
  },

  render: function() {

    var arrHeaderRow = new Array();

    for (let i=1; i<=this.props.colnames.length; i++) {
      for ('col' in this.props.colnames[i]) {
        if (this.props.colnames[i]['col'] == i) {
          arrHeaderRow.push(React.DOM.div({className:'HeaderCell'},this.props.colnames[i]['name']));
        }
      }
    }

    return
      React.DOM.div( {className:'TableHeader'}, arrHeaderRow );
  },
});