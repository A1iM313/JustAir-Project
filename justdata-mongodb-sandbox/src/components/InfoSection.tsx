import React from "react";

const InfoSection: React.FC = () => {
  return (
    <div className="info-section">
      <div className="info-card blue">
        <h4>What happens when you deploy?</h4>
        <ul>
          <li>• Creates a new isolated MongoDB sandbox cluster</li>
          <li>• Fetches the most recent production snapshot</li>
          <li>• Restores real production-like data to your sandbox</li>
          <li>• Provides a ready-to-use connection string</li>
        </ul>
      </div>

      <div className="info-card green">
        <h4>Best Practices</h4>
        <ul>
          <li>• Test new features in isolation</li>
          <li>• Validate schema changes safely</li>
          <li>• Debug with production-like data</li>
          <li>• Spin down when testing is complete</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoSection;
