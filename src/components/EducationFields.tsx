import { ChangeEvent, useState } from "react";
import Field from "./Field";
import EditSaveButton from "./EditSaveButton";

function EducationFields() {
  const [eduDetails, setEduDetails] = useState({
    degree: "",
    major: "",
    university: "",
  });
  const [editing, setEditing] = useState(true);

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEduDetails({
      ...eduDetails,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="flex flex-wrap justify-center items-center gap-6">
      <h1 className="w-full text-center text-3xl font-bold">
        Education Information
      </h1>
      <Field
        name="university"
        value={eduDetails.university}
        onInput={onInput}
      />
      <Field name="major" value={eduDetails.major} onInput={onInput} />
      <Field name="degree" value={eduDetails.degree} onInput={onInput} />
      <EditSaveButton editing={editing} setEditing={setEditing} />
    </form>
  );
}

export default EducationFields;
