import React, { useState, useEffect } from 'react';
import style from './Filter.module.css';

function Filter({ onFilterChanged }) {
  // all, completed, incompleted
  const [selectedFilter, setSelectedFilter] = useState('all');
  useEffect(() => {
    onFilterChanged(selectedFilter);
  }, [selectedFilter]);

  return (
    <div className={`${style.filter}`}>
      <label className={`${style.active}`}>
        <input
          type="radio"
          name="filter"
          checked={selectedFilter === 'all'}
          onChange={() => setSelectedFilter('all')}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          checked={selectedFilter === 'completed'}
          onChange={() => setSelectedFilter('completed')}
        />
        Completed
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          checked={selectedFilter === 'incompleted'}
          onChange={() => setSelectedFilter('incompleted')}
        />
        Incompleted
      </label>
    </div>
  );
}

export default Filter;
