import React, {Component} from 'react';

import './SearchPanel.css';

class SearchPanel extends Component {
  render(){
    return(
      <div className='SearchPanel'>
        <input className='SearchPanel__input' placeholder='Type here to search'></input>
        <div className='btn-group'>
          <button type="button" className="btn btn-info">All</button>
          <button type="button" className="btn btn-outline-secondary">Active</button>
          <button type="button" className="btn btn-outline-secondary">Done</button>
        </div>
      </div>
    )
  }
}

export default SearchPanel;
