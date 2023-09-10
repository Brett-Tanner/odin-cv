import { ChangeEvent, useState } from "react";
import Field from "./Field";

function ExperienceFields() {
  const [expDetails, setExpDetails] = useState({
    company: "",
    role: "",
    yearsExperience: "",
  });

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
      <Field name="company" value={expDetails.company} onInput={onInput} />
      <Field name="role" value={expDetails.role} onInput={onInput} />
      <Field
        name="yearsExperience"
        value={expDetails.yearsExperience}
        onInput={onInput}
      />
    </form>
  );
}

export default ExperienceFields;
