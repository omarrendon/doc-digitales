import { CardContent } from "./components/CardContent/CardContent";
import { Calculator } from "lucide-react";
import { CirclePercent } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";
import { Receipt } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center  min-h-screen p-8 pb-15 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header>
          <h1>
            tu <span>Conta</span>
          </h1>
          <p>Tu Contador en Línea</p>
          <p>
            <strong>Nuevo servicio!</strong>
          </p>
          <p>Encárgate de tu negocio, nosotros de tu contabilidad.</p>
        </header>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
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

          <section>
            <video controls>
              {/* <source src="video.mp4" type="video/mp4"> */}
              Tu navegador no soporta el video.
            </video>
          </section>

          <section>
            <h2>Beneficios</h2>
            {/* <ul>
              <li>
                <strong>Automático:</strong> Ahorra tiempo al eliminar la tarea
                de enviar facturas a tu contador. ¡El proceso es automático!
              </li>
              <li>
                <strong>Servicio Oportuno:</strong> Comunicación más fácil y
                efectiva con tu contador personal.
              </li>
              <li>
                <strong>Simplicidad:</strong> Información contable en tiempo
                real.
              </li>
              <li>
                <strong>Confiable:</strong> Cálculos hechos por uno de nuestros
                contadores expertos asignado especialmente a tu negocio.
              </li>
            </ul> */}
          </section>
          <section>
            <h2>¿Cómo funciona?</h2>
            <ol>
              <li>
                <strong>Paso 1:</strong> Agrega tu FIEL
              </li>
              <li>
                <strong>Paso 2:</strong> Sincroniza tus cuentas bancarias
              </li>
              <li>
                <strong>Paso 3:</strong> Recibe mensualmente tu declaración de
                impuestos
              </li>
            </ol>
          </section>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <p>
            ¿Quieres cambiar a tu Conta? Nos encargamos de llevar a cabo la
            transición de toda tu contabilidad hasta el día de hoy.
          </p>
          <button>Ver Paquetes</button>
          <button>Agenda una cita con un contador experto</button>
        </footer>
      </div>
    </>
  );
}
