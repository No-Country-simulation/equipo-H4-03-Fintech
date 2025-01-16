import FormInput from "../ui/FormInput";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";


export function Recovery01({setComponent}) {
  return (
    <form className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-full">
      <header >
        <Link to="/"><IoIosArrowBack className="text-title my-2 mx-0 text-primary"/></Link>
        <h1 className="text-title mb-4 text-center text-primary">¿Olvidaste tu contraseña?</h1>
      </header>
      <section className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-6">
      <p className="text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        ullamcorper quis mauris ut tristique. Donec euismod dui in risus
        tristique, ac lacinia eros consequat.
      </p>
      <FormInput label={"Correo Electrónico"} name={"email"} />
      </div>
      <button className="w-full border border-slate-300 py-2 rounded-3xl m-2" onClick={() => setComponent("recovery02")}>
        ENVIAR CÓDIGO
      </button>
      </section>
    </form>
  );
}
