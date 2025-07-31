import React from "react";
import { Play, Square, Loader } from "lucide-react";
//import { deploymentSteps } from "../utils/constants";
import { deploymentService } from "../services/deploymentService";
import type { DeploymentControlsProps } from "../types/deployment";

const DeploymentControls: React.FC<DeploymentControlsProps> = ({
  deploymentState,
  setDeploymentState,
  setStatusMessage,
  setConnectionString,
  setErrorMessage,
  setCurrentStep,
}) => {
  const deploySandbox = async (): Promise<void> => {
    setDeploymentState("deploying");
    setErrorMessage("");
    setCurrentStep(0);

    try {
      const result = await deploymentService.deploySandbox(
        setStatusMessage,
        setCurrentStep
      );

      if (result.success) {
        setConnectionString(result.connectionString || "");
        setDeploymentState("success");
        setStatusMessage("Sandbox deployment completed successfully!");
      } else {
        setDeploymentState("error");
        setErrorMessage(result.error || "Unknown error occurred");
      }
    } catch (error) {
      setDeploymentState("error");
      setErrorMessage("An unexpected error occurred during deployment.");
    }
  };

  const spinDownDatabase = async (): Promise<void> => {
    setDeploymentState("idle");
    setConnectionString("");
    setStatusMessage("");
    setErrorMessage("");
    setCurrentStep(0);
  };

  return (
    <div className="deployment-controls">
      <button
        onClick={deploySandbox}
        disabled={deploymentState === "deploying"}
        className={`deploy-button ${
          deploymentState === "deploying" ? "disabled" : ""
        }`}
      >
        {deploymentState === "deploying" ? (
          <Loader className="button-icon spinning" />
        ) : (
          <Play className="button-icon" />
        )}
        Deploy Sandbox
      </button>

      {deploymentState === "success" && (
        <button onClick={spinDownDatabase} className="spindown-button">
          <Square className="button-icon" />
          Spin Down Prod DB
        </button>
      )}
    </div>
  );
};

export default DeploymentControls;
