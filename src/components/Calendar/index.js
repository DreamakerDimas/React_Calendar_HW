import React, { Component } from 'react';
import Month from './Month';
import moment from 'moment';
import styles from './Calendar.module.css';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: moment(),
      chosenMonth: moment(),
    };
  }

  monthBack = () => {
    const { chosenMonth } = this.state;
    this.setState({
      chosenMonth: chosenMonth.subtract(1, 'months'),
    });
  };

  monthForward = () => {
    const { chosenMonth } = this.state;
    this.setState({
      chosenMonth: chosenMonth.add(1, 'months'),
    });
  };

  getDaysTitle = () => {
    const days = moment.weekdays();

    //moving sunday in the end of array
    const element = days.shift();
    days.push(element);

    //creating elements
    let daysElements = [];
    for (let day = 0; day < days.length; day++) {
      daysElements.push(<span key={day}>{days[day].substring(0, 3)}</span>);
    }

    return <>{daysElements}</>;
  };

  render() {
    const { currentDate, chosenMonth } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.currentDay}>
          <span>{currentDate.format('dddd')}</span>
          <span>{currentDate.format('DD')}</span>
        </div>
        <div className={styles.calendarContainer}>
          <div className={styles.header}>
            <div className={styles.monthButton} onClick={this.monthBack}>
              {'<'}
            </div>
            <span>
              {chosenMonth.format('MMMM')} {chosenMonth.format('YYYY')}
            </span>
            <div className={styles.monthButton} onClick={this.monthForward}>
              {'>'}
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.weekCaption}>{this.getDaysTitle()}</div>
            <Month chosenMonth={chosenMonth} currentDate={currentDate} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
