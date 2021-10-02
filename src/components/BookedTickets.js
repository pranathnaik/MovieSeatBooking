import { useLocation } from "react-router";
const BookedTickets = (props) => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h2>Book Tickets</h2>
      <hr></hr>
      <div>
        <h4>SubTotal Rs . {state.sbt}</h4>
        <h4>Service Tax @14% Rs . {state.st}</h4>
        <h4>Swachh Bharat cess @0.5% Rs . {state.sbc}</h4>
        <h4>Krishi Kalyan Cess @0.5% . {state.kyc}</h4>
        <h4>Total: Rs . {state.t}</h4>
      </div>
    </div>
  );
};

export default BookedTickets;
