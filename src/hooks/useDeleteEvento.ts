import { useSetRecoilState } from "recoil";
import { eventosState } from "../state/atom";
import { IEvento } from "../interfaces/IEvento";

const useDeleteEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(eventosState);

  const deleteEvento = (evento: IEvento) => {
    setListaDeEventos((listaAntiga) =>
      listaAntiga.filter((e) => e.id !== evento.id)
    );
  };

  return deleteEvento;
};

export default useDeleteEvento;
