import React from "react";
import { motion } from "motion/react";
import { PackageCheck } from "lucide-react";

interface IModalConfirmationProps {
  isSelected: boolean;
  setIsSeleted: (isOpen: boolean) => void;
}

export const ModalConfirmation: React.FC<IModalConfirmationProps> = ({
  isSelected,
  setIsSeleted,
}) => {
  return (
    <>
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="fixed inset-0 flex items-center justify-center  bg-gray-50 bg-opacity-20">
            <div className="bg-white p-6 rounded-xl shadow-xl h-[400px]  w-3/3 md:w-2/3 lg:w-1/3 relative">
              <button
                onClick={() => setIsSeleted(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-blue-700 size-8"
              >
                ✖
              </button>

              <div className="flex flex-col p-10 items-center">
                <h2 className="text-2xl font-semibold text-center  text-gray-950">
                  ¡Paquete seleccionado éxitosamente!
                </h2>
                <PackageCheck size={"200px"} color="#236d40" />
                <button
                  onClick={() => setIsSeleted(false)}
                  className="bg-green-600 text-white min-w-xs md:min-w-lg px-8 py-3 mt-2 rounded-lg font-semibold shadow-md hover:bg-blue-500 transition-all hover:cursor-pointer"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
