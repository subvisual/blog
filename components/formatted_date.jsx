import React from 'react';
import moment from 'moment';

const FormattedDate = ({ date }) => (
  <span>
    {moment(date, 'DD/MM/YYYY').format('MMM Do, YYYY')}
  </span>
);

FormattedDate.propTypes = {
  date: React.PropTypes.string.isRequired,
};

export default FormattedDate;
