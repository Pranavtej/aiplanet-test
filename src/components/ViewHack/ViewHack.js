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
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';   
import StarIcon from '@mui/icons-material/Star';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Stack } from "react-bootstrap";

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
            font: 'normal normal 500 26px/30px poppins',
            fontWeight: 'bold',   
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
        paddingLeft:'20px',
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
<Divider orientation="vertical" flexItem sx={{
    color: '#ffffff',
    font: 'normal normal 400 14px/27px poppins',
    border:' 1px solid #FFFFFF',
    
}}/>
<Item sx={
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        paddingLeft: '20px',
        paddingTop: '10px',
    }
}>
<Chip icon={ <CalendarTodayIcon sx={{ "&&": { color: "white",width:'20px' } }} />} sx={{

    '& .MuiChip-CalenderTodayIcon': {
        color: '#ffffff',
      },
  
    textTransform: 'none',
        backgroundColor: '#255973',
    color: '#ffffff',
    font: 'normal normal 400 12px/27px poppins',

    borderRadius: '100px',
    width: '120px',
    height: '29px', 
    justifyContent: 'center',
}} label="12 March" />
</Item>
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

                <Box sx={{
                    backgroundColor: '#ffffff',
                    paddingTop: '50px',
                    width: '100%',
                    height: '100%',
                    paddingBottom: '50px',
                    paddingLeft: '50px',
                    paddingRight: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
                >
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item sm={9}>
                                <Item sx={{
                                }}
                                >
                                    <Typography variant="h4" sx={{
                                        color: '#003145',
                                        font: 'normal normal 600 24px/27px poppins',
                                        fontWeight: 'medium',   
                                        fontFamily: 'Poppins',
                                        color: '#003145',
                                        paddingLeft:'20px',
                                        textAlign: 'left',
                                        paddingBottom: '20px',
                                    }}
                                    >Description</Typography>
                                    <Typography variant="h4" sx={{
                                        color: '#003145',
                                        font: 'normal normal 400 16px/27px poppins',
                                        fontWeight: 'medium',   
                                        fontFamily: 'Poppins',
                                        color: '#003145',
                                        paddingLeft:'20px',
                                        textAlign: 'left',
                                        paddingBottom: '20px',
                                    }}
                                    >Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit. Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere. Lacus luctus lacus consequat dolor.

                                    Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit quis sagittis pulvinar fames vel.
                                    
                                    Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas.</Typography>

                                    </Item>
                            </Grid>
                            <Grid item sm={3}>
                                <Item sx={{

                                }}
                                >
                                    <Typography variant="h4" sx={{
                                        color: '#858585',
                                        font: 'normal normal 500 20px/27px poppins',
                                        fontWeight: 'normal',   
                                        fontFamily: 'Poppins',
                                     
                                        paddingLeft:'20px',
                                        textAlign: 'left',
                                        paddingBottom: '20px',
                                    }}
                                    >Hackathon</Typography>
                                    <Typography variant="h4" sx={{
                                        
                                        font: 'normal normal 500 24px/27px poppins',
                                        fontWeight: 'medium',   
                                        fontFamily: 'Poppins',
                                     
                                        paddingLeft:'20px',
                                        textAlign: 'left',
                                        paddingBottom: '20px',
                                    }}
                                    >Prestige Interview Challenge</Typography>
                                    <Typography variant="h4" sx={{
                                        
                                        font: 'normal normal 500 14px/27px poppins',
                                        fontWeight: 'normal',   
                                        fontFamily: 'Poppins',
                                        color: '#858585',
                                        paddingLeft:'20px',
                                        textAlign: 'left',
                                        paddingBottom: '20px',
                                    }}
                                    > <CalendarTodayIcon sx={{
                                        color: '#858585',
                                        width: '20px',
                                    }}/> 24 Feb 2023 - 24 March 2023</Typography>
                                    <FormControl sx={{
                                        width: '100%',
                                        paddingBottom: '20px',
                                    }}>
                                        <Button variant="contained" sx={{
                                            textTransform: "none",
                                            width: "100%",
                                            height: "50px",
                                            borderRadius: '10px',
                                            backgroundColor: '#ffffff',
                                            border:' 1px solid #003145',
                                            
                                            font: ' normal normal 500 16px/21px poppins',
                                            color: "#003145",
                                            ":hover": {
                                                backgroundColor: "#44924C",
                                                color: "#FFFFFF",
                                                },
                                        }}><GitHubIcon sx={{
                                            color: '#003145',
                                            
                                            widht: '50px',
                                            height: '20px',
                                            mr: '10px',
                                        }}/>GitHub Repository</Button>

                                    </FormControl>
                                    <FormControl sx={{
                                        width: '100%',
                                        paddingBottom: '20px',
                                    }}>
                                        <Button variant="contained" sx={{
                                            textTransform: "none",
                                            width: "100%",
                                            height: "50px",
                                            borderRadius: '10px',
                                            backgroundColor: '#ffffff',
                                            border:' 1px solid #003145',
                                            
                                            font: ' normal normal 500 16px/21px poppins',
                                            color: "#003145",
                                            ":hover": {
                                                backgroundColor: "#44924C",
                                                color: "#FFFFFF",
                                                },
                                        }}><LaunchIcon sx={{
                                            color: '#003145',
                                            
                                            widht: '50px',
                                            height: '20px',
                                            mr: '10px',
                                        }}/>Other Link</Button>

                                    </FormControl>

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