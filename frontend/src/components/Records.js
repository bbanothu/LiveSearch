import React from 'react';

function Records({ record }) {
    return (
        <div className="mt-2 p-2" key={record.id} style={{ border: '1px solid black', borderRadius: '10px' }}>
            <div>
                <strong>Name:</strong> {record.first_name} {record.last_name} <strong>Age:</strong> {record.age} <strong>SSN:</strong> {record.ssn}
            </div>
            <div>
                <strong>Address:</strong> {record.address_street}, {record.address_city}, {record.address_state}, {record.address_zip}
            </div>
        </div>
    );
}

export default Records;
