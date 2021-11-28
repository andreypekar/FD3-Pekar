"use strict";

import React from 'react';
import PropTypes from 'prop-types';

class ProdTitleCard extends React.Component {

  static propTypes = {
    prodCardRow: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      url: PropTypes.string,
      code: PropTypes.number,
      count: PropTypes.number,
    })
  }

  render() {

    return (
      <div className='ProdTitleCard'>
        <h2>{this.props.prodCardRow.name}</h2>
        <div>{this.props.prodCardRow.price}</div>
        <div><a href={this.props.prodCardRow.url}>{this.props.prodCardRow.url}</a></div>
      </div>
    );
  }
}

export default ProdTitleCard;