import React from 'react'
import { Box } from '@mui/material'
import Header from "../../components/Header"
const Index = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContrent="space-between" alignItems="center">
       <Header title="DASHBOARD" subtitle="Keep up to date with your insights dashboard" />
      </Box>
    </Box>
  )
}

export default Index
