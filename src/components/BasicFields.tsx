import { ChangeEvent, useState } from "react";
import Field from "./Field";

function BasicFields() {
  const [basicDetails, setBasicDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
  });

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
      />
      <Field name="lastName" value={basicDetails.lastName} onInput={onInput} />
      <Field
        name="email"
        value={basicDetails.email}
        onInput={onInput}
        type="email"
      />
      <Field name="phone" value={basicDetails.email} onInput={onInput} />
      <Field
        name="age"
        value={basicDetails.age}
        onInput={onInput}
        type="number"
      />
    </form>
  );
}

export default BasicFields;
