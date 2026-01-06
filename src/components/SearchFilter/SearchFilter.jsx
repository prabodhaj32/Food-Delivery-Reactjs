import React, { useState } from 'react'
import './SearchFilter.css'

const defaultFilters = ['All', 'Fast Delivery', 'Top Rated', 'Pure Veg', 'Budget', 'New on app']

const SearchFilter = ({ filters = defaultFilters, onSearch, onFilter }) => {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('All')

  const handleSearch = (value) => {
    setQuery(value)
    onSearch && onSearch(value)
  }

  const handleFilter = (value) => {
    setActive(value)
    onFilter && onFilter(value)
  }

  return (
    <div className="search-filter">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search restaurants or dishes"
        />
        {query && (
          <button type="button" className="clear-btn" onClick={() => handleSearch('')}>
            ✕
          </button>
        )}
      </div>

      <div className="chip-row">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={active === item ? 'chip active' : 'chip'}
            onClick={() => handleFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchFilter



