import { useState } from "react"; // Hook allows us to track state in a function component.
import Header from "./components/Header";
import DeploymentCard from "./components/DeploymentCard";
import type { DeploymentState } from "./types/deployment";
import "./styles/App.css";

function App() {
  const [deploymentState, setDeploymentState] =
    useState<DeploymentState>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [connectionString, setConnectionString] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <div className="app-container">
      <div className="container">
        <Header />
        <DeploymentCard
          deploymentState={deploymentState}
          setDeploymentState={setDeploymentState}
          statusMessage={statusMessage}
          setStatusMessage={setStatusMessage}
          connectionString={connectionString}
          setConnectionString={setConnectionString}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </div>
  );
}

export default App;
