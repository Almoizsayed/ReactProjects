import reactLogo from "./assets/react.svg";
import Hello from "./Components/Hello";

function App() {
  const person = {
    name: "Almoiz",
    message: "You are doing Excellent",
    seatnumber: [1, 9, 8],
  };

  return (
    <div className="App">
      <Hello person={person} />
    </div>
  );
}

export default App;
