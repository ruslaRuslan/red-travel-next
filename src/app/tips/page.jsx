import TipsComponentsCard from "@/components/TipsComponentsCard";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Tips = () => {
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
            minHeight: "50vh",
            textAlign: "center",
            backgroundImage:
              'url("/images/pexels-tomas-anunziata-3876407 1.png")',
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
            Travel Tips
          </Typography>
        </Grid>
      </Grid>

      <Container
        sx={{
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        <Grid container justifyContent="space-around">
          <Grid item xs={12} md={6} lg={4}>
            <Typography
              sx={{
                fontSize: "64px",
                fontWeight: "700",
              }}
            >
              Maintaining your{" "}
              <span
                style={{
                  color: "#FFA500",
                }}
              >
                privacy
              </span>{" "}
              during travels.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Molestie aliquam sit lacus, sem vulputate sed magnis eu. Non nec
              at lobortis enim, feugiat fermentum lobortis gravida in. Tellus
              tincidunt amet, egestas sit. Feugiat faucibus eu magna dolor,
              turpis dignissim. Facilisis purus nibh vitae arcu. In tellus in
              amet nulla. Rutrum orci purus neque blandit cursus volutpat nisl
              morbi egestas. Adipiscing porta quis turpis ut nulla morbi. Varius
              id tempor, ipsum leo. vivamus rhoncus, augue risus. Ornare posuere
              scelerisque a at. Ut nunc neque at commodo nulla egestas eros.
              Ullamcorper a eu nulla diam nec pulvinar sit dui nec. Mauris sed
              vestibulum vitae massa. Ac morbi ut velit ac suscipit id.
              Venenatis scelerisque ut nam ultrices tortor integer. Odio
              ullamcorper rutrum{" "}
              <span style={{ color: "#FFA500" }}>read more</span>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <TipsComponentsCard />
    </>
  );
};

export default Tips;
