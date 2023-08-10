import React from "react";
import { useValor } from "../context/Valor";

export default function Compra() {



    const {name,price} = useValor()

  return (
    <div className="h-screen w-screen flex items-center flex-col justify-center gap-5">
      <div className="flex flex-col gap-1 ">
        <h1>Name: {name}</h1>
      </div>
      <div className="flex flex-col gap-1">
        <h1>preço : {price}</h1>
      </div>
    </div>
  );
}
