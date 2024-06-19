import AboutMeComponentsForPage from "@/components/AboutMeComponentsForPage";
import Carousel2 from "@/components/Carousel2";
import MounthlyReaders from "@/components/MounthlyReaders";
import { Card, CardActionArea, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const AboutUs = () => {
  return (
    <>
      <AboutMeComponentsForPage />
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
              What About us?
              <span
                style={{
                  color: "#FFA500",
                }}
              >
                Customer says{" "}
              </span>
              About us?
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu
              id. In libero, nibh at malesuada nunc faucibus pulvinar dolor
              tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra,
              tortor pharetra vitae rhoncus.Lorem, Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Facilisis ut.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={5}
          sx={{
            marginTop: "3rem",
          }}
        >
          <Grid item xs={12} sm={4} md={4}>
            <Card
              sx={{
                height: "400px",
                width: "100%",
                borderRadius: "1rem",
              }}
            >
              <CardActionArea>
                <Box
                  sx={{
                    padding: "2rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "40px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Facilisis ut natoque
                    imperdiet faucibus.
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "20px",
                    }}
                  >
                    Joy Kim
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "1rem",
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "20px",
                    }}
                  >
                    explorer
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card
              sx={{
                height: "400px",
                width: "100%",
                borderRadius: "1rem",
              }}
            >
              <CardActionArea>
                <Box
                  sx={{
                    padding: "2rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "40px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Facilisis ut natoque
                    imperdiet faucibus.
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "20px",
                    }}
                  >
                    Joy Kim
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "1rem",
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "20px",
                    }}
                  >
                    explorer
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Card
              sx={{
                height: "400px",
                width: "100%",
                borderRadius: "1rem",
              }}
            >
              <CardActionArea>
                <Box
                  sx={{
                    padding: "2rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "40px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Facilisis ut natoque
                    imperdiet faucibus.
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "20px",
                    }}
                  >
                    Joy Kim
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: "1rem",
                      fontSize: "18px",
                      fontWeight: "700",
                      lineHeight: "20px",
                    }}
                  >
                    explorer
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Carousel2 />
      <MounthlyReaders />
    </>
  );
};
export default AboutUs;
