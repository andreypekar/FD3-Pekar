import React from 'react';
import PropTypes from 'prop-types';
import {voteEvents} from './events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fio: PropTypes.shape({
        lst: PropTypes.string.isRequired,
        fst: PropTypes.string.isRequired,
        mid: PropTypes.string,
      }),
      balance: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    }),
    mode: PropTypes.number.isRequired,
  };

  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.info.id+" componentWillReceiveProps");
    this.setState({info:newProps.info});
  };

  setEdit = (EO) => {
    voteEvents.emit('EEditClicked',this.state.info.id);
  };

  setDelete = (EO) => {
    voteEvents.emit('EDeleteClicked',this.state.info.id);
  };

  render() {

    console.log("MobileClient id="+this.state.info.id+" ФИО="+this.state.info.fio.lst+" "+this.state.info.fio.fst+" "+this.state.info.fio.mid+" render");

    let statusClass = '';

    switch(this.state.info.status) {
      case 'active': statusClass=' ActiveClient';
        break;
      case 'blocked': statusClass=' BlockClient';
        break;
      default: statusClass=' UnknownClient';
        break;
    }

    return (
      <div className='MobileClient'>
        <div className='LastNameCell'>{this.state.info.fio.lst}</div>
        <div className='FirstNameCell'>{this.state.info.fio.fst}</div>
        <div className='MiddleNameCell'>{this.state.info.fio.mid}</div>
        <div className='BalanceCell'>{this.state.info.balance}</div>
        <div className={'StatusCell'+statusClass}>{this.state.info.status}</div>
        <div className='EditButtonCell'>
        {
          (this.props.mode === 1 || this.props.mode === 2) &&
          <input type="button" value="Редактировать" onClick={this.setEdit} disabled />
        }
        {
          (this.props.mode === 0) &&
          <input type="button" value="Редактировать" onClick={this.setEdit} />
        }
        </div>
        <div className='DeletButtonCell'>
        {
          (this.props.mode === 1 || this.props.mode === 2) &&
          <input type="button" value="Удалить" onClick={this.setDelete} disabled/>
        }
        {
          (this.props.mode === 0) &&
          <input type="button" value="Удалить" onClick={this.setDelete} />
        }
        </div>
      </div>
    );
  }
}

export default MobileClient;