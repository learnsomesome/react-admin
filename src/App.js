import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./views/Home";
import About from "./views/About";

const App = () => {
  return (
    <div className="test">
      <h2>test</h2>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
