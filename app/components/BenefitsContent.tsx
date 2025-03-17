"use client";
import React from "react";
import { BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

export const BenefitsContent: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-xl mb-4">Beneficios</h2>

      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex flex-row items-center ">
          <BadgeCheck color="#84FC7E" size={"32px"} />
          <h3 className="font-bold ml-2"> Automático</h3>
        </div>
        <p className="font-medium ml-10 text-start mb-4">
          Ahorra tiempo al eliminar la tarea de enviar facturas a tu contador.
          ¡El proceso es automático!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex flex-row items-center ">
          <BadgeCheck color="#84FC7E" size={"32px"} />
          <h3 className="font-bold ml-2"> Servicio Oportuno</h3>
        </div>
        <p className="font-medium ml-10 text-start mb-4">
          Comunicación más fácil y efectiva con tu contador personal.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex flex-row items-center ">
          <BadgeCheck color="#84FC7E" size={"32px"} />
          <h3 className="font-bold ml-2"> Simplicidad</h3>
        </div>
        <p className="font-medium ml-10 text-start mb-4">
          Información contable en tiempo real.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 2.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex flex-row items-center ">
          <BadgeCheck color="#84FC7E" size={"32px"} />
          <h3 className="font-bold ml-2">Confiable</h3>
        </div>
        <p className="font-medium ml-10 text-start mb-4">
          Cálculos hechos por uno de nuestros contadores expertos asignado
          especialmente a tu negocio.
        </p>
      </motion.div>
    </div>
  );
};
