import { useState } from "react";
const App1 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Exercise 1</h1>
      <h3>Give Feedback</h3>

      <button onClick={handleGood}>good</button>

      <button onClick={handleNeutral}>neutral</button>

      <button onClick={handleBad}>bad</button>

      <h3>Statistics</h3>

      <h4>Good: {good}</h4>
      <h4>Neutral: {neutral}</h4>
      <h4>Bad: {bad}</h4>
    </div>
  );
};

export default App1;
