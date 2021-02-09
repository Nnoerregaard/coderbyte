import React from 'react';
import TextField from '@material-ui/core/TextField';

type SearchFieldProps = {
  onDebouncedChange: (newValue: string) => void
}

function SearchField({ onDebouncedChange }: SearchFieldProps) {
  // TODO: Make a debounced function here, pass it to onChange on the text field and call onDebouncedChange in it 
  return <TextField />
}

export default SearchField;
