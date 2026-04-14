const TarefaItem = ({ tarefa }) => {
  return (
    <div style={{ margin: "10px", padding: "10px" }}>
      <h3>{tarefa.titulo}</h3>
      <p>{tarefa.descricao}</p>
      <p>Data: {tarefa.data}</p>
      <p>Status: {tarefa.status}</p>
    </div>
  );
};

export default TarefaItem;