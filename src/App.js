import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import BookedTickets from './components/BookedTickets'
const App = () => {
  const [showid, setSeatId] = useState("")
  const selectedShow = (e) => {

    setSeatId(e.target.value)

  }

  return (
    <Router>
   
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bookedtickets">
          <BookedTickets />
        </Route>
        </Switch> 
    </Router>
  );
}

export default App;
