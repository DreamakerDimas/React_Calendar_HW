import React from 'react';
import styles from './Greeting.module.css';

const Greeting = (props) => {
  const { name, isHello = true } = props;
  return (
    <div className={styles.container}>
      {isHello ? 'Hello ' : 'Bye '} {name}
    </div>
  );
};

export default Greeting;
