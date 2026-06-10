function SaveButton({ data }) {
  const handleSave = () => {
    localStorage.setItem(
      "birthday-template",
      JSON.stringify(data)
    );

    alert("Project Saved");
  };

  return (
    <button onClick={handleSave}>
      Save Project
    </button>
  );
}

export default SaveButton;