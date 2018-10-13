import React from 'react';

const textRow = (props) => (
    <div className="form-group">
        
            <label className="col-sm-3 control-label ">{props.name}</label>
        
        <div className="col-sm-6">
            <input className="form-control" name={props.keyName} value={props.content} onChange={props.inputChangeFunc} />
        </div>
    </div>
);

export default textRow;