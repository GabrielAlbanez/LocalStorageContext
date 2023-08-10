import React from "react";
import { useValor } from "../context/Valor";
import { Link } from "react-router-dom";

export default function Home() {
  const { price, setPrice,name,setName } = useValor();

  return (
    <div className="h-screen w-screen flex items-center flex-col justify-center gap-5">
      <div className="flex flex-col gap-1 ">
        <label htmlFor="nome">Nome</label>
        <input
        onChange={(e)=>{
            setName(e.target.value)
        }}
          type="text"
          id="nome"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        />
        <h1>Name: {name}</h1>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="saldo">Saldo</label>
        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="text"
          id="saldo"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <h1>preço : {price}</h1>
      </div>
      <Link to={"/carrinho"}>Carrinho</Link>
      <Link to={"/compra"}>Compra</Link>
    </div>
  );
}
