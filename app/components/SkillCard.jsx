"use client";

import {
  Typography,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import Link from "next/link";

export default function SkillCard({ name, description, sx, image, projects }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={sx} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {projects.map((project) => (
          <Link key={project.name} href={project.url}>
            <Button size="small">{project.name}</Button>
          </Link>
        ))}
      </CardActions>
    </Card>
  );
}
