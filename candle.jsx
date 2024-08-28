import { useState, useEffect } from "react";

const Candle = ({ initialHeight }) => {
  const [height, setHeight] = useState(initialHeight);

  useEffect(() => {
    const timer = setInterval(() => {
      if (initialHeight <= 100 && initialHeight >= 10) {
        setHeight((prevHeight) => {
          const newHeight = prevHeight - 5;
          return newHeight >= 10 ? newHeight : 100;
        });
      }
    }, 2000);

    return () => {
      clearInterval(timer);
      console.log("Cleanup function ran");
    };
  }, []);

  return (
    <div className="exercise">
      <div className="candleContainer">
        <div className="candle" style={{ height: `${height}%` }}>
          <div className="flame">
            <div className="shadows" />
            <div className="top" />
            <div className="middle" />
            <div className="bottom" />
          </div>
          <div className="wick" />
          <div className="wax" />
        </div>
      </div>
      <p>Current candle height: {height}px</p>
    </div>
  );
};

const App = () => {
  return <Candle initialHeight={100} />;
};

export default App;
