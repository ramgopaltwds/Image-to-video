import { Text } from "react-konva";

function TextElement({ element }) {
  return (
    <Text
      text={element.text}
      x={element.x}
      y={element.y}
      fontSize={element.fontSize || 40}
      fontFamily="Arial"
      draggable
    />
  );
}

export default TextElement;