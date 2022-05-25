import EmployeesListItem from '../employess-list-item/employess-list-item';
import './employess-list.css'

const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem/>
      <EmployeesListItem/>
      <EmployeesListItem/>
    </ul>
  )
}

export default EmployeesList;