import { useSetRecoilState } from "recoil";
import { eventosState } from "../state/atom";
import { IEvento } from "../interfaces/IEvento";

export const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(eventosState);
  return (evento: IEvento) => {
    if (evento.fim > evento.inicio) {
      setListaDeEventos((eventos) => [...eventos, evento]);
    } else {
      alert("Data de início deve ser menor que data de fim");
    }
  };
};
