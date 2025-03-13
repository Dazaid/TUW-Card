import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { ScrollProvider } from "./ScrollContext.jsx";

// Lazy load the mobile components
import MHome from "./mobileComponents/MHome.jsx";


function AppMobile() {

  return (
    <ScrollProvider>
      <Box className="overflow-x-hidden w-[100vw]">
      <MHome />
      </Box>
    </ScrollProvider>
  );
}

export default AppMobile;
