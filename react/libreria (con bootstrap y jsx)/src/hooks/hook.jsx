// hooks/useLibros.js
import { useContext } from "react";
import LibroContext from "../context/context";

const useLibros = () => {
  const context = useContext(LibroContext);
  return context;
};

export default useLibros;
