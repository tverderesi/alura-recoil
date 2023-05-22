import { useState } from "react";
import style from "./Formulario.module.scss";
import { obterId } from "../../utils/counter";
import { useAdicionarEvento } from "../../hooks/useAdicionarEvento";

const Formulario: React.FC = () => {
  const adicionarEvento = useAdicionarEvento();

  const [state, setState] = useState({
    descricao: "",
    dataInicio: "",
    horaInicio: "",
    dataFim: "",
    horaFim: "",
  });

  const { descricao, dataInicio, horaInicio, dataFim, horaFim } = state;

  const handleFormChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const montarData = (data: string, hora: string) => {
    const dataString = data.slice(0, 10);
    return new Date(`${dataString}T${hora}`);
  };

  const submeterForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const evento = {
      id: obterId(),
      descricao,
      inicio: montarData(dataInicio, horaInicio),
      fim: montarData(dataFim, horaFim),
      completo: false,
    };

    adicionarEvento(evento);
    setState({
      descricao: "",
      dataInicio: "",
      horaInicio: "",
      dataFim: "",
      horaFim: "",
    });
  };
  return (
    <form className={style.Formulario} onSubmit={submeterForm}>
      <h3 className={style.titulo}>Novo evento</h3>

      <label>Descrição</label>
      <input
        type="text"
        name="descricao"
        id="descricao"
        className={style.input}
        onChange={handleFormChange}
        placeholder="Descrição"
        value={descricao}
        autoComplete="off"
        required
      />

      <label>Data de início</label>
      <div className={style.inputContainer}>
        <input
          type="date"
          name="dataInicio"
          className={style.input}
          onChange={handleFormChange}
          value={dataInicio}
          required
        />
        <input
          type="time"
          name="horaInicio"
          className={style.input}
          onChange={handleFormChange}
          value={horaInicio}
          required
        />
      </div>

      <label>Data de término</label>
      <div className={style.inputContainer}>
        <input
          type="date"
          name="dataFim"
          className={style.input}
          onChange={handleFormChange}
          value={dataFim}
          required
        />
        <input
          type="time"
          name="horaFim"
          className={style.input}
          onChange={handleFormChange}
          value={horaFim}
          required
        />
      </div>

      <button className={style.botao}>Salvar</button>
    </form>
  );
};

export default Formulario;
