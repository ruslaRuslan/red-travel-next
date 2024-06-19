import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function AboutMeCardForHome({
  img,
  text,
  nameButton,
  nameCard,
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
          sx={{
            textAlign: "center",
            marginTop: "10px",
            fontSize: "30px",
            fontWeight: "700",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {nameCard}
        </Typography>
        <CardMedia component="img" height="200" src={img} alt="" />
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              color: "#000",
            }}
          >
            {text}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              bgcolor: " #0336FF",
              padding: "20px 2rem 20px 2rem",
              marginBottom: "7px",
            }}
            variant="contained"
            disableElevation
          >
            {nameButton}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
