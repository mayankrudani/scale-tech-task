


import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { Fragment } from 'react'

const PrimaryRadioButtons = ({
    options = [],
    title = "",
    name = "",
    id = "",
    inputRef = {},
    error = "",
    helperText = "",
    ...rest

}) => {
    return (
        <Fragment>
            <FormControl>
                <FormLabel id={id}>{title}</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby={id}
                    name={name}
                    {...inputRef}
                    {...rest}
                >
                    {options.map((v, index) => {
                        return <FormControlLabel
                            inputRef={inputRef.ref}
                            key={index}
                            value={v.value}
                            control={<Radio />}
                            label={v.label}
                        />
                    })}
                </RadioGroup>
                <FormHelperText sx={{ color: "#d32f2f" }}>{helperText}</FormHelperText>
            </FormControl>
        </Fragment>
    )
}

export default PrimaryRadioButtons