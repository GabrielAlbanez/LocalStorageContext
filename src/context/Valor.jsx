import React, { createContext, useContext, useEffect, useState } from "react";

const Valor = createContext();

export function ValorProvider({ children }) {
  const [price, setPrice] = useState(null);
  const [name, setName] = useState(null);

  //esse useEfect vai pegar o valor setado e vai salvar nessa var savedPrice e savedName
  //ai faz uma verificação caso exita um valor salvo na vairiavek setPRice e nome
  useEffect(() => {
    const savedPrice = localStorage.getItem("price");
    const savedName = localStorage.getItem("name");

    if (savedPrice) {
      setPrice(savedPrice);
    }
    if (savedName) {
      setName(savedName);
    }
  }, []);

  //ESSE useEfect faz a verificação para ver se ja tem um valor existente caso n tiver ele vai fazer o set price
  //com o novo valor passado
  useEffect(() => {
    if (price !== null) {
      localStorage.setItem("price", price);
    }
  }, [price]);

  useEffect(() => {
    if (name !== null) {
      localStorage.setItem("name", name);
    }
  }, [name]);

  return (
    <Valor.Provider value={{ price, setPrice, name, setName }}>
      {children}
    </Valor.Provider>
  );
}

export function useValor() {
  const context = useContext(Valor);
  return context;
}
