import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <header className="w-screen h-fit flex flex-col items-center justify-center gap-10">
      <div className="w-screen flex justify-between px-10 py-4">
        <Link to='/'>IUPI</Link>
        <Link to='/login'>Ingresar</Link>
      </div>

     {/*  <section className="flex items-center animate-marquee  overflow-hidden whitespace-nowrap">
        😃
        <article className="flex flex-col items-center gap-2 mx-3">
          <span>Fintech App</span>
          <span>Welcome</span>
        </article>
        😃
      </section> */}
    </header>
  )
}
