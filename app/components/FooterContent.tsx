"use client";
import React, { useState } from "react";
import { ModalContent } from "./ModalContent";

export const FooterContent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <p className="font-bold text-center">
        ¿Quieres cambiar a tu Conta? Nos encargamos de llevar a cabo la
        transición de toda tu contabilidad hasta el día de hoy.
      </p>

      <div className="grid grid-cols-1 mb-10 md:mb-0 md:grid-cols-2 md:w1/2 gap-4 ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" bg-green-500 text-white px-6 py-3  rounded-lg font-semibold shadow-md hover:bg-green-600 transition-all hover:cursor-pointer"
        >
          Ver Paquetes
        </button>
        <button className="bg-blue-700 text-white px-6 py-3  rounded-lg font-semibold shadow-md hover:bg-blue-600 transition-all hover:cursor-pointer">
          Agenda una cita con un contador experto
        </button>
      </div>
      <ModalContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
