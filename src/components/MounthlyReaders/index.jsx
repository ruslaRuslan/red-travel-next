import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const MounthlyReaders = ({}) => {
  return (
    <>
      <Container>
        <Box
          sx={{
            margin: "3rem 0",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Join{" "}
                <span
                  style={{
                    color: "#0336FF",
                  }}
                >
                  98,641
                </span>{" "}
                Monthly Readers. Subscribe Today!
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              container
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <TextField
                id="outlined-basic"
                label="Email Address"
                type="email"
                variant="outlined"
                sx={{ width: { xs: "100%", md: "auto" } }}
              />
              <Button
                variant="contained"
                href="#contained-buttons"
                sx={{
                  padding: "0.9rem",
                  marginLeft: { xs: "0", md: "1rem" },
                  marginTop: { xs: "1rem", md: "0" },
                  bgcolor: "#0336FF",
                }}
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

{
}
export default MounthlyReaders;
