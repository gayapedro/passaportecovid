import "./style.css";

export default function Card(props) {
  let novaData = "";
  if (props.vac1 && !props.vac2) {
    const data = props.vac1.split("/");
    const proxima = Number(data[1]) + 1;
    novaData = `${data[0]}/${String(proxima).padStart(2, "0")}/${data[2]}`;
  }
  return (
    <div className='card'>
      <h4>{props.nome}</h4>
      {!props.vac1 ? <p>Nenhuma vacina registrada.</p> : ""}
      {props.vac1 ? <p>Dose 1: {props.vac1}</p> : ""}
      {props.vac2 ? <p>Dose 2: {props.vac2}</p> : ""}
      {props.vac1 && !props.vac2 ? <p>Próxima: {novaData}</p> : ""}
      {props.vac1 && props.vac2 ? <p>Cidadão imunizado.</p> : ""}
    </div>
  );
}
