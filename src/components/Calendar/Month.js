import React, { Component } from 'react';
import styles from './Calendar.module.css';
import Week from './Week';

class Month extends Component {
  monthToDiv = (chosenMonth, thisMonthArr) => {
    //get number of weeks in month
    const numOfWeeks = thisMonthArr.length;

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
            thisMonthArr={thisMonthArr}
          />
        </div>
      );
    }
    return <>{weeksElements}</>;
  };

  render() {
    const { chosenMonth, thisMonthArr } = this.props;
    console.log(thisMonthArr);
    return <>{this.monthToDiv(chosenMonth, thisMonthArr)}</>;
  }
}

export default Month;
