import React from "react";
import { data } from "./card_data.js";
import Cards1 from "./card_test";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const Test = () => {
  return (
    <>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4}  key={item.id}>
              <Cards1
                name={item.name}
                image={item.image}
                description={item.description}
                favariate={item.favariate}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Test;









// import React from "react";
// import {data} from "./card_data.js";
// import Cards1 from "./card_test";
// import { Container } from "@mui/material";
// import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Grid';

// const Test=() => {
//     return (
//         <>
//        <Container sm={12} md={4} lg={4} sx={{
//             }}>
       
//         {data.map((item) => (
//             <Item  sx={{
//             }}>
//            <Cards1 name={item.name} image={item.image} description={item.description} favariate={item.favariate} key={item.id}/>
//            </Item>   
//         ))}

//         </Container>

//         </>
//     );
// }

// export default Test;