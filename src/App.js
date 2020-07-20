import React from 'react';
import ChoiceCard from "./components/ChoiceCard"
import './App.css';

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};

function App() {
  return <div className="App">
    <ChoiceCard title="You" winner={false} imgURL={choices.rock}></ChoiceCard>
    <ChoiceCard title="Computer" winner={true} imgURL={choices.paper}></ChoiceCard>
  </div>;
}

export default App;
