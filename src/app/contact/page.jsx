import Carousel2 from "@/components/Carousel2";
import MounthlyReaders from "@/components/MounthlyReaders";
import { Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import React from "react";

const Contact = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            width: "100%",
            minHeight: "50vh",
            textAlign: "center",
            backgroundImage: 'url("/images/Rectangle 5.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            paddingTop: "8rem",
            paddingBottom: "3rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: "600",
            }}
          >
            Contact
          </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{
          textAlign: "center",
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM
      </Typography>

      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="filled"
              type="text"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="filled"
              type="text"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Email" variant="filled" type="email" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Subject" variant="filled" type="text" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              InputProps={{
                style: {
                  paddingBottom: "12rem",
                },
              }}
              fullWidth
              label="Message"
              variant="filled"
              type="text"
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ textAlign: "center", marginBottom: "2rem", marginTop: "2rem" }}
        >
          <Button variant="contained" sx={{ margin: "auto" }}>
            Submit
          </Button>
        </Grid>
      </Container>
      <Carousel2 />
      <MounthlyReaders />
    </>
  );
};

export default Contact;
