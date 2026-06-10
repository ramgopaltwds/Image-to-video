import { useState } from "react";

function UploadPanel({ onUpload }) {
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);

    if (onUpload) {
      onUpload(imageUrl);
    }
  };

  return (
    <div>
      <h3>Upload Photo</h3>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      {preview && (
        <img
          src={preview}
          width="150"
          alt="preview"
        />
      )}
    </div>
  );
}

export default UploadPanel;