import React, { Component } from 'react';
import ListItem from './ListItem';
// parent -> child  props
// child -> parent callback

const UserList = (props) => {
  const { users, setUsers } = props;
  const mapUser = (user, index) => {
    const selectUserH = () => {
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      setUsers(newUsers);
    };
    return (
      <ListItem
        key={user.id}
        user={user}
        onSelect={selectUserH}
        isSelected={user.isSelected}
      />
    );
  };
  return <ul>{users.map(mapUser)}</ul>;
};
export default UserList;
