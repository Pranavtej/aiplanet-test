import React from "react";
import Header from "../Header/header";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const ViewHack = () => {
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
                                <Typography variant="h3" component="h2"
                                sx={{
                                    color: '#ffffff',
                                    font: 'normal normal 500 42px/63px poppins',
                                    textAlign: 'left',
                                    paddingTop: '50px',
                                    
                                    
                                }}>
 Hackathon Submissions
            </Typography>
            <Typography variant="p" sx={{
                color: '#ffffff',
                font: 'normal normal 400 16px/27px poppins',
                textAlign: 'left',
                textAlign: 'left',  
                md:"start",
                xs:"center"

            }}
            >Lorem ipsum dolor sit amet consectetur. Urna cursus amet pellentesque in parturient purus feugiat faucibus. Congue laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus nec vitae. </Typography>
            <Item sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'left',
                paddingTop: '50px',
                paddingBottom: '50px',
            }}>
                <Link to={`/upload`}><Button variant="contained" sx={{
                    backgroundColor: '#44924C',
                    color: '#ffffff',
                    font: 'normal normal 600 14px/27px poppins',
                    borderRadius: '10px',
                    width: '200px',
                    height: '50px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textTransform: 'none',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#44924C',
                        opacity: [0.9, 0.8, 0.7],
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
                >Upload Submission</Button></Link>
                </Item>

                            </Item>
            
                </Grid>
                            <Grid item  sm={4}>
                                <Item sx={{
                                    display: 'flex',
                                    justifyContent: 'right',
                                    alignItems: 'right',
                                    paddingTop: '50px',
                                    
                                    
                                
                                }}>
                                    <img src="assets/Hand holding bulb 3D.png" alt="ai-planet-logo" height="250" weight="250" />
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