import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path={["/", "portfolio"]}>
          <Portfolio />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
