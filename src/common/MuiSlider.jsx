

import { FormHelperText, Slider, Typography } from '@mui/material'
import React from 'react'

const PrimarySlider = ({
    title = "",
    name = "",
    defaultValue,
    min = 0,
    max,
    step = 10,
    error,
    helperText,
    valuetext = () => { },
    ...rest

}) => {
    return (
        <>
            <Typography gutterBottom>{title}</Typography>

            <Slider
                aria-label={title}
                defaultValue={defaultValue}
                color="primary"
                valueLabelDisplay="auto"
                name={name}
                step={step}
                marks
                min={min}
                max={max}
                {...rest}
            />
            <FormHelperText sx={{ color: "#d32f2f" }}>{helperText}</FormHelperText>

        </>
    )
}

export default PrimarySlider