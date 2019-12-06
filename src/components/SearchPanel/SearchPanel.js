import React, {Component} from 'react';

import './SearchPanel.css';

class SearchPanel extends Component {
  buttons = [
    {name: 'all', label: 'Все'},
    {name: 'active', label: 'Активные'},
    {name: 'done', label: 'Выполненные'}
  ]
  constructor(){
    super();
    this.state = {
      term: ''
    }
  }
  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({
      term
    });
    this.props.onSearchChange(term);
  }
  render(){
    const {filter, onFilterChange} = this.props;
    const buttons = this.buttons.map(({name, label}) => {
      return(
        <button onClick={() => onFilterChange(name)} key={name} type="button" 
                className={`btn ${(name === filter) ? "btn-info" : "btn-outline-secondary"}`}>{label}</button>
      )
    });

    return(
      <div className='SearchPanel'>
        <input className='SearchPanel__input form-control' placeholder='Поиск' value={this.state.term} onChange={this.onSearchChange}></input>
        <div className='btn-group'>
          {buttons}
        </div>
      </div>
    )
  }
}

export default SearchPanel;
