import React from 'react'
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Brightness6,AccountBox, Group, Home, Pageview, Person, Settings, Storefront } from '@mui/icons-material'
import ListOptions from './ListOptions'

const Sidebar = ({clickHandle,mode}) => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:'none',md:'block'}}}>
        <Box sx={{position:'fixed'}}>
            <ListOptions clickHandle={clickHandle} mode={mode}/>
        </Box>
    </Box>
  )
}

export default Sidebar