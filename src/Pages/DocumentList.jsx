import { Button, Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocuments } from "../Redux/DocumentSlice";
import { useEffect, useMemo, useState } from "react";
import DocumentItem from "../Component/DocumentsItem";
import SearchBar from "../Component/SearchBar";
import { logout } from "../Redux/AuthSlice";

const DocumentList = () => {
  const dispatch = useDispatch();
  const documents = useSelector((state) => state.documents.list);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) =>
      doc.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [documents, searchTerm]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container sx={{ marginTop: "50px" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={10}>
          <SearchBar onSearch={handleSearch} />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            sx={{ width: "100%", height: "50px" }}
            variant="contained"
            color="primary"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
        {filteredDocuments.map((doc) => (
          <Grid item xs={12} sm={6} md={4} key={doc.id}>
            <DocumentItem doc={doc} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DocumentList;
