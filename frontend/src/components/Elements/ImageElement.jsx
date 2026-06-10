import { Image } from "react-konva";
import useImage from "use-image";

function ImageElement({ element, src }) {
  const [image] = useImage(src);

  return (
    <Image
      image={image}
      x={element.x}
      y={element.y}
      width={element.width}
      height={element.height}
      draggable
    />
  );
}

export default ImageElement;