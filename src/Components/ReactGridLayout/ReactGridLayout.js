import Box from "../Box/Box";
import styles from "./ReactGridLayout.module.css";
import numberToWords from "../../utils/numberToWords";

const ReactGridLayout = ({ columns, boxCount }) => {
  const boxList = numberToWords(boxCount);

  const height = `calc(25vh - 60px)`;

  const boxWidth = parseInt(100 / columns);
  const width = `calc(${boxWidth}% - 60px)`;

  return (
    <div className={styles.listItems}>
      {boxCount > 0 &&
        boxList.map((number) => (
          <Box key={number} height={height} width={width} number={number} />
        ))}
    </div>
  );
};

export default ReactGridLayout;
