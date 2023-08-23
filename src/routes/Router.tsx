import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import SubmitPage from "../pages/SubmitPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
