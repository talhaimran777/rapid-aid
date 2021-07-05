import React from 'react';

// MATERIAL UI STUFF
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
  root: {},
});

const MySlider = withStyles({
  root: {
    color: '#7C3AED',
    height: 2,
    padding: '15px 0',
  },
})(Slider);

const MyInput = withStyles({
  root: {
    color: '#4B5563',
  },
})(Input);

export default function BudgetSlider(props) {
  const { label, name, state, setState } = props;

  const { budget } = state;

  const classes = useStyles();

  const handleSliderChange = (e, newValue) => {
    setState({ ...state, [name]: newValue });
  };

  const handleInputChange = (e) => {
    setState({
      ...state,
      [name]: e.target.value === '' ? '' : Number(e.target.value),
    });
  };

  const handleBlur = () => {
    if (budget < 0) {
      setState({ ...state, [name]: 0 });
    } else if (budget > 10000) {
      setState({ ...state, [name]: 10000 });
    }
  };

  return (
    <div className={classes}>
      <label className='text-gray-600 font-bold' htmlFor={name}>
        {label}
      </label>
      <br />

      <div className='flex justify-betweem items-Center mb-6'>
        <MySlider
          className='flex 1 mr-10 '
          value={typeof budget === 'number' ? budget : 0}
          onChange={handleSliderChange}
          aria-labelledby='input-slider'
          min={0}
          max={10000}
          step={500}
        />

        <div>
          <span className='font-black text-purple-600'>RS</span>
          <MyInput
            value={budget}
            step={500}
            margin='dense'
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 500,
              max: 10000,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </div>
      </div>

      <br />
    </div>
  );
}
