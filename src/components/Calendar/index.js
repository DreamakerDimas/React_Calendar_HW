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
      thisMonthArr: [],
    };
  }

  componentDidMount = () => {
    this.getDaysOfWeeks(this.state.chosenMonth);
  };

  monthBack = () => {
    const { chosenMonth } = this.state;
    this.setState({
      chosenMonth: chosenMonth.subtract(1, 'months'),
    });
    this.getDaysOfWeeks(this.state.chosenMonth);
  };

  monthForward = () => {
    const { chosenMonth } = this.state;
    this.setState({
      chosenMonth: chosenMonth.add(1, 'months'),
    });
    this.getDaysOfWeeks(this.state.chosenMonth);
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

  getDaysOfWeeks = (chosenMonth) => {
    const startDay = chosenMonth.clone().startOf('month').startOf('week');
    const endDay = chosenMonth.clone().endOf('month').endOf('week');
    console.log(endDay.format('ddd'));

    //first day bug fix (first day disappear when it's Monday)
    if (startDay.format('DD') === '01') {
      startDay.subtract(1, 'week');
    }
    //

    //last day bug fix (one unwanted week)
    if (chosenMonth.clone().endOf('month').format('ddd') === 'Sun') {
      endDay.subtract(1, 'week');
    }

    //arr creating
    let calendar = [];
    let index = startDay.clone();
    while (index.isBefore(endDay, 'day')) {
      calendar.push(
        new Array(7).fill(0).map(function (n, i) {
          return index.add(1, 'day').date();
        })
      );
    }

    this.setState({
      thisMonthArr: calendar,
    });
  };

  render() {
    const { currentDate, chosenMonth, thisMonthArr } = this.state;
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
            <Month
              thisMonthArr={thisMonthArr}
              chosenMonth={chosenMonth}
              currentDate={currentDate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
