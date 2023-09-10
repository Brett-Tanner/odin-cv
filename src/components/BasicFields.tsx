import { ChangeEvent, useState } from "react";
import Field from "./Field";
import EditSaveButton from "./EditSaveButton";

function BasicFields() {
  const [basicDetails, setBasicDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
  });
  const [editing, setEditing] = useState(true);

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBasicDetails({
      ...basicDetails,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form className="flex flex-wrap justify-center items-center gap-6">
      <h1 className="w-full text-center text-3xl font-bold">
        Personal Information
      </h1>
      <Field
        name="firstName"
        value={basicDetails.firstName}
        onInput={onInput}
        editing={editing}
      />
      <Field
        name="lastName"
        value={basicDetails.lastName}
        onInput={onInput}
        editing={editing}
      />
      <Field
        name="email"
        value={basicDetails.email}
        onInput={onInput}
        editing={editing}
        type="email"
      />
      <Field
        name="phone"
        value={basicDetails.phone}
        onInput={onInput}
        editing={editing}
      />
      <Field
        name="age"
        value={basicDetails.age}
        onInput={onInput}
        editing={editing}
        type="number"
      />
      <EditSaveButton editing={editing} setEditing={setEditing} />
    </form>
  );
}

export default BasicFields;
