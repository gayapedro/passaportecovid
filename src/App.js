import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import AddUser from "./components/AddUser";
import abi from "./utils/abi.json";
import { useState } from "react";
import lista from "./utils/listaCidadaos.json";
import enderecoContrato from "./utils/contractAddress.json";
import enderecoAdm from "./utils/enderecoAdm.json";

function App() {
  const [pacientes, setPacientes] = useState(lista);
  const [modalAberto, setModalAberto] = useState(false);
  const [addUser, setAddUser] = useState(false);

  return (
    <div className='App'>
      <Stats
        pacientes={pacientes}
        modalAberto={modalAberto}
        setModalAberto={setModalAberto}
      />
      <AddUser
        abi={abi}
        enderecoContrato={enderecoContrato["address"]}
        enderecoAdm={enderecoAdm["address"]}
        addUser={addUser}
        setAddUser={setAddUser}
      />
      <Header
        lista={lista}
        setPacientes={setPacientes}
        setModalAberto={setModalAberto}
        setAddUser={setAddUser}
      />
      <main>
        {pacientes.map(item => {
          return (
            <Card
              nome={item.nome}
              vac1={item.vac1}
              vac2={item.vac2}
              endereco={item.endereco}
              pacientes={pacientes}
              setPacientes={setPacientes}
              abi={abi}
              enderecoContrato={enderecoContrato["address"]}
            />
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
