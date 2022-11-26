import React from 'react';
import '../Issued.css';

export const Thead = () => {
    return (
        <thead className="table-light">
            <tr>
                <th style={{ width: "20px" }}>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                        </label>
                    </div>
                </th>
                <th className="align-middle">Name</th>
                <th className="align-middle">Type</th>
                <th className="align-middle">Size</th>
                <th className="align-middle">Created ON</th>
                <th className="align-middle">Last Updated On</th>
                <th className="align-middle">Action</th>
            </tr>
        </thead>
    )
}
