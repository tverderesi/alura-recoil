import React from "react";
import { IEvento } from "../../interfaces/IEvento";
import style from "./Calendario.module.scss";
import ptBR from "./localizacao/ptBR.json";
import Kalend, { CalendarView } from "kalend";
import { useSetRecoilState } from "recoil";
import { eventosState } from "../../state/atom";
import "kalend/dist/styles/index.css";
import { useEventList } from "../../hooks/useEventList";

interface IKalendEvento {
  id?: number;
  startAt: string;
  endAt: string;
  summary: string;
  color: string;
}

const Calendario: React.FC = () => {
  const eventos = useEventList();
  const setEventos = useSetRecoilState(eventosState);
  const eventosKalend = new Map<string, IKalendEvento[]>();

  const handleEventDrag = (newevent) => {
    setEventos((eventosAntigos) => {
      const novosEventos = eventosAntigos.map((evento) => {
        if (evento.id === newevent.id) {
          return {
            ...evento,
            inicio: new Date(newevent.startAt),
            fim: new Date(newevent.endAt),
          };
        }

        return evento;
      });

      return novosEventos;
    });
  };

  eventos.forEach((evento) => {
    const chave = evento.inicio.toISOString().slice(0, 10);
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, []);
    }
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: "blue",
    });
  });
  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        calendarIDsHidden={["work"]}
        language={"customLanguage"}
        customLanguage={ptBR}
        onEventDragFinish={handleEventDrag}
      />
    </div>
  );
};

export default Calendario;
