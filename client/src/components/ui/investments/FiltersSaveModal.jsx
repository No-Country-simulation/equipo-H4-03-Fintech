export default function FiltersSaveModal({ show, handler }) {
  return (
    <div className={`${show ?
        `
      w-screen h-screen flex flex-col fixed top-0 left-0
      justify-center items-center bg-[#ffffffaa] z-50 
      `
        : 'hidden'
      }`}>
      <div className="flex flex-col bg-background rounded-3xl p-8 gap-5">

        <div className="flex flex-col justify-center gap-5 self-stretch">
          <span className="font-medium text-subtitle leading-[19px] text-center text-black">
            Nombre su configuración de filtros
          </span>
          <input className={`
          flex flex-col justify-between self-stretch h-[55px] rounded-lg outline-none px-4
          `} />
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => handler(false)}
            className="w-[134px] h-[42px] flex justify-center items-center bg-primary rounded-3xl"
          >
            <span className="font-medium text-base text-white">Cancelar</span>
          </button>

          <button
            onClick={() => handler(false)}
            className="w-[134px] h-[42px] flex justify-center items-center bg-primary rounded-3xl"
          >
            <span className="font-medium text-base text-white">Guardar</span>
          </button>
        </div>
      </div>
    </div>
  )
}
