import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Layout Types
import DashboardLayout from "./layouts/Dashboard";

// Route Views
import Home from "./views/dashboard/Home";

// Context
import AuthContext from "./context/AuthContext";

const App = () => {
  return (
    <AuthContext.Provider
      value={{
        user: true,
      }}
    >
      <BrowserRouter basename={process.env.REACT_APP_BASENAME || ""}>
        <Routes>
          <Route
            path="/"
            exact={true}
            element={<Navigate to="/home" replace />}
          />
          <Route
            path="/home"
            exact={true}
            element={
              <DashboardLayout>
                <Home />
              </DashboardLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
