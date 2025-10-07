import React, { useState, useEffect } from "react";

const CounterCard = ({
  number,
  title,
  bgColor,
  textColor,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = number / (duration / 20);
    const counter = setInterval(() => {
      start += increment;
      if (start >= number) {
        start = number;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(counter);
  }, [number, duration]);

  return (
    <div className={`rounded-lg p-8 ${bgColor}`}>
      <div className={`text-4xl font-bold ${textColor}`}>{count}</div>
      <h3 className="mt-4 text-xl font-semibold text-gray-700">{title}</h3>
    </div>
  );
};

export default CounterCard;
