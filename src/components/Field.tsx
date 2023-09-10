import { FormEventHandler } from "react";

interface FieldProps {
  name: string;
  value: string;
  onInput: FormEventHandler;
  type?: inputType;
}

function Field({ name, value, onInput, type = "text" }: FieldProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <label htmlFor={name}>{labelCase(name)}</label>
      <input
        id={name}
        type={type}
        value={value}
        onInput={onInput}
        className="border border-slate-400 bg-slate-500 p-1 rounded"
        required
      />
    </div>
  );
}

function labelCase(string: string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`
    .split(/(?=[A-Z])/)
    .join(" ");
}

export default Field;
