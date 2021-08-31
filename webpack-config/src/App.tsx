import React from 'react';
import './style';
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Counter from '@/pages/Counter';
import Home from '@/pages/Home';


export default function App(): React.ReactElement {

  return (
    <>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact><Home></Home></Route>
          <Route path="/counter"><Counter initCount={0}></Counter></Route>
        </Switch>
      </Router>
    </>
  );
}
