import { useSetRecoilState } from "recoil";
import { eventosState } from "../state/atom";
import { IEvento } from "../interfaces/IEvento";

const useEventoCheckbox = (evento: IEvento) => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(eventosState);

  const handleClick = () => {
    const eventoAlterado = { ...evento, completo: !evento.completo };
    setListaDeEventos((listaAntiga) =>
      listaAntiga.map((e) => (e.id === eventoAlterado.id ? eventoAlterado : e))
    );
  };

  return {
    handleClick,
    completo: evento.completo,
  };
};

export default useEventoCheckbox;
