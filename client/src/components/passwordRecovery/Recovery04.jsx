import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function Recovery04({ setComponent }) {
  return (
    <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg w-full max-w-md h-full justify-between">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center items-center w-full">
          <FaRegCircleCheck className="text-8xl text-primary my-4" />
        </div>
        <h1 className="text-title text-center text-primary">
          CONTRASEÑA CAMBIADA
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ullamcorper quis mauris ut tristique.
        </p>
      </div>
      <div className="w-full">
      <Link to="/">
        <button className="w-full border border-slate-300 py-2 rounded-3xl m-2">
          VOLVER AL INICIO
        </button>
      </Link>
      </div>
    </div>
  );
}
