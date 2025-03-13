import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { ScrollProvider } from "./ScrollContext.jsx";

// Import the non-lazy components
import Cube from "./components/Cube.jsx";

function AppDesk() {

  return (
    <>
    <ScrollProvider>
      <Box className="overflow-x-hidden">

      </Box>
    </ScrollProvider>
    </>
  );
}

export default AppDesk;
