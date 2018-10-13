import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import TextRow from '../../components/ProductRegistration/TextRow';
import ProductComponentHeader from '../../components/ProductRegistration/productComponentHeader';
import TagsInput from 'react-tagsinput';
import ProductComponents from '../../components/ProductRegistration/ProductComponents';
import uuid from 'uuid/v1';

class ProductRegistration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productDesc: '',
            productUrl: '',
            components: [],
            topologies: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTopology = this.handleTopology.bind(this);
        this.addProductComponent = this.addProductComponent.bind(this);
        this.componentNameChange = this.componentNameChange.bind(this);
        this.componentTypeChange = this.componentTypeChange.bind(this);
        this.removeProductComponent = this.removeProductComponent.bind(this);
    };

    formStyle = {
        marginTop: '10px'
      };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleComponentList = () => {


    }
    addProductComponent = () => {
        const newComponent = {
            id: uuid(),
            componentName: "",
            componentType: "application"
        };
        const tempComponents = Object.assign(this.state.components);
        tempComponents.push(newComponent);
        this.setState({ components: tempComponents })
    };

    removeProductComponent = (id) => {
        const idx = this.state.components.findIndex(
            (component) => (
                component.id === id
            )
        );

        const tempComponents = Object.assign(this.state.components);
        tempComponents.splice(idx, 1);
        this.setState({ components: tempComponents })
    };

    handleSubmit = (event) => {
        console.log('Current state: ', this.state);
        console.log('Components are : ', this.state.components);
        event.preventDefault();
    };

    handleTopology(tags) {
        this.setState({
            topologies: tags
        }
        )
    };

    componentNameChange(id, event) {
        console.log("id to be updated of component is : ", id);
        const idx = this.state.components.findIndex(
            (component) => (
                component.id === id
            )
        );

        console.log("found component index is :" + idx);
        if (idx > -1) {
            const tempComponents = Object.assign(this.state.components);
            console.log("updating the component name in the state : " + event.target.value);
            tempComponents[idx].componentName = event.target.value;
            this.setState({ components: tempComponents })
        }
    };

    componentTypeChange(id, event) {
        console.log("id to be updated of component is : ", id);
        const idx = this.state.components.findIndex(
            (component) => (
                component.id === id
            )
        );
        console.log("found component index is :" + idx);
        if (idx > -1) {
            const tempComponents = Object.assign(this.state.components);
            console.log("updating the component name in the state : " + event.target.value);
            tempComponents[idx].componentType = event.target.value;
            this.setState({ components: tempComponents })
        }
    };

    render() {

        return (
            <Aux>
                <form className="form-horizontal" style={this.formStyle} onSubmit={this.handleSubmit}>
                    <TextRow name="Product Name" keyName="productName" inputChangeFunc={this.handleInputChange} content={this.state.name} />
                    <TextRow name="Product Desc" keyName="productDesc" inputChangeFunc={this.handleInputChange} content={this.state.name} />
                    <TextRow name="Product Url" keyName="productUrl" inputChangeFunc={this.handleInputChange} content={this.state.name} />
                    <div className="form-group">

                        <label className="control-label col-sm-3">Topologies</label>

                        <div className="col-sm-6">
                            <TagsInput value={this.state.topologies} onChange={this.handleTopology} />
                        </div>
                    </div>
                    <div className="col-sm-offset-3 container panel panel-default col-sm-6">
                        <h4 align="center">Inventory</h4>
                        <ProductComponentHeader />
                        {this.state.components.map(
                            (component, index) => <ProductComponents id={component.id} component={component} key={component.id} value={component.value} componentNameChange={this.componentNameChange} componentTypeChange={this.componentTypeChange} removeProductComponent={this.removeProductComponent} />
                        )
                        }
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input className="btn btn-primary center-block" type="button" value="Add Component" onClick={this.addProductComponent} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input className="btn btn-primary center-block" type="submit" value="Register Product" />
                        </div>
                    </div>
                </form>
            </Aux>
        );
    }
}

export default ProductRegistration;