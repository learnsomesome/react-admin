import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./views/Home";
import About from "./views/About";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
