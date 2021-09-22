import React, { useEffect, useState } from "react";

import { Range, ReactSlider } from "react-range";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Components
import Project from "./components/Project";
import Results from "./components/Results";

// Routes
import { Route, Switch } from "react-router-dom";

import { registerUser } from "./utils/api";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/login";
function App() {
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    registerUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center ">
      <Header />

      <main className="w-full px-10 p-3 flex-1 flex flex-col item-center justify-center">
        <Switch>
          <Route path="/register">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Project setIsSubmit={setIsSubmit} />
            {isSubmit && <Results />}
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
