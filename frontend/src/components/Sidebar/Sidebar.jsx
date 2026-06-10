import "./Sidebar.css";
import TemplateList from "./TemplateList";
import UploadPanel from "./UploadPanel";
import TextPanel from "./TextPanel";
import AnimationPanel from "./AnimationPanel";
import StickerPanel from "./StickerPanel";

function Sidebar() {
  return (
    <div className="sidebar">
      <TemplateList />
      <hr />
      <UploadPanel />
      <hr />
      <TextPanel />
      <hr />
      <StickerPanel />
      <hr />
      <AnimationPanel />
    </div>
  );
}

export default Sidebar;