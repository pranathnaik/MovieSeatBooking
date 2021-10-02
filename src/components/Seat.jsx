import shows from "../data/AudiData";
import "../App.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
const Seat = (props) => {
  const history = useHistory();

  const result = shows.filter((x) => x.showid == props.showid).map((x) => x);

  const [selectedseats, setSelectedSeats] = useState([]);
  const handleselectseat = (e) => {
    setSelectedSeats((oldseats) => {
      return [...oldseats, e];
    });
    console.log(selectedseats);
  };
  const handledeleteseat = (e) => {
    setSelectedSeats((oldseats) => {
      return oldseats.filter((a, index) => {
        return index != e;
      });
    });
    console.log(selectedseats);
  };

  const handlebooking = () => {
    var servicetax = 0;
    var subtotal = 0;
    var swachhbharatcess = 0;
    var krishikalyancess = 0;
    var total = 0;
    selectedseats.map((val) => {
      if (val.seatname[0] == "A") {
        subtotal += 320;
      }
      if (val.seatname[0] == "B") {
        subtotal += 280;
      }
      if (val.seatname[0] == "C") {
        subtotal += 240;
      }
    });
    console.log(subtotal);
    servicetax = (subtotal * 14) / 100;
    swachhbharatcess = (subtotal * 0.5) / 100;
    krishikalyancess = (subtotal * 0.5) / 100;
    total = subtotal + servicetax + swachhbharatcess + krishikalyancess;
    history.push({
      pathname: "/bookedtickets",
      state: {
        st: servicetax,
        sbt: subtotal,
        sbc: swachhbharatcess,
        kyc: krishikalyancess,
        t: total,
      },
    });
  };
  return (
    <div className="container">
      <div className="seatcontainer">
        {result.map((val) =>
          val.seats.map((val) =>
            val.seatstatus.map((val) => {
              let index;
              if (val.available == false) {
                for (var i = 0; i < selectedseats.length; i++) {
                  if (selectedseats[i].seatname == val.seatname) index = i;
                }
                return (
                  <div
                    onClick={() => {
                      val.available = true;
                      console.log(val);
                      handledeleteseat(index);
                    }}
                    className="seatbox2"
                  >
                    {val.seatname}
                  </div>
                );
              }
              return (
                <div
                  onClick={() => {
                    val.available = false;
                    handleselectseat(val);
                  }}
                  className="seatbox1"
                >
                  {val.seatname}
                </div>
              );
            })
          )
        )}
      </div>
      <h5>selected seats</h5>
      <div className="selectedseat">
        {selectedseats.map((val) => {
          if (val.available == false) {
            return <div className="selectedseatbox">{val.seatname}</div>;
          }
        })}
      </div>
      <button className="bookbutton" onClick={handlebooking}>
        book
      </button>
    </div>
  );
};
export default Seat;
