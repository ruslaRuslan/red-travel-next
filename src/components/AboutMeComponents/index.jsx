import { Grid } from "@mui/material";
import * as React from "react";
import AboutMeCardForHome from "./AboutMeCardForHome";
export default function AboutMeComponents() {
  return (
    <>
      <Grid>
        <AboutMeCardForHome
          img="/images/rectangle33.png"
          nameCard="About Me"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in vel
          massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat eget
          et lorem est arcu. Gravida hendrerit sit blandit semper lacus. Nulla
          amet suscipit sit lectus tortor. Dolor non eget suspendisse leo
          scelerisque sed d."
          nameButton="Read More"
        />
      </Grid>
    </>
  );
}
