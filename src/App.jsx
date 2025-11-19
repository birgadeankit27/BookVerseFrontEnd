
import React from "react";
import Header from "./components/layout/Header";
import { Button } from './components/common/Button';
import React from 'react'

import Register from "./pages/RegisterPage";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Register />
      <Footer />
    </>
  );
}
