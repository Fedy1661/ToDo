import React, {Component} from 'react';
import './TodoListItem.css';

class TodoListItem extends Component {
  // onLabelClick = () => {
  //   this.setState(({done}) => {
  //     return {done: !done}
  //   })
  // }
  // onMarkImportant = () => {
  //     this.setState(({important}) => {
  //       return {important: !important}
  //     });
  // }
  render() {
    const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;

    let classNames = 'TodoListItem';
    if (done){
      classNames+=' done';
    }

    if(important){
      classNames+=' important'
    }
    return (
      <span className={classNames}>
        <span className='TodoListItemLabel' onClick={onToggleDone}>{label}</span>
        <div>
          <button type="button" onClick={onToggleImportant} className='btn btn-outline-success btn-sm'>
            <i className="fa fa-exclamation"/>
            </button>
          <button type="button" onClick={onDeleted} className='btn btn-outline-danger btn-sm'>
            <i className="fa fa-trash-o"/>
          </button>
        </div>
      </span>
    );

  }
}

export default TodoListItem;