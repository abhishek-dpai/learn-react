import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ToDoItems from "./components/ToDoItems";
function App() {
  return (
    <div>
      <ToDoItems />
    </div>
  );
}
// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
