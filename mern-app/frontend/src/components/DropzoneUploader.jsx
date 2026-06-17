// src/components/DropzoneUploader.jsx
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DropzoneUploader({ onFileSelect }) {
  const [preview, setPreview] = useState(null);

  const onDrop = (files) => {
    const file = files[0];

    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error("File too large (max 10MB)");
      return;
    }

    if (!file.type.startsWith("image/")) {
      toast.error("Only images allowed");
      return;
    }

    setPreview(URL.createObjectURL(file));
    onFileSelect(file);
    toast.success("Image uploaded");
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed p-6 rounded-xl text-center cursor-pointer  transition ${
        isDragActive ? "border-black bg-gray-100" : "border-gray-300"
      }`}
    >
      <input {...getInputProps()} />

      {preview ? (
        <img src={preview} className="max-h-36 mx-auto rounded" />
      ) : (
        <p className="text-gray-500">
          Drag & Drop Image
        </p>
      )}
    </div>
  );
}