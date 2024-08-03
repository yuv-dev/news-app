import "./App.css";
import "./Custom.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import React from "react";

const App = () => {
  const pageSize = 9;
 

  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div className="App">
      <Navbar logo="News Feverr" />
      {/* <News pageSize={this.pageSize} country="in" category="general" /> */}

      <Routes>
        <Route
          path="/"
          element={<News apikey={apiKey} pageSize={pageSize} country="in" category="general" />}
        />
        <Route
          path="/sports"
          element={<News apikey={apiKey} pageSize={pageSize} country="in" category="sports" />}
        />
        <Route
          path="/entertainment"
          element={
            <News apikey={apiKey} pageSize={pageSize} country="in" category="entertainment" />
          }
        />
        <Route
          path="/business"
          element={
            <News apikey={apiKey} pageSize={pageSize} country="in" category="business" />
          }
        />
        <Route
          path="/health"
          element={<News apikey={apiKey} pageSize={pageSize} country="in" category="health" />}
        />
        <Route
          path="/science"
          element={<News apikey={apiKey} pageSize={pageSize} country="in" category="science" />}
        />
        <Route
          path="/technology"
          element={
            <News apikey={apiKey} pageSize={pageSize} country="in" category="technology" />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<About />} />
      </Routes>
    </div>
  );
};
export default App;
