import React from 'react';

const productComponentHeader = (props) => (
    <div className="form-group">
        <div className="col-sm-offset-2 col-sm-3">
            <label align="center" className="control-label">Component Name</label>
        </div>
        <div className="col-sm-4">
            <label className="control-label">Component Type</label>
        </div>
    </div>
);

export default productComponentHeader;