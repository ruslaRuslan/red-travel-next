import Carousel from "@/components/Carousel";
import ComponentsForDesitination from "@/components/ComponentsForDesitination";
import MounthlyReaders from "@/components/MounthlyReaders";
import { Grid, Typography } from "@mui/material";

const Destination = () => {
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
            minHeight: "60vh",
            textAlign: "center",
            backgroundImage: 'url("/images/rectangle182.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "64px",
              fontWeight: "800",
              paddingTop: "15rem",
            }}
          >
            Destination
          </Typography>
        </Grid>
      </Grid>
      <ComponentsForDesitination />
      <Carousel />
      <MounthlyReaders />
    </>
  );
};

export default Destination;
