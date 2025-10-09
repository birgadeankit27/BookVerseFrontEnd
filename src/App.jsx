import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function App() {
  return (
   <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to My Vite + React + MUI App 🚀
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
}

