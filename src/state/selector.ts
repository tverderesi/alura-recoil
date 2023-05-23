import { selector } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { eventosState, filtroState } from "./atom";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroState);
    const eventos = get(eventosState);

    if (!filtro || !filtro.data) {
      return eventos;
    }

    const eventosFiltrados = eventos.filter((evento) => {
      const eventoData = new Date(evento.inicio);
      return (
        eventoData.toISOString().slice(0, 10) ===
        filtro.data?.toISOString().slice(0, 10)
      );
    });

    return eventosFiltrados;
  },
});

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async () => {
    const respostaHttp = await fetch(`${process.env.REACT_APP_JSON_SERVER}`);
    const eventosJson: IEvento[] = await respostaHttp.json();
    console.log(eventosJson);
    return eventosJson.map((evento) => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim),
    }));
  },
});
