import TarefaItem from "./TarefaItem";

const TarefaLista = ({ tarefas, editarTarefa }) => {
  return (
    <div>
      {tarefas.map((tarefa) => (
        <TarefaItem key={tarefa.id} tarefa={tarefa} editarTarefa={editarTarefa}/>
      ))}
    
    </div>
  );
};

export default TarefaLista;