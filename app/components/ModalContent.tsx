"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { ModalConfirmation } from "./ModalConfirmation";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ModalContent: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectPackage = () => {
    setIsOpen(false);
    setIsSelected(!isSelected);
  };

  return (
    <>
      <ModalConfirmation isSelected={isSelected} setIsSeleted={setIsSelected} />
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center  bg-gray-50 bg-opacity-20">
          <div className="bg-white p-6 rounded-lg shadow-xl h-[700px] md:h-[900px] overflow-y-auto   w-12/12 md:w-2/3 lg:w-1/3 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-blue-700 size-8"
            >
              ✖
            </button>

            <h2 className="text-xl font-bold text-center mb-4">
              Paquetes disponibles
            </h2>

            <div className="grid grid-cols-1 gap-2">
              <motion.div
                // style={ball}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col items-center ">
                  <h3 className="text-lg text-blue-900 font-bold ">
                    Emprendedor{" "}
                  </h3>
                  <div className="border-t border-gray-500 my-5 min-w-3xs md:min-w-md "></div>
                  <div>
                    $ <span className="font-bold text-4xl">1,000 </span> +
                    IVA/mes
                  </div>
                  <div className="pt-2">
                    <p className="font-light">
                      1 - 30 movimientos bancarios al mes
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={handleSelectPackage}
                      className="bg-blue-600 text-white px-8 py-3 mt-2 rounded-lg font-semibold shadow-md hover:bg-blue-400 transition-all hover:cursor-pointer"
                    >
                      Elegir
                    </button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                // style={ball}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col items-center ">
                  <h3 className="text-lg text-blue-900 font-bold ">
                    Emprendedor Plus{" "}
                  </h3>
                  <div className="border-t border-gray-500 my-5 min-w-3xs md:min-w-md "></div>
                  <div>
                    $ <span className="font-bold text-4xl">2,000 </span> +
                    IVA/mes
                  </div>
                  <div className="pt-2">
                    <p className="font-light">
                      31 - 100 movimientos bancarios al mes
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={handleSelectPackage}
                      className="bg-blue-600 text-white px-8 py-3 mt-2 rounded-lg font-semibold shadow-md hover:bg-blue-400 transition-all hover:cursor-pointer"
                    >
                      Elegir
                    </button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                // style={ball}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col items-center ">
                  <h3 className="text-lg text-blue-900 font-bold ">
                    Empresarial{" "}
                  </h3>
                  <div className="border-t border-gray-500 my-5 min-w-3xs md:min-w-md "></div>
                  <div>
                    $ <span className="font-bold text-4xl">3,000 </span> +
                    IVA/mes
                  </div>
                  <div className="pt-2">
                    <p className="font-light">
                      101 - 300 movimientos bancarios al mes
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={handleSelectPackage}
                      className="bg-blue-600 text-white px-8 py-3 mt-2 rounded-lg font-semibold shadow-md hover:bg-blue-400 transition-all hover:cursor-pointer"
                    >
                      Elegir
                    </button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                // style={ball}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <div className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col items-center ">
                  <h3 className="text-lg text-blue-900 font-bold mb-2 ">
                    Select{" "}
                  </h3>
                  <div className="border-t border-gray-500 min-w-3xs md:min-w-md  mb-2"></div>
                  <div>
                    <span className="font-bold text-xl text-center">
                      Contactanos para hacer un paquete a tus necesidades
                    </span>
                  </div>
                  <div className="pt-2">
                    <p className="font-light">
                      +300 movimientos bancarios al mes
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={handleSelectPackage}
                      className="bg-blue-600 text-white px-8 py-3 mt-2 rounded-lg font-semibold shadow-md hover:bg-blue-400 transition-all hover:cursor-pointer"
                    >
                      Cotizar paquete
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
