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
      ],
      term: '',
      filter: 'all'
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
  search(items, term){
    if (term.length === 0){
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }
  onSearchChange = (term) => {
    this.setState({
      term: term.replace(/^\s*/,'').replace(/\s*$/,'')
    });
  }
  onFilterChange = (filter) => {
    this.setState({filter});
  }
  filter(items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }
  render(){
    const {term, items, filter} = this.state;
    const visibleItems = this.filter(this.search(items, term), filter);
    const countDone = items.filter((el) => el.done).length;
    return(
      <div>
        <AppHeader toDo={items.length - countDone} done={countDone} />
        <SearchPanel onFilterChange={this.onFilterChange} filter={filter} onSearchChange={this.onSearchChange} />
        <TodoList items={visibleItems} onDeleted={ this.deleteItem } onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant}/>
        <AddForm onFilterChange={this.onFilterChange} filter={filter} onAddItem={this.addItem} />
      </div>
    )
  }
}

export default App;
