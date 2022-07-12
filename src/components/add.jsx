import React, { useState } from 'react' 
import {Add as AddIcon, AddLocation, EmojiEmotions, InsertPhoto, PersonAdd, VideoFile} from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab,  Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'


const Add = ()=>{
    const StyledModal=styled(Modal)({
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    })

    const UserBox=styled(Box)({
        display:'flex',
        alignItems:'center',
        margin:'10px ',
        gap:'10px',
        height:'30px'
    })

    const [open,setOpen]=useState(false)
    return(
    <div>
        <Tooltip title="Add" sx={{position:'fixed',bottom:'20px',left:'20px'}} onClick={()=>setOpen(true)}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip> 
            <StyledModal
            
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box bgcolor={'background.default'} p='10px' color={'text.primary'} sx={{height:'300px',width:'450px',borderRadius:'20px'}}>
                    <Typography variant='h6' sx={{textAlign:'center', color:'gray'}}> create a post</Typography> 
                    <UserBox>
                        <Avatar sx={{height:'100%',width:'30px'}} alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg"/>
                        <Typography fontWeight={400} > John Doe</Typography>
                                              
                    </UserBox>
                    <TextField sx={{
                        width:'100%',
                    }} id="outlined-multiline-static" label="What's on your mind?" variant="standard" rows={3} multiline  />
                    <Stack direction='row' gap='10px' m='20px 0'>
                        <EmojiEmotions/>
                        <InsertPhoto/>
                        <VideoFile/>
                        <PersonAdd/>
                    </Stack>
                    <ButtonGroup fullWidth disableElevation variant="contained">
                        <Button >Post</Button>
                        <Button sx={{width:'100px'}}>
                            <AddLocation/>
                        </Button>
                    </ButtonGroup>
                </Box>
        </StyledModal>
    </div>
    )
}
  

export default Add