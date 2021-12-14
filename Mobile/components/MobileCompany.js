import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import TableHeader from './TableHeader';

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
        status: PropTypes.bool.isRequired,
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
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
  setBalance = (clientId,newBalance) => {
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
      }
    } );
    this.setState({clients:newClients});
  };

  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  };
  
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client} />
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          <TableHeader colnames={this.props.headers} />
          {clientsCode}
        </div>
        <div className='Footer'>
          <input type="button" value="Добавить клиента" onClick={()=>alert('Добавить клиента')} />
        </div>
      </div>
    )
    ;
  }
}

export default MobileCompany;