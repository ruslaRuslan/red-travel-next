import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import { LinkedIn, Twitter } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = ({}) => {
  return (
    <>
      <Box sx={{ borderTop: "1px solid #C4C4C4" }}>
        <Container>
          <Grid
            container
            spacing={3}
            justifyContent="space-around"
            sx={{ marginTop: "3rem", marginBottom: "1rem" }}
          >
            <Grid item xs={12} md="auto">
              <Image width={90} height={40} src="/images/group121.png" alt="" />
            </Grid>
            <Grid item xs={12} md="auto">
              <Typography
                sx={{
                  fontWeight: "700",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Body
              </Typography>
            </Grid>
            <Grid item xs={12} md="auto">
              <Typography
                sx={{
                  fontWeight: "700",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Travel
              </Typography>
            </Grid>
            <Grid item xs={12} md="auto">
              <Typography
                sx={{
                  fontWeight: "700",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Account
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ background: "#000000AC", color: "#fff", padding: "3rem 0" }}>
          <Container>
            <Grid container spacing={3} justifyContent="space-around">
              <Grid item xs={12} md={3}>
                <Typography sx={{ margin: "3rem 0" }}>
                  We are location independent bloggers, digital influencers,
                  small group tour organizers and world travelers with a serious
                  passion for the sun, the sea and adventure.
                </Typography>
                <Typography>
                  Eight years and 60-something countries later and we are still
                  on the road.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography sx={{ margin: "3rem 0" }}>
                  Add: 221B John hope Street, Lekki, Lagos, Nigeria.
                </Typography>
                <Typography sx={{ margin: "2rem 0" }}>
                  T: +234 706 507 8544
                </Typography>
                <Typography sx={{ margin: "2rem 0" }}>
                  E: info@redexplorers.com
                </Typography>
                <Typography>W: www.redexplorers.com</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography sx={{ margin: "3rem 0" }}>My List</Typography>
                <Typography>My Requests</Typography>
                <Typography sx={{ margin: "2rem 0" }}>My Credits</Typography>
                <Typography>My Info</Typography>
                <Typography sx={{ marginTop: "2rem" }}>Contact</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography sx={{ margin: "3rem 0" }}>Travel</Typography>
                <Typography>Why Travel</Typography>
                <Typography sx={{ margin: "2rem 0" }}>
                  Become a Traveler
                </Typography>
                <Typography>How Its Works</Typography>
                <Typography sx={{ marginTop: "2rem" }}>
                  Traveling FAQs
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box
          sx={{
            background: "#000000AC",
            color: "#fff",
            padding: "2rem 0",
            borderTop: "1px solid #EEEEEE",
          }}
        >
          <Container>
            <Grid
              container
              spacing={3}
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid item xs={12} md="auto">
                <Image
                  width={150}
                  height={50}
                  src="/images/image2.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={12} md="auto">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  <FacebookIcon />
                  <Twitter />
                  <GoogleIcon />
                  <LinkedIn />
                </Box>
              </Grid>
              <Grid item xs={12} md="auto">
                <Typography sx={{ textAlign: "center", color: "#fff" }}>
                  © 2021 RedExplorers. All rights reserved | Terms | Privacy |
                  Site Map
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
