import { useEffect, useState } from "react";
import { format } from "date-fns";
import Web3 from "web3";
import "./style.css";

export default function Card(props) {
  const [toggle, setToggle] = useState(false);
  const [erro, setErro] = useState("");
  const data1 = new Date(props.vac1);
  const data2 = new Date(props.vac2);
  const listaPacientes = [...props.pacientes];
  const paciente = listaPacientes.find(
    item => item.endereco === props.endereco
  );
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  const contrato = new web3.eth.Contract(props.abi, props.enderecoContrato);
  async function timestampDoses() {
    if (props.vac1 === 0) {
      await contrato.methods
        .timestampPrimeiraDose()
        .call({ from: props.endereco })
        .catch(e => console.log(e))
        .then(result => {
          paciente.vac1 = Number(result);
          props.setPacientes(listaPacientes);
        });
    }
    if (props.vac2 === 0) {
      await contrato.methods
        .timestampSegundaDose()
        .call({ from: props.endereco })
        .catch(e => console.log(e))
        .then(result => {
          paciente.vac2 = Number(result);
          props.setPacientes(listaPacientes);
        });
    }
  }

  async function aplicarPrimeiraDose() {
    const momentoAtual = new Date();
    try {
      await contrato.methods
        .aplicarPrimeiraDose(momentoAtual.getTime())
        .send({ from: props.endereco })
        .catch(e => console.log(e))
        .then(result => {
          if (result.status) {
            setToggle(prevValue => !prevValue);
            setErro("");
          }
        });
    } catch (error) {
      console.log(error);
      setErro("Cidadão não cadastrado.");
    }
  }

  async function aplicarSegundaDose() {
    const momentoAtual = new Date();
    try {
      await contrato.methods
        .aplicarSegundaDose(momentoAtual.getTime())
        .send({ from: props.endereco })
        .catch(e => console.log(e))
        .then(result => {
          if (result.status) {
            setToggle(prevValue => !prevValue);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (props.vac1 === 0 || props.vac2 === 0) {
      timestampDoses();
    }
  }, [toggle]);

  return (
    <div className='card'>
      <div className='header'>
        <h4>{props.nome}</h4>
      </div>
      <div className='main2'>
        {props.vac1 === 0 ? <p>Nenhuma dose registrada.</p> : ""}
        {props.vac1 !== 0 ? <p>Dose 1: {format(data1, "dd/MM/yyyy")}</p> : ""}
        {props.vac2 !== 0 ? <p>Dose 2: {format(data2, "dd/MM/yyyy")}</p> : ""}
        <p className='erro'>{erro}</p>
        {props.vac1 === 0 ? (
          <button onClick={aplicarPrimeiraDose}>Registrar dose</button>
        ) : (
          ""
        )}
        {props.vac2 === 0 && props.vac1 !== 0 ? (
          <button onClick={aplicarSegundaDose}>Registrar dose</button>
        ) : (
          ""
        )}
        {props.vac1 !== 0 && props.vac2 !== 0 ? <p>Cidadão imunizado.</p> : ""}
      </div>
    </div>
  );
}
