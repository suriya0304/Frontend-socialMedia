import React from 'react'
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Brightness6,AccountBox, Group, Home, Pageview, Person, Settings, Storefront } from '@mui/icons-material'
const ListOptions = ({clickHandle,mode}) => {
  return (
    <List component="nav" aria-label="main mailbox folders">
            <ListItemButton component='a' href='#home'>
                <ListItemIcon>
                    <Home/>
                </ListItemIcon>
            <ListItemText primary="Homepage" />  </ListItemButton>
            <ListItemButton component='a' href='#home'>
                <ListItemIcon>
                    <Pageview/>
                </ListItemIcon>
            <ListItemText primary="Pages" />  </ListItemButton>
            <ListItemButton component='a' href='#simple'>
                <ListItemIcon>
                    <Group/>
                </ListItemIcon>
            <ListItemText primary="Groupes" />  </ListItemButton>
            <ListItemButton component='a' href='#simple'>
                <ListItemIcon>
                    <Storefront/>
                </ListItemIcon>
            <ListItemText primary="Marketplace" />  </ListItemButton>
            <ListItemButton component='a' href='#simple'>
                <ListItemIcon>
                    <Person/>
                </ListItemIcon>
            <ListItemText primary="Freinds" />  </ListItemButton>
            <ListItemButton component='a' href='#simple'>
                <ListItemIcon>
                    <Settings/>
                </ListItemIcon>
            <ListItemText primary="Settings" />  </ListItemButton>
            <ListItemButton component='a' href='#simple'>
                <ListItemIcon>
                    <AccountBox/>
                </ListItemIcon>
            <ListItemText primary="Profile" />  </ListItemButton>
            <ListItemButton component='a' href='#simple'>
                <ListItemIcon>
                    <Brightness6/>
                </ListItemIcon>
            <Switch onChange={()=>clickHandle(mode==='light'?'dark':'light')}></Switch>  </ListItemButton>
        </List>
  )
}

export default ListOptions