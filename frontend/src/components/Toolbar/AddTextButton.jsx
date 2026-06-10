import useEditorStore from "../../store/editorStore";

function AddTextButton() {
  const addElement = useEditorStore(
    (state) => state.addElement
  );

  const handleClick = () => {
    addElement({
      id: Date.now(),
      type: "text",
      text: "Happy Birthday",
      x: 100,
      y: 100,
      fontSize: 40,
    });
  };

  return (
    <button onClick={handleClick}>
      Add Text
    </button>
  );
}

export default AddTextButton;