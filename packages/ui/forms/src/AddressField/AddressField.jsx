import { debounce, isEqual } from 'lodash-es';
import PropTypes from 'prop-types';
import React from 'react';
import { useField } from 'react-final-form';
import Downshift from 'downshift';

import { TextField as MuiTextField } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import Menu from './AddressFieldMenu';
import DaDataContext from './DaDataContext';

const INPUT_VALUE_DEBOUNCE_TIMEOUT = 300;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
});

const itemToString = (item) => {
  if (!item) {
    return '';
  }

  return item.unrestrictedValue;
};

const FormAddressField = ({
  inputValueDebounceTimeout, name, placeholder, ...props
}) => {
  const classes = useStyles();
  const { input } = useField(name);
  const { fetchAddressSuggestions } = React.useContext(DaDataContext);
  const [suggestions, setSuggestions] = React.useState([]);
  const handleChange = (item) => {
    input.onChange(item);
  };
  const handleInputValueChange = React.useCallback(
    debounce((inputValue) => {
      if (inputValue) {
        fetchAddressSuggestions(inputValue).then(setSuggestions);
      }
    }, inputValueDebounceTimeout),
    [],
  );

  return (
    <Downshift
      initialSelectedItem={input.value}
      itemToString={itemToString}
      onInputValueChange={handleInputValueChange}
      onChange={handleChange}
    >
      {({
        getInputProps, getItemProps, getMenuProps, highlightedIndex, isOpen,
      }) => (
        <div className={classes.root}>
          <MuiTextField
            type="text"
            fullWidth
            margin="normal"
            InputProps={getInputProps({
              placeholder,
            })}
            {...props}
          />
          <Menu
            isOpen={isOpen}
            getMenuProps={getMenuProps}
            getItemProps={getItemProps}
            highlightedIndex={highlightedIndex}
            suggestions={suggestions}
          />
        </div>
      )}
    </Downshift>
  );
};

FormAddressField.defaultProps = {
  inputValueDebounceTimeout: INPUT_VALUE_DEBOUNCE_TIMEOUT,
  placeholder: null,
};

FormAddressField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputValueDebounceTimeout: PropTypes.number,
};

export default FormAddressField;
