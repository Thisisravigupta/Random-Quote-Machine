import { Box, Typography } from "@mui/material";
import randomColor from "randomcolor";
import { MyCard } from "./MyCard";
import { useState } from "react";

function App() {
  const [randColor, setRandColor] = useState(randomColor);

  const handleCallback = () => {
    setRandColor(randomColor);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: randColor }}
    >
      <MyCard randColor={randColor} handleCallback={handleCallback} />
      <Typography fontSize={12} mt={2} color="white">by Mr. Ravi</Typography>
    </Box>
  );
}

export default App;
