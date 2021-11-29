"use strict";

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './ProdEditCard.css';

class ProdEditCard extends React.Component {

  static propTypes = {
    prodCardRow: PropTypes.shape({
      code: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      url: PropTypes.string,
      count: PropTypes.number,
    }),
    mode: PropTypes.number,
    cbAdd: PropTypes.func, //addRow()
    cbSave: PropTypes.func, //saveRow()
    cbCancel: PropTypes.func //cancelRow()
  }

  state = {
    editRow: {
      code: this.props.prodCardRow.code,
      name: this.props.prodCardRow.name,
      price: this.props.prodCardRow.price,
      url: this.props.prodCardRow.url,
      count: this.props.prodCardRow.count,
    }
  }

  rowSaveClick = (EO) => {
    EO.preventDefault();
    let resValid = this.validation(this.state.editRow);
    let flgErr = false;
    let errMSG = '';

    for (let key in resValid) {
      if (resValid[key].flg) {flgErr=true; errMSG = errMSG + resValid[key].errmsg + '\n';}
    }

    if (flgErr) {
      alert('Запись не может быть сохранена, есть ошибки: \n' + errMSG);
    }
    else
    {
      console.log( 'сохранена строка # '+ this.state.editRow.code );
      if (this.props.mode === 1)
        this.props.cbSave(this.state.editRow);
      else
        this.props.cbAdd(this.state.editRow);
    }
  }

  rowCancelClick = (EO) => {
    EO.preventDefault();
    console.log( 'отмена' );
    this.props.cbCancel();
  }

  rowChangeName = (EO) => {
    EO.preventDefault();
    console.log( 'редактируем значение name = ' + EO.target.value );
    let tArr={};
    for(let key in this.state.editRow) {
      tArr[key] = this.state.editRow[key];
    }
    tArr.name = EO.target.value;
    this.setState({editRow: tArr});
  }

  rowChangePrice = (EO) => {
    EO.preventDefault();
    console.log( 'редактируем значение price = ' + EO.target.value );
    let tArr={};
    for(let key in this.state.editRow) {
      tArr[key] = this.state.editRow[key];
    }
    tArr.price = Number(EO.target.value);
    this.setState({editRow: tArr});
  }

  rowChangeUrl = (EO) => {
    EO.preventDefault();
    console.log( 'редактируем значение url = ' + EO.target.value );
    let tArr={};
    for(let key in this.state.editRow) {
      tArr[key] = this.state.editRow[key];
    }
    tArr.url = EO.target.value;
    this.setState({editRow: tArr});
  }

  rowChangeCount = (EO) => {
    EO.preventDefault();
    console.log( 'редактируем значение count = ' + EO.target.value );
    let tArr={};
    for(let key in this.state.editRow) {
      tArr[key] = this.state.editRow[key];
    }
    tArr.count =  Number(EO.target.value);
    this.setState({editRow: tArr});
  }

  validation = (rowValid) => {
    var res = {};
    if (rowValid.name == null || rowValid.name == "") {
      res.name = {flg: true, errmsg: 'Please, fill the field. Value must be a string!'};
    }
    else
      res.name = {flg: false};

    if (rowValid.price == undefined || rowValid.price == "" || rowValid.price <= 0) {
      res.price = {flg: true, errmsg: 'Please, fill the field. Value must be a rational number greater than 0!'};
    }
    else
      res.price = {flg: false};

    if (rowValid.url == null || rowValid.url == "") {
      res.url = {flg: true, errmsg: 'Please, fill the field. Value must be a valid URL!'};
    }
    else
      res.url = {flg: false};

    if (rowValid.count == undefined || rowValid.count == "" || rowValid.count <= 0) {
      res.count = {flg: true, errmsg: 'Please, fill the field. Value must be a positive integer!'};
    }
    else
      res.count = {flg: false};

    return res;
  }

  render() {

    var resValid = this.validation(this.state.editRow);

      var arrRow = 
        <Fragment>
          <div className='ProdCardRow'>
            <div className='ProdCardCell'>ID:</div>
            <div className='ProdCardCell'>
              {this.state.editRow.code}
            </div>
          </div>
          <div className='ProdCardRow'>
            <div className='ProdCardCell'>Name:</div>
            <div className='ProdCardCell'>
              <input type='text' name='TextInput' value={this.state.editRow.name} onChange={this.rowChangeName} />
            </div>
            {
              (resValid.name.flg) &&
              <div className='ProdCardCell'>
                <span>{"\xa0"+resValid.name.errmsg}</span>
              </div>
            }
          </div>
          <div className='ProdCardRow'>
            <div className='ProdCardCell'>Price:</div>
            <div className='ProdCardCell'>
              <input type='text' name='TextInput' value={this.state.editRow.price} onChange={this.rowChangePrice} />
            </div>
            {
              (resValid.price.flg) &&
              <div className='ProdCardCell'>
                <span>{"\xa0"+resValid.price.errmsg}</span>
              </div>
            }
            </div>
          <div className='ProdCardRow'>
            <div className='ProdCardCell'>Url:</div>
            <div className='ProdCardCell'>
              <input type='text' name='TextInput' value={this.state.editRow.url} onChange={this.rowChangeUrl} />
            </div>
            {
              (resValid.url.flg) &&
              <div className='ProdCardCell'>
                <span>{"\xa0"+resValid.url.errmsg}</span>
              </div>
            }
            </div>
          <div className='ProdCardRow'>
            <div className='ProdCardCell'>{"Quantity:\xa0"}</div>
            <div className='ProdCardCell'>
              <input type='text' name='TextInput' value={this.state.editRow.count} onChange={this.rowChangeCount} />
            </div>
            {
              (resValid.count.flg) &&
              <div className='ProdCardCell'>
                <span>{"\xa0"+resValid.count.errmsg}</span>
              </div>
            }
            </div>
        </Fragment>;
    
    return (
        <div className={this.props.mode === 1?'ProdEditCard':'ProdNewCard'}>
          <h2>{this.props.mode === 1?'Edit existing Product':'Add new Product'}</h2>
          <div className='ProdCardTable'>
            {arrRow}
          </div>
        {
          (this.props.mode === 1) &&
          <input type='button' value='Save' onClick={this.rowSaveClick}/>
        }
        {
          (this.props.mode === 2) &&
          <input type='button' value='Add' onClick={this.rowSaveClick}/>
        }
          <input type='button' value='Cancel' onClick={this.rowCancelClick}/>
          <br/>
          <br/>
        </div>
    );
  }
}

export default ProdEditCard;