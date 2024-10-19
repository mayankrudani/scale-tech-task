


import { Checkbox, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'
import React, { Fragment } from 'react'

const PrimaryCheckBox = ({
    options = [],
    title = "",
    id = "",
    inputRef = {},
    helperText = "",
    ...rest
}) => {
    return (
        <Fragment>
            <FormLabel component={id}>{title}</FormLabel>
            <FormGroup>
                {
                    options.map((v, index) => {
                        return <FormControlLabel key={index}
                            control={<Checkbox value={v.value} />}
                            inputRef={inputRef.ref}
                            label={v.label}
                            {...inputRef}
                            {...rest}
                        />
                    })
                }
            </FormGroup>
            <FormHelperText sx={{ color: "#d32f2f" }}>{helperText}</FormHelperText>
        </Fragment>
    )
}

export default PrimaryCheckBox