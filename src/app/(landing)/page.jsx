import * as React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import AboutMeComponents from "@/components/AboutMeComponents";
import CategoriesComponents from "@/components/CategoriesComponents";
import PopularAndRecentPostComponents from "@/components/PopularAndRecentPostComponents";
import TravelingComponents from "@/components/TravelingComponents";
import PriceProductComponents from "@/components/PriceProductComponents";
import InTouchComponents from "@/components/InTouchComponents";
import SocialMedia from "@/components/SocialSedia";
import TravelJulySemptember from "@/components/TravelJulySemptember";
import MounthlyReaders from "@/components/MounthlyReaders";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
            width: "100%",
            minHeight: "100vh",
            textAlign: "center",
            backgroundImage: 'url("/images/rectangle.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <Image
            style={{
              border: "1px solid transparent",
              borderRadius: "50%",
              backgroundColor: "#fff",
              padding: "3px",
              background: "transparent",
              position: "absolute",
              right: 0,
              bottom: 0,
              marginRight: "1rem",
            }}
            width={70}
            height={70}
            src="/images/location.png"
            alt=""
          />

          <Box
            sx={{
              paddingTop: "9rem",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                fontWeight: "700",
                marginTop: "2.5rem",
              }}
            >
              THE COUNTER: <span style={{ color: "#FFA500" }}> 70</span>{" "}
              Countries
              <span style={{ color: "#FFA500" }}> 1036 </span>
              Cities
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "700",
                color: "#fff",
                textAlign: "center",
                margin: "25px 45px",
              }}
            >
              Leave your mark on all over the world
            </Typography>
            <Button
              sx={{
                padding: "20px",
                bgcolor: "#0336FF",
              }}
              variant="contained"
              disableElevation
            >
              Read More
            </Button>
            <Typography
              sx={{
                margin: "3rem 35px",
                color: "#fff",
                fontWeight: "500",
              }}
            >
              Scroll Down to Continue
            </Typography>
            <Link href="#transition">
              <Image
                style={{
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  padding: "3px",
                }}
                width={25}
                height={25}
                src="/images/vector.png"
                alt=""
              />
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Container id="transition">
        <Grid
          spacing={3}
          container
          sx={{
            marginTop: "20px",
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Stack
              sx={{
                gap: "10px",
              }}
            >
              <AboutMeComponents />
              <CategoriesComponents />
              <PopularAndRecentPostComponents />
              <TravelingComponents />
              <PriceProductComponents />
              <InTouchComponents />
              <SocialMedia />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <TravelJulySemptember />
          </Grid>
        </Grid>
      </Container>
      <Carousel />

      <MounthlyReaders />
    </>
  );
}
