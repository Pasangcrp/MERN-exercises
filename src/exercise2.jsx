import { useState } from "react";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percent, setPercent] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  const handleTotal = () => {
    const newTotal = good + neutral + bad;
    setTotal(newTotal);
    setPercent({
      good: (good / newTotal) * 100,
      neutral: (neutral / newTotal) * 100,
      bad: (bad / newTotal) * 100,
    });
  };

  return (
    <div>
      <h1>Exercise 2</h1>
      <h3>Give Feedback</h3>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <button onClick={handleTotal}>setTotal</button>
      <h3>Statistics</h3>
      <h4>Good: {good}</h4>
      <h4>Neutral: {neutral}</h4>
      <h4>Bad: {bad}</h4>
      <h4>Total: {total}</h4>

      <h3>In percent :</h3>
      <h3>Good: {percent.good.toFixed(2)}%</h3>
      <h3>Neutral: {percent.neutral.toFixed(2)}%</h3>
      <h3>Bad: {percent.bad.toFixed(2)}%</h3>
    </div>
  );
};

export default App;
