import { Component } from 'react';

import './employees-add-form.css'

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    }
    this.onAdd = this.onAdd.bind(this);
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onAdd = (e) => {
    e.preventDefault();
    this.props.onAddEmployee(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: '',
    })
  }

  render() {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input 
            type="text" 
            className="form-control new-post-label"
            placeholedr="Как его зовут?"
            name="name"
            value={name} 
            onChange={this.onValueChange}/>
          <input 
            type="text" 
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary} 
            onChange={this.onValueChange}/>
          <button 
            type="submit" 
            className="btn btn-outline-light"
            onClick={this.onAdd}>
            Добавить
          </button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm;