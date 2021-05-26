import "./style.css";

export default function Header(props) {
  return (
    <header>
      <div className='logo'>
        <i className='fas fa-virus-slash'></i>
        <h3>Passaporte Covid</h3>
      </div>
      <div className='utilidades'>
        <i
          onClick={() => props.setAddUser(true)}
          className='fas fa-user-plus'
        ></i>
        <i
          onClick={() => props.setModalAberto(true)}
          className='far fa-chart-bar'
        ></i>
      </div>
    </header>
  );
}
