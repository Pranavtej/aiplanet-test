import React from "react";
import  { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import InputAdornment from '@mui/material/InputAdornment';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { maxWidth } from "@mui/system";
import '../../App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';





const CssTextField = styled(OutlinedInput)({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
  },
});

const theme = createTheme({
  typography: {
    fontFamily: 'poppins',
    textTransform: 'none',
  }
});

// const StyledTabs = styled((props) => (
//     <Tabs
//       {...props}
//       TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//     />
//   ))({ 
//     '& .MuiTabs-indicator': {
//       display: 'flex',
//       justifyContent: 'center',
//       backgroundColor: 'transparent',
//     },
//     '& .MuiTabs-indicatorSpan': {
//       maxWidth: 100,
//       height: '300%',
//       width: '100%',
//       backgroundColor: '#44924C',

//     },
//   });
  

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//     ({ theme }) => ({
//       textTransform: 'none',
//       font: ' normal normal 14px/19px poppins',
//       marginRight: theme.spacing(1),
//       color: '#666666',
//       '&.Mui-selected': {
//         color: 'black',
//       },
//       '&.Mui-focusVisible': {
//         backgroundColor: '#44924C',
//       },

//     }),
//   );

const Hackathon = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      setAge(event.target.value);
    };

    const [age, setAge] = React.useState('');



    return (
        <>
        <section
        ></section>
         <Box
      sx={{
        width: maxWidth,
        height: 100,
        backgroundColor: '#ffffff',
        boxShadow :"none",
        paddingTop: "2px",
        paddingLeft: "100px",
        paddingRight: "100px", 
        paddingBottom: "2px",
      }}
    >

<Container maxWidth="sx" sx={{
  paddingTop: "2px",
  paddingLeft: "12px",
  paddingRight: "12px",
  width: '100%',

}}>
<Grid container  xs={12} >
                <Grid item xs={6}>
                    <Item> 
                    <Paper elevation={0} >
                    <Container  fixed>
                    <ThemeProvider theme={theme}>
                        <TabContext value={value} >
                        <Box sx={{ 
                        borderBottom: 1, 
                        borderColor: '#ffffff', 
                        width: '100%',
                        height: '100%',
                        
                        }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" TabIndicatorProps={{ style: { background: "#44924C",
                        height: "4px",borderRadius:'2px' } }}  sx={{
                          font: ' normal normal 14px/19px poppins',
                          textTransform: 'none',
                            width: '100%',
                        }}>
                            <Tab label="All Submissions" value="1"  sx={{
                              textTransform: 'none',
                              '&.Mui-selected': {
                                color: '#44924C', // change color of selected tab when clicked
                              },

                            }}/>
                            <Tab label="Favourite Submissions" value="2" sx={{
                              textTransform: 'none',
                              '&.Mui-selected': {
                                color: '#44924C', // change color of selected tab when clicked
                              },
                            }} />
                            
                        </TabList>
                        </Box>
                        <Box sx={{
                          width: '100%',
                          height: '100%',
                          width: maxWidth,
                        }}>
                        <TabPanel value="1" sx={{
                          width: '100%',
                          height: '100%',
                          width: maxWidth,
                        }}>  
                        <Box sx={{
                          width: '100%',
                          height: '100%',
                            paddingTop: "2px",  
                            paddingLeft: "12px",
                            paddingRight: "12px",
                            paddingBottom: "2px",

                        }}>
                          <Container >
                     
                        {/* <Test/> */}
                        </Container>
                        </Box>
                        </TabPanel>
                        <TabPanel value="2"></TabPanel>
                        </Box>
                    </TabContext>
                    </ThemeProvider>
                    </Container> 
                    

                    </Paper>
                    </Item>
                </Grid>
             <Grid item xs={6} sx={{
                paddingLeft: "12px",
                paddingRight: "12px", 
                justifyItems:"space-between"
             }}  >
                    <Item > 
                    <Paper elevation={0} >
                    <Container  fixed>
                    <FormControl sx={
                    {
                        width: '46ch',
                        
                        
                    }}>
                     {/* icon before search field */}
                  
              <OutlinedInput   
         placeholder="Search" sx={{
                  height:'40px',
                
                  borderRadius:'50px',
                  paddingLeft:'20px',
                  paddingRight:'20px',
                  paddingTop:'1px',
                
                mr: 1,       

              }} 
              className="MuiOutlinedInput-notchedOutline1"
              size="small"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              />
            </FormControl>
            <FormControl sx={{ m: 0, minWidth: 150 , height:'55px',paddingLight:'20px'}} size="small">
                      <InputLabel id="demo-select-small"></InputLabel>
                      <Select  
                        value={10}
                        onChange={handleChange}
                        sx={{
                          height:'40px',
                          font: ' normal normal 14px/19px poppins',
                          borderRadius:'50px',
                          paddingLeft:'20px',
                          paddingRight:'20px',
                          paddingTop:'1px',
                         
                         mr: 1,   
                        }}
                      >
                        <MenuItem value={10}>Newest</MenuItem>
                        <MenuItem value={20}>Oldest</MenuItem>
        
                      </Select>
                </FormControl>
                    </Container> 
                    

                    </Paper>
                    </Item>
                </Grid>
  
  
</Grid>
</Container>
    </Box>

<Box sx={{
  width: '100%',
  height: '100%',
  backgroundColor: '#ffffff',
  boxShadow :"none",
  paddingTop: "2px",
  paddingLeft: "100px",
  paddingRight: "100px",
  paddingBottom: "2px",
}}>
<Container maxWidth="sx" sx={{
  paddingTop: "2px",
  paddingLeft: "12px",
  paddingRight: "12px",
  width: '100%',
}}>

</Container>
</Box>
        </>
    );
}

export default Hackathon;