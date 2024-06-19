import { Button, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { PriceProductData } from "./PriceProductComponentsData";

export default function PriceProductComponentsCard({
  gearUse,
  myBag,
  text,
  nameButton,
  productWord,
}) {
  return (
    <>
      <Card
        sx={{
          borderRadius: "0",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "25px",
            fontWeight: "600",
            marginTop: "20px",
          }}
        >
          {gearUse}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: "25px",
            fontWeight: "600",
            margin: "20px 0 20px 0",
          }}
        >
          {myBag}
        </Typography>
        <Typography>{text}</Typography>
        <Button
          sx={{
            padding: "20px",
            bgcolor: "#0336FF",
            marginTop: "20px",
            marginBottom: "20px",
          }}
          variant="contained"
          disableElevation
        >
          {nameButton}
        </Button>
      </Card>

      <Card
        sx={{
          padding: "0 1.5rem 0 1.5rem",
          borderRadius: "0px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            padding: "1rem",
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          {productWord}
        </Typography>
      </Card>

      {PriceProductData.map(({ id, img, product, price }) => {
        return (
          <Box
            key={id}
            sx={{
              display: "flex",
              gap: "5px",
            }}
          >
            <Image width={70} height={70} src={img} alt="" />

            <Box>
              <Typography
                sx={{
                  fontSize: "19px",
                  fontWeight: "600",
                }}
              >
                {product}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#0336FF",
                }}
              >
                {price}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </>
  );
}
