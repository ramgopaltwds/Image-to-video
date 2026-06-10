import { Image } from "react-konva";
import useImage from "use-image";

function BackgroundElement({ src }) {
  const [image] = useImage(src);

  return (
    <Image
      image={image}
      width={1080}
      height={800}
    />
  );
}

export default BackgroundElement;