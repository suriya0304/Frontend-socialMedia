import React, { useState } from 'react'
import { AppBar, Avatar, Badge, Box,  IconButton,  Menu, MenuItem, Stack, styled, Toolbar, Typography, useMediaQuery } from '@mui/material'
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import { Mail, Notifications} from '@mui/icons-material';
import { theme } from '../theme';
import MenuIcon from '@mui/icons-material/Menu';
import ListOptions from './ListOptions';

const Navbar = ({clickHandle,mode}) => {

    const StyledToolbar = styled(Toolbar)({
        display:'flex',
        justifyContent:'space-between'
    })
    const Search = styled("div")(({theme})=>(
        {
        backgroundColor:'white',
        padding:'0 10px',
        borderRadius:theme.shape.borderRadius,
        width:'40%'
        
    }))

    const Icons = styled(Box)({
        display:'none',
        gap:'20px',
        alignItems:'center',
        [theme.breakpoints.up("md")]:{
            display:'flex'
        }
    })
    const UserBox= styled(Box)({
        display:'flex',
        [theme.breakpoints.up('md')]:{
            display:'none'
        }
    })
    const [show,setShow]=useState(false)
    const [open,setOpen]=useState(false)
  return (
    <AppBar flex='grow'  p={2} position='sticky'> 
        <StyledToolbar> 
            <Typography sx={{display:{xs:'none',md:'block'}}}>LYNX</Typography>
            <Stack direction='row' sx={{display:{xs:'flex',md:'none'},justifyContent:'center',alignItems:'center'}} >
                
                <IconButton aria-label="delete" sx={{marginRight:"20px"}} onClick={()=>setShow(!show)}>
                    <MenuIcon />
                </IconButton>
                <FaceRetouchingNaturalIcon  />
                
            </Stack>
            <Search>hello</Search>
            <Icons>
                <Badge badgeContent={1}>
                    <Mail/>
                </Badge>
                <Badge badgeContent={4}>
                    <Notifications/>
                </Badge>
                <Avatar sx={{width:30,height:30}} onClick={e=>setOpen(true)}></Avatar>
            </Icons>
            <UserBox>
                <Avatar sx={{width:30,height:30}} ></Avatar>
            </UserBox>
        </StyledToolbar>
        <div>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={e=>setOpen(false)}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>

        
        </div>
        {show?<ListOptions clickHandle={clickHandle} mode={mode}/>:null}
    </AppBar>
  )
}

export default Navbar