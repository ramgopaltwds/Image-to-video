import { Link } from "react-router-dom";

function Export() {
  return (
    <div>
      <h1>Export Project</h1>

      <p>
        Download your design as PNG or MP4.
      </p>

      <Link to="/gallery">
        <button>
          Back To Gallery
        </button>
      </Link>
    </div>
  );
}

export default Export;