import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import {
  Close,
  ElectricBikeOutlined,
  ExpandMore,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import useMediaQuery from '@mui/material/useMediaQuery';
import Links from "./Links";

function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt:5
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "222px",
            bgcolor: theme.palette.mycolor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Categories
          </Typography>

          <Box flexGrow={1} />

          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              bgcolor: theme.palette.mycolor.main,
            },
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
        </Menu>
      </Box>


      {useMediaQuery('(min-width:1200px)') && (
          <Stack gap={4} direction={"row"} alignItems={"center"}>
            <Links title="Home"/>
            <Links title="Mega Menu"/>
            <Links title="Full Screen Menu"/>
            <Links title="Pages"/>
            <Links title="User Account"/>
            <Links title="Vendor Account"/>
          </Stack>
      )}


       {useMediaQuery('(max-width:1200px)') && (
       <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
       </IconButton>)}

      



      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": { height: "100%" } }}
      >
        <Box
          sx={{
            width: 444,
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 10,
          }}
        >
          <IconButton
            sx={{ ":hover":{color:"red",rotate:"180deg", transition:"0.3s"} , position: "absolute", top: 0, right: 10 }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {[  
            {mainlink:"Home", sublink:['Link1','Link2','Link3']},
            {mainlink:"Mega menu", sublink:['Link1','Link2','Link3']},
            {mainlink:"full screen menu", sublink:['Link1','Link2','Link3']},
            {mainlink:"pages", sublink:['Link1','Link2','Link3']},
            {mainlink:"user account", sublink:['Link1','Link2','Link3']},
            {mainlink:"vendor account", sublink:['Link1','Link2','Link3']}
          ].map((item)=>{
              return (
                <Accordion key={item.mainlink} elevation={0} sx={{ bgcolor: "initial" }}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mainlink}</Typography>
                </AccordionSummary>
             
    
                  <List sx={{ py:0,my:0 }}>

                   {item.sublink.map((link)=>{
                         return (
                          <ListItem key={link} sx={{ py:0,my:0 }}>
                            <ListItemButton>
                              <ListItemText primary={link} />
                            </ListItemButton>
                          </ListItem>
                         )
                   })}

                  </List>
    
              
              </Accordion>
              ) 
          })}
          

        </Box>
      </Drawer>
    </Container>
  );
}

export default Header3;
