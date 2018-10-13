import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { NavLink, Route } from 'react-router-dom';
import ProductRegistration from '../ProductRegistration/ProductRegistration';
import WorkflowStep from '../WorkflowStep/WorkflowStep';
import {Grid,Navbar} from 'react-bootstrap';

class Layout extends Component {

    render() {
        return (
            <Grid>
                <Navbar>
                        <div className="collapse navbar-collapse">
                            <ul className="nav nav-tabs">
                                <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                                <li><NavLink activeClassName="active" exact to="/ProductRegistration">Product Registration</NavLink></li>
                                <li><NavLink activeClassName="active" exact to="/WorkflowStep">Workflow Step</NavLink></li>
                            </ul>
                        </div>
                </Navbar>
                <Route path="/ProductRegistration" component={ProductRegistration} />
                <Route path="/WorkflowStep" component={WorkflowStep} />
            </Grid>
        );
    }
}

export default Layout;

