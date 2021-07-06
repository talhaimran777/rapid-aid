import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DueDate(props) {
  const { label, name, state, setState } = props;
  const { dueDate } = state;

  const handleDateChange = (date) => {
    setState({ ...state, [name]: date });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <label className='text-gray-600 font-bold' htmlFor={name}>
        {label}
      </label>
      <br />
      <KeyboardDatePicker
        className='w-full'
        margin='normal'
        id='date-picker-dialog'
        format='dd/MM/yyyy'
        value={dueDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
