import UndoRedo from "./UndoRedo";
import SaveButton from "./SaveButton";
import DownloadPNG from "./DownloadPNG";
import DownloadVideo from "./DownloadVideo";
import AddTextButton from "./AddTextButton";

function Toolbar({
  stageRef,
  template
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px",
        borderBottom:
          "1px solid #ddd"
      }}
    >

       <AddTextButton />
      <UndoRedo
        onUndo={() =>
          console.log("Undo")
        }
        onRedo={() =>
          console.log("Redo")
        }
      />

      <SaveButton
        data={template}
      />

      <DownloadPNG
        stageRef={stageRef}
      />

      <DownloadVideo />

     
    </div>
  );
}

export default Toolbar;