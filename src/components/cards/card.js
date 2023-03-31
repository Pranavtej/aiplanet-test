import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';

const Cards = () => {
    return(
        <>
        
        <Container fixed sx={{
          paddingTop:'30px'
        }}>
        <Card sx={{ maxWidth: 345 ,
        paddingTop:'20px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="assets/Pirate ipsum.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>

       </>
    );
    
}

export default Cards;
