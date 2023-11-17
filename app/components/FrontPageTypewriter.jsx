"use client";

import { Container, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";

const strings = ["Subtitle One", "Subtitle Two"];

export default function NameTypewriter() {
  const [subtitleVisible, setSubtitleVisiblity] = React.useState(false);

  const startSubtitle = (state) => {
    setSubtitleVisiblity(true);
    state.elements.cursor.style.display = "none";
  };

  return (
    <Container
      sx={{ height: { sm: "11em", md: "8em" } }}
      className="text-center"
    >
      <Typography variant="h2" component="h1">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello")
              .pauseFor(500)
              .typeString(" World!")
              .pauseFor(500)
              .start()
              .callFunction(startSubtitle);
          }}
        />
      </Typography>
      <Typography variant="h5" component="span">
        {subtitleVisible ? (
          <Typewriter
            options={{
              strings: strings,
              autoStart: true,
              loop: true,
            }}
          />
        ) : null}
      </Typography>
    </Container>
  );
}
