
import './App.css';
import * as React from 'react';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Add from './components/add';

function App() {
  const [mode ,setMode]=React.useState('dark')
  const darkTheme=createTheme({
    palette:{mode:mode}
    
  })
  return (
    <ThemeProvider theme={darkTheme}>
      {console.log(darkTheme)}
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar clickHandle={(n)=>setMode(n)} mode={mode}/>
        <Stack direction='row' justifyContent='space-between'>
          <Sidebar clickHandle={(n)=>setMode(n)} mode={mode}/>
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
