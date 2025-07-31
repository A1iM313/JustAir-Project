export const deploymentSteps: string[] = [
  'Creating sandbox cluster...',
  'Fetching available snapshots...',
  'Selecting most recent snapshot...',
  'Restoring snapshot to sandbox...',
  'Generating connection string...',
  'Deployment complete!'
];

export const API_ENDPOINTS = {
  DEPLOY_SANDBOX: '/api/deploy-sandbox',
  SPINDOWN_SANDBOX: '/api/spindown-sandbox',
  HEALTH_CHECK: '/api/health'
} as const;

export const DEPLOYMENT_STATES = {
  IDLE: 'idle',
  DEPLOYING: 'deploying',
  SUCCESS: 'success',
  ERROR: 'error'
} as const;
