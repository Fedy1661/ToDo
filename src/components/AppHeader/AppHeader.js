import React, {Component} from 'react';

import './AppHeader.css';

class AppHeader extends Component {
  render(){
    const {toDo, done} = this.props;
    return(
      <div className='AppHeader'>
        <h1>Todo list</h1>
        <h2>{toDo} осталось, {done} выполнено</h2>
      </div>
    )
  }
}

export default AppHeader;