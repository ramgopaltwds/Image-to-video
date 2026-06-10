import useTemplateStore from "../../store/templateStore";
import birthday1 from "../../templates/birthday1.json";

function LoadTemplate() {
  const setTemplate = useTemplateStore(
    (state) => state.setTemplate
  );

  return (
    <button
      onClick={() => setTemplate(birthday1)}
    >
      Load Birthday Template
    </button>
  );
}

export default LoadTemplate;