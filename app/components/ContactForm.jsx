"use client";

import {
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ContactForm() {
  const [confirmation, setConfirmation] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  async function onSubmit(event) {
    event.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    });

    if (response.status == 200) {
      setConfirmation(true);
    } else {
      setConfirmation(false);
    }
  }

  // src: https://codesandbox.io/s/assignment-121-animate-checkmark-solution-jggkm?file=/src/index.tsx:151-1191
  function CircularProgress({ progress }) {
    const circleLength = useTransform(progress, [0, 100], [0, 1]);
    const checkmarkPathLength = useTransform(progress, [0, 95, 100], [0, 0, 1]);
    const circleColor = useTransform(
      progress,
      [0, 95, 100],
      ["#FFCC66", "#FFCC66", "#66BB66"]
    );

    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="258"
        height="258"
        viewBox="0 0 258 258"
        style={{ alignSelf: "center" }}
      >
        {/* Check mark  */}
        <motion.path
          transform="translate(60 85)"
          d="M3 50L45 92L134 3"
          fill="transparent"
          stroke="#7BB86F"
          strokeWidth={8}
          style={{ pathLength: checkmarkPathLength }}
        />
        {/* Circle */}
        <motion.path
          d="M 130 6 C 198.483 6 254 61.517 254 130 C 254 198.483 198.483 254 130 254 C 61.517 254 6 198.483 6 130 C 6 61.517 61.517 6 130 6 Z"
          fill="transparent"
          strokeWidth="8"
          stroke={circleColor}
          style={{
            pathLength: circleLength,
          }}
        />
      </motion.svg>
    );
  }

  let progress = useMotionValue(90);

  return confirmation ? (
    <Grid
      container
      direction="column"
      className="text-center"
      alignContent="center"
      justifyContent="center"
      gap={5}
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        style={{ x: progress }}
        transition={{ duration: 1 }}
      />
      <CircularProgress progress={progress} />
      <Typography variant="h4" component="h2">
        Successfully sent message!
      </Typography>
      <Button
        onClick={() => setConfirmation(false)}
        variant="contained"
        sx={{ minWidth: "25vw", alignSelf: "center" }}
      >
        Return
      </Button>
    </Grid>
  ) : (
    <Grid
      container
      direction="column"
      alignContent="center"
      className="text-center"
      gap={4}
    >
      <Typography variant="h4" component="h2">
        Contact Me
      </Typography>

      <form onSubmit={onSubmit}>
        <Grid container direction="row" justifyContent="space-between" gap={3}>
          <Grid container item direction="column" gap={2} md={12} lg={4}>
            <FormControl>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                type="text"
                id="name"
                aria-describedby="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <FormHelperText id="name-text">required</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                type="email"
                id="email"
                aria-describedby="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormHelperText id="email-text">required</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="subject">Subject</InputLabel>
              <Input
                type="text"
                id="subject"
                aria-describedby="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <FormHelperText id="subject-text">required</FormHelperText>
            </FormControl>
          </Grid>
          <Grid container item direction="column" md={12} lg={7}>
            <FormControl>
              <TextField
                id="message"
                label="Message"
                multiline
                rows={7}
                value={message ? message : ""}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </FormControl>
            <FormHelperText id="message-text" style={{ alignSelf: "end" }}>
              required
            </FormHelperText>
          </Grid>
          <Grid container direction="column">
            <Button
              type="submit"
              variant="contained"
              sx={{ minWidth: "25vw", alignSelf: "center" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
