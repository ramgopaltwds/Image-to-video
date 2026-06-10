import { Image } from "react-konva";
import useImage from "use-image";

function StickerElement({
  src,
  x,
  y,
  width = 120,
  height = 120
}) {
  const [image] = useImage(src);

  return (
    <Image
      image={image}
      x={x}
      y={y}
      width={width}
      height={height}
      draggable
    />
  );
}

export default StickerElement;