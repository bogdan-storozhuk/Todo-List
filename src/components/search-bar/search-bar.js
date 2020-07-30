import React,{Component} from 'react';

import './search-bar.css';

export default class SearchBar extends Component{

    state={
        term:''
    }
    onSearchChange=(e)=>{
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term)
    }
    render(){
        return (
            <input onKeyUp={this.onSearchChange} className='search-bar' placeholder="Enter task name for search..."/>
        );
    }
}
