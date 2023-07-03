import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./pages/Video/Video";
import Upload from "./pages/Upload/Upload";
import axios from "axios";
import { useEffect, useState } from "react";

const url="https://project-2-api.herokuapp.com"
const key="73d1ea59-3dc3-4c54-b026-571cbed0de95"
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Video  />} />
          <Route path="/" element={<Video />} />
          <Route path="/Upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
