import React,{Component,Fragment} from 'react';

import './app.css';

import SearchBar from '../search-bar/';
import TodoList from '../todo-list/';
import ItemAddForm from '../item-add-form/';
import PopUp from '../pop-up/'


export default class App extends Component{
    state={
        todoData:[
            this.createTodoItem('Learn English'),
            this.createTodoItem('Make a Framework'),
            this.createTodoItem('Learn React')
        ],
        term:'',
        isPopUpNeeded:false,
        deleteID:null
    }

    deleteItem(){
        this.setState(({todoData,deleteID})=>{
            const idx=todoData.findIndex((el)=>el.id===deleteID);
            return{
                todoData:[...todoData.slice(0,idx),
                          ...todoData.slice(idx+1)]
            };
        });
    }

    createTodoItem(label){
        return{
            label,
            done:false,
            id:Date.now()+Math.floor(Math.random()*1000)
        }
    }

    search(items,term){
        if(term.length===0){
            return items;
        }
        return items.filter((el)=>el.label.toLowerCase().indexOf(term.toLowerCase())>-1)
    }

    AddItem=(label)=>{
        this.setState(({todoData})=>{
            return{
                todoData:[...todoData,this.createTodoItem(label)]
            };
        })
    }

    onToggleDone=(id)=>{
        this.setState(({todoData})=>{
            const idx=todoData.findIndex((el)=>el.id===id);
            const oldItem=todoData[idx];
            const newItem={...oldItem,
                        done:!oldItem.done}
            return{
                todoData:[...todoData.slice(0,idx),
                         newItem,
                        ...todoData.slice(idx+1)]
            };
        })
    }

    onSearchChange=(term)=>{
        this.setState({term});
    }

    onClosePopUp=()=>{
        this.setState({
            isPopUpNeeded:false
        });
    }

    onConfirmDelete=()=>{
        this.setState({
            isPopUpNeeded:false
        });
        this.deleteItem();
    }
    
    onOpenPopUp=(id)=>{
        this.setState({
            deleteID:id,
            isPopUpNeeded:true
        });
    }

    render(){
        const {todoData,term,isPopUpNeeded}=this.state;
        const visibleItems=this.search(todoData,term);
        const popUp=isPopUpNeeded?<PopUp onConfirmDelete={this.onConfirmDelete} onClosePopUp={this.onClosePopUp}/>:null;
        return(
            <Fragment>
            <div className='app'>
                <SearchBar onSearchChange={this.onSearchChange}/>
                <TodoList todoItems={visibleItems}
                onDeleted={this.onOpenPopUp}
                onToggleDone={this.onToggleDone}/>
                <ItemAddForm onAdded={this.AddItem}/>
            </div>
            {popUp}
            </Fragment>
        );
    }
}
