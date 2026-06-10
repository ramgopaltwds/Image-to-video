import Sidebar from "../components/Sidebar/Sidebar";
import CanvasEditor from "../components/Editor/CanvasEditor";

function Home() {
  return (
    <div
      style={{
        display: "flex",
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

export default Home;