import { IEvento } from "../../interfaces/IEvento";
import Evento from "../Evento";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";

const ListaDeEventos: React.FC<{
  eventos: IEvento[];
  aoAlterarStatus: (id: number) => void;

  aoFiltroAplicado: (data: Date | null) => void;
}> = ({ eventos, aoAlterarStatus, aoFiltroAplicado }) => {
  return (
    <section>
      <Filtro aoFiltroAplicado={aoFiltroAplicado} />
      <div className={style.Scroll}>
        {eventos.map((evento) => (
          <Evento
            aoAlterarStatus={aoAlterarStatus}
            evento={evento}
            key={evento.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
