import React from "react";
import { IEvento } from "../../interfaces/IEvento";
import style from "./Evento.module.scss";
import EventoCheckbox from "./EventoCheckbox";
import useDeleteEvento from "../../hooks/useDeleteEvento";
import { useEventList } from "../../hooks/useEventList";

const Evento: React.FC<{
  evento: IEvento;
}> = ({ evento }) => {
  const eventos = useEventList;
  const estilos = [style.Evento];

  const deleteEvento = useDeleteEvento();

  if (evento.completo) {
    estilos.push(style.completo);
  }

  const handleDelete = (evento: IEvento) => {
    deleteEvento(evento);
  };

  return (
    <div className={estilos.join(" ")}>
      <EventoCheckbox evento={evento} />
      <div className="cards-info">
        <h3 className={style.descricao}>
          {evento.descricao} - {evento.inicio.toLocaleDateString()}
        </h3>
      </div>
      <i
        className="far fa-times-circle fa-2x"
        onClick={() => handleDelete(evento)}
      ></i>
    </div>
  );
};

export default Evento;
