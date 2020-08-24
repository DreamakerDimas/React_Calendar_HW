import React from 'react';

function SelectedUsers(props) {
  const { users } = props;
  const sellectedUsersList = users.filter((u) => u.isSelected);
  return (
    <ul>
      {sellectedUsersList.map((u) => (
        <li key={u.id}>
          {u.fName} {u.id}
        </li>
      ))}
    </ul>
  );
}
export default SelectedUsers;
