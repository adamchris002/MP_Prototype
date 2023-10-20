import React from "react";
import { Paper } from "@mui/material";
import { Container } from "semantic-ui-react";

import FooterImage from "../assets/footer.png"

const MyFooter = () => {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        bottom: 0,
        width: "100%",
        height: "50vh",
        backgroundImage: `url(${FooterImage})`,
        backgroundSize: "cover"
      }}
      component="footer"
    //   square
    //   variant="outlined"
    >
      <Container maxWidth="lg">
        
      </Container>
    </Paper>
  );
};

export default MyFooter;
