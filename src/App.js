import React, { useEffect } from 'react';
import './App.css';
import DocumentList from './Pages/DocumentList';
import DocumentViewer from './Pages/DocumentViewer';
import LoginForm from './Pages/Login';
import AuthRoute from './Component/AuthRoute';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUserFromStorage } from "./Redux/AuthSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <AuthRoute type="public">
                <LoginForm />
              </AuthRoute>
            }
          />
          <Route
            path="/documents"
            element={
              <AuthRoute type="private">
                <DocumentList />
              </AuthRoute>
            }
          />
          <Route
            path="/documents/:id"
            element={
              <AuthRoute type="private">
                <DocumentViewer />
              </AuthRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
