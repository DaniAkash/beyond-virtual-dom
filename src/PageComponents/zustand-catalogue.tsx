import { SimpleBox } from "../Components/SimpleBox";
import { create } from "zustand";

const useBoxData = create<{
  id: number;
  value: number;
  setId: (id: number) => void;
  setValue: (value: number) => void;
}>((set) => ({
  id: 0,
  value: 0,
  setId: (id: number) => set({ id }),
  setValue: (value: number) => set({ value }),
}));

const AnimatedBox = ({ id }: { id: number }) => {
  const selectedValue = useBoxData((state) => {
    if (id !== state.id) return -1;
    return state.value;
  });
  const selectedId = useBoxData((state) => {
    if (id !== state.id) return -1;
    return state.id;
  });

  if (selectedId === id) {
    return <SimpleBox id={id} selected={true} value={selectedValue} />;
  }
  return <SimpleBox id={id} />;
};

const InputFields = () => {
  const { id, value, setId, setValue } = useBoxData();

  return (
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
          type={"text"}
          value={id}
          onChange={(e) => setId(parseInt(e.target.value, 10))}
        />
      </div>
    </div>
  );
};

export const ZustandCatalogue = () => {
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
