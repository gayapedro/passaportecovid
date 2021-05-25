import "./style.css";

export default function Header(props) {
  return (
    <header>
      <div className='logo'>
        <i className='fas fa-virus-slash'></i>
        <h3>Passaporte Covid</h3>
      </div>

      <i
        onClick={() => props.setModalAberto(true)}
        className='far fa-chart-bar'
      ></i>
    </header>
  );
}
