import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDocumentsApi, fetchDocumentsDetailApi } from "../Api/Api";

const initialState = {
  list: [],
  documentDetail:{},
  status: "idle",
  error: null,
};

export const fetchDocuments = createAsyncThunk(
  "documents/fetchDocuments",
  async () => {
    const response = await fetchDocumentsApi();
    return response;
  }
);
export const fetchDocumentsDetail = createAsyncThunk(
  "documents/fetchDocumentsDetail",
  async (documentId) => {
    console.log(documentId,"nnn")
    const response = await fetchDocumentsDetailApi(documentId);
    return response;
  }
);

// fetchDocumentsDetailApi
const documentSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDocuments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchDocuments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDocumentsDetail.pending, (state) => {
        state.detailStatus = "loading";
      })
      .addCase(fetchDocumentsDetail.fulfilled, (state, action) => {
        state.detailStatus = "succeeded";
        state.documentDetail = action.payload;
      })
      .addCase(fetchDocumentsDetail.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default documentSlice.reducer;
