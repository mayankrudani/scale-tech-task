
import { createTheme } from "@mui/material/styles";


export const theme = {
    primary: "#F2F2F2",
    primary: "#000000",

    secondary: "#494c7d",
    gray: ""
}



export const themeCofig = createTheme({
    // Override or create new styles, colors, palettes...
    palette: {
        primary: {
            main: theme.primary
        },
        secondary: {
            main: theme.secondary
        }
    },
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: '1rem',
                },
            },
        },

        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: "#000000",
                    marginBottom: "5px"
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    // '&:hover fieldset': {
                    //     borderColor: 'rgba(0,0,0,.38);',
                    // },
                    '& .MuiInputBase-root': {
                        "& input": {
                            padding: "10px 20px",
                        },
                        minHeight: "30px",
                        "&:before": {
                            borderBottom: "0px",
                            borderColor: '#00bfa5;',
                        }
                    },
                },
            },
        },
    },
});