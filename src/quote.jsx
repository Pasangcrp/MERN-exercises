import { useState } from "react";

const App5 = () => {
  let quotes = [
    `The only way to do great work is to love what you do.`,
    "Be the change you wish to see in the world.",
    "In the middle of difficulty lies opportunity.",
    "Life is what happens when you're busy making other plans.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(0, 0, 0, 0, 0, 0);

  const highest = Math.max(...points);
  const highestIndex = points.indexOf(highest);

  const nextQuote = () => {
    if (selected === quotes.length + 1) {
      setSelected(0);
    } else {
      selected(selected + 1);
    }
  };

  const vote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  return (
    <div>
      <h1>Exercise 5</h1>
      <h2>QUOTE OF THE DAY</h2>
      <p>{quotes[highestIndex]}</p>
      <button onClick={vote}>Vote</button>
      <button onClick={{ nextQuote }}>Next quote</button>
      <h1>QUOTES</h1>
      <p>{quotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={{ vote }}>Vote</button>
      <button onClick={nextQuote}>Next Quote</button>
    </div>
  );
};

export default App5;
