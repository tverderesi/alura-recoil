import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const eventoState = atom<IEvento | undefined>({
  key: "eventoState",
  default: undefined,
});

export const eventosState = atom<IEvento[]>({
  key: "eventosState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2023-05-24T09:00"),
      fim: new Date("2023-05-25T13:00"),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2023-05-22T09:00"),
      fim: new Date("2023-05-24T11:00"),
      completo: false,
      id: 1642342959,
    },
    {
      descricao: "Meeting with Team",
      inicio: new Date("2023-05-23T14:00"),
      fim: new Date("2023-05-25T16:00"),
      completo: false,
      id: 1642343198,
    },
  ],
});

export const filtroState = atom<Date | null>({
  key: "filtroState",
  default: null,
});
