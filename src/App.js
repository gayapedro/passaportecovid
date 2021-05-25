import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import abi from "./utils/abi.json";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import lista from "./utils/listaCidadaos.json";
import enderecoContrato from "./utils/contractAddress.json";

function App() {
  const [pacientes, setPacientes] = useState(lista);
  const [modalAberto, setModalAberto] = useState(false);
  const vacinados1a = pacientes.filter(item => item.vac1 !== 0).length;
  const naoVacinados1a = pacientes.length - vacinados1a;
  const vacinados2a = pacientes.filter(item => item.vac2 !== 0).length;
  const naoVacinados2a = pacientes.length - vacinados2a;

  const data = {
    labels: ["Primeira Dose", "Segunda Dose"],
    datasets: [
      {
        label: "Vacinados",
        data: [vacinados1a, vacinados2a],
        backgroundColor: "rgb(54, 162, 235)",
      },
      {
        label: "Não vacinados",
        data: [naoVacinados1a, naoVacinados2a],
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  return (
    <div className='App'>
      <div className={modalAberto ? "overlay" : "esconder"}>
        <div className='stats'>
          <button onClick={() => setModalAberto(false)} className='fecharModal'>
            &times;
          </button>
          <h1>Estatísticas</h1>
          <div className='graficos'>
            <Bar
              data={data}
              width={1050}
              height={700}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
      <Header setModalAberto={setModalAberto} />
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
