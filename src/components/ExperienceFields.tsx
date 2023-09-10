import { ChangeEvent, useState } from "react";
import Field from "./Field";
import EditSaveButton from "./EditSaveButton";

function ExperienceFields() {
  const [expDetails, setExpDetails] = useState({
    company: "",
    role: "",
    yearsExperience: "",
  });
  const [editing, setEditing] = useState(true);

  function onInput(e: ChangeEvent<HTMLInputElement>) {
    setExpDetails({
      ...expDetails,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  }

  return (
    <form className="flex flex-wrap justify-center items-center gap-6">
      <h1 className="w-full text-center text-3xl font-bold">
        Experience Information
      </h1>
      <Field
        name="company"
        value={expDetails.company}
        onInput={onInput}
        editing={editing}
      />
      <Field
        name="role"
        value={expDetails.role}
        onInput={onInput}
        editing={editing}
      />
      <Field
        name="yearsExperience"
        value={expDetails.yearsExperience}
        onInput={onInput}
        editing={editing}
      />
      <EditSaveButton editing={editing} setEditing={setEditing} />
    </form>
  );
}

export default ExperienceFields;
