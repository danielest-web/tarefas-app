import TarefaItem from "./TarefaItem";

const TarefaLista = ({ tarefas }) => {
  return (
    <div>
      {tarefas.map((tarefa) => (
        <TarefaItem key={tarefa.id} tarefa={tarefa} />
      ))}
    </div>
  );
};

export default TarefaLista;