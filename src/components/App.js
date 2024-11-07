// App.js
import React, { useState } from 'react';
import hogs from '../porkers_data';
import HogList from './HogList';
import Nav from './Nav';
import AddHogForm from './AddHogForm';

function App() {
  const [hogData, setHogData] = useState(hogs);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const filteredHogs = hogData.filter((hog) => 
    (showGreased ? hog.greased : true) && !hiddenHogs.includes(hog.name)
  );

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'weight') {
      return a.weight - b.weight;
    }
    return 0;
  });

  const hideHog = (hogName) => {
    setHiddenHogs([...hiddenHogs, hogName]);
  };

  const handleToggleGreased = () => {
    setShowGreased((prevShowGreased) => !prevShowGreased);
  };

  const handleSortBy = (criteria) => {
    setSortBy(criteria);
  };

  const addHog = (newHog) => {
    setHogData([...hogData, newHog]);
  };

  return (
    <div className="App">
      <Nav />

      {/* Filter, Sort, and Add Hog Controls */}
      <div className="ui container" style={{ marginTop: '20px' }}>
        <div className="ui segment">
          <h2>Filter and Sort Controls</h2>
          <div className="ui form">
            <div className="inline field">
              <label>
                Show Greased
                <input
                  type="checkbox"
                  checked={showGreased}
                  onChange={handleToggleGreased}
                />
              </label>
            </div>
            <div className="ui buttons">
              <button className="ui button" onClick={() => handleSortBy('name')}>Sort by Name</button>
              <button className="ui button" onClick={() => handleSortBy('weight')}>Sort by Weight</button>
            </div>
          </div>
        </div>

        {/* Add Hog Form */}
        <AddHogForm addHog={addHog} />
      </div>

      {/* Render the Hog List */}
      <div className="ui container" style={{ marginTop: '40px' }}>
        <HogList hogData={sortedHogs} hideHog={hideHog} />
      </div>
    </div>
  );
}

export default App;
