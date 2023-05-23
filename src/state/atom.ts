import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { eventosAsync } from "./selector";

export const eventoState = atom<IEvento | undefined>({
  key: "eventoState",
  default: undefined,
});

export const eventosState = atom({
  key: "eventosState",
  default: eventosAsync,
});

export const filtroState = atom<Date | null>({
  key: "filtroState",
  default: null,
});
