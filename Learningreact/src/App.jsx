import reactLogo from "./assets/react.svg";
import Hello from "./Components/Hello";

function App() {
  const seatnumbers = [1, 9, 8];

  return (
    <div className="App">
      <Hello name="Almoiz" message="How are You !" seatnumbers={seatnumbers} />
    </div>
  );
}

export default App;
