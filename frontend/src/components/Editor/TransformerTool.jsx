import { Transformer } from "react-konva";

function TransformerTool({
  transformerRef
}) {
  return (
    <Transformer
      ref={transformerRef}
      rotateEnabled={true}
      enabledAnchors={[
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right"
      ]}
    />
  );
}

export default TransformerTool;