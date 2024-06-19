import { Card, Typography } from "@mui/material";
import React from "react";

const InTouchComponents = () => {
  return (
    <>
      <Card
        sx={{
          borderRadius: "0px",
          padding: "1rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          Get In Touch
        </Typography>
      </Card>
    </>
  );
};

export default InTouchComponents;
