import "./style.css";
import { Bar } from "react-chartjs-2";

export default function Stats(props) {
  const vacinados1a = props.pacientes.filter(item => item.vac1 !== 0).length;
  const naoVacinados1a = props.pacientes.length - vacinados1a;
  const vacinados2a = props.pacientes.filter(item => item.vac2 !== 0).length;
  const naoVacinados2a = props.pacientes.length - vacinados2a;

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
    <div className={props.modalAberto ? "overlay" : "esconder"}>
      <div className='stats'>
        <button
          onClick={() => props.setModalAberto(false)}
          className='fecharModal'
        >
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
  );
}
