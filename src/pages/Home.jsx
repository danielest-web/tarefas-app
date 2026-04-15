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

  const [tarefaEditando, setTarefaEditando] = React.useState(null);

  const editarTarefa = (tarefa) => {
    //console.log("EDITANDO: " ,tarefa)
    setTarefaEditando(tarefa);
  };

  const cancelarEdicao = () => {
    setTarefaEditando(null);
  };

  const atualizarTarefa = (tarefaAtualizada) => {
    SetTarefas(
      tarefas.map((t) => (t.id === tarefaAtualizada.id ? tarefaAtualizada : t)),
    );
    setTarefaEditando(null);
  };

  const adicionarTarefa = (newTarefa) => {
    SetTarefas([...tarefas, newTarefa]);
    console.log(newTarefa);
  };

  return (
    <div>
      <h1>Minhas Tarefas</h1>
      <TarefaForm
        adicionarTarefa={adicionarTarefa}
        tarefaEditando={tarefaEditando}
        atualizarTarefa={atualizarTarefa}
        cancelarEdicao={cancelarEdicao}
      />
      <TarefaLista tarefas={tarefas} editarTarefa={editarTarefa} />
    </div>
  );
};

export default Home;
