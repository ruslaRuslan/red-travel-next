import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Image from "next/image";
import styles from "./index.module.css";
import {
  TravelJulySemptemberData,
  fourCard,
  intoNaturesWild,
  twoCard,
} from "./TravelJulySemptemberData";

export default function TravelJulySemptemberCard({
  img,
  date,
  countryTravel,
  text,
  locationImg,
  location,
  commentImg,
  comment,
  number,
}) {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <Card
            sx={{
              borderRadius: "0",
            }}
          >
            <Image
              width={700}
              height={400}
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />

            <Box
              sx={{
                padding: "1rem",
              }}
            >
              <Typography>{date}</Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "25px",
                  fontWeight: "600",
                  marginTop: "2rem",
                }}
              >
                {countryTravel}
              </Typography>

              <Typography
                sx={{
                  marginTop: "1rem",
                }}
              >
                {text}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
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
                    src={locationImg}
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
                    src={commentImg}
                    alt=""
                  />
                  <Typography
                    sx={{
                      paddingTop: "2rem",
                      paddingLeft: "10px",
                    }}
                  >
                    {comment}({number})
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        {twoCard.map(
          ({ id, img, date, title, locationImg, location, commentCount }) => {
            return (
              <>
                <Grid item xs={12} sm={6} md={6}>
                  <Card
                    key={id}
                    sx={{
                      borderRadius: "0",
                      height: "540px",
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: 300,
                      }}
                      image={img}
                    />

                    <Box
                      sx={{
                        padding: "1rem",
                      }}
                    >
                      <Typography>{date}</Typography>

                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "25px",
                          fontWeight: "600",
                          marginBottom: "2rem",
                        }}
                      >
                        {title}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
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
                            src={locationImg}
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
                            {comment} ({commentCount})
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              </>
            );
          }
        )}

        {intoNaturesWild.map(
          ({
            id,
            img,
            date,
            country,
            text,
            locationImg,
            location,
            commentImg,
            comment,
            commentCount,
          }) => {
            return (
              <Grid item xs={12} sm={12} md={12}>
                <Card
                  key={id}
                  sx={{
                    borderRadius: "0",
                  }}
                >
                  <Image
                    width={700}
                    height={400}
                    src={img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />

                  <Box
                    sx={{
                      padding: "1rem",
                    }}
                  >
                    <Typography>{date}</Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "25px",
                        fontWeight: "600",
                        marginTop: "2rem",
                      }}
                    >
                      {country}
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: "1rem",
                      }}
                    >
                      {text}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "2rem",
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
                          src={locationImg}
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
                          src={commentImg}
                          alt=""
                        />
                        <Typography
                          sx={{
                            paddingTop: "2rem",
                            paddingLeft: "10px",
                          }}
                        >
                          {comment} ({commentCount})
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          }
        )}

        <Grid item xs={12} sm={12} md={12}>
          <Card
            className={styles.placeOrderCard}
            sx={{
              width: "100%",
              minHeight: "450px",
              textAlign: "center",
              backgroundImage: 'url("/images/image18.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              borderRadius: "0",
            }}
          >
            <Typography
              className={styles.placeOrderCard}
              variant="h5"
              sx={{
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "2rem",
                color: "#fff",
                padding: "0 10px 0 10px",

                fontSize: "40px",
                fontWeight: "700",
                lineHeight: "46.98px",
              }}
            >
              Want{" "}
              <span
                style={{
                  color: "#FFA500",
                }}
              >
                Me to Purchase{" "}
              </span>
              Something For You That isn’t available in your Country?
            </Typography>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "7rem",
              }}
            >
              <Button
                className={styles.placeOrderCard}
                sx={{
                  bgcolor: " #0336FF",
                  padding: "20px 2rem 20px 2rem",
                  marginBottom: "7px",
                }}
                variant="contained"
                disableElevation
              >
                Place Order
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {fourCard.map(
          ({ id, img, date, title, locationImg, location, commentCount }) => {
            return (
              <Grid item xs={12} sm={6} md={6}>
                <Card
                  key={id}
                  sx={{
                    borderRadius: "0",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 300,
                    }}
                    image={img}
                  />

                  <Box
                    sx={{
                      padding: "1rem",
                    }}
                  >
                    <Typography>{date}</Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        marginBottom: "2rem",
                        fontWeight: "700",
                      }}
                    >
                      {title}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
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
                          src={locationImg}
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
                          {comment} ({commentCount})
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          }
        )}

        {intoNaturesWild.map(
          ({
            id,
            img,
            date,
            country,
            text,
            locationImg,
            location,
            commentImg,
            comment,
            commentCount,
          }) => {
            return (
              <Grid item xs={12} sm={12} md={12}>
                <Card
                  key={id}
                  sx={{
                    borderRadius: "0",
                  }}
                >
                  <Image
                    width={700}
                    height={400}
                    src={img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />

                  <Box
                    sx={{
                      padding: "1rem",
                    }}
                  >
                    <Typography>{date}</Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "25px",
                        fontWeight: "600",
                        marginTop: "2rem",
                      }}
                    >
                      {country}
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: "1rem",
                      }}
                    >
                      {text}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "2rem",
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
                          src={locationImg}
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
                          src={commentImg}
                          alt=""
                        />
                        <Typography
                          sx={{
                            paddingTop: "2rem",
                            paddingLeft: "10px",
                          }}
                        >
                          {comment} ({commentCount})
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          }
        )}

        {twoCard.map(
          ({ id, img, date, title, locationImg, location, commentCount }) => {
            return (
              <Grid item xs={12} sm={6} md={6}>
                <Card
                  key={id}
                  sx={{
                    borderRadius: "0",
                    height: "540px",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 300,
                    }}
                    image={img}
                  />

                  <Box
                    sx={{
                      padding: "1rem",
                    }}
                  >
                    <Typography>{date}</Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "25px",
                        fontWeight: "600",
                        marginBottom: "2rem",
                      }}
                    >
                      {title}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
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
                          src={locationImg}
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
                          {comment} ({commentCount})
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          }
        )}
      </Grid>
    </>
  );
}
