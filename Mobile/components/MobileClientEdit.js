import React from 'react';
import PropTypes from 'prop-types';
import deepEqual from 'deep-equal';

import {voteEvents} from './events';

import './MobileClientEdit.css';

class MobileClientEdit extends React.PureComponent {

  static propTypes = {
    info: PropTypes.shape({
      id: PropTypes.number,
      fio: PropTypes.shape({
        lst: PropTypes.string,
        fst: PropTypes.string,
        mid: PropTypes.string,
      }),
      balance: PropTypes.number,
      status: PropTypes.string,
    }),
    mode: PropTypes.number.isRequired, // 1 редактирование, 2 новый
  };

  state = {
    info: this.props.info,
  };
  
  NewFormRef = null;
  
  setNewFormRef = (ref) => {
    this.NewFormRef = ref;
  }

  setSave = (EO) => {
    if ( this.NewFormRef ) {
      let changed = false;
      let newClient={id: this.state.info.id};
      let newFIO = {};
      let frm = this.NewFormRef;
      for(var i=0; i<frm.elements.length; i++) {
        if (frm.elements[i].name === 'LastName') {
          newFIO.lst = frm.elements[i].value;
        }

        if (frm.elements[i].name === 'FirstName') {
          newFIO.fst = frm.elements[i].value;
        }

        if (frm.elements[i].name === 'MiddleName') {
          newFIO.mid = frm.elements[i].value;
        }

        if (frm.elements[i].name === 'Balance') {
          newClient.balance = Number(frm.elements[i].value);
        }

        if (frm.elements[i].name === 'Status') {
          newClient.status = frm.elements[i].value;
        }
      }

      newClient.fio = newFIO;

      if (!deepEqual(this.state.info,newClient)) changed = true;
      
      if ( changed )
        voteEvents.emit('ESaveClicked',newClient);
      else
        alert("Не внесено никаких изменений, выход через кнопку 'Отмена'");
    }
  }

  setCancel = (EO) => {
    voteEvents.emit('ECancelClicked');
  }

  render() {

    console.log("MobileClientEdit id="+this.state.info.id+" ФИО="+this.state.info.fio.lst+" "+this.state.info.fio.fst+" "+this.state.info.fio.mid+" render");

    return (
      <form name='Client' ref={this.setNewFormRef}>
        <div className='MobileClientEdit'>
          <h2>{this.props.mode === 1?'Edit existing Client':'Add new Client'}</h2>
          <div className='EditTable'>
            <div className='EditRow'>
              <div className='EditCell'>Фамилия</div>
              <div className='EditCell'>
                <input type='text' name='LastName' defaultValue={this.state.info.fio.lst} />
              </div>
            </div>
            <div className='EditRow'>
              <div className='EditCell'>Имя</div>
              <div className='EditCell'>
                <input type='text' name='FirstName' defaultValue={this.state.info.fio.fst} />
              </div>
            </div>
            <div className='EditRow'>
              <div className='EditCell'>Отчество</div>
              <div className='EditCell'>
                <input type='text' name='MiddleName' defaultValue={this.state.info.fio.mid} />
              </div>
            </div>
            <div className='EditRow'>
              <div className='EditCell'>Баланс</div>
              <div className='EditCell'>
                <input type='text' name='Balance' defaultValue={this.state.info.balance} />
              </div>
            </div>
            <div className='EditRow'>
              <div className='EditCell'>Статус</div>
              <div className='EditCell'>
                <input type='text' name='Status' defaultValue={this.state.info.status} />
              </div>
            </div>
          </div>
          <input type="button" value="Сохранить" onClick={this.setSave} />
          <input type="button" value="Отмена" onClick={this.setCancel} />
        </div>
      </form>
    );
  }
}

export default MobileClientEdit;