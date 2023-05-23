import style from "./App.module.scss";
import Card from "./components/Card";
import Formulario from "./components/Formulario";

import Calendario from "./components/Calendario";
import ListaDeEventos from "./components/ListaDeEventos";
import { useEventList, useSetEventList } from "./hooks/useEventList";
import { useFiltro, useSetFiltro } from "./hooks/useFilter";

function App() {
  const eventos = useEventList();
  const setEventos = useSetEventList();
  const filtro = useFiltro();
  const setFiltro = useSetFiltro();
  console.log(eventos);
  const alterarStatusEvento = (id: number) => {
    setEventos((eventosAntigos) => {
      return eventosAntigos.map((evento) => {
        if (evento.id === id) {
          return { ...evento, completo: !evento.completo };
        }
        return evento;
      });
    });
  };

  const aplicarFiltro = (data: Date | null) => {
    setFiltro(data);
  };

  const filtrados = !filtro
    ? eventos
    : eventos.filter(
        (evento) =>
          filtro!.toISOString().slice(0, 10) ===
          evento.inicio.toISOString().slice(0, 10)
      );

  return (
    <div className={style.App}>
      <div className={style.Coluna}>
        <Card>
          <Formulario />
        </Card>
        <hr />

        <Card>
          <ListaDeEventos
            aoFiltroAplicado={aplicarFiltro}
            aoAlterarStatus={alterarStatusEvento}
            eventos={filtrados}
          />
        </Card>
      </div>
      <div className={style.Coluna}>
        <Calendario eventos={eventos} />
      </div>
    </div>
  );
}

export default App;
