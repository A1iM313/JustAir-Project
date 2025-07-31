import React from "react";
import { Copy } from "lucide-react";
import type { ConnectionProps } from "../types/deployment";

const ConnectionOutput: React.FC<ConnectionProps> = ({ connectionString }) => {
  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(connectionString);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  if (!connectionString) return null;

  return (
    <div className="connection-output">
      <div className="connection-header">
        <h3>MongoDB Connection String</h3>
        <button onClick={copyToClipboard} className="copy-button">
          <Copy className="copy-icon" />
          Copy
        </button>
      </div>
      <div className="connection-string">{connectionString}</div>
      <p className="connection-note">
        Use this connection string in MongoDB Compass, your application
        configuration, or any MongoDB client.
      </p>
    </div>
  );
};

export default ConnectionOutput;
