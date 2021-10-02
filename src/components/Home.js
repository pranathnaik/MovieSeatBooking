import '../App.css';
import Seat from '../components/Seat'
import { useState, useEffect } from 'react';

const Home = () => {
  const [showid, setSeatId] = useState("")
  const selectedShow = (e) => {

    setSeatId(e.target.value)

  }

  return (

    <div className="App">
      <h2> Book tickets</h2>
      <hr />
      <h3>Select Show :</h3>
      <div className="Selectoption">

        <input onChange={selectedShow} value="show1" type="radio" name="show1" id="show1" />show1
        <input onChange={selectedShow} value="show2" type="radio" name="show1" id="show1" />show2
        <input onChange={selectedShow} value="show3" type="radio" name="show1" id="show1" />show3

      </div>
     
       
      <Seat showid={showid} />


    </div>
   
  );
}

export default Home;
