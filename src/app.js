import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍟": "french fries",
  "🌭": "hot-dog",
  "🍦": "soft ice-cream",
  "🍕": "pizza",
  "🍨": "Icecream",
  "🍿": "Popcorn",
  "🎂": "Birthdaycake",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🍰": "shortcake"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    const message = Object.values(emojiDictionary).find(
      (item) => item === userInput
    );
    console.log(message);

    if (message === undefined) {
      setMeaning("we don't have this in our database");
    } else {
      setMeaning(message);
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji Interpreter </h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> emojis we know </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontsize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
