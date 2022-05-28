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
        {name:'Alex G', salary: 1000, increase: false, rise: false, id: 1},
        {name:'Bork A', salary: 2000, increase: false, rise: false, id: 2},
        {name:'Maste R', salary: 5000, increase: false, rise: false, id: 3},
      ],
      maxId: 4
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

  onToggleIncrease = (id) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id);
    //   const old = data[index];
    //   const newItem = {...old, increase: !old.increase};
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    //   return {
    //     data: newArr
    //   }
    // })

    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {
            ...item, increase: !item.increase
          }
        }
        return item
      })
    }))
  }

  onToggleRise = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {
            ...item, rise: !item.rise
          }
        }
        return item
      })
    }))
  }

  render() {
    const increaseAmount = this.state.data.filter(item => item.increase).length;
    const employeesAmount = this.state.data.length;
    return (
      <div className="app">
        
        <AppInfo 
          employeesAmount={employeesAmount}
          increaseAmount={increaseAmount}/>

        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeesList 
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}/>

        <EmployeesAddForm onAddEmployee={this.addEmployee}/>
      </div>
    )
  }
}
export default App;