interface EditSaveButtonProps {
  editing: boolean;
  setEditing: CallableFunction;
}

function EditSaveButton({ editing, setEditing }: EditSaveButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    editing ? setEditing(false) : setEditing(true);
  }

  return (
    <button
      type="submit"
      onClick={handleClick}
      className="w-3/4 rounded-md bg-blue-600 hover:bg-blue-700 p-1 font-semibold"
    >
      {editing ? "Save" : "Edit"}
    </button>
  );
}

export default EditSaveButton;
