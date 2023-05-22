import { useRecoilValue, useSetRecoilState } from "recoil";
import { filtroState } from "../state/atom";

export const useFiltro = () => {
  return useRecoilValue(filtroState);
};

export const useSetFiltro = () => {
  return useSetRecoilState(filtroState);
};
