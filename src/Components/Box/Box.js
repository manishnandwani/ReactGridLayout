import { useRef } from "react";
import useIsInViewport from "../../hooks/useIntersection";
import styles from "./Box.module.css";

const Box = ({ number, height, width }) => {
  const boxRef = useRef("");
  const isInViewport = useIsInViewport(boxRef);

  if (isInViewport) console.log(`${number} WAS CALLED`);

  return (
    <div
      ref={boxRef}
      className={styles.container}
      style={{ width: width, height: height }}
    >
      {number}
    </div>
  );
};

export default Box;
