import React from "react";
import { Grid } from "@material-ui/core";

function Hero() {
  return (
    <div>
      <Grid>
        <Grid item xs={12}>
          <center>
            <h1
              style={{
                fontSize: "10vmin",
                marginTop: "50px",
                fontWeight: "800",
                fontFamily: "sans-serif",
                color: "#08c399",
              }}
            >
              <img
                src="https://img.icons8.com/pastel-glyph/2x/bullhorn-megaphone--v2.png"
                alt="horn"
              ></img>
              NEWS APPLICATION
            </h1>
          </center>
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
