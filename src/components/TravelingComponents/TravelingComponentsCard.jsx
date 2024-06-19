import * as React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";

export default function TravelingComponentsCard({ img, img2, date, text }) {
  return (
    <>
      <Grid>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
          }}
        >
          <Image width={70} height={70} src={img} alt="" />

          <Box>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              {date}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: "19px",
                fontWeight: "600",
              }}
            >
              {text}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "5px",
            margin: "7px 0 7px 0",
          }}
        >
          <Image width={70} height={70} src={img2} alt="" />

          <Box>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              {date}
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: "19px",
                fontWeight: "600",
              }}
            >
              {text}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "5px",
          }}
        >
          <Image width={70} height={70} src={img2} alt="" />

          <Box>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              {date}
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: "19px",
                fontWeight: "600",
              }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
