import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";

export default function DestinationCard({
  img,
  date,
  title,
  location,
  commentCount,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "450px",
        borderRadius: "0",
      }}
    >
      <Box
        sx={{
          width: "100%",
          minHeight: "280px",
          textAlign: "center",
          backgroundImage: `url("${img}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
        }}
      />
      <Card
        sx={{
          bgcolor: "#fff",
          position: "absolute",
          marginTop: "12rem",
          borderRadius: "0",
          padding: "1rem",
          inset: "0 20px 0 0",
        }}
      >
        <Typography
          sx={{
            color: "#FFA500",
          }}
        >
          {date}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            marginBottom: "1rem",
            width: "250px",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid grey",
            marginTop: "2.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Image
              style={{
                marginTop: "2rem",
              }}
              width={20}
              height={20}
              src="/images/Vector(2).png"
              alt=""
            />
            <Typography
              sx={{
                paddingTop: "2rem",
                paddingLeft: "10px",
              }}
            >
              {location}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
            }}
          >
            <Image
              style={{
                marginTop: "2rem",
              }}
              width={20}
              height={20}
              src="/images/Vector(3).png"
              alt=""
            />
            <Typography
              sx={{
                paddingTop: "2rem",
                paddingLeft: "10px",
              }}
            >
              Comment ({commentCount})
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
