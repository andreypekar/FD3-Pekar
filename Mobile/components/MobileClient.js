import React from 'react';
import PropTypes from 'prop-types';

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
      status: PropTypes.bool.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.info.id+" componentWillReceiveProps");
    this.setState({info:newProps.info});
  };

  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    
    return (
      <div className='MobileClient'>
        <div className='LastNameCell'>{this.state.info.fio.lst}</div>
        <div className='FirstNameCell'>{this.state.info.fio.fst}</div>
        <div className='MiddleNameCell'>{this.state.info.fio.mid}</div>
        <div className='BalanceCell'>{this.state.info.balance}</div>
        { (this.state.info.status) &&
          <div className='StatusOkCell'>active</div>
        }
        { (this.state.info.status == false) &&
          <div className='StatusBlockCell'>blocked</div>
        }
        { (!('status' in this.state.info) || this.state.info.status==null || this.state.info.status==undefined) &&
          <div className='StatusUnknownCell'>unknown</div>
        }
        <div className='EditCell'>
          <input type="button" value="Редактировать" onClick={()=>alert('Редактировать')} />
        </div>
        <div className='DeleteCell'>
          <input type="button" value="Удалить" onClick={()=>alert('Удалить')} />
        </div>
      </div>
    );
  }
}

export default MobileClient;