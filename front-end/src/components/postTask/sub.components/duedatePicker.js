import 'date-fns';
import './styles/dueDatePicker.css';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

export default function DueDatePicker() {
  const [selectedDate, handleDateChange] = React.useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        className=''
        value={selectedDate}
        onChange={handleDateChange}
        animateYearScrolling
      />
    </MuiPickersUtilsProvider>
  );
}

{
  /* <form>
  <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ...">
  <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
    Sign up
  </button>
</form> */
}
