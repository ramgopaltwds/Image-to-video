import { Rect } from "react-konva";

function ShapeElement({
  x = 100,
  y = 100,
  width = 200,
  height = 100
}) {
  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      stroke="black"
      strokeWidth={2}
      draggable
    />
  );
}

export default ShapeElement;