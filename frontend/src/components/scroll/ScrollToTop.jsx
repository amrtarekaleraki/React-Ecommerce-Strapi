import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger({threshold:100})}>
      <Fab
        onClick={() => {
            window.scrollTo(0,0)
        }}
        sx={{
          position: "fixed",
          bottom: "33px",
          right: "33px",
        }}
        size="small"
        color="primary"
        aria-label="add"
        variant="extended"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
}

export default ScrollToTop;
