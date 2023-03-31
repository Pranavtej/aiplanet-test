import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import { Container } from '@mui/system';
import { Grid } from '@mui/material';


export default function Cards1(props) {
  const theme = useTheme();

  return (


    <Card sx={{  width:360,height:330 ,  borderRadius: 8}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft:'24px', paddingTop:'45px' , radius:'50px'}}>
            <Container fixed sx={{      }}> 
            <Grid container spacing={2}>
        <CardMedia
        component="img"
        sx={{ width: 100,
        height:100 , 
borderRadius: '10% 10% ' ,
}}
        image={props.image}
        alt="Live from space album cover"
      />
      <CardContent sx={{  }}>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
            paddingTop:'10px',
            fontSize: '20px',
            fontWeight: 'medium',   
            fontFamily: 'Poppins',
           }}>

            {props.name} 
            </Typography>
        </CardContent>
        </Grid>
        </Container>
        </Box>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft:'24px', paddingTop:'24px' }}>
        
      </Box> */}
      
              <Box sx={{ display: 'flex', alignItems: 'center', paddingTop:'10px' }}>
                <Container fixed sx={{      }}>
        <CardContent sx={{   }}>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
           
            fontSize: '16px',
            fontWeight: 'medium',   
            fontFamily: 'Poppins',
          }}>
    {props.description}
    {/* Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview. */}
        </Typography>
        </CardContent>
        </Container>
        </Box>

        <Box sx={{alignItems: 'center', paddingTop:'10px' }}>
        <Container fixed sx={{      }}>
        <CardContent sx={{ 
            paddingTop:'10px',
            paddingRight:'30px',
            paddingLeft:'125px',

         }}>
            <Typography variant="subtitle1" color="text.secondary" component="div" sx={{  
            fontSize: '14px',
            fontWeight: 'medium',
            fontFamily: 'Poppins',
            fontStyle:'italic',

             }}>
            uploaded 6 days ago
    
            </Typography>
        </CardContent>
        </Container>
        </Box>
      
    </Card>
  );
}