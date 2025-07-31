export type DeploymentState = 'idle' | 'deploying' | 'success' | 'error';

export interface DeploymentResult {
  success: boolean;
  connectionString?: string;
  error?: string;
}

export interface DeploymentProps {
  deploymentState: DeploymentState;
  setDeploymentState: (state: DeploymentState) => void;
  statusMessage: string;
  setStatusMessage: (message: string) => void;
  connectionString: string;
  setConnectionString: (connectionString: string) => void;
  errorMessage: string;
  setErrorMessage: (error: string) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export interface StatusProps {
  deploymentState: DeploymentState;
  statusMessage: string;
  errorMessage: string;
  currentStep: number;
}

export interface ConnectionProps {
  connectionString: string;
}

export interface DeploymentControlsProps {
  deploymentState: DeploymentState;
  setDeploymentState: (state: DeploymentState) => void;
  setStatusMessage: (message: string) => void;
  setConnectionString: (connectionString: string) => void;
  setErrorMessage: (error: string) => void;
  setCurrentStep: (step: number) => void;
}
