import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AcademyLink() {

  const { isCapital } = useSelector(state => state.switcher)

  return (
    <main className={`w-[600px] flex flex-col items-center my-4 ${isCapital ? 'bg-accent' : 'bg-primary'} rounded-3xl`}>
      <div className="w-[500px] flex flex-col p-5 gap-4">
        <span className="font-light text-subtitle text-white">Únete a la academia</span>
        <aside className="flex flex-col gap-1 font-medium text-title text-white">
          <span>Aprende a invertir como un</span>
          <span>experto</span>
        </aside>
        <aside className="flex items-end justify-between">
          <Link to='/onboarding/' className="w-[120px] h-8 bg-white rounded-full flex justify-center items-center">
            <span className={`font-medium text-base ${isCapital ? 'text-accent' : 'text-primary'}`}>Comenzar hoy</span>
          </Link>
          <img
            src={`/assets/illustration-${isCapital ? 'blue' : 'orange'}.svg`}
            alt="illustration"
            className="size-24 -mt-7 -mb-5 mr-5"
          />
        </aside>
      </div>
    </main>
  )
}
