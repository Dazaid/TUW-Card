import React, { createContext, useContext, useRef } from "react";

// Crea el contexto
const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  // Crea referencias para las secciones
  const homeRef = useRef(null);
  const servicosRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const footterRef = useRef(null);
  const printRef = useRef(null);
  const socialRef = useRef(null);

  // Función para hacer scroll hacia una referencia
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider
      value={{ homeRef, servicosRef, portfolioRef, contactRef, footterRef, printRef, socialRef, scrollToSection }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

// Hook para usar el contexto en otros componentes
export const useScroll = () => useContext(ScrollContext);
