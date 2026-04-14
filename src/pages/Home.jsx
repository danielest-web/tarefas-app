import React from "react";
import TarefaLista from "../components/TarefaLista";
import TarefaForm from "../components/TarefaForm";

const Home = () => {
  const [tarefas, SetTarefas] = React.useState([
    //tarefas → os dados
    //setTarefas → quem altera os dados
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

  const adicionarTarefa = (newTarefa) => {
    SetTarefas([...tarefas, newTarefa]);
  };

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <TarefaForm adicionarTarefa={adicionarTarefa} />
      <TarefaLista tarefas={tarefas} />
    </div>
  );
};

export default Home;
