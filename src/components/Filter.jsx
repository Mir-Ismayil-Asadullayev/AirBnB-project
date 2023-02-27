import React from 'react';
import filter from '../assets/styles/Filter.module.scss';
import filt from '../assets/images/filter.svg';

function Filter() {
  return (
      <div className={filter.wrapper}>
          <div>
              <img className={filter.icon} src={filt} alt="filter" />Filters
          </div>
      </div>
  )
}

export default Filter
