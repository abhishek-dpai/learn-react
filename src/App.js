import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ToDoItem from "./components/ToDoItem";
import Joke from "./components/Joke";
import jokesData from "./jokesData";
// function App() {
//   const jokeComponent = jokesData.map((joke) => {
//     return (
//       <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
//     );
//   });
//   return <div>{jokeComponent}</div>;
// }
function App() {
  return jokesData.map((joke) => {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    );
  });
}
export default App;
