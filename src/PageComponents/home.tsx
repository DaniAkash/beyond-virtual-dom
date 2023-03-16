import { useState } from "react";
import { SimpleBox } from "../Components/SimpleBox";

export const Home = () => {
  const [value, setValue] = useState(0);

  const [selected, setSelected] = useState(false);

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center">
      <span>Value of the content</span>
      <input
        type="range"
        min="1"
        max="10000"
        className="m-3 w-[50vw]"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value, 10))}
        id="myRange"
      />
      <div>
        <span className="mr-3">Is Selected: </span>
        <input
          type={"checkbox"}
          checked={selected}
          onChange={(e) => setSelected((prev) => !prev)}
        />
      </div>
      <SimpleBox id={0} value={value} selected={selected} />
    </div>
  );
};
