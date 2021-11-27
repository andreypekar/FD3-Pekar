import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';

import './TableHeader.css';

class TableHeader extends React.Component {

  static propTypes = {
    colnames: PropTypes.arrayOf(
      PropTypes.shape({
        col: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }

  static defaultProps = {
    colnames: [
      {col:1, name:'Name'},
      {col:2, name:'Price'},
      {col:3, name:'URL'},
      {col:4, name:'Quantity'},
      {col:5, name:'Control'}
    ]
  }

  render () {

    var arrHeaderRow = [];

    for (let i=0; i<this.props.colnames.length; i++) {
      for (let key in this.props.colnames[i]) {
        if (key == 'col') {
          if (this.props.colnames[i][key] == (i+1)){
            arrHeaderRow.push(DOM.div( {key:this.props.colnames[i][key],className:'HeaderCell'}, this.props.colnames[i]['name']));
          }
        }
      }
    }

    return DOM.div( {className:'TableHeader'}, arrHeaderRow );
  }
}

export default TableHeader;