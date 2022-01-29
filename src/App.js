import './App.css';
import {PrimaryButton, SecondaryButton} from "./core"

function App() {
  return (
    <div className="App">
      <PrimaryButton title="Login" onPress={() => {}} textColor={"white"} bgColor={"blue"} />
      <SecondaryButton title="Signup" onPress={() => {}} textColor={"white"} bgColor={"red"} />
    </div>
  );
}

export default App;