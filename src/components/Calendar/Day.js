import React, { Component } from 'react';
import styles from './Calendar.module.css';

class Day extends Component {
  checkCurrentDay = (chosenMonth, day) => {
    const { currentDate } = this.props;
    if (
      currentDate.format('YYYY') === chosenMonth.format('YYYY') &&
      currentDate.format('MM') === chosenMonth.format('MM') &&
      currentDate.format('DD') == day
    ) {
      return true;
    }
    return false;
  };

  checkDayOfMonth = (chosenMonth, weekIndex, dayIndex) => {
    //is that day belong to chosenMonth?
    if (weekIndex === 0 && this.getDay(chosenMonth, weekIndex, dayIndex) > 7) {
      return false;
    } else if (
      weekIndex === this.getLastWeekIndex(chosenMonth) &&
      this.getDay(chosenMonth, weekIndex, dayIndex) < 20
    ) {
      return false;
    }

    return true;
  };

  getLastWeekIndex = (chosenMonth) => {
    const weekNum =
      chosenMonth.endOf('month').week() - chosenMonth.startOf('month').week();
    return weekNum;
  };

  getDay = (chosenMonth, weekIndex, dayIndex) => {
    const { getDaysOfWeek } = this.props;
    //get day from week array
    const week = getDaysOfWeek(chosenMonth, weekIndex);
    return week[dayIndex];
  };

  render() {
    const { chosenMonth, weekIndex, dayIndex } = this.props;

    return this.checkCurrentDay(
      chosenMonth,
      this.getDay(chosenMonth, weekIndex, dayIndex)
    ) ? (
      <div className={styles.currentDaySign}>
        {this.getDay(chosenMonth, weekIndex, dayIndex)}
      </div>
    ) : this.checkDayOfMonth(chosenMonth, weekIndex, dayIndex) ? (
      <div>{this.getDay(chosenMonth, weekIndex, dayIndex)}</div>
    ) : (
      <div className={styles.nonThisMonth}>
        {this.getDay(chosenMonth, weekIndex, dayIndex)}
      </div>
    );
  }
}

export default Day;
