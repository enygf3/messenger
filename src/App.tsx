import React from 'react';
import PrivateWrapper from "./core/components/PrivateWrapper/PrivateWrapper";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import './app.sass'

function App() {
  return (
    <>
      <Routes>
          <Route element={<PrivateWrapper />}>
              <Route path="/" element={<HomePage />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
