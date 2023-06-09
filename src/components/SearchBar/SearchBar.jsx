import * as React from 'react';
import FormControl from '@mui/base/FormControl';
import Input, { inputClasses } from '@mui/base/Input';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import { InputLabel } from '@mui/material';

let inputtedWidth = ""; // so we can access this variable in the style 
export default function SearchBar({width, placeholder, value, onChange}) {
    inputtedWidth = width;
  return (
    <FormControl value={value} required>
      {({ filled, focused }) => (
        <React.Fragment>
          {/* <InputLabel>Text</InputLabel> */}
          <StyledInput placeholder = {placeholder} onChange={onChange} className={filled ? 'filled' : ''} />
        </React.Fragment>
      )}
    </FormControl>
  );
}

const StyledInput = styled(Input)(
  ({ theme }) => `
  
  display: inline-block;

  .${inputClasses.input} {
    width: ${inputtedWidth};
    font-size: 14px;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 6px 8px;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }

    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  }

  &.filled .${inputClasses.input} {
    box-shadow: 0 0 2px 2px rgba(125, 200, 0, 0.25);
  }
`,
);


const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};