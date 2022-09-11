import React from 'react';
import {Route, Routes} from "react-router-dom";
import PrivateWrapper from "./core/components/PrivateWrapper/PrivateWrapper";
import HomePage from "./pages/home/HomePage";
import './app.sass'
import ChatPage from "./pages/chat/ChatPage";
import LoginPage from "./pages/login/Login";

function App() {
  return (
    <>
      <Routes>
          <Route element={<PrivateWrapper />}>
              <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<PrivateWrapper />}>
              <Route path="/chat" element={<ChatPage />} />
          </Route>
          <Route path='/login' element={<LoginPage />}/>
      </Routes>
    </>
  );
}

export default App;
