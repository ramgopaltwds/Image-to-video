import { useState } from "react";

function TextPanel({ onAddText }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text) return;

    onAddText(text);

    setText("");
  };

  return (
    <div>
      <h3>Add Text</h3>

      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button onClick={handleAdd}>
        Add Text
      </button>
    </div>
  );
}

export default TextPanel;