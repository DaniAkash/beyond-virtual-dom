import { useState, startTransition, useEffect } from "react";
// @ts-ignore
import { block } from "million/react";

function Display({
  count,
  i,
  multiplier,
}: {
  count: number;
  i: number;
  multiplier: number;
}) {
  // props have special values, do not directly mutate / interpolate
  // Display must be a stateless component to be optimized
  return (
    <div>
      <div>
        {i} * {count} = {multiplier}
      </div>
      <div>
        {Array(100)
          .fill(0)
          .map((_, i) => (
            <div>
              <div></div>
            </div>
          ))}
      </div>
    </div>
  );
}

const DisplayBlock = block(Display);

export const BlockCounter = () => {
  const [count, setCount] = useState(0);
  const [clickTime, setClickTime] = useState(Date.now());
  const [renderTime, setRenderTime] = useState(Date.now());
  const [averageTime, setAverageTime] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const currentRenderTime = (Date.now() - clickTime) / 1000;
    setRenderTime(currentRenderTime);
    if (clickCount) {
      setAverageTime(
        (prev) => (prev * (clickCount - 1) + currentRenderTime) / clickCount
      );
    }
  }, [clickTime]);

  return (
    <div className="flex flex-col items-center">
      {clickCount ? (
        <>
          Took: {renderTime}s
          <br />
          Average: {averageTime}s
        </>
      ) : null}
      <br />
      <br />
      <br />
      <div>Count: {count}</div>
      <br />
      <button
        onClick={() => {
          startTransition(() => {
            setCount(count + 1);
            setClickTime(Date.now());
            setClickCount(clickCount + 1);
          });
        }}
      >
        Increment
      </button>
      <br />
      <br />
      <div>
        {Array(2000)
          .fill(0)
          .map((_, i) => {
            return (
              <DisplayBlock
                key={i.toString()}
                i={i}
                count={count}
                multiplier={i * count}
              />
            );
          })}
      </div>
    </div>
  );
};
