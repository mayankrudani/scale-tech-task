


import { FormLabel, TextField } from '@mui/material'
import React from 'react'

const PrimaryTextField = ({
    id = "",
    name = "",
    label = "",
    type = "text",
    value = "",
    placeholder = "",
    inputRef = {},
    error,
    helperText,
    onChange = () => { },
    ...rest

}) => {
    return (
        <>
            <FormLabel id={id}>{label}</FormLabel>
            <TextField
                id={id}
                name={name}
                type={type}
                inputRef={inputRef.ref}
                variant="filled"
                error={error}
                helperText={helperText}
                placeholder={placeholder}
                {...rest}
                {...inputRef}
            />
        </>
    )
}

export default PrimaryTextField