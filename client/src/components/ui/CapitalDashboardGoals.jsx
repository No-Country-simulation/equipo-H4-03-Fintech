export default function Goals() {
  return (
    <div className="w-[600px] flex flex-col items-center my-4">
      <div className="w-[500px] flex flex-col gap-5">
        <span className="font-medium text-subtitle text-black">Objetivos</span>
        <div className="w-[500px] flex justify-center items-center gap-2.5 bg-white p-5 rounded-xl shadow-custom2 cursor-pointer">
          <span className="font-normal text-base text-center text-[#797979]">Aún no tenes objetivos creados. Podes configurar tu primer objetivo desde la sección “Billetera” o clickeando aquí.</span>
        </div>
      </div>
    </div>
  )  
}
