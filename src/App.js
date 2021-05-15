import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

const pacientes = [
  {
    nome: "Cidadão 1",
    vac1: "20/04/21",
    vac2: null,
  },
  {
    nome: "Cidadão 2",
    vac1: "21/04/21",
    vac2: "21/05/21",
  },
  {
    nome: "Cidadão 3",
    vac1: "23/04/21",
    vac2: null,
  },
  {
    nome: "Cidadão 4",
    vac1: "21/04/21",
    vac2: null,
  },
  {
    nome: "Cidadão 5",
    vac1: "27/04/21",
    vac2: "27/05/21",
  },
  {
    nome: "Cidadão 6",
    vac1: null,
    vac2: null,
  },
  {
    nome: "Cidadão 7",
    vac1: null,
    vac2: null,
  },
  {
    nome: "Cidadão 8",
    vac1: null,
    vac2: null,
  },
  {
    nome: "Cidadão 9",
    vac1: null,
    vac2: null,
  },
  {
    nome: "Cidadão 10",
    vac1: null,
    vac2: null,
  },
];

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        {pacientes.map(item => {
          return <Card nome={item.nome} vac1={item.vac1} vac2={item.vac2} />;
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
