import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../reducers";
import { useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
