import React, { Component } from 'react';
import styles from './Timer.module.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRun: false,
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.timerId = null;
  }

  timerRun = () => {
    this.setState((state, props) => {
      const { time } = state;
      const newDate = new Date(time.getTime());
      newDate.setSeconds(newDate.getSeconds() + 1);
      return {
        time: newDate,
      };
    });
  };
  start = () => {
    this.setState({
      isRun: true,
    });
  };
  stop = () => {
    this.setState({
      isRun: false,
    });
  };
  clear = () => {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  };

  componentDidMount() {
    this.start();
    console.log(' componentDidMount');
  }
  componentDidUpdate() {
    const { isRun } = this.state;
    if (isRun) {
      this.timerId = setTimeout(this.timerRun, 1000);
      console.log(' componentDidUpdate');
    }
  }
  componentWillUnmount() {
    this.clear();
    console.log('componentWillUnmount');
  }

  render() {
    const { time, isRun } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.timestyle}>{time.toLocaleTimeString('it-IT')}</h1>
        <button disabled={isRun} onClick={this.start}>
          start
        </button>
        <button disabled={!isRun} onClick={this.stop}>
          stop
        </button>
        <button> reset </button>
      </div>
    );
  }
}
export default Timer;
