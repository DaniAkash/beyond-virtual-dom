import { SimpleBox } from "../Components/SimpleBox";
import { signal } from "@preact/signals-react";

const selectedBoxID = signal(0);
const selectedBoxValue = signal(0);

const AnimatedBox = ({ id }: { id: number }) => {
  if (id === selectedBoxID.value) {
    return <SimpleBox id={id} selected={true} value={selectedBoxValue} />;
  }
  return <SimpleBox id={id} />;
};

const InputFields = () => {
  return (
    <div>
      <span>Value of the content</span>
      <input
        type="range"
        min="1"
        max="10000"
        className="m-3 w-[50vw]"
        value={selectedBoxValue.value}
        onChange={(e) =>
          (selectedBoxValue.value = parseInt(e.target.value, 10))
        }
        id="myRange"
      />
      <div>
        <span className="mr-3">Selected ID:</span>
        <input
          type={"text"}
          value={selectedBoxID.value}
          onChange={(e) => (selectedBoxID.value = parseInt(e.target.value, 10))}
        />
      </div>
    </div>
  );
};

export const SignalCatalogue = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <InputFields />
      <div className="flex flex-row flex-wrap">
        {Array(100)
          .fill(0)
          .map((each, eachIndex) => {
            return <AnimatedBox id={eachIndex} />;
          })}
      </div>
    </div>
  );
};
