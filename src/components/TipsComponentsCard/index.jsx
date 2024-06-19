import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import { tipsProducts } from "./TipsComponentsData";

const TipsComponentsCard = () => {
  return (
    <>
      <Container
        sx={{
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        <Grid container spacing={5}>
          {tipsProducts.map(
            ({
              id,
              img,
              date,
              textCard,
              locationImg,
              location,
              commentImg,
              comment,
              starImg,
              star,
            }) => {
              return (
                <Grid item xs={12} sm={6} lg={4}>
                  <Card
                    key={id}
                    sx={{
                      borderRadius: "25px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="250"
                      image={img}
                      alt=""
                    />
                    <Typography
                      sx={{
                        color: "#6E7191",
                        fontSize: "18px",
                        fontWeight: "700",
                        padding: "15px 1rem 10px 1rem",
                      }}
                    >
                      {date}
                    </Typography>
                    <Typography
                      sx={{
                        bgcolor: "blue",
                        color: "#fff",
                        fontSize: 15,
                        fontWeight: "600",
                        padding: "1rem 0 1rem 5px",
                      }}
                    >
                      {textCard}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "1rem",
                        padding: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <Image
                          width={30}
                          height={30}
                          src={locationImg}
                          alt=""
                        />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "700",
                            paddingTop: "5px",
                            color: "#14142B",
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
                        <Image width={30} height={30} src={commentImg} alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "700",
                            paddingTop: "5px",
                          }}
                        >
                          {comment}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <Image width={30} height={30} src={starImg} alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "700",
                            paddingTop: "5px",
                          }}
                        >
                          {star}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              );
            }
          )}
        </Grid>
      </Container>
    </>
  );
};

export default TipsComponentsCard;
