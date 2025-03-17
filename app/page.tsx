import { Calculator } from "lucide-react";
import { CirclePercent } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";
import { Receipt } from "lucide-react";
import { SquarePen } from "lucide-react";
import { CardContent } from "./components/CardContent";
import { BenefitsContent } from "./components/BenefitsContent";
import { RefreshCw } from "lucide-react";
import { FileDown } from "lucide-react";
import { FooterContent } from "./components/FooterContent";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  min-h-screen p-8 pb-15  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className="flex flex-col mt-20 md:mt-10">
          <h1 className="text-4xl md:text-8xl">
            Tu <span className="text-blue-700 font-bold ">Conta</span>
          </h1>
          <span className="text-start md:text-end font-medium">
            Tu Contador en Línea
          </span>
          <div className="mt-5  ">
            <p className="text-center">
              <strong>¡Nuevo servicio!</strong>
            </p>
            <h2 className="text-start mt-2 md:text-center ">
              Encárgate de tu negocio, nosotros de tu contabilidad.
            </h2>
          </div>
        </header>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-20">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl w-full group ">
            <CardContent
              title="Hacemos tu contabilidad mensual"
              icon={<Calculator size={"82px"} color="#3856DC" />}
            />
            <CardContent
              title="Calculamos tus impuestos"
              icon={<CirclePercent size={"82px"} color="#3856DC" />}
            />
            <CardContent
              title="Presentamos tus declaraciones SAT"
              icon={<BadgeDollarSign size={"82px"} color="#3856DC" />}
            />
            <CardContent
              title="Cálculo, timbrado y énvio de nómina"
              icon={<Receipt size={"82px"} color="#3856DC" />}
            />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-8xl w-full group mt-4 ">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/OG4hQm95_U0"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <BenefitsContent />
          </section>
          <section className="w-full h-full mt-6 grid grid-cols grid-cols-1 md:grid-cols-3 rounded-md bg-blue-700 p-4 ">
            <div className="text-white flex flex-col items-center p-5">
              <SquarePen size={"100px"} color="#ffff" />
              <strong className="mt-3 ">Paso 1</strong>
              <p className="font-bold text-center">Agrega tu FIEL</p>
            </div>

            <div className="text-white flex flex-col items-center p-5">
              <RefreshCw size={"100px"} color="#ffff" />
              <strong className="mt-3 ">Paso 2</strong>
              <p className="font-bold text-center">
                {" "}
                Sincroniza tus cuentas bancarias
              </p>
            </div>
            <div className="text-white flex flex-col items-center p-5">
              <FileDown size={"100px"} color="#ffff" />
              <strong className="mt-3 ">Paso 3</strong>
              <p className="font-bold text-center">
                Recibe mensualmente tu declaración de impuestos
              </p>
            </div>
          </section>
        </main>
        <footer className="grid grid-cols-1 mt-50  md:mb-20 md:grid-cols-1 md:mt-20 lg:grid-cols-1 gap-8 max-w-8xl w-full group ">
          <FooterContent />
        </footer>
      </div>
    </>
  );
}
