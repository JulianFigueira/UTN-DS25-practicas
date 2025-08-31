import { createContext} from "react";

const LibroContext = createContext();

export const LibroProvider = ({ children, value }) => {
  return (
    <LibroContext.Provider value={value}>
      {children}
    </LibroContext.Provider>
  );
};

export default LibroContext;