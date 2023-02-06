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
      <input
        type="radio"
        name="filter"
        checked={selectedFilter === 'all'}
        onChange={(e) => setSelectedFilter('all')}
      ></input>
      <span className={`${style.active}`}>All</span>
      <input
        type="radio"
        name="filter"
        checked={selectedFilter === 'completed'}
        onChange={(e) => setSelectedFilter('completed')}
      ></input>
      Completed
      <input
        type="radio"
        name="filter"
        checked={selectedFilter === 'incompleted'}
        onChange={(e) => setSelectedFilter('incompleted')}
      ></input>
      Incompleted
    </div>
  );
}

export default Filter;
