import { useRecoilValue } from "recoil";
import { eventosFiltradosState } from "../state/selector";

export const useEventList = () => {
  return useRecoilValue(eventosFiltradosState);
};
