// HogTile.js
import React, { useState } from 'react';

function HogTile({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (
    <div className="ui eight wide column">
      <div className="ui card" onClick={handleToggleDetails}>
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3 className="header">{hog.name}</h3>
        </div>

        {showDetails && (
          <div className="extra content">
            <p><strong>Specialty:</strong> {hog.specialty}</p>
            <p><strong>Weight:</strong> {hog.weight} lbs</p>
            <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
            <p><strong>Highest Medal Achieved:</strong> {hog['highest medal achieved']}</p>
          </div>
        )}

        {/* Hide button */}
        <button onClick={() => hideHog(hog.name)}>Hide</button>
      </div>
    </div>
  );
}

export default HogTile;
