import React from "react";

const TarefaForm = ({ adicionarTarefa, tarefaEditando, atualizarTarefa , cancelarEdicao}) => {

  const [titulo, setTitulo] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [data, setData] = React.useState("");
  const [status, setStatus] = React.useState("pendente");

  React.useEffect(()=>{
    if(tarefaEditando){
      setTitulo(tarefaEditando.titulo);
      setDescricao(tarefaEditando.descricao);
      setData(tarefaEditando.data);
      setStatus(tarefaEditando.status);
    }
  },[tarefaEditando]);

  const handleSubmit = ( event ) => {
    event.preventDefault();

    const newTarefa = {
      id: tarefaEditando ? tarefaEditando.id : Date.now(),
      titulo,
      descricao,
      data,
      status,
    };

    if(tarefaEditando){
      atualizarTarefa(newTarefa)
 
    }else{
      adicionarTarefa(newTarefa)
    }

    cancelarEdicao();

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
      <button type="submit">{tarefaEditando ? "Salvar" : "Adicionar"}</button>
    </form>
  );
};

export default TarefaForm