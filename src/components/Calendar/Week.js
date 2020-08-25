import React, { Component } from 'react';
import styles from './Calendar.module.css';
import Day from './Day';

class Week extends Component {
  weekToDiv = (chosenMonth, weekIndex) => {
    //week row
    const { currentDate, thisMonthArr } = this.props;
    let daysElements = [];
    for (let day = 0; day < 7; day++) {
      daysElements.push(
        <div className={styles.dayContainer} key={day}>
          {
            <Day
              thisMonthArr={thisMonthArr}
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

  render() {
    const { chosenMonth, weekIndex } = this.props;
    return <>{this.weekToDiv(chosenMonth, weekIndex)}</>;
  }
}

export default Week;
