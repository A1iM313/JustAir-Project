import React from "react";
import { Play } from "lucide-react";
import DeploymentControls from "./DeploymentControls";
import StatusArea from "./StatusArea";
import ConnectionOutput from "./ConnectionOutput";
import InfoSection from "./InfoSection";
import type { DeploymentProps } from "../types/deployment";

const DeploymentCard: React.FC<DeploymentProps> = ({
  deploymentState,
  setDeploymentState,
  statusMessage,
  setStatusMessage,
  connectionString,
  setConnectionString,
  errorMessage,
  setErrorMessage,
  currentStep,
  setCurrentStep,
}) => {
  return (
    <div className="deployment-card">
      <div className="card-header">
        <h2>
          <Play className="card-header-icon" />
          MongoDB Sandbox Deployment
        </h2>
      </div>

      <div className="card-content">
        <DeploymentControls
          deploymentState={deploymentState}
          setDeploymentState={setDeploymentState}
          setStatusMessage={setStatusMessage}
          setConnectionString={setConnectionString}
          setErrorMessage={setErrorMessage}
          setCurrentStep={setCurrentStep}
        />

        <StatusArea
          deploymentState={deploymentState}
          statusMessage={statusMessage}
          errorMessage={errorMessage}
          currentStep={currentStep}
        />

        <ConnectionOutput connectionString={connectionString} />

        <InfoSection />
      </div>
    </div>
  );
};

export default DeploymentCard;
