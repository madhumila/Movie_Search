import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container"></div>
        <Routes>
          <Route path="/Movie_Search" element={<Home/>} />
          <Route path="/Movie_Search/movie/:imdbID" Component={MovieDetail} />
          <Route Component={PageNotFound} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
