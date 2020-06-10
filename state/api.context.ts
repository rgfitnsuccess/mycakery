import { createContext } from "react";

// TODO: Need to implement state context logic
// TODO: Define HOME_ENDPOINT inside .env
const defaultEnpoint = process.env.HOME_ENDPOINT;

export interface ApiContext {
  defaultEnpoint: string;
}

export const API_DEFAULT_VALUE: ApiContext = {
  defaultEnpoint,
};

export const context = createContext<ApiContext>(API_DEFAULT_VALUE);
