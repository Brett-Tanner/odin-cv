import "./index.css";
import BasicFields from "./components/BasicFields";
import EducationFields from "./components/EducationFields";
import ExperienceFields from "./components/ExperienceFields";

function App() {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-6">
      <BasicFields />
      <EducationFields />
      <ExperienceFields />
    </div>
  );
}

export default App;
