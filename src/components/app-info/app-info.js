import "./app-info.css";

const AppInfo = (props) => {
  const {employeesAmount, increaseAmount} = props;
  return (
    <div className="app-info">
      <h1>Учет сотрудников</h1>
      <h2>Общее число сотрудников: {employeesAmount}</h2>
      <h2>Премию получат: {increaseAmount}</h2>
    </div>
  )
}

export default AppInfo;