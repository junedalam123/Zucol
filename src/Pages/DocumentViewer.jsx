import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDocumentsDetail } from "../Redux/DocumentSlice";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Button,
} from "@mui/material";

const DocumentViewer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const document = useSelector((state) => state.documents.documentDetail);

  useEffect(() => {
    if (id) {
      dispatch(fetchDocumentsDetail(id));
    }
  }, [id, dispatch]);

  if (!document) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          width: { xs: "100%", sm: "50%" },
          p: 2,
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={4}>
            <CardMedia
              component="img"
              sx={{ width: { xs: "100%", sm: 150 }, height: 150 }}
              image={document.image}
              alt={document.category}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CardContent>
              <Typography variant="h5" component="div">
                {document.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {document.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "15px" }}
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default DocumentViewer;
