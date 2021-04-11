import { Box, Button, Typography } from "@material-ui/core";
import React from "react";

const Home: React.FC = () => {
  return (
    <Box style={{ display: "flex", flexDirection: "column", flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Typography>Hello Word!</Typography>
      <Box style={{ display: "flex", gap: 10 }}>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
