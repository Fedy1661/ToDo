import React, {Component} from 'react';

import './AddForm.css';

class AddForm extends Component{
  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    if(this.props.filter === 'done'){
      this.props.onFilterChange('all');
    }

    this.setState(() => {
      return {label: ''}
    });
  }
  render(){
    return(
      <form onSubmit={this.onSubmit} className='AddForm mt-1'>
        <input type='text' className='form-control' onChange={this.onLabelChange} placeholder='What needs to be done' value={this.state.label}/>
        <button className='AddForm__btn btn btn-outline-secondary'>Add Item</button>
      </form>
    )
  }
}

export default AddForm