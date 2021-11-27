import React from 'react';
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
            arrHeaderRow.push(
              <div key={this.props.colnames[i][key]} className='HeaderCell'>
                {this.props.colnames[i]['name']}
              </div>
            );
          }
        }
      }
    }

    return <div className='TableHeader'>{arrHeaderRow}</div>;
  }
}

export default TableHeader;