import React from 'react';
import ComponentTypes from '../../constants/componentTypes';

const componentOptions = ComponentTypes.map(
    option => <option key={option.id} value={option.value}>{option.text}</option>
);

const productComponents = (props) => (
    <div className="form-group">
        <div className="col-sm-offset-2 col-sm-3">
            <input className="form-control" value={props.value} onBlur={(e) => props.componentNameChange(props.id, e)} />
        </div>
        <div className="col-sm-4">
            <select className="form-control" onBlur={(e) => props.componentTypeChange(props.id, e)}>
                {componentOptions}
            </select>
        </div>
        <div className="col-sm-1">     
        <button className="btn btn-default" type="button" value="remove Component" onClick={()=>props.removeProductComponent(props.id)}>
        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
        </div>
    </div>
);

export default productComponents;