import { Link } from "react-router-dom";
import templates from "../../templates";
import LoadTemplate from "./LoadTemplate";

function TemplateList() {
  console.log("templates =", templates);

  
  return (
    <div>
      <h3>Templates</h3>
      <LoadTemplate />
      {templates.map((template) => (
        <Link
          key={template.id}
          to={`/editor/${template.id}`}
        >
          <div style={{ marginBottom: "10px" }}>
            <img
              src={template.thumbnail}
              alt={template.title}
              width="120"
            />

            <p>{template.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TemplateList;