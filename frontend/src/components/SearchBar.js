import React from 'react';

function SearchBar({ searchTerm, handleSearchChange }) {
    return (
        <div class="form-outline mt-2">
            <input type="search" class="form-control" id="datatable-search-input" value={searchTerm} onChange={handleSearchChange} placeholder="Search by name, age, ssn..." />
        </div>
    );
}

export default SearchBar;
