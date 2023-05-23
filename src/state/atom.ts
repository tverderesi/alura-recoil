import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { eventosAsync } from "./selector";
import { IFiltro } from "../interfaces/IFiltro";

export const eventoState = atom<IEvento | undefined>({
  key: "eventoState",
  default: undefined,
});

export const eventosState = atom({
  key: "eventosState",
  default: eventosAsync,
});

export const filtroState = atom<IFiltro>({
  key: "filtroState",
  default: {},
});
