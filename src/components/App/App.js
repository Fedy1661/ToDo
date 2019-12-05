import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from "../TodoList/TodoList";
import AddForm from '../AddForm/AddForm'

import './App.css'
let maxId = 0;
class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [
        this.createTodoItem('Learn React'),
        this.createTodoItem('Learn JavaScript'),
        this.createTodoItem('Learn Bootstrap')
      ]
    };

  }
  // createId = () => {
  //   return (this.state.items.length > 0) ? this.state.items[this.state.items.length - 1].id+1 : 1;
  // }
  createTodoItem = (label) => {
    return{
      label,
      important: false,
      done: false,
      id: ++maxId
      // id: (this.state.items.length > 0) ? this.state.items[this.state.items.length - 1].id+1 : 1
    }
  }
  deleteItem = (id) => {
    this.setState(({items}) => {
      const idx = items.findIndex((el) => el.id === id);

      return {
        items: [...items.slice(0, idx),...items.slice(idx+1)]
      }
    })
  }
  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({items}) => {
      return{
        items: [...items, newItem]
      }
    })
  }
  toggleProperty(arr, id, propName){
    const idx = arr.findIndex((el) => el.id === id);

    const oldTime = arr[idx];
    const newItem = {...oldTime, [propName]: !oldTime[propName]};
    return [...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx+1)]
  }
  onToggleImportant = (id) => {
    this.setState(({items}) => {
        return {
          items: this.toggleProperty(items, id, 'important')
      }
    })
  }
  onToggleDone = (id) => {
    this.setState(({items}) => {
      return {
        items: this.toggleProperty(items, id, 'done')
      }
    })
  }
  render(){
    const countDone = this.state.items.filter((el) => el.done).length;
    return(
      <div>
        <AppHeader toDo={this.state.items.length - countDone} done={countDone} />
        <SearchPanel />
        <TodoList items={this.state.items} onDeleted={ this.deleteItem } onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant}/>
        <AddForm onAddItem={this.addItem} />
      </div>
    )
  }
}

export default App;
