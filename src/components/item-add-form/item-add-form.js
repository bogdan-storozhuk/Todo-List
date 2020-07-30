import React,{Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component{

    state={
        label:''
    }

    onLabelChange=(e)=>{
        this.setState({
            label:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.label.length===0){
            return;
        }
        const {label} = this.state;
        this.props.onAdded(label);
        this.setState({
            label:''
        });
    }
    render(){
        return(
            <form onSubmit={this.onSubmit} className="item-add-form">
                <input onChange={this.onLabelChange} value={this.state.label} className="item-form-input" type="text"
                placeholder="Enter task and press 'Add task' button"></input>
                <button className="item-form-button">Add Task</button>
            </form>
        );
    }
}
