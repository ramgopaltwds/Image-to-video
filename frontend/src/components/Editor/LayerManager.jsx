import { Layer } from "react-konva";
import templates from "../../templates";
import TextElement from "../Elements/TextElement";
import ImageElement from "../Elements/ImageElement";
import BackgroundElement from "../Elements/BackgroundElement";
import useEditorStore from "../../store/editorStore";

function LayerManager({ template }) {

   const elements = useEditorStore(
    (state) => state.elements
  );

  return (
    <Layer>
      <BackgroundElement
        src={template.background}
      />

      {template.elements.map((element) => {
        if (element.type === "text") {
          return (
            <TextElement
              key={element.id}
              element={element}
            />
          );
        }

        if (element.type === "image") {
          return (
            <ImageElement
              key={element.id}
              element={element}
              src="/templates/birthday1/bg2.jpg"
            />
          );
        }

        return null;
      })}
    </Layer>
  );
}

export default LayerManager;