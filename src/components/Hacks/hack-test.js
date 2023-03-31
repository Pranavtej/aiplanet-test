import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { maxWidth } from "@mui/system";
import '../../App.css';





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

const Hackathon1 = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
      setAge(event.target.value);
    };

    const [age, setAge] = React.useState('');

    return (
        <>
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

}}>
<Grid container  xs={12}>
                <Grid item xs={6}>
                    <Item> 
                    <Paper elevation={0} >
                    <Container  fixed>
                        <TabContext value={value}>
                        <Box sx={{ 
                        borderBottom: 1, 
                        borderColor: '#ffffff', 
                        
                        }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" TabIndicatorProps={{ style: { background: "#44924C",
                        height: "4px",borderRadius:'2px', textTransform: 'none', } }}>
                            <Tab label="All Submissions" value="1" />
                            <Tab label="Favourite Submissions" value="2" />
                            
                        </TabList>
                        </Box>
                        <TabPanel value="1">All Submissions</TabPanel>
                        <TabPanel value="2">Favourite Submissions</TabPanel>
                    </TabContext>
                    </Container> 
                    

                    </Paper>
                    </Item>
                </Grid>
             <Grid item xs={6}>
                    <Item> 
                    <Paper elevation={0} >
                    <Container  fixed>
                    <FormControl sx={
                    {
                        width: '28ch',                    
                    }}>
              <OutlinedInput placeholder="Search" />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 100}} size="small">
                      <InputLabel id="demo-select-small"></InputLabel>
                      <Select  
                        value={age}
                        onChange={handleChange}
                      >
                        <MenuItem value="" selected>
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                </FormControl>
                    </Container> 
                    

                    </Paper>
                    </Item>
                </Grid>
  
  
</Grid>
</Container>
    </Box>
        </>
    );
}

export default Hackathon1;