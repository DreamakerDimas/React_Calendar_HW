import React, { Component } from 'react';
import styles from './Calendar.module.css';
import Day from './Day';

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBegan: false,
      isEnded: false,
    };
  }

  weekToDiv = (chosenMonth, weekIndex) => {
    const { currentDate } = this.props;
    let daysElements = [];
    for (let day = 0; day < 7; day++) {
      daysElements.push(
        <div className={styles.dayContainer} key={day}>
          {
            <Day
              getDaysOfWeek={this.getDaysOfWeek}
              chosenMonth={chosenMonth}
              weekIndex={weekIndex}
              dayIndex={day}
              currentDate={currentDate}
            />
          }
        </div>
      );
    }
    return <>{daysElements}</>;
  };

  getDaysOfWeek = (chosenMonth, weekIndex) => {
    const startDay = chosenMonth.clone().startOf('month').startOf('week');
    const endDay = chosenMonth.clone().endOf('month').endOf('week');

    let calendar = [];
    let index = startDay.clone();
    while (index.isBefore(endDay, 'day')) {
      calendar.push(
        new Array(7).fill(0).map(function (n, i) {
          return index.add(1, 'day').date();
        })
      );
    }

    //return array of days in week
    return calendar[weekIndex];
  };

  render() {
    const { chosenMonth, weekIndex } = this.props;
    return <>{this.weekToDiv(chosenMonth, weekIndex)}</>;
  }
}

export default Week;
