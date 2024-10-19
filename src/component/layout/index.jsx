


import { Box, Grid, Grid2 } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import jsonData from "../../assets/form.json"

function AppLayout() {

   return (
    <Box m={0} p={0}>
      <Grid container>
        <Grid items xs={3}>
          <Box
            sx={{
              boxShadow: "1px 1px 10px black",
              height: "100vh"
            }}>

            SideBaR
          </Box>

        </Grid>

        <Grid items xs={3}>
          <Outlet />

        </Grid>

      </Grid>

    </Box>
  )
}

export default AppLayout