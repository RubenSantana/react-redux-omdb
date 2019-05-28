import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import AboutPage from "./components/about/AboutPage";
import PageNotFound from "./components/PageNotFound";
import HomePage from "./components/home/HomePage";
import MovieDetailsPage from "./components/movieDetails/MovieDetailsPage";

function App() {
  return (
    // <div className="container-fluid">
    <div className="App">
      <header className="App-header">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/movieDetails/:slug" component={MovieDetailsPage} />
          <Route path="/movieDetails" component={MovieDetailsPage} />
          <Route component={PageNotFound} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
