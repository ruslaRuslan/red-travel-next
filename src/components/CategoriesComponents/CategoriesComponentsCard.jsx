import { Card, CardContent, Typography } from "@mui/material";

export default function CategoriesComponentsCard({
  nameCard,
  europe,
  mountains,
  travelingVideo,
  beautyOfSeas,
  cuisine,
  guidesForTraveler,
  other,
  num,
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
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          {nameCard}
        </Typography>
        <CardContent>
          <Typography
            sx={{
              color: "#000",
              fontSize: "20px",
              fontWeight: "500",
              display: "flex",
              justifyContent: "space-between",
              margin: "15px 0",
            }}
          >
            {europe} <span>({num})</span>
          </Typography>

          <Typography
            sx={{
              color: "#000",
              fontSize: "20px",
              fontWeight: "500",
              display: "flex",
              justifyContent: "space-between",
              margin: "15px 0",
            }}
          >
            {mountains} <span>({num})</span>
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "20px",
              fontWeight: "500",
              display: "flex",
              justifyContent: "space-between",
              margin: "15px 0",
            }}
          >
            {travelingVideo} <span>({num})</span>
          </Typography>

          <Typography
            sx={{
              color: "#000",
              fontSize: "20px",
              fontWeight: "500",
              display: "flex",
              justifyContent: "space-between",
              margin: "15px 0",
            }}
          >
            {beautyOfSeas} <span>({num})</span>
          </Typography>

          <Typography
            sx={{
              color: "#000",
              fontSize: "20px",
              fontWeight: "500",
              display: "flex",
              justifyContent: "space-between",
              margin: "15px 0",
            }}
          >
            {cuisine} <span>({num})</span>
          </Typography>

          <Typography
            sx={{
              color: "#000",
              fontSize: "20px",
              fontWeight: "500",
              display: "flex",
              justifyContent: "space-between",
              margin: "15px 0",
            }}
          >
            {guidesForTraveler} <span>({num})</span>
          </Typography>

          <Typography
            sx={{
              color: "#000",
              fontSize: "20px",
              fontWeight: "500",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {other} <span>({num})</span>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
