import React, {Component} from 'react';

import './SearchPanel.css';

class SearchPanel extends Component {
  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
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
        <input className='SearchPanel__input form-control' placeholder='Type here to search' value={this.state.term} onChange={this.onSearchChange}></input>
        <div className='btn-group'>
          {buttons}
        </div>
      </div>
    )
  }
}

export default SearchPanel;
