import { Widgets } from "@mui/icons-material";
import { Box, Container, Paper } from "@mui/material";
import React from "react";
import Header from "../Header/header";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import createTheme  from "@mui/material/styles/createTheme";
import { height, ThemeProvider } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Button from "@mui/material/Button";
import { Divider } from '@mui/material';


const CssTextField = styled(OutlinedInput)({
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: 'yellow',
        borderRadius: '10px' ,   },
    },
  });

  const theme = createTheme({
    typography: {
      fontFamily: 'poppins',
      textTransform: 'none',

    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: 'yellow',
          borderRadius: '5px' ,   },
      },

  });


const Upload_Form = () => {
    return (
        <>
        <Header/>
        <Box sx={{
            width: '100%',
            height: 2000,
            backgroundColor: '#F8F9FD',
        }}>
        <Container sx={{ flexGrow: 1 ,
        width: '100%',
        height: 2000,
        padding: '30px 48px',
        
        }}>
        <Box sx={{ flexGrow: 1,
        // width: '100%',
        //  height: 2000,
        //  padding: '30px 48px',
        //     paddingTop: "2px",
        //     paddingLeft: "12px",
        //     paddingRight: "12px",
        //     paddingBottom: "2px",
         backgroundColor: 'White',
        boxShadow :"0px 0px 2px #00000029",
         borderRadius: "20px",
            width: '913px',
            height: '1405px',
            left: '142px',
            top: "114px"
            


        }}>
            <Typography variant="h4" gutterBottom  
                sx={{
                    paddingTop: "35px",
                    paddingLeft: "45px",
                    fontWeight: "medium",
                    font: ' normal normal 500 29px/33px poppins',
                }}
            >
            New Hackathon Submission
      </Typography>
                <Paper elevation={0} sx={{
                }}>
                <Box sx={{
                    paddingTop: "35px",
                    paddingLeft: "45px",
                    paddingRight: "45px",
                    paddingBottom: "35px",
                }}>
                <Typography variant="h6" gutterBottom
                    sx={{
                        font: ' normal normal 500 18px/21px poppins',
                    }}
                >
                Title
                </Typography>
                <FormControl sx={{ width: '100%' ,
            borderRadius: '8px',
        
            }}> 
  <OutlinedInput  placeholder="Title of your Submission"
   sx={{
            font: ' normal normal 400 18px/21px poppins',
     width: "100%",
     height: "50px",
        borderRadius: '8px',

  }} />
   <Typography variant="h6" gutterBottom
                    sx={{
                        paddingTop: "35px",
                        font: ' normal normal 500 18px/21px poppins',
                    }}
                >
              Summary
                </Typography>
<FormControl sx={{ width: '100%' ,

}}>
      
  <OutlinedInput placeholder="A short summary of your submission (this will be visible with your submission)"
         sx={{
            font: ' normal normal 400 18px/21px poppins',
        width: "100%",
        height: "50px",
        borderRadius: '8px',
       
    }}
      />
      </FormControl>
  
      <Typography variant="h6" gutterBottom
                    sx={{
                        paddingTop: "35px",
                        font: ' normal normal 500 18px/21px poppins',
                    }}
                >
              Description
                </Typography>
<FormControl sx={{ width: '100%' ,
height: "150px",
borderRadius: '8px',

}}>
      
  <OutlinedInput placeholder="A short summary of your submission (this will be visible with your submission)"
         sx={{
            font: ' normal normal 400 18px/21px poppins',
        width: "100%",
        height: "150px",
        borderRadius: '8px',

       
    }}  size="large" multiline rows={4}
      />
      </FormControl>
  

      <Typography variant="h6" gutterBottom
                    sx={{
                        paddingTop: "35px",
                        font: ' normal normal 500 18px/21px poppins',
                    }}
                >
              Cover Image
                </Typography>
                <Typography variant="h6" gutterBottom
                    sx={{
                        paddingTop: "15px",
                        font: ' normal normal 400 18px/21px poppins',
                        color: "#828282",
                    }}
                >
             Minimum resolution: 360px  X 360px
                </Typography>
<FormControl sx={{ width: '100%' ,
height: "150px",
borderRadius: '8px',

}}>
  <Button
  variant="contained"
  component="label"
    sx={{
        width: "100%",
        height: "90px",
        borderRadius: '16px',
        backgroundColor: '#F5F5F5;',
        border: '2px dashed #CCCCCC ',
        borderSpacing: '0px',
    
        font: ' normal normal 500 18px/21px poppins',

    }}

>
  <AddPhotoAlternateIcon sx={{
    width: "50px",
    height: "50px",
    color: "#CCCCCC",
  }}/>
  <input
    type="file"
    hidden
  />
</Button>
      </FormControl>


      <Typography variant="h6" gutterBottom
                    sx={{
                        
                        font: ' normal normal 500 18px/21px poppins',
                    }}
                >
              Hackathon Name
                </Typography>
<FormControl sx={{ width: '100%' ,
height: "50px",
borderRadius: '8px',

}}>
      
  <OutlinedInput placeholder="Enter the name of the hackathon"
         sx={{
            font: ' normal normal 400 18px/21px poppins',
        width: "100%",
        height: "50px",
        borderRadius: '8px',

       
    }} 
      />
      </FormControl>

      <Typography variant="h6" gutterBottom
                    sx={{
                        paddingTop: "35px",
                        font: ' normal normal 500 18px/21px poppins',
                    }}
                >
              Summary
                </Typography>
<FormControl sx={{ width: '100%' ,

}}>
      
  <OutlinedInput placeholder="A short summary of your submission (this will be visible with your submission)"
         sx={{
            font: ' normal normal 400 18px/21px poppins',
        width: "100%",
        height: "50px",
        borderRadius: '8px',
       
    }}
      />
      </FormControl>

      <Typography variant="h6" gutterBottom
                    sx={{
                        paddingTop: "35px",
                        font: ' normal normal 500 18px/21px poppins',
                    }}
                >
              Git Repository
                </Typography>
<FormControl sx={{ width: '100%' ,

}}>
      
  <OutlinedInput placeholder="Enter your submission’s public GitHub repository link"
         sx={{
            font: ' normal normal 400 18px/21px poppins',
        width: "100%",
        height: "50px",
        borderRadius: '8px',
       
    }}
      />
      </FormControl>

      <Typography variant="h6" gutterBottom
                    sx={{
                        paddingTop: "35px",
                        font: ' normal normal 500 18px/21px poppins',
                    }}
                >
              Other Links
                </Typography>
<FormControl sx={{ width: '100%' ,

}}>
      
  <OutlinedInput placeholder="You can upload a video demo or URL of you demo app here."
         sx={{
            font: ' normal normal 400 18px/21px poppins',
        width: "100%",
        height: "50px",
        borderRadius: '8px',
       
    }}
      />
      </FormControl>
<Divider sx={{
    paddingTop: "45px",
    color: "#E6E6E6;",
    Visibility: "Visible",
    borderColor: "rgb(0 0 0)",
    
}}/>  
<FormControl sx={{
    paddingTop: "45px",
}}>
    <Button
sx={{
    textTransform: "none",
    width: "25%",
    height: "50px",
    borderRadius: '10px',
    backgroundColor: '#44924C',
    font: ' normal normal 500 16px/21px poppins',
    color: "#FFFFFF",
    ":hover": {
        backgroundColor: "#44924C",
        color: "#FFFFFF",
    },

}}
>
Upload Submission
</Button>
</FormControl>

</FormControl>
                
                                </Box>
                </Paper>

         </Box>
        </Container>
        </Box>
        </>
    );
    }

export default Upload_Form;
