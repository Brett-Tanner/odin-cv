import "./index.css";
import BasicFields from "./components/BasicFields";
import EducationFields from "./components/EducationFields";
import ExperienceFields from "./components/ExperienceFields";

function App() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <form action="">
        <BasicFields />
      </form>
      <form action="">
        <EducationFields />
      </form>
      <form action="">
        <ExperienceFields />
      </form>
    </div>
  );
}

export default App;
