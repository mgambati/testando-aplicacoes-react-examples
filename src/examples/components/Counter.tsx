import { FC, useState } from "react";

export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div id='count-result'>Count: {count}</div>
      <div>
        <button onClick={() => setCount((state) => state + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((state) => state - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};
