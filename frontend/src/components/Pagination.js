import React from 'react';

function Pagination({ currentPage, totalPages, handlePageChange }) {
    return (
        <div className="mt-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <button className="btn btn-secondary" style={{ marginRight: '10px' }} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous Page
            </button>
            <span>{currentPage} of {totalPages}</span>
            <button className="btn btn-primary" style={{ marginLeft: '10px' }} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next Page
            </button>
        </div>
    );
}

export default Pagination;
