import "./style.css";
import Web3 from "web3";
import { useRef, useState } from "react";

export default function AddUser(props) {
  const inputRef = useRef();
  const [mensagem, setMensagem] = useState("");
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  const contrato = new web3.eth.Contract(props.abi, props.enderecoContrato);

  async function addCidadao() {
    try {
      await contrato.methods
        .cadastrarCidadao(inputRef.current.value)
        .send({ from: props.enderecoAdm })
        .catch(console.log)
        .then(() => {
          inputRef.current.value = "";
          setMensagem("Cidadão cadastrado com sucesso!");
        });
    } catch (error) {
      setMensagem("Ocorreu um erro.");
    }
  }

  return (
    <div className={props.addUser ? "overlay" : "esconder"}>
      <div className='stats'>
        <button
          onClick={() => {
            props.setAddUser(false);
            setMensagem("");
            inputRef.current.value = "";
          }}
          className='fecharModal'
        >
          &times;
        </button>
        <h1>Adicionar Cidadão</h1>
        <i className='fas fa-users'></i>
        <div className='inputadd'>
          <input ref={inputRef} type='text' />
          <i onClick={addCidadao} class='fas fa-plus'></i>
        </div>
        <p
          className={
            mensagem === "Ocorreu um erro." ? "mensagemerro" : "mensagemsucesso"
          }
        >
          {mensagem}
        </p>
      </div>
    </div>
  );
}
