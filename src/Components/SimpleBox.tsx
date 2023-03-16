import { Signal } from "@preact/signals-react";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { useEffect } from "react";

function between(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const SimpleBox = ({
  id,
  value,
  selected,
}: {
  id?: number;
  value?: number | Signal<number>;
  selected?: boolean;
}) => {
  const x = useMotionValue(0);

  useEffect(() => {
    animate(x, 100, {
      ease: "easeInOut",
      duration: between(1, 4),
      repeat: Infinity,
      repeatType: "reverse",
    });
  }, []);

  const randX = useTransform(
    x,
    [0, 25, 50, 100, 125],
    [
      between(20, 50),
      between(-10, 10),
      between(-20, -50),
      between(-10, 10),
      between(20, 50),
    ]
  );

  return (
    <motion.div
      className={`h-[150px] w-[150px]  ${
        selected ? "bg-red-500" : "bg-teal-500"
      } align mx-[50px] my-2 flex items-center justify-center`}
      style={{ x: randX }}
    >
      <>
        <b>ID {id}</b>: {value}
      </>
    </motion.div>
  );
};
