import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

export default function PopularAndRecentPost({
  bgImg,
  popularPost,
  date,
  loveCountry,
  resentPost,
}) {
  return (
    <>
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
            fontSize: "30px",
            fontWeight: "700",
            padding: "1rem",
          }}
        >
          {popularPost}
        </Typography>
      </Card>

      <Card
        sx={{
          borderRadius: "0px",
          color: "#fff",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          height: "300px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            padding: "2rem 0 6.5rem 1rem",
          }}
        >
          {date}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            paddingLeft: "1rem",
          }}
        >
          {loveCountry}
        </Typography>

        <button
          style={{
            color: "#0336FF",
            border: "1px solid transparent",
            margin: "1rem 5px 0 1rem",
          }}
        >
          <ArrowBackIosOutlinedIcon />
        </button>

        <button
          style={{
            color: "#0336FF",
            border: "1px solid transparent",
          }}
        >
          <ArrowForwardIosOutlinedIcon />
        </button>
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
            fontSize: "30px",
            fontWeight: "700",
            padding: "1rem",
          }}
        >
          {resentPost}
        </Typography>
      </Card>
    </>
  );
}
