interface EditSaveButtonProps {
  editing: boolean;
  setEditing: CallableFunction;
}

function EditSaveButton({ editing, setEditing }: EditSaveButtonProps) {
  function handleClick() {
    editing ? setEditing(false) : setEditing(true);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-3/4 rounded-md bg-blue-600 hover:bg-blue-700 p-1 font-semibold"
    >
      {editing ? "Save" : "Edit"}
    </button>
  );
}

export default EditSaveButton;
