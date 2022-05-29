import './app-filter.css';

const AppFilter = (props) => {
  const { filter} = props;
  const buttonsData = [
    {name:'all', label:'Все сотрудники', colored: false},
    {name:'rise', label:'Сотрудники на повышение', colored: false},
    {name:'salary', label:'З/П больше 1000$', colored: true},
  ];
  const buttons = buttonsData.map(({name, label, colored}) => {
    const active = filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button 
        className={`btn ${clazz}`}
        type='button'
        key={name}
        onClick={() => props.onUpdateFilter(name)}
        style={colored ? {color: 'red'} : null}>
          {label}
      </button>
    )
  })
  return (
    <div className="btn-group">
      {buttons}
      {/* <button 
        className="btn btn-light"
        type='button'
        data-filter="all"
        onClick={onUpdateFilter}>
          Все сотрудники
      </button>
      <button 
        className="btn btn-outline-light"
        type='button'
        data-filter="rise"
        onClick={onUpdateFilter}>
          Сотрудники на повышение
      </button>
      <button 
        className="btn btn-outline-light"
        type='button'
        data-filter="salary"
        onClick={onUpdateFilter}>
          З/П больше 1000$
      </button> */}
    </div>
  )
}

export default AppFilter;