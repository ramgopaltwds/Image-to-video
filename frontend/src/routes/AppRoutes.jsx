import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Editor from "../pages/Editor";
import ExportButton from "../components/Editor/ExportButton";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/editor/:id" element={<Editor />} />
        <Route path="/export" element={<ExportButton />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;