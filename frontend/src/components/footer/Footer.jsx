import { Box, Button, Typography } from "@mui/material"


function Footer() {
  return (
    <Box
      sx={{ 
        bgcolor:"#2B3445",
        py:1.3,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
       }}
    >
       <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        variant="h6"
        color={"HighlightText"}
        sx={{ fontSize:18 }}
        >
            Designed and developed by 
             <Button
              sx={{ 
                 mx:0.5,
                 fontSize:"18px",
                 textTransform:"capitalize",
                 color:"#ff7790"
               }}
               variant="text"
               color="primary"
             >
                Amr Tarek             
             </Button>
             &copy; 2023
       </Typography>
    </Box>
  )
}

export default Footer