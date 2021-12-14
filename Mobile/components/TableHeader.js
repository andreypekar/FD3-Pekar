"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import './TableHeader.css';

class TableHeader extends React.PureComponent {

  static propTypes = {
    colnames: PropTypes.arrayOf(
      PropTypes.shape({
        colnum: PropTypes.string,
        name: PropTypes.string,
      })
    ),
  }

  static defaultProps = {
    colnames: [
      {colnum:'001', name:'Фамилия'},
      {colnum:'002', name:'Имя'},
      {colnum:'003', name:'Отчество'},
      {colnum:'004', name:'Баланс'},
      {colnum:'005', name:'Статус'},
      {colnum:'006', name:'Редактировать'},
      {colnum:'007', name:'Удалить'},
    ]
  }

  render () {

    var arrHeaderRow = [];

    for (let i=0; i<this.props.colnames.length; i++) {
      for (let key in this.props.colnames[i]) {
        if (key == 'colnum') {
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