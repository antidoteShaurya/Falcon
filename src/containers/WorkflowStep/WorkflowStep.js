import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import {FormGroup,ControlLabel} from 'react-bootstrap';

class WorkflowStep extends Component {

    render() {

        return (
            <Aux>
                <form className='horizontal'>
                    <FormGroup>
                        <ControlLabel>Name</ControlLabel>
                    </FormGroup>

                </form>
            </Aux>
        )
    };

}

export default WorkflowStep;