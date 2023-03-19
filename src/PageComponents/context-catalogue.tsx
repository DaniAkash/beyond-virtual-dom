import { createContext, useContext, useMemo, memo, useState } from "react";
import { AnimateBox } from "../Components/AnimateBox";

const SelectedBoxContext = createContext({
  id: 0,
  value: 0,
  setId: (id: number) => null,
  setValue: (value: number) => null,
});

function Text() {
  const { id, value } = useContext(SelectedBoxContext);
  return (
    <>
      ID: {id}: {value}
    </>
  );
}

const AnimatedBox = ({ id }: { id: number }) => {
  const { id: selectedID } = useContext(SelectedBoxContext);

  const text = useMemo(
    () => (selectedID === id ? <Text /> : <>ID: {id}</>),
    [id, selectedID]
  );

  return (
    <AnimateBox id={id} selected={id === selectedID}>
      {text}
    </AnimateBox>
  );
};

export const ContextCatalogue = () => {
  const [id, setId] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <SelectedBoxContext.Provider
      value={{
        id,
        setId,
        value,
        setValue,
      }}
    >
      <div className="h-[100vh] w-[100vw]">
        <div>
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
            <span className="mr-3">Selected ID:</span>
            <input
              className="border-2 border-black"
              type={"text"}
              value={id}
              onChange={(e) => setId(parseInt(e.target.value, 10))}
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap">
          {Array(100)
            .fill(0)
            .map((each, eachIndex) => {
              return <AnimatedBox id={eachIndex} />;
            })}
        </div>
      </div>
    </SelectedBoxContext.Provider>
  );
};
