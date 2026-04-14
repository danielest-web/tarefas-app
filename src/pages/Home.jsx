import React from "react";
import TarefaLista from "../components/TarefaLista";
const Home = () => {
  const [tarefas, SetTarefas] = React.useState([
    {
      id: 1,
      titulo: "Estudar React",
      descricao: "Aprender useState",
      data: "2026-04-14",
      status: "pendente",
    },
    {
      id: 2,
      titulo: "Treinar lógica",
      descricao: "Resolver exercícios",
      data: "2026-04-15",
      status: "concluida",
    },
  ]);

  return (
    <div>
      <h1>Minhas Tarefas</h1>

      <TarefaLista  tarefa={tarefas}/>
    </div>
  );
};

export default Home;
