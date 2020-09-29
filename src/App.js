import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ToDoItems from "./components/ToDoItems";
function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  if (hours > 12) timeOfDay = "morning";
  else if (hours < 17) timeOfDay = "afternoon";
  else timeOfDay = "night";
  return (
    <div>
      <h1>{` ${date.getHours()}:${date.getMinutes()} `} !</h1>
      <h1>Good {timeOfDay} !</h1>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
