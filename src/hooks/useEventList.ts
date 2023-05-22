import { useRecoilValue, useSetRecoilState } from "recoil";
import { eventosState } from "../state/atom";

export const useEventList = () => {
  return useRecoilValue(eventosState);
};

export const useSetEventList = () => {
  return useSetRecoilState(eventosState);
};
