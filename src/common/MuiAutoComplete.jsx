




import { Autocomplete, FormLabel, TextField } from '@mui/material';
import React from 'react'

const PrimaryDropDown = ({
    id = "",
    title = "",
    placeholder="",
    options = [],
    inputRef = {},
    error = "",
    helperText = "",
    ...rest
}) => {
    return (
        <React.Fragment>
            <FormLabel id={id}>{title}</FormLabel>
            <Autocomplete
                id={id}
                options={options}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        inputRef={inputRef.ref}
                        error={error}
                        helperText={helperText}
                        {...inputRef}
                        placeholder={placeholder}
                    />
                }
                {...rest}
            />
        </React.Fragment>

    )
}

export default PrimaryDropDown;