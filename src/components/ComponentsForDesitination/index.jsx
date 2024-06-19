import { Grid, Typography, Container } from "@mui/material";
import "./index.css";
import DestinationCard from "./DestinationCard";
import { destinationData, filterButtons } from "./destinationData";
import DestinationCardButton from "./DestinationCardButton";

const ComponentsForDesitination = () => {
  return (
    <>
      <Container
        sx={{
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid xs={12} sm={6} md={4}>
            <Typography
              sx={{
                fontSize: "64px",
                fontWeight: "700",
              }}
            >
              <span
                style={{
                  color: "#FFA500",
                }}
              >
                Where do{" "}
              </span>{" "}
              you want to go?
            </Typography>
          </Grid>

          <Grid xs={12} sm={6} md={4}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "40px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor
              mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas
              magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam
              elementum at velit viverra mattis.
            </Typography>
          </Grid>
        </Grid>
        <div
          class="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div
            class="btn-group me-2"
            role="group"
            aria-label="First group"
            style={{
              textAlign: "center",
              margin: "3rem 0 3rem 0",
            }}
          >
            {filterButtons.map(({ id, title }) => {
              return <DestinationCardButton id={id} key={id} title={title} />;
            })}
          </div>
        </div>
      </Container>

      <Container>
        <Grid container spacing={5}>
          {destinationData.map((props) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <DestinationCard key={props.id} {...props} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default ComponentsForDesitination;
