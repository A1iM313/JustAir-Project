import React from "react";
import { Loader, CheckCircle, AlertCircle } from "lucide-react";
import { deploymentSteps } from "../utils/constants";
import type { StatusProps } from "../types/deployment";

const StatusArea: React.FC<StatusProps> = ({
  deploymentState,
  statusMessage,
  errorMessage,
  currentStep,
}) => {
  const getProgressPercentage = (): number => {
    if (deploymentState === "success") return 100;
    if (deploymentState === "error")
      return (currentStep / deploymentSteps.length) * 100;
    return ((currentStep + 1) / deploymentSteps.length) * 100;
  };

  if (deploymentState === "idle") return null;

  return (
    <div className="status-area">
      <div className="status-container">
        {/* Progress Bar */}
        <div className="progress-section">
          <div className="progress-header">
            <span>Deployment Progress</span>
            <span>{Math.round(getProgressPercentage())}%</span>
          </div>
          <div className="progress-bar">
            <div
              className={`progress-fill ${
                deploymentState === "error" ? "error" : "success"
              }`}
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
        </div>

        {/* Status Message */}
        <div className="status-message">
          {deploymentState === "deploying" && (
            <Loader className="status-icon spinning" />
          )}
          {deploymentState === "success" && (
            <CheckCircle className="status-icon success" />
          )}
          {deploymentState === "error" && (
            <AlertCircle className="status-icon error" />
          )}
          <span className="status-text">{statusMessage}</span>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusArea;
