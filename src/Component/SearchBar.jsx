import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import useDebounce from "../CustomHooks/useDebounce";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000); // 500ms delay

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
      />
    </div>
  );
}

export default SearchBar;
