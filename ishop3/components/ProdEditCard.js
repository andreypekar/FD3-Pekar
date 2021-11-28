"use strict";

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './ProdEditCard.css';

class ProdEditCard extends React.Component {

  static propTypes = {
    prodCardRow: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      url: PropTypes.string,
      code: PropTypes.number,
      count: PropTypes.number,
    }),
    mode: PropTypes.number,
    cbSave: PropTypes.func,
    cbCancel: PropTypes.func
  }

  rowSaveClick = (EO) => {
    EO.preventDefault();
    console.log( 'сохранена строка # '+ this.props.prodCardRow.code );
    this.props.cbSave(this.props.prodCardRow.code);
  }

  rowCancelClick = (EO) => {
    EO.preventDefault();
    console.log( 'отмена' );
    this.props.cbCancel();
  }

  render() {

    if (this.props.mode === 2) {

      var arrRow = 
        <Fragment>
          <div className='ProdCardRow'>
            <div className='ProdCardCell'>ID:</div>
            <div className='ProdCardCell'>
              {this.props.prodCardRow.code}
            </div>
          </div>
          <div className='ProdCardRow'>
            <div className='ProdCardCell'>Name:</div>
            <div className='ProdCardCell'>
              <input type='text' name='TextInput' value={this.props.prodCardRow.name}/>
            </div>
          </div>
          <div className='ProdCardRow'>
            <div className='ProdCardCell'>Price:</div>
            <div className='ProdCardCell'>
              <input type='text' name='TextInput' value={this.props.prodCardRow.price} />
            </div>
          </div>
          <div className='ProdCardRow'>
            <div className='ProdCardCell'>Url:</div>
            <div className='ProdCardCell'>
              <input type='text' name='TextInput' value={this.props.prodCardRow.url} />
            </div>
          </div>
          <div className='ProdCardRow'>
            <div className='ProdCardCell'>{"Quantity:\xa0"}</div>
            <div className='ProdCardCell'>
              <input type='text' name='TextInput' value={this.props.prodCardRow.count} />
            </div>
          </div>
        </Fragment>;
    }
    
    return (
        <div className={this.props.mode === 1?'ProdNewCard':'ProdEditCard'}>
          <h2>{this.props.mode === 1?'Add new Product':'Edit existing Product'}</h2>
        {
          (this.props.mode === 2) &&
          <div className='ProdCardTable'>
            {arrRow}
          </div>
        }
          <input type='button' value='Save' onClick={this.rowSaveClick}/>
          <input type='button' value='Cancel' onClick={this.rowCancelClick}/>
          <br/>
          <br/>
        </div>
    );
  }
}

export default ProdEditCard;