import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import FormInput from "../ui/FormInput";
export function Recovery03({ setComponent }) {
  return (
    <form className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-full">
      <header>
        <div className="flex flex-row justify-left">
          <IoIosArrowBack
            className="text-title my-2 mx-0 text-primary"
            onClick={() => setComponent("recovery02")}
          />
        </div>
        <h1 className="text-title text-center text-primary">Cambiar Contraseña</h1>
        <p className="text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ullamcorper quis mauris ut tristique.
        </p>
      </header>
      <main className="flex flex-col w-full justify-between h-full">
        <div>
          <FormInput
            label={"Nueva Contraseña"}
            name={"email"}
            type={"password"}
          />
          <FormInput
            label={"Repetir Contraseña"}
            name={"email_repeat"}
            type={"password"}
          />
        </div>

        <button className="w-full border border-slate-300 py-2 rounded-3xl m-2" onClick={()=>setComponent("recovery04")}>
          CAMBIAR CONTRASEÑA
        </button>
      </main>
    </form>
  );
}
