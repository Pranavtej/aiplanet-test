import React from "react";
import Header from "../Header/header";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Container, FormControl } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';   
import StarIcon from '@mui/icons-material/Star';

const ViewHack = () => {
    
const [selected, setSelected] = React.useState(false);
    return (
       <>
            <Header/>
            <Box
                sx={{
                    width: '100%',
                    height: 350 ,
                    backgroundColor: '#003145',
                   
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',   
                    backgroundRepeat: 'no-repeat',

                }}
                >
                    <Container>
                        <Grid container >
                            <Grid item sm={8} sx={{
            
                            }}>  
                                <Item>
                                <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft:'24px', paddingTop:'75px' , radius:'50px',paddingBottom:'20px'}}>
            <Container fixed sx={{      }}> 
            <Grid container spacing={2}>
        <CardMedia
        component="img"
        sx={{ width: 100,
        height:100 , 
borderRadius: '10% 10% ' ,
}}
        image='assets/InterviewMe.png'
        alt="Live from space album cover"
      />
      <CardContent sx={{  }}>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
            paddingTop:'10px',
            font: 'normal normal 600 26px/27px poppins',
            fontWeight: 'medium',   
            fontFamily: 'Poppins',
            color: '#ffffff',
            paddingLeft:'20px',
            textAlign: 'left',

           }}>

InterviewMe
            </Typography>
        </CardContent>
        </Grid>
        </Container>
        </Box>

            <Typography variant="p" sx={{
                color: '#ffffff',
                font: 'normal normal 400 16px/27px poppins',
                textAlign: 'left',
                textAlign: 'left',  
                md:"start",
        
                paddingLeft:'24px',
                xs:"center"

            }}
            >Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview. </Typography>
            <Item sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'left',
                paddingTop: '50px',
                paddingBottom: '50px',
            }}>
                <ToggleButton
  value="check"
  selected={selected}
  onChange={() => {
    setSelected(!selected);
  }}
    sx={{
        backgroundColor: 'transparent',
        color: '#ffffff',
        font: 'normal normal 400 14px/27px poppins',
        border:' 1px solid #FFFFFF',
        border:'none',
        '&:checked': {
            backgroundColor: '#ffffff',
            opacity: [0.9, 0.8, 0.7],
            color : '#003145',
            border:'1px solid #FFFFFF',
            },
        '&:selected': {
            backgroundColor: '#ffffff',
            opacity: [0.9, 0.8, 0.7],
            color : '#003145',
            border:'1px solid #FFFFFF',
            },
            
       
    }}
>
  <StarIcon />
</ToggleButton>
                </Item>

                            </Item>
            
                </Grid>
                            <Grid item  sm={4}>
                                <Item sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'right',
                                    alignItems: 'right',
                                    paddingTop: '100px',
                                    paddingBottom: '50px',
                                    paddingLeft: '150px',
                                    
                                    
                                
                                }}>
                                    {/* <img src="assets/Hand holding bulb 3D.png" alt="ai-planet-logo" height="250" weight="250" /> */}
                                    <Button variant="contained" sx={{
                                        backgroundColor: 'transparent',
                                        color: '#ffffff',
                                        font: 'normal normal 400 14px/27px poppins',
                                        border:' 1px solid #FFFFFF',
                                        borderRadius: '10px',
                                        width: '120px',
                                        height: '40px',  
                                        justifyContent: 'center',     
                                                 
        
                                        textTransform: 'none',
                                        color: '#ffffff',
                                        '&:hover': {
                                            backgroundColor: '#ffffff',
                                            opacity: [0.9, 0.8, 0.7],
                                            color : '#003145'
                                            },
                                        '&:active': {
                                            backgroundColor: '#44924C',
                                            opacity: [0.9, 0.8, 0.7],
                                            },
                                        '&:focus': {
                                            backgroundColor: '#44924C',
                                            opacity: [0.9, 0.8, 0.7],
                                            color: '#ffffff',
                                            },
                                    
    
    
                                    }}
                                    >
                                        <InputAdornment position="start" sx={{
                                            color: '#ffffff',
                                            

                                        }}>
                  <EditIcon />
                </InputAdornment>
                                        Edit</Button>
                                    <FormControl sx={{ m: 1, width: '25ch' }} />

                                     <Button variant="contained" sx={{
                                        backgroundColor: 'transparent',
                                        color: '#ffffff',
                                        font: 'normal normal 400 12px/27px poppins',
                                        border:' 1px solid #FFFFFF',
                                        borderRadius: '10px',
                                        width: '120px',
                                        height: '40px',                                        
                                    
                                        justifyContent: 'center',
                                    
                                       
                                        textTransform: 'none',
                                        color: '#ffffff',
                                        '&:hover': {
                                            backgroundColor: '#ffffff',
                                            opacity: [0.9, 0.8, 0.7],
                                            color : '#003145'
                                            },
                                        '&:active': {
                                            backgroundColor: '#44924C',
                                            opacity: [0.9, 0.8, 0.7],
                                            },
                                        '&:focus': {
                                            backgroundColor: '#44924C',
                                            opacity: [0.9, 0.8, 0.7],
                                            color: '#ffffff',
                                            },
                                    
    
    
                                    }}
                                    >
                                        <InputAdornment position="start" sx={{
                                            color: '#ffffff',
                                           
                                        }}>
                  <DeleteIcon />
                </InputAdornment>
                                        Delete</Button>
                                    

                                </Item>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>


        {/* <div className="conatiner bg-dark p-3">
            <div className="row align-items-center px-3 ">
                <div className="col-md-8 text-light px-4">
                    <h1>Hackathon Submissions</h1>
                </div>
                <div className="col-md-4">
                    <img src="assets/Hand holding bulb 3D.png" alt="ai-planet-logo" height="350" weight="250" />
                </div>
                </div>
                <div className="row align-items-center">
                <div className="col-md-6 text-light">
                    <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
              */}

            {/* <div className="conatiner bg-blue">
            <div className="row align-items-center">
                <div className="col-md-6 text-light">
                    <h1>AI Planet</h1>
                    <p>AI Planet is a global AI community that aims to bring together the best minds in the world to solve the most pressing challenges facing humanity. We are a non-profit organization that is committed to making a positive impact on the world through AI.</p>
                    <button className="btn btn-primary">Learn More</button>
                    
                </div>
                <div className="col-md-6">
                    <img src="assets/Hand holding bulb 3D.png" alt="ai-planet-logo" height="350" weight="250" />
                </div>
              </div>
         </div> */}
            

       
       </>
    );
    }


export default ViewHack;