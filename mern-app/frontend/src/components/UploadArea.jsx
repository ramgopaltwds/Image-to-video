import { useDropzone } from "react-dropzone";
import { useState } from "react";

export default function UploadArea({ setFile }) {
  const [preview, setPreview] = useState("");

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (!file) return;

    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className="dropzone"
    >
      <input {...getInputProps()} />

      {preview ? (
        <img
          src={preview}
          alt="preview"
          className="preview-image"
        />
      ) : (
        <p>
          Drag & Drop Image Here
        </p>
      )}
    </div>
  );
}