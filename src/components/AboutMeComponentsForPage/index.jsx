import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import styles from "./index.module.css";
import { imagesData } from "./AboutMeComponentsDataImg";

const AboutMeComponentsForPage = () => {
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
            backgroundImage: 'url("/images/rectangle388(1).png")',
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
              paddingTop: "22rem",
            }}
          >
            About us
          </Typography>
        </Grid>
      </Grid>

      <Container>
        <Grid
          container
          justifyContent="space-between"
          spacing={5}
          sx={{
            marginTop: "3rem",
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "400",
              }}
            >
              Hey, We are the Red Explorers Brief History{" "}
              <span
                style={{
                  color: "#FFA500",
                }}
              >
                About Us.
              </span>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor
              mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas
              magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam
              elementum at velit viverra mattis. Eleifend enim, praesent eu, leo
              semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus
              morbi volutpat ante. Adipiscing mauris{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              marginTop: "4rem",
            }}
          >
            <Box>
              <CardMedia
                component="img"
                width="100%"
                image="/images/image1.png"
                alt="green iguana"
              />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet
                sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar
                dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna.
                Pharetra, tortor pharetra vitae rhoncus. Nisl quam massa sapien
                tempor semper. Hac tempus pellentesque nibh duis ultrices.
                Senectus sagittis id ullamcorper mi eget pellentesque egestas.
                In ut sollicitudin ut orci volutpat egestas fermentum. Sit
                turpis diam risus leo bibendum neque, quis in vitae.
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Praesent enim augue tellus vitae placerat purus pretium at
                massa. Aliquet a malesuada eget posuere. Pellentesque euismod
                nulla praesent rhoncus.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          marginTop: "5rem",
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography variant="h3" gutterBottom>
                Our Story
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet
                sit arcu id. In libero, nibh at malesuada nunc faucibus.{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet
                sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar
                dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna.
                Pharetra, tortor pharetra vitae rhoncus.
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet
                sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar
                dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna.
                Pharetra, tortor pharetra vitae rhoncus.
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet
                sit arcu id. In libero.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography variant="h3" gutterBottom>
                Who Are Red Explorers
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet
                sit arcu id. In libero, nibh at malesuada nunc faucibus.{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet
                sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar
                dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna.
                Pharetra, tortor pharetra vitae rhoncus.
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet
                sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar
                dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna.
                Pharetra, tortor pharetra vitae rhoncus.
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet
                sit arcu id. In libero.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          marginTop: "5rem",
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography variant="h3" gutterBottom>
                About Our Cameraman
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet
                sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar
                dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna.
                Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Facilisis ut natoque
                imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In
                libero, nibh at malesuada nunc faucibus pulvinar dolor tellus.
                Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor
                pharetra vitae rhoncus.
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet
                sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar
                dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna.
                Pharetra, tortor pharetra vitae rhoncus.
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet
                sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar
                dolor tellus.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography variant="h3" gutterBottom>
                What you’ll Learn Here
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet
                sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar
                dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna.
                Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Facilisis ut natoque
                imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In
                libero, nibh at malesuada nunc faucibus pulvinar dolor tellus.
                Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor
                pharetra vitae rhoncus.
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "40px",
                  margin: "3rem 0 3rem 0",
                }}
              >
                On Our Website You’ll find:
              </Typography>

              <ul className={styles.ul}>
                <li> Lorem ipsum dolor sit amet, consectetur.</li>
                <li> Lorem ipsum dolor sit amet, consectetur.</li>
                <li> Lorem ipsum dolor sit amet, consectetur.</li>
                <li> Lorem ipsum dolor sit amet, consectetur.</li>
                <li> Lorem ipsum dolor sit amet, consectetur.</li>
                <li> Lorem ipsum dolor sit amet, consectetur.</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Grid
        container
        sx={{
          bgcolor: "#EDEDED",
          padding: "3rem 0 3rem 0",
          justifyContent: "center",
        }}
        gap={5}
      >
        {imagesData.map(({ id, img }) => {
          return (
            <Grid
              sx={{
                maxWidth: "300px",
                mx: "auto",
              }}
              item
              xs={12}
              sm={3}
              md={2}
            >
              <Card key={id}>
                <CardMedia width="100%" component="img" image={img} alt="" />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default AboutMeComponentsForPage;
