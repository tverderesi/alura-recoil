import React from "react";
import { IEvento } from "../../../interfaces/IEvento";
import useEventoCheckbox from "../../../hooks/useEventoCheckbox";

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  const { handleClick, completo } = useEventoCheckbox(evento);

  const estilos = ["far", "fa-2x", completo ? "fa-check-square" : "fa-square"];

  return <i className={estilos.join(" ")} onClick={handleClick}></i>;
};

export default EventoCheckbox;
