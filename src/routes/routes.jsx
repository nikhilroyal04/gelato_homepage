import React from "react";
import { Routes, Route } from "react-router-dom";
import FullLayouts from "../layouts/FullLayouts";
import Dashboard from "../components/Dashboard/Dashboard";

const Routing = () => {
  return (
    <Routes>

      <Route path="/" element={<FullLayouts />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Routing;
