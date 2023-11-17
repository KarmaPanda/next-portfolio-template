"use client";

import { Container, Grid, IconButton, Typography } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

import "./Footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Grid container direction="column" alignItems="center">
          <Grid
            container
            direction="row"
            className="socials"
            alignItems="center"
            justifyContent="center"
          >
            <IconButton aria-label="LinkedIn" href="">
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="GitHub" href="">
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label="Email" href="">
              <MailIcon />
            </IconButton>
          </Grid>
          <Grid className="text-center" marginY={2}>
            <Typography variant="subtitle1" component="p">
              Copyright &copy; {new Date().getFullYear()}. Template created by{" "}
              <Link href="https://www.dlai.one/">Desmond Lai</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
