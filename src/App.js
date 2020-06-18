import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from "./pages/Home/Home.js"
import About from "./pages/About/About.js"
import Blog from "./pages/Blog/Blog.js"
import Post from "./pages/Post/Post.js"

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:slug" component={Post} />
        </Switch>
      </Router>
  );
}

export default App;
