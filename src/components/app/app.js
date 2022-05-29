import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employess-add-form/employees-add-form";

import "./app.css";

class App extends Component{
  constructor(props) {
    super(props);
    this.state= {
      data: [
        {name:'Alex G', salary: 1100, increase: false, rise: true, id: 1},
        {name:'Bork A', salary: 200, increase: false, rise: false, id: 2},
        {name:'Aaste R', salary: 1500, increase: false, rise: false, id: 3},
      ],
      maxId: 4,
      term:'',
      filter: 'rise',
    }

  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addEmployee = (name,salary) => {
    const newEmployee = [{
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: this.state.maxId
    }]
    this.setState(({data, maxId}) => {
      return {
        data: data.concat(newEmployee),
        maxId: maxId + 1
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {
            ...item, [prop]: !item[prop]
          }
        }
        return item
      })
    }))
  }

  filterEmp = (data, filter) => {
    if (filter === '' || filter === 'all') {
      return data;
    }
    if (filter === 'rise') {
    return data.filter(item => item.rise);
    }
    if (filter === 'salary') {
      return data.filter(item => item.salary > 1000);
    }
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  onUpdateFilter = (filter) => {
    this.setState({filter});
  }


  render() {
    const increaseAmount = this.state.data.filter(item => item.increase).length;
    const employeesAmount = this.state.data.length;
    const {data, term, filter} = this.state;
    const visibleData = this.filterEmp(this.searchEmp(data, term), filter)

    return (
      <div className="app">
        
        <AppInfo 
          employeesAmount={employeesAmount}
          increaseAmount={increaseAmount}/>

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter 
            onUpdateFilter={this.onUpdateFilter}
            filter={filter}/>
        </div>

        <EmployeesList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}/>

        <EmployeesAddForm onAddEmployee={this.addEmployee}/>
      </div>
    )
  }
}
export default App;