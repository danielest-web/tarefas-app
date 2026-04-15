const TarefaItem = ({ tarefa, editarTarefa}) => {
  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <h3>{tarefa.titulo}</h3>
      <p>{tarefa.descricao}</p>
      <p>Data: {tarefa.data}</p>
      <p>Status: {tarefa.status}</p>
      <button onClick={() => editarTarefa(tarefa)}>Editar</button>
    </div>
  );
};

export default TarefaItem;
