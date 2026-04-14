import React from "react";

const TarefaForm = ({ adicionarTarefa }) => {
  const [titulo, setTitulo] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [data, setData] = React.useState("");
  const [status, setStatus] = React.useState("pendente");

  const handleSubmit = ( event ) => {
    event.preventDefault();

    const newTarefa = {
      id: Date.now(),
      titulo,
      descricao,
      data,
      status,
    };

    adicionarTarefa(newTarefa);
    //limpar formulario

    setTitulo("");
    setDescricao("");
    setData("");
    setStatus("pendente");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={({ target }) => setTitulo(target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={({ target }) => setDescricao(target.value)}
      />
      <input
        type="date"
        value={data}
        onChange={({ target }) => setData(target.value)}
      />
      <select value={status} onChange={({ target }) => setStatus(target.value)}>
        <option value="pendente">Pendente</option>
        <option value="concluida">Concluido</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TarefaForm