import Sidebar from "../components/Sidebar/Sidebar";
import CanvasEditor from "../components/Editor/CanvasEditor";
import { useEffect, useState } from "react";
function Editor() {

  const [template, setTemplate] = useState(null);

 useEffect(() => {
    const fetchTemplate = async () => {
      const data = await loadTemplate("/templates/birthday1.json");
      setTemplate(data);
    };

    fetchTemplate();
  }, []);


  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          overflow: "auto",
          padding: "20px",
        }}
      >
        <CanvasEditor />
      </div>
    </div>
  );
}

export default Editor;