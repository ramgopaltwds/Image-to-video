import { Stage } from "react-konva";

function StageWrapper({ children, stageRef }) {
  return (
    <Stage
      ref={stageRef}
      width={1080}
      height={800}
    >
      {children}
    </Stage>
  );
}

export default StageWrapper;