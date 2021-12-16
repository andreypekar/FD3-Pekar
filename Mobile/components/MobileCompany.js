import React from 'react';
import PropTypes from 'prop-types';
import deepEqual from 'deep-equal';

import MobileClient from './MobileClient';
import MobileClientEdit from './MobileClientEdit';
import TableHeader from './TableHeader';
import {voteEvents} from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.shape({
          lst: PropTypes.string.isRequired,
          fst: PropTypes.string.isRequired,
          mid: PropTypes.string,
        }),
        balance: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
      })
    ),
    headers: PropTypes.arrayOf(
      PropTypes.shape({
        colnum: PropTypes.string,
        name: PropTypes.string,
      })
    ),
  };
 
  state = {
    name: this.props.name,
    clients: this.props.clients,
    showStatus: 'All',
    selectedRowCode: null,
    mode: 0, //0 просмотр, 1 редактирование, 2 новый
    clientSelected: null, // новый|выбранный клиент
  };

  componentDidMount = () => {
    voteEvents.addListener('EEditClicked',this.setEditButton);
    voteEvents.addListener('ESaveClicked',this.setSaveButton);
    voteEvents.addListener('ECancelClicked',this.setCancelButton);
    voteEvents.addListener('EDeleteClicked',this.setDeleteButton);
  };

  componentWillUnmount = () => {
    voteEvents.removeListener('EEditClicked',this.setEditButton);
    voteEvents.removeListener('ESaveClicked',this.setSaveButton);
    voteEvents.removeListener('ECancelClicked',this.setCancelButton);
    voteEvents.removeListener('EDeleteClicked',this.setDeleteButton);
  };
  
  setName1 = (EO) => {
    this.setState({name:'МТС'});
  };

  setName2 = (EO) => {
    this.setState({name:'Velcom'});
  };
  
  setAll = (EO) => {
    this.setState({showStatus:'All'});
  };

  setActive = (EO) => {
    this.setState({showStatus:'Active'});
  };

  setBlock = (EO) => {
    this.setState({showStatus:'Block'});
  };

  setNewButton = (EO) => {
    let nextCode = this.state.clients.reduce((prev, cur) => (prev.id > cur.id? prev: cur)).id + 5; // получаем след ID для нового клиента
    this.setState({mode:2, clientSelected:{id:nextCode, fio:{lst:'', fst:'', mid:''}, balance:0, status:''}});
  };

  setEditButton = (code) => {
    this.setState({mode:1, selectedRowCode:code, clientSelected:this.state.clients.find(client => ( code==client.id) )});
  }

  setDeleteButton = (code) => {
    this.setState({mode:0, selectedRowCode:null, clients:this.state.clients.filter(client => (code!=client.id))});
  }

  setSaveButton = (newClient) => {

    let changed = false;

    let clientsArr = this.state.clients.map(elem => {
      if (elem.id == newClient.id) {
        if ( !deepEqual(elem, newClient) ) {
          changed = true;
          return newClient;
        }
      }
      else return elem;
    });

    if (changed) 
      this.setState({mode:0, selectedRowCode:null, clientSelected:null, clients:clientsArr});
    else
      this.setState({mode:0, selectedRowCode:null, clientSelected:null});
  }

  setCancelButton = () => {
    this.setState({mode:0, selectedRowCode:null, clientSelected:null});
  }

  render() {

    console.log('MobileCompany render');

    var clientsCode=this.state.clients.map( client => {
      if (this.state.showStatus == 'Active') {
        if (client.status == 'active')
          return <MobileClient key={client.id} info={client} mode={this.state.mode} />;
      }
      else if (this.state.showStatus == 'Block') {
          if (client.status == 'blocked')
            return <MobileClient key={client.id} info={client} mode={this.state.mode} />;
      }
      else
        return <MobileClient key={client.id} info={client} mode={this.state.mode} />; // Все клиенты showStatus='All'
    });

    return (
      <div className='MobileCompany'>
        <div>
          <input type='button' value='=МТС' onClick={this.setName1} />
          <input type='button' value='=Velcom' onClick={this.setName2} />
          <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        </div>
        <div className='ToolBar'>
          <input type='button' value='Все' onClick={this.setAll} />
          <input type='button' value='Активные' onClick={this.setActive} />
          <input type='button' value='Заблокированные' onClick={this.setBlock} />
        </div>
        <div className='MobileCompanyClients'>
          <TableHeader colnames={this.props.headers} />
          {clientsCode}
        </div>
        <div className='Footer'>
          {
            (this.state.mode === 0) &&
            <input type='button' value='Добавить клиента' onClick={this.setNewButton} />
          }
          {
            (this.state.mode === 1 || this.state.mode === 2) &&
            <MobileClientEdit info={this.state.clientSelected} mode={this.state.mode}/>
          }
        </div>
      </div>
    )
    ;
  }
}

export default MobileCompany;