import { useRef } from "react";

import template from "../../templates/birthday1.json";
import useExport from "../../hooks/useExport";

import StageWrapper from "./StageWrapper";
import LayerManager from "./LayerManager";
import Toolbar from "../Toolbar/Toolbar";

function CanvasEditor() {
  const stageRef = useRef();
 const { exportPNG } = useExport(stageRef);
 
  return (
    <div>
 
      <Toolbar
        exportPNG={exportPNG}
        template={template}
      />

      <StageWrapper stageRef={stageRef}>
        <LayerManager template={template} />
      </StageWrapper>
    </div>
  );
}

export default CanvasEditor;