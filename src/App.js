import React, { Component } from 'react';
//import Greeting from './components/Greeting';
import UserList from './components/UserList';
import SelectedUsers from './components/SelectedUsers';
import Timer from './components/Timer';
import Greeting from './components/Greeting';
import FormLogin from './components/FormLogin';
import Calendar from './components/Calendar';

const dbData = [
  {
    id: 1,
    fName: 'firstname1',
    lName: 'lastname1',
  },
  {
    id: 2,
    fName: 'firstname2',
    lName: 'lastname2',
  },
  {
    id: 3,
    fName: 'firstname3',
    lName: 'lastname3',
  },
  {
    id: 4,
    fName: 'firstname4',
    lName: 'lastname4',
  },
  {
    id: 5,
    fName: 'firstname5',
    lName: 'lastname5',
  },
];

/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: dbData.map((u) => ({ ...u, isSelected: false })),
    };
  }
  setUsers = (newUsers) => {
    this.setState({
      users: newUsers,
    });
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <UserList users={users} setUsers={this.setUsers} />
        <SelectedUsers users={users} />
      </>
    );
  }
}
export default App;
*/
const App = () => {
  return (
    <>
      <Calendar />
    </>
  );
};
export default App;
