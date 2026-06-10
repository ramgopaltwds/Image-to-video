import { Link } from "react-router-dom";
import templates from "../templates";

function Gallery() {
  return (
    <div>
      <h1>Template Gallery</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {templates.map((template) => (
          <div key={template.id}>
            <Link to={`/editor/${template.id}`}>
              <img
                src={template.thumbnail}
                alt={template.title}
                width="250"
              />

              <h3>{template.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;