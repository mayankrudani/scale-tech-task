


import { FormLabel, TextField } from '@mui/material'
import React from 'react'

const PrimaryTextArea = ({
    id = "",
    name = "",
    label = "",
    type = "text",
    value = "",
    inputRef = {},
    placeholder = "",
    required = false,
    error,
    helperText,
    onChange = () => { },
    ...rest

}) => {
    return (
        <>
            <FormLabel id={id}>{label}</FormLabel>
            <TextField
                sx={{
                    "& .MuiInputBase-root ": {
                        padding: "10px 20px",
                    }
                }}
                multiline
                rows={4}
                id={id}
                name={name}
                type={type}
                inputRef={inputRef.ref}
                error={error}
                helperText={helperText}
                variant="filled"
                placeholder={placeholder}
                {...rest}
                {...inputRef}

            />
        </>
    )
}

export default PrimaryTextArea