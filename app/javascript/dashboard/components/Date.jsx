import React, { PureComponent } from 'react';
import Moment from 'react-moment';

class Date extends PureComponent {
  render() {
    const dateToFormat = new Date();
    return (
      <h2 className="patient-ref">Date: <Moment format="YYYY/MM/DD" date={dateToFormat} /></h2>
    );
  }
}

export default Date;
