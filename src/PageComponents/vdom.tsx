import { useState, startTransition, useEffect } from "react";
import { useInterval } from "usehooks-ts";
import LagRadar from "react-lag-radar";

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

export const VCounter = () => {
  const [count, setCount] = useState(0);
  const [clickTime, setClickTime] = useState(Date.now());
  const [renderTime, setRenderTime] = useState(Date.now());
  const [averageTime, setAverageTime] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [isPlaying, setPlaying] = useState<boolean>(false);

  useInterval(
    () => {
      startTransition(() => {
        setCount(count + 1);
        setClickTime(Date.now());
        setClickCount(clickCount + 1);
      });
    },
    // Delay in milliseconds or null to stop it
    isPlaying ? 500 : null
  );

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
      <LagRadar size={100} />

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
          setPlaying((prev) => !prev);
        }}
      >
        {isPlaying ? "Stop" : "Start"} Timer
      </button>
      <br />
      <br />
      <div>
        {Array(2000)
          .fill(0)
          .map((_, i) => {
            return <Display i={i} count={count} multiplier={i * count} />;
          })}
      </div>
    </div>
  );
};
