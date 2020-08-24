import React from 'react';

const ListItem = (props) => {
  const {
    onSelect,
    isSelected,
    user: { id, fName, lName },
  } = props;

  const styles = {
    backgroundColor: isSelected ? 'rgba(0,0,0,0.5)' : 'initial',
  };
  return (
    <li style={styles}>
      <span>
        UserID: "{id}"; UserFullName:"{fName} {lName}";
      </span>
      <button onClick={onSelect}>Select</button>
    </li>
  );
};

export default ListItem;
