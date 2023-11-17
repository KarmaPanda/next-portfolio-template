import { Container, Grid, Typography } from "@mui/material";

export const metadata = {
  title: "Experiences",
};

export default function Experiences() {
  return (
    <main>
      <Grid container className="min-h-fit mb-10">
        <Container>
          <Grid container direction="column" gap={5}>
            <div className="text-center mt-20 my-5">
              <Typography variant="h2">Experiences</Typography>
              <Typography variant="h4">Work in progress...</Typography>
            </div>
          </Grid>
        </Container>
      </Grid>
    </main>
  );
}
