import "./styles.css";
import ReactGridLayout from "./Components/ReactGridLayout/ReactGridLayout";

export default function App() {
  return (
    <div className="App">
      <ReactGridLayout columns={4} boxCount={133} />
    </div>
  );
}
