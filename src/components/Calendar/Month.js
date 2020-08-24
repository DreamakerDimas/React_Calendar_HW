import React, { Component } from 'react';
import styles from './Calendar.module.css';
import Week from './Week';

class Month extends Component {
  monthToDiv = (chosenMonth) => {
    //get number of weeks in month
    const year = chosenMonth.format('YYYY');
    const month = chosenMonth.format('MM');
    const numOfWeeks = this.getNumWeeksForMonth(year, month);

    //main code
    let weeksElements = [];
    const { currentDate } = this.props;

    for (let week = 0; week < numOfWeeks; week++) {
      weeksElements.push(
        <div className={styles.weekOfMonth} key={week}>
          <Week
            chosenMonth={chosenMonth}
            weekIndex={week}
            currentDate={currentDate}
          />
        </div>
      );
    }
    return <>{weeksElements}</>;
  };

  getNumWeeksForMonth = (year, month) => {
    //Get the number of weeks in month (thanks stackoverflow.com)
    const date = new Date(year, month - 1, 1);
    const day = date.getDay();
    const numDaysInMonth = new Date(year, month, 0).getDate();
    return Math.ceil((numDaysInMonth + day) / 7);
  };

  render() {
    const { chosenMonth } = this.props;
    return <>{this.monthToDiv(chosenMonth)}</>;
  }
}

export default Month;
