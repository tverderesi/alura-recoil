import { selector } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async () => {
    const respostaHttp = await fetch(
      "https://my-json-server.typicode.com/tverderesi/alura-recoil/eventos"
    );
    const eventosJson: IEvento[] = await respostaHttp.json();
    console.log(eventosJson);
    return eventosJson.map((evento) => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim),
    }));
  },
});
