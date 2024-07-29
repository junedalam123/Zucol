import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import useDownloadPdf from "../CustomHooks/useDownload";

const DocumentItem = React.memo(({ doc }) => {
  const handleDownload = useDownloadPdf(doc);


  return (
    <Card sx={{ maxWidth: 345, minHeight: 320 }}>
      <CardMedia
        component="img"
        height="140"
        image={doc?.image}
        alt={doc?.category}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {doc?.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {doc?.description?.substr(0, 80) + ".........."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDownload}>
          Download as PDF
        </Button>
        <NavLink to={`/documents/${doc.id}`} style={{ textDecoration: "none" }}>
          <Button size="small">More Info</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
});

export default DocumentItem;
